import React from "react";
import { ButtonStyle } from "../../../styles/commonStyles";
import UserStore from "../../Stores/UserStore";
import chatStore from "../../modules/chat/stores/chatStore";
import UiStateStore from "../../Stores/UiStateStore";
import { CategoryType } from "../../modules/chat/models/CategoryType";
import dialogsStore from "../../modules/chat/stores/dialogsStore";
import { observer } from "mobx-react-lite";
import { BeatLoader } from "react-spinners";
import { theme } from "../../../styles/theme";
import { isMobile } from "react-device-detect";
import { useRouter } from "next/router";

type Props = {
  entityId: number;
  category: CategoryType;
};

const OpenChatButton = ({ entityId, category }: Props) => {
  const router = useRouter();
  const { user } = UserStore;
  const { openChat, leaveChat, loading } = chatStore;
  const { currentDialog } = dialogsStore;

  const stringEntityId = String(entityId);

  const thisChatIsOpen = currentDialog?.objectId === stringEntityId;

  const openChatHandle = () => {
    if (!user) {
      return UiStateStore.toggleAuthModal();
    }

    if (thisChatIsOpen) {
      return leaveChat();
    }

    if (isMobile) {
      openChat(stringEntityId, category);
      return router.push("/messenger");
    }

    return openChat(stringEntityId, category);
  };

  const text = thisChatIsOpen ? "Закрыть чат" : "Открыть чат";

  return (
    <ButtonStyle outline onClick={() => openChatHandle()}>
      {loading ? <BeatLoader color={theme.color.orange} size={7} /> : text}
    </ButtonStyle>
  );
};

export default observer(OpenChatButton);
