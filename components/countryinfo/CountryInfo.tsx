import { FC } from "react";
import {
  CountryInfoProps,
  CountryTitleProps,
  CountryCardProps,
  CountrySlugProps,
  BackToSearchProps,
  CountryLabelProps,
  CountryDataInfoProps,
} from "../../types/CountryInfoType";
import { useQuery, UseQueryResult } from "react-query";
import CountryChart from "./CountryChart";
import Axios from "axios";
import dayjs from "dayjs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import Loading from "../placeholders/Loading";
import Error from "../placeholders/Error";
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

// Main Component
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

  // Chart Label
  const countryLabel =
    data?.data !== undefined &&
    data?.data
      .map((country) => dayjs(country.Date).add(2, "day").format("MM/DD/YYYY"))
      .slice(-15)
      .reverse();

  // Confirmed Cases
  const countryConfirmedCasesInfo =
    data?.data !== undefined &&
    data?.data
      .map((country) => country.Confirmed)
      .slice(-15)
      .reverse();

  const countryConfirmedCasesInfo2 =
    data?.data !== undefined &&
    data?.data
      .map((country) => country.Confirmed)
      .slice(-17)
      .splice(1, 15)
      .reverse();

  // Confirmed Deaths
  const countryConfirmedDeathsInfo =
    data?.data !== undefined &&
    data?.data
      .map((country) => country.Deaths)
      .slice(-15)
      .reverse();

  const countryConfirmedDeathsInfo2 =
    data?.data !== undefined &&
    data?.data
      .map((country) => country.Deaths)
      .slice(-17)
      .splice(1, 15)
      .reverse();

  // Active Cases
  const countryActiveCases =
    data?.data !== undefined &&
    data?.data
      .map((country) => country.Active)
      .slice(-15)
      .reverse();

  const countryActiveCases2 =
    data?.data !== undefined &&
    data?.data
      .map((country) => country.Active)
      .slice(-17)
      .splice(1, 15)
      .reverse();

  // Subtracting Two Data Array
  const absDifference = (arr1: number[], arr2: number[]) => {
    const res = [];
    for (let i = 0; i < arr1.length; i++) {
      const el = (arr1[i] || 0) - (arr2[i] || 0);
      res[i] = el;
    }
    return res;
  };

  // New Cases Chart
  const combinedConfirmedCasesChart = absDifference(
    countryConfirmedCasesInfo as number[],
    countryConfirmedCasesInfo2 as number[]
  );

  // New Deaths Chart
  const combinedConfirmedDeathsChart = absDifference(
    countryConfirmedDeathsInfo as number[],
    countryConfirmedDeathsInfo2 as number[]
  );

  // New Active Cases
  const combinedActiveCasesChart = absDifference(
    countryActiveCases as number[],
    countryActiveCases2 as number[]
  );

  if (isLoading) {
    return (
      <>
        <BackToSearchPage handleBackToSearch={handleBackToSearch} />
        <Loading />
      </>
    );
  }

  if (isError) {
    return (
      <>
        <BackToSearchPage handleBackToSearch={handleBackToSearch} />
        <Error />
      </>
    );
  }

  const latestCountryInfo = data?.data[data?.data.length - 1];

  const dateUpdated = dayjs(latestCountryInfo!.Date)
    .add(2, "day")
    .format("MM/DD/YYYY, h:mm:ss a");

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

      <CountryChart
        countryLabel={countryLabel as CountryLabelProps}
        countryDataInfo={countryConfirmedCasesInfo as CountryDataInfoProps}
        chartTitle="Confirmed Cases"
        chartSubtitle="Number of Confirmed Cases"
      />

      <CountryChart
        countryLabel={countryLabel as CountryLabelProps}
        countryDataInfo={combinedConfirmedCasesChart as CountryDataInfoProps}
        chartTitle="New Cases"
        chartSubtitle="New Cases Each Day"
      />

      <CountryChart
        countryLabel={countryLabel as CountryLabelProps}
        countryDataInfo={countryConfirmedDeathsInfo as CountryDataInfoProps}
        chartTitle="Confirmed Deaths"
        chartSubtitle="Number of Confirmed Deaths"
      />

      <CountryChart
        countryLabel={countryLabel as CountryLabelProps}
        countryDataInfo={combinedConfirmedDeathsChart as CountryDataInfoProps}
        chartTitle="New Deaths Deaths"
        chartSubtitle="New Deaths Each Day"
      />

      <CountryChart
        countryLabel={countryLabel as CountryLabelProps}
        countryDataInfo={countryActiveCases as CountryDataInfoProps}
        chartTitle="Active Cases"
        chartSubtitle="Number of Active Cases"
      />

      <CountryChart
        countryLabel={countryLabel as CountryLabelProps}
        countryDataInfo={combinedActiveCasesChart as CountryDataInfoProps}
        chartTitle="New Active Cases"
        chartSubtitle="New Active Cases Each Day"
      />
    </>
  );
};

export default CountryInfo;
