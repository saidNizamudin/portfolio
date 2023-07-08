/* eslint-disable react/prop-types */
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
	return (
		<div className={styles.projectCardContainer}>
			<img src={project.thumbnail} alt={project.name} className={styles.projectCardImage} />
			<div className={styles.projectCardTextContainer}>
				<div className={styles.projectCardTitleTech}>
					<span className={styles.projectCardTitle}>{project.name}</span>
					<span className={styles.projectCardTech}>{project.tech.join(' - ')}</span>
				</div>
				<span className={styles.projectCardDescription}>{project.description}</span>
			</div>
		</div>
	);
}
