(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{136:function(e,t,n){"use strict";var a=n(1),r=n(2),i=n(4),l=n(3),o=n(5),c=n(0),u=n.n(c),s=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).handleClick=function(){n.props.navRequested(n.props.position)},n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.position,n=e.active,a=e.color,r="";return n&&(r+="active "),1===t&&(r+="pillFirst "),3===t&&(r+="pillLast "),u.a.createElement("button",{className:r||null,onClick:this.handleClick,style:{backgroundColor:a}},t)}}]),t}(u.a.Component),p=(n(137),function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.active,n=e.navRequested,a=e.color;return u.a.createElement("div",{className:"pillNavigation"},u.a.createElement(s,{position:1,active:1===t,navRequested:n,color:a}),u.a.createElement(s,{position:2,active:2===t,navRequested:n,color:a}),u.a.createElement(s,{position:3,active:3===t,navRequested:n,color:a}))}}]),t}(u.a.Component));t.a=p},137:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(136);t.default=function(e){var t=e.overview;return r.a.createElement(r.a.Fragment,null,r.a.createElement(t,{id:e.id}),r.a.createElement("main",null,r.a.createElement(i.a,{active:e.pageNbr,navRequested:e.getNextPage,color:e.color}),r.a.createElement("h2",null,'For example, if the scenario were to "Design an electronic reading device", you might think about...'),r.a.createElement("h3",null,"Interaction at home"),r.a.createElement("p",null,"How will the user easily read in bed"),r.a.createElement("h3",null,"Interaction in environment"),r.a.createElement("p",null,"Reading in daylight"),r.a.createElement("h3",null,"Interaction on platform"),r.a.createElement("p",null,"How will the user buy/rent books?")))}}}]);
//# sourceMappingURL=76.5a868d4e.chunk.js.map