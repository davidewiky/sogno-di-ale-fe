/* eslint-disable no-console -- logger should log */
import { format } from "date-fns";

const formatMessage = (msg: unknown, level: "error" | "warn" | "info") => {
  const date = format(new Date(), "yyy-MM-dd HH:mm:ss.SSSxx");
  const tokens = [date, level, `[eocnet2-external-portal]`];
  if (typeof msg === "string") {
    return [...tokens, msg].join(" - ");
  }
  const msgString = JSON.stringify(msg);
  return [...tokens, msgString].join(" - ");
};

const warn = (msg: unknown) => {
  console.warn(formatMessage(msg, "warn"));
};

const error = (msg: unknown) => {
  if (msg instanceof Error) {
    const errorMessage = {
      message: msg.message,
      stack: msg.stack,
    };
    console.error(
      formatMessage(JSON.stringify(errorMessage, null, 2), "error"),
    );
    return;
  }

  console.error(formatMessage(msg, "error"));
};

const info = (msg: unknown) => {
  console.info(formatMessage(msg, "info"));
};

export const logger = {
  warn,
  error,
  info,
};
