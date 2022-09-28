import React from "react";
import styled from "styled-components";
import PlaceCard from "./Card/PlaceCard";
import API from "../../Helpers/API";
import { observer } from "mobx-react-lite";
import { theme } from "../../../styles/theme";
import Loader from "../Common/Loader";
import CategoriesStore from "../../Stores/CategoriesStore";
import axios from "axios";
import qs from "qs";

type Props = {
  count: number;
  cards: any;
};

const CatalogCards: React.FC<Props> = ({ cards, count }) => {
  const [places, setPlaces] = React.useState(cards);
  const [hasMore, setHasMore] = React.useState(cards);
  const [loader, setLoader] = React.useState(false);

  const getMorePlaces = async () => {
    try {
      setLoader(true);
      const resPlaces = await API.getPlaces(places.length);
      const newPlaces = resPlaces.data.data;

      setPlaces((places: any) => [...places, ...newPlaces]);
    } catch (e) {
      console.error(e);
    } finally {
      setLoader(false);
    }
  };

  React.useEffect(() => {
    setHasMore(count > places.length);
  }, [places]);

  const btnMore = hasMore && !loader && (
    <div className="btn-more" onClick={getMorePlaces}>
      Показать больше
    </div>
  );

  return (
    <Wrapper>
      <div className="cards">
        {places.map((card: any) => (
          <PlaceCard key={card.id} card={card} />
        ))}
        {btnMore}
        {loader && <Loader />}
      </div>
      {!hasMore && places.length >= 30 && (
        <div className="info-msg">Вы посмотрели все</div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 50px;
    margin: 40px auto;
    max-width: 1000px;
    position: relative;
  }

  .btn-more {
    padding: 10px 40px;
    border-radius: 10px;
    background: #fff;
    margin: 40px auto 120px;
    width: fit-content;
    cursor: pointer;
    font-weight: 800;
    font-size: 16px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.18);
    color: ${theme.color.orange};
  }

  .info-msg {
    font-weight: 800;
    font-size: 20px;
    margin: -30px auto 150px;
    color: #000;
    text-align: center;
  }
`;

export default observer(CatalogCards);
