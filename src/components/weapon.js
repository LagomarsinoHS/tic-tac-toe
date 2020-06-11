import React from "react";

export const Weapon = (props) => {
    return (
        <div className="row mt-3">
            <div className="col-md-4  offset-md-2"  >
                <span className="X" id={props.id} onClick={(e) => props.getWeapon(e)}>X</span>
            </div>
            <div className="col-md-4">
                <span className="O" id={props.id} onClick={(e) => props.getWeapon(e)}>O</span>
            </div>
        </div>
    )
}