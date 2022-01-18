import Head from "next/head";
import styles from "../styles/form.module.scss";
import { useState } from "react";
import Link from "next/link";

const Form = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className={styles.container}>
      <Head>
        <title>Example Form</title>
      </Head>
      <Link href="/">Home</Link>
      <h1>User Form</h1>
      <form className={styles.formWrap}>
        <div className={styles.formGroup}>
          <label className={styles.label}>First Name: </label>
          <input
            type="text"
            onChange={(e) => setFName(e.target.value)}
            name="fName"
            id="input-first"
            value={fName}
            className={styles.textInput}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Last Name: </label>
          <input
            type="text"
            onChange={(e) => setLName(e.target.value)}
            name="lName"
            id="input-last"
            value={lName}
            className={styles.textInput}
          />
        </div>
        <div className={`${styles.formGroup} ${styles.formGroupWide}`}>
          <label className={styles.label}>Email: </label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="input-email"
            value={fName}
            className={styles.textInput}
          />
        </div>
        <div className={`${styles.formGroup} ${styles.formGroupWide}`}>
          <button className={styles.submitBtn}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
