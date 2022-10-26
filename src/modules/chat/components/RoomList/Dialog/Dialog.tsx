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
import { toJS } from "mobx";

export const categoryTitles: { [key: string]: string } = {
  place: "Место",
  event: "Событие",
  meet: "Встреча",
  chat: "Группа",
  private: "Личные",
};

const Dialog = ({ dialog }: { dialog: DialogProps }) => {
  const { cover, abbTitle, countNewMessages } = dialog;
  const { openChat } = chatStore;
  const { currentDialog } = dialogsStore;
  const { setMessages } = roomStore;

  const selectDialogHandler = () => {
    if (currentDialog?.chatId === dialog.chatId) return;

    if (currentDialog) {
      chatStore.leaveChat();
    }

    setMessages([]);
    openChat(dialog.id, dialog.category, dialog);
  };

  const title = <UserNameStyle>{abbTitle ?? "Нет названия"}</UserNameStyle>;

  const lastMessageComponent = (
    <LastMessage>{categoryTitles[dialog.category]}</LastMessage>
  );

  const notification = (
    <Notification>
      <p>{countNewMessages}</p>
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
          {countNewMessages !== 0 && notification}
        </DialogHeadStyle>
        <DialogInfo>{lastMessageComponent}</DialogInfo>
      </DialogContentStyle>
    </DialogWrapper>
  );
};

export default observer(Dialog);
