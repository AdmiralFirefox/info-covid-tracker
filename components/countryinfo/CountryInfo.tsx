import { FC } from "react";
import {
  CountryInfoProps,
  CountryTitleProps,
  CountryCardProps,
} from "../../types/CountryInfoType";
import dayjs from "dayjs";
import styles from "../../styles/countryinfo/CountryInfo.module.scss";

const CountryTitle: FC<CountryTitleProps> = ({ countryName, dateUpdated }) => {
  return (
    <div className={styles["country-title"]}>
      <h1>{countryName}</h1>
      <p>
        Updated: {dateUpdated !== undefined ? dateUpdated : "Unvailable..."}
      </p>
    </div>
  );
};

const CountryCard: FC<CountryCardProps> = ({
  dataTitle,
  dataInfo,
  cardStyle,
  cardStyleWrapper,
}) => {
  return (
    <div className={styles[cardStyleWrapper]}>
      <div className={styles[cardStyle]}>
        <h1>{dataTitle}</h1>
        <p>{dataInfo.toLocaleString()}</p>
      </div>
    </div>
  );
};

const CountryInfo: FC<CountryInfoProps> = ({ countryData }) => {
  const cardContentWrapper = "card-content-wrapper";
  const redCard = "country-card-red";
  const orangeCard = "country-card-orange";
  const greenCard = "country-card-green";
  const darkBlueCard = "country-card-dark-blue";

  const dateUpdated = dayjs(countryData.Date).format("MM/DD/YYYY, h:mm:ss a");

  return (
    <>
      <CountryTitle
        countryName={countryData.Country}
        dateUpdated={dateUpdated}
      />

      <div className={styles["country-card-container-wrapper"]}>
        <div className={styles["country-card-container"]}>
          <CountryCard
            dataTitle={"Confirmed Cases:"}
            dataInfo={countryData.Confirmed}
            cardStyle={redCard}
            cardStyleWrapper={cardContentWrapper}
          />
          <CountryCard
            dataTitle={"Deaths:"}
            dataInfo={countryData.Deaths}
            cardStyle={orangeCard}
            cardStyleWrapper={cardContentWrapper}
          />
          <CountryCard
            dataTitle={"Recovered:"}
            dataInfo={countryData.Recovered}
            cardStyle={greenCard}
            cardStyleWrapper={cardContentWrapper}
          />
          <CountryCard
            dataTitle={"Active Cases:"}
            dataInfo={countryData.Active}
            cardStyle={darkBlueCard}
            cardStyleWrapper={cardContentWrapper}
          />
        </div>
      </div>
    </>
  );
};

export default CountryInfo;
