import React, { useState } from "react";
import UserBadge from "../../../User/UserBadge";
import Link from "next/link";
import styled from "styled-components";
import { theme } from "../../../../../styles/theme";
import UserStore from "../../../../Stores/UserStore";
import SimpleMenu from "../../../Common/SimpleMenu/SimpleMenu";
import MenuItem from "../../../Common/SimpleMenu/MenuItem";
import API from "../../../../Helpers/API";

type Props = {
  meet: MeetType | null;
};

const QuestionCard = ({ meet }: Props) => {
  const { user } = UserStore;
  const author = meet?.attributes.author.data;
  const [isShowMenu, setIsShowMenu] = useState(false);

  if (!meet) return null;

  const deleteMeet = () => {
    setIsShowMenu(false);
    API.deleteMeet(meet?.id);
  };

  const dropdown = (
    <SimpleMenu isShow={isShowMenu} setIsShow={setIsShowMenu}>
      <MenuItem
        onClick={deleteMeet}
        color={theme.color.orange}
        title="Удалить"
      />
    </SimpleMenu>
  );

  return (
    <Wrapper>
      <div className="head">
        <UserBadge user={meet.attributes.author.data} size="sm" />
        {user?.id === author?.id && dropdown}
      </div>
      <Link href={`/questions/id/${meet.id}`}>
        <a className="text" href={`/meets/id/${meet.id}`}>
          <div className="title">{meet.attributes.title}</div>
          <div className="text">{meet.attributes.description}</div>
        </a>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 30px;
  padding: 20px;
  background: #ffffff;
  border: 1px solid #ffffff;
  box-shadow: ${theme.boxShadow.mainComponent};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;

  @media (min-width: 768px) {
    max-width: 600px;
  }

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    margin-top: 10px;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 19px;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100%;
    overflow: hidden;
  }

  .text {
    margin-top: 5px;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 19px;
  }

  .meta {
    margin-left: -2px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    .info {
      display: flex;
    }
  }
`;

export default QuestionCard;
