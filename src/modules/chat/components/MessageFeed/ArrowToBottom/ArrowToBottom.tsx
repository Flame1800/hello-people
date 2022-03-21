import React from 'react';

import style from './ArrowToBottom.module.css';

type ArrowToBottomProps = {
  id: string;
};

const ArrowToBottom: React.FC<ArrowToBottomProps> = (props) => {
    const { id } = props;

    return (
        <a href={`#${id}`} className={style.component}>
            V
        </a>
    );
};

export default ArrowToBottom;