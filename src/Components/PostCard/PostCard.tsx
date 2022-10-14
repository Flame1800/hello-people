import styled from "styled-components";
import Link from "next/link";
import PostHeader from "../Screens/Post/Components/PostHeader";
import { theme } from "../../../styles/theme";
import Comment from "../Common/Comment";

type Props = {
  post: PostType;
};

const PostCard = ({ post }: Props) => {
  const { content } = post.attributes;
  console.log(post);

  const firstP = JSON.parse(content).blocks.filter(
    (b: any) => b.type === "paragraph"
  )[0].data;

  console.log(firstP);

  return (
    <Wrapper>
      <PostHeader post={post} />
      <Content>
        <Link href={`/posts/${post.attributes.slug}`}>
          <a>
            <Title>{post.attributes.title}</Title>
            <div>{firstP.text}</div>
          </a>
        </Link>
      </Content>
      <Comment value={post.attributes.comments.data.length} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  box-shadow: ${theme.boxShadow.mainComponent};
  border-radius: 20px;
  padding: 20px 35px;
  margin-bottom: 30px;
  background: #fff;
`;

const Content = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #313131;
  margin-bottom: 8px;
`;

export default PostCard;
