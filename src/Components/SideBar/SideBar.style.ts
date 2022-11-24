import styled, { css } from "styled-components";
import { theme } from "../../../styles/theme";

export const Wrapper = styled.div`
  top: 100px;
  position: sticky;
  width: 320px;
  min-width: 320px;
  display: none;
  flex-direction: column;
  height: 80vh;
  background: #fff;
  border-radius: 32px;
  box-shadow: 0 0 10px -6px;
  align-items: center;

  @media (min-width: 1424px) {
    display: flex;
  }
`;

export const Content = styled.div`
  height: 95%;
  width: 100%;
  padding: 0 10px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const NavLinks = styled.div`
  padding: 20px;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

export const NavLinkStyle = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px 24px;
  font-weight: 700;
  font-size: 14px;
  background: ${({ active }) => (active ? "#FFE2DC" : "none")};
  border-radius: 16px;
  cursor: pointer;

  &:hover {
    background: ${({ active }) => (active ? "#FFE2DC" : "#FAFAFA")};
  }

  svg {
    fill: ${({ active }) => (active ? theme.color.orange : "#000")} !important;
    margin-right: 24px;
    width: 24px;
    height: 24px;
  }
`;

export const AvatarWrapper = styled(NavLinkStyle)<{ active?: boolean }>`
  display: flex;
  align-items: center;
  box-shadow: 0 2px 6px 1px #0000001f;
  width: 100%;
  padding: 10px 20px;
  margin-bottom: 20px;
  transition: 0.3s;

  &:hover {
    box-shadow: none;
  }

  ${(props) =>
    props.active &&
    css`
      box-shadow: none;
    `}

  .username {
    font-weight: 700;
    margin-left: 10px;
  }
`;
