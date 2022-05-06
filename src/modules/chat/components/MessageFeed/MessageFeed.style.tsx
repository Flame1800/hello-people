import styled from "styled-components";

export const getMessageFeedStyle = (isDesktop: boolean) => styled.div`
  width: 100%;
  height: ${isDesktop ? '70vh' : '100vh'};
  background: #fff;
  display: flex;
  flex-direction: column;
  position: ${isDesktop ? 'static' : 'absolute'};
  top: 0;
  right: 0;
  left: 0;

  .messages {
    max-height: 100%;
    height: 100%;
    padding-top: 30px;
    padding-bottom: 80px;
    overflow: hidden scroll;

    &::-webkit-scrollbar {
      width: 0;
    }
  }

  @media (max-width: 400px) {
    position: absolute;
    height: 100vh;
  }

  @media (max-width: 1430px) {
    padding-bottom: 100px;
  }
`