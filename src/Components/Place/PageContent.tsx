import React from 'react';
import styled from "styled-components";
import NameService from "../Common/Services/NameService";
import {ButtonStyle} from "../../../styles/commonStyles";
import InfoListServices from "../Common/Services/InfoListServices";
import dynamic from "next/dynamic";
import Description from "../Common/Services/Description";

const Map = dynamic(() => import('../Common/Map/MapBlock'), {ssr: false})
const OutputEditorData = dynamic(() => import('../Common/OutputEditorData'), {ssr: false})


const PageContent = ({place}) => {
    return (
        <Wrapper>
            <NameService name="Gloria Jean's coffees" category='Кафе'/>
            <InfoListServices
                address={place.location}
                link={place.site}
                phone={place.tel}
                link2gis={place.maplink}
            />
            <Description>
                <OutputEditorData data={place.description}/>
            </Description>
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

  @media (min-width: 768px) {
    box-shadow: none !important;
    background: none !important;
  }
`

export default PageContent;