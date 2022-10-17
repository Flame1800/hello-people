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
import roomStore from "../../../stores/roomStore";
import DialogAvatar from "./DialogAvatar";

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
  const { setMessages } = roomStore;
  const newMessagesCount = 0;

  const idStr = String(dialog.chatId);

  const selectDialogHandler = () => {
    if (currentDialog?.chatId === dialog.chatId) return;

    if (currentDialog) {
      chatStore.leaveChat();
    }

    setMessages([]);
    openChat(dialog.id, dialog.category, dialog);
  };

  const userName = <UserNameStyle>{abbTitle}</UserNameStyle>;
  const dialogDate = (
    <DialogDateStyle>{idStr.substr(idStr.length - 2)}</DialogDateStyle>
  );

  const lastMessageComponent = (
    <LastMessage>{categoryTitles[dialog.category]}</LastMessage>
  );

  const notification = newMessagesCount !== 0 && (
    <Notifocation>
      <p>{0}</p>
    </Notifocation>
  );

  return (
    <DialogWrapper
      active={currentDialog?.chatId === dialog.chatId}
      onClick={selectDialogHandler}
    >
      <DialogAvatar type={dialog.category} url={cover} />
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
