import React, { useState } from "react";
import data from "@emoji-mart/data/sets/14/apple.json";
// @ts-ignore
import Picker from "@emoji-mart/react";
import styled from "styled-components";
import { theme } from "../../../../../../styles/theme";
import useOutput from "../../../../../Hooks/useOutput";

type Props = {
  setTextMessage: Function;
};

const EmojiPicker = ({ setTextMessage }: Props) => {
  const [picker, setPicker] = useState(false);

  useOutput(setPicker);

  return (
    <PickerWithIcon onClick={(e) => e.stopPropagation()}>
      <img
        onClick={() => setPicker(!picker)}
        className="emodji-btn"
        src="/img/smile.svg"
        alt="emodji"
      />
      {picker && (
        <WrapperEmodji>
          <Picker
            previewPosition="none"
            searchPosition="none"
            skinTonePosition="none"
            data={data}
            onEmojiSelect={(data: any) =>
              setTextMessage((prev: string) => `${prev}${data.native}`.trim())
            }
          />
        </WrapperEmodji>
      )}
    </PickerWithIcon>
  );
};

const PickerWithIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const WrapperEmodji = styled.div`
  border-radius: 10px;
  position: absolute;
  bottom: 40px;
  right: 0;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.38);
`;

export default EmojiPicker;
