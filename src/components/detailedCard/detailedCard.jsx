import { useState, useEffect } from "react";
import Loading from "../loading";
import styles from "./index.module.scss";

const getTypeIconUrl = (type) => `/types/${type.toLowerCase()}.png`;

const DetailedCard = ({ cardId }) => {
  const [card, setCard] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "02078431-603a-469d-bdfe-0bac9fa85709";
      const apiUrl = `https://api.pokemontcg.io/v2/cards/${cardId}`;

      const response = await fetch(apiUrl, {
        headers: {
          "X-Api-Key": apiKey,
        },
      });
      const data = await response.json();
      setCard(data.data);

      localStorage.setItem("selectedCardData", JSON.stringify(data.data));
    };

    const storedCardData = localStorage.getItem("selectedCardData");
    if (storedCardData) {
      setCard(JSON.parse(storedCardData));
    } else {
      fetchData();
    }

    return () => {
      localStorage.removeItem("selectedCardData");
    };
  }, [cardId]);

  if (!card)
    return (
      <>
        <Loading />
      </>
    );

  return (
    <>
      <div className={styles.DetailedCard}>
        <div className={styles.superWrapper}>
          <div className={styles.imgWrapper}>
            <img
              className={styles.cardImg}
              src={card.images.large}
              alt={card.id}
            />
          </div>
          <div className={styles.mainWrapper}>
            <div className={styles.headerWrapper}>
              <div className={styles.titleWrapper}>
                <h2>{card.name}</h2>
                <div className={styles.subtypesWrapper}>
                  <p>{card.supertype} </p>
                  {card.subtypes.map((subtype, index) => (
                    <p key={index}>- {subtype} </p>
                  ))}
                </div>
              </div>
              <div className={styles.hpWrapper}>
                <p>HP {card.hp}</p>
                <div className={styles.typesWrapper}>
                  {card.types.map((type, index) => (
                    <img
                      className={styles.typeImg}
                      key={index}
                      src={getTypeIconUrl(type)}
                      alt={type}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.setWrapper}>
              <div className={styles.setNameWrapper}>
                <h3>{card.set.name}</h3>
                <img
                  className={styles.setSymbol}
                  src={card.set.images.symbol}
                  alt={card.set.name}
                />
              </div>
              <img
                className={styles.setImg}
                src={card.set.images.logo}
                alt={card.set.name}
              />
            </div>
            <div className={styles.attacksWrapper}>
              <h3 className={styles.attackTitle}>Attacks</h3>
              {card.attacks.map((attack, index) => (
                <div key={index} className={styles.attack}>
                  <div className={styles.attackType}>
                    <h3>{attack.name}</h3>
                    <div className={styles.attackCost}>
                      {attack.cost.map((type, index) => (
                        <img
                          key={index}
                          src={getTypeIconUrl(type)}
                          alt={type}
                          className={styles.typeImg}
                        />
                      ))}
                    </div>
                  </div>
                  <p>Damage: {attack.damage}</p>
                  <p>{attack.text}</p>
                </div>
              ))}
              <div className={styles.retreat}>
                <p>Retreat Cost: </p>
                {card.retreatCost.map((type) => (
                  <img
                    key={card.id}
                    src={getTypeIconUrl(type)}
                    alt={type}
                    className={styles.typeImg}
                  />
                ))}
              </div>
            </div>
            <div className={styles.pricingWrapper}>
              <h3>Pricing Information</h3>
              <div className={styles.marketsWrapper}>
                <div className={styles.tcgplayer}>
                  <h4>TCGPlayer</h4>
                  <a className={styles.linkToMarket} href={card.tcgplayer.url}>
                    Buy from TCGPlayer
                  </a>
                  <p>Last updated: {card.tcgplayer?.updatedAt}</p>
                  <p>Low: ${card.tcgplayer?.prices?.holofoil?.low}</p>
                  <p>Mid: ${card.tcgplayer?.prices?.holofoil?.mid}</p>
                  <p>High: ${card.tcgplayer?.prices?.holofoil?.high}</p>
                  <p>Market: ${card.tcgplayer?.prices?.holofoil?.market}</p>
                </div>
                <div className={styles.cardmarket}>
                  <h4>Cardmarket</h4>
                  <a className={styles.linkToMarket} href={card.cardmarket.url}>
                    Buy from Cardmarket
                  </a>
                  <p>Last updated: {card.tcgplayer.updatedAt}</p>
                  <p>
                    Average Sell Price: $
                    {card.cardmarket?.prices?.averageSellPrice}
                  </p>
                  <p>Low Price: ${card.cardmarket?.prices?.lowPrice}</p>
                  <p>Trend Price: ${card.cardmarket?.prices?.trendPrice}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedCard;
