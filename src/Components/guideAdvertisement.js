import React from "react";

function GuideAdvertisement(props) {

    return (
       <div className="GuideAdvertisement">
           <h3 className="GuideAdTitle">{props.title}</h3>
           <div className="GuideAdImg"><img src={props.img}></img></div>
           <h4 className="GuideAdContent">{props.content}</h4>

       </div>
    )
}

export default GuideAdvertisement