import { FC } from "react";
import {
  CountryInfoProps,
  CountryTitleProps,
  CountryCardProps,
  CountrySlugProps,
  BackToSearchProps,
} from "../../types/CountryInfoType";
import { useQuery, UseQueryResult } from "react-query";
import Axios from "axios";
import dayjs from "dayjs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import styles from "../../styles/countryinfo/CountryInfo.module.scss";

// Fetching Data for Countries
const fetchCountryData = async (country: string) => {
  return await Axios.get(`https://api.covid19api.com/total/country/${country}`);
};

// Back to Search Page
const BackToSearchPage: FC<BackToSearchProps> = ({ handleBackToSearch }) => {
  return (
    <button onClick={handleBackToSearch} className={styles["back-icon-button"]}>
      <IconContext.Provider value={{ className: styles["back-icon"] }}>
        <BsFillArrowLeftCircleFill />
      </IconContext.Provider>
    </button>
  );
};

// Country Title
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

// Country Card
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

const CountryInfo: FC<CountrySlugProps> = ({
  countrySlug,
  handleBackToSearch,
}) => {
  const cardContentWrapper = "card-content-wrapper";
  const redCard = "country-card-red";
  const orangeCard = "country-card-orange";
  const greenCard = "country-card-green";
  const darkBlueCard = "country-card-dark-blue";

  const { data, isLoading, isError }: UseQueryResult<CountryInfoProps, Error> =
    useQuery<CountryInfoProps, Error>(
      ["countrySlug", countrySlug],
      () => fetchCountryData(countrySlug),
      {
        refetchOnWindowFocus: false,
        cacheTime: 5000,
        enabled: Boolean(countrySlug),
      }
    );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Something Went Wrong</h1>;
  }

  const latestCountryInfo = data?.data[data?.data.length - 1];

  const dateUpdated = dayjs(latestCountryInfo!.Date).format(
    "MM/DD/YYYY, h:mm:ss a"
  );

  return (
    <>
      <BackToSearchPage handleBackToSearch={handleBackToSearch} />
      <CountryTitle
        countryName={latestCountryInfo!.Country}
        dateUpdated={dateUpdated}
      />

      <div className={styles["country-card-container-wrapper"]}>
        <div className={styles["country-card-container"]}>
          <CountryCard
            dataTitle={"Confirmed Cases:"}
            dataInfo={latestCountryInfo!.Confirmed}
            cardStyle={redCard}
            cardStyleWrapper={cardContentWrapper}
          />
          <CountryCard
            dataTitle={"Deaths:"}
            dataInfo={latestCountryInfo!.Deaths}
            cardStyle={orangeCard}
            cardStyleWrapper={cardContentWrapper}
          />
          <CountryCard
            dataTitle={"Recovered:"}
            dataInfo={latestCountryInfo!.Recovered}
            cardStyle={greenCard}
            cardStyleWrapper={cardContentWrapper}
          />
          <CountryCard
            dataTitle={"Active Cases:"}
            dataInfo={latestCountryInfo!.Active}
            cardStyle={darkBlueCard}
            cardStyleWrapper={cardContentWrapper}
          />
        </div>
      </div>
    </>
  );
};

export default CountryInfo;
