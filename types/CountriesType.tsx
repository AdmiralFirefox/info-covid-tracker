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

export type GlobalDate = {
  date: string;
};
