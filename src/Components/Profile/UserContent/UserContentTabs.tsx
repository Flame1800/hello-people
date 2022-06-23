import React from 'react';
import Tab from "../../Common/Tab";
import styled from "styled-components";
import {theme} from "../../../../styles/theme";

const UserContentTabs = () => {
    return (
        <Wrapper>
            <div className='tab tab-active'>Фото</div>
            <div className='tab'>Места</div>
            <div className='tab'>Мероприятия</div>
            <div className='tab'>Встречи</div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: space-around;
  position: relative;
  margin-bottom: 20px;
  margin-top: 20px;
  border-bottom: 1px solid #B9BABD;

  .tab {
    display: flex;
    flex: 1 0 12.5%;
    justify-content: center;
    text-align: center;
    font-size: 15px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
  }

  .tab-active {
    border-bottom: 3px solid ${theme.color.orange};
  }
`

export default UserContentTabs;