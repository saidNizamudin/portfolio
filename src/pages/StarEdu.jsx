import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faBookOpen, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MarkDown from 'markdown-to-jsx';
import { useEffect, useState } from 'react';
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';
import { LoopCircleLoading } from 'react-loadingg';
import { Footer } from '../components';
import styles from './StarEdu.module.css';

export default function StarEdu() {
	const [post, setPost] = useState('');
	const [loading, setLoading] = useState(true);
	const [showImageModal, setShowImageModal] = useState(false);

	const handleImageShow = (images) => {
		return images.map((image) => ({
			url: `/staredu/${image}.png`,
			title: image,
		}));
	};

	useEffect(() => {
		setLoading(true);
		document.title = 'StarEdu • Said Nizamudin';
		import('../contents/staredu.md')
			.then((res) => {
				fetch(res.default)
					.then((res) => res.text())
					.then((res) => setPost(res));
			})
			.catch((err) => console.log(err))
			.finally(() =>
				setTimeout(() => {
					setLoading(false);
				}, 300)
			);
	}, []);

	if (loading) {
		return <LoopCircleLoading size="large" color="#e4aa48" />;
	}

	return (
		<>
			<div className={styles.container}>
				<div className={styles.contentWrapper}>
					<img src="/staredu.jpg" alt="StarEdu" className={styles.image} />
					<div className={styles.buttonContainer}>
						<div
							className={styles.button}
							onClick={() => {
								setShowImageModal(true);
							}}>
							<FontAwesomeIcon icon={faPaintBrush} className={styles.icon} />
							Design
						</div>
						<a
							href="https://staredu-desktop.netlify.app"
							target="_blank"
							rel="noreferrer"
							className={styles.button}>
							<FontAwesomeIcon icon={faPlayCircle} className={styles.icon} />
							Live
						</a>
						<a href="#documentation" className={styles.button}>
							<FontAwesomeIcon icon={faBookOpen} className={styles.icon} />
							Documentation
						</a>
					</div>
				</div>
				<div className={styles.content} id="documentation">
					<MarkDown>{post}</MarkDown>
				</div>
			</div>
			{showImageModal && (
				<Lightbox
					images={handleImageShow([
						'Login',
						'Register',
						'Register-2',
						'Forgot Password',
						'Landing Page',
						'About Us',
						'Home Dashboard-Empty State',
						'Home Dashboard',
						'Manage Course Module',
						'Manage Course Module-2',
						'Manage Course Module-3',
						'Manage Course Module-4',
						'Manage Assignment',
						'Manage Learning Module',
						'Publish Course',
						'Manage Rating',
						'Manage Income',
						'Manage Income-2',
						'Manage Quiz',
						'Manage Student',
						'Chat',
						'Profile',
					])}
					title="StarEdu"
					onClose={() => {
						setShowImageModal(false);
					}}
				/>
			)}
			<Footer />
		</>
	);
}
