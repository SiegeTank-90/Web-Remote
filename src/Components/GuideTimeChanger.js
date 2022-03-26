import React from "react";

function GuideTimeChange(props) {
  return (
    <div className="timeChangerContainer">
      <div className="GuideLeftArrow" onClick={props.setTimeStampNext}>
        <img className="GuideArrowAlign"src="images/guide/leftarrow.svg"></img>
      </div>
      <div className="GuideTime">
        <p className="GuideTimeText">FRI 3/26 {props.time}</p>
      </div>
      <div className="GuideRightArrow" onClick={props.setTimeStampPrev}>
        <img className="GuideArrowAlign"src="images/guide/rightarrow.svg"></img>
      </div>
    </div>
  );
}

export default GuideTimeChange;
