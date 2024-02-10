import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import GenericForm from "@/components/genericForm/genericForm";
import styles from "../../styles/SearchForCards.module.scss";
import Card from "@/components/card";
import Loading from "@/components/loading";
import NoFinding from "@/components/noFinding";

const SearchForCards = () => {
  const [pokemonCards, setPokemonCards] = useState([]);
  const [loader, setLoader] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      const apiUrl = `https://api.pokemontcg.io/v2/cards?q=name:${router.query.cardSearched}`;
      const apiKey = "02078431-603a-469d-bdfe-0bac9fa85709";

      const response = await fetch(apiUrl, {
        headers: {
          "X-Api-Key": apiKey,
        },
      });
      const data = await response.json();
      setPokemonCards(data.data);
      setLoader(false);
      localStorage.setItem(
        `searchedPokemonCards_${router.query.cardSearched}`,
        JSON.stringify(data.data)
      );
    };

    const storedPokemonCards = localStorage.getItem(
      `searchedPokemonCards_${router.query.cardSearched}`
    );
    if (storedPokemonCards) {
      setPokemonCards(JSON.parse(storedPokemonCards));
    } else {
      fetchData();
    }

    return () => {
      localStorage.removeItem(
        `searchedPokemonCards_${router.query.cardSearched}`
      );
    };
  }, [router.query.cardSearched]);

  return (
    <>
      <div className={styles.SearchForCards}>
        <div className={styles.formWrapper}>
          <GenericForm
            searchRoute="/card-searched"
            formTitle="Search for a different Pokémon"
            placeholderText="Example: Bulbasaur"
            btnText="Go!"
          />
        </div>
        <div className={styles.cardList}>
          {loader && (
            <>
              <Loading />
            </>
          )}
          {!loader && pokemonCards.length === 0 && (
            <>
              <NoFinding />
            </>
          )}

          {!loader &&
            pokemonCards.map((data) => (
              <Card
                key={data.id}
                imgSource={data.images.small}
                pokemonID={data.id}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default SearchForCards;
