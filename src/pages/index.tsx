import Head from "next/head";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={`${styles.title} headingXL`}>Special Topics</h1>
        <h2 className="headingL">NextJS</h2>
        <div className={styles.contentWrap}>
          <p className={styles.description}>I heard you liked frameworks</p>
        </div>
      </main>
    </div>
  );
}
