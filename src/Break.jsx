import React from 'react';

const Break = (props)=>{
    return<div className="containerBreak">
        <p id="break-label">Break Length</p>
        <button id="break-increment" onClick={props.handleClick}>+</button>
        <button id="break-decrement" onClick={props.handleClick}>-</button>
        <div id="break-length" className="textSB">{props.breakLength}</div>
    </div>
}

export default Break;