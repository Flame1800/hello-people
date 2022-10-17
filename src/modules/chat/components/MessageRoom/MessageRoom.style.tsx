import styled, { css } from "styled-components";

export const MessageRoomStyle = styled.div<{ isWidget: boolean }>`
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  left: 0;
  height: 80vh;
  position: absolute;

  ${(props) =>
    !props.isWidget &&
    css`
      position: relative !important;
      border-left: 1px solid #f6f6f6;
      margin-left: 10px;
      height: 75vh;
    `};

  @media (max-width: 1024px) {
    position: absolute;
    height: 100vh;
  }

  @media (max-width: 1430px) {
    padding-bottom: 10px;
  }
`;

export const MessageRoomEmptyStyle = styled(MessageRoomStyle)`
  justify-content: center;
  align-items: center;

  .caption {
    font-weight: 500;
    font-size: 18px;
    color: #7e7e7e;
  }
`;
