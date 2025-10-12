import React,{useRef,useEffect} from "react";
import ChatMessage from "./ChatMessage";


function ChatMessages({chatMessages}){
            const chatMessageRef = useRef(null);
         useEffect(()=>{
            const containerElem =   chatMessageRef.current;
            if(containerElem){
                containerElem.scrollTop = containerElem.scrollHeight;
            }
            },[chatMessages])
        
            return(
                <div className = "chat-message-container" ref = {chatMessageRef}>
                     {chatMessages.map((msg) => {
                        return(
                            <ChatMessage message = {msg.message} sender = {msg.sender} key = {msg.id} />
                             )
                    })}
                </div>
        )

        }

export default ChatMessages;