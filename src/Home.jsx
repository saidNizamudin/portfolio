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
  );
}
