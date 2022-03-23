import React, {useEffect, useState} from 'react';

import style from './SettingParam.module.css';
import Icon from '../../UserAvatar';
import Toggle from '../../Toggle';
import chatStore from '../../../../stores/chatStore';

export type SettingParamProps = {
    id: string,
    icon: string,
    text: string,
    action: () => any,
    haveToggle?: boolean,
    isToggle?: boolean,
};

const SettingParam: React.FC<SettingParamProps> = (props) => {
    const {id, icon, text, action, haveToggle, isToggle} = props;
    const {settingsChat} = chatStore;
    const [toggle, setToggle] = useState(isToggle || false);

    useEffect(() => {
        action();
        if (settingsChat) {
            const setting = settingsChat.find(setting => setting.id === id);
            if (setting) setting.isToggle = toggle;
        }

    }, [toggle]);

    return (
        <div className={style.component}>
            <Icon url={icon}/>
            {haveToggle ?
                <>
                    <p>{text}</p>
                    <Toggle action={setToggle} isActive={isToggle || false}/>
                </> :
                <>
                    <p onClick={() => action()}>{text}</p>
                </>
            }
        </div>
    );
};

export default SettingParam;