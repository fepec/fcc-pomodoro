import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons'


export default function ResetButton(props) {    
    const buttonClass = `control-button`
    const buttonId = `reset`
    const buttonIcon = <FontAwesomeIcon icon={faRotateLeft} />
    return <button id={buttonId} className={buttonClass}>        
            {buttonIcon}
        </button>
}