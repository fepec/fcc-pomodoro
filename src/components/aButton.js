import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faPlay, faStop, faRotateLeft } from '@fortawesome/free-solid-svg-icons'



export default function AButton({type, control, onButtonClick}) {    
    const buttonClass = `control-button button-${type}`
    const buttonId = `${control ? control + '-' : ''}${type}`
    let icon

    if (type === "increment" ) {
        icon = faPlus
    } else if (type === 'decrement') {
        icon = faMinus
    } else if (type === 'start-stop') {
        icon = control === 'play' ? faPlay : faStop 
    } else if (type === 'reset') {
        icon = faRotateLeft
    }
    

    return <button id={buttonId}>        
            <FontAwesomeIcon icon={icon} />
        </button>
}