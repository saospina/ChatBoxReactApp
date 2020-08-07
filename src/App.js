import React from "react";
import "./styles.css";

// Components
import ChatRoom from "./components/ChatRoom";

export default function App() {
  return (
    <div className="window">
      <div className="title-bar">
        <div className="title-bar-text">Chat Room</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" />
        </div>
      </div>
      <div class="window-body">
        <p>Start typing some shit</p>
        <ChatRoom />
      </div>
    </div>
  );
}
