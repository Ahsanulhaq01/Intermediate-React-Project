// import React, { useState } from 'react';
import dayjs from 'dayjs'
import userProfileImage from '../assets/ahsanx.jpg'
import robotProfileImage from '../assets/robot.png'


function ChatMessage({message , sender}){
            
        let time = dayjs().valueOf();
        time = dayjs(time).format('h:mm A');
        
            return(
                <div className = {sender ==='user' ? "chat-message-user" : "chat-message-robot"}>
                    {sender === 'robot' && <img src = {robotProfileImage} className="chat-message-profile"/>}
                    <div className= "chat-message-text">
                        <div className="message-text">{message} </div>  
                       <div className="time"> {time} </div>                    
                        </div>
                         
                    {sender === 'user' && <img src = {userProfileImage} className= "chat-message-profile"/>}
                </div>
            )


        }

export default ChatMessage;