import { CheckCircle, Error, Warning, Info } from "@styled-icons/material";
import React from "react";
import { toast } from "react-toastify";

interface MessageProps {
  text: String;
  icon: any;
}
const Message = (props: MessageProps) => (
  <div className="toast__msg">
    <span>{props.text}</span>
  </div>
);
const customToast = {
  success: (text: String) =>
    toast.success(
      <Message text={text} icon={<CheckCircle className="toast__msg-icon" />} />
    ),
  error: (text: String) =>
    toast.error(
      <Message text={text} icon={<Error className="toast__msg-icon" />} />
    ),
  warning: (text: String) =>
    toast.warning(
      <Message text={text} icon={<Warning className="toast__msg-icon" />} />
    ),
  info: (text: String) =>
    toast.info(
      <Message text={text} icon={<Info className="toast__msg-icon" />} />
    ),
};

export { customToast };
