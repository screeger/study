(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{109:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n(2),r=n(4),a=n(3),o=n(5),c=n(0),u=n.n(c),l=n(143),m=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(r.a)(this,Object(a.a)(t).call(this,e))).showCompletionMessage=function(){n.setState({timerIsDone:!0}),n.props.setBtnState({showNextBtn:!0})},n.state={timerIsDone:!1},e.setBtnState({showNextBtn:!1}),n}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=u.a.createElement("p",{style:{textAlign:"center"}});return u.a.createElement("main",null,u.a.createElement("h1",{style:{marginBottom:"3em"}},"Solution Generation"),u.a.createElement("p",null,"Take 5 minutes to generate as many concepts as you can based on the new problem statements you previously generated."),u.a.createElement("p",{style:{margin:"2em",textAlign:"center"}},u.a.createElement(l.a,{minutes:5,onDing:this.showCompletionMessage})),this.state.timerIsDone&&e)}}]),t}(u.a.Component);t.default=m},140:function(e,t,n){"use strict";e.exports=function(e,t,n){if((t-=(e+="").length)<=0)return e;n||0===n||(n=" ");if(" "===(n+="")&&t<10)return s[t]+e;var i="";for(;1&t&&(i+=n),t>>=1;)n+=n;return i+e};var s=[""," ","  ","   ","    ","     ","      ","       ","        ","         "]},141:function(e,t,n){},143:function(e,t,n){"use strict";var s=n(1),i=n(2),r=n(4),a=n(3),o=n(5),c=n(0),u=n.n(c),l=n(140),m=n.n(l),h=function e(t,n){var i=this;Object(s.a)(this,e),this.listener=function(e){i.keystack.push(e.key),i.keystack.join("")===i.fireOn.substring(0,i.keystack.length)?i.keystack.length===i.fireOn.length&&(i.callback(),i.keystack=[]):i.keystack=[]},this.remove=function(){window.removeEventListener("keypress",i.listener)},this.keystack=[],this.fireOn=t,this.callback=n,window.addEventListener("keypress",this.listener)},f=(n(141),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(r.a)(this,Object(a.a)(t).call(this,e))).startTimer=function(){!n.state.running&&n.state.seconds&&(n.setState({running:!0}),n.interval=window.setInterval(function(){var e=n.state.seconds-1;e?n.setState({seconds:e}):n.timerDone()},1e3),n.refTimer.current.blur())},n.timerDone=function(){window.clearInterval(n.interval),n.setState({seconds:0,running:!1}),n.props.onDing()},n.formatSeconds=function(e){var t=Math.floor(e/60),n=m()(e%60,2,"0");return"".concat(t,":").concat(n)},n.state={seconds:60*e.minutes,running:!1},n.keyListen=new h("sam",n.timerDone),n.refTimer=u.a.createRef(),n}return Object(o.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timeout=window.setTimeout(function(){e.props.onDing()},15e4)}},{key:"componentWillUnmount",value:function(){this.keyListen.remove(),window.clearTimeout(this.timeout),window.clearInterval(this.interval)}},{key:"render",value:function(){var e="Begin Timer";return this.state.running&&(e=this.formatSeconds(this.state.seconds)),0===this.state.seconds&&(e="Done"),u.a.createElement(u.a.Fragment,null,u.a.createElement("button",{className:"timer themed"+(this.state.running?" running":""),onClick:this.startTimer,ref:this.refTimer},e))}}]),t}(u.a.Component));t.a=f}}]);
//# sourceMappingURL=94.a176a200.chunk.js.map