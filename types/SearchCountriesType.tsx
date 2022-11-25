import { ChangeEvent } from "react";

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
  searchCountry: string;
}

export interface HandleChangeProps {
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  searchCountry: string;
}
