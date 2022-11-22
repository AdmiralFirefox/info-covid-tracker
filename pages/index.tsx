import { NextPage } from "next";
import globalstyles from "../components/globalstyles/globalstyles";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <h1>Home</h1>
      </div>

      <style jsx global>
        {globalstyles}
      </style>
    </>
  );
};

export default Home;
