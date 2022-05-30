import React from 'react';
import styled from "styled-components";
import UserStore from "../../../Stores/UserStore";

const Familiars = ({user, isMe}) => {
    const userFriendIds = user.friends.map(({id}) => id)

    const countCommonFriends = () => {
        if (UserStore.user) {
            const commonFriends = UserStore?.user?.friends?.filter(({id}) => userFriendIds.indexOf(id) !== -1)
            return commonFriends?.length || 0
        }
    }


    return (
        <Wrapper>

            <div className='fam'>
                <div className="main-stat">
                    <img src="/img/person-icon.svg" alt="Person"/>
                    <div className="caption">
                        {user.friends.length} {user.friends.length === 1 ? 'знакомый' : 'знакомых'}
                    </div>
                </div>
                {UserStore.user && !isMe && <div className="our-familiars">
                    &bull; {countCommonFriends()} общих
                </div>}
            </div>
        </Wrapper>

    );
};

const Wrapper = styled.div`
  .friend-msg {
    margin-top: -15px;
    font-weight: 500;
    font-size: 16px;
    color: #464646;
    margin-bottom: 20px;
    margin-left: 5px;
    border-bottom: 1px solid;
  }

  .fam {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  img {
    width: 20px;
    height: 20px;
  }

  .main-stat {
    display: flex;
    align-items: center;

    & img {
      margin-right: 8px;
    }

    .caption {
      font-weight: 700;
      font-size: 14px;
      color: #373737;
      white-space: nowrap;
    }
  }

  .our-familiars {
    font-weight: 600;
    font-size: 15px;
    color: #FF7373;
    margin-left: 10px;
    white-space: nowrap;
  }
`

export default Familiars;