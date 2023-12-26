import React from "react";

export default function CountdownTimer({timeToDisplay}) {
    let minutes = Math.floor(timeToDisplay / 60)
    let seconds = timeToDisplay % 60

    return <div className="timer-display" id='time-left'>{minutes}:{seconds < 10 ? '0' + seconds : seconds}</div>
}