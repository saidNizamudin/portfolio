import styles from "./Project.module.css";
import { PROJECTS } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faFileCode,
  faPaintBrush,
  faBookBookmark,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function Project() {
  return (
    <div className={styles.container} id="project">
      <span className={styles.title}>
        Project Im Working On <em>(Tap to view more details)</em>
      </span>
      <div className={styles.projectContainer}>
        {PROJECTS.map((project) => (
          <div key={project.id} className={styles.project}>
            <img
              src={project.thumbnail}
              alt={project.company}
              className={styles.projectLogo}
            />
            <div className={styles.projectInfo}>
              <span className={styles.projectInfoTitle}>{project.name}</span>
              <div className={styles.projectInfoDetail}>
                <span>
                  <FontAwesomeIcon icon={faUser} className={styles.icon} />
                  {project.company}
                </span>
                <span>
                  <FontAwesomeIcon icon={faFileCode} className={styles.icon} />
                  {project.tech.join(" - ")}
                </span>
              </div>
            </div>
            <div className={styles.projectButtons}>
              <button className={styles.button}>
                <FontAwesomeIcon
                  icon={faPaintBrush}
                  className={styles.buttonIcon}
                  style={{ marginRight: 5 }}
                />
              </button>
              <button className={styles.button}>
                <FontAwesomeIcon
                  icon={faBookBookmark}
                  className={styles.buttonIcon}
                  style={{ marginRight: 5 }}
                />
              </button>
              <button className={styles.button}>
                <FontAwesomeIcon
                  icon={faPlayCircle}
                  className={styles.buttonIcon}
                  style={{ marginRight: 5 }}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
