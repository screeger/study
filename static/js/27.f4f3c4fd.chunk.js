(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{136:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(4),i=a(3),l=a(5),c=a(0),s=a.n(c),u=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).handleClick=function(){a.props.navRequested(a.props.position)},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.position,a=e.active,n=e.color,r="";return a&&(r+="active "),1===t&&(r+="pillFirst "),3===t&&(r+="pillLast "),s.a.createElement("button",{className:r||null,onClick:this.handleClick,style:{backgroundColor:n}},t)}}]),t}(s.a.Component),p=(a(137),function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.active,a=e.navRequested,n=e.color;return s.a.createElement("div",{className:"pillNavigation"},s.a.createElement(u,{position:1,active:1===t,navRequested:a,color:n}),s.a.createElement(u,{position:2,active:2===t,navRequested:a,color:n}),s.a.createElement(u,{position:3,active:3===t,navRequested:a,color:n}))}}]),t}(s.a.Component));t.a=p},137:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(136);t.default=function(e){var t=e.overview;return r.a.createElement(r.a.Fragment,null,r.a.createElement(t,{id:e.id}),r.a.createElement("main",null,r.a.createElement(o.a,{active:e.pageNbr,navRequested:e.getNextPage,color:e.color}),r.a.createElement("h2",null,'For example, if the scenario were to "Design a coffee mug", you might think about...'),r.a.createElement("h3",null,"Can it be on-the-go?"),r.a.createElement("p",null,"Transport to work"),r.a.createElement("h3",null,"Is it adjustable?"),r.a.createElement("p",null,"Aid in car transportation"),r.a.createElement("h3",null,"Does it inspire movement?"),r.a.createElement("p",null,"Fitness classes")))}}}]);
//# sourceMappingURL=27.f4f3c4fd.chunk.js.map