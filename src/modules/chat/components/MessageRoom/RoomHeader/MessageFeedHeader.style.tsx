import styled from "styled-components";

export const MessageFeedHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  border-bottom: 1px solid #f6f6f6;

  @media (min-width: 1420px) {
    padding-top: 15px;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UserInfo = styled.div`
  margin-left: 15px;
`;

export const UserName = styled.span`
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
