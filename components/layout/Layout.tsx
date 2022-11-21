import { FC } from "react";
import Meta from "./Meta";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Meta />
      {children}
    </>
  );
};

export default Layout;
