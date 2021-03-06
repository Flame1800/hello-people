import styled from "styled-components";

export const MessageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 20px;
  position: relative;
`


export const MessageAvatar = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-bottom: 20px;
  margin-right: 10px;
  object-fit: contain;
`

export const MessageStyle = styled.div`
  width: fit-content;
  padding: 10px;
  border-radius: 10px;
  background: #F0F0F0;
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
`


export const MeMessageWrapper = styled(MessageWrapper)`
  flex-direction: row-reverse;

  ${MessageStyle} {
    background: #D9F1FF;
    margin-right: 3px;
  }
`

export const MessageInfo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 14px;
  float: right;
  position: relative;
  top: 5px;

  .date {
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    color: #808080;
    margin-right: 5px;
    width: max-content;
    white-space: nowrap;
  }
`