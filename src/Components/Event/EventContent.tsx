import React from 'react';
import styled from "styled-components";
import {ButtonStyle} from "../../../styles/commonStyles";
import InfoListServices from "../Common/Services/InfoListServices";
import Description from "../Common/Services/Description";
import {theme} from "../../../styles/theme";
import makeBeautyDate from "../../Libs/makeBeautyDate";

const EventContent = ({event}) => {
    return (
        <Wrapper>
            <div className="buttons">
                <ButtonStyle onClick={() => console.log('go event')}>Присоеденится</ButtonStyle>
                <ButtonStyle outline onClick={() => console.log('go event')}>Перейти в чат</ButtonStyle>
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
        </Wrapper>
    );
};

const Wrapper = styled.div`
  border-top: 1px solid ${theme.color.lightGray};
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1000px;
  padding: 20px;

  .title {
    font-weight: 600;
    font-size: 18px;
    margin-top: 40px;
  }

  .buttons {
    display: flex;

    > div {
      margin-right: 20px;
    }
  }
`

export default EventContent;