import React from "react";

export const Weapon = (props) => {
    return (
        <div className="row mt-3">
            <div className="col-md-4 offset-md-2">
                <span
                    className="X"
                    role="button"
                    tabIndex={0}
                    onClick={() => props.getWeapon("X")}
                    onKeyDown={(e) => e.key === "Enter" && props.getWeapon("X")}
                >
                    X
                </span>
            </div>
            <div className="col-md-4">
                <span
                    className="O"
                    role="button"
                    tabIndex={0}
                    onClick={() => props.getWeapon("O")}
                    onKeyDown={(e) => e.key === "Enter" && props.getWeapon("O")}
                >
                    O
                </span>
            </div>
        </div>
    );
};
