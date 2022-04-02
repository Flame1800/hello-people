import React from 'react';
import {useRouter} from "next/router";

const BackButton = () => {
    const router = useRouter()

    return (
        <div onClick={() => router.back()}>
            <img src="/img/back-icon.svg" alt="Назад"/>
        </div>
    );
};

export default BackButton;