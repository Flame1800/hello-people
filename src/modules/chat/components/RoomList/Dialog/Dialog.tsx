import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import {
  DialogContentStyle,
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
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";

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
  const { currentDialog, resetCountMessages } = dialogsStore;
  const { setMessages } = roomStore;
  const router = useRouter();

  const selectDialogHandler = () => {
    if (currentDialog?.id === dialog.id) return;

    if (currentDialog) {
      chatStore.leaveChat();
    }

    setMessages([]);
    if (dialog && dialog.countNewMessages !== 0) {
      resetCountMessages(dialog.id);
    }

    openChat(dialog.objectId, dialog.category, dialog);
  };

  useEffect(() => {
    if (router.query.chatId === String(dialog.id)) {
      selectDialogHandler();
    }
  });

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
      active={currentDialog?.id === dialog.id}
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
