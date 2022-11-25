import { FC } from "react";
import Navbar from "../navbar/Navbar";
import Meta from "./Meta";
import globalstyles from "../globalstyles/globalstyles";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />
      {children}

      <style jsx global>
        {globalstyles}
      </style>
    </>
  );
};

export default Layout;
