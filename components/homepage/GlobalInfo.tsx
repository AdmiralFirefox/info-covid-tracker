import { FC } from "react";
import {
  GlobalInfoProps,
  GlobalInfoCardProps,
} from "../../types/CountriesType";
import dayjs from "dayjs";
import { GlobalDate } from "../../types/CountriesType";
import styles from "../../styles/homepage/GlobalInfo.module.scss";

const GlobalTitle: FC<GlobalDate> = ({ date }) => {
  return (
    <div className={styles["global-title"]}>
      <h1>Global</h1>
      <p>Updated: {date !== undefined ? date : "Unvailable..."}</p>
    </div>
  );
};

const GlobalInfoCard: FC<GlobalInfoCardProps> = ({
  cardStyles,
  cardTitle,
  cardData,
}) => {
  return (
    <div className={styles["card-wrapper"]}>
      <div className={styles[cardStyles]}>
        <p>{cardTitle}</p>
        <p>{cardData}</p>
      </div>
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

      <div className={styles["global-info-wrapper"]}>
        <div className={styles["global-info"]}>
          <GlobalInfoCard
            cardStyles={redCard}
            cardTitle="Confirmed Cases:"
            cardData={globalInfoData.TotalConfirmed.toLocaleString()}
          />
          <GlobalInfoCard
            cardStyles={orangeCard}
            cardTitle="Deaths:"
            cardData={globalInfoData.TotalDeaths.toLocaleString()}
          />
          <GlobalInfoCard
            cardStyles={greenCard}
            cardTitle="Recovered:"
            cardData={globalInfoData.TotalRecovered.toLocaleString()}
          />
          <GlobalInfoCard
            cardStyles={redCard}
            cardTitle="New Cases:"
            cardData={globalInfoData.NewConfirmed.toLocaleString()}
          />
          <GlobalInfoCard
            cardStyles={orangeCard}
            cardTitle="New Deaths:"
            cardData={globalInfoData.NewDeaths.toLocaleString()}
          />
          <GlobalInfoCard
            cardStyles={greenCard}
            cardTitle="New Recovered:"
            cardData={globalInfoData.NewRecovered.toLocaleString()}
          />
        </div>
      </div>
    </>
  );
};

export default GlobalInfo;
