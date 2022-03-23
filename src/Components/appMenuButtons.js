import React, { Suspense } from "react";
import Lottie from "lottie-react";
import Youtube from "../lottie/youtubeLottie.json";
import BlueTooth from "../lottie/bluetoothLottie.json";
import Netflix from "../lottie/netflixLottie.json";
import Guide from "../lottie/guideLottie.json";
import Prime from "../lottie/primeLottie.json";

function AppMenuButton(props) {
  let LottieName = "";

  if (props.lottie != "") {
    if (props.lottie == "netflix") {
      LottieName = Netflix;
    }
    if (props.lottie == "bluetooth") {
      LottieName = BlueTooth;
    }
    if (props.lottie == "youtube") {
      LottieName = Youtube;
    }
    if (props.lottie == "prime") {
      LottieName = Prime;
    }
    if (props.lottie == "guide") {
      LottieName = Guide;
    }

    return (
      <div
        className={
          "AppMenuItem grid-item" +
          props.itemNumber +
          " animate__animated animate__bounceIn"
        }
      >
        <Lottie
          className="AppMenuButtonLottie"
          animationData={LottieName}
          loop={true}
        />
      </div>
    );
  } else {
    return (
      <div
        className={
          "AppMenuItem grid-item" +
          props.itemNumber +
          " animate__animated animate__bounceIn"
        }
      >
        <img className="AppMenuButtonSvg" src={props.src}></img>
      </div>
    );
  }
}

export default AppMenuButton;
