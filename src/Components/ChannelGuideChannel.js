import react from "react";
import React, { useState } from "react";
import ReactDom from "react-dom";
import { useEffect } from "react/cjs/react.production.min";

function ChannelGuideChannel(props) {
 
  function ToggleActiveState() {
    props.setDemoImage(props.DemoImage)
    props.newActiveChannel(props.indexNum)
   }
   
  return (
    <div
      className={
        props.indexNum == props.ActiveChannel
          ? "GuideChannel-Active"
          : "GuideChannel "
      }
      onClick={() => ToggleActiveState()}
    >
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
        <div className="PlayStateIcon">
          {(props.indexNum == props.ActiveChannel)
            ? <div><img src="images/guide/guidePlayButton.svg" className="playAnimate animate__animated animate__rollOut"></img> <h5 className="GuidePlayButtonOn">On Now</h5></div>
            : <img src="images/guide/guidePlayButton.svg" className=""></img>}
        </div>
      </div>
    </div>
  );
}

export default ChannelGuideChannel;
