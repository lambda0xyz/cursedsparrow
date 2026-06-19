import { lazy, Suspense, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useQueryClient } from "@tanstack/react-query";
import { useChannels } from "../../../api/queries/chat";
import { useAuth } from "../../../hooks/useAuth";
import { useNotifications } from "../../../hooks/useNotifications";
import { can } from "../../../utils/permissions";
import type { ChatRoom, WSMessage } from "../../../types/api";
import { useVoice } from "../../../context/voiceContextValue";
import { CreateChannelModal } from "../../chat/CreateChannelModal/CreateChannelModal";
import styles from "./ChannelRail.module.css";

const VoiceDock = lazy(() => import("../../chat/Voice/VoiceDock").then(m => ({ default: m.VoiceDock })));

export function ChannelRail() {
    const { user } = useAuth();
    const navigate = useNavigate();
    const { roomId: activeId } = useParams<{ roomId: string }>();
    const qc = useQueryClient();
    const { addWSListener } = useNotifications();
    const { rooms } = useChannels();
    const voice = useVoice();
    const [createOpen, setCreateOpen] = useState(false);

    useEffect(() => {
        return addWSListener((msg: WSMessage) => {
            if (msg.type === "channel_created" || msg.type === "channel_deleted") {
                qc.invalidateQueries({ queryKey: ["channels"] });
            }
        });
    }, [addWSListener, qc]);

    const canManage = can(user?.role, "manage_channels");

    const textChannels = [];
    const voiceChannels = [];
    for (const c of rooms) {
        if (c.channel_kind === "voice") {
            voiceChannels.push(c);
        } else {
            textChannels.push(c);
        }
    }

    function renderRow(c: ChatRoom) {
        const active = c.id === activeId;
        const hasUnread = c.unread && !c.viewer_muted;
        const glyph = c.channel_kind === "voice" ? "◊" : "#";
        const voiceCount = voice.presence[c.id]?.length ?? c.voice_count ?? 0;
        const classes = [styles.channel];
        if (active) {
            classes.push(styles.active);
        }
        if (hasUnread) {
            classes.push(styles.unreadChannel);
        }
        return (
            <button
                key={c.id}
                type="button"
                className={classes.join(" ")}
                onClick={() => navigate(`/channels/${c.id}`)}
            >
                <span className={styles.glyph}>{glyph}</span>
                <span className={styles.channelName}>{c.name}</span>
                {c.channel_kind === "voice" && voiceCount > 0 && (
                    <span className={styles.voiceCount}>{voiceCount}</span>
                )}
                {hasUnread && <span className={styles.unreadDot} aria-label="Unread messages" />}
            </button>
        );
    }

    return (
        <aside className={styles.rail}>
            <div className={styles.serverHead}>
                <span className={styles.serverName}>
                    SIXTH WORLD <b>SUNDAY</b>
                </span>
            </div>

            <div className={styles.groups}>
                <div className={styles.group}>
                    <div className={styles.groupHeader}>
                        <span className={styles.groupLabel}>text channels</span>
                        {canManage && (
                            <button
                                type="button"
                                className={styles.addBtn}
                                onClick={() => setCreateOpen(true)}
                                aria-label="Create channel"
                                title="Create channel"
                            >
                                {"+"}
                            </button>
                        )}
                    </div>
                    {textChannels.length === 0 && <div className={styles.emptyGroup}>no text channels</div>}
                    {textChannels.map(renderRow)}
                </div>

                <div className={styles.group}>
                    <div className={styles.groupHeader}>
                        <span className={styles.groupLabel}>voice channels</span>
                    </div>
                    {voiceChannels.length === 0 && <div className={styles.emptyGroup}>no voice channels</div>}
                    {voiceChannels.map(renderRow)}
                </div>
            </div>

            {voice.status === "connected" && voice.activeRoomId !== activeId && (
                <Suspense fallback={null}>
                    <VoiceDock />
                </Suspense>
            )}

            {user && (
                <div className={styles.meCard}>
                    <button
                        type="button"
                        className={styles.meInfo}
                        onClick={() => navigate(`/user/${user.username}`)}
                        title="Your profile"
                    >
                        {user.avatar_url ? (
                            <img className={styles.meAvatar} src={user.avatar_url} alt="" />
                        ) : (
                            <span className={styles.meAvatarPlaceholder}>{user.display_name[0]}</span>
                        )}
                        <span className={styles.meName}>{user.display_name}</span>
                    </button>
                    <button
                        type="button"
                        className={styles.meAction}
                        onClick={() => navigate("/settings")}
                        aria-label="Settings"
                        title="Settings"
                    >
                        {"⚙"}
                    </button>
                </div>
            )}

            <CreateChannelModal
                isOpen={createOpen}
                onClose={() => setCreateOpen(false)}
                onCreated={c => {
                    setCreateOpen(false);
                    navigate(`/channels/${c.id}`);
                }}
            />
        </aside>
    );
}
