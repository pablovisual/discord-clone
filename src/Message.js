import { Avatar } from '@material-ui/core';
import React from 'react';
import moment from "moment";
import "./Message.css";

function Message({ timestamp, user, message }) { //the props are given from chat.js
    return (
        //then pass them into our users message
        <div className="message">
            <Avatar src={user.photo}/>
            <div className="message_info">
                <h4>{user.displayName}
                    <span className="message_timestamp">
                        {moment(new Date(timestamp?.toDate()).toUTCString()).format('L')}
                    </span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message
