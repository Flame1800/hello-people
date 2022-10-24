import React from "react";
import UserContentStore from "../../../../Stores/UserContentStore";
import MeetCard from "../../../Meet/MeetCard";
import { observer } from "mobx-react-lite";

const UserMeets = () => {
  const { userMeets } = UserContentStore;

  return (
    <>
      {userMeets.map((meet) => {
        return <MeetCard key={meet.id} meet={meet} />;
      })}
    </>
  );
};

export default observer(UserMeets);
