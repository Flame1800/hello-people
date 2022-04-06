import React from 'react';
import styled from "styled-components";
import NameService from "../Common/Services/NameService";
import {ButtonStyle} from "../../../styles/commonStyles";
import InfoListServices from "../Common/Services/InfoListServices";
import dynamic from "next/dynamic";
import Description from "../Common/Services/Description";

const Map = dynamic(() => import('../Common/Map/MapBlock'), {ssr: false})

const PageContent = () => {
    return (
        <Wrapper>
            <NameService name="Gloria Jean's coffees" category='Кафе'/>
            <InfoListServices
                date='25 сентября в 19:00'
                address='СК Энергетик - Энергетиков, 47'
                link='https://vk.com/timasurgut?from=top'
                phone='+7-932-255-68-44'
                link2gis="https://vk.com/timasurgut?from=top"
            />
            <Description>
                VERANDA» именно то место, куда можно прийти в любое время: утром выпить чашечку ароматного кофе, днем с
                коллегами отведать бизнес–ланч, провести вечер в кругу близких людей.
            </Description>
            <Map location="Энергетиков, 47"/>
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
`

export default PageContent;