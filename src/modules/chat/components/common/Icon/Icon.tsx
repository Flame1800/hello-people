import React from 'react';

import style from './Icon.module.css';

type IconProps = {
  url?: string,
};

const Icon: React.FC<IconProps> = (props) => {
    const { url } = props;
    return (
        <div className={style.component}>
            <img src={url} alt="No icon"/>
        </div>
    );
};

export default Icon;