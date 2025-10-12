import { useEffect, useState } from "react";
import { Chatbot } from "supersimpledev";
import ChatMessages from "./ChatMessages";

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  useEffect(() => {
    Chatbot.addResponses(
      {
        "my name": "ahsanulhaq",
      },
      {
        "District area from village address": "Ahsan is from Karak",
      }
    );
  }, []);
  function saveInputText(event) {
    setInputText(event.target.value);
  }
  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];
    setChatMessages(newChatMessages);

    setInputText("");

    const response = Chatbot.getResponse(inputText);

    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);
  }

  function keyhandle(event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  }
  function handleCLear() {
    localStorage.removeItem("message");
    setInputText("");
    setChatMessages([]);
  }
  return (
    <>
      <ChatMessages chatMessages={chatMessages} />
      <div className="chat-input-container">
        <input
          className="chat-input"
          type="text"
          onChange={saveInputText}
          placeholder="Send a message to Chatbot"
          size="30"
          value={inputText}
          onKeyDown={keyhandle}
        />
        <button className="send-button" onClick={sendMessage}>
          Send
        </button>
        <button className="clear-button" onClick={handleCLear}>
          Clear
        </button>
      </div>
    </>
  );
}

export default ChatInput;
