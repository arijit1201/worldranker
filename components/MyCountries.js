import styles from "../styles/MyCountries.module.css";
const MyCountries = ({ countries }) => {
  // {
  //     countries.map(
  //         (country) => {
  //             console.log(country.name.common)
  //         }
  //     )
  // }
  let visibleCountries = countries.slice(0, 10);
  return (
    <div className={styles.countriesTable}>
      <div className={styles.innerTable}>
        <div className={styles.namecol}>
          <h1>Name</h1>
          {visibleCountries.map((country) => (
            <p key={country.name.common} className={styles.namebold}>{country.name.common}</p>
          ))}
        </div>
        <div className={styles.namecol}>
          <h1>Area</h1>
          {visibleCountries.map((country) => {
            return <p key={country.name.common}>{country.area}</p>;
          })}
        </div>
        <div className={styles.namecol}>
          <h1>Population</h1>
          {visibleCountries.map((country) => (
            <p key={country.name.common}>{country.population}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCountries;
