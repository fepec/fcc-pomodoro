import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function ControlButton(props) {
    const buttonClass = `control-button button-${props.direction}`
    const buttonId = `${props.type}-${props.direction}`
    const buttonIcon = props.direction === "decrement" ?  <RemoveIcon /> : <AddIcon />
    return <button id={buttonId} className={buttonClass}>        
            {buttonIcon}
        </button>
}