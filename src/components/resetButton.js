import React from 'react'
import ReplayIcon from '@mui/icons-material/Replay';

export default function ResetButton(props) {    
    const buttonClass = `control-button`
    const buttonId = `reset`
    const buttonIcon = <ReplayIcon />
    return <button id={buttonId} className={buttonClass}>        
            {buttonIcon}
        </button>
}