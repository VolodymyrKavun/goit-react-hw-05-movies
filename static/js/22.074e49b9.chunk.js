"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[22],{6439:function(e,t,n){n.d(t,{Df:function(){return d},RH:function(){return m},cA:function(){return h},cQ:function(){return i},tD:function(){return l}});var r=n(5861),a=n(4687),c=n.n(a),u=n(4569),s=n.n(u),o="1c4a98afb2f80cbf9a0f0f59d5b0ab2a";function i(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("trending/movie/day?api_key=".concat(o));case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("search/movie?api_key=".concat(o,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("movie/".concat(t,"?api_key=").concat(o));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function d(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function m(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}s().defaults.baseURL="https://api.themoviedb.org/3/"},2022:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(5861),a=n(8152),c=n(4687),u=n.n(c),s=n(2791),o=n(6871),i=n(6439),p=n(184),l=function(e){var t=e.reviews;return(0,p.jsx)("div",{children:(0,p.jsx)("ul",{children:t.map((function(e){var t=e.id,n=e.author,r=e.content,a=e.updated_at;return(0,p.jsxs)("li",{children:[(0,p.jsxs)("h3",{children:["Author: ",n]}),(0,p.jsx)("p",{children:r}),(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Date:"})," ",a]})]},t)}))})})},f=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],f=(0,o.UO)().movieId;return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.RH)(f);case 3:t=e.sent,n=t.results,c(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[f]),(0,p.jsx)(p.Fragment,{children:0===n.length?"We don`t have any Reviews for this movie":(0,p.jsx)(l,{reviews:n})})}}}]);
//# sourceMappingURL=22.074e49b9.chunk.js.map