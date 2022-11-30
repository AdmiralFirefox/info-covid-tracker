import { FC } from "react";
import { HashLoader } from "react-spinners";
import styles from "../../styles/placeholders/LoadingComponent.module.scss";

const LoadingComponent: FC = () => {
  return (
    <div className={styles["loading-wrapper"]}>
      <div className={styles["loading-container"]}>
        <HashLoader color="#ffffff" size={60} />
        <h1>Loading Content</h1>
      </div>
    </div>
  );
};

export default LoadingComponent;
