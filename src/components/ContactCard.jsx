/* eslint-disable react/prop-types */
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaWhatsapp } from '@react-icons/all-files/fa/FaWhatsapp';
import styles from './ContactCard.module.css';

export default function ContactCard({ contact }) {
	return (
		<a className={styles.contactCardContainer} href={contact.link} target="_blank" rel="noreferrer">
			{
				{
					envelope: <FaEnvelope />,
					github: <FaGithub />,
					linkedin: <FaLinkedin />,
					twitter: <FaTwitter />,
					whatsapp: <FaWhatsapp />,
				}[contact.icon]
			}
			<span className={styles.contactCardText}>{contact.text}</span>
		</a>
	);
}
