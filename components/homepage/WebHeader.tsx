import Image from "next/image";
import { FC } from "react";
import styles from "../../styles/homepage/WebHeader.module.scss";

const WebHeader: FC = () => {
  return (
    <>
      <div className={styles["web-title"]}>
        <h1>COVID-19 Tracker</h1>
        <Image src="/assets/virus.png" alt="" width={85} height={85} />
      </div>
    </>
  );
};

export default WebHeader;
