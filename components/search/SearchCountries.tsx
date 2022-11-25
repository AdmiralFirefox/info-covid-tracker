import Link from "next/link";
import { FC } from "react";
import { SearchCountryProp } from "../../types/SearchCountriesType";
import Fuse from "fuse.js";
import styles from "../../styles/search/SearchCountries.module.scss";

const SearchCountries: FC<SearchCountryProp> = ({
  searchCountries,
  searchCountry,
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
            <div key={searchCountry.ID} className={styles["countries-card"]}>
              <h1>
                <Link href={`/country/${searchCountry.Slug}`}>
                  {searchCountry.Country}
                </Link>
              </h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchCountries;
