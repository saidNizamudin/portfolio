/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Modal } from "react-responsive-modal";
import MarkDown from "markdown-to-jsx";
import Lightbox from "react-awesome-lightbox";

import styles from "./ProjectCard.module.css";
import "react-awesome-lightbox/build/style.css";

export default function ProjectCard({ project }) {
  const [documentationOpen, setDocumentationOpen] = useState(false);
  const [imagesOpen, setImagesOpen] = useState(false);
  const [post, setPost] = useState("");

  const handleDocumentationOpen = () => {
    setDocumentationOpen(true);
  };

  const handleDocumentationClose = () => {
    setDocumentationOpen(false);
    document.title = "Said Nizamudin";
  };

  const handleImageShow = (images) => {
    return images.map((image) => ({
      url: `/${project.slug}/${image}.webp`,
      title: image,
    }));
  };

  useEffect(() => {
    import(`../contents/${project.documentation}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res));
      })
      .catch((err) => console.log(err));
  }, []);

  const handleCardClick = () => {
    if (project.documentation) {
      document.title = `${project.name} • Said Nizamudin`;
      handleDocumentationOpen();
    }
  };

  return (
    <>
      <div className={styles.projectCardContainer} onClick={handleCardClick}>
        <img
          src={project.thumbnail}
          alt={project.name}
          className={styles.projectCardImage}
        />
        <div className={styles.projectCardTextContainer}>
          <span className={styles.projectCardTitle}>{project.name}</span>
          <span className={styles.projectCardCompany}>{project.company}</span>
          <span className={styles.projectCardTech}>
            {project.tech.join(" - ")}
          </span>
          <span className={styles.projectCardDescription}>
            {project.description}
          </span>

          <div className={styles.projectCardButtonContainer}>
            {project?.live && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.live, "_blank");
                }}
                className={styles.projectCardButton}
              >
                Live
              </button>
            )}
            {project?.images && (
              <button
                className={styles.projectCardButton}
                onClick={(e) => {
                  e.stopPropagation();
                  setImagesOpen(true);
                }}
              >
                Design
              </button>
            )}
            {project?.documentation && (
              <button
                className={styles.projectCardButton}
                onClick={handleDocumentationOpen}
              >
                Documentation
              </button>
            )}
          </div>
        </div>
      </div>

      {imagesOpen && (
        <Lightbox
          images={handleImageShow(project.images)}
          title={project.name}
          onClose={() => {
            setImagesOpen(false);
          }}
        />
      )}

      <Modal
        open={documentationOpen}
        onClose={handleDocumentationClose}
        center
        className={styles.modal}
      >
        <MarkDown>{post}</MarkDown>
      </Modal>
    </>
  );
}
