import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function SettingsButton(props) {    
    const buttonClass = `control-button button-${props.direction}`
    const buttonId = `${props.type}-${props.direction}`
    const buttonIcon = props.direction === "decrement" ?  <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />
    return <button id={buttonId}>        
            {buttonIcon}
        </button>
}