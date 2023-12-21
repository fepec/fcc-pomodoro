import React from 'react'


export default function AButton({type, control, onButtonClick}) {    
    const buttonClass = `control-button ${control}-${type}`
    const buttonId = `${control && (control === "break" || control ==="session") ? control + '-' : ''}${type}`
    let buttonContent

    if (type === "increment" ) {
        buttonContent = <>+</>
    } else if (type === 'decrement') {
        buttonContent = <>-</>
    } else if (type === 'start-stop') {
        buttonContent = control === 'play' ?  String.fromCharCode(0x23F5) : String.fromCharCode(0x23F9)
    } else if (type === 'reset') {
        buttonContent = String.fromCharCode(0x000027F2)
    }
    

    return <button id={buttonId} className={buttonClass} onClick={onButtonClick} >        
            {buttonContent}
        </button>
}