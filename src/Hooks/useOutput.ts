import { useEffect } from "react";

export default (set: Function) => {
  useEffect(() => {
    document.addEventListener("click", () => set(false));

    return () => {
      document.removeEventListener("click", () => set(false));
    };
  }, []);
};
