import React from 'react'
import TimeSetter from './components/timeSetter'
import ControlButton from './components/controlButton'
import LengthDisplay from './components/lengthDisplay'
import StatusDisplay from './components/StatusDisplay'
import CountdownTimer from './components/countdownTimer'

function App() {
    return <div className=''>
        <h1>fepec's pomodoro timer</h1>
        <div className='timer-settings'>

            <TimeSetter timerType="break">
                <ControlButton direction="decrement" />
                <LengthDisplay />
                <ControlButton direction="increment" />
            </TimeSetter>
            <TimeSetter timerType="session">
                <ControlButton direction="decrement" />
                <LengthDisplay />
                <ControlButton direction="increment" />
            </TimeSetter>
        </div>
        <div className='main-display'>
            <StatusDisplay status="break" />
            <CountdownTimer />
        </div>
    </div>
}

export default App