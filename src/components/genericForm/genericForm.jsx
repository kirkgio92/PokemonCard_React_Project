import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.scss";
import pokemonNames from "@/assets/pokemonsName";

const GenericForm = ({ searchRoute, formTitle, placeholderText, btnText }) => {
  const router = useRouter();
  const [searchedValue, setSearchedValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 200);
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    router.push(`${searchRoute}/${searchedValue}`);
    setSearchedValue("");
  };

  const onHandleChange = (e) => {
    const typedValue = e.target.value;
    setSearchedValue(typedValue);

    const pokemonNameFilter = pokemonNames.filter((pokemon) =>
      pokemon.toLowerCase().includes(typedValue.toLowerCase())
    );
    setSuggestions(pokemonNameFilter);
  };

  const handleSelection = (e) => {
    const selectedPokemon = e.target.value || e.target.textContent;
    setSearchedValue(selectedPokemon);
  };

  const handleListSelection = (e) => {
    const selectedListPokemon = e.target.value || e.target.textContent;
    setSearchedValue(selectedListPokemon);
  };

  return (
    <>
      <div className={styles.GenericForm}>
        <h2 className={styles.formTitle}>{formTitle || "Search for a Card"}</h2>
        <select
          className={styles.dropdownSelect}
          onChange={handleSelection}
          value={searchedValue}
        >
          <option value="">Select a Pokémon</option>
          {pokemonNames.map((pokemon, index) => (
            <option key={index} value={pokemon}>
              {pokemon}
            </option>
          ))}
        </select>
        <p>or type below the pokemon you need</p>
        <div className={styles.formWrapper}>
          <form className={styles.inputsWrapper} onSubmit={onHandleSubmit}>
            <input
              className={styles.inputSearch}
              value={searchedValue}
              onChange={onHandleChange}
              onFocus={onFocus}
              onBlur={onBlur}
              type="text"
              placeholder={placeholderText || "Example: Bulbasaur"}
            />
            <input
              className={styles.inputBtn}
              type="submit"
              value={btnText || "Go!"}
            />
          </form>
          {isFocused && (
            <div className={styles.dropdown}>
              <ul className={styles.suggestions}>
                {suggestions.map((pokemon, index) => (
                  <li key={index} onClick={handleListSelection}>
                    {pokemon}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GenericForm;
