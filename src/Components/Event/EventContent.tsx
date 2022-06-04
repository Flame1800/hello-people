import React from 'react';
import styled from "styled-components";
import {ButtonStyle} from "../../../styles/commonStyles";
import InfoListServices from "../Common/Services/InfoListServices";
import Description from "../Common/Services/Description";
import {theme} from "../../../styles/theme";
import makeBeautyDate from "../../Libs/makeBeautyDate";
import TwoGisButton from "../Common/Services/TwoGisButton";
import BackButton from "../Common/BackButton";


type Props = {
    event: any
}

const EventContent: React.FC<Props> = ({event}) => {
    return (
        <Wrapper>
            <div className="inner-container">
                <div className="back">
                    <BackButton/>
                    <div className="cap">Назад</div>
                </div>
                <div className="buttons">
                    <ButtonStyle onClick={() => console.log('go event')}>Присоеденится</ButtonStyle>
                    <ButtonStyle outline onClick={() => console.log('go event')}>Перейти в чат</ButtonStyle>
                    <TwoGisButton link2gis={event.maplink}/>
                </div>
                <InfoListServices
                    date={makeBeautyDate(event.dateStart)}
                    address={event.place.data ? event.place.data.attributes.location : null}
                    link={event.site}
                    phone={event.tel}
                    link2gis={event.maplink}
                />
                <div className='title'>{event.title}</div>
                <Description data={event.description}/>
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
  margin: -10px auto 20px;

  .inner-container {
    margin: 30px auto;
    max-width: 500px;
  }

  .back {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    cursor: pointer;

    .cap {
      margin-left: 10px;
      font-size: 19px;
      font-weight: 600;
      color: #838383;
    }
  }

  .title {
    font-weight: 600;
    font-size: 18px;
    margin-top: 40px;
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

export default EventContent;