import React, { useState, useRef } from 'react';

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const timerRef = useRef(null);

    const startStopwatch = () => {
        if (!running) {
            setRunning(true);
            
            timerRef.current = setInterval(() => {
                setTime(prevIndex => prevIndex + 1);
            }, 1000);
        }
    };

    const stopStopwatch = () => {
        setRunning(false);
        clearInterval(timerRef.current);
    };

    const resetStopwatch = () => {
        setRunning(false);
        clearInterval(timerRef.current);
        setTime(0);
    };

    return (
        <div className="p-5 text-center">
            <h1 className="text-2xl font-bold">Stopwatch: {time}s</h1>
            <button onClick={startStopwatch} className="bg-green-500 text-white px-4 py-2 m-2">Start</button>
            <button onClick={stopStopwatch} className="bg-yellow-500 text-white px-4 py-2 m-2">Stop</button>
            <button onClick={resetStopwatch} className="bg-red-500 text-white px-4 py-2 m-2">Reset</button>
        </div>
    );
};

export default Stopwatch;
