import { FC } from "react";
import Navbar from "../navbar/Navbar";
import Meta from "./Meta";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
