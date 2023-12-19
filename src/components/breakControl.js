import React from 'react'
import ControlButton from './controlButton'

export default function BreakControl(props) {
    return <div className="time-control">
        <ControlButton type="break" direction="decrement"/>
        <ControlButton type="break" direction="increment"/>
        </div>
}