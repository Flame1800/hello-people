import React from 'react';

import style from './Meeting.module.css';
import { User } from '../../../models/User';
import { Place } from '../../../models/Place';
import Icon from '../../common/Icon';

export type MeetingProps = {
    id: string,
    author: User,
    text: string,
    place: Place,
};

const Meeting: React.FC<MeetingProps> = (props) => {
    const { id, text, place, author } = props;
    return (
        <div className={style.component}>

            <div className={style.header}>
                <div className={style.profile}>
                    <Icon url={author.avatar}/>
                    {author.name}
                </div>

                <div>
                    <Icon url='https://cdn-icons.flaticon.com/png/512/3944/premium/3944356.png?token=exp=1647860685~hmac=79d37b11a2b2146948bef8f2d62b02f6'/>
                </div>
            </div>

            <p>{text}</p>

            <div className={style.footer}>
                <div>
                    <button><Icon url="https://cdn-icons-png.flaticon.com/512/260/260103.png"/></button>
                    <button><Icon url="https://cdn-icons-png.flaticon.com/512/2462/2462719.png"/></button>
                </div>
                <div className={style.place}>
                    <p>{place.name}</p>
                    <p>{place.category}</p>
                </div>
            </div>

        </div>
    );
};

export default Meeting;