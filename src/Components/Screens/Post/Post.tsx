import styled from "styled-components";
import PostContent from "./Components/PostContent";
import PostHeader from "./Components/PostHeader";
import { theme } from "../../../../styles/theme";
import CommentsBlock from "../../Comments/CommnetsBlock";

type Props = {
  post: PostType;
};

const Post = ({ post }: Props) => {
  return (
    <>
      <Wrapper>
        <WrapperPost>
          <PostHeader post={post} />
          <PostContent post={post} />
        </WrapperPost>
      </Wrapper>
      <CommentsBlock id={post.id} model="post" />
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background: #ffffff;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  border-radius: ${theme.borderRadius.main};
  box-shadow: ${theme.boxShadow.mainComponent};
`;

const WrapperPost = styled.div`
  padding: 30px 60px;
  margin-bottom: 30px;
`;

export default Post;
