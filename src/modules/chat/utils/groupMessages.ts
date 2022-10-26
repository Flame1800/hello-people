import { MessageType } from "../models/Message";
import _ from "lodash";
import { DateTime } from "luxon";

export default (messages: MessageType[]) => {
  return Object.entries(_.groupBy(messages, (item) => item?.dateString));
};
