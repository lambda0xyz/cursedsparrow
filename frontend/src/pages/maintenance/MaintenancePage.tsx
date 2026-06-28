import { usePageTitle } from "../../hooks/usePageTitle";
import styles from "./MaintenancePage.module.css";

interface MaintenancePageProps {
    title?: string;
    message?: string;
}

export function MaintenancePage({ title, message }: MaintenancePageProps) {
    usePageTitle("Maintenance");
    return (
        <div className={styles.page}>
            <div className={styles.card}>
                <span className={styles.status}>
                    <span className={styles.statusDot} aria-hidden="true" />
                    offline // maintenance
                </span>
                <h1 className={styles.title}>{title || "We're down for maintenance"}</h1>
                <p className={styles.message}>
                    {message || "We're making some updates. Check back shortly."}
                </p>
            </div>
        </div>
    );
}
