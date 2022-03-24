import { makeAutoObservable } from 'mobx';
import { UserType } from '../../models/UserType';
import { userPetr } from '../../mocks/dialogs';
import { Socket } from 'socket.io-client';
import { SettingParamProps } from '../../components/common/Settings/SettingParam/SettingParam';


class ChatStore {
    api: string = 'http://localhost:3000';

    user: UserType = userPetr;

    currentDialogId: string = '';

    socket: Socket | undefined;

    settingsChat: SettingParamProps[] = [
        {
            id: '1',
            icon: 'https://cdn-icons-png.flaticon.com/512/4584/4584984.png',
            text: 'Закрепить в чатах',
            action: () => console.log('Закрепить в чатах'),
            haveToggle: true,
            isToggle: true,
        },
        {
            id: '2',
            icon: 'https://cdn-icons.flaticon.com/png/512/3986/premium/3986976.png?token=exp=1647701489~hmac=d39f101c7a5f7e9a0b3168b8bce3d182',
            text: 'Уведомления вкл',
            action: () => console.log('Уведомления вкл'),
            haveToggle: true,
            isToggle: false,
        },
        {
            id: '3',
            icon: 'https://cdn-icons.flaticon.com/png/512/3156/premium/3156999.png?token=exp=1647701505~hmac=d829b9b8558a49050baf4e40b91e094a',
            text: 'Удалить',
            action: () => console.log('Удалить'),
            haveToggle: false,
        },
    ];

    constructor() {
        makeAutoObservable(this);
    };

    getApi = () => this.api;

    setApi = (api: string) => {
        this.api = api;
    };

    getUser = () => this.user;

    setUser = (user:UserType) => {
      this.user = user;
    };

    getCurrentDialogId = () => this.currentDialogId;

    setCurrentDialogId = (messageFeed: string) => {
        this.currentDialogId = messageFeed;
    };

    getSocket = () => this.socket;

    setSocket = (socket: Socket) => {
        this.socket = socket;
    };

    getSettingsChat = () => this.settingsChat;

    setSettingsChat = (settings: SettingParamProps[]) => {
        this.settingsChat = settings;
    };
}

export default new ChatStore();