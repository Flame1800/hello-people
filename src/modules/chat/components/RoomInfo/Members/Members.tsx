import React from "react";
import styled from "styled-components";
import roomStore from "../../../stores/roomStore";
import { theme } from "../../../../../../styles/theme";
import UserCard from "../../UserCard/UserCard";

const Members = () => {
  const { chatUsers } = roomStore;
  return (
    <Wrapper>
      <Header>
        Участники <b>{chatUsers.length}</b>
      </Header>
      <List>
        {chatUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 30px;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  font-size: 15px;

  b {
    color: ${theme.color.orange};
    margin-left: 8px;
    font-size: 16px;
  }
`;

const List = styled.div`
  background: rgba(243, 243, 243, 0.52);
  border-radius: 10px;
  height: 600px;
  overflow: auto;
`;

export default Members;
