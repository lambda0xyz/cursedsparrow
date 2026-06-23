import { useEffect, useState } from "react";
import { useIsSpeaking, useParticipants } from "@livekit/components-react";
import { RemoteParticipant } from "livekit-client";
import type { Participant } from "livekit-client";

import { useVoiceSettings } from "../../../context/voiceSettingsContextValue";
import { Button } from "../../Button/Button";
import styles from "./Voice.module.css";

interface VoiceParticipantListProps {
    canModerate?: boolean;
    onForceMute?: (identity: string, muted: boolean) => void;
}

export function VoiceParticipantList({ canModerate = false, onForceMute }: VoiceParticipantListProps) {
    const participants = useParticipants();
    const { outputVolume } = useVoiceSettings();
    const [mutedIds, setMutedIds] = useState<Set<string>>(new Set());
    const [forceMutedIds, setForceMutedIds] = useState<Set<string>>(new Set());
    const [deafened, setDeafened] = useState(false);

    useEffect(() => {
        for (const p of participants) {
            if (p instanceof RemoteParticipant) {
                const silenced = deafened || mutedIds.has(p.identity);
                p.setVolume(silenced ? 0 : outputVolume);
            }
        }
    }, [participants, outputVolume, deafened, mutedIds]);

    const toggleForceMute = (identity: string) => {
        const next = new Set(forceMutedIds);
        const muted = !next.has(identity);
        if (muted) {
            next.add(identity);
        } else {
            next.delete(identity);
        }
        setForceMutedIds(next);
        onForceMute?.(identity, muted);
    };

    const toggleLocalMute = (participant: Participant) => {
        const next = new Set(mutedIds);
        if (next.has(participant.identity)) {
            next.delete(participant.identity);
        } else {
            next.add(participant.identity);
        }
        setMutedIds(next);
    };

    const toggleDeafen = () => {
        setDeafened(!deafened);
    };

    return (
        <div className={styles.participants}>
            <Button
                variant="control"
                active={deafened}
                onClick={toggleDeafen}
                title={deafened ? "Unmute everyone for yourself" : "Mute everyone for yourself"}
            >
                {deafened ? "Unmute all" : "Mute all"}
            </Button>
            {participants.map(p => (
                <VoiceParticipant
                    key={p.identity}
                    participant={p}
                    locallyMuted={deafened || mutedIds.has(p.identity)}
                    forceMuted={forceMutedIds.has(p.identity)}
                    canModerate={canModerate}
                    onToggleLocalMute={() => toggleLocalMute(p)}
                    onToggleForceMute={onForceMute ? () => toggleForceMute(p.identity) : undefined}
                />
            ))}
        </div>
    );
}

interface VoiceParticipantProps {
    participant: Participant;
    locallyMuted: boolean;
    forceMuted: boolean;
    canModerate: boolean;
    onToggleLocalMute: () => void;
    onToggleForceMute?: () => void;
}

function VoiceParticipant({
    participant,
    locallyMuted,
    forceMuted,
    canModerate,
    onToggleLocalMute,
    onToggleForceMute,
}: VoiceParticipantProps) {
    const isSpeaking = useIsSpeaking(participant);
    const name = participant.name || participant.identity;
    const isLocal = participant.isLocal;

    return (
        <span className={`${styles.participant} ${isSpeaking ? styles.speaking : ""}`} title={name}>
            <span className={styles.dot} />
            <span className={styles.name}>{name}</span>
            {!isLocal && (
                <button
                    type="button"
                    className={styles.miniBtn}
                    onClick={onToggleLocalMute}
                    title={locallyMuted ? "Muted just for you, click to hear them" : "Mute them just for you"}
                >
                    {locallyMuted ? "\u{1F507}" : "\u{1F50A}"}
                </button>
            )}
            {!isLocal && canModerate && onToggleForceMute && (
                <Button
                    variant="control"
                    tone="danger"
                    size="small"
                    active={forceMuted}
                    onClick={onToggleForceMute}
                    title={forceMuted ? "Unmute for everyone" : "Mute for everyone"}
                >
                    {forceMuted ? "Unmute" : "Mute"}
                </Button>
            )}
        </span>
    );
}
