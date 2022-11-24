import Link from "next/link";
import { ChangeEvent, FC, useState } from "react";
import { SearchCountryProp } from "../../types/SearchCountriesType";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import Fuse from "fuse.js";
import styles from "../../styles/search/SearchCountries.module.scss";

type HandleChangeProps = {
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const SearchCountryTitle = () => {
  return (
    <div className={styles["search-country-title"]}>
      <h1>Search Country</h1>
      <Image src="/assets/virus-scan.png" alt="" width={85} height={85} />
    </div>
  );
};

const SearchCountryTextBox = ({ handleChange }: HandleChangeProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "3em 1.2em 0em 1.2em",
      }}
    >
      <Paper
        component="form"
        sx={{
          padding: "0.5em",
          display: "flex",
          alignItems: "center",
          width: "min(30em, 100%)",
          background: "#444444",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Country"
          inputProps={{
            "aria-label": "Search Country",
            style: { color: "#ffffff", fontWeight: 700 },
          }}
          onChange={handleChange}
        />
      </Paper>
    </Box>
  );
};

const SearchCountries: FC<SearchCountryProp> = ({ searchCountries }) => {
  const [searchCountry, setSearchCountry] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchCountry(e.target.value);
  };

  const fuse = new Fuse(searchCountries, {
    keys: ["Country", "Slug"],
    includeScore: true,
    threshold: 0.4,
  });

  const results = fuse.search(searchCountry);
  const countryResults = results.map((results) => results.item);

  return (
    <>
      <SearchCountryTitle />
      <SearchCountryTextBox handleChange={handleChange} />
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
