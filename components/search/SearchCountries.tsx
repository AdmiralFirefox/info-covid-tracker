import { FC } from "react";
import { SearchCountryProp } from "../../types/SearchCountriesType";
import Fuse from "fuse.js";
import styles from "../../styles/search/SearchCountries.module.scss";

const SearchCountries: FC<SearchCountryProp> = ({
  searchCountries,
  searchCountry,
  handleCountrySelect,
}) => {
  const fuse = new Fuse(searchCountries, {
    keys: ["Country", "Slug"],
    includeScore: true,
    threshold: 0.4,
  });

  const results = fuse.search(searchCountry);
  const countryResults = results.map((results) => results.item);

  return (
    <>
      {searchCountry !== "" && (
        <p className={styles["search-results-text"]}>
          Search Results for: {searchCountry}
        </p>
      )}

      <div className={styles["search-countries-wrapper"]}>
        <div className={styles["search-countries"]}>
          {countryResults.map((searchCountry) => (
            <button
              key={searchCountry.ID}
              onClick={() => handleCountrySelect(searchCountry.ID)}
              className={styles["countries-card"]}
            >
              <h1>{searchCountry.Country}</h1>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchCountries;
