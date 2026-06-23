import { useEffect, useState } from "react";

import { useVoiceSettings, pttKeyLabel } from "../../../context/voiceSettingsContextValue";
import { Button } from "../../Button/Button";
import styles from "./VoiceSettingsPanel.module.css";

export function VoiceSettingsPanel() {
    const { inputMode, pttKey, outputVolume, setInputMode, setPttKey, setOutputVolume } = useVoiceSettings();
    const [recording, setRecording] = useState(false);

    useEffect(() => {
        if (!recording) {
            return;
        }

        const onKeyDown = (e: KeyboardEvent) => {
            e.preventDefault();
            if (e.code === "Escape") {
                setRecording(false);
                return;
            }
            setPttKey(e.code);
            setRecording(false);
        };

        window.addEventListener("keydown", onKeyDown, true);

        return () => {
            window.removeEventListener("keydown", onKeyDown, true);
        };
    }, [recording, setPttKey]);

    const pct = Math.round(outputVolume * 100);

    return (
        <div className={styles.panel}>
            <div className={styles.section}>
                <div className={styles.label}>Input mode</div>
                <div className={styles.modeRow}>
                    <Button
                        variant="control"
                        active={inputMode === "voice"}
                        onClick={() => {
                            setInputMode("voice");
                            setRecording(false);
                        }}
                    >
                        Voice activity
                    </Button>
                    <Button
                        variant="control"
                        active={inputMode === "ptt"}
                        onClick={() => {
                            setInputMode("ptt");
                            setRecording(true);
                        }}
                    >
                        Push to talk
                    </Button>
                </div>
            </div>

            {inputMode === "ptt" && (
                <div className={styles.section}>
                    <div className={styles.label}>Hold-to-talk key</div>
                    <Button
                        variant="control"
                        className={styles.keyBtn}
                        active={recording}
                        onClick={() => setRecording(r => !r)}
                        title="Click, then press the key you want to hold to talk"
                    >
                        {recording ? "Press any key… (Esc to cancel)" : `Hold [ ${pttKeyLabel(pttKey)} ] to talk`}
                    </Button>
                    <div className={styles.hint}>Click the button above, then press the key you want to bind.</div>
                </div>
            )}

            <div className={styles.section}>
                <div className={styles.label}>
                    Output volume <span className={styles.pct}>{pct}%</span>
                </div>
                <input
                    type="range"
                    min={0}
                    max={100}
                    step={1}
                    value={pct}
                    onChange={e => setOutputVolume(Number(e.target.value) / 100)}
                    className={styles.range}
                    aria-label="Output volume"
                />
            </div>
        </div>
    );
}
