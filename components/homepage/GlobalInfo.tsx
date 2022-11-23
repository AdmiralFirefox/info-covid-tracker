import { FC } from "react";
import { GlobalInfoProps } from "../../types/CountriesType";
import dayjs from "dayjs";
import { GlobalDate } from "../../types/CountriesType";
import styles from "../../styles/homepage/GlobalInfo.module.scss";

const GlobalTitle = ({ date }: GlobalDate) => {
  return (
    <div className={styles["global-title"]}>
      <h1>Global</h1>
      <p>Updated: {date !== undefined ? date : "Unvailable..."}</p>
    </div>
  );
};

const GlobalInfo: FC<GlobalInfoProps> = ({ globalInfoData }) => {
  const redCard = "global-info-card-red";
  const orangeCard = "global-info-card-orange";
  const greenCard = "global-info-card-green";

  const dateUpdated = dayjs(globalInfoData.Date).format(
    "MM/DD/YYYY, h:mm:ss a"
  );

  return (
    <>
      <GlobalTitle date={dateUpdated} />

      <div className={styles["global-info"]}>
        <div className={styles["card-wrapper"]}>
          <div className={styles[redCard]}>
            <p>Confirmed Cases:</p>
            <p>{globalInfoData.TotalConfirmed.toLocaleString()}</p>
          </div>
        </div>
        <div className={styles["card-wrapper"]}>
          <div className={styles[orangeCard]}>
            <p>Confirmed Cases:</p>
            <p>{globalInfoData.TotalDeaths.toLocaleString()}</p>
          </div>
        </div>
        <div className={styles["card-wrapper"]}>
          <div className={styles[greenCard]}>
            <p>Confirmed Cases:</p>
            <p>{globalInfoData.TotalRecovered.toLocaleString()}</p>
          </div>
        </div>
        <div className={styles["card-wrapper"]}>
          <div className={styles[redCard]}>
            <p>New Cases:</p>
            <p>{globalInfoData.NewConfirmed.toLocaleString()}</p>
          </div>
        </div>
        <div className={styles["card-wrapper"]}>
          <div className={styles[orangeCard]}>
            <p>New Deaths:</p>
            <p>{globalInfoData.NewDeaths.toLocaleString()}</p>
          </div>
        </div>
        <div className={styles["card-wrapper"]}>
          <div className={styles[greenCard]}>
            <p>New Recovered:</p>
            <p>{globalInfoData.NewRecovered.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GlobalInfo;
