import React from "react";

export default function LengthDisplay({value, type}) {
    return <div className="length-display" id={`${type}-length`}>
        {value}
    </div>
}