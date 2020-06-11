import React from "react";

export const Input = (props) => {
    return (
        <>
            <div className="input-group flex-nowrap">
                <input type="text" className="form-control" placeholder={props.placeholder} aria-label="Username" aria-describedby="addon-wrapping" name={props.name} onChange={(e)=>props.getName(e)} />
            </div>
        </>
    )

}