import styles from "./index.module.scss";

const NoFinding = () => {
  return (
    <div className={styles.nothingFoundWrapper}>
      <p className={styles.nothingFoundMsg}>
        We could not find what you were looking for
      </p>
      <img
        className={styles.nothingFoundIMG}
        src="https://pokemontcg.guru/assets/open_pokeball-b25a98a42e1c74ec60d21737f23f41f55def704c355fdfdc8c462eaf0e5cf00d.png"
        alt="Empty Pokeball"
      />
    </div>
  );
};

export default NoFinding;
