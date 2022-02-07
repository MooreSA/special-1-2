import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/ssr-csr.module.scss";

const ServerSide = ({ data }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Server Side Rendering</title>
      </Head>
      <h1 className="headingXL">Server Side Rendering</h1>
      <h2 className="headingL">Still Kinda Fast</h2>
      <div className={styles.contentWrap}>
        <div className={styles.para}></div>
      </div>
    </div>
  );
};

export default ServerSide;
