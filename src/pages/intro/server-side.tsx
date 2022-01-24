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
        <div className={styles.para}>
          Name: {data.name != null ? data.name : null}
        </div>
        <Link href="/example/">
          <button className="btn btn-black">Another Example</button>
        </Link>
      </div>
    </div>
  );
};

// This gets called on every request
export const getServerSideProps = async () => {
  // Fetch data from external API
  const res = await fetch("https://api.github.com/users/mooresa");
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
};

export default ServerSide;
