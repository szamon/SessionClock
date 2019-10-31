import React from 'react';

const Clock = (props) => {
    return<div className="containerClock">
        <h3 id="timer-label">{props.clockText}</h3>
        <button id="start_stop" onClick={props.handleStartStop}>Start/Stop</button>
        <button id="reset" onClick={props.handleReset}>Reset</button>
        <div id="time-left" className="time">{props.minutes < 10 ? "0" + props.minutes : props.minutes}:{props.seconds < 10 ? "0" + props.seconds : props.seconds}</div>
    </div>
}

export default Clock;