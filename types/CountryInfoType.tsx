export type ContextType = {
  params: {
    Slug: string;
  };
};

export interface CountryProps {
  Country: string;
  Slug: string;
  ISO2: string;
}

export interface CountryInfoProps {
  countryData: {
    Country: string;
    Date: string;
    Confirmed: number;
    Deaths: number;
    Recovered: number;
    Active: number;
  };
}

export interface CountryInfoDataProps {
  country: {
    Country: string;
    Date: string;
    Confirmed: number;
    Deaths: number;
    Recovered: number;
    Active: number;
  }[];
}

export interface CountryTitleProps {
  countryName: string;
  dateUpdated: string;
}

export interface CountryCardProps {
  dataTitle: string;
  dataInfo: number;
  cardStyle: string;
  cardStyleWrapper: string;
}
