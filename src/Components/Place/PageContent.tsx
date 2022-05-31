import React from 'react';
import styled from "styled-components";
import InfoListServices from "../Common/Services/InfoListServices";
import dynamic from "next/dynamic";
import Description from "../Common/Services/Description";

const Map = dynamic(() => import('../Common/Map/MapBlock'), {ssr: false})


type Props = {
    place: any
}

const PageContent: React.FC<Props> = ({place}) => {
    return (
        <Wrapper>
            {/*<div className="place-title">{place.title}</div>
            <div className="place-category">Нет категории</div>*/}
            <InfoListServices
                address={place.location}
                link={place.site}
                phone={place.tel}
                link2gis={place.maplink}
            />
            <Description data={place.description}/>
            <Map location={place.location}/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1000px;
  border-radius: 15px 15px 0 0;
  box-shadow: 0 0 17px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background: #fff;

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

  @media (min-width: 768px) {
    box-shadow: none !important;
    background: none !important;
  }
`

export default PageContent;