import React, { useState } from "react";

function UpDownButton(props) {


  const [upButton, setUpButton] = useState(
    <div
      onPointerDown={() => UpOn()}
      onPointerUp={() => UpOff()}
      onPointerOut={() => UpOff()}
      className="upButton"
    >
      <img className="upArrow" src="images/uparrow.svg"></img>
    </div>
  );
  const [dwnButton, setDwnButton] = useState(
    <div
      onPointerDown={() => DwnOn()}
      onPointerUp={() => DwnOff()}
      onPointerOut={() =>DwnOff()}
      className="dwnButton "
    >
      <img className="dwnArrow" src="images/dwnarrow.svg"></img>
    </div>
  );
  const [Label, setLabel] = useState(<h5 className="ButtonLabel">{props.labelName}</h5>)

  function UpOn() {
    setUpButton(
      <div
        onPointerDown={() => UpOn()}
        onPointerUp={() => UpOff()}
        onPointerOut={() => UpOff()}
        className="upButton colorChangeUp"
      >
        <img className="upArrow arrow_animateUp" src="images/uparrow.svg"></img>
      </div>
    );
    setLabel(<h5 className="ButtonLabel FontUp">{props.labelName}</h5>);
  }
  function UpOff() {
    setUpButton(
      <div
        onPointerDown={() => UpOn()}
        onPointerUp={() => UpOff()}
        onPointerOut={() => UpOff()}
        className="upButton colorChangeUpRev"
      >
        <img className="upArrow" src="images/uparrow.svg"></img>
      </div>
    );
    setLabel(<h5 className="ButtonLabel">{props.labelName}</h5>);
  }

  function DwnOn() {
    setDwnButton(
      <div
        onPointerDown={() => DwnOn()}
        onPointerUp={() => DwnOff()}
        onPointerOut={() => DwnOff()}
        className="dwnButton colorChangeDwn "
      >
        <img className="dwnArrow arrow_animateDwn" src="images/dwnarrow.svg"></img>
      </div>
       );
       setLabel(<h5 className="ButtonLabel FontDwn">{props.labelName}</h5>)
  }

  function DwnOff() {
    setDwnButton(
      <div
        onPointerDown={() => DwnOn()}
        onPointerUp={() => DwnOff()}
        onPointerOut={() => DwnOff()}
        className="dwnButton colorChangeDwnRev"
      >
        <img className="dwnArrow" src="images/dwnarrow.svg"></img>
      </div>
       );
       setLabel(<h5 className="ButtonLabel">{props.labelName}</h5>)
  }

  return (
    <div className="upDownButton">
      {upButton}
      {Label}
      {dwnButton}
    </div>
  );
}

export default UpDownButton;
