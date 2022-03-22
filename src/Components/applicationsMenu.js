import React, { useState } from "react";
import App from "../App.js";
import AppMenuItem from "./appMenuButtons.js";

let StateCheck = 0;

function ApplicationsMenu(props) {
  const totalApps = props.apps;
  const [AppMenuButton, setAppMenuButton] = useState(
    <button className="AppMenuButton" onPointerDown={() => OpenMenu()}>
      Apps
    </button>
  );

  function OpenMenu() {
    if (StateCheck == 0) {
      StateCheck++;
      setAppMenuButton(
        <button className="AppMenuButton" onPointerDown={() => OpenMenu()}>
          CLOSE
        </button>
      );
      if (totalApps.length == 2 || totalApps.length == 4) {
        props.setAppMenu(
          props.apps.map((element, index) => (
            <AppMenuItem
              key={index}
              itemNumber={index + 2}
              lottie={element.src.lottie}
              src={element.src.svg}
            />
          ))
        );
      } else {
        props.setAppMenu(
          props.apps.map((element, index) => (
            <AppMenuItem
              key={index}
              itemNumber={index + 1}
              lottie={element.src.lottie}
              src={element.src.svg}
            />
          ))
        );
      }
    } else if (StateCheck > 0) {
      StateCheck = 0;
      props.setAppMenu("");
      setAppMenuButton(
        <button className="AppMenuButton" onPointerDown={() => OpenMenu()}>
          Apps
        </button>
      );
    }
  }

  return <div className="ApplicationsMenu">{AppMenuButton}</div>;
}

export default ApplicationsMenu;
