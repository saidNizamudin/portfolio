import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faBookOpen, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MarkDown from 'markdown-to-jsx';
import { useEffect, useState } from 'react';
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';
import { LoopCircleLoading } from 'react-loadingg';
import { Footer } from '../components';
import styles from './KoasHelper.module.css';

export default function KoasHelper() {
	const [post, setPost] = useState('');
	const [loading, setLoading] = useState(true);
	const [showImageModal, setShowImageModal] = useState(false);

	const handleImageShow = (images) => {
		return images.map((image) => ({
			url: `/koas-helper/${image}.png`,
			title: image,
		}));
	};

	useEffect(() => {
		setLoading(true);
		document.title = 'Koas Helper • Said Nizamudin';
		import('../contents/koas-helper.md')
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
					<img src="/koas-helper.jpg" alt="Koas Helper" className={styles.image} />
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
							href="https://koas-helper.vercel.app/"
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
					images={handleImageShow(['Homepage', 'Mapping'])}
					title="Koas Helper"
					onClose={() => {
						setShowImageModal(false);
					}}
				/>
			)}
			<Footer />
		</>
	);
}
