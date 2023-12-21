import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons'



export default function startStopButton(props) {    
    const buttonClass = `control-button`
    const buttonId = `start-stop`
    const buttonIcon = <FontAwesomeIcon icon={faPlay} />
    return <button id={buttonId} className={buttonClass}>        
            {buttonIcon}
        </button>
}