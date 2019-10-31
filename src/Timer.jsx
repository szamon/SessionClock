import React from 'react';
import Session from './Session.jsx';
import Break from './Break.jsx';
import Clock from './Clock.jsx';
import './main.css' ;
class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sessionLength: 25,
            breakLength: 5,
            clockText: "Shall We Begin?",
            minutes: 25,
            seconds: 0,
            intervalID: "",
            intitialized: false,
        }
        this.handleClick=this.handleClick.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleStartStop=this.handleStartStop.bind(this);
        this.handleReset=this.handleReset.bind(this);
        this.timeChecker=this.timeChecker.bind(this);
        this.secondsHandler=this.secondsHandler.bind(this);
        this.playAlarm=this.playAlarm.bind(this);
    }
    componentDidMount(){
        let intervalID = setInterval(this.timerCount.bind(this), 1000);
        this.setState({intervalID: intervalID});
    }
    componentWillUnmount(){
        clearInterval(this.state.intervalID);
    }
    timerCount(){
        if(this.state.intitialized){
            this.setState({seconds: this.state.seconds - 1});
        }
        this.timeChecker();
    }
    timeChecker(){
        if(this.state.seconds===-1 && this.state.minutes!==0){
            this.setState({seconds: 59, minutes: this.state.minutes - 1})
        }
        if(this.state.seconds===-1 && this.state.minutes===0){
            this.state.clockText === "Session" ? this.setState({clockText: "Break", minutes: this.state.breakLength, seconds: 0}) : this.setState({clockText: "Session", minutes: this.state.sessionLength, seconds: 0});
            this.playAlarm();
        }
    }
    handleChange(e){
        let id = e.target.id
        switch (id){
            case "break-decrement":
                if(this.state.breakLength > 1 && !this.state.intitialized){
                    this.setState({breakLength: this.state.breakLength - 1});
                    if(this.state.clockText==="Break"){this.setState({minutes: this.state.breakLength - 1, seconds: 0})};
                };
                break;
            case "break-increment":
                if(this.state.breakLength <= 59 && !this.state.intitialized){
                    this.setState({breakLength: this.state.breakLength + 1});
                    if(this.state.clockText==="Break"){this.setState({minutes: this.state.breakLength + 1, seconds: 0})};
                };
                break;
            case "session-decrement":
                if(this.state.sessionLength > 1 && !this.state.intitialized){this.setState({sessionLength: this.state.sessionLength - 1});
                    if(this.state.clockText==="Session"||this.state.clockText==="Shall We Begin?"){this.setState({minutes: this.state.sessionLength - 1, seconds: 0})};
                };
                break;
            case "session-increment":
                if(this.state.sessionLength <= 59 && !this.state.intitialized){this.setState({sessionLength: this.state.sessionLength + 1});
                    if(this.state.clockText==="Session"||this.state.clockText==="Shall We Begin?"){this.setState({minutes: this.state.sessionLength + 1, seconds: 0})};  
                };
                break;
            default:
                break;
        }
    }
    secondsHandler(type){
        let sMinutes = this.state.sessionLength;
        let bMinutes = this.state.breakLength;
        type === "session"  ? this.setState({minutes: sMinutes, seconds: 0}) : this.setState({minutes: bMinutes, seconds: 0});
    }
    handleClick(e){
        if(/decrement$|increment$/.test(e.target.id)){
            this.handleChange(e);
        }
    }
    handleStartStop(){
        this.setState({intitialized: !this.state.intitialized, clockText: this.state.clockText === "Break" ? "Break": "Session"});
    }
    handleReset(){
        const audio = document.getElementById("beep");
        this.setState({minutes: 25, seconds: 0, breakLength: 5, sessionLength: 25, intitialized: false, clockText: "Shall We Begin?"});
        if(audio.currentTime!==0){
            audio.pause();
            audio.currentTime=0;
        }
    }
    playAlarm(){
        const audio = document.getElementById("beep");
        audio.play();
    }
    render(){
       return<div className="containerApp">
           <div className="containerSB">
            <Session sessionLength={this.state.sessionLength} handleClick={this.handleClick} />
            <Break breakLength={this.state.breakLength} handleClick={this.handleClick} />
           </div>
           <Clock clockText={this.state.clockText} handleStartStop={this.handleStartStop} handleReset={this.handleReset} minutes={this.state.minutes} seconds={this.state.seconds}/>
           <audio src="./alarm.mp3" id="beep"></audio>
       </div>
    }
}

export default Timer;