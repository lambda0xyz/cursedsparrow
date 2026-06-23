import { type PropsWithChildren, useCallback, useEffect, useState } from "react";

import { VoiceSettingsContext, type VoiceInputMode } from "./voiceSettingsContextValue";

const INPUT_MODE_KEY = "sws-voice-input-mode";
const PTT_KEY_KEY = "sws-voice-ptt-key";
const OUTPUT_VOLUME_KEY = "sws-voice-output-volume";

function getStoredInputMode(): VoiceInputMode {
    try {
        const stored = localStorage.getItem(INPUT_MODE_KEY);
        if (stored === "ptt" || stored === "voice") {
            return stored;
        }
    } catch {}
    return "voice";
}

function getStoredPttKey(): string {
    try {
        const stored = localStorage.getItem(PTT_KEY_KEY);
        if (stored) {
            return stored;
        }
    } catch {}
    return "Backquote";
}

function getStoredOutputVolume(): number {
    try {
        const stored = localStorage.getItem(OUTPUT_VOLUME_KEY);
        if (stored !== null) {
            const parsed = Number(stored);
            if (Number.isFinite(parsed) && parsed >= 0 && parsed <= 1) {
                return parsed;
            }
        }
    } catch {}
    return 1;
}

export function VoiceSettingsProvider({ children }: PropsWithChildren) {
    const [inputMode, setInputModeState] = useState<VoiceInputMode>(getStoredInputMode);
    const [pttKey, setPttKeyState] = useState<string>(getStoredPttKey);
    const [outputVolume, setOutputVolumeState] = useState<number>(getStoredOutputVolume);

    useEffect(() => {
        try {
            localStorage.setItem(INPUT_MODE_KEY, inputMode);
        } catch {}
    }, [inputMode]);

    useEffect(() => {
        try {
            localStorage.setItem(PTT_KEY_KEY, pttKey);
        } catch {}
    }, [pttKey]);

    useEffect(() => {
        try {
            localStorage.setItem(OUTPUT_VOLUME_KEY, String(outputVolume));
        } catch {}
    }, [outputVolume]);

    const setInputMode = useCallback((mode: VoiceInputMode) => {
        setInputModeState(mode);
    }, []);

    const setPttKey = useCallback((code: string) => {
        setPttKeyState(code);
    }, []);

    const setOutputVolume = useCallback((volume: number) => {
        const clamped = Math.min(1, Math.max(0, volume));
        setOutputVolumeState(clamped);
    }, []);

    return (
        <VoiceSettingsContext.Provider
            value={{ inputMode, pttKey, outputVolume, setInputMode, setPttKey, setOutputVolume }}
        >
            {children}
        </VoiceSettingsContext.Provider>
    );
}
