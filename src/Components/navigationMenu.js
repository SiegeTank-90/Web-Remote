import React from "react"

function NavMenuButton(props) {
    return (
        <div className="SettingMenuOpenIcon">
            <img className="HamburgerIcon" onClick={props.Toggle} src="images/hamburger.svg"></img>
        </div>
    )
}

export default NavMenuButton