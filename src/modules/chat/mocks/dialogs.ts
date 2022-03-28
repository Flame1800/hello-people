import { DialogProps } from '../components/DialogFeed/Dialog/Dialog';
import { UserType } from '../models/UserType';
import { MeetingProps } from '../components/MeetingFeed/Meeting/Meeting';

const userIvan: UserType = {
    id: '1',
    name: 'Иван Иванов',
    avatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg',
    lastOnline: new Date().toISOString(),
}

export const userPetr: UserType = {
    id: '2',
    name: 'Пётр Ян',
    avatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg',
    lastOnline: new Date().toISOString(),
}

const userGena: UserType = {
    id: '3',
    name: 'Гена Генадий',
    avatar: 'https://cspromogame.ru//storage/upload_images/avatars/1299.jpg',
    lastOnline: new Date().toISOString(),
}

export const dialogsMock: DialogProps[] = [
    {
        id: '1',
        type: 'private',
        category: 'chat',
        name: '',
        members: [userIvan, userPetr],
        messages: [
            {
                id: '1',
                author: userIvan,
                text: 'Привет!',
                date: '19.03.2022 18:01',
                isRead: true,
            },
            {
                id: '2',
                author: userPetr,
                text: 'Здарова!',
                date: '19.03.2022 18:02',
                isRead: true,
            },
            {
                id: '3',
                author: userIvan,
                text: 'Как оно?',
                date: '18:03',
                isRead: true,
            },
            {
                id: '4',
                author: userPetr,
                text: 'Нормально. Ты как?',
                date: '18:04',
                isRead: true,
            },
            {
                id: '5',
                author: userIvan,
                text: 'Да по-тихоньку',
                date: '18:05',
                isRead: false,
            },
        ],
        pined: true,
    },
    {
        id: '2',
        type: 'conversation',
        category: 'chat',
        name: 'Наша команда',
        avatar: 'https://thumbs.dreamstime.com/b/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81-%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D1%8B-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD-%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B0-%D0%BB%D1%8E%D0%B4%D0%B5%D0%B9-%D1%81%D0%BE%D1%82%D1%80%D1%83%D0%B4%D0%BD%D0%B8%D0%BA-%D0%BE%D1%84%D0%B8%D1%81%D0%B0-162178855.jpg',
        messages: [
            {
                id: '6',
                author: userIvan,
                text: 'Всем привет!',
                date: '19.03.2022 18:05',
                isRead: true,
            },
            {
                id: '7',
                author: userPetr,
                text: 'Хай',
                date: '19.03.2022 18:07',
                isRead: true,
            },
            {
                id: '8',
                author: userGena,
                text: 'Общий!',
                date: '19.03.2022 18:08',
                isRead: false,
            },
            {
                id: '9',
                author: userGena,
                text: 'Какие планы?',
                date: '19.03.2022 18:11',
                isRead: false,
            },
        ],
        members: [ userIvan, userPetr, userGena ],
        author: userGena,
        pined: false,
    },
    {
        id: '3',
        type: 'conversation',
        category: 'chat',
        name: 'Наша команда 2',
        avatar: 'https://thumbs.dreamstime.com/b/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81-%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D1%8B-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD-%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B0-%D0%BB%D1%8E%D0%B4%D0%B5%D0%B9-%D1%81%D0%BE%D1%82%D1%80%D1%83%D0%B4%D0%BD%D0%B8%D0%BA-%D0%BE%D1%84%D0%B8%D1%81%D0%B0-162178855.jpg',
        messages: [
            {
                id: '6',
                author: userIvan,
                text: 'Всем привет!',
                date: '19.03.2022 18:05',
                isRead: true,
            },
            {
                id: '7',
                author: userPetr,
                text: 'Хай',
                date: '19.03.2022 18:07',
                isRead: true,
            },
            {
                id: '8',
                author: userGena,
                text: 'Общий!',
                date: '19.03.2022 18:08',
                isRead: false,
            },
            {
                id: '9',
                author: userGena,
                text: 'Какие планы?',
                date: '19.03.2022 18:11',
                isRead: false,
            },
        ],
        members: [ userIvan, userPetr, userGena ],
        author: userGena,
        pined: true,
    },
    {
        id: '4',
        type: 'conversation',
        category: 'place',
        name: 'Бар Coco-Jambo',
        avatar: 'https://cdn-icons-png.flaticon.com/512/1651/1651865.png',
        messages: [
            {
                id: '6',
                author: userIvan,
                text: 'Всем привет!',
                date: '19.03.2022 18:05',
                isRead: true,
            },
            {
                id: '7',
                author: userPetr,
                text: 'Хай',
                date: '19.03.2022 18:07',
                isRead: true,
            },
            {
                id: '8',
                author: userGena,
                text: 'Общий!',
                date: '19.03.2022 18:08',
                isRead: false,
            },
            {
                id: '9',
                author: userGena,
                text: 'Какие планы?',
                date: '19.03.2022 18:11',
                isRead: false,
            },
        ],
        members: [ userIvan, userPetr, userGena ],
        author: userGena,
        pined: true,
    },
    {
        id: '5',
        type: 'conversation',
        category: 'meeting',
        name: 'Встреча в Coco-Jambo',
        avatar: 'https://cdn-icons-png.flaticon.com/512/1651/1651865.png',
        messages: [
            {
                id: '6',
                author: userIvan,
                text: 'Сегодня в 6 часов!',
                date: '19.03.2022 18:05',
                isRead: true,
            },
            {
                id: '7',
                author: userPetr,
                text: 'Отлично, я буду!',
                date: '19.03.2022 18:07',
                isRead: true,
            },
            {
                id: '8',
                author: userGena,
                text: 'Жаль, не смогу присутствовать!',
                date: '19.03.2022 18:08',
                isRead: false,
            },
            {
                id: '9',
                author: userGena,
                text: 'А завтра будет сбор?',
                date: '19.03.2022 18:11',
                isRead: false,
            },
        ],
        members: [ userIvan, userPetr, userGena ],
        author: userGena,
        pined: true,
    },
];

const placeCocoJambo = {
    id: '1',
    name: 'Coco-Jambo',
    category: 'Ночной клуб',
}

export const meetingMock: MeetingProps[] = [
    {
        id: '1',
        author: userGena,
        text: 'Хочу новых знакомств',
        place: placeCocoJambo,
    },
    {
        id: '2',
        author: userIvan,
        text: 'Диско-танцы сегодня, нужен напарник!',
        place: placeCocoJambo,
    }
];