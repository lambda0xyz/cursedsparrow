import { Link } from "react-router";
import { usePageTitle } from "../../hooks/usePageTitle";
import styles from "./NotFoundPage.module.css";

export function NotFoundPage() {
    usePageTitle("Page Not Found");

    return (
        <div className={styles.page}>
            <div className={styles.code}>404</div>
            <h1 className={styles.title}>This page doesn't exist</h1>
            <p className={styles.blurb}>
                That page couldn't be found — maybe a broken link, or content that was removed. Head back home and try
                again.
            </p>
            <Link to="/" className={styles.cta}>
                Back Home
            </Link>
        </div>
    );
}
