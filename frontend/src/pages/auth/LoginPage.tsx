import React, { useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { useAuth } from "../../hooks/useAuth";
import { usePageTitle } from "../../hooks/usePageTitle";
import { useSiteInfo } from "../../hooks/useSiteInfo";
import { Input } from "../../components/Input/Input";
import styles from "./LoginPage.module.css";

export function LoginPage() {
    usePageTitle("Sign In");
    const navigate = useNavigate();
    const location = useLocation();
    const { loginUser, registerUser } = useAuth();
    const siteInfo = useSiteInfo();
    const [isRegister, setIsRegister] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [inviteCode, setInviteCode] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [turnstileToken, setTurnstileToken] = useState("");
    const turnstileRef = useRef<TurnstileInstance>(null);

    const regType = siteInfo.registration_type as "open" | "invite" | "closed";
    const turnstileEnabled = siteInfo.turnstile_enabled;
    const turnstileSiteKey = siteInfo.turnstile_site_key;

    async function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault();
        setError("");

        if (turnstileEnabled && !turnstileToken) {
            setError("Please complete the verification.");
            return;
        }

        setLoading(true);

        try {
            if (isRegister) {
                await registerUser(
                    username,
                    email,
                    password,
                    displayName || username,
                    inviteCode || undefined,
                    turnstileEnabled ? turnstileToken : undefined,
                );
            } else {
                await loginUser(username, password, turnstileEnabled ? turnstileToken : undefined);
            }
            navigate(location.state?.from?.pathname || "/", { replace: true });
        } catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong.");
            setTurnstileToken("");
            turnstileRef.current?.reset();
        } finally {
            setLoading(false);
        }
    }

    const canRegister = regType !== "closed";

    return (
        <div className={styles.page}>
            <div className={styles.card}>
                <div className={styles.brand}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot} /> SECURE CONNECTION
                    </div>

                    <div className={styles.wordmark}>
                        <div className={styles.wordmarkKicker}>The Cursed</div>
                        <h1 className={styles.wordmarkTitle}>SPARROW</h1>
                        <p className={styles.tagline}>
                            A private space for the community. Voice, text, streams, and file storage — all in one
                            place.
                        </p>
                    </div>

                    <div className={styles.telemetry}>
                        <div className={styles.telemetryRow}>
                            <span>&gt; connection</span>
                            <span className={styles.ok}>ESTABLISHED</span>
                        </div>
                        <div className={styles.telemetryRow}>
                            <span>&gt; encryption</span>
                            <span className={styles.info}>AES-256 // ACTIVE</span>
                        </div>
                        <div className={styles.telemetryRow}>
                            <span>&gt; firewall</span>
                            <span className={styles.warn}>SCANNING</span>
                        </div>
                        <div className={styles.telemetryRow}>
                            <span>
                                &gt; awaiting connection<span className={styles.cursor}>_</span>
                            </span>
                            <span />
                        </div>
                    </div>
                </div>

                <div className={styles.form}>
                    <h2 className={styles.title}>{isRegister ? "Create Account" : "Sign In"}</h2>
                    <p className={styles.sub}>
                        {isRegister ? "create an account to get started" : "sign in to continue"}
                    </p>

                    {error && <div className={styles.error}>{error}</div>}

                    <form onSubmit={handleSubmit}>
                        <div className={styles.fieldStack}>
                            <div className={styles.field}>
                                <label className={styles.label}>Username</label>
                                <Input
                                    className={styles.input}
                                    type="text"
                                    fullWidth
                                    placeholder="your_username"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                    autoComplete="username"
                                />
                            </div>

                            <div className={styles.field}>
                                <label className={styles.label}>Password</label>
                                <Input
                                    className={styles.input}
                                    type="password"
                                    fullWidth
                                    placeholder="••••••••••••"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    autoComplete={isRegister ? "new-password" : "current-password"}
                                />
                            </div>

                            {isRegister && (
                                <>
                                    <div className={styles.field}>
                                        <label className={styles.label}>Email Address</label>
                                        <Input
                                            className={styles.input}
                                            type="email"
                                            fullWidth
                                            placeholder="you@example.com"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            autoComplete="email"
                                        />
                                    </div>

                                    <div className={styles.field}>
                                        <label className={styles.label}>Display Name (optional)</label>
                                        <Input
                                            className={styles.input}
                                            type="text"
                                            fullWidth
                                            placeholder="Jane"
                                            value={displayName}
                                            onChange={e => setDisplayName(e.target.value)}
                                        />
                                    </div>

                                    {regType === "invite" && (
                                        <div className={styles.field}>
                                            <label className={styles.label}>Invite Code</label>
                                            <Input
                                                className={styles.input}
                                                type="text"
                                                fullWidth
                                                placeholder="enter your invite code"
                                                value={inviteCode}
                                                onChange={e => setInviteCode(e.target.value)}
                                            />
                                        </div>
                                    )}
                                </>
                            )}

                            {turnstileEnabled && turnstileSiteKey && (
                                <div className={styles.turnstile}>
                                    <Turnstile
                                        ref={turnstileRef}
                                        siteKey={turnstileSiteKey}
                                        onSuccess={setTurnstileToken}
                                        onExpire={() => setTurnstileToken("")}
                                        options={{
                                            refreshExpired: "auto",
                                            theme: "dark",
                                        }}
                                    />
                                </div>
                            )}

                            <button
                                className={styles.btnJack}
                                type="submit"
                                disabled={
                                    !username ||
                                    !password ||
                                    loading ||
                                    (isRegister && !email) ||
                                    (isRegister && regType === "invite" && !inviteCode) ||
                                    (turnstileEnabled && !turnstileToken)
                                }
                            >
                                {loading ? "..." : isRegister ? "Register ▸" : "Sign In ▸"}
                            </button>
                        </div>
                    </form>

                    {canRegister ? (
                        <div className={styles.foot}>
                            <button className={styles.footBtn} type="button" onClick={() => setIsRegister(!isRegister)}>
                                {isRegister ? "Already have an account? Sign in" : "Create an account"}
                            </button>
                            {!isRegister && siteInfo.email_enabled && (
                                <button
                                    className={styles.footBtn}
                                    type="button"
                                    onClick={() => navigate("/forgot-password")}
                                >
                                    Forgot password?
                                </button>
                            )}
                        </div>
                    ) : (
                        <div className={styles.foot}>
                            {!isRegister && <p className={styles.disabledNotice}>Registration is closed.</p>}
                            {!isRegister && siteInfo.email_enabled && (
                                <button
                                    className={styles.footBtn}
                                    type="button"
                                    onClick={() => navigate("/forgot-password")}
                                >
                                    Forgot password?
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
