import React, { useState } from "react";
import styled from "styled-components";
import UserBadge from "../User/UserBadge";
import TypeMeet from "./TypeMeet";
import Buttons from "./Buttons";
import PlaceMeet from "./PlaceMeet";
import { theme } from "../../../styles/theme";
import SimpleMenu from "../Common/SimpleMenu/SimpleMenu";
import MenuItem from "../Common/SimpleMenu/MenuItem";
import UserStore from "../../Stores/UserStore";
import API from "../../Helpers/API";

type Props = {
  meet: MeetType | null;
};

const MeetCard = ({ meet }: Props) => {
  const { user } = UserStore;
  const author = meet?.attributes.author.data;
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const deleteMeet = () => {
    setIsShowMenu(false);
    setIsDeleted(true);
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

  if (!meet) return null;

  if (isDeleted) {
    return <Deleted>Эта встреча удаленна</Deleted>;
  }

  return (
    <Wrapper>
      <div className="content">
        <div className="head">
          <UserBadge user={meet.attributes.author.data} size="sm" />
          {user?.id === author?.id && dropdown}
        </div>
        <div className="text">{meet.attributes.description}</div>
      </div>
      <div className="meta">
        <Buttons meetId={meet.id} />
        <PlaceMeet place={meet.attributes.place} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 180px;
  margin-bottom: 15px;
  padding: 16px;
  background: #ffffff;
  border: 1px solid #ffffff;
  box-shadow: ${theme.boxShadow.mainComponent};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    max-width: 300px;
    margin-right: 15px;
    margin-bottom: 15px;
  }

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text {
    margin-top: 15px;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 19px;
    margin-bottom: 30px;
  }

  .meta {
    display: flex;
    align-items: center;
  }
`;

const Deleted = styled(Wrapper)`
  justify-content: center;
  align-items: center;
  font-weight: 500;
  color: #919191;
`;

export default MeetCard;
