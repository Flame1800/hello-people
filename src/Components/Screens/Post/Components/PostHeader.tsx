import styled from "styled-components";
import React from "react";
import makeBeautyDate from "../../../../Helpers/makeBeautyDate";
import UserAvatar from "../../../User/UserAvatar";

type Props = {
  post: PostType;
};

const PostHeader = ({ post }: Props) => {
  const date = makeBeautyDate(post.attributes.createdAt);
  const user = post.attributes.user.data;

  return (
    <Wrapper>
      {user && (
        <Content>
          <Inner>
            <UserAvatar url={user.attributes.avatar} />
            <Name>{user.attributes.username}</Name>
            <DateHolder>{date}</DateHolder>
          </Inner>
        </Content>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.div`
  font-size: 17px;
  font-weight: 600;
  margin-right: 10px;
  margin-left: 15px;
`;

const DateHolder = styled.div`
  font-size: 15px;
  color: #525252;
`;

export default PostHeader;
