import styles from "./Footer.module.css";
import { CONTACTS } from "../data";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";

export default function Footer() {
  return (
    <div className={styles.footerContainer} id="contact">
      <div className={styles.footerItemContainer}>
        {CONTACTS.map((contact) => (
          <a
            className={styles.footerItem}
            href={contact.link}
            target="_blank"
            rel="noreferrer"
            key={contact.id}
          >
            {
              {
                envelope: <FaEnvelope />,
                github: <FaGithub />,
                linkedin: <FaLinkedin />,
                twitter: <FaTwitter />,
                whatsapp: <FaWhatsapp />,
              }[contact.icon]
            }
            <span className={styles.contactText}>
              {
                {
                  envelope: "saidnizamudin@gmail.com",
                  github: "saidNizamudin",
                  linkedin: "Said Nizamudin",
                  twitter: "bingboonk",
                  whatsapp: "+6282165201341",
                }[contact.icon]
              }
            </span>
          </a>
        ))}
      </div>
      <span className={styles.footerText}>
        Designed and developed by Said Nizamudin. © 2024. Always evolving,
        always improving.
      </span>
    </div>
  );
}
