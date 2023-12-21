import React from 'react'

export default function TimeSetter({ controlType, children }) {
    let labelText = controlType === "break" ? "Break" : "Session"
    let labelId = `${controlType}-label`

    return <div className="time-setter">
        <div className={labelId} id={labelId}>{labelText}</div>

        <div className='settings-box'>
            {React.Children.map(children, child => {
                return React.cloneElement(child, { control: controlType })
            })}
        </div>
    </div>
}