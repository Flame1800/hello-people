import React from "react";
import editorStyle from "./editor.style";
import dynamic from "next/dynamic";

const Output: any = dynamic(
  async () => (await import("editorjs-react-renderer" as any)).default,
  { ssr: false }
);

type Props = {
  data: string;
};

const Editor = ({ data }: Props) => {
  if (!data) {
    return null;
  }

  return (
    <>
      {Object.keys(data).length > 0 && (
        <Output style={editorStyle} data={JSON.parse(data)} />
      )}
    </>
  );
};

export default Editor;
