import styled, { css } from "styled-components";

export const MessageRoomStyle = styled.div<{ isWidget: boolean }>`
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  height: 80vh;
  border-radius: 32px;

  ${(props) =>
    !props.isWidget &&
    css`
      position: relative !important;
      border-left: 1px solid #f6f6f6;
    `};

  @media (max-width: 1024px) {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    max-height: -webkit-fill-available;
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
