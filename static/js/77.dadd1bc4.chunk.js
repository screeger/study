(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{136:function(e,t,a){"use strict";var n=a(1),l=a(2),i=a(4),o=a(3),c=a(5),r=a(0),s=a.n(r),u=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).handleClick=function(){a.props.navRequested(a.props.position)},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.position,a=e.active,n=e.color,l="";return a&&(l+="active "),1===t&&(l+="pillFirst "),3===t&&(l+="pillLast "),s.a.createElement("button",{className:l||null,onClick:this.handleClick,style:{backgroundColor:n}},t)}}]),t}(s.a.Component),p=(a(137),function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.active,a=e.navRequested,n=e.color;return s.a.createElement("div",{className:"pillNavigation"},s.a.createElement(u,{position:1,active:1===t,navRequested:a,color:n}),s.a.createElement(u,{position:2,active:2===t,navRequested:a,color:n}),s.a.createElement(u,{position:3,active:3===t,navRequested:a,color:n}))}}]),t}(s.a.Component));t.a=p},137:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(136);t.default=function(e){var t=e.overview;return l.a.createElement(l.a.Fragment,null,l.a.createElement(t,{id:e.id}),l.a.createElement("main",null,l.a.createElement(i.a,{active:e.pageNbr,navRequested:e.getNextPage,color:e.color}),l.a.createElement("h2",null,'Now let\'s consider, "Design a kid-friendly toy"'),l.a.createElement("h3",null,"Interaction psychologically"),l.a.createElement("p",null,"How does it help the kid learn?"),l.a.createElement("h3",null,"Interaction psychologically"),l.a.createElement("p",null,"Is is suitable for their cognitive abilities?"),l.a.createElement("h3",null,"Emotional interaction"),l.a.createElement("p",null,"Is it safe but fun for the kid to use?")))}}}]);
//# sourceMappingURL=77.dadd1bc4.chunk.js.map