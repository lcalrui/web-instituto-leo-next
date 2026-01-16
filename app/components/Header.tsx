import styles from './Header.module.css';

export default function Header() {
    return(
        <header className={styles.headerContainer}>
            <img src="/logoCuraValera.png" alt="Logo" className={styles.logo} />
            <div className={styles.textGroup}>
                <h1>IES Cura Valera, Huércal-Overa</h1>
                <p>Junta de Andalucía</p>
            </div>
        </header>
    );
}