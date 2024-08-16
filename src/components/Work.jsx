import styles from "./Work.module.css";
import { WORKS } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCalendar } from "@fortawesome/free-solid-svg-icons";

export default function Work() {
  return (
    <div className={styles.container} id="work">
      <span className={styles.title}>
        Working Experience <em>(Tap to view more details)</em>
      </span>
      <div className={styles.workContainer}>
        {WORKS.map((work) => (
          <div key={work.id} className={styles.work}>
            <div className={styles.workLogoContainer}>
              <img
                src={work.logo}
                alt={work.company}
                className={styles.workLogo}
              />
            </div>
            <div className={styles.workInfo}>
              <span className={styles.workInfoTitle}>
                {work.position} <em>@{work.company}</em>
              </span>
              <div className={styles.workInfoDetail}>
                <span>
                  <FontAwesomeIcon icon={faCalendar} className={styles.icon} />
                  {work.date}
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className={styles.icon}
                  />
                  {work.location}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
