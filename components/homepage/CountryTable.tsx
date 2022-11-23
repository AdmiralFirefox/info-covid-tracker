import { FC } from "react";
import { CountriesInfoProps } from "../../types/CountriesType";
import { DataGrid, GridColDef, GridRowId } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import styles from "../../styles/homepage/CountryTable.module.scss";

type IDProps = {
  ID: GridRowId;
};

type ValueProps = {
  value: number;
};

const columns: GridColDef[] = [
  {
    field: "Country",
    headerName: "Country",
    width: 200,
    description: "Sort Countries by Name",
  },
  {
    field: "TotalConfirmed",
    headerName: "Confirmed",
    width: 140,
    description: "Sort Countries by Confirmed Cases",
    valueFormatter: ({ value }: ValueProps) => value.toLocaleString(),
  },
  {
    field: "TotalDeaths",
    headerName: "Deaths",
    width: 140,
    description: "Sort Countries by Deaths",
    valueFormatter: ({ value }: ValueProps) => value.toLocaleString(),
  },
  {
    field: "TotalRecovered",
    headerName: "Recovered",
    width: 140,
    description: "Sort Countries by Recovered",
    valueFormatter: ({ value }: ValueProps) => value.toLocaleString(),
  },
  {
    field: "NewConfirmed",
    headerName: "New Confirmed",
    width: 140,
    description: "Sort Countries by New Confirmed Cases",
    valueFormatter: ({ value }: ValueProps) => value.toLocaleString(),
  },
  {
    field: "NewDeaths",
    headerName: "New Deaths",
    width: 140,
    description: "Sort Countries by New Deaths",
    valueFormatter: ({ value }: ValueProps) => value.toLocaleString(),
  },
  {
    field: "NewRecovered",
    headerName: "New Recovered",
    width: 140,
    description: "Sort Countries by New Recovered",
    valueFormatter: ({ value }: ValueProps) => value.toLocaleString(),
  },
];

const CountryTable: FC<CountriesInfoProps> = ({ countriesInfoData }) => {
  const countriesInfo = countriesInfoData.map((country) => {
    return {
      ID: country.ID,
      Country: country.Country,
      NewConfirmed: country.NewConfirmed,
      NewDeaths: country.NewDeaths,
      NewRecovered: country.NewRecovered,
      TotalConfirmed: country.TotalConfirmed,
      TotalDeaths: country.TotalDeaths,
      TotalRecovered: country.TotalRecovered,
    };
  });

  return (
    <>
      <div className={styles["countries-title"]}>
        <h1>Countries</h1>
      </div>

      <div className={styles["table-wrapper"]}>
        <Box
          sx={{
            width: "min(70em, 100%)",
            height: "40em",
            margin: "2em 1.5em 6.5em 1.5em",
          }}
        >
          <DataGrid
            rows={countriesInfo}
            getRowId={(row: IDProps) => row.ID}
            columns={columns}
            pageSize={15}
            rowsPerPageOptions={[15]}
            sortingOrder={["desc", "asc"]}
            initialState={{
              sorting: {
                sortModel: [{ field: "TotalConfirmed", sort: "desc" }],
              },
            }}
            sx={{
              boxShadow: "5px 10px 20px 1px rgba(0, 0, 0, 0.5)",
              border: 6,
              borderColor: "#4C57A6",
              userSelect: "none",

              // Prevent Text from overflowing
              "& .MuiDataGrid-cellContent": {
                textOverflow: "clip",
                whiteSpace: "normal",
              },

              // Entire Header Content
              "& .MuiDataGrid-columnHeaders": {
                color: "#ffffff",
                background: "#37474F",
                outline: "none",
                borderBottom: "none",
              },

              // Icons in the Header and Footer
              "& .MuiButtonBase-root": {
                color: "#ffffff",
              },

              // Entire Table Row
              "& .MuiDataGrid-row": {
                color: "#ffffff",
                transition: "all 0.2s ease",

                "&:hover": {
                  background: "#444",
                },
              },

              // Selected Row
              "& .MuiDataGrid-row.Mui-selected": {
                background: "none",

                "&:hover": {
                  background: "#444",
                },
              },

              // Cell
              "& .MuiDataGrid-cell": {
                bordeBottom: "3px solid #ffffff",

                "&:focus": {
                  outline: "none",
                },
              },

              // Removing Focuced Header
              "& .MuiDataGrid-columnHeader": {
                outline: "none !important",
              },

              // Footer Container
              "& .MuiDataGrid-footerContainer": {
                background: "#37474F",
                borderTop: "none",
                color: "#ffffff",
              },

              // Footer Displayed Rows
              "& .MuiTablePagination-displayedRows": {
                color: "#ffffff",
              },

              // Hide Selected Row Count
              "& .MuiDataGrid-selectedRowCount": {
                visibility: "hidden",
              },
            }}
          />
        </Box>
      </div>
    </>
  );
};

export default CountryTable;
