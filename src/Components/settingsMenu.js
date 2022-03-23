import React, { useState } from "react";
import SettingsFeatureItem from "./settingsFeatureItem";

function SettingMenu(props) {
    




    const [SettingsFeatureList, setSettingsFeatureList] = useState(
        props.settingFeatures.map((feature) => (
           <SettingsFeatureItem
            name={feature.featureName}
            icon={feature.icon}
            toggler={feature.toggler}
        />
        ))
    );

  return (
    <div className="SettingMenuContainer ">
      <div className="SettingsMenuBackground animate__animated animate__slideInLeft "></div>
      <div className="SettingsMenuForeground animate__animated animate__slideInLeft">
        <div className="SettingMenuCloseIcon">
          <img onClick={props.Toggle} src="images/close-icon.svg"></img>
        </div>
        <div className="MIDaccount">
          <img className="profileImg" src="images/profileimg.svg"></img>
          <div className="SettingWelcomeMessage">
            <h2 className="settingMessage greeting">WELCOME</h2>
            <h2 className="settingMessage message">{props.user.message}</h2>
            <h2 className="settingMessage name">{props.user.name}</h2>
          </div>
          <ul className="SettingFeatureContainer">{SettingsFeatureList}</ul>
        </div>
      </div>
    </div>
  );
}

export default SettingMenu;
