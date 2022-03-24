import styled from "styled-components";

export const MessageFeedStyle = styled.div`
  width: 100%;
  height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    border-bottom: 1px solid #D9D9D9;

    .first-side {
      display: flex;
      align-items: center;

      .btn-back {
        margin-right: 30px;
      }

      .companion {
        margin-left: 15px;

        .name {
          font-weight: 600;
          font-size: 18px;
          line-height: 25px;
        }

        .status {
          font-weight: 400;
          font-size: 14px;
          line-height: 19px;
          color: #949494;
        }
      }

    }

  }

  .messages {
    height: 100%;
    padding-top: 30px;
  }

`