import React from 'react';
import UserStore from "../../../Stores/UserStore";
import API from "../../../Libs/API";
import Like from "../../Common/Like";
import {observer} from "mobx-react-lite";

const LikePlace = ({likes, id}) => {
    const {user, updateUser} = UserStore
    const isLikeMe = user.placeLikes.filter(event => {
        return event.id === id
    }).length === 1

    const [liked, setLike] = React.useState(isLikeMe)
    const [count, setCount] = React.useState(likes.data.length)

    const like = () => {
        if (!liked) {
            const placeLikes = [...user.placeLikes, id]
            setLike(true)
            setCount(count + 1)

            user.placeLikes = placeLikes
            updateUser(user)

            return API.updateUser(user.id, {placeLikes})
        }

        const placeLikes = user.placeLikes.filter(party => party.id !== id)
        setLike(false)
        setCount(count - 1)

        user.placeLikes = placeLikes
        updateUser(user)

        return API.updateUser(user.id, {placeLikes})
    }


    return (
        <div onClick={like}>
            <Like value={count} active={liked} />
        </div>
    );
};

export default observer(LikePlace);