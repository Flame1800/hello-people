import { makeAutoObservable } from 'mobx';
import { DialogProps } from '../../components/DialogFeed/Dialog/Dialog';
import { dialogsMock } from '../../mocks/dialogs';
import { MessageType } from '../../models/Message';
import { CategoryType } from '../../models/CategoryType';


class dialogFeedStore {
    dialogs: DialogProps[] = dialogsMock;

    constructor() {
        makeAutoObservable(this);
    }

    makeAllMessagesIsRead = (userId: string, dialogId: string) => {
        const newMessages = this.getMessages(dialogId)?.map(message => {
            if (!message.isRead && (message.author.id !== userId)) {
                console.log(message.text, message.isRead);
                return { ...message, isRead: true };
            }
            return message;
        });
        if (newMessages) this.setMessages(dialogId, newMessages);

    };

    getMessages = (dialogId: string) => this.getDialog(dialogId)?.messages;

    setMessages = (dialogId: string, newMessages: MessageType[]) => {
        let dialog = this.getDialog(dialogId);
        if (dialog?.messages) {
            dialog.messages = newMessages;
        }
    };

    getDialogs = () => this.dialogs;

    getDialogsByTypeAndFilter = (category: CategoryType, search?: string) => {
        return this.getDialogs()
            .filter(dialog => (dialog.category === category) && (search ? dialog.name?.includes(search) : true))
            .sort((a, b) => {
                if (a.pined && b.pined) return 0;
                if (a.pined && !b.pined) return -1;
                return 1;
            });
    };

    getDialog = (id: string) => this.getDialogs().find(dialog => dialog.id === id);

    setDialog = (id: string, newDialog: DialogProps) => {
        this.getDialogs().filter(dialog => dialog.id === id)[0] = newDialog;
    };

    addMessageToDialog = (id: string, message: MessageType) => {
        const dialog = this.getDialog(id);
        if (dialog) {
            dialog.messages.push(message);
            this.setDialog(id, { ...dialog });
        }
    };
}

export default new dialogFeedStore();