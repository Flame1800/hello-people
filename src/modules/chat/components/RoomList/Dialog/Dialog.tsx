import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import Avatar from "../../common/Avatar";
import {
  DialogContentStyle,
  DialogDateStyle,
  DialogHeadStyle,
  DialogInfo,
  DialogWrapper,
  LastMessage,
  Notifocation,
  UserNameStyle,
} from "./DialogStyles";
import { DialogProps } from "../../../models/DialogProps";
import chatStore from "../../../stores/chatStore";
import dialogsStore from "../../../stores/dialogsStore";

const categoryTitles: { [key: string]: string } = {
  place: "Место",
  event: "Событие",
  meet: "Встреча",
  chat: "Группа",
  private: "Личные",
};

const Dialog = ({ dialog }: { dialog: DialogProps }) => {
  const { cover, abbTitle } = dialog;
  const { openChat } = chatStore;
  const { currentDialog } = dialogsStore;
  const newMessagesCount = 0;

  const selectDialogHandler = () => {
    if (currentDialog?.abbTitle === dialog.abbTitle) return;
    openChat(dialog.id, dialog.category);
  };

  const userName = <UserNameStyle>{abbTitle}</UserNameStyle>;
  const dialogDate = <DialogDateStyle>0</DialogDateStyle>;

  const lastMessageComponent = (
    <LastMessage>{categoryTitles[dialog.category]}</LastMessage>
  );

  const notification = newMessagesCount !== 0 && (
    <Notifocation>
      <p>0</p>
    </Notifocation>
  );

  return (
    <DialogWrapper
      active={currentDialog?.abbTitle === dialog.abbTitle}
      onClick={selectDialogHandler}
    >
      <Avatar url={cover} />
      <DialogContentStyle>
        <DialogHeadStyle>
          {userName}
          {dialogDate}
        </DialogHeadStyle>
        <DialogInfo>
          {lastMessageComponent}
          {notification}
        </DialogInfo>
      </DialogContentStyle>
    </DialogWrapper>
  );
};

export default observer(Dialog);
