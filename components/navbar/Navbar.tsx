import { FC } from "react";
import Link from "next/link";
import { FaGlobeAmericas } from "react-icons/fa";
import { TbVirusSearch } from "react-icons/tb";
import { IconContext } from "react-icons";
import { useRouter } from "next/router";
import styles from "../../styles/navbar/Navbar.module.scss";

const Navbar: FC = () => {
  const router = useRouter();

  return (
    <div className={styles["navbar-wrapper"]}>
      {router.pathname === "/" ? (
        <IconContext.Provider
          value={{ className: styles["globe-icon-active"] }}
        >
          <Link href="/">
            <FaGlobeAmericas />
          </Link>
        </IconContext.Provider>
      ) : (
        <IconContext.Provider value={{ className: styles["globe-icon"] }}>
          <Link href="/">
            <FaGlobeAmericas />
          </Link>
        </IconContext.Provider>
      )}

      {router.pathname === "/search" ? (
        <IconContext.Provider
          value={{ className: styles["search-virus-icon-active"] }}
        >
          <Link href="/search">
            <TbVirusSearch />
          </Link>
        </IconContext.Provider>
      ) : (
        <IconContext.Provider
          value={{ className: styles["search-virus-icon"] }}
        >
          <Link href="/search">
            <TbVirusSearch />
          </Link>
        </IconContext.Provider>
      )}
    </div>
  );
};

export default Navbar;
