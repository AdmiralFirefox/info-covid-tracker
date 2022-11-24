import { NextPage } from "next";
import { useRouter } from "next/router";
import {
  CountryProps,
  CountryInfoDataProps,
  ContextType,
} from "../../types/CountryInfoType";
import CountryInfo from "../../components/countryinfo/CountryInfo";
import globalstyles from "../../components/globalstyles/globalstyles";

const Country: NextPage<CountryInfoDataProps> = ({ country }) => {
  const router = useRouter();

  const latestCountryInfo = country[country.length - 1];

  if (router.isFallback) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <CountryInfo countryData={latestCountryInfo} />

      <style jsx global>
        {globalstyles}
      </style>
    </>
  );
};

export default Country;

export const getStaticPaths = async () => {
  const res = await fetch("https://api.covid19api.com/summary");

  const countryInfo: CountryProps = await res.json();

  const searchCountries = countryInfo.Countries;

  const paths = searchCountries.map((country) => {
    return {
      params: { Slug: country.Slug },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps = async (context: ContextType) => {
  const Slug = context.params.Slug;
  const res = await fetch(`https://api.covid19api.com/total/country/${Slug}`);
  const country = await res.json();

  return {
    props: {
      country,
    },
    revalidate: 10,
  };
};
