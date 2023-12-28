import React from "react";

export default function TimeLeftDisplay({timeToDisplay}) {
    let minutes = Math.floor(timeToDisplay / 60)
    let seconds = timeToDisplay % 60

    return <div id='time-left' className="timer-display">{minutes}:{seconds < 10 ? '0' + seconds : seconds}</div>
}