import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Special Topics</h1>
        <h2 className={styles.subtitle}>NextJS</h2>
        <p className={styles.description}>I heard you liked frameworks</p>
        <Link href="/form">
          <a>
            <button className={styles.button}>Get Started</button>
          </a>
        </Link>
      </main>
    </div>
  );
}
