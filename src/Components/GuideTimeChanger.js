import React from "react"

function GuideTimeChange(props) {

    return (
        <div className="timeChangerContainer">
            <div className="GuideLeftArrow" onClick={props.setTimeStampNext}>ClickMeForward</div>
            <div className="GuideTime">I AM TIME ITSELF</div>
            <div className="GuideRightArrow" onClick={props.setTimeStampPrev}>ClickMeBackward</div>
        </div>
    )
}

export default GuideTimeChange