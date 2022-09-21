import React from 'react';
import styled from "styled-components";

const UserPhoto = () => {
    return (
        <Photo src='/img/mock-photo.png' alt='user photo'/>
    );
};

const Photo = styled.img`
  width: 200px;
  height: 200px;
  max-width: 200px;
  max-height: 200px;
  border-radius: 16px;
  object-fit: cover;
  display: flex;
  margin-left: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`

export default UserPhoto;