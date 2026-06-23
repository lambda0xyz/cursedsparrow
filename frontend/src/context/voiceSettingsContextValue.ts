import { createContext, useContext } from "react";

export type VoiceInputMode = "voice" | "ptt";

export interface VoiceSettingsContextValue {
    inputMode: VoiceInputMode;
    pttKey: string;
    outputVolume: number;
    setInputMode: (mode: VoiceInputMode) => void;
    setPttKey: (code: string) => void;
    setOutputVolume: (volume: number) => void;
}

export const VoiceSettingsContext = createContext<VoiceSettingsContextValue | null>(null);

export function useVoiceSettings(): VoiceSettingsContextValue {
    const ctx = useContext(VoiceSettingsContext);
    if (!ctx) {
        throw new Error("useVoiceSettings must be used within a VoiceSettingsProvider");
    }
    return ctx;
}

export function pttKeyLabel(code: string): string {
    if (code.startsWith("Key")) {
        return code.slice(3);
    }
    if (code.startsWith("Digit")) {
        return code.slice(5);
    }
    if (code.startsWith("Arrow")) {
        return code.slice(5);
    }

    switch (code) {
        case "Backquote":
            return "`";
        case "Space":
            return "Space";
        case "ControlLeft":
        case "ControlRight":
            return "Ctrl";
        case "ShiftLeft":
        case "ShiftRight":
            return "Shift";
        case "AltLeft":
        case "AltRight":
            return "Alt";
        default:
            return code;
    }
}
