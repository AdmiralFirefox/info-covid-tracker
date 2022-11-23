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
<<<<<<< HEAD
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
=======
>>>>>>> 401111852b8208539ed1331e24428b6b6178f623
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

<<<<<<< HEAD
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
}

=======
>>>>>>> 401111852b8208539ed1331e24428b6b6178f623
export type GlobalDate = {
  date: string;
};
