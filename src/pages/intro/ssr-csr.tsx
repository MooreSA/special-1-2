import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/ssr-csr.module.scss";
import animation from "../../styles/animation.module.scss";
import { useState } from "react";
import TestComponent from "../../components/testComponent";

const SsrCsr = () => {
  const [testState, setTestState] = useState<Boolean>(false);
  const [showNext, setShowNext] = useState<Boolean>(false);

  const handleBtnClick = () => {
    setTestState(!testState);
    setShowNext(true);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>SSR & CSR</title>
      </Head>
      <h1 className="headingXL">SSR vs CSR</h1>
      <p className="headingL">This page is 100% static</p>
      <div className={styles.contentWrap}>
        <p className={styles.para}>
          Single page applications have several huge advantages over a
          traditional multi page application these can include:
        </p>
        <p className={styles.para}>
          Speed - Once the single page application has loaded, it is extremely
          quick to move between different views of the application. This is
          because the entire application is already present on the client's
          machine and is executing code.
        </p>
        <p className={styles.para}>
          State management - Since there are no reloads of the application, it
          occurs all within a single page. There is an easier job to maintain
          state.
        </p>
        <button onClick={handleBtnClick} className="btn btn-black">
          Toggle the state!
        </button>

        {testState ? <TestComponent /> : null}
        {showNext ? (
          <div className={`${animation.fadeFwd} ${styles.contentWrap}`}>
            <p className={styles.para}>
              However, there are some deeper issues that you may run into a
              single page application:
            </p>
            <ul>
              <li>
                SEO - Since the application you are loading is entirely built
                using JS, there is nothing that an indexing service such as
                Google can see.
              </li>
              <li>
                JS - Somehow, even today, not all people use Javascript in their
                browsers, if you are using a SPA, you are locking them out of
                your application entirely.
              </li>
              <li>
                Initial load speed - If you are building a large single page app
                with many pages. Since you are loading all of the pages
                simultaneously the initial load time may be longer than desired.
              </li>
            </ul>
            <Link href="/intro/solutions">
              <button className="btn btn-black">How do we fix that?</button>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SsrCsr;
