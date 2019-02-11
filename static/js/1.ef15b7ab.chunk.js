(window.webpackJsonp=window.webpackJsonp||[]).push([[1,19,20,21,22,23,24,25],{12:function(e,t,n){"use strict";n.r(t),n.d(t,"id",function(){return u});var a=n(36);n.d(t,"overview",function(){return a.default});var r=n(37);n.d(t,"page1",function(){return r.default});var l=n(38);n.d(t,"page2",function(){return l.default});var o=n(39);n.d(t,"page3",function(){return o.default});var i=n(40);n.d(t,"page4",function(){return i.default});var c=n(41);n.d(t,"page5",function(){return c.default});var s=n(42);n.d(t,"page6",function(){return s.default});var u=10},136:function(e,t,n){"use strict";var a=n(1),r=n(2),l=n(4),o=n(3),i=n(5),c=n(0),s=n.n(c),u=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).handleClick=function(){n.props.navRequested(n.props.position)},n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.position,n=e.active,a=e.color,r="";return n&&(r+="active "),1===t&&(r+="pillFirst "),3===t&&(r+="pillLast "),s.a.createElement("button",{className:r||null,onClick:this.handleClick,style:{backgroundColor:a}},t)}}]),t}(s.a.Component),m=(n(137),function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.active,n=e.navRequested,a=e.color;return s.a.createElement("div",{className:"pillNavigation"},s.a.createElement(u,{position:1,active:1===t,navRequested:n,color:a}),s.a.createElement(u,{position:2,active:2===t,navRequested:n,color:a}),s.a.createElement(u,{position:3,active:3===t,navRequested:n,color:a}))}}]),t}(s.a.Component));t.a=m},137:function(e,t,n){},139:function(e,t,n){"use strict";var a=n(1),r=n(2),l=n(4),o=n(3),i=n(5),c=n(0),s=n.n(c),u=(n(140),function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("h1",{className:"titleBlock",style:{backgroundColor:this.props.color}},this.props.children)}}]),t}(s.a.Component));t.a=u},140:function(e,t,n){},142:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(0),r=n.n(a);function l(){return r.a.createElement("h1",null,"Let\u2019s define the strategy")}t.b=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{marginTop:"2em"}},"Let\u2019s understand how ",r.a.createElement("em",null,"other")," scenarios could be applied to this strategy"),r.a.createElement("p",null,"It is time for some warm-up exercises. Apply the ",r.a.createElement("em",null,r.a.createElement("strong",null,e.scenario))," scenario to the following three examples."))}},143:function(e,t,n){"use strict";e.exports=function(e,t,n){if((t-=(e+="").length)<=0)return e;n||0===n||(n=" ");if(" "===(n+="")&&t<10)return a[t]+e;var r="";for(;1&t&&(r+=n),t>>=1;)n+=n;return r+e};var a=[""," ","  ","   ","    ","     ","      ","       ","        ","         "]},144:function(e,t,n){},146:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(7);t.a=function(e){var t=Object(l.b)(e.storageId),n=[];return t.forEach(function(e){e.value&&n.push(r.a.createElement("p",{key:e.key},e.value))}),0===n.length?null:r.a.createElement("div",{style:{padding:"1em",margin:"1em",backgroundColor:"whitesmoke"}},n)}},147:function(e,t,n){"use strict";var a=n(1),r=n(2),l=n(4),o=n(3),i=n(5),c=n(0),s=n.n(c),u=n(143),m=n.n(u),h=function e(t,n){var r=this;Object(a.a)(this,e),this.listener=function(e){r.keystack.push(e.key),r.keystack.join("")===r.fireOn.substring(0,r.keystack.length)?r.keystack.length===r.fireOn.length&&(r.callback(),r.keystack=[]):r.keystack=[]},this.remove=function(){window.removeEventListener("keypress",r.listener)},this.keystack=[],this.fireOn=t,this.callback=n,window.addEventListener("keypress",this.listener)},d=(n(144),function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(l.a)(this,Object(o.a)(t).call(this,e))).startTimer=function(){!n.state.running&&n.state.seconds&&(n.setState({running:!0}),n.interval=window.setInterval(function(){var e=n.state.seconds-1;e?n.setState({seconds:e}):n.timerDone()},1e3),n.refTimer.current.blur())},n.timerDone=function(){window.clearInterval(n.interval),n.setState({seconds:0,running:!1}),n.props.onDing()},n.formatSeconds=function(e){var t=Math.floor(e/60),n=m()(e%60,2,"0");return"".concat(t,":").concat(n)},n.state={seconds:60*e.minutes,running:!1},n.keyListen=new h("sam",n.timerDone),n.refTimer=s.a.createRef(),n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timeout=window.setTimeout(function(){e.props.onDing()},15e4)}},{key:"componentWillUnmount",value:function(){this.keyListen.remove(),window.clearTimeout(this.timeout),window.clearInterval(this.interval)}},{key:"render",value:function(){var e="Begin Timer";return this.state.running&&(e=this.formatSeconds(this.state.seconds)),0===this.state.seconds&&(e="Done"),s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{className:"timer themed"+(this.state.running?" running":""),onClick:this.startTimer,ref:this.refTimer},e))}}]),t}(s.a.Component));t.a=d},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(139),o=n(6),i=n(142);t.default=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{color:o.c[e.id].color},o.c[e.id].name),r.a.createElement("div",{className:"overview"},r.a.createElement(i.a,null),r.a.createElement("p",null,r.a.createElement("em",null,"Does the design of ",r.a.createElement("strong",null,"the playground")," solve the right problem at the right level?")),r.a.createElement("p",null,"Here are some thought starters:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Describe the problem you're solving for"),r.a.createElement("li",null,"Why is it useful?"),r.a.createElement("li",null,"What is the impact of this issue?")),r.a.createElement(i.b,{scenario:o.c[e.id].name})))}},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(136);t.default=function(e){var t=e.overview;return r.a.createElement(r.a.Fragment,null,r.a.createElement(t,{id:e.id}),r.a.createElement("main",null,r.a.createElement(l.a,{active:e.pageNbr,navRequested:e.getNextPage,color:e.color}),r.a.createElement("h2",null,'For example, if the scenario were to "Design a handcrank flashlight", you might think about...'),r.a.createElement("h3",null,"Describe the problem you're solving for"),r.a.createElement("p",null,"No access to electricity"),r.a.createElement("h3",null,"Why is it useful?"),r.a.createElement("p",null,"Power is out"),r.a.createElement("h3",null,"Describe the problem you're solving for"),r.a.createElement("p",null,"Located in non-sunny region")))}},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(136);t.default=function(e){var t=e.overview;return r.a.createElement(r.a.Fragment,null,r.a.createElement(t,{id:e.id}),r.a.createElement("main",null,r.a.createElement(l.a,{active:e.pageNbr,navRequested:e.getNextPage,color:e.color}),r.a.createElement("h2",null,'Now let\'s consider, "Design an online forum"'),r.a.createElement("h3",null,"Describe the problem you're solving for"),r.a.createElement("p",null,"No support from colleagues"),r.a.createElement("h3",null,"Describe the problem you're solving for"),r.a.createElement("p",null,"Can't find like-minded people"),r.a.createElement("h3",null,"Describe the problem you're solving for"),r.a.createElement("p",null,"Lack of inspiration")))}},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(136);t.default=function(e){var t=e.overview;return r.a.createElement(r.a.Fragment,null,r.a.createElement(t,{id:e.id}),r.a.createElement("main",null,r.a.createElement(l.a,{active:e.pageNbr,navRequested:e.getNextPage,color:e.color}),r.a.createElement("h2",null,"Design a device that helps you wake up"),r.a.createElement("h3",null,"Describe the problem you're solving for"),r.a.createElement("p",null,"Miss the alarm in the morning"),r.a.createElement("h3",null,"Describe the problem you're solving for"),r.a.createElement("p",null,"Can\u2019t understand how the current device works"),r.a.createElement("h3",null,"What is the impact of this issue?"),r.a.createElement("p",null,"Doesn\u2019t motivate me to wake up")))}},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(10);t.default=function(e){return r.a.createElement("main",null,r.a.createElement("h1",null,"Problem Statement Part One"),r.a.createElement("div",{className:"ponderLayout"},r.a.createElement("section",null,r.a.createElement("p",null,"Now that you\u2019ve learned about this strategy, please state a new problem statement by including information from this particular strategy. Enter as many additional problem statements as you can think of."),r.a.createElement("p",null,"\xa0"),r.a.createElement(l.a,{storageKey:"s".concat(e.id,"p").concat(e.pageNbr)})),r.a.createElement("section",null,r.a.createElement("h2",null,"Strategy:"),r.a.createElement("p",null,"Determine the Underlying Issue"),r.a.createElement("h2",null,"Scenario:"),r.a.createElement("p",null,"A city resident has recently donated a corner lot for a playground. You are an engineer who lives in the neighborhood, and you have been asked by the city to help with the project. Your task is to design playground equipment for the lot using locally sourced materials that are able to withstand outdoor conditions all year long."))))}},41:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(2),l=n(4),o=n(3),i=n(5),c=n(0),s=n.n(c),u=n(147),m=n(146),h=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(l.a)(this,Object(o.a)(t).call(this,e))).showCompletionMessage=function(){n.setState({timerIsDone:!0}),n.props.setBtnState({showNextBtn:!0})},n.state={timerIsDone:!1},e.setBtnState({showNextBtn:!1}),n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.pageNbr,a=s.a.createElement("p",{style:{textAlign:"center"}});return s.a.createElement("main",null,s.a.createElement("h1",{style:{marginBottom:"3em"}},"Solution Generation"),s.a.createElement("p",null,"Take 5 minutes to generate as many solutions as you can based on the new problem statements you previously generated."),s.a.createElement(m.a,{storageId:"s".concat(t,"p").concat(n-1)}),s.a.createElement("p",{style:{margin:"2em",textAlign:"center"}},s.a.createElement(u.a,{minutes:5,onDing:this.showCompletionMessage})),this.state.timerIsDone&&a)}}]),t}(s.a.Component);t.default=h},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(10);t.default=function(e){return r.a.createElement("main",null,r.a.createElement("h1",null,"Problem Statement Part Two"),r.a.createElement("div",{className:"ponderLayout"},r.a.createElement("section",null,r.a.createElement("p",null,"Now that you\u2019ve generated new solutions, generate a new problem statement based on your sketched ideas. Enter as many additional problem statements as you can think of."),r.a.createElement("p",null,"\xa0"),r.a.createElement(l.a,{storageKey:"s".concat(e.id,"p").concat(e.pageNbr)})),r.a.createElement("section",null,r.a.createElement("h2",null,"Strategy:"),r.a.createElement("p",null,"Determine the Underlying Issue"),r.a.createElement("h2",null,"Scenario:"),r.a.createElement("p",null,"A city resident has recently donated a corner lot for a playground. You are an engineer who lives in the neighborhood, and you have been asked by the city to help with the project. Your task is to design playground equipment for the lot using locally sourced materials that are able to withstand outdoor conditions all year long."))))}}}]);
//# sourceMappingURL=1.ef15b7ab.chunk.js.map