import { NextPage } from "next";
import globalstyles from "../components/globalstyles/globalstyles";

const Search: NextPage = () => {
  return (
    <>
      <div>
        <h1>Search</h1>
      </div>

      <style jsx global>
        {globalstyles}
      </style>
    </>
  );
};

export default Search;
