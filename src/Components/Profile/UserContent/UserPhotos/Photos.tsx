import React from 'react';
import styled from "styled-components";
import UserPhoto from "./UserPhoto";

const Photos = () => {
    return (
        <Wrapper>
            <UserPhoto/>
            <UserPhoto/>
            <UserPhoto/>
            <UserPhoto/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 840px;
  margin: 15px auto;
`

export default Photos;