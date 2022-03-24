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
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  border-radius: 10px;
  background: #F0F0F0;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 15px;
  margin-right: 20px;
  max-width: 60%;

  .text {
    margin-right: 50px;
  }

  .user-name {
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    color: #6e6e6e;
  }
`


export const MyMessageWrapper = styled(MessageWrapper)`
  flex-direction: row-reverse;

  ${MessageStyle} {
    background: #D9F1FF;
    margin-right: 10px;
  }
`

export const MessageInfo = styled.div`
  height: 15px;
  display: flex;
  align-items: center;
  margin-left: 30px;
  position: relative;
  float: right;
  right: -5px;
  top: -5px;


  .date {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #808080;
    margin-right: 5px;
    width: max-content;
  }
`