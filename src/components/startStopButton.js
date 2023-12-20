import React from 'react'
import PlayArrow from '@mui/icons-material/PlayArrow'
import Stop from '@mui/icons-material/Stop'

export default function startStopButton(props) {    
    const buttonClass = `control-button`
    const buttonId = `start-stop`
    const buttonIcon = <PlayArrow />
    return <button id={buttonId} className={buttonClass}>        
            {buttonIcon}
        </button>
}