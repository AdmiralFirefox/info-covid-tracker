import { NextPage } from "next";
import dynamic from "next/dynamic";
const WebHeader = dynamic(() => import("../components/homepage/WebHeader"), {
  suspense: true,
});
const GlobalInfo = dynamic(() => import("../components/homepage/GlobalInfo"), {
  suspense: true,
});
const CountryTable = dynamic(
  () => import("../components/homepage/CountryTable"),
  {
    suspense: true,
  }
);
import { Suspense } from "react";
import LoadingComponent from "../components/placeholders/LoadingComponent";
import { CountriesProps } from "../types/CountriesType";
import dayjs from "dayjs";

const Home: NextPage<CountriesProps> = ({ countries }) => {
  const globalInfo = countries.Global;
  const countriesInfo = countries.Countries;
  const dateUpdated = dayjs(countries.Date).format("MM/DD/YYYY, h:mm:ss a");

  return (
    <Suspense fallback={<LoadingComponent />}>
      <WebHeader />
      <GlobalInfo globalInfoData={globalInfo} />
      <CountryTable
        countriesInfoData={countriesInfo}
        dateUpdated={dateUpdated}
      />
    </Suspense>
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
    revalidate: 60,
  };
};
