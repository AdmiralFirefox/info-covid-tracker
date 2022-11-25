import { FC } from "react";
import Image from "next/image";
import styles from "../../styles/placeholders/Error.module.scss";

const Error: FC = () => {
  return (
    <div className={styles["error-wrapper"]}>
      <div className={styles["error-container"]}>
        <div className={styles["image-wrapper"]}>
          <Image src="/assets/error.png" alt="Error" width={75} height={75} />
        </div>
        <h1>Something went wrong.</h1>
        <p>Reload the Page or try again in a few minutes.</p>
      </div>
    </div>
  );
};

export default Error;
