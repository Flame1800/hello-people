import React from 'react';
import chatStore from "../../stores/chatStore/chatStore";

const ModeSwitcher = () => {
    const {getIsDesktop, setIsDesktop} = chatStore;

    const viewTypeHandler = () => {
        setIsDesktop(!getIsDesktop());
    };


    return (
        <div>
            <img className="viewType"
                 src={getIsDesktop() ? '/img/expand.svg' :
                     '/img/collapse.svg'}
                 alt=""
                 onClick={viewTypeHandler}
            />
        </div>
    );
};

export default ModeSwitcher;