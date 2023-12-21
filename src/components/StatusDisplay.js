import React from "react";

export default function StatusDisplay({ status }) {
    let currentStatus
    switch (status) {
        case 'ready':
            currentStatus = 'Ready when you are!';
            break;
        case 'break':
            currentStatus = 'Take a break.';
            break;
        case 'session':
            currentStatus = 'Go! Go! Go!';
            break;
    }

    return <div id="timer-label" className="status-display">
        {currentStatus}
    </div>

}