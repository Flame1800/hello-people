import React from 'react';
import styled from "styled-components";
import UserContentTabs from "./UserContentTabs";
import Photos from "./UserPhotos/Photos";

const UserContent = () => {
    return (
        <Wrapper>
            <UserContentTabs/>
            <Photos/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;
  background: #fff;
  border-radius: 40px;
  padding: 30px;
  min-height: 50vh;

  @media (max-width: 1424px) {
    background: #fff;
    padding: 20px 0;
  }
`


export default UserContent;