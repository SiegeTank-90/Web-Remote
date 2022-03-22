import React from "react";

function settingsFeatureItem(props) {
    let ToggleAppear = ""

    if (props.toggler === "on") {
       ToggleAppear = "Online"
    }

  return (
    <li className="feature">
      <h3 className="featureName">{props.name}</h3>
      <img className="featureIcon" src={props.icon}></img>
      <div className="toggler">{ToggleAppear}</div>
    </li>
  );
}

export default settingsFeatureItem;
