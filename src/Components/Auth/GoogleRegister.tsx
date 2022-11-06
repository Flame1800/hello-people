import React from "react";
import styled from "styled-components";
import { API_URL } from "../../Constants/api";

const GoogleRegister = () => {
  return (
    <RegButtonWrapper href={`https://hellopeople.online/api/connect/google`}>
      <img src="/img/google.svg" alt="google" />
    </RegButtonWrapper>
  );
};

const RegButtonWrapper = styled.a`
  cursor: pointer;
  width: 100%;
  max-width: 300px;
  height: 67px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  margin-bottom: 10px;
  padding: 15px;
  transition: 0.3s;
  border: 3px solid #efefef;

  &:hover {
    background: #efefef;
  }

  img {
    width: 90px;
  }
`;

export default GoogleRegister;
