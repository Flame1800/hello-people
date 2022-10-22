import React from "react";
import { API_URL } from "../../../../../Constants/api";
import styled from "styled-components";
import dialogsStore from "../../../stores/dialogsStore";
import { useRouter } from "next/router";
import LinkWrapper from "../../common/LinkWrapper";
import DialogAvatar from "../../RoomList/Dialog/DialogAvatar";
import { categoryTitles } from "../../RoomList/Dialog/Dialog";

const Profile = () => {
  const { currentDialog } = dialogsStore;
  const avatar = currentDialog?.cover ?? "";
  const route = useRouter();
  const link = `${route.basePath}/${currentDialog?.category}s/${currentDialog?.id}`;

  return (
    <Wrapper>
      <LinkWrapper href={link}>
        <DialogAvatar
          theme={currentDialog?.theme}
          type={currentDialog?.category}
          url={currentDialog?.cover}
          size="large"
        />
      </LinkWrapper>
      <LinkWrapper href={link}>
        <Name>{currentDialog?.abbTitle}</Name>
      </LinkWrapper>
      <SubTitle>{categoryTitles[currentDialog?.category ?? ""]}</SubTitle>
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
  margin-top: 10px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: #101010;
`;

const SubTitle = styled.div`
  font-size: 14px;
  color: #737373;
`;

export default Profile;
