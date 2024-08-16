import { useEffect } from "react";
import styles from "./Home.module.css";
import { Header, Work, Project } from "./components";

export default function Home() {
  useEffect(() => {
    document.title = "Said Nizamudin";
  }, []);

  return (
    <main className={styles.mainContainer}>
      <Header />
      <Work />
      <Project />
    </main>
    // <main>
    //   <div className={styles.homeContainer} id="home">
    //     <span className={styles.homeTitle}>Hello! I&apos;m Said Nizamudin</span>
    //     <span className={styles.homeDescription1}>
    //       A software engineer with over 2 years of experience
    //     </span>
    //     <span className={styles.homeDescription2}>
    //       Experienced in using JavaScript frameworks like React, Next.js, and
    //       Vue.js for front-end development. On the back-end, I work with
    //       JavaScript (Node.js), Python, and Java, and handle databases including
    //       PostgreSQL, MySQL, MongoDB, and GraphQL for versatile data management.
    //     </span>
    //     <div className={styles.homeButtonContainer}>
    //       <a
    //         href={CV}
    //         className={styles.homeButton}
    //         download={`RESUME Said Nizamudin.pdf`}
    //       >
    //         <FontAwesomeIcon
    //           icon={faFileDownload}
    //           className={styles.homeButtonIcon}
    //         />
    //         Get My Resume
    //       </a>
    //       <a
    //         href={"https://www.linkedin.com/in/said-nizamudin-4b34aa1b3/"}
    //         target="_blank"
    //         rel="noreferrer"
    //         className={styles.homeButton}
    //       >
    //         <FaLinkedin className={styles.homeButtonIcon} />
    //         View My LinkedIn
    //       </a>
    //       <a href="#contact" className={styles.homeButton}>
    //         Contact Me
    //       </a>
    //     </div>
    //   </div>
    //   {/* <div className={styles.expertiseContainer}>
    // 		<div className={styles.expertiseBorder}>
    // 			<div className={styles.expertiseTextContainer}>
    // 				<span className={styles.expertiseTitle}>Skills</span>
    // 				<span className={styles.expertiseDescription}>
    // 					Explore my skills and witness the potential they hold for innovative solutions and
    // 					groundbreaking projects.
    // 				</span>
    // 			</div>
    // 			<div className={styles.expertiseNameContainer}>
    // 				{[
    // 					'React',
    // 					'JavaScript',
    // 					'TypeScript',
    // 					'HTML',
    // 					'CSS',
    // 					'Figma',
    // 					'Git',
    // 					'GraphQL',
    // 					'MySQL',
    // 					'PostgreSQL',
    // 					'Python',
    // 					'Django',
    // 					'Java',
    // 					'Spring Boot',
    // 					'Sparks',
    // 					'PHP',
    // 					'Laravel',
    // 					'C++',
    // 				].map((skill, index) => (
    // 					<span key={index} className={styles.expertiseName}>
    // 						{skill}
    // 					</span>
    // 				))}
    // 			</div>
    // 		</div>
    // 	</div> */}
    //   <div className={styles.projectContainer} id="project">
    //     <div className={styles.projectTextContainer}>
    //       <span className={styles.projectTitle}>Projects</span>
    //     </div>
    //     <div className={styles.projectListContainer}>
    //       {PROJECTS.map((project) => (
    //         <ProjectCard key={project.id} project={project} />
    //       ))}
    //     </div>
    //   </div>
    //   <Footer />
    // </>
  );
}
