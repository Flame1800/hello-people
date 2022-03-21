import React, { Dispatch, SetStateAction } from 'react';

import style from './Modal.module.css';

type ModalProps = {
    active: boolean,
    setActive: Dispatch<SetStateAction<boolean>>,
    content: JSX.Element,
};

const Modal: React.FC<ModalProps> = (props) => {
    const { active, setActive, content } = props;

    return (
        <div
            className={active ? style.component + ' ' + style.active : style.component}
            onClick={() => setActive(false)}
        >
            <div className={style.content} onClick={e => e.stopPropagation()}>
                {content}
            </div>
        </div>
    );
};

export default Modal;