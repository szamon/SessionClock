(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,s){e.exports=s(19)},,,,,,function(e,t,s){},function(e,t,s){e.exports=s.p+"static/media/logo.5d5d9eef.svg"},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),i=s(8),c=s.n(i),o=(s(15),s(16),s(17),s(2)),l=s(3),r=s(6),h=s(4),d=s(1),m=s(5),u=function(e){return a.a.createElement("div",{class:"containerSession"},a.a.createElement("p",{id:"session-label"},"Session Length"),a.a.createElement("button",{id:"session-increment",onClick:e.handleClick},"+"),a.a.createElement("button",{id:"session-decrement",onClick:e.handleClick},"-"),a.a.createElement("div",{id:"session-length",className:"textSB"},e.sessionLength))},k=function(e){return a.a.createElement("div",{className:"containerBreak"},a.a.createElement("p",{id:"break-label"},"Break Length"),a.a.createElement("button",{id:"break-increment",onClick:e.handleClick},"+"),a.a.createElement("button",{id:"break-decrement",onClick:e.handleClick},"-"),a.a.createElement("div",{id:"break-length",className:"textSB"},e.breakLength))},b=function(e){function t(e){return Object(o.a)(this,t),Object(r.a)(this,Object(h.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.minutes<10?"0"+this.props.minutes:this.props.minutes,t=this.props.seconds<10?"0"+this.props.seconds:this.props.seconds;return a.a.createElement("div",{className:"containerClock"},a.a.createElement("h3",{id:"timer-label"},this.props.clockText),a.a.createElement("button",{id:"start_stop",onClick:this.props.handleStartStop},"Start/Stop"),a.a.createElement("button",{id:"reset",onClick:this.props.handleReset},"Reset"),a.a.createElement("div",{id:"time-left",className:"time"},e,":",t))}}]),t}(a.a.Component),g=(s(18),function(e){function t(e){var s;return Object(o.a)(this,t),(s=Object(r.a)(this,Object(h.a)(t).call(this,e))).state={sessionLength:25,breakLength:5,clockText:"Shall We Begin?",minutes:25,seconds:0,intervalID:"",intitialized:!1},s.handleClick=s.handleClick.bind(Object(d.a)(s)),s.handleChange=s.handleChange.bind(Object(d.a)(s)),s.handleStartStop=s.handleStartStop.bind(Object(d.a)(s)),s.handleReset=s.handleReset.bind(Object(d.a)(s)),s.timeChecker=s.timeChecker.bind(Object(d.a)(s)),s.secondsHandler=s.secondsHandler.bind(Object(d.a)(s)),s.playAlarm=s.playAlarm.bind(Object(d.a)(s)),s}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=setInterval(this.timerCount.bind(this),1e3);this.setState({intervalID:e})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.intervalID)}},{key:"timerCount",value:function(){this.state.intitialized&&this.setState({seconds:this.state.seconds-1}),this.timeChecker()}},{key:"timeChecker",value:function(){-1===this.state.seconds&&0!==this.state.minutes&&this.setState({seconds:59,minutes:this.state.minutes-1}),-1===this.state.seconds&&0===this.state.minutes&&("Session"===this.state.clockText?this.setState({clockText:"Break",minutes:this.state.breakLength,seconds:0}):this.setState({clockText:"Session",minutes:this.state.sessionLength,seconds:0}),this.playAlarm())}},{key:"handleChange",value:function(e){switch(e.target.id){case"break-decrement":this.state.breakLength>1&&!this.state.intitialized&&(this.setState({breakLength:this.state.breakLength-1}),"Break"===this.state.clockText&&this.setState({minutes:this.state.breakLength-1,seconds:0}));break;case"break-increment":this.state.breakLength<=59&&!this.state.intitialized&&(this.setState({breakLength:this.state.breakLength+1}),"Break"===this.state.clockText&&this.setState({minutes:this.state.breakLength+1,seconds:0}));break;case"session-decrement":this.state.sessionLength>1&&!this.state.intitialized&&(this.setState({sessionLength:this.state.sessionLength-1}),"Session"!==this.state.clockText&&"Shall We Begin?"!==this.state.clockText||this.setState({minutes:this.state.sessionLength-1,seconds:0}));break;case"session-increment":this.state.sessionLength<=59&&!this.state.intitialized&&(this.setState({sessionLength:this.state.sessionLength+1}),"Session"!==this.state.clockText&&"Shall We Begin?"!==this.state.clockText||this.setState({minutes:this.state.sessionLength+1,seconds:0}))}}},{key:"secondsHandler",value:function(e){var t=this.state.sessionLength,s=this.state.breakLength;console.log(t,s),"session"===e?this.setState({minutes:t,seconds:0}):this.setState({minutes:s,seconds:0})}},{key:"handleClick",value:function(e){console.log(e.target.id),/decrement$|increment$/.test(e.target.id)&&this.handleChange(e)}},{key:"handleStartStop",value:function(){console.log("startStopHandler"),this.setState({intitialized:!this.state.intitialized,clockText:"Break"===this.state.clockText?"Break":"Session"})}},{key:"handleReset",value:function(){var e=document.getElementById("beep");console.log("handleReset"),this.setState({minutes:25,seconds:0,breakLength:5,sessionLength:25,intitialized:!1,clockText:"Shall We Begin?"}),0!==e.currentTime&&(e.pause(),e.currentTime=0)}},{key:"playAlarm",value:function(){document.getElementById("beep").play(),console.log("playAlarm")}},{key:"render",value:function(){return a.a.createElement("div",{className:"containerApp"},a.a.createElement("div",{className:"containerSB"},a.a.createElement(u,{sessionLength:this.state.sessionLength,handleClick:this.handleClick}),a.a.createElement(k,{breakLength:this.state.breakLength,handleClick:this.handleClick})),a.a.createElement(b,{clockText:this.state.clockText,handleStartStop:this.handleStartStop,handleReset:this.handleReset,minutes:this.state.minutes,seconds:this.state.seconds}),a.a.createElement("audio",{src:"./alarm.mp3",id:"beep"}))}}]),t}(a.a.Component));var p=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.9c3673dc.chunk.js.map