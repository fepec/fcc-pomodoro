import React from "react";

export default function LengthDisplay({value, control}) {
    return <div className="length-display" id={`${control}-length`}>
        {value}
    </div>
}