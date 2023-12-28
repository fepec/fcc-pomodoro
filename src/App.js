import React, { useState, useEffect, useRef } from 'react'
import TimeSetter from './components/timeSetter'
import AButton from './components/aButton'
import LengthDisplay from './components/lengthDisplay'
import StatusDisplay from './components/statusDisplay'
import TimeLeftDisplay from './components/timeLeftDisplay'
import AlarmSound from './assets/1s100hzSine.mp3'

// defaults
const defaultSessionTime = 25 * 60
const defaultBreakTime = 5 * 60


function App() {
    // state
    let [sessionSeconds, setSessionSeconds] = useState(defaultSessionTime);
    let [breakSeconds, setBreakSeconds] = useState(defaultBreakTime);
    let [timerStatus, setTimerStatus] = useState('session');
    let [isRunning, setIsRunning] = useState(false)
    let [timeLeft, setTimeLeft] = useState(sessionSeconds) 
    let endTime = useRef(null)
    let intervalRef = useRef(null);
    


    // effects, used to manage timer and intervals
    function timer(durationSeconds) {
        endTime.current = Date.now() + durationSeconds * 1000;
        // setTimeLeft(durationSeconds)

        intervalRef.current = setInterval(() => {
            const now = Date.now();
            const remainingSeconds = Math.round((endTime.current - now) / 1000);
            
            setTimeLeft(remainingSeconds)

            if (remainingSeconds < 0) {
                console.log("Clearing Interval", intervalRef.current, timeLeft)
                clearInterval(intervalRef.current)
                

                const audio = document.getElementById('beep')
                audio.currentTime = 0;
                audio.play().catch((err) => console.log(err))


                if (timerStatus === 'session') {
                    setTimerStatus('break');
                    setTimeLeft(breakSeconds)
                } else {
                    setIsRunning(false)
                    setTimerStatus('session');
                    setTimeLeft(sessionSeconds)

                }

            } else {
                setTimeLeft(remainingSeconds);
            }

        }, 1000);

    }


    useEffect(() => {
        console.log("Mounting interval, time left", timeLeft)
        if (isRunning) {
            timer(timeLeft);
        } else {
            console.log("Clearing Interval", intervalRef.current, timeLeft)
            clearInterval(intervalRef.current)
        }

        return () => {
            console.log("Clearing Interval", intervalRef.current, timeLeft)
            clearInterval(intervalRef.current); // Cleanup interval on component unmount
        }
    }, [isRunning, timerStatus]);


    // event handlers
    function handlePlusMinusClick(e) {

        if (e.target.id.includes('decrement')) {
            if (e.target.id.includes('break') && breakSeconds > 1 * 60) {
                setBreakSeconds(breakSeconds - 60)
            } else if (e.target.id.includes('session') && sessionSeconds > 1 * 60) {
                const newTime = sessionSeconds - 60
                setSessionSeconds(newTime)
                setTimeLeft(newTime)
            }
        }

        if (e.target.id.includes('increment')) {
            if (e.target.id.includes('break') && breakSeconds < 60 * 60) {
                setBreakSeconds(breakSeconds + 60)
            } else if (e.target.id.includes('session') && sessionSeconds < 60 * 60) {
                const newTime = sessionSeconds + 60
                setSessionSeconds(newTime)
                setTimeLeft(newTime)
            }
        }
    }

    function handleResetClick(e) {
        console.log("Clearing Interval", intervalRef.current, timeLeft)
        clearInterval(intervalRef.current);
        setBreakSeconds(defaultBreakTime);
        setSessionSeconds(defaultSessionTime);
        setIsRunning(false);
        setTimerStatus('session');
        setTimeLeft(defaultSessionTime);
        const audio = document.getElementById('beep')
        audio.pause()
        audio.currentTime = 0;
        

    }

    function handleStartStopClick(e) {

        if (!isRunning) {
            const seconds = timeLeft >= 0 ? timeLeft : timerStatus == 'break' ? breakSeconds : sessionSeconds ;
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
                <LengthDisplay value={breakSeconds / 60} />
                <AButton type="increment" onButtonClick={handlePlusMinusClick} />
            </TimeSetter>
            <TimeSetter controlType="session">
                <AButton type="decrement" onButtonClick={handlePlusMinusClick} />
                <LengthDisplay value={sessionSeconds / 60} />
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
    </div>
}

export default App