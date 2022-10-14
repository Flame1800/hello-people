import React from "react";
import styled from "styled-components";
import UserContentTabs from "./UserContentTabs";
import Photos from "./UserPhotos/Photos";
import { theme } from "../../../../styles/theme";

const UserContent = () => {
  const isReady = false;

  if (!isReady) {
    return (
      <Wrapper>
        <img
          className="noneContentImg"
          src="/img/Saly-2.png"
          alt=""
          height={300}
        />
        <div className="caption">
          Скоро здесь будет много интересного. Надо просто немного подождать...
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <UserContentTabs />
      <Photos />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;
  background: #fff;
  border-radius: 32px;
  min-height: 57.5vh;

  @media (min-width: 1424px) {
    box-shadow: ${theme.boxShadow.mainComponent};
  }

  .noneContent {
    display: flex;
    justify-content: center;
  }

  .noneContentImg {
    user-select: none;
  }

  .caption {
    font-size: 18px;
    text-align: center;
    font-weight: 400;
    color: #7e7e7e;
    max-width: 370px;
    user-select: none;
  }

  @media (max-width: 1424px) {
    background: #fff;
    padding: 20px 0;
  }
`;

export default UserContent;
