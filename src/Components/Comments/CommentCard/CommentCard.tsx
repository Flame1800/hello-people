import React, { ReactChild } from "react";
import Link from "next/link";
import CommentInput from "../CommentInput/CommentInput";
import { observer } from "mobx-react-lite";
import UserAvatar from "../../User/UserAvatar";
import UserStore from "../../../Stores/UserStore";
import makeBeautyDate from "../../../Helpers/makeBeautyDate";
import InnerCommentList from "../ReplyBranch/InnerComentsList";
import {
  Container,
  Date,
  Name,
  Text,
  Footer,
  Wrapper,
  Content,
  ResponseBtn,
  Delete,
} from "./CommentCard.style";
import commentsStore from "../../../Stores/CommentsStore";

type CommentCardType = {
  comment: CommentEntity;
};

const CommentCard = ({ comment }: CommentCardType) => {
  const [input, setInput] = React.useState(false);
  const { replies } = commentsStore;

  const user = comment.attributes.user.data;
  const currReplies = replies.filter(
    (reply) => reply.attributes.replyToComment.data?.id === comment.id
  );

  const WrapLink = ({ children }: { children: ReactChild }) => {
    return (
      <Link href={`/user/${user.id}`}>
        <a>{children}</a>
      </Link>
    );
  };

  const footer = (
    <Footer>
      {!comment.attributes.replyToComment.data && !input && UserStore.user && (
        <ResponseBtn onClick={() => setInput(true)}>Ответить</ResponseBtn>
      )}
      <Date>{makeBeautyDate(comment.attributes.createdAt)}</Date>
      {user.id === comment.attributes.user.data.id && (
        <Delete onClick={() => commentsStore.removeComment(comment)}>
          удалить
        </Delete>
      )}
    </Footer>
  );

  const inputComponent = input && (
    <CommentInput
      replyId={comment.id}
      isResponse={true}
      reset={() => setInput(false)}
    />
  );

  return (
    <Container>
      <Wrapper>
        <WrapLink>
          {user.attributes.avatar && (
            <UserAvatar url={user.attributes.avatar} />
          )}
        </WrapLink>
        <Content>
          <WrapLink>
            <Name>{user.attributes.username}</Name>
          </WrapLink>
          <Text>{comment.attributes.content}</Text>
          {footer}
          {inputComponent}
          <InnerCommentList innerComments={currReplies} />
        </Content>
      </Wrapper>
    </Container>
  );
};

export default observer(CommentCard);
