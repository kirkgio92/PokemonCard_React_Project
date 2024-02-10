import GenericForm from "../genericForm/genericForm";
import styles from "./index.module.scss";

const HeroSection = () => {
  return (
    <>
      <div className={styles.HeroSection}>
        <h1 className={styles.mainTitle}>
          Welcome to the
          <br />
          <span>Pokémon Cards</span>
          <br />
          Search Engine
        </h1>
        <div className={styles.imagesAndFormWrapper}>
          <img
            className={styles.mewToo}
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png"
            alt="MewToo"
          />
          <GenericForm
            searchRoute="/card-searched"
            formTitle="Search for a Pokémon"
            placeholderText="Example: Bulbasaur"
            btnText="Go!"
          />
          <img
            className={styles.dragonite}
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png"
            alt="Dragonite"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
