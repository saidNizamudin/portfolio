import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CONTACTS } from '../data';
import ContactCard from './ContactCard';
import styles from './Footer.module.css';

export default function Footer() {
	return (
		<div className={styles.footerContainer} id="contact">
			<div className={styles.footerTextContainer}>
				<span className={styles.footerTitle}>Contacts</span>
				<span className={styles.footerDescription}>
					{`Connect with me through various platforms and let's get in touch! You can reach me via
						email, WhatsApp, LinkedIn, Github, or Twitter. Feel free to drop me a message,
						collaborate on contacts, or discuss potential opportunities. I look forward to hearing
						from you!`}
				</span>
			</div>
			<div className={styles.footerListContainer}>
				{CONTACTS.map((contact) => (
					<ContactCard key={contact.id} contact={contact} />
				))}
			</div>
			<hr className={styles.footerDivider} />
			<span className={styles.copyright}>
				© 2023 Said Nizamudin | All rights reserved | Made with
				<FontAwesomeIcon icon={faHeart} className={styles.copyrightIcon} />
			</span>
		</div>
	);
}
