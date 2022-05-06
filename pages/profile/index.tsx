import React from 'react';
import styled from "styled-components";
import ProfileHead from "../../src/Components/Profile/ProfileHead/ProfileHead";
import UserContent from "../../src/Components/Profile/UserContent/UserContent";

const Profile = () => {
    return (
        <Wrapper>
            <ProfileHead/>
            <UserContent/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 40px 20px;

  @media (max-width: 1424px) {
    background: #fff;
    padding: 10px 0;
  }
`


export default Profile;