import React from 'react';
import styled from "styled-components";
import {ButtonStyle} from "../../../styles/commonStyles";
import InfoListServices from "../Common/Services/InfoListServices";
import Description from "../Common/Services/Description";
import {theme} from "../../../styles/theme";
import makeBeautyDate from "../../Libs/makeBeautyDate";
import TwoGisButton from "../Common/Services/TwoGisButton";
import BackButton from "../Common/BackButton";
import MetaActionsEvent from "./MetaActionsEvent";


type Props = {
    event: any
}

const EventContent: React.FC<Props> = ({event}) => {
    const {attributes} = event
    return (
        <Wrapper>
            <div className="inner-container">
                <div className="back">
                    <BackButton/>
                    <MetaActionsEvent event={event} />
                </div>
                <div className="buttons">
                    <ButtonStyle outline onClick={() => console.log('go event')}>Перейти в чат</ButtonStyle>
                    <TwoGisButton link2gis={attributes.maplink}/>
                </div>
                <InfoListServices
                    date={makeBeautyDate(attributes.dateStart)}
                    address={attributes.place.data ? attributes.place.data.attributes.location : null}
                    link={attributes.site}
                    phone={attributes.tel}
                    link2gis={attributes.maplink}
                />
                <div className='title'>{attributes.title}</div>
                <Description data={attributes.description}/>
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
    justify-content: space-between;
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