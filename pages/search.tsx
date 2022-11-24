import { NextPage } from "next";
import { SearchCountriesProps } from "../types/SearchCountriesType";
import SearchCountries from "../components/search/SearchCountries";
import globalstyles from "../components/globalstyles/globalstyles";

const Search: NextPage<SearchCountriesProps> = ({ searchCountries }) => {
  const countries = searchCountries.Countries;

  return (
    <>
      <SearchCountries searchCountries={countries} />

      <style jsx global>
        {globalstyles}
      </style>
    </>
  );
};

export default Search;

export const getStaticProps = async () => {
  const res = await fetch("https://api.covid19api.com/summary");
  const searchCountries = await res.json();

  return {
    props: {
      searchCountries,
    },
    revalidate: 10,
  };
};
