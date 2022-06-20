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

  .messages {
    padding-top: 30px;
    padding-bottom: 80px;
    overflow: hidden scroll;

    &::-webkit-scrollbar {
      width: 0;
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