import { Suspense, lazy, useEffect } from "react";
import { useParams } from "react-router";
import { ChannelRail } from "../../components/layout/ChannelRail/ChannelRail";
import styles from "./ChannelsLayout.module.css";

const RoomPage = lazy(() => import("../rooms/RoomPage").then(m => ({ default: m.RoomPage })));

export function ChannelsLayout() {
    const { roomId } = useParams<{ roomId: string }>();

    useEffect(() => {
        document.body.setAttribute("data-chat-page", "true");
        return () => {
            document.body.removeAttribute("data-chat-page");
        };
    }, []);

    return (
        <div className={styles.shell} data-has-channel={roomId ? "true" : "false"}>
            <ChannelRail />
            <div className={styles.main}>
                {roomId ? (
                    <Suspense
                        fallback={
                            <div className={styles.empty}>
                                <p className={styles.emptyText}>Loading channel…</p>
                            </div>
                        }
                    >
                        <RoomPage />
                    </Suspense>
                ) : (
                    <div className={styles.empty}>
                        <span className={styles.emptyGlyph}>{"#"}</span>
                        <p className={styles.emptyText}>Pick a channel on the left to start transmitting.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
