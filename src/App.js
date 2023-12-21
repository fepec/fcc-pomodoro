import React, { useState } from 'react'
import TimeSetter from './components/timeSetter'
import AButton from './components/aButton'
import LengthDisplay from './components/lengthDisplay'
import StatusDisplay from './components/statusDisplay'
import CountdownTimer from './components/countdownTimer'

function App() {
    // state
    // time for state will be stored in minutes
    let [sessionTime, setSessionTime] = useState(25)
    let [breakTime, setBreakTime] = useState(5)
    let [timerStatus, setTimerStatus] = useState('ready')

    // event handlers
    function handlePlusMinusClick(e) {

        if (e.target.id.includes('decrement')) {
            if (e.target.id.includes('break') && breakTime > 0) {
                setBreakTime(breakTime - 1)
            } else if (e.target.id.includes('session') && sessionTime > 0) {
                setSessionTime(sessionTime - 1)
            }
        }

        if (e.target.id.includes('increment')) {
            if (e.target.id.includes('break')) {
                setBreakTime(breakTime + 1)
            } else if (e.target.id.includes('session')) {
                setSessionTime(sessionTime + 1)
            }
        }
    }



    return <div className='pomodoro-timer'>
        <h1>fepec's pomodoro timer</h1>
        <div className='timer-settings'>

            <TimeSetter controlType="break">
                <AButton type="decrement" onButtonClick={handlePlusMinusClick} />
                <LengthDisplay value={breakTime} />
                <AButton type="increment" onButtonClick={handlePlusMinusClick} />
            </TimeSetter>
            <TimeSetter controlType="session">
                <AButton type="decrement" onButtonClick={handlePlusMinusClick} />
                <LengthDisplay value={sessionTime}/>
                <AButton type="increment" onButtonClick={handlePlusMinusClick} />
            </TimeSetter>
        </div>
        <div className='main-display'>
            <StatusDisplay status={timerStatus} />
            <CountdownTimer />
        </div>
        <div className='timer-controls'>
            <AButton type='start-stop' control="play" />
            <AButton type='reset' />
        </div>
    </div>
}

export default App