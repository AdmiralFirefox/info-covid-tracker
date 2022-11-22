import { NextPage } from "next";
import WebHeader from "../components/homepage/WebHeader";
import globalstyles from "../components/globalstyles/globalstyles";

const Home: NextPage = () => {
  return (
    <>
      <WebHeader />

      <style jsx global>
        {globalstyles}
      </style>
    </>
  );
};

export default Home;
