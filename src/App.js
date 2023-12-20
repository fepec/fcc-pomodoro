import React from 'react'
import TimeSetter from './components/timeSetter'
import SettingsButton from './components/settingsButton'
import LengthDisplay from './components/lengthDisplay'
import StatusDisplay from './components/statusDisplay'
import CountdownTimer from './components/countdownTimer'
import StartStopButton from './components/startStopButton'
import ResetButton from './components/resetButton'

function App() {
    // state

    // event handlers
    

    return <div className=''>
        <h1>fepec's pomodoro timer</h1>
        <div className='timer-settings'>

            <TimeSetter timerType="break">
                <SettingsButton direction="decrement" />
                <LengthDisplay />
                <SettingsButton direction="increment" />
            </TimeSetter>
            <TimeSetter timerType="session">
                <SettingsButton direction="decrement" />
                <LengthDisplay />
                <SettingsButton direction="increment" />
            </TimeSetter>
        </div>
        <div className='main-display'>
            <StatusDisplay status="break" />
            <CountdownTimer />
        </div>
        <div className='timer-controls'>
            <StartStopButton />
            <ResetButton />
        </div>
    </div>
}

export default App