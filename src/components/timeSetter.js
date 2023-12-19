import React from 'react'
import ControlButton from './controlButton'
import LengthDisplay from './lengthDisplay'

export default function TimeSetter({ timerType, children }) {
    return <div className="time-setter">
        {React.Children.map(children, child => {
            return React.cloneElement(child, {type: timerType})
        })}
    </div>
}