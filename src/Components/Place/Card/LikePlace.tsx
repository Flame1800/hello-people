import React, { useEffect } from "react";
import UserStore from "../../../Stores/UserStore";
import API from "../../../Helpers/API";
import Like from "../../Common/Like";
import { observer } from "mobx-react-lite";

type Props = {
  likes: { data: LikeType[] };
  id: number;
};

const LikePlace = ({ likes, id }: Props) => {
  const { user, updateUser } = UserStore;

  const [liked, setLike] = React.useState(false);
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    const isLikeMe =
      user.placeLikes.filter((event: EventType) => {
        return event.id === id;
      }).length === 1;

    setLike(isLikeMe);
    setCount(likes?.data.length);
  }, []);

  const like = () => {
    if (!liked) {
      const placeLikes = [...user.placeLikes, id];
      setLike(true);
      setCount(count + 1);

      user.placeLikes = placeLikes;
      updateUser(user);

      return API.updateUser(user.id, { placeLikes });
    }

    const placeLikes = user.placeLikes.filter(
      (party: EventType) => party.id !== id
    );
    setLike(false);
    setCount(count - 1);

    user.placeLikes = placeLikes;
    updateUser(user);

    return API.updateUser(user.id, { placeLikes });
  };

  return (
    <div onClick={like}>
      <Like value={count} active={liked} />
    </div>
  );
};

export default observer(LikePlace);
