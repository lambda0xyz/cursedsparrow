import { type PropsWithChildren, useCallback, useEffect, useRef, useState } from "react";
import type { Room } from "livekit-client";

import { getVoiceToken } from "../api/endpoints";
import { useNotifications } from "../hooks/useNotifications";
import { playVoiceJoinSound, playVoiceLeaveSound } from "../utils/sound";
import type { WSMessage } from "../types/api";
import { VoiceContext, type VoiceStatus } from "./voiceContextValue";

interface VoicePresenceData {
    room_id: string;
    participants: string[];
    count: number;
}

export function VoiceProvider({ children }: PropsWithChildren) {
    const { addWSListener } = useNotifications();
    const [status, setStatus] = useState<VoiceStatus>("idle");
    const [room, setRoom] = useState<Room | null>(null);
    const [activeRoomId, setActiveRoomId] = useState<string | null>(null);
    const [activeRoomName, setActiveRoomName] = useState("");
    const [presence, setPresence] = useState<Record<string, string[]>>({});
    const roomRef = useRef<Room | null>(null);

    useEffect(() => {
        return addWSListener((msg: WSMessage) => {
            if (msg.type !== "voice_presence") {
                return;
            }

            const data = msg.data as VoicePresenceData;
            setPresence(prev => ({ ...prev, [data.room_id]: data.participants ?? [] }));
        });
    }, [addWSListener]);

    const leave = useCallback(() => {
        const current = roomRef.current;
        roomRef.current = null;
        setRoom(null);
        setStatus("idle");
        setActiveRoomId(null);
        setActiveRoomName("");

        if (current) {
            playVoiceLeaveSound();
            current.disconnect().catch(() => {});
        }
    }, []);

    const join = useCallback(
        (roomId: string, roomName: string) => {
            if (roomRef.current) {
                if (activeRoomId === roomId) {
                    return;
                }
                const previous = roomRef.current;
                roomRef.current = null;
                previous.disconnect().catch(() => {});
            }

            setStatus("connecting");
            setActiveRoomId(roomId);
            setActiveRoomName(roomName);

            const connect = async () => {
                const { Room, RoomEvent } = await import("livekit-client");
                const { token, url } = await getVoiceToken(roomId);

                const livekitRoom = new Room();
                roomRef.current = livekitRoom;

                livekitRoom.on(RoomEvent.Disconnected, () => {
                    if (roomRef.current !== livekitRoom) {
                        return;
                    }
                    roomRef.current = null;
                    setRoom(null);
                    setStatus("idle");
                    setActiveRoomId(null);
                    setActiveRoomName("");
                });

                livekitRoom.on(RoomEvent.ParticipantConnected, () => {
                    playVoiceJoinSound();
                });

                livekitRoom.on(RoomEvent.ParticipantDisconnected, () => {
                    playVoiceLeaveSound();
                });

                await livekitRoom.connect(url, token);

                setRoom(livekitRoom);
                setStatus("connected");
                playVoiceJoinSound();

                livekitRoom.localParticipant.setMicrophoneEnabled(true).catch(() => {});
            };

            connect().catch(() => {
                roomRef.current = null;
                setStatus("idle");
                setActiveRoomId(null);
                setActiveRoomName("");
            });
        },
        [activeRoomId],
    );

    useEffect(() => {
        return () => {
            if (roomRef.current) {
                roomRef.current.disconnect().catch(() => {});
                roomRef.current = null;
            }
        };
    }, []);

    return (
        <VoiceContext.Provider value={{ status, activeRoomId, activeRoomName, room, presence, join, leave }}>
            {children}
        </VoiceContext.Provider>
    );
}
