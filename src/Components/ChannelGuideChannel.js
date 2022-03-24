import React from "react";


function ChannelGuideChannel(props) {

    return (
        <div className="GuideChannel" onClick={() => console.log("Clicked")}>
            <div className="FavIcon"><img src="images/iconHeart.svg"></img></div>
            <div className="ChannelIcon"><img alt={props.channel + " Logo"} src={props.icon}></img></div>
            <div className="ShowContent">{props.content}</div>
            <div className="PlayState">
             <div className="PlayStateIcon">PlayState OFF</div>
             </div>
        </div>
    )
}

export default ChannelGuideChannel