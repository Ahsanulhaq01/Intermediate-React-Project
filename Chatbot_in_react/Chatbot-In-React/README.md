# 🤖 React Chatbot Application

A simple and interactive chatbot built using React. This project simulates a real-time chat system where users can send messages and receive automated responses using rule-based chatbot logic.

# Live Demo

link :-> https://chatbot-in-react-red.vercel.app/

It demonstrates core frontend concepts like **React Hooks, component communication, state management, and dynamic UI rendering**.

---

## 🚀 Features

- 💬 Real-time chat messaging system  
- 🤖 Rule-based chatbot responses  
- ⌨️ Send messages using button or Enter key  
- 🧹 Clear chat history functionality  
- 📜 Auto-scroll to latest messages  
- 🕒 Timestamp for each message  
- 🧠 Component-based architecture (ChatInput, ChatMessages, ChatMessage)  

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite)  
- **Language:** JavaScript (ES6+)  
- **Chat Logic:** supersimpledev Chatbot library  
- **Date Handling:** Day.js  
- **State Management:** React Hooks (`useState`, `useEffect`, `useRef`)  
- **Styling:** CSS  

---

## 🧩 Project Structure


ChatInput.jsx → Handles user input and message sending
ChatMessages.jsx → Renders list of all messages
ChatMessage.jsx → Individual message UI component


---

## 🔄 Application Flow


User Input → ChatInput Component → Chatbot Logic → ChatMessages → UI Update


---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/Ahsanulhaq01/Intermediate-React-Project/tree/main
cd react-chatbot
2. Install dependencies
npm install
3. Run the application
npm run dev
🤖 Chatbot Logic

The chatbot uses simple rule-based responses defined using supersimpledev:

Chatbot.addResponses(
  {
    "my name": "ahsanulhaq",
  },
  {
    "District area from village address": "Ahsan is from Karak",
  }
);
User input is matched with predefined keywords
If a match is found, the bot returns a response
Otherwise, default behavior is handled by the library
🧠 Key Concepts Learned
React functional components
Props passing between components
useState for state management
useEffect for side effects
useRef for DOM manipulation
Event handling (click, keydown events)
Dynamic rendering of lists
Auto-scrolling chat UI


⚠️ Limitations
Rule-based responses only (not AI-powered)
No backend integration

👨‍💻 Author

Ahsan Ul Haq

MERN Stack Developer (Learning & Building Projects)