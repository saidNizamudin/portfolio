import CV from "/CV.pdf";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.headerContainer} id="about-me">
      <span className={styles.headerTitle}>
        Hi 👋, i am <em>Said Nizamudin</em>
      </span>
      <span className={styles.headerDescription1}>
        Full Stack Developer (Frontend Focus)
      </span>
      <span className={styles.headerDescription2}>
        Specializing in intuitive <em>UI/UX</em> with deep expertise in{" "}
        <em>JavaScript</em>, <em>TypeScript</em>. Also <em>Python</em> for
        backend development.
      </span>
      <div className={styles.headerButtonContainer}>
        <a
          href={CV}
          className={styles.headerButton}
          download={`RESUME Said Nizamudin.pdf`}
        >
          Resume
        </a>
        <a
          href={"https://www.linkedin.com/in/said-nizamudin-4b34aa1b3/"}
          target="_blank"
          rel="noreferrer"
          className={styles.headerButton}
        >
          LinkedIn
        </a>
        <a href="#contact" className={styles.headerButton}>
          Contact
        </a>
      </div>
    </div>
  );
}
