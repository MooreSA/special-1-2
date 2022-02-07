import Head from "next/head";
import form from "../../styles/form.module.scss";
import styles from "../../styles/ssr-csr.module.scss";
import { useState } from "react";
import Link from "next/link";

const Form = () => {
  const [fName, setFName] = useState<string>("");
  const [tel, setTel] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>(null);
  const [success, setSuccess] = useState<string>(null);

  const validInputs: () => boolean = () => {
    if (fName.length > 0 && tel.length > 0 && email.length > 0) {
      return true;
    }
    return false;
  };

  const handleClick = async (e) => {
    // Stops the page from reloading
    e.preventDefault();

    // Checks if the inputs are valid
    if (!validInputs()) {
      setError("Please fill out all fields");
      return;
    }
    setError(null);
    console.log(
      JSON.stringify({
        name: fName,
        tel: parseInt(tel),
        email: email,
      })
    );
    const res = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: fName,
        tel: tel,
        email: email,
      }),
    });
    const data = await res.json();
    if (!data.success) {
      setError(data.message);
    } else {
      setSuccess(`User Created - ${data.data.name}`);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Example Form</title>
      </Head>
      <h1 className="headingXL">User Form</h1>
      <h2 className="headingL text-center">Let's build our own route</h2>
      <div className={styles.contentWrap}>
        <form>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              maxLength={50}
              type="text"
              onChange={(e) => setFName(e.target.value)}
              name="name"
              id="input-first"
              value={fName}
            />
          </div>
          <div>
            <label htmlFor="tel" className={form.label}>
              Telephone:{" "}
            </label>
            <input
              maxLength={12}
              type="tel"
              onChange={(e) => setTel(e.target.value)}
              name="tel"
              id="input-tel"
              value={tel}
            />
          </div>
          <div>
            <label className={form.label}>Email: </label>
            <input
              maxLength={50}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              id="input-email"
              value={email}
            />
          </div>
          {error ? <p>{error}</p> : null}
          {success ? <p>{success}</p> : null}
          <div>
            {success ? (
              <Link href="/example">
                <a className="btn btn-black">Table</a>
              </Link>
            ) : (
              <button onClick={handleClick} className="btn btn-green">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
