import { makeAutoObservable } from 'mobx';
import { DialogProps } from '../../components/DialogFeed/Dialog/Dialog';
import { dialogsMock, meetingMock } from '../../mocks/dialogs';
import { MeetingProps } from '../../components/MeetingFeed/Meeting/Meeting';
import { MessageType } from '../../models/Message';


class dialogFeedStore {
    dialogs: DialogProps[] = dialogsMock;

    meetings: MeetingProps[] = meetingMock;

    constructor() {
        makeAutoObservable(this, );
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

    getMeetings = () => this.meetings;

    setMeetings = (newMeetings: MeetingProps[]) => this.meetings = newMeetings;
}

export default new dialogFeedStore();