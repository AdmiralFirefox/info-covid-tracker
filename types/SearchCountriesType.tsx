export interface SearchCountriesProps {
  searchCountries: {
    Countries: {
      ID: string;
      Country: string;
      Slug: string;
    }[];
  };
}

export interface SearchCountryProp {
  searchCountries: {
    ID: string;
    Country: string;
    Slug: string;
  }[];
}
