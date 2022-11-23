import { NextPage } from "next";
import WebHeader from "../components/homepage/WebHeader";
import GlobalInfo from "../components/homepage/GlobalInfo";
import { CountriesProps } from "../types/CountriesType";
import globalstyles from "../components/globalstyles/globalstyles";

const Home: NextPage<CountriesProps> = ({ countries }) => {
  const globalInfo = countries.Global;

  return (
    <>
      <WebHeader />
      <GlobalInfo globalInfoData={globalInfo} />

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
