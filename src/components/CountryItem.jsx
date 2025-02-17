import styles from "./CountryItem.module.css";

function CountryItem({country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
     { console.log(country)}
      
    </li>
  );
}

export default CountryItem;
