import styles from "../../styles/ssr-csr.module.scss";
import animation from "../../styles/animation.module.scss";
import Link from "next/link";
import { useState } from "react";

const DynamicContent = () => {
  const [content, setContent] = useState<String>(null);

  const loadContent = async () => {
    fetch("/api/test").then((res) => {
      res.json().then((data) => {
        setContent(data.content);
      });
    });
  };

  return (
    <div className={styles.container}>
      <h1 className="headingXL">Need Dynamic Content?</h1>
      <h2 className="headingL">That's possible too</h2>
      <p>
        This page is still static, but it is possible to load dynamic content.
      </p>
      <button onClick={loadContent} className="btn btn-black">
        Load Dynamic Content
      </button>

      {content ? (
        <div className={animation.fadeFwd}>
          <p className="text-center">{content}</p>
          <Link href="/intro/server-side">
            <button className="btn btn-black">
              How about Server-Sider-Rendering?
            </button>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default DynamicContent;
