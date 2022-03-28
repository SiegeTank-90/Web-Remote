import React, { useState } from "react";

function GuideTimeChange(props) {
  const [Back, setBack] = useState(false);
  const [Forward, setForward] = useState(false);

  function BackClick() {
    setForward(false);
    setBack(true);
    props.setTimeStampPrev();
    if (props.OutofData == true) {
       props.setOutofData(false);
    }

  }
  function ForwardClick() {
    setBack(false);
    setForward(true);
    props.setTimeStampNext();
    if (props.OutofData == true) {
       props.setOutofData(false);
    }
  }

  return (
    <div className="TimeChangerContainer ">
      <div className="GuideLeftArrow" onClick={() => ForwardClick()}>
        <img
          className={
            props.OutofData == true && Back == true
              ? "GuideArrowAlign animate__animated animate__shakeX"
              : "GuideArrowAlign"
          }
          src="images/guide/leftarrow.svg"
        ></img>
      </div>
      <div className="GuideTime">
        <p className="GuideTimeText">FRI 3/26 {props.time}</p>
      </div>
      <div className="GuideRightArrow" onClick={() => BackClick()}>
        <img
          className={
            props.OutofData == true && Forward == true
              ? "GuideArrowAlign animate__animated animate__shakeX"
              : "GuideArrowAlign"
          }
          src="images/guide/rightarrow.svg"
        ></img>
      </div>
    </div>
  );
}

export default GuideTimeChange;
