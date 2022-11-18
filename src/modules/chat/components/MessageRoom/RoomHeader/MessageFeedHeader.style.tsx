import styled from "styled-components";

export const MessageFeedHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 75px;
  border-bottom: 1px solid #eaeaea;
  width: 100%;
  background: #fff;
  z-index: 10;
  border-radius: 32px 32px 0 0;
  padding: 0 15px;

  @media screen and (max-width: 600px) {
    position: fixed;
  }

  @media screen and (max-width: 1000px) {
    border-radius: 0;
  }
`;

export const UserContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
`;

export const UserInfo = styled.div`
  margin-left: 10px;
`;

export const UserName = styled.span`
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  line-height: 25px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;
  display: flex;
`;

export const UserStatus = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  color: #949494;
`;

export const MenuSvg = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;
