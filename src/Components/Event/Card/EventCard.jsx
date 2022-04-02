import React from 'react';
import styled from "styled-components";
import Like from "../../Common/Like";
import PinnedPlace from "../PinnedPlace";
import Comment from "../../Common/Comment";
import Link from "next/link";
import NameService from "../../Common/Services/NameService";
import Carousel from "../../Common/Carousel/Carousel";

const EventCard = () => {
    return (
        <Wrapper>
            <div className="event">
                <div className="gallery">
                    <Carousel/>
                </div>
                <div className="info">
                    <Link href={`/events/${0}`}>
                        <a className="name-wrap">
                            <NameService name='SCRAMBLED: танцы в Невесомости' category='Вечеринки'/>
                        </a>
                    </Link>
                    <div className="event-meta">
                        <div>
                            <div className="date">Вс, 19:00</div>
                            <div className="address">проспект Ленина, 26</div>
                        </div>
                        <div className="user-meta">
                            <Like value={34} onClick={() => console.log("event like")} active={false}/>
                            <Comment value={34} onClick={() => console.log("event comment")}/>
                        </div>
                    </div>
                </div>
                <PinnedPlace/>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  max-width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 30px;

  .gallery {
    height: 230px;
    width: 100%;
    border-radius: 15px;
    margin-bottom: 15px;
  }

  .event {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .info {
    width: 100%;
  }

  .event-meta {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 20px;
  }

  .user-meta {
    display: flex;

    > div {
      margin-right: 10px;
    }
  }

  .date {
    font-weight: 700;
    font-size: 18px;
    line-height: 97.9%;
    color: #949494;
    margin-bottom: 5px;
  }

  .address {
    font-weight: 600;
    font-size: 14px;
    line-height: 126.9%;
    color: #000000;
  }
`

export default EventCard;