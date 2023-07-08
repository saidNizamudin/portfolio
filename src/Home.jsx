import { faFileDownload, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Home.module.css';
import ContactCard from './components/ContactCard';
import ProjectCard from './components/ProjectCard';
import { CONTACTS, PROJECTS } from './data';
import CV from '/CV.pdf';

export default function Home() {
	return (
		<>
			<div className={styles.homeContainer} id="home">
				<div className={styles.homeTextContainer}>
					<div className={styles.homeTitleDesc}>
						<span className={styles.homeTitle}>
							Hello, I&apos;m <strong>Said Nizamudin</strong>
						</span>
						<span className={styles.homeDescription}>
							A software engineer and welcome to my portfolio website, where I showcase my passion
							for building innovative software solutions. Explore my projects and get in touch to
							discuss collaboration opportunities.
						</span>
					</div>
					<div className={styles.homeButtonContainer}>
						<a href="#contact" className={styles.homeButton}>
							Contact Me
						</a>
						<a href={CV} className={styles.homeButton} download={`RESUME Said Nizamudin.pdf`}>
							<FontAwesomeIcon icon={faFileDownload} className={styles.homeButtonIcon} />
							Download My RESUME
						</a>
					</div>
				</div>
				<img src="/avatar.png" alt="Said Nizam's Face" className={styles.homeImage} />
			</div>
			{/* <div className={styles.expertiseContainer}>
				<div className={styles.expertiseBorder}>
					<div className={styles.expertiseTextContainer}>
						<span className={styles.expertiseTitle}>Skills</span>
						<span className={styles.expertiseDescription}>
							Explore my skills and witness the potential they hold for innovative solutions and
							groundbreaking projects.
						</span>
					</div>
					<div className={styles.expertiseNameContainer}>
						{[
							'React',
							'JavaScript',
							'TypeScript',
							'HTML',
							'CSS',
							'Figma',
							'Git',
							'GraphQL',
							'MySQL',
							'PostgreSQL',
							'Python',
							'Django',
							'Java',
							'Spring Boot',
							'Sparks',
							'PHP',
							'Laravel',
							'C++',
						].map((skill, index) => (
							<span key={index} className={styles.expertiseName}>
								{skill}
							</span>
						))}
					</div>
				</div>
			</div> */}
			<div className={styles.projectContainer} id="project">
				<div className={styles.projectTextContainer}>
					<span className={styles.projectTitle}>Projects</span>
					<span className={styles.projectDescription}>
						A collection of my software engineering endeavors, meticulously crafted and brought to
						life. Welcome to my portfolio of possibilities<br></br>
						<b>Just click on the project to learn more</b>
					</span>
				</div>
				<div className={styles.projectListContainer}>
					{PROJECTS.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</div>
			<div className={styles.contactContainer} id="contact">
				<div className={styles.contactTextContainer}>
					<span className={styles.contactTitle}>Contacts</span>
					<span className={styles.contactDescription}>
						{`Connect with me through various platforms and let's get in touch! You can reach me via
						email, WhatsApp, LinkedIn, Github, or Twitter. Feel free to drop me a message,
						collaborate on contacts, or discuss potential opportunities. I look forward to hearing
						from you!`}
					</span>
				</div>
				<div className={styles.contactListContainer}>
					{CONTACTS.map((contact) => (
						<ContactCard key={contact.id} contact={contact} />
					))}
				</div>
				<span className={styles.footer}>
					© 2023 Said Nizamudin | All rights reserved | Made with
					<FontAwesomeIcon icon={faHeart} className={styles.footerIcon} />
				</span>
			</div>
		</>
	);
}
