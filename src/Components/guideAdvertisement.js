import React from "react";

function GuideAdvertisement(props) {
  return (
    <div className="GuideAdvertisement" onClick={() => console.log("Clicked Ad")}>
      <h5 className="GuideAdTitle">{props.title}</h5>
      <div className="GuideAdImg">
        <img alt="Guide Ad Images" src={props.img}></img>
      </div>
      <h6 className="GuideAdContent">{props.content}</h6>
    </div>
  );
}

export default GuideAdvertisement;
