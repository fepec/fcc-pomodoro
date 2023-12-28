import React from 'react'


export default function AButton({ type, control, onButtonClick }) {
    const buttonClass = `control-button ${control}-${type}`
    const buttonId = `${control && (control === "break" || control === "session") ? control + '-' : ''}${type}`
    let buttonContent

    if (type === "increment") {
        buttonContent = <>+</>
    } else if (type === 'decrement') {
        buttonContent = <>-</>
    }


    return <button id={buttonId} className={buttonClass} onClick={onButtonClick} >
        {buttonContent}
    </button>
}