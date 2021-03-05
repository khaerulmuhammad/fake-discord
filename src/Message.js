import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";

function Message() {
  return (
    <div className="message">
      <Avatar />
      <div className="message__info">
        <h4>
          umamammmmmm
          <span className="message__timestamp">this is message__timestamp</span>
        </h4>
        <p>ini message</p>
      </div>
    </div>
  );
}

export default Message;
