import styled from "styled-components";

export const DialogWrapper = styled.div`
  width: 100%;
  height: 55px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background: #f6f6f6;
    border-radius: 10px;
  }

  .content {
    width: 100%;
    margin-left: 12px;
    height: 100%;

    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .user-name {
        max-width: 240px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 600;
        font-size: 18px;
        line-height: 25px;
      }

      .date {
        font-weight: 400;
        font-size: 13px;
        line-height: 14px;
        color: #B2B2B2;
      }
    }

    .info {
      display: flex;
      justify-content: space-between;

      .last-message {
        max-width: 280px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        color: #7F7F7F;
      }

      .notification {
        background: #FC5130;
        padding: 2px 6px;
        border-radius: 9px;
        font-weight: 800;
        font-size: 12px;
        line-height: 14px;
        color: #FFFFFF;
        height: 18px;
      }
    }
  }
`