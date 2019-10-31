import React from 'react';

const Session = (props) => {
    return<div className="containerSession">
        <p id="session-label">Session Length</p>
        <button id="session-increment" onClick={props.handleClick}>+</button>
        <button id="session-decrement" onClick={props.handleClick}>-</button>
        <div id="session-length" className="textSB">{props.sessionLength}</div>
    </div>
}

export default Session;