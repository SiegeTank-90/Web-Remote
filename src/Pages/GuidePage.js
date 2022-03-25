import React, { useState, useEffect } from "react";
import SelectDeviceDropdown from "../Components/selectDeviceDropdown";
import SettingsMenu from "../Components/settingsMenu";
import ChannelGuideChannel from "../Components/ChannelGuideChannel";
import GuideAdvertisement from "../Components/guideAdvertisement";
import SettingsMenuButton from "../Components/navigationMenu.js";
import GuideTVShow from "../Components/guideTVShow.js";
import data from "../testData.json";

const {
  devices,
  user,
  settingFeatures,
  Applications,
  TVGuide,
  Advertisements
} = data;

function GuidePage() {
 
  const [SettingMenuState, setSettingMenuState] = useState("");
  const [ActiveChannel, setActiveChannel] = useState(null);
  const [ChannelGrid, setChannelGrid] = useState("");
  const [DemoImage, setDemoImage] = useState(
    "images/guide/demoImage/mando.svg"
  );

  useEffect(() => {
    MakeAGrid();
  }, [ActiveChannel]);

  function MakeAGrid() {
    let TempGrid = [];
    for (let i = 0; i < TVGuide.length; i++) {
      if (i % 15 != 0) {
        TempGrid.push(
          <ChannelGuideChannel
            ActiveChannel={ActiveChannel}
            indexNum={TempGrid.length}
            channel={TVGuide[i].channel}
            icon={TVGuide[i].icon}
            content={TVGuide[i].schedule.timestampA.content}
            DemoImage={TVGuide[i].schedule.timestampA.DemoImage}
            setDemoImage={setDemoImage}
            newActiveChannel={setActiveChannel}
          />
        );
      }
      if (i % 15 == 0) {
        TempGrid.push(
          <GuideAdvertisement
            img={Advertisements.guide.img}
            title={Advertisements.guide.title}
            content={Advertisements.guide.content}
          />
        );
        TempGrid.push(
          <ChannelGuideChannel
            ActiveChannel={ActiveChannel}
            indexNum={TempGrid.length}
            channel={TVGuide[i].channel}
            icon={TVGuide[i].icon}
            content={TVGuide[i].schedule.timestampA.content}
            DemoImage={TVGuide[i].schedule.timestampA.DemoImage}
            setDemoImage={setDemoImage}
            newActiveChannel={setActiveChannel}
          />
        );
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
      <GuideTVShow channel={DemoImage} />
      <div id="Guide" className="GuideGridContainer">
        {ChannelGrid}
      </div>
    </div>
  );
}

export default GuidePage;
