import React from 'react'
import styled from 'styled-components'
import UserStore from "../../Stores/UserStore";
import {theme} from "../../../styles/theme";
import CommentsStore from "../../Stores/CommentsStore";
import {observer} from "mobx-react-lite";


const CommentInput = ({reset, isResponse, replyId}) => {
    const [textValue, setTextValue] = React.useState('')

    const {model, idEntity, addComment} = CommentsStore
    const {user} = UserStore

    const SendOnKey = (e: any) => {
        if (e.code === 'Enter') {
            sendCommentHandler()
        }
    }

    const sendCommentHandler = async () => {
        if (user === null || textValue.length < 1 || textValue.charAt(0) === " ") {
            return null
        }

        const comment = {
            content: textValue,
            user: user.id,
            [model]: [idEntity]
        }

        const newComment = isResponse
            ? {replyToComment: replyId, ...comment}
            : comment

        await addComment({data: newComment})
        setTextValue('')

        if (isResponse) {
            reset()
        }
    }

    return (
        <SendBlock>
            <CommentEditor>
                <TextareaStyle
                    onChange={e => setTextValue(e.target.value)}
                    value={textValue}
                    onKeyDown={e => SendOnKey(e)}
                    placeholder={isResponse ? 'Ответ...' : 'Комментарий...'}
                />
            </CommentEditor>
            <Buttons>
                {isResponse && <div className='respone-btn' onClick={reset}>Отмена</div>}
                <SendButton onClick={() => sendCommentHandler()}>
                    Отправить
                </SendButton>
            </Buttons>
        </SendBlock>
    )
}

const SendBlock = styled.div`
  margin-top: 10px;
  width: 100%;
`

const TextareaStyle = styled.textarea`
  width: 100%;
  padding: 10px;
  border: none;
  outline: none;
  margin-bottom: 10px;
  resize: none;
  font-weight: 500;
  font-size: 16px;
  white-space: normal;

  &::placeholder {
    font-size: 16px;
  }
`

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 5px;
  font-size: 12px;

  .respone-btn {
    color: #000000;
    padding: 10px 20px;
    border-radius: 10px;
    background: #FFF;
    border: 1px solid #adadad;
    margin-right: 8px;
    cursor: pointer;
  }
`

const SendButton = styled.div`
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  background: ${theme.color.orange};
  display: block;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;

  div {
    cursor: pointer;
  }
`

const CommentEditor = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  border-radius: 10px;
  padding: 8px;
  background: #fff;
  border: 0.1px solid #f1f1f1;
  margin-bottom: 10px;

  img {
    cursor: pointer;
    margin: 0 15px;
  }
`

export default observer(CommentInput)
