import React from "react";
import { ButtonStyle } from "../../../styles/commonStyles";
import UserStore from "../../Stores/UserStore";
import chatStore from "../../modules/chat/stores/chatStore";
import UiStateStore from "../../Stores/UiStateStore";
import { CategoryType } from "../../modules/chat/models/CategoryType";
import dialogsStore from "../../modules/chat/stores/dialogsStore";
import { observer } from "mobx-react-lite";

type Props = {
  entityId: number;
  category: CategoryType;
};

const OpenChatButton = ({ entityId, category }: Props) => {
  const { user } = UserStore;
  const { openChat, leaveChat } = chatStore;
  const { currentDialog } = dialogsStore;

  const thisChatIsOpen = currentDialog?.id === entityId;

  const openChatHandle = () => {
    if (!user) {
      return UiStateStore.toggleAuthModal();
    }

    if (thisChatIsOpen) {
      return leaveChat();
    }

    openChat(entityId, category);
  };

  return (
    <ButtonStyle outline onClick={() => openChatHandle()}>
      {thisChatIsOpen ? "Закрыть" : "Открыть"} чат
    </ButtonStyle>
  );
};

export default observer(OpenChatButton);
