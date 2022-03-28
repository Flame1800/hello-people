import React from 'react';
import styled from "styled-components";

const Card = () => {
    return (
        <Wrapper>
            <div className="event">
                <img src="/img/event-cover.png" alt="" className="cover"/>
                <div className="info">
                    <div className="first">
                        <div className="name">Музыкальная программа "В предверии весны"</div>
                        <div className="category">Концерты</div>
                    </div>
                    <div className="second">
                        <div className="date">Вс, 19:00</div>
                        <div className="address">проспект Ленина, 26</div>
                    </div>
                </div>
            </div>
            <div className="place">

            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  height: 200px;
  max-width: 800px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`

export default Card;