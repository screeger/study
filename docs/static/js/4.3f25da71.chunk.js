(window.webpackJsonp=window.webpackJsonp||[]).push([[4,40,41,42,43,44,45,46],{13:function(e,t,n){"use strict";n.r(t),n.d(t,"id",function(){return u});var a=n(55);n.d(t,"overview",function(){return a.default});var r=n(56);n.d(t,"page1",function(){return r.default});var l=n(57);n.d(t,"page2",function(){return l.default});var o=n(58);n.d(t,"page3",function(){return o.default});var i=n(59);n.d(t,"page4",function(){return i.default});var c=n(60);n.d(t,"page5",function(){return c.default});var s=n(61);n.d(t,"page6",function(){return s.default});var u=2},134:function(e,t,n){"use strict";var a=n(1),r=n(2),l=n(4),o=n(3),i=n(5),c=n(0),s=n.n(c),u=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).handleClick=function(){n.props.navRequested(n.props.position)},n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.position,n=e.active,a=e.color,r="";return n&&(r+="active "),1===t&&(r+="pillFirst "),3===t&&(r+="pillLast "),s.a.createElement("button",{className:r||null,onClick:this.handleClick,style:{backgroundColor:a}},t)}}]),t}(s.a.Component),m=(n(135),function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.active,n=e.navRequested,a=e.color;return s.a.createElement("div",{className:"pillNavigation"},s.a.createElement(u,{position:1,active:1===t,navRequested:n,color:a}),s.a.createElement(u,{position:2,active:2===t,navRequested:n,color:a}),s.a.createElement(u,{position:3,active:3===t,navRequested:n,color:a}))}}]),t}(s.a.Component));t.a=m},135:function(e,t,n){},137:function(e,t,n){"use strict";var a=n(1),r=n(2),l=n(4),o=n(3),i=n(5),c=n(0),s=n.n(c),u=(n(138),function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("h1",{className:"titleBlock",style:{backgroundColor:this.props.color}},this.props.children)}}]),t}(s.a.Component));t.a=u},138:function(e,t,n){},140:function(e,t,n){"use strict";e.exports=function(e,t,n){if((t-=(e+="").length)<=0)return e;n||0===n||(n=" ");if(" "===(n+="")&&t<10)return a[t]+e;var r="";for(;1&t&&(r+=n),t>>=1;)n+=n;return r+e};var a=[""," ","  ","   ","    ","     ","      ","       ","        ","         "]},141:function(e,t,n){},143:function(e,t,n){"use strict";var a=n(1),r=n(2),l=n(4),o=n(3),i=n(5),c=n(0),s=n.n(c),u=n(140),m=n.n(u),h=function e(t,n){var r=this;Object(a.a)(this,e),this.listener=function(e){r.keystack.push(e.key),r.keystack.join("")===r.fireOn.substring(0,r.keystack.length)?r.keystack.length===r.fireOn.length&&(r.callback(),r.keystack=[]):r.keystack=[]},this.remove=function(){window.removeEventListener("keypress",r.listener)},this.keystack=[],this.fireOn=t,this.callback=n,window.addEventListener("keypress",this.listener)},d=(n(141),function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(l.a)(this,Object(o.a)(t).call(this,e))).startTimer=function(){!n.state.running&&n.state.seconds&&(n.setState({running:!0}),n.interval=window.setInterval(function(){var e=n.state.seconds-1;e?n.setState({seconds:e}):n.timerDone()},1e3),n.refTimer.current.blur())},n.timerDone=function(){window.clearInterval(n.interval),n.setState({seconds:0,running:!1}),n.props.onDing()},n.formatSeconds=function(e){var t=Math.floor(e/60),n=m()(e%60,2,"0");return"".concat(t,":").concat(n)},n.state={seconds:60*e.minutes,running:!1},n.keyListen=new h("sam",n.timerDone),n.refTimer=s.a.createRef(),n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timeout=window.setTimeout(function(){e.props.onDing()},15e4)}},{key:"componentWillUnmount",value:function(){this.keyListen.remove(),window.clearTimeout(this.timeout),window.clearInterval(this.interval)}},{key:"render",value:function(){var e="Begin Timer";return this.state.running&&(e=this.formatSeconds(this.state.seconds)),0===this.state.seconds&&(e="Done"),s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{className:"timer themed"+(this.state.running?" running":""),onClick:this.startTimer,ref:this.refTimer},e))}}]),t}(s.a.Component));t.a=d},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(137),o=n(6);t.default=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{color:o.c[e.id].color},o.c[e.id].name),r.a.createElement("main",null,r.a.createElement("p",null,r.a.createElement("em",null,"Who are the others who might replace the primary users of ",r.a.createElement("strong",null,"the playground"),"? Who else will be affected by the design? In what capacity? Consider both the individuals and the groups.")),r.a.createElement("p",null,"Here are some thought starters:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Who else can benefit?"),r.a.createElement("li",null,"Think about minority groups."),r.a.createElement("li",null,"Expand your target group beyond the obvious."))))}},56:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(134);t.default=function(e){var t=e.overview;return r.a.createElement(r.a.Fragment,null,r.a.createElement(t,{id:e.id}),r.a.createElement("main",null,r.a.createElement(l.a,{active:e.pageNbr,navRequested:e.getNextPage,color:e.color}),r.a.createElement("h1",null,"Design a writing utensil"),r.a.createElement("h2",null,"Consideration 1"),r.a.createElement("p",null,"What would a utensil look like for teachers? "),r.a.createElement("h2",null,"Consideration 2"),r.a.createElement("p",null,"How about Architects?"),r.a.createElement("h2",null,"Consideration 3"),r.a.createElement("p",null,"Or 5 year old children?")))}},57:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(134);t.default=function(e){var t=e.overview;return r.a.createElement(r.a.Fragment,null,r.a.createElement(t,{id:e.id}),r.a.createElement("main",null,r.a.createElement(l.a,{active:e.pageNbr,navRequested:e.getNextPage,color:e.color}),r.a.createElement("h1",null,"Design an event that educates on climate change"),r.a.createElement("h2",null,"Consideration 1"),r.a.createElement("p",null,"How to attract high school students to be engaged. "),r.a.createElement("h2",null,"Consideration 2"),r.a.createElement("p",null,"Encourage young families to attend."),r.a.createElement("h2",null,"Consideration 3"),r.a.createElement("p",null,"Invite CEOs of businesses")))}},58:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(134);t.default=function(e){var t=e.overview;return r.a.createElement(r.a.Fragment,null,r.a.createElement(t,{id:e.id}),r.a.createElement("main",null,r.a.createElement(l.a,{active:e.pageNbr,navRequested:e.getNextPage,color:e.color}),r.a.createElement("h1",null,"Design a camera when using on vacation"),r.a.createElement("h2",null,"Consideration 1"),r.a.createElement("p",null,"How could a teenager enjoy taking photos?"),r.a.createElement("h2",null,"Consideration 2"),r.a.createElement("p",null,"What about an eldery adult?"),r.a.createElement("h2",null,"Consideration 3"),r.a.createElement("p",null,"Or a professional photographer?")))}},59:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(8);t.default=function(e){return r.a.createElement("main",null,r.a.createElement("h1",null,"Problem Statement Part One"),r.a.createElement("div",{className:"ponderLayout"},r.a.createElement("section",null,r.a.createElement("p",null,"Now that you've learned about this strategy, please state a new problem statement by including information from this particular strategy. Enter as many additional problem statements as you can think of."),r.a.createElement("p",null,"\xa0"),r.a.createElement(l.a,{storageKey:"s".concat(e.id,"p").concat(e.pageNbr)})),r.a.createElement("section",null,r.a.createElement("h2",null,"Strategy:"),r.a.createElement("p",null,"Substitute the Primary Stakeholder with Another Stakeholder"),r.a.createElement("h2",null,"Scenario:"),r.a.createElement("p",null,"A city resident has recently donated a corner lot for a playground. You are an engineer who lives in the neighborhood, and you have been asked by the city to help with the project. Your task is to design playground equipment for the lot using locally sourced materials that are able to withstand outdoor conditions all year long."))))}},60:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(2),l=n(4),o=n(3),i=n(5),c=n(0),s=n.n(c),u=n(143),m=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(l.a)(this,Object(o.a)(t).call(this,e))).showCompletionMessage=function(){n.setState({timerIsDone:!0}),n.props.setBtnState({showNextBtn:!0})},n.state={timerIsDone:!1},e.setBtnState({showNextBtn:!1}),n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=s.a.createElement("p",{style:{textAlign:"center"}});return s.a.createElement("main",null,s.a.createElement("h1",{style:{marginBottom:"3em"}},"Solution Generation"),s.a.createElement("p",null,"Take 5 minutes to generate as many concepts as you can based on the new problem statements you previously generated."),s.a.createElement("p",{style:{margin:"2em",textAlign:"center"}},s.a.createElement(u.a,{minutes:5,onDing:this.showCompletionMessage})),this.state.timerIsDone&&e)}}]),t}(s.a.Component);t.default=m},61:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(8);t.default=function(e){return r.a.createElement("main",null,r.a.createElement("h1",null,"Problem Statement Part Two"),r.a.createElement("div",{className:"ponderLayout"},r.a.createElement("section",null,r.a.createElement("p",null,"Now that you've generated new concepts, generate a new problem statement based on your sketched ideas. Enter as many additional problem statements as you can think of."),r.a.createElement("p",null,"\xa0"),r.a.createElement(l.a,{storageKey:"s".concat(e.id,"p").concat(e.pageNbr)})),r.a.createElement("section",null,r.a.createElement("h2",null,"Strategy:"),r.a.createElement("p",null,"Substitute the Primary Stakeholder with Another Stakeholder"),r.a.createElement("h2",null,"Scenario:"),r.a.createElement("p",null,"A city resident has recently donated a corner lot for a playground. You are an engineer who lives in the neighborhood, and you have been asked by the city to help with the project. Your task is to design playground equipment for the lot using locally sourced materials that are able to withstand outdoor conditions all year long."))))}}}]);
//# sourceMappingURL=4.3f25da71.chunk.js.map