import { parseCookies } from "nookies";

export default () => {
  const cookies = parseCookies();

  return {
    headers: {
      Authorization: `Bearer ${cookies?.jwt ?? ""}`,
    },
  };
};
