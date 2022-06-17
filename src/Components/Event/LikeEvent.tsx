import React from 'react';
import Like from "../Common/Like";
import UserStore from "../../Stores/UserStore";
import API from "../../Libs/API";

const LikeEvent = ({likes, id}) => {
    const {user, updateUser} = UserStore
    const isLikeMe = user.partyLikes.filter(event => {
        return event.id === id
    }).length === 1

    const [liked, setLike] = React.useState(isLikeMe)
    const [count, setCount] = React.useState(likes.data.length)

    const like = () => {
        if (!liked) {
            const partyLikes = [...user.partyLikes, id]
            setLike(true)
            setCount(count + 1)

            user.partyLikes = partyLikes
            updateUser(user)

            return API.updateUser(user.id, {partyLikes})
        }

        const partyLikes = user.partyLikes.filter(party => party.id !== id)
        setLike(false)
        setCount(count - 1)

        user.partyLikes = partyLikes
        updateUser(user)

        return API.updateUser(user.id, {partyLikes})
    }


    return (
        <div onClick={like}>
            <Like value={count} active={liked} />
        </div>
    );
};

export default LikeEvent;