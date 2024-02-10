import styles from "./index.module.scss";
import Link from "next/link";

const Card = ({ imgSource, pokemonID }) => {
  return (
    <>
      <Link href={`selected-card/${pokemonID}`}>
        <div className={styles.Card}>
          <img className={styles.cardImage} src={imgSource} alt={pokemonID} />
        </div>
      </Link>
    </>
  );
};

export default Card;
