import styles from "../styles/components/Header.module.css";

const Header = () => {

    return (

        <header className={styles.header}>

            <nav className={styles.header__nav}></nav>

            <div className={styles.header__top}>

                <div className={styles.header__title}>

                    <h1>Dashboard</h1>

                    <p>Desafio Técnico Frontend</p>

                </div>

            </div>

        </header>

    );

}

export default Header;