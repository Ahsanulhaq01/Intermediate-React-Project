import { useState ,useEffect} from "react";
import ChatMessages from "./Component/ChatMessage";
import ChatInput from "./Component/ChatInput";


function App() {

            const [chatMessages ,setChatMessages] = useState(JSON.parse(localStorage.getItem('message')) || []);

            useEffect(()=>{

              localStorage.setItem('message',JSON.stringify(chatMessages));
            },[chatMessages])
            
        return (
          <>
            <div className = "app-container">
              <ChatInput chatMessages = {chatMessages} setChatMessages = {setChatMessages} />
            </div>
          </>
        );
      }

export default App;
         