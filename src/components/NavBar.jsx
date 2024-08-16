import Hamburger from "hamburger-react";
import styles from "./NavBar.module.css";
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { createPortal } from "react-dom";

export default function NavBar() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [isOpen, setOpen] = useState(false);

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const top =
        element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.navContainer}>
      <img src="/logo.png" alt="My Logo" className={styles.homeLogo} />
      {isSmallScreen ? (
        <>
          <Hamburger toggled={isOpen} toggle={setOpen} />
          {createPortal(
            <CSSTransition
              in={isOpen}
              timeout={300}
              classNames={{
                enter: styles.menuEnter,
                enterActive: styles.menuEnterActive,
                exit: styles.menuExit,
                exitActive: styles.menuExitActive,
              }}
              unmountOnExit
            >
              <div className={styles.sideMenu}>
                <a
                  href="/#about-me"
                  className={styles.sideNavItem}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToElement("about-me");
                    setOpen(false);
                  }}
                >
                  About Me
                </a>
                <a
                  href="/#work"
                  className={styles.sideNavItem}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToElement("work");
                    setOpen(false);
                  }}
                >
                  Experience
                </a>
                <a
                  href="/#project"
                  className={styles.sideNavItem}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToElement("project");
                    setOpen(false);
                  }}
                >
                  Project
                </a>
                <a
                  href="/#contact"
                  className={styles.sideNavItem}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToElement("contact");
                    setOpen(false);
                  }}
                >
                  Contact
                </a>
              </div>
            </CSSTransition>,
            document.body
          )}
        </>
      ) : (
        <div className={styles.navItemContainer}>
          <a
            href="/#about-me"
            className={styles.navItem}
            onClick={(e) => {
              e.preventDefault();
              scrollToElement("about-me");
            }}
          >
            About Me
          </a>
          <a
            href="/#work"
            className={styles.navItem}
            onClick={(e) => {
              e.preventDefault();
              scrollToElement("work");
            }}
          >
            Experience
          </a>
          <a
            href="/#project"
            className={styles.navItem}
            onClick={(e) => {
              e.preventDefault();
              scrollToElement("project");
            }}
          >
            Project
          </a>
          <a
            href="/#contact"
            className={styles.navItem}
            onClick={(e) => {
              e.preventDefault();
              scrollToElement("contact");
            }}
          >
            Contact
          </a>
        </div>
      )}
    </div>
  );
}
