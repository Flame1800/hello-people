import styled from "styled-components";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import CommentCard from "../CommentCard/CommentCard";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import commentsStore from "../../../Stores/CommentsStore";

const CommentList = () => {
  const { comments } = commentsStore;

  return (
    <Wrapper>
      {comments.map((comment: CommentEntity) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

export default observer(CommentList);
