import React, { Component } from "react";
import "../styles.css";

export default class ChatRoom extends Component {
  state = {
    textMessage: "",
    messages: [
      { id: 0, text: "Message 0" },
      { id: 1, text: "Message 1" }
    ],
    prueba: []
  };

  handleChatRoom() {
    const { chat } = this.props;
    const chatDiv = [...Array(chat).keys()];
    this.setState({ prueba: chatDiv });
  }

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
    this.setState({ textMessage: "" });
  }

  componentDidMount() {
    this.handleChatRoom();
  }

  render() {
    const { messages } = this.state;
    const messagesList = messages.map((messsage) => {
      return <li key={messsage.id}>{messsage.text}</li>;
    });
    return (
      <div className="chat">
        {this.state.prueba.map((prueba) => (
          <>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input
                type="text"
                value={this.state.textMessage}
                onChange={this.updateMessage.bind(this)}
              />
              <button type="submit">Send Message</button>
            </form>
            <ul className="tree-view">{messagesList}</ul>
          </>
        ))}
      </div>
    );
  }
}
