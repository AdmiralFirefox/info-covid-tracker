import { FC } from "react";
import { HashLoader } from "react-spinners";
import styles from "../../styles/placeholders/Loading.module.scss";

const Loading: FC = () => {
  return (
    <div className={styles["loading-wrapper"]}>
      <div className={styles["loading-container"]}>
        <HashLoader color="#ffffff" size={60} />
        <h1>Loading Data</h1>
      </div>
    </div>
  );
};

export default Loading;
