import styles from "./Work.module.css";
import { WORKS } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import classNames from "classnames/bind";

export default function Work() {
  const [open, setOpen] = useState(-1);

  const handleClick = (index) => () => {
    if (open === index) {
      setOpen(-1);
    } else {
      setOpen(index);
    }
  };

  return (
    <div className={styles.container} id="work">
      <span className={styles.title}>
        Working Experience <em>(Tap to view more details)</em>
      </span>
      <div className={styles.workContainer}>
        {WORKS.map((work, index) => (
          <div
            key={work.id}
            className={styles.work}
            onClick={handleClick(index)}
          >
            <div>
              <div
                className={styles.workLogoContainer}
                style={{
                  background: work.isBlackedOut ? "#212121" : "white",
                }}
              >
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
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className={styles.icon}
                    />
                    {work.startDate} - {work.endDate}
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
            <div
              className={classNames(
                styles.workDescription,
                open === index ? styles.show : ""
              )}
              id={`workDesc-${index}`}
            >
              {work?.responsibilities?.map((responsibility, index) => (
                <span key={index} className={styles.responsibility}>
                  {responsibility}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
