import { useNavigate } from 'react-router-dom';
import styles from './NavBar.module.css';

export default function NavBar() {
	const navigate = useNavigate();

	return (
		<div className={styles.navContainer} onClick={() => navigate('/')}>
			<img src="/logo.png" alt="Said Nizam" className={styles.navLogo} />
			<div className={styles.navItemContainer}>
				<a href="/#home" className={styles.navItem}>
					Home
				</a>
				<a href="/#project" className={styles.navItem}>
					Projects
				</a>
				<a href="/#contact" className={styles.navItem}>
					Contact
				</a>
			</div>
		</div>
	);
}
