import { useEffect } from "react";
import { io } from "socket.io-client";
import { DialogProps } from "../models/DialogProps";
import dialogsStore from "../stores/dialogsStore";
import { MessageType } from "../models/Message";
import chatStore from "../stores/chatStore";
import roomStore from "../stores/roomStore";
import { UserType } from "../models/UserType";
import UserStore from "../../../Stores/UserStore";

type ChatInfoTypes = {
  members: UserType[];
  onlineUsers: UserType[];
  msgs: MessageType[];
  chat: DialogProps;
};

export default (apiUrl: string | undefined) => {
  if (!apiUrl) return;

  const { setUser, setSocket, setLoading } = chatStore;
  const {
    setMessages,
    setChatUsers,
    addMessage,
    setOnlineUsers,
    addChatUser,
    addOnlineUser,
  } = roomStore;
  const { user } = UserStore;
  const { setCurrentDialog, currentDialog } = dialogsStore;

  useEffect(() => {
    //  подключкение к сокетам и установка юзера
    const coreSocket = io(apiUrl, { query: { userId: user?.id } });
    setSocket(coreSocket);
    setUser(user);
    console.log("socket info", coreSocket);

    coreSocket?.on("getFavoriteChats", (data: DialogProps[]) => {
      console.log("getFavoriteChats", data);
      dialogsStore.setDialogs(data);
    });

    coreSocket?.on("userJoinChat", (data: ChatInfoTypes) => {
      console.log("userJoinChat", data); //  data = {users, mgs, chat}
    });

    coreSocket?.on("chatInfo", (data: ChatInfoTypes) => {
      console.log("chatInfo", data);

      setLoading(false);

      if (!currentDialog) {
        setCurrentDialog(data.chat);
      }

      setOnlineUsers(data.onlineUsers);
      setChatUsers(data.members);
      setMessages(data.msgs);
    });

    coreSocket?.on("newMsg", (data: MessageType) => {
      console.log("newMsg", data);
      addMessage(data);
    });

    coreSocket?.on("newMember", (data) => {
      console.log("newMember", data);
      addChatUser(data);
    });

    coreSocket?.on("newOnlineUser", (data) => {
      console.log("newOnlineUser", data);
      addOnlineUser(data);
    });

    return () => {
      chatStore.leaveChat();
      setCurrentDialog(null);
    };
  }, [user]);
};
