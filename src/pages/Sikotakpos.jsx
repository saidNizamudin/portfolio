import { faBookOpen, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MarkDown from 'markdown-to-jsx';
import { useEffect, useState } from 'react';
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';
import { LoopCircleLoading } from 'react-loadingg';
import { Footer } from '../components';
import styles from './Sikotakpos.module.css';

export default function Sikotakpos() {
	const [post, setPost] = useState('');
	const [loading, setLoading] = useState(true);
	const [showImageModal, setShowImageModal] = useState(false);

	const handleImageShow = (images) => {
		return images.map((image) => ({
			url: `/sikotakpos/${image}.png`,
			title: image,
		}));
	};

	useEffect(() => {
		setLoading(true);
		document.title = 'SIKOTAKPOS • Said Nizamudin';
		import('../contents/sikotakpos.md')
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
					<img src="/sikotakpos.jpg" alt="SIKOTAKPOS" className={styles.image} />
					<div className={styles.buttonContainer}>
						<div
							className={styles.button}
							onClick={() => {
								setShowImageModal(true);
							}}>
							<FontAwesomeIcon icon={faPaintBrush} className={styles.icon} />
							Design
						</div>
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
						'Reset Password',
						'Reset Password Confirmation',
						'Reset Password Success',
						'Homepage',
						'Jadwal Keseluruhan',
						'Jadwal Sidang Keseluruhan',
						'404 Error',
						'500 Error',
						'[MAHASISWA] Dashboard Mahasiswa',
						'[MAHASISWA] Complete Data Mahasiswa',
						'[MAHASISWA] Daftar Tahapan Khusus UTS Kolokium',
						'[MAHASISWA] Daftar Tahapan Selain UTS Kolokium',
						'[MAHASISWA] Daftar Tahapan',
						'[MAHASISWA] Kartu Kendali Bimbingan',
						'[MAHASISWA] Kartu Kendali Sidang',
						'[MAHASISWA] List Rekomendasi Dosen',
						'[MAHASISWA] Memilih Jadwal',
						'[MAHASISWA] Profil Mahasiswa',
						'[MAHASISWA] Update Profil Mahasiswa',
						'[DOSEN] Dashboard Dosen',
						'[DOSEN] Generate Token',
						'[DOSEN] Jadwal Bimbingan',
						'[DOSEN] Jadwal Keseluruhan',
						'[DOSEN] Jadwal Seminar',
						'[DOSEN] Memutuskan',
						'[DOSEN] Profil Dosen',
						'[DOSEN] Update Profil Dosen',
						'[KOOR] Dashboard Koor',
						'[KOOR] Daftar Dosen',
						'[KOOR] Daftar Mahasiswa',
						'[KOOR] Detail Dosen',
						'[KOOR] Detail Mahasiswa',
						'[KOOR] Edit Dosen',
						'[KOOR] Edit Mahasiswa',
						'[KOOR] Jadwal Keseluruhan',
						'[KOOR] List Menentukan Jadwal',
						'[KOOR] Menentukan Jadwal',
						'[KOOR] Menentukan Rentang',
						'[KOOR] Tambah Dosen',
					])}
					title="SIKOTAKPOS"
					onClose={() => {
						setShowImageModal(false);
					}}
				/>
			)}
			<Footer />
		</>
	);
}
