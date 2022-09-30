import { useEffect, useRef } from "react";

export default () => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return ref;
};
