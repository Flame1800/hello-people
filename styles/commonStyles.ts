import styled from "styled-components";
import {theme} from "./theme";

export const ButtonStyle = styled.div`
  border-radius: 20px;
  background: ${({outline}) => outline ? 'none' : theme.color.orange};
  border: ${({outline}) => !outline ? 'none' : ` 2px solid ${theme.color.orange}`};
  padding: 15px 30px;
  font-weight: 700;
  font-size: 18px;
  line-height: 97.9%;
  text-align: center;
  color: ${({outline}) => !outline ? '#FFFFFF' : theme.color.orange};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const InputStyle = styled.input`
  background: #F0F0F0;
  border-radius: 10px;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  padding: 13px 20px;
  width: 100%;
  border: none;
  outline: none;
  margin-bottom: 20px;

  &::placeholder {
    color: #949494;
  }
`

export const TextareaStyle = styled.textarea`
  background: #F0F0F0;
  border-radius: 10px;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  padding: 13px 20px;
  border: none;
  outline: none;
  width: 100%;
  resize: vertical;

  &::placeholder {
    color: #949494;
  }
`