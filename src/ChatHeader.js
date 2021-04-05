import React from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import HelpIcon from '@material-ui/icons/Help';
import InboxRoundedIcon from '@material-ui/icons/InboxRounded';
import "./ChatHeader.css";

function ChatHeader({ channelName }) {
    return (
        <div className="chatHeader">
            <div className="chatHeader_left">
                <h3>
                    <span className="chatHeader_hash">#</span>
                    {channelName}
                </h3>
            </div>

            <div className="chatHeader_right">
                <NotificationsIcon />
                <EditLocationRoundedIcon />
                <PeopleAltRoundedIcon />

                <div className="chatHeader_search">
                    <input placeholder="Search" />
                    <SearchRoundedIcon />
                </div>

                <SendRoundedIcon />
                <InboxRoundedIcon />
                <HelpIcon />
            </div>
        </div>
    )
}

export default ChatHeader
