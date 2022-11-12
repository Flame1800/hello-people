import styled from "styled-components";
import { observer } from "mobx-react-lite";

type Props = {
  searchText: string;
  setSearchText: Function;
};

const Search = ({ searchText, setSearchText }: Props) => {
  return (
    <Wrapper>
      <input
        placeholder="Поиск..."
        type="text"
        className="search"
        value={searchText}
        onChange={(event) => setSearchText(event.currentTarget.value)}
      />
      {searchText.length > 0 && (
        <img
          onClick={() => setSearchText("")}
          src="/img/close.svg"
          alt="закрыть"
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  max-width: 380px;
  display: flex;
  margin-top: 10px;
  align-items: center;

  @media (max-width: 1420px) {
    .viewType {
      display: none;
    }
  }

  img {
    position: absolute;
    right: 25px;
    width: 32px;
    height: 32px;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }

  .search {
    background: #fff;
    width: 100%;
    border-radius: 16px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
    padding: 12px 24px;
    margin-right: 12px;
    border: 0.1px solid #f1f1f1;
    outline: none;

    &::placeholder {
      font-size: 14px;
    }
  }
`;

export default observer(Search);
