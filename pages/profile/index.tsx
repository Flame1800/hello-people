import React from 'react';
import styled from "styled-components";
import ProfileHead from "../../src/Components/Profile/ProfileHead/ProfileHead";
import ProfileButtons from "../../src/Components/Profile/ProfileButtons";
import UserContent from "../../src/Components/Profile/UserContent/UserContent";

const Profile = () => {
    return (
        <Wrapper>
            <ProfileHead/>
            <ProfileButtons/>
            <UserContent/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  padding: 50px 20px;
`


export default Profile;