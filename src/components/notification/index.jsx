/* eslint-disable */
import { notification } from "antd";

const openNotificationWithIcon = (type, content, duration) => {
  notification[type]({
    message: content,
    duration: duration,
  });
};
export const notifySuccess = (content) => {
  if (content) openNotificationWithIcon("success", content);
};
export const notifyError = (content) => {
  if (content) openNotificationWithIcon("error", content, 10);
};
export const notifyWarning = (content) => {
  if (content) openNotificationWithIcon("warning", content, 10);
};
