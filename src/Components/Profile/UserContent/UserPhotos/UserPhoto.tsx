import React from 'react';
import styled from "styled-components";

const UserPhoto = () => {
    return (
        <Photo src='img/mock-photo.png' alt='user photo'/>
    );
};

const Photo = styled.img`
  width: 32%;
  height: 105px;
  border-radius: 5px;
  object-fit: cover;
  margin-top: 4px;
  margin-right: 4px;
`

export default UserPhoto;