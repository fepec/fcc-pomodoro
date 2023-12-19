import React from 'react'

export default function ControlButton(props) {
    const buttonClass = `control-button button-${props.direction}`
    const buttonId = `${props.type}-${props.direction}`
    return <button id={buttonId} className={buttonClass}>        
        </button>
}