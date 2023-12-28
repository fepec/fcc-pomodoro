import React, { useState, useEffect, useRef } from 'react'
import TimeSetter from './components/timeSetter'
import AButton from './components/aButton'
import LengthDisplay from './components/lengthDisplay'
import StatusDisplay from './components/statusDisplay'
import TimeLeftDisplay from './components/timeLeftDisplay'
import AlarmSound from './assets/1s100hzSine.mp3'

// defaults
const defaultSessionTime = 25
const defaultBreakTime = 5


function App() {
    // state
    let [sessionMinutes, setSessionMinutes] = useState(defaultSessionTime);
    let [breakMinutes, setBreakMinutes] = useState(defaultBreakTime);
    let [timerStatus, setTimerStatus] = useState('session');
    let [isRunning, setIsRunning] = useState(false)
    let [timeLeft, setTimeLeft] = useState(sessionMinutes * 60) // set in seconds
    let endTime = useRef(null)
    let intervalRef = useRef(null);
    


    // effects, used to manage timer and intervals
    function timer(durationSeconds) {
        endTime.current = Date.now() + durationSeconds * 1000;
        setTimeLeft(durationSeconds);

        intervalRef.current = setInterval(() => {
            const now = Date.now();
            const remainingSeconds = Math.round((endTime.current - now) / 1000);
            console.log(isRunning, timeLeft, intervalRef.current, remainingSeconds)

            if (remainingSeconds <= 0) {
                clearInterval(intervalRef.current)

                const audio = document.getElementById('beep')
                audio.currentTime = 0;
                audio.play().catch((err) => console.log(err))


                if (timerStatus === 'session') {
                    setTimerStatus('break');
                    setTimeLeft(breakMinutes * 60)
                } else {
                    setIsRunning(false)
                    setTimerStatus('session');
                    setTimeLeft(sessionMinutes * 60)

                }

            } else {
                setTimeLeft(remainingSeconds);
            }

        }, 1000);

    }


    useEffect(() => {
        console.log("Mounting interval, time left", timeLeft)
        if (isRunning > 0) {
            timer(timeLeft);
        } else {
            clearInterval(intervalRef.current)
        }

        return () => {
            console.log("Clearing Interval")
            clearInterval(intervalRef.current); // Cleanup interval on component unmount
        }
    }, [isRunning, timerStatus]);


    // event handlers
    function handlePlusMinusClick(e) {

        if (e.target.id.includes('decrement')) {
            if (e.target.id.includes('break') && breakMinutes > 1) {
                setBreakMinutes(breakMinutes - 1)
            } else if (e.target.id.includes('session') && sessionMinutes > 1) {
                const newTime = sessionMinutes - 1
                setSessionMinutes(newTime)
                setTimeLeft(newTime * 60)
            }
        }

        if (e.target.id.includes('increment')) {
            if (e.target.id.includes('break') && breakMinutes < 60) {
                setBreakMinutes(breakMinutes + 1)
            } else if (e.target.id.includes('session') && sessionMinutes < 60) {
                const newTime = sessionMinutes + 1
                setSessionMinutes(newTime)
                setTimeLeft(newTime * 60)
            }
        }
    }

    function handleResetClick(e) {
        clearInterval(intervalRef.current);
        setBreakMinutes(defaultBreakTime);
        setSessionMinutes(defaultSessionTime);
        setIsRunning(false);
        setTimerStatus('session');
        setTimeLeft(defaultSessionTime * 60);
        const audio = document.getElementById('beep')
        audio.pause()
        audio.currentTime = 0;
        

    }

    function handleStartStopClick(e) {

        if (!isRunning) {
            const seconds = timeLeft > 0 ? timeLeft : timerStatus == 'break' ? breakMinutes * 60 : sessionMinutes * 60;
            timer(seconds)
            setIsRunning(true);
        } else {
            setIsRunning(false);
        }
    }




    return <div className='pomodoro-timer'>
        <h1>fepec's pomodoro timer</h1>
        <div className='timer-settings'>

            <TimeSetter controlType="break">
                <AButton type="decrement" onButtonClick={handlePlusMinusClick} />
                <LengthDisplay value={breakMinutes} />
                <AButton type="increment" onButtonClick={handlePlusMinusClick} />
            </TimeSetter>
            <TimeSetter controlType="session">
                <AButton type="decrement" onButtonClick={handlePlusMinusClick} />
                <LengthDisplay value={sessionMinutes} />
                <AButton type="increment" onButtonClick={handlePlusMinusClick} />
            </TimeSetter>
        </div>
        <div className='main-display'>
            <StatusDisplay status={timerStatus} />
            <TimeLeftDisplay timeToDisplay={timeLeft} />
        </div>
        <div className='timer-controls'>
            <button id="start_stop" className='control-button' onClick={handleStartStopClick}>{!isRunning ? String.fromCharCode(0x23F5) : String.fromCharCode(0x23F9)}</button>
            <button id='reset' className='control-button' onClick={handleResetClick}>{String.fromCharCode(0x000027F2)}</button>
        </div>
        <audio id='beep' src={AlarmSound} />
        {/* <div className='devCheck'>
            {`isRunning: ${isRunning}`} <br />
            {`timeLeft: ${timeLeft}`} <br />
            {`intervalRef: ${intervalRef.current}`} <br />
            {`sessionMinutes: ${sessionMinutes}`} <br />
            {`breakMinutes: ${breakMinutes}`} <br />
            {`timerStatus: ${timerStatus}`} <br />
        </div> */}
    </div>
}

export default App