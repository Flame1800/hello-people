import React from 'react';

import style from './Setting.module.css';
import SettingParam, { SettingParamProps } from './SettingParam/SettingParam';
import { observer } from 'mobx-react-lite';

type SettingsProps = {
  settingsList: SettingParamProps[],
};

const Settings: React.FC<SettingsProps> = (props) => {
    const { settingsList } = props;

    return (
        <div className={style.component}>
            {settingsList.map(setting => <SettingParam key={setting.id} {...setting}/>)}
        </div>
    );
};

export default observer(Settings);