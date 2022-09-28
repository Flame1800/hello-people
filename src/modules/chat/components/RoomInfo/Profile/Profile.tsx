import React from "react";
import { API_URL } from "../../../../../Constants/api";
import styled from "styled-components";
import dialogsStore from "../../../stores/dialogsStore";
import { useRouter } from "next/router";
import LinkWrapper from "../../common/LinkWrapper";

const Profile = () => {
  const { currentDialog } = dialogsStore;
  const avatar = currentDialog?.cover ?? "";
  const route = useRouter();
  const link = `${route.basePath}/${currentDialog?.category}s/${currentDialog?.id}`;

  return (
    <Wrapper>
      <LinkWrapper href={link}>
        <ProfileAvatar src={API_URL + avatar} alt="avatar" />
      </LinkWrapper>
      <LinkWrapper href={link}>
        <Name>{currentDialog?.abbTitle}</Name>
      </LinkWrapper>
      <SubTitle>
        {currentDialog?.category === "place" ? "Место" : "Событие"}
      </SubTitle>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: #101010;
`;

const SubTitle = styled.div`
  font-size: 14px;
  color: #737373;
`;

const ProfileAvatar = styled.img`
  width: 75px;
  height: 75px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid #dedede;
  margin-bottom: 10px;
`;

export default Profile;
