import React, { useEffect, useState } from 'react';
import ChatHeader from "./ChatHeader";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import "./Chat.css";
import Message from './Message';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from './features/appSlice';
import { selectUser } from './features/userSlice';
import db from './firebase';
import firebase from "firebase";

function Chat() {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState(""); //by default, this is going to be a string
    const [messages, setMessages] = useState([]); //make it an array

    /**populate, go into the channels, then get the channelId documents and go into messages collection
     * abd then we order the messages by the timestamp which ascends bc we want to latest message going 
     * from top to bottom and get a snapshot of that data
     */
    useEffect(() => {
        if(channelId) {
            db.collection("channels")
            .doc(channelId)
            .collection("messages")
            .orderBy("timestamp", "asc")
            .onSnapshot((snapshot) => 
                setMessages(snapshot.docs.map((doc) => doc.data()))
            );
        }
        
    }, [channelId]); //the dependecy

    const sendMessage = (e) => {
        e.preventDefault();// so it doesnt refresh when pressing enter to send message

        /**go into the channels collections get into the documents channelID
         * and then into the messages collection and add timestamp, users
         * message input, then the user
        */
        db.collection("channels").doc(channelId).collection("messages")
        .add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user,
        });

        setInput(""); //then set it to blanks so we dont have the same input
    }
    
    return (
        <div className="chat">
            <ChatHeader channelName={channelName}/>

            <div className="chat_messages">
                {/**for every single message we want to render out a message component*/}
                {messages.map((message) => (
                    <Message
                    //this are based on the values of when adding into the messages collection
                        timestamp={message.timestamp}
                        message={message.message}
                        user={message.user}
                    />
                ))}
            </div>

            <div className="chat_input">
                <AddCircleIcon fontSize="large" />
                <form>
                    <input 
                        value={input} 
                        disabled={!channelId} 
                        onChange={(e) => setInput(e.target.value)} 
                        placeholder={`Message #${channelName}`}
                    />
                    <button 
                        disabled={!channelId}
                        className="chat_inputButton" 
                        type="submit"
                        onClick={sendMessage}>Send Message</button>
                </form>

                <div className="chat_inputIcons">
                    <CardGiftcardIcon />
                    <GifIcon />
                    <EmojiEmotionsIcon />
                </div>
            </div>
        </div>
    )
}

export default Chat
