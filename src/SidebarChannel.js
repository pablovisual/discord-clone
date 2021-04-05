import React from 'react';
import { useDispatch } from 'react-redux';
import { setChannelInfo } from "./features/appSlice";
import "./SidebarChannel.css";

function SidebarChannel({ id, channelName }) {
    const dispatch = useDispatch();
    return (
        <div 
            className="sidebarChannel" 
            /** set a dispatch when clicking the sidebarChannel name, it should change which channel you are in*/
                onClick={() => 
                    dispatch(
                        //as the payload im going to pass in channel id with the value and then the channelName we passed in as the prop
                        setChannelInfo({
                            channelId: id, 
                            channelName: channelName,
                        })
                    )
                }
        >
            <h4>
                <span className="sidebarChannel_hash">#</span>
                {channelName}
            </h4>
            
        </div>
    )
}

export default SidebarChannel
