(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(134);t.default=function(e){var t=e.overview;return o.a.createElement(o.a.Fragment,null,o.a.createElement(t,{id:e.id}),o.a.createElement("main",null,o.a.createElement(r.a,{active:e.pageNbr,navRequested:e.getNextPage,color:e.color}),o.a.createElement("h1",null,"Design a dog travel crate"),o.a.createElement("h2",null,"Consideration 1"),o.a.createElement("p",null,"Keep the dog safe and comfortable "),o.a.createElement("h2",null,"Consideration 2"),o.a.createElement("p",null,"Avoid the dog from escaping"),o.a.createElement("h2",null,"Consideration 3"),o.a.createElement("p",null,"Safely transport dog from point A to B")))}},134:function(e,t,a){"use strict";var n=a(1),o=a(2),r=a(4),l=a(3),c=a(5),i=a(0),s=a.n(i),u=function(e){function t(){var e,a;Object(n.a)(this,t);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).handleClick=function(){a.props.navRequested(a.props.position)},a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.position,a=e.active,n=e.color,o="";return a&&(o+="active "),1===t&&(o+="pillFirst "),3===t&&(o+="pillLast "),s.a.createElement("button",{className:o||null,onClick:this.handleClick,style:{backgroundColor:n}},t)}}]),t}(s.a.Component),p=(a(135),function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.active,a=e.navRequested,n=e.color;return s.a.createElement("div",{className:"pillNavigation"},s.a.createElement(u,{position:1,active:1===t,navRequested:a,color:n}),s.a.createElement(u,{position:2,active:2===t,navRequested:a,color:n}),s.a.createElement(u,{position:3,active:3===t,navRequested:a,color:n}))}}]),t}(s.a.Component));t.a=p},135:function(e,t,a){}}]);
//# sourceMappingURL=85.eaaa6456.chunk.js.map