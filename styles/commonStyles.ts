import styled from "styled-components";
import {theme} from "./theme";


export const ButtonStyle = styled.div`
  height: 45px;
  width: 100%;
  max-width: 200px;
  border-radius: 10px;
  background: ${({outline}) => outline ? 'none' : theme.color.orange};
  border: ${({outline}) => !outline ? 'none' : `2px solid ${theme.color.orange}`};
  color: ${({outline}) => !outline ? '#FFFFFF' : theme.color.orange};
  font-weight: 700;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (min-width: 426px) {
    padding: 10px 20px;
    font-size: 17px;
    border-radius: 10px;
  }
`

export const InputStyle = styled.input`
  background: #fafafa;
  max-width: 350px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  padding: 13px 20px;
  width: 100%;
  outline: none;
  margin-bottom: 20px;
  border: 2px solid #9b9b9b;

  &::placeholder {
    color: #9b9b9b;
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