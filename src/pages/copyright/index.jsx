import styles from "../../styles/Copyright.module.scss";

const Copyright = () => {
  return (
    <>
      <div className={styles.Copyright}>
        <div className={styles.textWrapper}>
          <h1>Copyright Notice for Pokémon Cards</h1>
          <br />
          <h2>Important notice:</h2>
          <h3>
            This website is not produced, endorsed, supported, or affiliated
            with Nintendo or The Pokémon Company.
          </h3>
          <br />
          <p>
            All Pokémon Cards, including but not limited to card designs,
            artwork, text, and logos, are protected under copyright law.
          </p>
          <br />
          <p>
            Pokémon Cards are copyrighted material owned by Pokémon, Nintendo,
            Creatures Inc., and GAME FREAK inc. All rights reserved.
          </p>
          <br />
          <p>
            The Pokémon Company International is authorized by these copyright
            holders to produce and distribute Pokémon Cards worldwide.
          </p>
          <br />
          <p>
            The Pokémon name, logos, character names, and distinctive likenesses
            are trademarks of Nintendo.
          </p>
        </div>
      </div>
    </>
  );
};

export default Copyright;
