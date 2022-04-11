import React from 'react';
import styled from "styled-components";
import UserContentTabs from "./UserContentTabs";
import Photos from "./UserPhotos/Photos";

const UserContent = () => {
    return (
        <div>
            <UserContentTabs/>
            <Photos/>
        </div>
    );
};


export default UserContent;