import { FC } from "react";
import { HandleChangeProps } from "../../types/SearchCountriesType";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";

const SearchCountryTextBox: FC<HandleChangeProps> = ({
  handleChange,
  searchCountry,
}) => {
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
          value={searchCountry}
        />
      </Paper>
    </Box>
  );
};

export default SearchCountryTextBox;
