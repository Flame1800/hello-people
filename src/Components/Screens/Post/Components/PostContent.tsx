import styled from "styled-components";
import Editor from "../../../Editor/Editor";

type Props = {
  post: PostType;
};

const PostContent = ({ post }: Props) => {
  return (
    <Wrapper>
      <Title>{post.attributes.title}</Title>
      <Editor data={post.attributes.content} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  max-width: 680px;
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #313131;
  margin-bottom: 8px;
`;

const Text = styled.div`
  font-size: 16px;
`;

export default PostContent;
