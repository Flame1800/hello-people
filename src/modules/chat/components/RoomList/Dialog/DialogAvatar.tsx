import React from "react";
import Avatar from "../../common/Avatar";
import { CategoryType } from "../../../models/CategoryType";
import styled from "styled-components";
import MeetsSvg from "../TabSvgIcons/MeetsSvg";

type Props = {
  url?: string;
  type: CategoryType;
};

const DialogAvatar = ({ url, type }: Props) => {
  if (type === "meet") {
    return (
      <Wrapper>
        <MeetsSvg />
      </Wrapper>
    );
  }

  return <Avatar url={url} />;
};

const Wrapper = styled.div`
  background: #505050;
  width: 51px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 9px;
  color: #fff;

  svg {
    fill: #fff;
  }
`;

export default DialogAvatar;
