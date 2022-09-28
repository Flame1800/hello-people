import { DateTime } from "luxon";

export default (date: string) => {
  const dt = DateTime.fromISO(date);

  if (!date) return DateTime.now().toFormat("T");

  return dt.toFormat("T");
};
