import React, { useState, useEffect, useRef } from 'react'
import TimeSetter from './components/timeSetter'
import AButton from './components/aButton'
import LengthDisplay from './components/lengthDisplay'
import StatusDisplay from './components/statusDisplay'
import CountdownTimer from './components/countdownTimer'
import AlarmSound from './assets/1s100hzSine.mp3'

// defaults
const defaultSessionTime = 0.25
const defaultBreakTime = 5



function App() {
    // state
    let [sessionMinutes, setSessionMinutes] = useState(defaultSessionTime);
    let [breakMinutes, setBreakMinutes] = useState(defaultBreakTime);
    let [timerStatus, setTimerStatus] = useState('ready');
    let [isRunning, setIsRunning] = useState(false);
    let [timeLeft, setTimeLeft] = useState(sessionMinutes * 60) // set in seconds
    let [startStopStatus, setStartStopStatus] = useState('start');
    let intervalRef = useRef(null);

    // effects, used to manage timer and intervals


    // event handlers
    function handlePlusMinusClick(e) {

        if (e.target.id.includes('decrement')) {
            if (e.target.id.includes('break') && breakMinutes > 0) {
                setBreakMinutes(breakMinutes - 1)
            } else if (e.target.id.includes('session') && sessionMinutes > 0) {
                const newTime = sessionMinutes - 1
                setSessionMinutes(newTime)
                setTimeLeft(newTime * 60)
            }
        }

        if (e.target.id.includes('increment')) {
            if (e.target.id.includes('break')) {
                setBreakMinutes(breakMinutes + 1)
            } else if (e.target.id.includes('session')) {
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
        setTimerStatus('ready');
        setTimeLeft(defaultSessionTime * 60);
        setStartStopStatus('start')
    }

    function handleStartStopClick(e) {
        console.log(isRunning, timeLeft)

        if (!isRunning) {
            // let seconds;
            // if (timeLeft > 0) {
            //     seconds = timeLeft;
            // } else {
            //     if (timerStatus === 'break') {
            //         seconds = breakMinutes * 60
            //     }
            // }
            if(timerStatus === 'ready') {
                setTimerStatus('session')
            }
            const seconds = timeLeft > 0 ? timeLeft : timerStatus == 'break' ? breakMinutes * 60 : sessionMinutes * 60;
            timer(seconds);
            
            setStartStopStatus('stop')
            setIsRunning(true);
        } else {
        
            clearInterval(intervalRef.current);
            
            setStartStopStatus('start')
            setIsRunning(false);
        }
    }



    // timer function
    function timer(seconds) {
        clearInterval(intervalRef.current);
        const now = Date.now();
        const then = now + seconds * 1000;
        
        let remainingSeconds = seconds;
        intervalRef.current = setInterval(() => {
            remainingSeconds = Math.round((then - Date.now()) / 1000)
            setTimeLeft(remainingSeconds);

            if (remainingSeconds <= 0) {
                clearInterval(intervalRef.current);
                const audio = document.getElementById('beep')
                audio.currentTime = 0;
                 audio.play().catch((err) => console.log(err))
                // play sound
                // if session, switch to break and start there.
                if (timerStatus === 'session') {
                    setTimerStatus('break')
                    timer(breakMinutes * 60)

                }

                setIsRunning(false);
                return;
            }

        }, 1000)
            
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
            <CountdownTimer timeToDisplay={timeLeft} />
        </div>
        <div className='timer-controls'>
            <AButton type='start-stop' control={startStopStatus} onButtonClick={handleStartStopClick} />
            <AButton type='reset' onButtonClick={handleResetClick} />
        </div>
        <audio id='beep' src={AlarmSound} />
    </div>
}

export default App