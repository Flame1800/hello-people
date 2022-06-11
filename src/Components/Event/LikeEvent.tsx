import React from 'react';
import Like from "../Common/Like";
import UserStore from "../../Stores/UserStore";
import API from "../../Libs/API";

const LikeEvent = ({likes, id}) => {
    const {user} = UserStore

    const isLikeMe = user.partyLikes.filter(event => {
        return event.id === id
    }).length === 1

    const like = () => {
        if (!isLikeMe) {
            const partyLikes = [...user.partyLikes, id]
            return API.updateUser(user.id, {data: {partyLikes}})
        }

        const partyLikes = user.partyLikes.filter(party => party.id !== id)
        return API.updateUser(user.id, {data: {partyLikes}})
    }


    return (
        <div onClick={like}>
            <Like value={likes.data.length} active={isLikeMe}/>
        </div>
    );
};

export default LikeEvent;