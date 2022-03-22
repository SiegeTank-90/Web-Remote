import React, { useState } from "react";
import SelectDeviceDropdown from "./Components/selectDeviceDropdown.js";
import SettingsMenu from "./Components/settingsMenu.js";
import UpDownButton from "./Components/UpDownButton.js";
import ApplicationsMenu from "./Components/applicationsMenu.js";

import SettingsMenuButton from "./Components/navigationMenu.js";
import data from "./testData.json";

import "./stylesheets/main.css";

const { devices, user, settingFeatures, Applications } = data;

function App() {
  const [SettingMenuState, setSettingMenuState] = useState("");
  const [AppMenu, setAppMenu] = useState("");

  return (
    <div className="App">
      <div className="backgroundContainer">
        {SettingMenuState}
        <div className="Layout">
         
          <div className="NavButtonContainer">
            <SettingsMenuButton
              Toggle={() =>
                setSettingMenuState(
                  <SettingsMenu
                    user={user}
                    settingFeatures={settingFeatures}
                    Toggle={() => setSettingMenuState("")}
                  />
                )
              }
            />
          </div>
          <div className="AppMenuGridContainer">{AppMenu}</div>
          <div className="LogoContainer">
            <img className="Logo" src="/images/logo.svg"></img>
            <SelectDeviceDropdown devices={devices} />
          </div>
          <div className="VolumeButtonContainer">
            <UpDownButton labelName="VOL" />
          </div>
          <div className="ChannelButtonContainer">
            <UpDownButton labelName="CH" />
          </div>
          <div className="ApplicationMenuButtonContainer">
            <ApplicationsMenu apps={Applications} setAppMenu={setAppMenu} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
