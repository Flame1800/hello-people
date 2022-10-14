import React from "react";
import API from "../../src/Helpers/API";
import Post from "../../src/Components/Screens/Post/Post";

type Props = {
  post: PostType;
};

const PostPage = ({ post }: Props) => {
  return <Post key={post.id} post={post} />;
};

PostPage.getInitialProps = async (ctx: any) => {
  const post = await API.getPosts(ctx.query.slug);

  return { post: post.data.data[0] };
};

export default PostPage;
