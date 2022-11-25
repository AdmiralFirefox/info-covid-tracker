import { NextPage } from "next";
import { ChangeEvent, useState } from "react";
import { SearchCountriesProps } from "../types/SearchCountriesType";
import SearchCountryTitle from "../components/search/SearchCountryTitle";
import SearchCountryTextBox from "../components/search/SearchCountryTextbox";
import SearchCountries from "../components/search/SearchCountries";
import globalstyles from "../components/globalstyles/globalstyles";

const Search: NextPage<SearchCountriesProps> = ({ searchCountries }) => {
  const [searchCountry, setSearchCountry] = useState("");

  const countries = searchCountries.Countries;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchCountry(e.target.value);
  };

  return (
    <>
      <SearchCountryTitle />
      <SearchCountryTextBox
        handleChange={handleChange}
        searchCountry={searchCountry}
      />
      <SearchCountries
        searchCountries={countries}
        searchCountry={searchCountry}
      />

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
