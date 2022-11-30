export interface CountrySlugProps {
  countrySlug: string;
  handleBackToSearch: () => void;
}

export interface CountryInfoProps {
  data: {
    Country: string;
    Date: string;
    Confirmed: number;
    Deaths: number;
    Recovered: number;
    Active: number;
  }[];
}

export interface BackToSearchProps {
  handleBackToSearch: () => void;
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
  delayTime: number;
}

export type CountryLabelProps = string[] | undefined;

export type CountryDataInfoProps = number[] | undefined;
