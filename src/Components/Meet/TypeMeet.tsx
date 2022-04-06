import React from 'react';
import {Tooltip} from "@mui/material";

type TypeMeetProps = {
    type: string
}

const TypeMeet: React.FC<TypeMeetProps> = ({type}) => {
    return (
        <>
            {type === 'group'
                ?
                <Tooltip title="Груповая встреча">
                    <img src="/img/group-icon.svg" alt="группа"/>
                </Tooltip>
                :
                <Tooltip title="Парная встреча">
                    <img src="/img/pair-icon.svg" alt="pair"/>
                </Tooltip>
            }
        </>
    )
}


export default TypeMeet;