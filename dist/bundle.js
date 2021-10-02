(()=>{"use strict";const e={};function t(t){e.context=t}const n=(Symbol("solid-proxy"),{equals:(e,t)=>e===t});let o=M;const r={},s={owned:null,cleanups:null,context:null,owner:null},[l,i]=g(!1);var u=null;let f=null,c=null,a=null,d=null,p=null,h=0;function g(e,t){t=t?Object.assign({},n,t):n;const o={value:e,observers:null,observerSlots:null,pending:r,comparator:t.equals||void 0};return[x.bind(o),e=>("function"==typeof e&&(e=f&&f.running&&f.sources.has(o)?e(o.pending!==r?o.pending:o.tValue):e(o.pending!==r?o.pending:o.value)),C(o,e))]}function v(e,t,n){A(N(e,t,!1,1))}function m(e,t,n){o=B;const r=N(e,t,!1,1);r.user=!0,p&&p.push(r)}function y(e,t,o){o=o?Object.assign({},n,o):n;const s=N(e,t,!0,0);return s.pending=r,s.observers=null,s.observerSlots=null,s.comparator=o.equals||void 0,A(s),x.bind(s)}function b(e){if(a)return e();let t;const n=a=[];try{t=e()}finally{a=null}return k((()=>{for(let e=0;e<n.length;e+=1){const t=n[e];if(t.pending!==r){const e=t.pending;t.pending=r,C(t,e)}}}),!1),t}function S(e){let t,n=c;return c=null,t=e(),c=n,t}function w(e){const t=y(e);return y((()=>D(t())))}function x(){if(this.state&&this.sources){const e=d;d=null,1===this.state||f&&f.running&&this.tState?A(this):E(this),d=e}if(c){const e=this.observers?this.observers.length:0;c.sources?(c.sources.push(this),c.sourceSlots.push(e)):(c.sources=[this],c.sourceSlots=[e]),this.observers?(this.observers.push(c),this.observerSlots.push(c.sources.length-1)):(this.observers=[c],this.observerSlots=[c.sources.length-1])}return f&&f.running&&f.sources.has(this)?this.tValue:this.value}function C(e,t,n){if(e.comparator)if(f&&f.running&&f.sources.has(e)){if(e.comparator(e.tValue,t))return t}else if(e.comparator(e.value,t))return t;if(a)return e.pending===r&&a.push(e),e.pending=t,t;let o=!1;return f?(o=f.running,(o||!n&&f.sources.has(e))&&(f.sources.add(e),e.tValue=t),o||(e.value=t)):e.value=t,e.observers&&e.observers.length&&k((()=>{for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];o&&f.disposed.has(n)||(n.pure?d.push(n):p.push(n),n.observers&&(o&&!n.tState||!o&&!n.state)&&L(n),o?n.tState=1:n.state=1)}if(d.length>1e6)throw d=[],new Error}),!1),t}function A(e){if(!e.fn)return;V(e);const t=u,n=c,o=h;c=u=e,O(e,e.value,o),f&&!f.running&&f.sources.has(e)&&(f.running=!0,O(e,e.tValue,o),f.running=!1),c=n,u=t}function O(e,t,n){let o;try{o=e.fn(t)}catch(e){G(e)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?C(e,o,!0):f&&f.running&&e.pure?(f.sources.add(e),e.tValue=o):e.value=o,e.updatedAt=n)}function N(e,t,n,o=1,r){const l={fn:e,state:o,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:u,context:null,pure:n};return f&&f.running&&(l.state=0,l.tState=o),null===u||u!==s&&(f&&f.running&&u.pure?u.tOwned?u.tOwned.push(l):u.tOwned=[l]:u.owned?u.owned.push(l):u.owned=[l]),l}function T(e){const t=f&&f.running;if(!t&&1!==e.state)return e.state=0;if(t&&1!==e.tState)return e.tState=0;if(e.suspense&&S(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<h);){if(t&&f.disposed.has(e))return;(e.state||t&&e.tState)&&n.push(e)}for(let o=n.length-1;o>=0;o--){if(e=n[o],t){let t=e,r=n[o+1];for(;(t=t.owner)&&t!==r;)if(f.disposed.has(t))return}if(1===e.state||t&&1===e.tState)A(e);else if(2===e.state||t&&2===e.tState){const t=d;d=null,E(e),d=t}}}function k(e,t){if(d)return e();let n=!1;t||(d=[]),p?n=!0:p=[],h++;try{e()}catch(e){G(e)}finally{!function(e){if(d&&(M(d),d=null),e)return;let t;if(f&&f.running){if(f.promises.size||f.queue.size)return f.running=!1,f.effects.push.apply(f.effects,p),p=null,void i(!0);const e=f.sources;t=f.cb,p.forEach((e=>{"tState"in e&&(e.state=e.tState),delete e.tState})),f=null,b((()=>{e.forEach((e=>{if(e.value=e.tValue,e.owned)for(let t=0,n=e.owned.length;t<n;t++)V(e.owned[t]);e.tOwned&&(e.owned=e.tOwned),delete e.tValue,delete e.tOwned,e.tState=0})),i(!1)}))}p.length?b((()=>{o(p),p=null})):p=null,t&&t.forEach((e=>e()))}(n)}}function M(e){for(let t=0;t<e.length;t++)T(e[t])}function B(e){let t,n=0;for(t=0;t<e.length;t++){const o=e[t];o.user?e[n++]=o:T(o)}const o=e.length;for(t=0;t<n;t++)T(e[t]);for(t=o;t<e.length;t++)T(e[t])}function E(e){e.state=0;for(let t=0;t<e.sources.length;t+=1){const n=e.sources[t];n.sources&&(1===n.state||f&&f.running&&n.tState?T(n):2===n.state&&E(n))}}function L(e){const t=f&&f.running;for(let n=0;n<e.observers.length;n+=1){const o=e.observers[n];(!o.state||t&&!o.tState)&&(t?o.tState=2:o.state=2,o.pure?d.push(o):p.push(o),o.observers&&L(o))}}function V(e){let t;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),o=t.observers;if(o&&o.length){const e=o.pop(),r=t.observerSlots.pop();n<o.length&&(e.sourceSlots[r]=n,o[n]=e,t.observerSlots[n]=r)}}if(f&&f.running&&e.pure){if(e.tOwned){for(t=0;t<e.tOwned.length;t++)V(e.tOwned[t]);delete e.tOwned}$(e,!0)}else if(e.owned){for(t=0;t<e.owned.length;t++)V(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}f&&f.running?e.tState=0:e.state=0,e.context=null}function $(e,t){if(t||(e.tState=0,f.disposed.add(e)),e.owned)for(let t=0;t<e.owned.length;t++)$(e.owned[t])}function G(e){const t=null;if(!t)throw e;t.forEach((t=>t(e)))}function D(e){if("function"==typeof e&&!e.length)return D(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const o=D(e[n]);Array.isArray(o)?t.push.apply(t,o):t.push(o)}return t}return e}function P(e){return function(t){let n;return A(N((()=>n=S((()=>(u.context={[e]:t.value},w((()=>t.children)))))),o,!0,1)),n;var o}}function F(e,t,n){let o=n.length,r=t.length,s=o,l=0,i=0,u=t[r-1].nextSibling,f=null;for(;l<r||i<s;)if(t[l]!==n[i]){for(;t[r-1]===n[s-1];)r--,s--;if(r===l){const t=s<o?i?n[i-1].nextSibling:n[s-i]:u;for(;i<s;)e.insertBefore(n[i++],t)}else if(s===i)for(;l<r;)f&&f.has(t[l])||e.removeChild(t[l]),l++;else if(t[l]===n[s-1]&&n[i]===t[r-1]){const o=t[--r].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--s],o),t[r]=n[s]}else{if(!f){f=new Map;let e=i;for(;e<s;)f.set(n[e],e++)}const o=f.get(t[l]);if(null!=o)if(i<o&&o<s){let u,c=l,a=1;for(;++c<r&&c<s&&null!=(u=f.get(t[c]))&&u===o+a;)a++;if(a>o-i){const r=t[l];for(;i<o;)e.insertBefore(n[i++],r)}else e.replaceChild(n[i++],t[l++])}else l++;else e.removeChild(t[l++])}}else l++,i++}Symbol("fallback"),function(e){const t=Symbol("context");P(t)}(),new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline","allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"]),new Set(["innerHTML","textContent","innerText","children"]),new Set(["beforeinput","click","dblclick","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]);const I="_$DX_DELEGATE";function j(e,t,n){const o=document.createElement("template");o.innerHTML=e;let r=o.content.firstChild;return n&&(r=r.firstChild),r}function q(e,t,n,o){if(void 0===n||o||(o=[]),"function"!=typeof t)return H(e,t,o,n);v((o=>H(e,t(),o,n)),o)}function z(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get:()=>n});null!==n;){const o=n[t];if(o&&!n.disabled){const r=n[`${t}Data`];if(void 0!==r?o(r,e):o(e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function H(t,n,o,r,s){for(;"function"==typeof o;)o=o();if(n===o)return o;const l=typeof n,i=void 0!==r;if(t=i&&o[0]&&o[0].parentNode||t,"string"===l||"number"===l)if("number"===l&&(n=n.toString()),i){let e=o[0];e&&3===e.nodeType?e.data=n:e=document.createTextNode(n),o=_(t,o,r,e)}else o=""!==o&&"string"==typeof o?t.firstChild.data=n:t.textContent=n;else if(null==n||"boolean"===l){if(e.context)return o;o=_(t,o,r)}else{if("function"===l)return v((()=>{let e=n();for(;"function"==typeof e;)e=e();o=H(t,e,o,r)})),()=>o;if(Array.isArray(n)){const l=[];if(J(l,n,s))return v((()=>o=H(t,l,o,r,!0))),()=>o;if(e.context&&o&&o.length)return o;if(0===l.length){if(o=_(t,o,r),i)return o}else Array.isArray(o)?0===o.length?R(t,l,r):F(t,o,l):null==o||""===o?R(t,l):F(t,i&&o||[t.firstChild],l);o=l}else if(n instanceof Node){if(Array.isArray(o)){if(i)return o=_(t,o,r,n);_(t,o,null,n)}else null!=o&&""!==o&&t.firstChild?t.replaceChild(n,t.firstChild):t.appendChild(n);o=n}}return o}function J(e,t,n){let o=!1;for(let r=0,s=t.length;r<s;r++){let s,l=t[r];if(l instanceof Node)e.push(l);else if(null==l||!0===l||!1===l);else if(Array.isArray(l))o=J(e,l)||o;else if("string"==(s=typeof l))e.push(document.createTextNode(l));else if("function"===s)if(n){for(;"function"==typeof l;)l=l();o=J(e,Array.isArray(l)?l:[l])||o}else e.push(l),o=!0;else e.push(document.createTextNode(l.toString()))}return o}function R(e,t,n){for(let o=0,r=t.length;o<r;o++)e.insertBefore(t[o],n)}function _(e,t,n,o){if(void 0===n)return e.textContent="";const r=o||document.createTextNode("");if(t.length){let o=!1;for(let s=t.length-1;s>=0;s--){const l=t[s];if(r!==l){const t=l.parentNode===e;o||s?t&&e.removeChild(l):t?e.replaceChild(r,l):e.insertBefore(r,n)}else o=!0}}else e.insertBefore(r,n);return[r]}const X=j('<div><ul></ul><div><input type="text"><button>+</button></div></div>'),K=j("<li><p></p></li>"),Q=()=>{const[e,t]=g([]);let n;var o;return o=()=>{""!==localStorage.getItem("todos")&&t(JSON.parse(localStorage.getItem("todos")))},m((()=>S(o))),m((()=>{localStorage.setItem("todos",JSON.stringify(e()))})),(()=>{const o=X.cloneNode(!0),r=o.firstChild,s=r.nextSibling.firstChild,l=s.nextSibling;return q(r,(()=>e().map((e=>(()=>{const t=K.cloneNode(!0);return q(t.firstChild,(()=>e.name)),t})())))),"function"==typeof n?n(s):n=s,l.$$click=o=>{const r=[...e(),{name:n.value,completed:!1}];t(r),n.value=""},o})()};(function(e,t,n){let o;(function(e,t){t&&(u=t);const n=c,o=u,r=0===e.length?s:{owned:null,cleanups:null,context:null,owner:o};let l;u=r,c=null;try{k((()=>l=e((()=>V(r)))),!0)}finally{c=n,u=o}})((r=>{o=r,q(t,e(),t.firstChild?null:void 0,n)}))})((()=>function(n,o){if(e.context){const r=e.context;t({...e.context,id:`${e.context.id}${e.context.count++}.`,count:0});const s=S((()=>n(o)));return t(r),s}return S((()=>n(o)))}(Q,{})),document.body),function(e,t=window.document){const n=t[I]||(t[I]=new Set);for(let o=0,r=e.length;o<r;o++){const r=e[o];n.has(r)||(n.add(r),t.addEventListener(r,z))}}(["click"])})();