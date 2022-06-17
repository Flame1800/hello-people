import React from 'react';
import styled from "styled-components";
import {NextPage} from "next";
import {observer} from "mobx-react-lite";


const Profile: NextPage = () => {
    return (
        <Wrapper>
            User
            User
            User
            User
            User
            User
            User
        </Wrapper>
    );
};

const Wrapper = styled.div`

  @media (max-width: 1424px) {
    background: #fff;
    padding: 10px;
  }
`

export default observer(Profile);