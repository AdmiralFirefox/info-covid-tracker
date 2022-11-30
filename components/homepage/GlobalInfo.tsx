import { FC } from "react";
import {
  GlobalInfoProps,
  GlobalInfoCardProps,
} from "../../types/CountriesType";
import dayjs from "dayjs";
import { GlobalDate } from "../../types/CountriesType";
import { motion } from "framer-motion";
import CountUp from "react-countup";
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
  delayTime,
}) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.7, delay: delayTime }}
      className={styles["card-wrapper"]}
    >
      <div className={styles[cardStyles]}>
        <p>{cardTitle}</p>
        <p>
          <CountUp end={cardData} separator="," duration={3} />
        </p>
      </div>
    </motion.div>
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
            cardData={globalInfoData.TotalConfirmed}
            delayTime={0.2}
          />
          <GlobalInfoCard
            cardStyles={orangeCard}
            cardTitle="Deaths:"
            cardData={globalInfoData.TotalDeaths}
            delayTime={0.3}
          />
          <GlobalInfoCard
            cardStyles={greenCard}
            cardTitle="Recovered:"
            cardData={globalInfoData.TotalRecovered}
            delayTime={0.4}
          />
          <GlobalInfoCard
            cardStyles={redCard}
            cardTitle="New Cases:"
            cardData={globalInfoData.NewConfirmed}
            delayTime={0.5}
          />
          <GlobalInfoCard
            cardStyles={orangeCard}
            cardTitle="New Deaths:"
            cardData={globalInfoData.NewDeaths}
            delayTime={0.6}
          />
          <GlobalInfoCard
            cardStyles={greenCard}
            cardTitle="New Recovered:"
            cardData={globalInfoData.NewRecovered}
            delayTime={0.7}
          />
        </div>
      </div>
    </>
  );
};

export default GlobalInfo;
