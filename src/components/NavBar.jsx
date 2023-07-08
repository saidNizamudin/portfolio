import styles from './NavBar.module.css';

export default function NavBar() {
	return (
		<div className={styles.navContainer}>
			<img src="/logo.png" alt="Said Nizam" className={styles.navLogo} />
			<div className={styles.navItemContainer}>
				<a href="#home" className={styles.navItem}>
					Home
				</a>
				<a href="#project" className={styles.navItem}>
					Projects
				</a>
				<a href="#contact" className={styles.navItem}>
					Contact
				</a>
			</div>
		</div>
	);
}
