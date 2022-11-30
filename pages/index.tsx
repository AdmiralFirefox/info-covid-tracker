import { NextPage } from "next";
import dynamic from "next/dynamic";
const WebHeader = dynamic(() => import("../components/homepage/WebHeader"));
const GlobalInfo = dynamic(() => import("../components/homepage/GlobalInfo"));
const CountryTable = dynamic(
  () => import("../components/homepage/CountryTable")
);
import { CountriesProps } from "../types/CountriesType";
import dayjs from "dayjs";

const Home: NextPage<CountriesProps> = ({ countries }) => {
  const globalInfo = countries.Global;
  const countriesInfo = countries.Countries;
  const dateUpdated = dayjs(countries.Date).format("MM/DD/YYYY, h:mm:ss a");

  return (
    <>
      <WebHeader />
      <GlobalInfo globalInfoData={globalInfo} />
      <CountryTable
        countriesInfoData={countriesInfo}
        dateUpdated={dateUpdated}
      />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res = await fetch("https://api.covid19api.com/summary");
  const countries = await res.json();

  return {
    props: {
      countries,
    },
    revalidate: 10,
  };
};
