import { NextPage } from "next";
import WebHeader from "../components/homepage/WebHeader";
import GlobalInfo from "../components/homepage/GlobalInfo";
import CountryTable from "../components/homepage/CountryTable";
import { CountriesProps } from "../types/CountriesType";
import globalstyles from "../components/globalstyles/globalstyles";

const Home: NextPage<CountriesProps> = ({ countries }) => {
  const globalInfo = countries.Global;
  const countriesInfo = countries.Countries;
  
  return (
    <>
      <WebHeader />
      <GlobalInfo globalInfoData={globalInfo} />
      <CountryTable countriesInfoData={countriesInfo} />
      <style jsx global>
        {globalstyles}
      </style>
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
