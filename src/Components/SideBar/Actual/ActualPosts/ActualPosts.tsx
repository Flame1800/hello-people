import React, { useEffect, useState } from "react";
import styled from "styled-components";
import API from "../../../../Helpers/API";
import makeBeautyDate from "../../../../Helpers/makeBeautyDate";
import Link from "next/link";
import Comment from "../../../Common/Comment";

const ActualPosts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const req = await API.getActualPosts();
      const fetchPosts = req.data.data;
      setPosts(fetchPosts);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Wrapper>
      {posts.map((post: PostType) => {
        return (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <a href={`/posts/${post.id}`}>
              <Post>
                <Title>{post.attributes.title}</Title>
                <Under>
                  <Date>{makeBeautyDate(post.attributes.createdAt)}</Date>
                  <Comment value={post.attributes.comments.data.length} />
                </Under>
              </Post>
            </a>
          </Link>
        );
      })}
    </Wrapper>
  );
};

const Post = styled.div`
  border: 1px solid #c2c2c2;
  border-radius: 15px;
  padding: 10px 15px;
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
    background: rgba(239, 239, 239, 0.45);
  }
`;

const Date = styled.div`
  margin-top: 5px;
  font-size: 14px;
  color: rgb(143, 143, 143);
`;

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
`;

const Under = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #262626;
  margin-top: 8px;
`;

export default ActualPosts;
