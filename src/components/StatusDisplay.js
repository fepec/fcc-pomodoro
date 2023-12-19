import React from "react";

export default function StatusDisplay(props) {
    let currentStatus
    if (props.status === "break") {
        currentStatus = "Take a break"
    } else {
        currentStatus = "Go! Go! Go!"
    }

    return <div id="timer-label" className="status-display">
            {currentStatus}
        </div>
        

    
}