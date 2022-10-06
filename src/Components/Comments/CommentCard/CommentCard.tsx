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
import userStore from "../../../Stores/UserStore";
import { DateTime } from "luxon";
import SimpleMenu from "../../Common/SimpleMenu/SimpleMenu";
import MenuItem from "../../Common/SimpleMenu/MenuItem";
import { theme } from "../../../../styles/theme";

type CommentCardType = {
  comment: CommentEntity;
};

const CommentCard = ({ comment }: CommentCardType) => {
  const [input, setInput] = React.useState(false);
  const [isShowMenu, setIsShowMenu] = React.useState(false);
  const { replies } = commentsStore;
  const { user } = userStore;

  const date = DateTime.fromISO(comment.attributes.createdAt);
  const mappedDate = date.setLocale("ru").toLocaleString({
    month: "long",
    day: "2-digit",
  });

  const currUser = comment.attributes.user.data;
  const currReplies = replies.filter(
    (reply) => reply.attributes.replyToComment.data?.id === comment.id
  );

  const WrapLink = ({ children }: { children: ReactChild }) => {
    return (
      <Link href={`/user/${currUser.id}`}>
        <a>{children}</a>
      </Link>
    );
  };

  const deleteComment = () => {
    commentsStore.removeComment(comment);
    setIsShowMenu(false);
  };

  const dropdownMenu = (
    <SimpleMenu isShow={isShowMenu} setIsShow={setIsShowMenu}>
      <MenuItem
        onClick={deleteComment}
        title="Удалить"
        color={theme.color.orange}
      />
    </SimpleMenu>
  );

  const footer = (
    <Footer>
      {!comment.attributes.replyToComment.data && !input && UserStore.user && (
        <ResponseBtn onClick={() => setInput(true)}>Ответить</ResponseBtn>
      )}
      <Date>{mappedDate}</Date>
      {user?.id === currUser.id && dropdownMenu}
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
          {currUser.attributes.avatar && (
            <UserAvatar url={currUser.attributes.avatar} />
          )}
        </WrapLink>
        <Content>
          <WrapLink>
            <Name>{currUser.attributes.username}</Name>
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
