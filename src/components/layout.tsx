import Head from "next/head";
import styles from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>NextJS - I heard you like frameworks</title>
      </Head>

      <main className={styles.container}>{children}</main>
    </>
  );
};

export default Layout;
