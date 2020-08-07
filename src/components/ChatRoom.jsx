import React, { Component } from "react";
import "../styles.css";

export default class ChatRoom extends Component {
  state = {
    textMessage: "",
    messages: [
      { id: 0, text: "Message 0" },
      { id: 1, text: "Message 1" },
      { id: 2, text: "Message 2" },
      { id: 3, text: "Message 3" }
    ]
  };

  updateMessage(e) {
    this.setState({ textMessage: e.target.value });
    console.log(this.state.textMessage);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { textMessage, messages } = this.state;
    const newTextMessage = {
      id: messages.length,
      text: textMessage
    };
    messages.push(newTextMessage);
    this.setState({ textMessage: messages });
  }

  render() {
    const { messages } = this.state;
    const messagesList = messages.map(messsage => {
      return <li key={messsage.id}>{messsage.text}</li>;
    });
    return (
      <div className="chat">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" onChange={this.updateMessage.bind(this)} />
          <button type="submit">Send Message</button>
        </form>
        <ul className="tree-view">{messagesList}</ul>
      </div>
    );
  }
}
