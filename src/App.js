import React from 'react'
import TimeSetter from './components/timeSetter'
import AButton from './components/aButton'
import LengthDisplay from './components/lengthDisplay'
import StatusDisplay from './components/statusDisplay'
import CountdownTimer from './components/countdownTimer'

function App() {
    // state

    // event handlers


    return <div className=''>
        <h1>fepec's pomodoro timer</h1>
        <div className='timer-settings'>

            <TimeSetter controlType="break">
                <AButton type="decrement" />
                <LengthDisplay />
                <AButton type="increment" />
            </TimeSetter>
            <TimeSetter controlType="session">
                <AButton type="decrement" />
                <LengthDisplay />
                <AButton type="increment" />
            </TimeSetter>
        </div>
        <div className='main-display'>
            <StatusDisplay status="break" />
            <CountdownTimer />
        </div>
        <div className='timer-controls'>
            <AButton type='start-stop' control="play" />
            <AButton type='reset' />
        </div>
    </div>
}

export default App