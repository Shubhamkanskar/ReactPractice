import React, { useState } from 'react';

const Timer = () => {
    const [timer, setTimer] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const startTimer = () => {
        if (intervalId === null) {
            const id = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
            setIntervalId(id);
        }
    };

    const stopTimer = () => {
        if (intervalId !== null) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    };

    const resetTimer = () => {
        setTimer(0);
        if (intervalId !== null) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    };

    return (
        <div className="timer-container">
            <h1>Timer</h1>
            <div className="timer-display">
                <span>{Math.trunc(timer / 60).toString().padStart(2, '0')} mins </span>
                <span>{(timer % 60).toString().padStart(2, '0')} secs</span>
            </div>
            <div className="timer-buttons">
                <button onClick={startTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
};

export default Timer;
