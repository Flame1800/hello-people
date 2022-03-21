import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';

import style from './Toggle.module.css';

type ToggleProps = {
    action: Dispatch<SetStateAction<boolean>>,
    isActive: boolean,
};

const Toggle: React.FC<ToggleProps> = (props) => {
    const { action } = props;

    const onClickHandler = (event: ChangeEvent<HTMLInputElement>) => {
        action(event.currentTarget.checked);
    };

    return (
        <label className={style.component} >
            <input type="checkbox" checked={props.isActive} onChange={onClickHandler}/>
        </label>
    );
};

export default Toggle;