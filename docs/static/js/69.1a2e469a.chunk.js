(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{134:function(e,t,n){"use strict";var a=n(1),i=n(2),r=n(4),o=n(3),c=n(5),l=n(0),s=n.n(l),u=function(e){function t(){var e,n;Object(a.a)(this,t);for(var i=arguments.length,c=new Array(i),l=0;l<i;l++)c[l]=arguments[l];return(n=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).handleClick=function(){n.props.navRequested(n.props.position)},n}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.position,n=e.active,a=e.color,i="";return n&&(i+="active "),1===t&&(i+="pillFirst "),3===t&&(i+="pillLast "),s.a.createElement("button",{className:i||null,onClick:this.handleClick,style:{backgroundColor:a}},t)}}]),t}(s.a.Component),p=(n(135),function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.active,n=e.navRequested,a=e.color;return s.a.createElement("div",{className:"pillNavigation"},s.a.createElement(u,{position:1,active:1===t,navRequested:n,color:a}),s.a.createElement(u,{position:2,active:2===t,navRequested:n,color:a}),s.a.createElement(u,{position:3,active:3===t,navRequested:n,color:a}))}}]),t}(s.a.Component));t.a=p},135:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(134);t.default=function(e){var t=e.overview;return i.a.createElement(i.a.Fragment,null,i.a.createElement(t,{id:e.id}),i.a.createElement("main",null,i.a.createElement(r.a,{active:e.pageNbr,navRequested:e.getNextPage,color:e.color}),i.a.createElement("h1",null,"Design a product that provides telecommunication across long distances"),i.a.createElement("h2",null,"Consideration 1"),i.a.createElement("p",null,"Providing internet in disaster relief areas"),i.a.createElement("h2",null,"Consideration 2"),i.a.createElement("p",null,"Located in warzones"),i.a.createElement("h2",null,"Consideration 3"),i.a.createElement("p",null,"Low-income communities")))}}}]);
//# sourceMappingURL=69.1a2e469a.chunk.js.map