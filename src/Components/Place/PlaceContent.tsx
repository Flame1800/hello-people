import React from 'react';
import styled from "styled-components";
import InfoListServices from "../Common/Services/InfoListServices";
import dynamic from "next/dynamic";
import Description from "../Common/Services/Description";
import BackButton from "../Common/BackButton";
import {ButtonStyle} from "../../../styles/commonStyles";
import TwoGisButton from "../Common/Services/TwoGisButton";
import makeBeautyDate from "../../Libs/makeBeautyDate";
import UserStore from "../../Stores/UserStore";
import LikePlace from "./Card/LikePlace";
import Comment from "../Common/Comment";

const Map = dynamic(() => import('../Common/Map/MapBlock'), {ssr: false})


type Props = {
    place: any
}

const PlaceContent: React.FC<Props> = ({place}) => {
    const {attributes} = place
    console.log(attributes)
    return (
        <Wrapper>
            <div className="inner-container">
                <div className="buttons">
                    <ButtonStyle outline onClick={() => console.log('go event')}>Перейти в чат</ButtonStyle>
                    <TwoGisButton link2gis={attributes.maplink}/>
                </div>
                {UserStore.user &&
                    <div className="user-meta">
                        <LikePlace likes={attributes.likes} id={place.id} />
                        <Comment value={attributes.comments.data.length} onClick={() => console.log("event comment")}/>
                    </div>
                }
                <InfoListServices
                    address={attributes.location}
                    link={attributes.site}
                    phone={attributes.tel}
                    link2gis={attributes.maplink}
                />
                <div className='place-title'>{attributes.title}</div>
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
  margin-left: auto;
  margin-right: auto;
  margin-top: -10px;
  
  .user-meta {
    display: flex;
    margin-top: 20px;
    
    > div {
      margin-right: 10px;
    }
  }

  .inner-container {
    margin: 30px auto;
    max-width: 500px;
    width: 100%;
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
    
    @media (max-width: 500px) {
      flex-wrap: wrap;
      height: 100px;
      align-items: baseline;
    }

    > div {
      margin-right: 20px;
    }
  }
`

export default PlaceContent;