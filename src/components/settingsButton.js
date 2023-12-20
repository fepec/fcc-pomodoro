import React from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function SettingsButton(props) {    
    const buttonClass = `control-button button-${props.direction}`
    const buttonId = `${props.type}-${props.direction}`
    const buttonIcon = props.direction === "decrement" ?  <RemoveIcon /> : <AddIcon />
    return <Button id={buttonId}>        
            {buttonIcon}
        </Button>
}