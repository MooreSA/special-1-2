import styles from "../../styles/ssr-csr.module.scss";
import Link from "next/link";

const Solutions = () => {
  return (
    <div className={styles.container}>
      <h1 className="headingXL">Get the best of both worlds</h1>
      <h2 className="headingL">This page is static</h2>
      <p>
        Because this page is static, it is much faster to load than a
        traditional multi page application.
      </p>
      <p>
        HTML is generated at build time <i>NOT</i> on render
      </p>
      <ul>
        <li>HTML is resued for each request</li>
        <li>SEO Friendly</li>
        <li>Short Load Times</li>
      </ul>
      <h2 className="headingL">Use Cases</h2>
      <ul>
        <li>Landing Pages</li>
        <li>Blog Posts</li>
        <li>Marketing Pages</li>
        <li>Help/Documentation Pages</li>
        <li>E-Commerce Product Pages</li>
      </ul>
    </div>
  );
};

export default Solutions;
