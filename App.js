
import React from "react";
import ReactDOM from "react-dom";

export default function App() {
  const [messages, setmessages] = React.useState([]);

  return (
    <div>
      {messages.length === 0 ? (
        <h1>you are all caught upss</h1>
      ) : (
        <h1>
          {messages.length} unread message
          {messages.length > 1 ? "s" : ""}
        </h1>
      )}
    </div>
  );
