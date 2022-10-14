import React from "react";
import API from "../../src/Helpers/API";
import PostCard from "../../src/Components/PostCard/PostCard";
import styled from "styled-components";
import HeaderServicesPage from "../../src/Components/Common/HeaderServicesPage";

type Props = {
  posts: PostType[];
};

const PostsPage = ({ posts }: Props) => {
  return (
    <Wrapper>
      <HeaderServicesPage>Посты</HeaderServicesPage>
      {posts.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

PostsPage.getInitialProps = async () => {
  const posts = await API.getPosts();

  return { posts: posts.data.data };
};

export default PostsPage;
