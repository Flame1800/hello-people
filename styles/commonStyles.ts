import styled from "styled-components";
import {theme} from "./theme";


export const ButtonStyle = styled.button`
  height: 35px;
  width: fit-content;
  border-radius: 10px;
  background: ${({outline}) => outline ? 'none' : theme.color.orange};
  border: ${({outline}) => !outline ? 'none' : `2px solid ${theme.color.orange}`};
  color: ${({outline}) => !outline ? '#FFFFFF' : theme.color.orange};
  font-weight: 600;
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
  background: #fff;
  max-width: 350px;
  border-radius: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  padding: 12px 24px;
  width: 100%;
  outline: none;
  margin-bottom: 20px;
  border: 0.1px solid #f1f1f1;

  &::placeholder {
    color: #9b9b9b;
    font-weight: 500;
    font-size: 14px;
  }
`

export const TextareaStyle = styled.textarea`
  background: #fff;
  border-radius: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  padding: 12px 24px;
  outline: none;
  width: 100%;
  max-width: 350px;
  resize: vertical;
  border: 0.1px solid #f1f1f1;
  margin-bottom: 20px;

  &::placeholder {
    color: #9b9b9b;
    font-weight: 500;
    font-size: 14px;
  }
`

export const Label = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  color: #585858;
  margin-bottom: 15px;
  margin-top: 15px;
  max-width: 350px;
`