import styled from "styled-components";

export const MessageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  margin-left: 10px;
`;

export const MessageUserName = styled.a`
  cursor: pointer;
  color: #424242;
  font-weight: 500;
  margin-bottom: 3px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 100%;
`;

export const MessageTextStyle = styled.div`
  word-break: break-word;
  white-space: pre-wrap;
  font-size: 15px;
  line-height: 20px;
  color: #000;
`;

export const MessageAvatar = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  margin-bottom: 20px;
  margin-right: 10px;
  object-fit: cover;
`;

export const MessageStyle = styled.div`
  position: relative;
  width: fit-content;
  padding: 10px;
  border-radius: 10px;
  background: #f0f0f0;
  margin-bottom: 15px;
  margin-right: 20px;
  max-width: 70%;

  .user-name {
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    color: #6e6e6e;
  }

  .message-text {
    display: flow-root;
    justify-content: end;
    align-items: center;
    flex-wrap: wrap;
    word-break: break-word;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    white-space: pre-wrap;
  }
`;

export const MeMessageWrapper = styled(MessageWrapper)`
  flex-direction: row-reverse;

  ${MessageStyle} {
    background: #d9f1ff;
    margin-right: 3px;
  }
`;

export const MessageInfo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 14px;
  float: right;
  position: relative;
  top: 8px;

  .date {
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    color: #808080;
    margin-right: 5px;
    width: max-content;
    white-space: nowrap;
  }
`;

export const UnreadMark = styled.div`
  width: 7px;
  height: 7px;
  background: rgba(255, 175, 159, 0.85);
  position: absolute;
  right: -15px;
  border-radius: 50%;
  top: 45%;
`;
