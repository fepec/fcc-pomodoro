import React from "react";

export default function StatusDisplay({control}) {
    let currentStatus
    if (control === "break") {
        currentStatus = "Take a break"
    } else {
        currentStatus = "Go! Go! Go!"
    }

    return <div id="timer-label" className="status-display">
            {currentStatus}
        </div>
        

    
}