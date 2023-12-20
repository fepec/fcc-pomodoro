import React from 'react'
import ControlButton from './settingsButton'
import LengthDisplay from './lengthDisplay'

export default function TimeSetter({ timerType, children }) {
    let labelText = timerType === "break" ? "Break" : "Session"
    let labelId = `${timerType}-label`
    if (timerType === "break") {
        labelText = "Break Settings"
    }
    return <div className="time-setter">
        <div className={labelId} id={labelId}>{labelText}</div>

        <div className='settings-box'>
            {React.Children.map(children, child => {
                return React.cloneElement(child, { type: timerType })
            })}
        </div>
    </div>
}