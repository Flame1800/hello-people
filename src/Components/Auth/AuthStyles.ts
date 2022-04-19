import styled from "styled-components";

export const AuthWrapper = styled.div`
  padding-top: 20%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1000px) {
    background: #fff;
  }
`

export const AuthTitle = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 49px;
  margin-top: 25px;
`