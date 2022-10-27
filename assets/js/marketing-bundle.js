!function(){"use strict";function e(){if(!(this instanceof e))return new e;this.size=0,this.uid=0,this.selectors=[],this.selectorObjects={},this.indexes=Object.create(this.indexes),this.activeIndexes=[]}var t=window.document.documentElement,n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.msMatchesSelector;e.prototype.matchesSelector=function(e,t){return n.call(e,t)},e.prototype.querySelectorAll=function(e,t){return t.querySelectorAll(e)},e.prototype.indexes=[];var r=/^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;e.prototype.indexes.push({name:"ID",selector:function(e){var t;if(t=e.match(r))return t[0].slice(1)},element:function(e){if(e.id)return[e.id]}});var o=/^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;e.prototype.indexes.push({name:"CLASS",selector:function(e){var t;if(t=e.match(o))return t[0].slice(1)},element:function(e){var t=e.className;if(t){if("string"==typeof t)return t.split(/\s/);if("object"==typeof t&&"baseVal"in t)return t.baseVal.split(/\s/)}}});var i,s=/^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;e.prototype.indexes.push({name:"TAG",selector:function(e){var t;if(t=e.match(s))return t[0].toUpperCase()},element:function(e){return[e.nodeName.toUpperCase()]}}),e.prototype.indexes.default={name:"UNIVERSAL",selector:function(){return!0},element:function(){return[!0]}},i="function"==typeof window.Map?window.Map:function(){function e(){this.map={}}return e.prototype.get=function(e){return this.map[e+" "]},e.prototype.set=function(e,t){this.map[e+" "]=t},e}();var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;function c(e,t){var n,r,o,i,s,c,l=(e=e.slice(0).concat(e.default)).length,u=t,d=[];do{if(a.exec(""),(o=a.exec(u))&&(u=o[3],o[2]||!u))for(n=0;n<l;n++)if(s=(c=e[n]).selector(o[1])){for(r=d.length,i=!1;r--;)if(d[r].index===c&&d[r].key===s){i=!0;break}i||d.push({index:c,key:s});break}}while(o);return d}function l(e,t){var n,r,o;for(n=0,r=e.length;n<r;n++)if(o=e[n],t.isPrototypeOf(o))return o}function u(e,t){return e.id-t.id}e.prototype.logDefaultIndexUsed=function(){},e.prototype.add=function(e,t){var n,r,o,s,a,u,d,f,h=this.activeIndexes,v=this.selectors,p=this.selectorObjects;if("string"==typeof e){for(p[(n={id:this.uid++,selector:e,data:t}).id]=n,d=c(this.indexes,e),r=0;r<d.length;r++)s=(f=d[r]).key,(a=l(h,o=f.index))||((a=Object.create(o)).map=new i,h.push(a)),o===this.indexes.default&&this.logDefaultIndexUsed(n),(u=a.map.get(s))||(u=[],a.map.set(s,u)),u.push(n);this.size++,v.push(e)}},e.prototype.remove=function(e,t){if("string"==typeof e){var n,r,o,i,s,a,l,u,d=this.activeIndexes,f=this.selectors=[],h=this.selectorObjects,v={},p=1===arguments.length;for(n=c(this.indexes,e),o=0;o<n.length;o++)for(r=n[o],i=d.length;i--;)if(a=d[i],r.index.isPrototypeOf(a)){if(l=a.map.get(r.key))for(s=l.length;s--;)(u=l[s]).selector!==e||!p&&u.data!==t||(l.splice(s,1),v[u.id]=!0);break}for(o in v)delete h[o],this.size--;for(o in h)f.push(h[o].selector)}},e.prototype.queryAll=function(e){if(!this.selectors.length)return[];var t,n,r,o,i,s,a,c,l={},d=[],f=this.querySelectorAll(this.selectors.join(", "),e);for(t=0,r=f.length;t<r;t++)for(i=f[t],n=0,o=(s=this.matches(i)).length;n<o;n++)l[(c=s[n]).id]?a=l[c.id]:(a={id:c.id,selector:c.selector,data:c.data,elements:[]},l[c.id]=a,d.push(a)),a.elements.push(i);return d.sort(u)},e.prototype.matches=function(e){if(!e)return[];var t,n,r,o,i,s,a,c,l,d,f,h=this.activeIndexes,v={},p=[];for(t=0,o=h.length;t<o;t++)if(c=(a=h[t]).element(e))for(n=0,i=c.length;n<i;n++)if(l=a.map.get(c[n]))for(r=0,s=l.length;r<s;r++)!v[f=(d=l[r]).id]&&this.matchesSelector(e,d.selector)&&(v[f]=!0,p.push(d));return p.sort(u)};var d={},f={},h=new WeakMap,v=new WeakMap,p=new WeakMap,m=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function b(e,t,n){var r=e[t];return e[t]=function(){return n.apply(e,arguments),r.apply(e,arguments)},e}function g(){h.set(this,!0)}function y(){h.set(this,!0),v.set(this,!0)}function w(){return p.get(this)||null}function S(e,t){m&&Object.defineProperty(e,"currentTarget",{configurable:!0,enumerable:!0,get:t||m.get})}function x(e){if(function(e){try{return e.eventPhase,!0}catch(e){return!1}}(e)){var t=(1===e.eventPhase?f:d)[e.type];if(t){var n=function(e,t,n){var r=[],o=t;do{if(1!==o.nodeType)break;var i=e.matches(o);if(i.length){var s={node:o,observers:i};n?r.unshift(s):r.push(s)}}while(o=o.parentElement);return r}(t,e.target,1===e.eventPhase);if(n.length){b(e,"stopPropagation",g),b(e,"stopImmediatePropagation",y),S(e,w);for(var r=0,o=n.length;r<o&&!h.get(e);r++){var i=n[r];p.set(e,i.node);for(var s=0,a=i.observers.length;s<a&&!v.get(e);s++)i.observers[s].data.call(i.node,e)}p.delete(e),S(e)}}}}
/*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
function A(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))}!function(t,n,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=!!o.capture,s=i?f:d,a=s[t];a||(a=new e,s[t]=a,document.addEventListener(t,x,i)),a.add(n,r)}("click",".js-unveil",(function(e){e.preventDefault();const t=e.currentTarget,n=t.closest(".js-unveil-items");if(!n)return;t.remove();const r=n.querySelectorAll(".js-unveil-item:not(.unveil-item-visible)");for(const e of r)e.classList.add("unveil-item-visible"),e.removeAttribute("hidden");if(!document.body.classList.contains("intent-mouse")&&r.length){const e=r[0],t=e.hasAttribute("tabindex")||"A"===e.tagName||"BUTTON"===e.tagName?e:e.querySelector("[tabindex], a, button");null==t||t.focus()}}));var j=null,O=null,_=[];function M(e,t){var n=[];function r(){var e=n;n=[],t(e)}return function(){for(var t=arguments.length,o=Array(t),i=0;i<t;i++)o[i]=arguments[i];n.push(o),1===n.length&&k(e,r)}}function k(e,t){O||(O=new MutationObserver(D)),j||(j=e.createElement("div"),O.observe(j,{attributes:!0})),_.push(t),j.setAttribute("data-twiddle",""+Date.now())}function D(){var e=_;_=[];for(var t=0;t<e.length;t++)try{e[t]()}catch(e){setTimeout((function(){throw e}),0)}}var N=new WeakMap,T=new WeakMap,q=new WeakMap,C=new WeakMap;function E(e,t){for(var n=0;n<t.length;n++){var r=t[n],o=r[0],i=r[1],s=r[2];o===W?(L(s,i),F(s,i)):o===R?P(s,i):o===V&&z(e.observers,i)}}function L(e,t){if(t instanceof e.elementConstructor){var n=N.get(t);if(n||(n=[],N.set(t,n)),-1===n.indexOf(e.id)){var r=void 0;if(e.initialize&&(r=e.initialize.call(void 0,t)),r){var o=T.get(t);o||(o={},T.set(t,o)),o[""+e.id]=r}n.push(e.id)}}}function F(e,t){if(t instanceof e.elementConstructor){var n=C.get(t);if(n||(n=[],C.set(t,n)),-1===n.indexOf(e.id)){e.elements.push(t);var r=T.get(t),o=r?r[""+e.id]:null;if(o&&o.add&&o.add.call(void 0,t),e.subscribe){var i=e.subscribe.call(void 0,t);if(i){var s=q.get(t);s||(s={},q.set(t,s)),s[""+e.id]=i}}e.add&&e.add.call(void 0,t),n.push(e.id)}}}function P(e,t){if(t instanceof e.elementConstructor){var n=C.get(t);if(n){var r=e.elements.indexOf(t);if(-1!==r&&e.elements.splice(r,1),-1!==(r=n.indexOf(e.id))){var o=T.get(t),i=o?o[""+e.id]:null;if(i&&i.remove&&i.remove.call(void 0,t),e.subscribe){var s=q.get(t),a=s?s[""+e.id]:null;a&&a.unsubscribe&&a.unsubscribe()}e.remove&&e.remove.call(void 0,t),n.splice(r,1)}0===n.length&&C.delete(t)}}}function z(e,t){var n=C.get(t);if(n){for(var r=n.slice(0),o=0;o<r.length;o++){var i=e[r[o]];if(i){var s=i.elements.indexOf(t);-1!==s&&i.elements.splice(s,1);var a=T.get(t),c=a?a[""+i.id]:null;c&&c.remove&&c.remove.call(void 0,t);var l=q.get(t),u=l?l[""+i.id]:null;u&&u.unsubscribe&&u.unsubscribe(),i.remove&&i.remove.call(void 0,t)}}C.delete(t)}}var I=null;function U(e){return"matches"in e||"webkitMatchesSelector"in e||"mozMatchesSelector"in e||"oMatchesSelector"in e||"msMatchesSelector"in e}var W=1,R=2,V=3;function B(e,t,n){for(var r=0;r<n.length;r++){var o=n[r];"childList"===o.type?(G(e,t,o.addedNodes),H(e,t,o.removedNodes)):"attributes"===o.type&&Z(e,t,o.target)}(function(e){if(null===I){var t=e.createElement("div"),n=e.createElement("div"),r=e.createElement("div");t.appendChild(n),n.appendChild(r),t.innerHTML="",I=r.parentNode!==n}return I})(e.ownerDocument)&&function(e,t){for(var n=0;n<e.observers.length;n++){var r=e.observers[n];if(r)for(var o=r.elements,i=0;i<o.length;i++){var s=o[i];s.parentNode||t.push([V,s])}}}(e,t)}function G(e,t,n){for(var r=0;r<n.length;r++){var o=n[r];if(U(o))for(var i=e.selectorSet.matches(o),s=0;s<i.length;s++){var a=i[s].data;t.push([W,o,a])}if("querySelectorAll"in o)for(var c=e.selectorSet.queryAll(o),l=0;l<c.length;l++)for(var u=c[l],d=u.data,f=u.elements,h=0;h<f.length;h++)t.push([W,f[h],d])}}function H(e,t,n){for(var r=0;r<n.length;r++){var o=n[r];if("querySelectorAll"in o){t.push([V,o]);for(var i=o.querySelectorAll("*"),s=0;s<i.length;s++)t.push([V,i[s]])}}}function Z(e,t,n){if(U(n))for(var r=e.selectorSet.matches(n),o=0;o<r.length;o++){var i=r[o].data;t.push([W,n,i])}if("querySelectorAll"in n){var s=C.get(n);if(s)for(var a=0;a<s.length;a++){var c=e.observers[s[a]];c&&(e.selectorSet.matchesSelector(n,c.selector)||t.push([R,n,c]))}}}var J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K=0;function Q(t){this.rootNode=9===t.nodeType?t.documentElement:t,this.ownerDocument=9===t.nodeType?t:t.ownerDocument,this.observers=[],this.selectorSet=new e,this.mutationObserver=new MutationObserver($.bind(this,this)),this._scheduleAddRootNodes=M(this.ownerDocument,Y.bind(this,this)),this._handleThrottledChangedTargets=M(this.ownerDocument,te.bind(this,this)),this.rootNode.addEventListener("change",ee.bind(this,this),!1),function(e,t){var n=e.readyState;"interactive"===n||"complete"===n?k(e,t):e.addEventListener("DOMContentLoaded",k(e,t))}(this.ownerDocument,X.bind(this,this))}function X(e){e.mutationObserver.observe(e.rootNode,{childList:!0,attributes:!0,subtree:!0}),e._scheduleAddRootNodes()}function Y(e){var t=[];G(e,t,[e.rootNode]),E(e,t)}function $(e,t){var n=[];B(e,n,t),E(e,n)}function ee(e,t){e._handleThrottledChangedTargets(t.target)}function te(e,t){var n=[];!function(e,t,n){for(var r=0;r<n.length;r++)for(var o=n[r],i=o.form?o.form.elements:e.rootNode.querySelectorAll("input"),s=0;s<i.length;s++)Z(e,t,i[s])}(e,n,t),E(e,n)}Q.prototype.disconnect=function(){this.mutationObserver.disconnect()},Q.prototype.observe=function(e,t){var n=void 0;"function"==typeof t?n={selector:e,initialize:t}:"object"===(void 0===t?"undefined":J(t))?(n=t).selector=e:n=e;var r=this,o={id:K++,selector:n.selector,initialize:n.initialize,add:n.add,remove:n.remove,subscribe:n.subscribe,elements:[],elementConstructor:n.hasOwnProperty("constructor")?n.constructor:this.ownerDocument.defaultView.Element,abort:function(){r._abortObserving(o)}};return this.selectorSet.add(o.selector,o),this.observers[o.id]=o,this._scheduleAddRootNodes(),o},Q.prototype._abortObserving=function(e){for(var t=e.elements,n=0;n<t.length;n++)P(e,t[n]);this.selectorSet.remove(e.selector,e),delete this.observers[e.id]},Q.prototype.triggerObservers=function(e){var t=[];!function(e,t,n){if("querySelectorAll"in n){Z(e,t,n);for(var r=n.querySelectorAll("*"),o=0;o<r.length;o++)Z(e,t,r[o])}}(this,t,e),E(this,t)};var ne=void 0;function re(){return ne||(ne=new Q(window.document)),ne}function oe(e){return A(this,void 0,void 0,(function*(){return(yield fetch(e)).json()}))}function ie(e,t){const n=e.date_published_object||new Date(e.date_published),r=t.date_published_object||new Date(t.date_published),o=n.getTime(),i=r.getTime();return e.date_published_object=n,t.date_published_object=r,o<i?1:o>i?-1:0}function se(e,t){const n=e.querySelectorAll("[data-json-feed-item-bind]");for(let e=0;e<n.length;e++){const r=n[e],o=r.getAttribute("data-json-feed-item-bind");if("url"!==o)if("date_published"!==o)"title"!==o&&"summary"!==o&&"content_html"!==o||(r.textContent=t[o]||"");else{const e=t.date_published_object||new Date(t.date_published);r.textContent=e.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric",timeZone:"UTC"})}else r.setAttribute("href",t[o])}e.classList.remove("v-hidden")}function ae(e){var t;return A(this,void 0,void 0,(function*(){const n=e.querySelectorAll(".js-json-feed-item"),r=null===(t=null==e?void 0:e.getAttribute("data-json-feed-sources"))||void 0===t?void 0:t.replace(/\s+/g,"").split(",");if(!n||!r)return;const o=yield function(e,t){return A(this,void 0,void 0,(function*(){const n=[];for(let t=0;t<e.length;t++)n.push(oe(e[t]));let r=[];try{r=yield Promise.all(n)}catch(e){return r}return function(e){let t=[];for(let n=0;n<e.length;n++){const r=e[n];t=t.concat(r.items)}return t}(r).sort(ie).slice(0,t)}))}(r,n.length);o.length?function(e,t){for(let n=0;n<e.length;n++){const r=e[n];n>=t.length?r.remove():se(r,t[n])}}(n,o):e.remove()}))}!function(){var e;(e=re()).observe.apply(e,arguments)}(".js-json-feed-items",(e=>{ae(e)}))}();
