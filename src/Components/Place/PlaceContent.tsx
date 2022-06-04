import React from 'react';
import styled from "styled-components";
import InfoListServices from "../Common/Services/InfoListServices";
import dynamic from "next/dynamic";
import Description from "../Common/Services/Description";
import BackButton from "../Common/BackButton";
import {ButtonStyle} from "../../../styles/commonStyles";
import TwoGisButton from "../Common/Services/TwoGisButton";
import makeBeautyDate from "../../Libs/makeBeautyDate";

const Map = dynamic(() => import('../Common/Map/MapBlock'), {ssr: false})


type Props = {
    place: any
}

const PlaceContent: React.FC<Props> = ({place}) => {
    return (
        <Wrapper>
            <div className="inner-container">
                <div className="buttons">
                    <ButtonStyle outline onClick={() => console.log('go event')}>Перейти в чат</ButtonStyle>
                    <TwoGisButton link2gis={place.maplink}/>
                </div>
                <InfoListServices
                    address={place.location}
                    link={place.site}
                    phone={place.tel}
                    link2gis={place.maplink}
                />
                <div className='title'>{place.title}</div>
                <Description data={place.description}/>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  background: #fff;
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 840px;
  border-radius: 15px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -10px;

  .inner-container {
    margin: 30px auto;
    width: 500px;
  }

  .place-title {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 5px;
    transition: .2s;
  }

  .place-category {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #676767;
  }

  .buttons {
    display: flex;
    width: 100%;
    justify-content: space-between;

    > div {
      margin-right: 20px;
    }
  }
`

export default PlaceContent;