import { NextPage } from "next";
import WebHeader from "../components/homepage/WebHeader";
import GlobalInfo from "../components/homepage/GlobalInfo";
<<<<<<< HEAD
import CountryTable from "../components/homepage/CountryTable";
=======
>>>>>>> 401111852b8208539ed1331e24428b6b6178f623
import { CountriesProps } from "../types/CountriesType";
import globalstyles from "../components/globalstyles/globalstyles";

const Home: NextPage<CountriesProps> = ({ countries }) => {
  const globalInfo = countries.Global;
<<<<<<< HEAD
  const countriesInfo = countries.Countries;
=======
>>>>>>> 401111852b8208539ed1331e24428b6b6178f623

  return (
    <>
      <WebHeader />
      <GlobalInfo globalInfoData={globalInfo} />
<<<<<<< HEAD
      <CountryTable countriesInfoData={countriesInfo} />
=======
>>>>>>> 401111852b8208539ed1331e24428b6b6178f623

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
