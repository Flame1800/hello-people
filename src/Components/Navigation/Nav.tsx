import React from "react";
import Link from "next/link";
import ProfileIcon from "../SideBar/Nav/NavButtonsSvg/ProfileIcon";
import styled from "styled-components";
import { theme } from "../../../styles/theme";
import userStore from "../../Stores/UserStore";
import QuestionIcon from "../SideBar/Nav/NavButtonsSvg/QuestionIcon";

const Nav = () => {
  const { user } = userStore;
  return (
    <div>
      {user && (
        <Link href={`/user/${user?.id}`}>
          <ProfileButton>
            <ProfileIcon />
            Мой профиль
          </ProfileButton>
        </Link>
      )}
      <Link href={`/user/${user?.id}`}>
        <ProfileButton>
          <QuestionIcon />
          Вопросы
        </ProfileButton>
      </Link>
    </div>
  );
};

const ProfileButton = styled.a`
  margin-bottom: 20px;
  height: 60px;
  width: 100%;
  border-radius: 20px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;

  svg {
    margin-right: 10px;
    fill: ${theme.color.orange};
  }
`;

export default Nav;
