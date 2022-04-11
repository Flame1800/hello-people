import React from 'react';
import Tab from "../../Common/Tab";
import styled from "styled-components";

const UserContentTabs = () => {
    return (
        <Wrapper>
            <Tab active={true}>Фото</Tab>
            <Tab>Места</Tab>
            <Tab>Мероприятия</Tab>
            <Tab>Встречи</Tab>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow: scroll;
  max-width: 100%;
  position: relative;
  border-radius: 25px;
  margin-bottom: 20px;
`

export default UserContentTabs;