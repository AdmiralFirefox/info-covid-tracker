import Image from "next/image";
import styles from "../../styles/search/SearchCountryTitle.module.scss";

const SearchCountryTitle = () => {
  return (
    <div className={styles["search-country-title"]}>
      <h1>Search Country</h1>
      <Image src="/assets/virus-scan.png" alt="" width={80} height={80} />
    </div>
  );
};

export default SearchCountryTitle;
