import React from "react";
import { observer } from "mobx-react-lite";
import {
  DialogContentStyle,
  DialogDateStyle,
  DialogHeadStyle,
  DialogInfo,
  DialogWrapper,
  LastMessage,
  Notification,
  UserNameStyle,
} from "./DialogStyles";
import { DialogProps } from "../../../models/DialogProps";
import chatStore from "../../../stores/chatStore";
import dialogsStore from "../../../stores/dialogsStore";
import roomStore from "../../../stores/roomStore";
import DialogAvatar from "./DialogAvatar";

export const categoryTitles: { [key: string]: string } = {
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

  const newMessagesCount: number = 1;

  const idStr = String(dialog.chatId);

  const selectDialogHandler = () => {
    if (currentDialog?.chatId === dialog.chatId) return;

    if (currentDialog) {
      chatStore.leaveChat();
    }

    setMessages([]);
    openChat(dialog.id, dialog.category, dialog);
  };

  const title = <UserNameStyle>{abbTitle ?? "Нет названия"}</UserNameStyle>;
  const dialogDate = (
    <DialogDateStyle>{idStr.substr(idStr.length - 2)}</DialogDateStyle>
  );

  const lastMessageComponent = (
    <LastMessage>{categoryTitles[dialog.category]}</LastMessage>
  );

  const notification = (
    <Notification>
      <p>{newMessagesCount}</p>
    </Notification>
  );

  return (
    <DialogWrapper
      active={currentDialog?.chatId === dialog.chatId}
      onClick={selectDialogHandler}
    >
      <DialogAvatar type={dialog.category} url={cover} theme={dialog?.theme} />
      <DialogContentStyle>
        <DialogHeadStyle>
          {title}
          {notification}
        </DialogHeadStyle>
        <DialogInfo>
          {lastMessageComponent}
          {dialogDate}
        </DialogInfo>
      </DialogContentStyle>
    </DialogWrapper>
  );
};

export default observer(Dialog);
