import React, { useState } from "react";

let i = -1;

function colorpicker() {
  i++;

  if (i == 1) {
    return "dropdownBackgroundLight";
  } else if (i == 2) {
    return "dropdownBackgroundLighter";
  } else if (i == 3) {
    i = 0;
    return "dropdownBackgroundLightest";
  }
}

function SelectDeviceDropdown(props) {
  let DevicesMenuItems = props.devices.map((element) => (
    <li key={element.id}
      className={"chromeCastMenuItem " + colorpicker()}
      >
      <img src="/images/chromecastIcon.svg"></img>
      <h1 className={"dropdownTextItem "}>{element.name}</h1>
    </li>
  ));

  const ClosedState = (
    <div
      role="button"
      className="selectDeviceContainter"
      onClick={() => setDeviceMenuState(OpenedState)}
    >
      <h2 className="dropdownText">SELECT A DEVICE</h2>
      <img
        className="caretDownSelectDevice"
        alt="caretdown"
        src="/images/caretDown.svg"
      ></img>
    </div>
  );

  const OpenedState = (
    <div
      role="button"
      className="selectDeviceContainterActive animate__animated animate__fadeIn"
    >
      <div onClick={() => setDeviceMenuState(ClosedState)}>
        <h2 className="dropdownText">SELECT A DEVICE</h2>
        <img
          className="caretDownSelectDevice"
          alt="caretdown"
          src="/images/caretDown.svg"
        ></img>
      </div>
      <ul>{DevicesMenuItems}</ul>

      <div className="endDeviceControl">
        <img
          className="stopIcon"
          alt="stopComcast"
          src="/images/stopcircle.svg"
        ></img>
        <h2 className="dropdownTextStop">END DEVICE CONTROL</h2>
      </div>
    </div>
  );

  const [deviceMenuState, setDeviceMenuState] = useState(ClosedState);
  return <div>{deviceMenuState}</div>;
}

export default SelectDeviceDropdown;
