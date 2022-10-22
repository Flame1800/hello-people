import styled, { css } from "styled-components";

export const DialogWrapper = styled.div<{ active: boolean }>`
  width: 100%;
  height: 64px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background: #fafafa;
  }

  ${(props) =>
    props.active &&
    css`
      background: #ffe6e1;
      &:hover {
        background: #ffe6e1;
      }
    `}
`;

export const DialogContentStyle = styled.div`
  width: 100%;
  margin-left: 12px;
  height: 100%;
`;

export const DialogHeadStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserNameStyle = styled.span`
  max-width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 600;
  font-size: 16px;
  line-height: 25px;
`;

export const DialogDateStyle = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #b2b2b2;
`;

export const DialogInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LastMessage = styled.p`
  max-width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #7f7f7f;
`;

export const Notification = styled.span`
  background: #fc5130;
  min-width: 18px;
  height: 19px;
  display: flex;
  justify-content: center;
  line-height: 19px;
  align-items: center;
  border-radius: 10px;
  padding: 0 4px;
  font-weight: 500;
  font-size: 11px;
  color: #ffffff;
`;
