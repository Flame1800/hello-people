import styled from "styled-components";

export const MessageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
`


export const MessageAvatar = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
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
<<<<<<< HEAD
=======
    line-height: 22px;
    white-space: pre-wrap;
>>>>>>> 52bca06277a420171c5a68ff38aa62dc8d1a6387
  }
`


export const MeMessageWrapper = styled(MessageWrapper)`
  flex-direction: row-reverse;

  ${MessageStyle} {
    background: #D9F1FF;
<<<<<<< HEAD
=======
    margin-right: 3px;
>>>>>>> 52bca06277a420171c5a68ff38aa62dc8d1a6387
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