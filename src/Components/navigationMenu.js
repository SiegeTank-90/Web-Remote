import React from "react"

function NavMenuButton(props) {
    return (
        <div>
            <img onClick={props.Toggle} src="/images/hamburger.svg"></img>
        </div>
    )
}

export default NavMenuButton