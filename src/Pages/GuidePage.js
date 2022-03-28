import React, { useState, useEffect } from "react";
import SelectDeviceDropdown from "../Components/selectDeviceDropdown";
import SettingsMenu from "../Components/settingsMenu";
import ChannelGuideChannel from "../Components/ChannelGuideChannel";
import GuideAdvertisement from "../Components/guideAdvertisement";
import SettingsMenuButton from "../Components/navigationMenu.js";
import GuideTimeChanger from "../Components/GuideTimeChanger.js";
import GuideTVShow from "../Components/guideTVShow.js";
import data from "../testData.json";

let timeHours = 3
let timeMin = 30

const {
  devices,
  user,
  settingFeatures,
  Applications,
  TVGuide,
  Advertisements,
} = data;

function GuidePage() {
  const [SettingMenuState, setSettingMenuState] = useState("");
  const [ActiveChannel, setActiveChannel] = useState(null);
  const [ChannelGrid, setChannelGrid] = useState("");
  const [TimeStamp, setTimeStamp] = useState(0);
  const [Time, setTime] = useState(timeHours + ":" + timeMin);
  const [DemoImage, setDemoImage] = useState(
    "images/guide/demoImage/mando.svg"
  );

  useEffect(() => {
    MakeAGrid();
  }, [ActiveChannel, TimeStamp,]);

  function ForwardTime() {
    if (TimeStamp == 2) {
      return console.log("No No No");
    } else {

      setTimeStamp(TimeStamp + 1);
      timeMin = timeMin +30
      
      if (timeMin >= 60) {
        timeMin = 0 
       
        timeHours++        
      } 
      setTime(timeHours + " : " + timeMin )
      if (timeMin == 0) {
        timeMin = "00"
          setTime(timeHours + " : " + timeMin )
          timeMin = 0
    }
     
  }}

  function BackwardTime() {
    if (TimeStamp != 0) {
      setTimeStamp(TimeStamp - 1); 
      timeMin = timeMin +30

      if (timeMin >= 60) {
         timeMin = 0 
          
      } 
      if (timeMin == 30) {
        timeHours--
      }

   
      setTime(timeHours + " : " + timeMin )
      if (timeMin == 0) {
        timeMin = "00"
          setTime(timeHours + " : " + timeMin )
          timeMin = 0
      }
    } else console.log("No No No");
  }

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
            content={TVGuide[i].schedule[TimeStamp].content}
            DemoImage={TVGuide[i].schedule[TimeStamp].DemoImage}
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
            content={TVGuide[i].schedule[TimeStamp].content}
            DemoImage={TVGuide[i].schedule[TimeStamp].DemoImage}
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
        <div className="NavGuideContainer">
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
            <div className="LogoContainer">
              <img className="Logo" src="images/logo.svg"></img>
              <SelectDeviceDropdown devices={devices} />
            </div>
          </div>
        </div>
      </div>
      <GuideTVShow channel={DemoImage} />
      <GuideTimeChanger
          time={Time}
          setTimeStampNext={() => BackwardTime()}
          setTimeStampPrev={() => ForwardTime()}
        />
      <div id="Guide" className="GuideGridContainer">
        {ChannelGrid}
      </div>
    </div>
  );
}

export default GuidePage;
