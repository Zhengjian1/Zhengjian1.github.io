(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(25),s=n.n(o),r=(n(49),n(50),n(61)),i=n(9),l=n(10),u=n(17),f=n(14),d=(n(51),n(60)),h=function(){function e(){Object(i.a)(this,e),this.events={}}return Object(l.a)(e,[{key:"on",value:function(e,t){var n=this;return this.events[e]||(this.events[e]=[]),this.events[e].push(t),function(){n.off(e,t)}}},{key:"off",value:function(e,t){this.events[e]&&(this.events[e]="undefined"===typeof t?[]:this.events[e].filter((function(e){return t!==e})))}},{key:"trigger",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),c=1;c<t;c++)n[c-1]=arguments[c];this.events[e]&&this.events[e].forEach((function(e){return e.apply(void 0,n)}))}}]),e}(),j=new h,p=new h,v=new h,y=n(4),b=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).handleCancel=function(){j.trigger("cacel")},e.handleReset=function(){p.trigger("reset")},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(y.jsxs)("div",{className:"action",children:[Object(y.jsx)(d.a,{type:"default",className:"reset",onClick:this.handleCancel,children:"\u64a4\u9500"}),Object(y.jsx)(d.a,{type:"default",onClick:this.handleReset,children:"\u91cd\u505a"})]})}}]),n}(a.a.Component),g=n(62),m=n(63),O=(n(54),n(55),{}),x=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){j.on("cacel",this.cancel),p.on("reset",this.reset),this.drag()}},{key:"drag",value:function(){var e,t,n,c,a,o,s,r=!1,i=!0;function l(i){r&&(o=i.pageX||i.clientX+document.body.scrollLeft,s=i.pageY||i.clientY+document.body.scrollTop,v.trigger("msg",{ox:t+o-c,oy:n+s-a}),e.style.left=t+o-c+"px",e.style.top=n+s-a+"px")}function u(c){r=!1,t=parseInt(e.offsetLeft),n=parseInt(e.offsetTop),O.data.push({ox:t,oy:n}),console.log(O),document.onmousemove=document.onmouseup=null}document.onmousedown=function(o){o.stopPropagation(),"drag"===(e=o.target).id&&(r=!0,t=parseInt(e.offsetLeft),n=parseInt(e.offsetTop),i&&(O={o:e,data:[{ox:t,oy:n}]},i=!1),c=o.pageX||o.clientX+document.body.scrollLeft,a=o.pageY||o.clientY+document.body.scrollTop,e.onmousemove=l,e.onmouseup=u)}}},{key:"cancel",value:function(){var e=O,t=e.o,n=e.data,c=[];1===n.length?(alert("\u5df2\u7ecf\u5230\u5934\u4e86"),c=n):c=n.slice(0,n.length-1),O.data=c;var a=c[c.length-1],o=a.ox,s=a.oy;v.trigger("msg",{ox:o,oy:s}),t.style.left=o+"px",t.style.top=s+"px"}},{key:"reset",value:function(){var e=O,t=e.o,n=e.data;if(1!==n.length){var c=n[0],a=c.ox,o=c.oy;v.trigger("msg",{ox:a,oy:o}),O.data=[n[0]],t.style.left=a+"px",t.style.top=o+"px"}else alert("\u5df2\u7ecf\u91cd\u7f6e\u4e86")}},{key:"render",value:function(){return Object(y.jsx)("div",{className:"left_com",children:Object(y.jsx)("div",{className:"rectangle_1",id:"drag",children:"\u77e9\u5f621"})})}}]),n}(a.a.Component),k=(n(56),function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){v.on("msg",this.async)}},{key:"async",value:function(e){var t=document.getElementsByClassName("rectangle_ansyc_1")[0],n=e.ox,c=e.oy;t.style.left=n+"px",t.style.top=c+"px"}},{key:"render",value:function(){return Object(y.jsx)("div",{className:"right_com",children:Object(y.jsx)("div",{className:"rectangle_ansyc_1",children:"\u77e9\u5f621"})})}}]),n}(a.a.Component)),C=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(y.jsx)("div",{className:"main",children:Object(y.jsxs)(g.a,{children:[Object(y.jsx)(m.a,{span:12,className:"left",children:Object(y.jsx)(x,{})}),Object(y.jsx)(m.a,{span:12,className:"right",children:Object(y.jsx)(k,{})})]})})}}]),n}(a.a.Component),N=r.a.Header,w=r.a.Content;var _=function(){return Object(y.jsx)("div",{className:"app",children:Object(y.jsxs)(r.a,{children:[Object(y.jsx)(N,{children:"Header"}),Object(y.jsxs)(w,{children:[Object(y.jsx)(b,{}),Object(y.jsx)(C,{})]})]})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),o(e),s(e)}))};s.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(_,{})}),document.getElementById("root")),I()}},[[57,1,2]]]);
//# sourceMappingURL=main.30829726.chunk.js.map