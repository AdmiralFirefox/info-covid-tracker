export interface CountriesProps {
  countries: {
    Global: {
      Date: string;
      NewConfirmed: number;
      NewDeaths: number;
      NewRecovered: number;
      TotalConfirmed: number;
      TotalDeaths: number;
      TotalRecovered: number;
    };
    Countries: {
      ID: string;
      Country: string;
      NewConfirmed: number;
      NewDeaths: number;
      NewRecovered: number;
      TotalConfirmed: number;
      TotalDeaths: number;
      TotalRecovered: number;
    }[];
    Date: string;
  };
}

export interface GlobalInfoProps {
  globalInfoData: {
    Date: string;
    NewConfirmed: number;
    NewDeaths: number;
    NewRecovered: number;
    TotalConfirmed: number;
    TotalDeaths: number;
    TotalRecovered: number;
  };
}

export interface CountriesInfoProps {
  countriesInfoData: {
    ID: string;
    Country: string;
    NewConfirmed: number;
    NewDeaths: number;
    NewRecovered: number;
    TotalConfirmed: number;
    TotalDeaths: number;
    TotalRecovered: number;
  }[];
  dateUpdated: string;
}

export interface GlobalDate {
  date: string;
}

export interface GlobalInfoCardProps {
  cardStyles: string;
  cardTitle: string;
  cardData: string;
}
