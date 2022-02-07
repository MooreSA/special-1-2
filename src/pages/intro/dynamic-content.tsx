import styles from "../../styles/ssr-csr.module.scss";
import animation from "../../styles/animation.module.scss";

const DynamicContent = () => {
  return (
    <div className={styles.container}>
      <h1 className="headingXL">Need Dynamic Content?</h1>
      <h2 className="headingL">That's possible too</h2>
      <p>
        This page is still static, but it is possible to load dynamic content.
      </p>
      <button className="btn btn-black">Load Dynamic Content</button>
    </div>
  );
};

export default DynamicContent;
