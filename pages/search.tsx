import { NextPage } from "next";
import { SearchCountriesType } from "../types/SearchCountriesType";
import SearchCountries from "../components/search/SearchCountries";
import globalstyles from "../components/globalstyles/globalstyles";

const Search: NextPage<SearchCountriesType> = ({ searchCountries }) => {
  return (
    <>
      <SearchCountries searchCountries={searchCountries} />

      <style jsx global>
        {globalstyles}
      </style>
    </>
  );
};

export default Search;

export const getStaticProps = async () => {
  const res = await fetch("https://api.covid19api.com/countries");
  const searchCountries = await res.json();

  return {
    props: {
      searchCountries,
    },
    revalidate: 10,
  };
};
