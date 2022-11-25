import { NextPage } from "next";
import { ChangeEvent, useState, useEffect } from "react";
import { SearchCountriesProps } from "../types/SearchCountriesType";
import SearchCountryTitle from "../components/search/SearchCountryTitle";
import SearchCountryTextBox from "../components/search/SearchCountryTextbox";
import SearchCountries from "../components/search/SearchCountries";
import CountryInfo from "../components/countryinfo/CountryInfo";

const Search: NextPage<SearchCountriesProps> = ({ searchCountries }) => {
  const [searchCountry, setSearchCountry] = useState("");
  const [countrySelected, setCountrySelected] = useState<boolean | string>(
    false
  );

  const countries = searchCountries.Countries;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchCountry(e.target.value);
  };

  const handleCountrySelect = (countryID: string) => {
    setCountrySelected(countryID);
  };

  const handleBackToSearch = () => {
    setCountrySelected(false);
  };

  // Save Country Selected State
  useEffect(() => {
    const json = localStorage.getItem("COUNTRY_SELECTED_STATE") as string;
    const saveCountrySelectedState = JSON.parse(json);

    if (saveCountrySelectedState) {
      setCountrySelected(saveCountrySelectedState);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(countrySelected);
    localStorage.setItem("COUNTRY_SELECTED_STATE", json);
  }, [countrySelected]);

  if (countrySelected) {
    return (
      <>
        {countries.map(
          (country) =>
            countrySelected === country.ID && (
              <CountryInfo
                countrySlug={country.Slug}
                key={country.ID}
                handleBackToSearch={handleBackToSearch}
              />
            )
        )}
      </>
    );
  }

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
        handleCountrySelect={handleCountrySelect}
      />
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
