(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{136:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(4),l=n(3),c=n(5),i=n(0),s=n.n(i),u=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).handleClick=function(){n.props.navRequested(n.props.position)},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.position,n=e.active,a=e.color,r="";return n&&(r+="active "),1===t&&(r+="pillFirst "),3===t&&(r+="pillLast "),s.a.createElement("button",{className:r||null,onClick:this.handleClick,style:{backgroundColor:a}},t)}}]),t}(s.a.Component),p=(n(137),function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.active,n=e.navRequested,a=e.color;return s.a.createElement("div",{className:"pillNavigation"},s.a.createElement(u,{position:1,active:1===t,navRequested:n,color:a}),s.a.createElement(u,{position:2,active:2===t,navRequested:n,color:a}),s.a.createElement(u,{position:3,active:3===t,navRequested:n,color:a}))}}]),t}(s.a.Component));t.a=p},137:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(136);t.default=function(e){var t=e.overview;return r.a.createElement(r.a.Fragment,null,r.a.createElement(t,{id:e.id}),r.a.createElement("main",null,r.a.createElement(o.a,{active:e.pageNbr,navRequested:e.getNextPage,color:e.color}),r.a.createElement("h2",null,'Now let\'s consider, "Design an online forum"'),r.a.createElement("h3",null,"Describe the problem you're solving for"),r.a.createElement("p",null,"No support from colleagues"),r.a.createElement("h3",null,"Describe the problem you're solving for"),r.a.createElement("p",null,"Can't find like-minded people"),r.a.createElement("h3",null,"Describe the problem you're solving for"),r.a.createElement("p",null,"Lack of inspiration")))}}}]);
//# sourceMappingURL=21.1e3d60c6.chunk.js.map