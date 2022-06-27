import styled from "styled-components";

export const getMessageFeedStyle = (isDesktop: boolean) => styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  left: 0;
  height: 80vh;
  position: absolute;
  border-radius: 32px;

  .messages {
    padding-top: 30px;
    overflow: hidden scroll;
    margin-bottom: 80px;

    &::-webkit-scrollbar {
      width: 16px;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(218, 218, 218, 0.8);
      border-radius: 8px;
      border: 5px solid #fff;
    }
  }

  @media (max-width: 1024px) {
    position: absolute;
    height: 100vh;
  }

  @media (max-width: 1430px) {
    padding-bottom: 10px;
  }
`