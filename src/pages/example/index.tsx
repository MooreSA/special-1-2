import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { User } from "../../types/webApp";
import styles from "../../styles/ssr-csr.module.scss";
import table from "../../styles/table.module.scss";
import animation from "../../styles/animation.module.scss";

const SsrCsr = () => {
  const [userData, setUserData] = useState<User[]>(null);

  const fetchData = async () => {
    const res = await fetch("/api/users");
    const json = await res.json();
    setUserData(json.data);
  };

  const handleDelete = async (id: string) => {
    // TODO: Implement delete
    return;
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>API Routes</title>
      </Head>
      <h1 className="headingXL">API Routes</h1>
      <p className="headingL text-center">
        Want to create an API route? Do it in the same way as building a page!
      </p>
      <div className={styles.contentWrap}>
        <p className={styles.para}>
          You've already used one in fact. The dynamic content example used an
          internal API.
        </p>
        <table className={table.table}>
          <thead className={table.tableHead}>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Telephone</th>
              <th>Delete User</th>
            </tr>
          </thead>
          <tbody>
            {userData
              ? userData.map((user: User) => {
                  return (
                    <tr className={animation.fadeFwd}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.tel}</td>
                      <td className="text-center">
                        <button
                          className="btn btn-red btn--small"
                          onClick={() => {
                            handleDelete(user._id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
        {!userData ? (
          <button onClick={fetchData} className="btn btn-black">
            Populate the Table
          </button>
        ) : (
          <Link href="/example/form">
            <a className={`${animation.fadeFwd} btn btn-black`}>
              Add a new User
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default SsrCsr;
