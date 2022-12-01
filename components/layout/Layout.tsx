import { FC } from "react";
import Navbar from "../navbar/Navbar";
import Meta from "./Meta";
import ErrorBoundary from "../errorboundary/ErrorBoundary";
import globalstyles from "../globalstyles/globalstyles";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <ErrorBoundary>
        <Meta />
        <Navbar />
        {children}
      </ErrorBoundary>

      <style jsx global>
        {globalstyles}
      </style>
    </>
  );
};

export default Layout;
