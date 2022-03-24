import React, { useState, useEffect } from "react";
import SelectDeviceDropdown from "../Components/selectDeviceDropdown";
import SettingsMenu from "../Components/settingsMenu";
import ChannelGuideChannel from "../Components/ChannelGuideChannel";
import GuideAdvertisement from "../Components/guideAdvertisement";
import SettingsMenuButton from "../Components/navigationMenu.js";
import GuideTVShow from "../Components/guideTVShow.js";
import data from "../testData.json";

const { devices, user, settingFeatures, Applications, TVGuide } = data;

function GuidePage() {
  const [SettingMenuState, setSettingMenuState] = useState("");
  const [ChannelGrid, setChannelGrid] = useState("");
  const [DemoImage, setDemoImage] = useState("")

  useEffect(() => {
    MakeAGrid()
  }, [])

  function MakeAGrid() {
      let TempGrid = [];
    for (let i = 0; i < TVGuide.length; i++) {
      if (i % 10 != 0) {
        TempGrid.push(<ChannelGuideChannel channel={TVGuide[i].channel} icon={TVGuide[i].icon} content={TVGuide[i].schedule.timestampA.content}  />);
      }
      if (i % 10 == 0) {
        TempGrid.push(<GuideAdvertisement />);
        TempGrid.push(<ChannelGuideChannel channel={TVGuide[i].channel} icon={TVGuide[i].icon} content={TVGuide[i].schedule.timestampA.content}  />);
      }
    }
    setChannelGrid(TempGrid);
  }

  return (
    <div className="backgroundContainerGuide">
      {SettingMenuState}
      <div className="NavGuideLayout">
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
        <div className="LogoContainer">
          <img className="Logo" src="images/logo.svg"></img>
          <SelectDeviceDropdown devices={devices} />
        </div>
      </div>{" "}
      <GuideTVShow channel="images/guide/demoimage/mando.svg" />
      <div className="GuideGridContainer">
        {ChannelGrid}
      </div>
    </div>
  );
}

export default GuidePage;
