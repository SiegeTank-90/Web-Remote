import React from "react";

function ChannelGuideChannel(props) {
  return (
    <div className="GuideChannel" onClick={() => console.log("Clicked")}>
      <div className="FavIconContainer">
          <img className="FavIcon" src="images/iconHeart.svg"></img>
      </div>
      <div className="ChannelIconContainer">
        <img
          className="ChannelIcon"
          alt={props.channel + " Logo"}
          src={props.icon}
        ></img>
      </div>
      <div className="ShowContent">{props.content}</div>
      <div className="PlayState">
        <div className="PlayStateIcon">PlayState OFF</div>
      </div>
    </div>
  );
}

export default ChannelGuideChannel;
