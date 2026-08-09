const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./createApplication-BGobIVpX.js","./index-CVN0t0__.js","./index-s-bTp81U.css"])))=>i.map(i=>d[i]);
var Yh=Object.defineProperty;var $h=(c,t,e)=>t in c?Yh(c,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[t]=e;var o=(c,t,e)=>$h(c,typeof t!="symbol"?t+"":t,e);import{_ as qh}from"./index-CVN0t0__.js";const jh="2.21.3",Kh="b1767d5";function Qr(c,t){for(const e in t){const i=t[e];Array.isArray(i)?c[e]=Qr([],i):i&&typeof i=="object"?c[e]=Qr({},i):c[e]=i}return c}const Zh={create(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,c=>{const t=Math.random()*16|0;return(c==="x"?t:t&3|8).toString(16)})}},J={delimiter:"/",join(...c){let t=c[0];for(let e=0;e<c.length-1;e++){const i=c[e],s=c[e+1];if(s[0]===J.delimiter){t=s;continue}i&&s&&i[i.length-1]!==J.delimiter&&s[0]!==J.delimiter?t+=J.delimiter+s:t+=s}return t},normalize(c){const t=c.startsWith(J.delimiter),e=c.endsWith(J.delimiter),i=c.split("/");let s="",a=[];for(let r=0;r<i.length;r++)if(i[r]!==""&&i[r]!=="."){if(i[r]===".."&&a.length>0){a=a.slice(0,a.length-2);continue}r>0&&a.push(J.delimiter),a.push(i[r])}return s=a.join(""),!t&&s[0]===J.delimiter&&(s=s.slice(1)),e&&s[s.length-1]!==J.delimiter&&(s+=J.delimiter),s},split(c){const t=c.lastIndexOf(J.delimiter);return t!==-1?[c.substring(0,t),c.substring(t+1)]:["",c]},getBasename(c){return J.split(c)[1]},getDirectory(c){return J.split(c)[0]},getExtension(c){const t=c.split("?")[0].split(".").pop();return t!==c?`.${t}`:""},isRelativePath(c){return c.charAt(0)!=="/"&&c.match(/:\/\//)===null},extractPath(c){let t="";const e=c.split("/");let i=0;if(e.length>1)if(J.isRelativePath(c))if(e[0]===".")for(i=0;i<e.length-1;++i)t+=i===0?e[i]:`/${e[i]}`;else if(e[0]==="..")for(i=0;i<e.length-1;++i)t+=i===0?e[i]:`/${e[i]}`;else for(t=".",i=0;i<e.length-1;++i)t+=`/${e[i]}`;else for(i=0;i<e.length-1;++i)t+=i===0?e[i]:`/${e[i]}`;return t}},Jh=()=>{let c=!1;try{const t=Object.defineProperty({},"passive",{get:function(){return c=!0,!1}});window.addEventListener("testpassive",null,t),window.removeEventListener("testpassive",null,t)}catch{}return c},We=typeof navigator<"u"?navigator.userAgent:"",ls=typeof window<"u"?"browser":typeof global<"u"?"node":"worker",Vi=/android/i.test(We)?"android":/ip(?:[ao]d|hone)/i.test(We)?"ios":/windows/i.test(We)?"windows":/mac os/i.test(We)?"osx":/linux/i.test(We)?"linux":/cros/i.test(We)?"cros":null,Qh=ls!=="browser"?null:/Chrome\/|Chromium\/|Edg.*\//.test(We)?"chrome":/Safari\//.test(We)?"safari":/Firefox\//.test(We)?"firefox":"other",ef=/Macintosh/i.test(We)&&typeof navigator<"u"&&navigator.maxTouchPoints>0&&!/iPhone|iPad|iPod/i.test(We),tf=ls==="browser"&&("ontouchstart"in window||"maxTouchPoints"in navigator&&navigator.maxTouchPoints>0);Jh();const bi={name:Vi,environment:ls,browser:ls==="browser",worker:ls==="worker",desktop:["windows","osx","linux","cros"].includes(Vi),mobile:["android","ios"].includes(Vi),ios:Vi==="ios",android:Vi==="android",visionos:ef,touch:tf,browserName:Qh};class sf{constructor(t,e,i,s,a=!1){o(this,"handler");o(this,"name");o(this,"callback");o(this,"scope");o(this,"_once");o(this,"_removed",!1);this.handler=t,this.name=e,this.callback=i,this.scope=s,this._once=a}off(){this._removed||this.handler.offByHandle(this)}on(t,e,i=this){return this.handler._addCallback(t,e,i,!1)}once(t,e,i=this){return this.handler._addCallback(t,e,i,!0)}set removed(t){t&&(this._removed=!0)}get removed(){return this._removed}toJSON(t){}}class pe{constructor(){o(this,"_callbacks",new Map);o(this,"_callbackActive",new Map)}initEventHandler(){this._callbacks=new Map,this._callbackActive=new Map}_addCallback(t,e,i,s){if(this._callbacks.has(t)||this._callbacks.set(t,[]),this._callbackActive.has(t)){const r=this._callbackActive.get(t);r&&r===this._callbacks.get(t)&&this._callbackActive.set(t,r.slice())}const a=new sf(this,t,e,i,s);return this._callbacks.get(t).push(a),a}on(t,e,i=this){return this._addCallback(t,e,i,!1)}once(t,e,i=this){return this._addCallback(t,e,i,!0)}off(t,e,i){if(t)this._callbackActive.has(t)&&this._callbackActive.get(t)===this._callbacks.get(t)&&this._callbackActive.set(t,this._callbackActive.get(t).slice());else for(const[s,a]of this._callbackActive)this._callbacks.has(s)&&this._callbacks.get(s)===a&&this._callbackActive.set(s,a.slice());if(t)if(e){const s=this._callbacks.get(t);if(!s)return this;for(let a=0;a<s.length;a++)s[a].callback===e&&(i&&s[a].scope!==i||(s[a].removed=!0,s.splice(a,1),a--));s.length===0&&this._callbacks.delete(t)}else{const s=this._callbacks.get(t);if(s){for(let a=0;a<s.length;a++)s[a].removed=!0;this._callbacks.delete(t)}}else{for(const s of this._callbacks.values())for(let a=0;a<s.length;a++)s[a].removed=!0;this._callbacks.clear()}return this}offByHandle(t){const e=t.name;t.removed=!0,this._callbackActive.has(e)&&this._callbackActive.get(e)===this._callbacks.get(e)&&this._callbackActive.set(e,this._callbackActive.get(e).slice());const i=this._callbacks.get(e);if(!i)return this;const s=i.indexOf(t);return s!==-1&&(i.splice(s,1),i.length===0&&this._callbacks.delete(e)),this}fire(t,e,i,s,a,r,n,l,d){if(!t)return this;const f=this._callbacks.get(t);if(!f)return this;let h;this._callbackActive.has(t)?this._callbackActive.get(t)!==f&&(h=f.slice()):this._callbackActive.set(t,f);for(let u=0;(h||this._callbackActive.get(t))&&u<(h||this._callbackActive.get(t)).length;u++){const p=(h||this._callbackActive.get(t))[u];if(p.callback&&(p.callback.call(p.scope,e,i,s,a,r,n,l,d),p._once)){const m=this._callbacks.get(t),g=m?m.indexOf(p):-1;if(g!==-1){this._callbackActive.get(t)===m&&this._callbackActive.set(t,this._callbackActive.get(t).slice());const v=this._callbacks.get(t);if(!v)continue;v[g].removed=!0,v.splice(g,1),v.length===0&&this._callbacks.delete(t)}}}return h||this._callbackActive.delete(t),this}hasEvent(t){var e;return!!((e=this._callbacks.get(t))!=null&&e.length)}}class cs extends pe{constructor(e){super();o(this,"_index",{});o(this,"_list",[]);o(this,"_parent");this._parent=e}add(...e){let i=!1;const s=this._processArguments(e,!0);if(!s.length)return i;for(let a=0;a<s.length;a++)this._index[s[a]]||(i=!0,this._index[s[a]]=!0,this._list.push(s[a]),this.fire("add",s[a],this._parent));return i&&this.fire("change",this._parent),i}remove(...e){let i=!1;if(!this._list.length)return i;const s=this._processArguments(e,!0);if(!s.length)return i;for(let a=0;a<s.length;a++)this._index[s[a]]&&(i=!0,delete this._index[s[a]],this._list.splice(this._list.indexOf(s[a]),1),this.fire("remove",s[a],this._parent));return i&&this.fire("change",this._parent),i}clear(){if(!this._list.length)return;const e=this._list.slice(0);this._list=[],this._index={};for(let i=0;i<e.length;i++)this.fire("remove",e[i],this._parent);this.fire("change",this._parent)}has(...e){return this._list.length?this._has(this._processArguments(e)):!1}_has(e){if(!this._list.length||!e.length)return!1;for(let i=0;i<e.length;i++)if(e[i].length===1){if(this._index[e[i][0]])return!0}else{let s=!0;for(let a=0;a<e[i].length;a++)if(!this._index[e[i][a]]){s=!1;break}if(s)return!0}return!1}list(){return this._list.slice(0)}_processArguments(e,i){const s=[];let a=[];if(!e||!e.length)return s;for(let r=0;r<e.length;r++)if(e[r]instanceof Array){i||(a=[]);for(let n=0;n<e[r].length;n++)typeof e[r][n]=="string"&&(i?s.push(e[r][n]):a.push(e[r][n]));!i&&a.length&&s.push(a)}else typeof e[r]=="string"&&(i?s.push(e[r]):s.push([e[r]]));return s}get size(){return this._list.length}}o(cs,"EVENT_ADD","add"),o(cs,"EVENT_REMOVE","remove"),o(cs,"EVENT_CHANGE","change");const Ee=typeof window<"u"&&window.performance&&window.performance.now?performance.now.bind(performance):Date.now,af=/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;class Ja{constructor(t){o(this,"scheme");o(this,"authority");o(this,"path");o(this,"query");o(this,"fragment");const e=t.match(af);this.scheme=e[2],this.authority=e[4],this.path=e[5],this.query=e[7],this.fragment=e[9]}toString(){let t="";return this.scheme&&(t+=`${this.scheme}:`),this.authority&&(t+=`//${this.authority}`),t+=this.path,this.query&&(t+=`?${this.query}`),this.fragment&&(t+=`#${this.fragment}`),t}getQuery(){const t={};if(this.query){const e=decodeURIComponent(this.query).split("&");for(const i of e){const s=i.split("=");t[s[0]]=s[1]}}return t}setQuery(t){let e="";for(const i in t)t.hasOwnProperty(i)&&(e!==""&&(e+="&"),e+=`${encodeURIComponent(i)}=${encodeURIComponent(t[i])}`);this.query=e}}const rf=0,Dn=1,xo=4,nf=5,I={DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,clamp(c,t,e){return c>=e?e:c<=t?t:c},intToBytes24(c){const t=c>>16&255,e=c>>8&255,i=c&255;return[t,e,i]},intToBytes32(c){const t=c>>24&255,e=c>>16&255,i=c>>8&255,s=c&255;return[t,e,i,s]},bytesToInt24(c,t,e){return c.length&&(e=c[2],t=c[1],c=c[0]),c<<16|t<<8|e},bytesToInt32(c,t,e,i){return c.length&&(i=c[3],e=c[2],t=c[1],c=c[0]),(c<<24|t<<16|e<<8|i)>>>0},lerp(c,t,e){return c+(t-c)*I.clamp(e,0,1)},lerpUnclamped(c,t,e){return c+(t-c)*e},lerpAngle(c,t,e){return t-c>180&&(t-=360),t-c<-180&&(t+=360),I.lerp(c,t,I.clamp(e,0,1))},powerOfTwo(c){return c!==0&&!(c&c-1)},nextPowerOfTwo(c){return c--,c|=c>>1,c|=c>>2,c|=c>>4,c|=c>>8,c|=c>>16,c++,c},nearestPowerOfTwo(c){return Math.pow(2,Math.round(Math.log2(c)))},random(c,t){const e=t-c;return Math.random()*e+c},smoothstep(c,t,e){return e<=c?0:e>=t?1:(e=(e-c)/(t-c),e*e*(3-2*e))},smootherstep(c,t,e){return e<=c?0:e>=t?1:(e=(e-c)/(t-c),e*e*e*(e*(e*6-15)+10))},roundUp(c,t){return t===0?c:Math.ceil(c/t)*t},between(c,t,e,i){const s=Math.min(t,e),a=Math.max(t,e);return i?c>=s&&c<=a:c>s&&c<a}},oe=class oe{constructor(t=0,e=0,i=0,s=1){o(this,"r");o(this,"g");o(this,"b");o(this,"a");const a=t.length;a===3||a===4?(this.r=t[0],this.g=t[1],this.b=t[2],this.a=t[3]??1):(this.r=t,this.g=e,this.b=i,this.a=s)}clone(){const t=this.constructor;return new t(this.r,this.g,this.b,this.a)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this.a=t.a,this}equals(t){return this.r===t.r&&this.g===t.g&&this.b===t.b&&this.a===t.a}set(t,e,i,s=1){return this.r=t,this.g=e,this.b=i,this.a=s,this}lerp(t,e,i){return this.r=t.r+i*(e.r-t.r),this.g=t.g+i*(e.g-t.g),this.b=t.b+i*(e.b-t.b),this.a=t.a+i*(e.a-t.a),this}linear(t=this){return this.r=Math.pow(t.r,2.2),this.g=Math.pow(t.g,2.2),this.b=Math.pow(t.b,2.2),this.a=t.a,this}gamma(t=this){return this.r=Math.pow(t.r,1/2.2),this.g=Math.pow(t.g,1/2.2),this.b=Math.pow(t.b,1/2.2),this.a=t.a,this}mulScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}fromString(t){const e=parseInt(t.replace("#","0x"),16);let i;return t.length>7?i=I.intToBytes32(e):(i=I.intToBytes24(e),i[3]=255),this.set(i[0]/255,i[1]/255,i[2]/255,i[3]/255),this}fromArray(t,e=0){return this.r=t[e]??this.r,this.g=t[e+1]??this.g,this.b=t[e+2]??this.b,this.a=t[e+3]??this.a,this}toString(t,e){const{r:i,g:s,b:a,a:r}=this;if(e||i>1||s>1||a>1)return`${i.toFixed(3)}, ${s.toFixed(3)}, ${a.toFixed(3)}, ${r.toFixed(3)}`;let n=`#${((1<<24)+(Math.round(i*255)<<16)+(Math.round(s*255)<<8)+Math.round(a*255)).toString(16).slice(1)}`;if(t===!0){const l=Math.round(r*255).toString(16);this.a<16/255?n+=`0${l}`:n+=l}return n}toArray(t=[],e=0,i=!0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,i&&(t[e+3]=this.a),t}};o(oe,"BLACK",Object.freeze(new oe(0,0,0,1))),o(oe,"BLUE",Object.freeze(new oe(0,0,1,1))),o(oe,"CYAN",Object.freeze(new oe(0,1,1,1))),o(oe,"GRAY",Object.freeze(new oe(.5,.5,.5,1))),o(oe,"GREEN",Object.freeze(new oe(0,1,0,1))),o(oe,"MAGENTA",Object.freeze(new oe(1,0,1,1))),o(oe,"RED",Object.freeze(new oe(1,0,0,1))),o(oe,"WHITE",Object.freeze(new oe(1,1,1,1))),o(oe,"YELLOW",Object.freeze(new oe(1,1,0,1)));let U=oe;class Ic{constructor(t,e=0){o(this,"_curve");o(this,"_left",-1/0);o(this,"_right",1/0);o(this,"_recip",0);o(this,"_p0",0);o(this,"_p1",0);o(this,"_m0",0);o(this,"_m1",0);this._curve=t,this._reset(e)}evaluate(t,e=!1){(e||t<this._left||t>=this._right)&&this._reset(t);let i;const s=this._curve.type;if(s===nf)i=this._p0;else{const a=this._recip===0?0:(t-this._left)*this._recip;s===rf?i=I.lerp(this._p0,this._p1,a):s===Dn?i=I.lerp(this._p0,this._p1,a*a*(3-2*a)):i=this._evaluateHermite(this._p0,this._p1,this._m0,this._m1,a)}return i}_reset(t){const e=this._curve.keys,i=e.length;if(!i)this._left=-1/0,this._right=1/0,this._recip=0,this._p0=this._p1=this._m0=this._m1=0;else if(t<e[0][0])this._left=-1/0,this._right=e[0][0],this._recip=0,this._p0=this._p1=e[0][1],this._m0=this._m1=0;else if(t>=e[i-1][0])this._left=e[i-1][0],this._right=1/0,this._recip=0,this._p0=this._p1=e[i-1][1],this._m0=this._m1=0;else{let s=0;for(;t>=e[s+1][0];)s++;this._left=e[s][0],this._right=e[s+1][0];const a=1/(this._right-this._left);this._recip=isFinite(a)?a:0,this._p0=e[s][1],this._p1=e[s+1][1],this._curve.type===xo&&this._calcTangents(e,s)}}_calcTangents(t,e){let i;const s=t[e],a=t[e+1];let r;if(e===0?i=[t[0][0]+(t[0][0]-t[1][0]),t[0][1]+(t[0][1]-t[1][1])]:i=t[e-1],e===t.length-2?r=[t[e+1][0]+(t[e+1][0]-t[e][0]),t[e+1][1]+(t[e+1][1]-t[e][1])]:r=t[e+2],this._curve.type===xo){const n=2*(a[0]-s[0])/(a[0]-i[0]),l=2*(a[0]-s[0])/(r[0]-s[0]);this._m0=this._curve.tension*(isFinite(n)?n:0)*(a[1]-i[1]),this._m1=this._curve.tension*(isFinite(l)?l:0)*(r[1]-s[1])}else{const n=(a[0]-s[0])/(s[0]-i[0]),l=(a[0]-s[0])/(r[0]-a[0]),d=s[1]+(i[1]-s[1])*(isFinite(n)?n:0),f=a[1]+(r[1]-a[1])*(isFinite(l)?l:0),h=this._curve.tension;this._m0=h*(a[1]-d),this._m1=h*(f-s[1])}}_evaluateHermite(t,e,i,s,a){const r=a*a,n=a+a,l=1-a,d=l*l;return t*((1+n)*d)+i*(a*d)+e*(r*(3-n))+s*(r*(a-1))}}class Xe{constructor(t){o(this,"keys",[]);o(this,"type",Dn);o(this,"tension",.5);o(this,"_eval",new Ic(this));if(t)for(let e=0;e<t.length-1;e+=2)this.keys.push([t[e],t[e+1]]);this.sort()}get length(){return this.keys.length}add(t,e){const i=this.keys,s=i.length;let a=0;for(;a<s&&!(i[a][0]>t);a++);const r=[t,e];return this.keys.splice(a,0,r),r}remove(t){return t<0||t>=this.keys.length?null:this.keys.splice(t,1)[0]}clear(){return this.keys.length=0,this}get(t){return this.keys[t]}sort(){this.keys.sort((t,e)=>t[0]-e[0])}value(t){return this._eval.evaluate(t,!0)}closest(t){const e=this.keys,i=e.length;let s=2,a=null;for(let r=0;r<i;r++){const n=Math.abs(t-e[r][0]);if(s>=n)s=n,a=e[r];else break}return a}clone(){const t=new this.constructor;return t.keys=this.keys.map(e=>[...e]),t.type=this.type,t.tension=this.tension,t}quantize(t){t=Math.max(t,2);const e=new Float32Array(t),i=1/(t-1);e[0]=this._eval.evaluate(0,!0);for(let s=1;s<t;s++)e[s]=this._eval.evaluate(i*s);return e}quantizeClamped(t,e,i){const s=this.quantize(t);for(let a=0;a<s.length;++a)s[a]=Math.min(i,Math.max(e,s[a]));return s}}class fi{constructor(...t){o(this,"curves",[]);o(this,"_type",Dn);if(t.length>1)for(let e=0;e<t.length;e++)this.curves.push(new Xe(t[e]));else if(t.length===0)this.curves.push(new Xe);else{const e=t[0];if(typeof e=="number")for(let i=0;i<e;i++)this.curves.push(new Xe);else for(let i=0;i<e.length;i++)this.curves.push(new Xe(e[i]))}}get length(){return this.curves.length}set type(t){this._type=t;for(let e=0;e<this.curves.length;e++)this.curves[e].type=t}get type(){return this._type}get(t){return this.curves[t]}add(t){const e=new Xe(t);return e.type=this._type,this.curves.push(e),e}remove(t){const e=typeof t=="number"?t:this.curves.indexOf(t);return e<0||e>=this.curves.length?null:this.curves.splice(e,1)[0]}clearKeys(){for(let t=0;t<this.curves.length;t++)this.curves[t].clear();return this}clear(){return this.curves.length=0,this}value(t,e=[]){const i=this.curves.length;e.length=i;for(let s=0;s<i;s++)e[s]=this.curves[s].value(t);return e}clone(){const t=new this.constructor;t.curves=[];for(let e=0;e<this.curves.length;e++)t.curves.push(this.curves[e].clone());return t._type=this._type,t}quantize(t){t=Math.max(t,2);const e=this.curves.length,i=new Float32Array(t*e),s=1/(t-1);for(let a=0;a<e;a++){const r=new Ic(this.curves[a]);for(let n=0;n<t;n++)i[n*e+a]=r.evaluate(s*n)}return i}quantizeClamped(t,e,i){const s=this.quantize(t);for(let a=0;a<s.length;++a)s[a]=Math.min(i,Math.max(e,s[a]));return s}}const en=new Float32Array(1),Co=new Int32Array(en.buffer);class tn{static float2Half(t){en[0]=t;const e=Co[0];let i=e>>16&32768,s=e>>12&2047;const a=e>>23&255;return a<103?i:a>142?(i|=31744,i|=(a===255?0:1)&&e&8388607,i):a<113?(s|=2048,i|=(s>>114-a)+(s>>113-a&1),i):(i|=a-112<<10|s>>1,i+=s&1,i)}static float2RGBA8(t,e){en[0]=t;const i=Co[0];e.r=(i>>24&255)/255,e.g=(i>>16&255)/255,e.b=(i>>8&255)/255,e.a=(i&255)/255}}const le=class le{constructor(t=0,e=0,i=0){o(this,"x");o(this,"y");o(this,"z");t.length===3?(this.x=t[0],this.y=t[1],this.z=t[2]):(this.x=t,this.y=e,this.z=i)}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}add2(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addScaled(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}clone(){const t=this.constructor;return new t(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}cross(t,e){const i=t.x,s=t.y,a=t.z,r=e.x,n=e.y,l=e.z;return this.x=s*l-n*a,this.y=a*r-l*i,this.z=i*n-r*s,this}distance(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return Math.sqrt(e*e+i*i+s*s)}div(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}div2(t,e){return this.x=t.x/e.x,this.y=t.y/e.y,this.z=t.z/e.z,this}divScalar(t){return this.x/=t,this.y/=t,this.z/=t,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}equals(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}equalsApprox(t,e=1e-6){return Math.abs(this.x-t.x)<e&&Math.abs(this.y-t.y)<e&&Math.abs(this.z-t.z)<e}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}lerp(t,e,i){return this.x=t.x+i*(e.x-t.x),this.y=t.y+i*(e.y-t.y),this.z=t.z+i*(e.z-t.z),this}mul(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}mul2(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}mulScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}scale(t){return this.mulScalar(t)}normalize(t=this){const e=t.x*t.x+t.y*t.y+t.z*t.z;if(e>0){const i=1/Math.sqrt(e);this.x=t.x*i,this.y=t.y*i,this.z=t.z*i}return this}floor(t=this){return this.x=Math.floor(t.x),this.y=Math.floor(t.y),this.z=Math.floor(t.z),this}ceil(t=this){return this.x=Math.ceil(t.x),this.y=Math.ceil(t.y),this.z=Math.ceil(t.z),this}round(t=this){return this.x=Math.round(t.x),this.y=Math.round(t.y),this.z=Math.round(t.z),this}min(t){return t.x<this.x&&(this.x=t.x),t.y<this.y&&(this.y=t.y),t.z<this.z&&(this.z=t.z),this}max(t){return t.x>this.x&&(this.x=t.x),t.y>this.y&&(this.y=t.y),t.z>this.z&&(this.z=t.z),this}project(t){const e=this.x*t.x+this.y*t.y+this.z*t.z,i=t.x*t.x+t.y*t.y+t.z*t.z,s=e/i;return this.x=t.x*s,this.y=t.y*s,this.z=t.z*s,this}set(t,e,i){return this.x=t,this.y=e,this.z=i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}sub2(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}fromArray(t,e=0){return this.x=t[e]??this.x,this.y=t[e+1]??this.y,this.z=t[e+2]??this.z,this}toString(){return`[${this.x}, ${this.y}, ${this.z}]`}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}};o(le,"ZERO",Object.freeze(new le(0,0,0))),o(le,"HALF",Object.freeze(new le(.5,.5,.5))),o(le,"ONE",Object.freeze(new le(1,1,1))),o(le,"UP",Object.freeze(new le(0,1,0))),o(le,"DOWN",Object.freeze(new le(0,-1,0))),o(le,"RIGHT",Object.freeze(new le(1,0,0))),o(le,"LEFT",Object.freeze(new le(-1,0,0))),o(le,"FORWARD",Object.freeze(new le(0,0,-1))),o(le,"BACK",Object.freeze(new le(0,0,1)));let _=le;const Ci=class Ci{constructor(){o(this,"data",new Float32Array(9));this.data[0]=this.data[4]=this.data[8]=1}clone(){const t=this.constructor;return new t().copy(this)}copy(t){const e=t.data,i=this.data;return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],i[4]=e[4],i[5]=e[5],i[6]=e[6],i[7]=e[7],i[8]=e[8],this}set(t){const e=this.data;return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],this}getX(t=new _){return t.set(this.data[0],this.data[1],this.data[2])}getY(t=new _){return t.set(this.data[3],this.data[4],this.data[5])}getZ(t=new _){return t.set(this.data[6],this.data[7],this.data[8])}equals(t){const e=this.data,i=t.data;return e[0]===i[0]&&e[1]===i[1]&&e[2]===i[2]&&e[3]===i[3]&&e[4]===i[4]&&e[5]===i[5]&&e[6]===i[6]&&e[7]===i[7]&&e[8]===i[8]}isIdentity(){const t=this.data;return t[0]===1&&t[1]===0&&t[2]===0&&t[3]===0&&t[4]===1&&t[5]===0&&t[6]===0&&t[7]===0&&t[8]===1}setIdentity(){const t=this.data;return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,this}toString(){return`[${this.data.join(", ")}]`}transpose(t=this){const e=t.data,i=this.data;if(e===i){let s;s=e[1],i[1]=e[3],i[3]=s,s=e[2],i[2]=e[6],i[6]=s,s=e[5],i[5]=e[7],i[7]=s}else i[0]=e[0],i[1]=e[3],i[2]=e[6],i[3]=e[1],i[4]=e[4],i[5]=e[7],i[6]=e[2],i[7]=e[5],i[8]=e[8];return this}setFromMat4(t){const e=t.data,i=this.data;return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[4],i[4]=e[5],i[5]=e[6],i[6]=e[8],i[7]=e[9],i[8]=e[10],this}setFromQuat(t){const e=t.x,i=t.y,s=t.z,a=t.w,r=e+e,n=i+i,l=s+s,d=e*r,f=e*n,h=e*l,u=i*n,p=i*l,m=s*l,g=a*r,v=a*n,E=a*l,S=this.data;return S[0]=1-(u+m),S[1]=f+E,S[2]=h-v,S[3]=f-E,S[4]=1-(d+m),S[5]=p+g,S[6]=h+v,S[7]=p-g,S[8]=1-(d+u),this}invertMat4(t){const e=t.data,i=e[0],s=e[1],a=e[2],r=e[4],n=e[5],l=e[6],d=e[8],f=e[9],h=e[10],u=h*n-l*f,p=-h*s+a*f,m=l*s-a*n,g=-h*r+l*d,v=h*i-a*d,E=-l*i+a*r,S=f*r-n*d,T=-f*i+s*d,y=n*i-s*r,C=i*u+s*g+a*S;if(C===0)this.setIdentity();else{const x=1/C,A=this.data;A[0]=u*x,A[1]=p*x,A[2]=m*x,A[3]=g*x,A[4]=v*x,A[5]=E*x,A[6]=S*x,A[7]=T*x,A[8]=y*x}return this}transformVector(t,e=new _){const i=this.data,{x:s,y:a,z:r}=t;return e.x=s*i[0]+a*i[3]+r*i[6],e.y=s*i[1]+a*i[4]+r*i[7],e.z=s*i[2]+a*i[5]+r*i[8],e}};o(Ci,"IDENTITY",Object.freeze(new Ci)),o(Ci,"ZERO",Object.freeze(new Ci().set([0,0,0,0,0,0,0,0,0])));let _s=Ci;const me=class me{constructor(t=0,e=0){o(this,"x");o(this,"y");t.length===2?(this.x=t[0],this.y=t[1]):(this.x=t,this.y=e)}add(t){return this.x+=t.x,this.y+=t.y,this}add2(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addScaled(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}clone(){const t=this.constructor;return new t(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}cross(t){return this.x*t.y-this.y*t.x}distance(t){const e=this.x-t.x,i=this.y-t.y;return Math.sqrt(e*e+i*i)}div(t){return this.x/=t.x,this.y/=t.y,this}div2(t,e){return this.x=t.x/e.x,this.y=t.y/e.y,this}divScalar(t){return this.x/=t,this.y/=t,this}dot(t){return this.x*t.x+this.y*t.y}equals(t){return this.x===t.x&&this.y===t.y}equalsApprox(t,e=1e-6){return Math.abs(this.x-t.x)<e&&Math.abs(this.y-t.y)<e}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}lengthSq(){return this.x*this.x+this.y*this.y}lerp(t,e,i){return this.x=t.x+i*(e.x-t.x),this.y=t.y+i*(e.y-t.y),this}mul(t){return this.x*=t.x,this.y*=t.y,this}mul2(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this}mulScalar(t){return this.x*=t,this.y*=t,this}scale(t){return this.mulScalar(t)}normalize(t=this){const e=t.x*t.x+t.y*t.y;if(e>0){const i=1/Math.sqrt(e);this.x=t.x*i,this.y=t.y*i}return this}rotate(t){const e=Math.atan2(this.x,this.y)+t*I.DEG_TO_RAD,i=Math.sqrt(this.x*this.x+this.y*this.y);return this.x=Math.sin(e)*i,this.y=Math.cos(e)*i,this}angle(){return Math.atan2(this.x,this.y)*I.RAD_TO_DEG}angleTo(t){return Math.atan2(this.x*t.y+this.y*t.x,this.x*t.x+this.y*t.y)*I.RAD_TO_DEG}floor(t=this){return this.x=Math.floor(t.x),this.y=Math.floor(t.y),this}ceil(t=this){return this.x=Math.ceil(t.x),this.y=Math.ceil(t.y),this}round(t=this){return this.x=Math.round(t.x),this.y=Math.round(t.y),this}min(t){return t.x<this.x&&(this.x=t.x),t.y<this.y&&(this.y=t.y),this}max(t){return t.x>this.x&&(this.x=t.x),t.y>this.y&&(this.y=t.y),this}set(t,e){return this.x=t,this.y=e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}sub2(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}subScalar(t){return this.x-=t,this.y-=t,this}fromArray(t,e=0){return this.x=t[e]??this.x,this.y=t[e+1]??this.y,this}toString(){return`[${this.x}, ${this.y}]`}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}static angleRad(t,e){return Math.atan2(t.x*e.y-t.y*e.x,t.x*e.x+t.y*e.y)}};o(me,"ZERO",Object.freeze(new me(0,0))),o(me,"HALF",Object.freeze(new me(.5,.5))),o(me,"ONE",Object.freeze(new me(1,1))),o(me,"UP",Object.freeze(new me(0,1))),o(me,"DOWN",Object.freeze(new me(0,-1))),o(me,"RIGHT",Object.freeze(new me(1,0))),o(me,"LEFT",Object.freeze(new me(-1,0)));let k=me;const Dt=class Dt{constructor(t=0,e=0,i=0,s=0){o(this,"x");o(this,"y");o(this,"z");o(this,"w");t.length===4?(this.x=t[0],this.y=t[1],this.z=t[2],this.w=t[3]):(this.x=t,this.y=e,this.z=i,this.w=s)}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}add2(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addScaled(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}clone(){const t=this.constructor;return new t(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}div(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}div2(t,e){return this.x=t.x/e.x,this.y=t.y/e.y,this.z=t.z/e.z,this.w=t.w/e.w,this}divScalar(t){return this.x/=t,this.y/=t,this.z/=t,this.w/=t,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}equals(t){return this.x===t.x&&this.y===t.y&&this.z===t.z&&this.w===t.w}equalsApprox(t,e=1e-6){return Math.abs(this.x-t.x)<e&&Math.abs(this.y-t.y)<e&&Math.abs(this.z-t.z)<e&&Math.abs(this.w-t.w)<e}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}lerp(t,e,i){return this.x=t.x+i*(e.x-t.x),this.y=t.y+i*(e.y-t.y),this.z=t.z+i*(e.z-t.z),this.w=t.w+i*(e.w-t.w),this}mul(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}mul2(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this.w=t.w*e.w,this}mulScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}scale(t){return this.mulScalar(t)}normalize(t=this){const e=t.x*t.x+t.y*t.y+t.z*t.z+t.w*t.w;if(e>0){const i=1/Math.sqrt(e);this.x=t.x*i,this.y=t.y*i,this.z=t.z*i,this.w=t.w*i}return this}floor(t=this){return this.x=Math.floor(t.x),this.y=Math.floor(t.y),this.z=Math.floor(t.z),this.w=Math.floor(t.w),this}ceil(t=this){return this.x=Math.ceil(t.x),this.y=Math.ceil(t.y),this.z=Math.ceil(t.z),this.w=Math.ceil(t.w),this}round(t=this){return this.x=Math.round(t.x),this.y=Math.round(t.y),this.z=Math.round(t.z),this.w=Math.round(t.w),this}min(t){return t.x<this.x&&(this.x=t.x),t.y<this.y&&(this.y=t.y),t.z<this.z&&(this.z=t.z),t.w<this.w&&(this.w=t.w),this}max(t){return t.x>this.x&&(this.x=t.x),t.y>this.y&&(this.y=t.y),t.z>this.z&&(this.z=t.z),t.w>this.w&&(this.w=t.w),this}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}sub2(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}fromArray(t,e=0){return this.x=t[e]??this.x,this.y=t[e+1]??this.y,this.z=t[e+2]??this.z,this.w=t[e+3]??this.w,this}toString(){return`[${this.x}, ${this.y}, ${this.z}, ${this.w}]`}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}};o(Dt,"ZERO",Object.freeze(new Dt(0,0,0,0))),o(Dt,"HALF",Object.freeze(new Dt(.5,.5,.5,.5))),o(Dt,"ONE",Object.freeze(new Dt(1,1,1,1)));let se=Dt;const Gi=new k,Be=new _,Je=new _,Qe=new _,Ns=new _,Kt=class Kt{constructor(){o(this,"data",new Float32Array(16));this.data[0]=this.data[5]=this.data[10]=this.data[15]=1}static _getPerspectiveHalfSize(t,e,i,s,a){a?(t.x=s*Math.tan(e*Math.PI/360),t.y=t.x/i):(t.y=s*Math.tan(e*Math.PI/360),t.x=t.y*i)}add2(t,e){const i=t.data,s=e.data,a=this.data;return a[0]=i[0]+s[0],a[1]=i[1]+s[1],a[2]=i[2]+s[2],a[3]=i[3]+s[3],a[4]=i[4]+s[4],a[5]=i[5]+s[5],a[6]=i[6]+s[6],a[7]=i[7]+s[7],a[8]=i[8]+s[8],a[9]=i[9]+s[9],a[10]=i[10]+s[10],a[11]=i[11]+s[11],a[12]=i[12]+s[12],a[13]=i[13]+s[13],a[14]=i[14]+s[14],a[15]=i[15]+s[15],this}add(t){return this.add2(this,t)}clone(){const t=this.constructor;return new t().copy(this)}copy(t){const e=t.data,i=this.data;return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],i[4]=e[4],i[5]=e[5],i[6]=e[6],i[7]=e[7],i[8]=e[8],i[9]=e[9],i[10]=e[10],i[11]=e[11],i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15],this}equals(t){const e=this.data,i=t.data;return e[0]===i[0]&&e[1]===i[1]&&e[2]===i[2]&&e[3]===i[3]&&e[4]===i[4]&&e[5]===i[5]&&e[6]===i[6]&&e[7]===i[7]&&e[8]===i[8]&&e[9]===i[9]&&e[10]===i[10]&&e[11]===i[11]&&e[12]===i[12]&&e[13]===i[13]&&e[14]===i[14]&&e[15]===i[15]}isIdentity(){const t=this.data;return t[0]===1&&t[1]===0&&t[2]===0&&t[3]===0&&t[4]===0&&t[5]===1&&t[6]===0&&t[7]===0&&t[8]===0&&t[9]===0&&t[10]===1&&t[11]===0&&t[12]===0&&t[13]===0&&t[14]===0&&t[15]===1}mul2(t,e){const i=t.data,s=e.data,a=this.data,r=i[0],n=i[1],l=i[2],d=i[3],f=i[4],h=i[5],u=i[6],p=i[7],m=i[8],g=i[9],v=i[10],E=i[11],S=i[12],T=i[13],y=i[14],C=i[15];let x,A,w,L;return x=s[0],A=s[1],w=s[2],L=s[3],a[0]=r*x+f*A+m*w+S*L,a[1]=n*x+h*A+g*w+T*L,a[2]=l*x+u*A+v*w+y*L,a[3]=d*x+p*A+E*w+C*L,x=s[4],A=s[5],w=s[6],L=s[7],a[4]=r*x+f*A+m*w+S*L,a[5]=n*x+h*A+g*w+T*L,a[6]=l*x+u*A+v*w+y*L,a[7]=d*x+p*A+E*w+C*L,x=s[8],A=s[9],w=s[10],L=s[11],a[8]=r*x+f*A+m*w+S*L,a[9]=n*x+h*A+g*w+T*L,a[10]=l*x+u*A+v*w+y*L,a[11]=d*x+p*A+E*w+C*L,x=s[12],A=s[13],w=s[14],L=s[15],a[12]=r*x+f*A+m*w+S*L,a[13]=n*x+h*A+g*w+T*L,a[14]=l*x+u*A+v*w+y*L,a[15]=d*x+p*A+E*w+C*L,this}mulAffine2(t,e){const i=t.data,s=e.data,a=this.data,r=i[0],n=i[1],l=i[2],d=i[4],f=i[5],h=i[6],u=i[8],p=i[9],m=i[10],g=i[12],v=i[13],E=i[14];let S,T,y;return S=s[0],T=s[1],y=s[2],a[0]=r*S+d*T+u*y,a[1]=n*S+f*T+p*y,a[2]=l*S+h*T+m*y,a[3]=0,S=s[4],T=s[5],y=s[6],a[4]=r*S+d*T+u*y,a[5]=n*S+f*T+p*y,a[6]=l*S+h*T+m*y,a[7]=0,S=s[8],T=s[9],y=s[10],a[8]=r*S+d*T+u*y,a[9]=n*S+f*T+p*y,a[10]=l*S+h*T+m*y,a[11]=0,S=s[12],T=s[13],y=s[14],a[12]=r*S+d*T+u*y+g,a[13]=n*S+f*T+p*y+v,a[14]=l*S+h*T+m*y+E,a[15]=1,this}mul(t){return this.mul2(this,t)}transformPoint(t,e=new _){const i=this.data,{x:s,y:a,z:r}=t;return e.x=s*i[0]+a*i[4]+r*i[8]+i[12],e.y=s*i[1]+a*i[5]+r*i[9]+i[13],e.z=s*i[2]+a*i[6]+r*i[10]+i[14],e}transformVector(t,e=new _){const i=this.data,{x:s,y:a,z:r}=t;return e.x=s*i[0]+a*i[4]+r*i[8],e.y=s*i[1]+a*i[5]+r*i[9],e.z=s*i[2]+a*i[6]+r*i[10],e}transformVec4(t,e=new se){const i=this.data,{x:s,y:a,z:r,w:n}=t;return e.x=s*i[0]+a*i[4]+r*i[8]+n*i[12],e.y=s*i[1]+a*i[5]+r*i[9]+n*i[13],e.z=s*i[2]+a*i[6]+r*i[10]+n*i[14],e.w=s*i[3]+a*i[7]+r*i[11]+n*i[15],e}setLookAt(t,e,i){Qe.sub2(t,e).normalize(),Je.copy(i).normalize(),Be.cross(Je,Qe).normalize(),Je.cross(Qe,Be);const s=this.data;return s[0]=Be.x,s[1]=Be.y,s[2]=Be.z,s[3]=0,s[4]=Je.x,s[5]=Je.y,s[6]=Je.z,s[7]=0,s[8]=Qe.x,s[9]=Qe.y,s[10]=Qe.z,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}setFrustum(t,e,i,s,a,r){const n=2*a,l=e-t,d=s-i,f=r-a,h=this.data;return h[0]=n/l,h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=n/d,h[6]=0,h[7]=0,h[8]=(e+t)/l,h[9]=(s+i)/d,h[10]=(-r-a)/f,h[11]=-1,h[12]=0,h[13]=0,h[14]=-n*r/f,h[15]=0,this}setPerspective(t,e,i,s,a){return Kt._getPerspectiveHalfSize(Gi,t,e,i,a),this.setFrustum(-Gi.x,Gi.x,-Gi.y,Gi.y,i,s)}setOrtho(t,e,i,s,a,r){const n=this.data;return n[0]=2/(e-t),n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=2/(s-i),n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=-2/(r-a),n[11]=0,n[12]=-(e+t)/(e-t),n[13]=-(s+i)/(s-i),n[14]=-(r+a)/(r-a),n[15]=1,this}setFromAxisAngle(t,e){e*=I.DEG_TO_RAD;const{x:i,y:s,z:a}=t,r=Math.cos(e),n=Math.sin(e),l=1-r,d=l*i,f=l*s,h=this.data;return h[0]=d*i+r,h[1]=d*s+n*a,h[2]=d*a-n*s,h[3]=0,h[4]=d*s-n*a,h[5]=f*s+r,h[6]=f*a+n*i,h[7]=0,h[8]=d*a+n*s,h[9]=f*a-i*n,h[10]=l*a*a+r,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,this}setTranslate(t,e,i){const s=this.data;return s[0]=1,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=1,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=1,s[11]=0,s[12]=t,s[13]=e,s[14]=i,s[15]=1,this}setScale(t,e,i){const s=this.data;return s[0]=t,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=e,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=i,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,this}setViewport(t,e,i,s){const a=this.data;return a[0]=i*.5,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=s*.5,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=.5,a[11]=0,a[12]=t+i*.5,a[13]=e+s*.5,a[14]=.5,a[15]=1,this}setReflection(t,e){const i=t.x,s=t.y,a=t.z,r=this.data;return r[0]=1-2*i*i,r[1]=-2*i*s,r[2]=-2*i*a,r[3]=0,r[4]=-2*i*s,r[5]=1-2*s*s,r[6]=-2*s*a,r[7]=0,r[8]=-2*i*a,r[9]=-2*s*a,r[10]=1-2*a*a,r[11]=0,r[12]=-2*i*e,r[13]=-2*s*e,r[14]=-2*a*e,r[15]=1,this}invert(t=this){const e=t.data,i=e[0],s=e[1],a=e[2],r=e[3],n=e[4],l=e[5],d=e[6],f=e[7],h=e[8],u=e[9],p=e[10],m=e[11],g=e[12],v=e[13],E=e[14],S=e[15],T=i*l-s*n,y=i*d-a*n,C=i*f-r*n,x=s*d-a*l,A=s*f-r*l,w=a*f-r*d,L=h*v-u*g,P=h*E-p*g,R=h*S-m*g,O=u*E-p*v,B=u*S-m*v,M=p*S-m*E,j=T*M-y*B+C*O+x*R-A*P+w*L;if(j===0)this.setIdentity();else{const F=1/j,N=this.data;N[0]=(l*M-d*B+f*O)*F,N[1]=(-s*M+a*B-r*O)*F,N[2]=(v*w-E*A+S*x)*F,N[3]=(-u*w+p*A-m*x)*F,N[4]=(-n*M+d*R-f*P)*F,N[5]=(i*M-a*R+r*P)*F,N[6]=(-g*w+E*C-S*y)*F,N[7]=(h*w-p*C+m*y)*F,N[8]=(n*B-l*R+f*L)*F,N[9]=(-i*B+s*R-r*L)*F,N[10]=(g*A-v*C+S*T)*F,N[11]=(-h*A+u*C-m*T)*F,N[12]=(-n*O+l*P-d*L)*F,N[13]=(i*O-s*P+a*L)*F,N[14]=(-g*x+v*y-E*T)*F,N[15]=(h*x-u*y+p*T)*F}return this}set(t){const e=this.data;return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],this}setIdentity(){const t=this.data;return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}setTRS(t,e,i){const s=e.x,a=e.y,r=e.z,n=e.w,l=i.x,d=i.y,f=i.z,h=s+s,u=a+a,p=r+r,m=s*h,g=s*u,v=s*p,E=a*u,S=a*p,T=r*p,y=n*h,C=n*u,x=n*p,A=this.data;return A[0]=(1-(E+T))*l,A[1]=(g+x)*l,A[2]=(v-C)*l,A[3]=0,A[4]=(g-x)*d,A[5]=(1-(m+T))*d,A[6]=(S+y)*d,A[7]=0,A[8]=(v+C)*f,A[9]=(S-y)*f,A[10]=(1-(m+E))*f,A[11]=0,A[12]=t.x,A[13]=t.y,A[14]=t.z,A[15]=1,this}transpose(t=this){const e=t.data,i=this.data;if(e===i){let s;s=e[1],i[1]=e[4],i[4]=s,s=e[2],i[2]=e[8],i[8]=s,s=e[3],i[3]=e[12],i[12]=s,s=e[6],i[6]=e[9],i[9]=s,s=e[7],i[7]=e[13],i[13]=s,s=e[11],i[11]=e[14],i[14]=s}else i[0]=e[0],i[1]=e[4],i[2]=e[8],i[3]=e[12],i[4]=e[1],i[5]=e[5],i[6]=e[9],i[7]=e[13],i[8]=e[2],i[9]=e[6],i[10]=e[10],i[11]=e[14],i[12]=e[3],i[13]=e[7],i[14]=e[11],i[15]=e[15];return this}getTranslation(t=new _){return t.set(this.data[12],this.data[13],this.data[14])}getX(t=new _){return t.set(this.data[0],this.data[1],this.data[2])}getY(t=new _){return t.set(this.data[4],this.data[5],this.data[6])}getZ(t=new _){return t.set(this.data[8],this.data[9],this.data[10])}getScale(t=new _){return this.getX(Be),this.getY(Je),this.getZ(Qe),t.set(Be.length(),Je.length(),Qe.length()),t}get scaleSign(){return this.getX(Be),this.getY(Je),this.getZ(Qe),Be.cross(Be,Je),Be.dot(Qe)<0?-1:1}setFromEulerAngles(t,e,i){t*=I.DEG_TO_RAD,e*=I.DEG_TO_RAD,i*=I.DEG_TO_RAD;const s=Math.sin(-t),a=Math.cos(-t),r=Math.sin(-e),n=Math.cos(-e),l=Math.sin(-i),d=Math.cos(-i),f=this.data;return f[0]=n*d,f[1]=-n*l,f[2]=r,f[3]=0,f[4]=a*l+d*s*r,f[5]=a*d-s*r*l,f[6]=-n*s,f[7]=0,f[8]=s*l-a*d*r,f[9]=d*s+a*r*l,f[10]=a*n,f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,this}getEulerAngles(t=new _){this.getScale(Ns);const e=Ns.x,i=Ns.y,s=Ns.z;if(e===0||i===0||s===0)return t.set(0,0,0);const a=this.data,r=Math.asin(-a[2]/e),n=Math.PI*.5;let l,d;return r<n?r>-n?(l=Math.atan2(a[6]/i,a[10]/s),d=Math.atan2(a[1]/e,a[0]/e)):(d=0,l=-Math.atan2(a[4]/i,a[5]/i)):(d=0,l=Math.atan2(a[4]/i,a[5]/i)),t.set(l,r,d).mulScalar(I.RAD_TO_DEG)}toString(){return`[${this.data.join(", ")}]`}};o(Kt,"IDENTITY",Object.freeze(new Kt)),o(Kt,"ZERO",Object.freeze(new Kt().set([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])));let b=Kt;const Ai=class Ai{constructor(t=0,e=0,i=0,s=1){o(this,"x");o(this,"y");o(this,"z");o(this,"w");t.length===4?(this.x=t[0],this.y=t[1],this.z=t[2],this.w=t[3]):(this.x=t,this.y=e,this.z=i,this.w=s)}clone(){const t=this.constructor;return new t(this.x,this.y,this.z,this.w)}conjugate(t=this){return this.x=t.x*-1,this.y=t.y*-1,this.z=t.z*-1,this.w=t.w,this}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}equals(t){return this.x===t.x&&this.y===t.y&&this.z===t.z&&this.w===t.w}equalsApprox(t,e=1e-6){return Math.abs(this.x-t.x)<e&&Math.abs(this.y-t.y)<e&&Math.abs(this.z-t.z)<e&&Math.abs(this.w-t.w)<e}getAxisAngle(t){let e=Math.acos(this.w)*2;const i=Math.sin(e/2);return i!==0?(t.x=this.x/i,t.y=this.y/i,t.z=this.z/i,(t.x<0||t.y<0||t.z<0)&&(t.x*=-1,t.y*=-1,t.z*=-1,e*=-1)):(t.x=1,t.y=0,t.z=0),e*I.RAD_TO_DEG}getEulerAngles(t=new _){let e,i,s;const a=this.x,r=this.y,n=this.z,l=this.w,d=2*(l*r-a*n);return d<=-.99999?(e=2*Math.atan2(a,l),i=-Math.PI/2,s=0):d>=.99999?(e=2*Math.atan2(a,l),i=Math.PI/2,s=0):(e=Math.atan2(2*(l*a+r*n),1-2*(a*a+r*r)),i=Math.asin(d),s=Math.atan2(2*(l*n+a*r),1-2*(r*r+n*n))),t.set(e,i,s).mulScalar(I.RAD_TO_DEG)}invert(t=this){return this.conjugate(t).normalize()}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}lerp(t,e,i){const s=(1-i)*(t.dot(e)<0?-1:1);return this.x=t.x*s+e.x*i,this.y=t.y*s+e.y*i,this.z=t.z*s+e.z*i,this.w=t.w*s+e.w*i,this.normalize()}mul(t){const e=this.x,i=this.y,s=this.z,a=this.w,r=t.x,n=t.y,l=t.z,d=t.w;return this.x=a*r+e*d+i*l-s*n,this.y=a*n+i*d+s*r-e*l,this.z=a*l+s*d+e*n-i*r,this.w=a*d-e*r-i*n-s*l,this}mulScalar(t,e=this){return this.x=e.x*t,this.y=e.y*t,this.z=e.z*t,this.w=e.w*t,this}mul2(t,e){const i=t.x,s=t.y,a=t.z,r=t.w,n=e.x,l=e.y,d=e.z,f=e.w;return this.x=r*n+i*f+s*d-a*l,this.y=r*l+s*f+a*n-i*d,this.z=r*d+a*f+i*l-s*n,this.w=r*f-i*n-s*l-a*d,this}normalize(t=this){let e=t.length();return e===0?(this.x=this.y=this.z=0,this.w=1):(e=1/e,this.x=t.x*e,this.y=t.y*e,this.z=t.z*e,this.w=t.w*e),this}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setFromAxisAngle(t,e){e*=.5*I.DEG_TO_RAD;const i=Math.sin(e),s=Math.cos(e);return this.x=i*t.x,this.y=i*t.y,this.z=i*t.z,this.w=s,this}setFromEulerAngles(t,e,i){if(t instanceof _){const h=t;t=h.x,e=h.y,i=h.z}const s=.5*I.DEG_TO_RAD;t*=s,e*=s,i*=s;const a=Math.sin(t),r=Math.cos(t),n=Math.sin(e),l=Math.cos(e),d=Math.sin(i),f=Math.cos(i);return this.x=a*l*f-r*n*d,this.y=r*n*f+a*l*d,this.z=r*l*d-a*n*f,this.w=r*l*f+a*n*d,this}setFromMat4(t){const e=t.data;let i=e[0],s=e[1],a=e[2],r=e[4],n=e[5],l=e[6],d=e[8],f=e[9],h=e[10];i*(n*h-l*f)-s*(r*h-l*d)+a*(r*f-n*d)<0&&(i=-i,s=-s,a=-a);let p;return p=i*i+s*s+a*a,p===0?this.set(0,0,0,1):(p=1/Math.sqrt(p),i*=p,s*=p,a*=p,p=r*r+n*n+l*l,p===0?this.set(0,0,0,1):(p=1/Math.sqrt(p),r*=p,n*=p,l*=p,p=d*d+f*f+h*h,p===0?this.set(0,0,0,1):(p=1/Math.sqrt(p),d*=p,f*=p,h*=p,h<0?i>n?this.set(1+i-n-h,s+r,d+a,l-f):this.set(s+r,1-i+n-h,l+f,d-a):i<-n?this.set(d+a,l+f,1-i-n+h,s-r):this.set(l-f,d-a,s-r,1+i+n+h),this.mulScalar(1/this.length()))))}setFromDirections(t,e){const i=1+t.dot(e);return i<Number.EPSILON?Math.abs(t.x)>Math.abs(t.y)?(this.x=-t.z,this.y=0,this.z=t.x,this.w=0):(this.x=0,this.y=-t.z,this.z=t.y,this.w=0):(this.x=t.y*e.z-t.z*e.y,this.y=t.z*e.x-t.x*e.z,this.z=t.x*e.y-t.y*e.x,this.w=i),this.normalize()}slerp(t,e,i){const s=t.x,a=t.y,r=t.z,n=t.w;let l=e.x,d=e.y,f=e.z,h=e.w,u=n*h+s*l+a*d+r*f;if(u<0&&(h=-h,l=-l,d=-d,f=-f,u=-u),Math.abs(u)>=1)return this.w=n,this.x=s,this.y=a,this.z=r,this;const p=Math.acos(u),m=Math.sqrt(1-u*u);if(Math.abs(m)<.001)return this.w=n*.5+h*.5,this.x=s*.5+l*.5,this.y=a*.5+d*.5,this.z=r*.5+f*.5,this;const g=Math.sin((1-i)*p)/m,v=Math.sin(i*p)/m;return this.w=n*g+h*v,this.x=s*g+l*v,this.y=a*g+d*v,this.z=r*g+f*v,this}transformVector(t,e=new _){const i=t.x,s=t.y,a=t.z,r=this.x,n=this.y,l=this.z,d=this.w,f=d*i+n*a-l*s,h=d*s+l*i-r*a,u=d*a+r*s-n*i,p=-r*i-n*s-l*a;return e.x=f*d+p*-r+h*-l-u*-n,e.y=h*d+p*-n+u*-r-f*-l,e.z=u*d+p*-l+f*-n-h*-r,e}fromArray(t,e=0){return this.x=t[e]??this.x,this.y=t[e+1]??this.y,this.z=t[e+2]??this.z,this.w=t[e+3]??this.w,this}toString(){return`[${this.x}, ${this.y}, ${this.z}, ${this.w}]`}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}};o(Ai,"IDENTITY",Object.freeze(new Ai(0,0,0,1))),o(Ai,"ZERO",Object.freeze(new Ai(0,0,0,0)));let G=Ai;const ui=new _,pi=new _,Ao=new _,wo=new _,of=new _;class Ce{constructor(t,e){o(this,"center",new _);o(this,"halfExtents",new _(.5,.5,.5));o(this,"_min",new _);o(this,"_max",new _);t&&this.center.copy(t),e&&this.halfExtents.copy(e)}add(t){const e=this.center,i=e.x,s=e.y,a=e.z,r=this.halfExtents,n=r.x,l=r.y,d=r.z;let f=i-n,h=i+n,u=s-l,p=s+l,m=a-d,g=a+d;const v=t.center,E=v.x,S=v.y,T=v.z,y=t.halfExtents,C=y.x,x=y.y,A=y.z,w=E-C,L=E+C,P=S-x,R=S+x,O=T-A,B=T+A;w<f&&(f=w),L>h&&(h=L),P<u&&(u=P),R>p&&(p=R),O<m&&(m=O),B>g&&(g=B),e.x=(f+h)*.5,e.y=(u+p)*.5,e.z=(m+g)*.5,r.x=(h-f)*.5,r.y=(p-u)*.5,r.z=(g-m)*.5}copy(t){this.center.copy(t.center),this.halfExtents.copy(t.halfExtents)}clone(){return new Ce(this.center,this.halfExtents)}intersects(t){const e=this.getMax(),i=this.getMin(),s=t.getMax(),a=t.getMin();return i.x<=s.x&&e.x>=a.x&&i.y<=s.y&&e.y>=a.y&&i.z<=s.z&&e.z>=a.z}_intersectsRay(t,e){const i=ui.copy(this.getMin()).sub(t.origin),s=pi.copy(this.getMax()).sub(t.origin),a=t.direction;a.x===0?(i.x=i.x<0?-Number.MAX_VALUE:Number.MAX_VALUE,s.x=s.x<0?-Number.MAX_VALUE:Number.MAX_VALUE):(i.x/=a.x,s.x/=a.x),a.y===0?(i.y=i.y<0?-Number.MAX_VALUE:Number.MAX_VALUE,s.y=s.y<0?-Number.MAX_VALUE:Number.MAX_VALUE):(i.y/=a.y,s.y/=a.y),a.z===0?(i.z=i.z<0?-Number.MAX_VALUE:Number.MAX_VALUE,s.z=s.z<0?-Number.MAX_VALUE:Number.MAX_VALUE):(i.z/=a.z,s.z/=a.z);const r=Ao.set(Math.min(i.x,s.x),Math.min(i.y,s.y),Math.min(i.z,s.z)),n=wo.set(Math.max(i.x,s.x),Math.max(i.y,s.y),Math.max(i.z,s.z)),l=Math.min(Math.min(n.x,n.y),n.z),d=Math.max(Math.max(r.x,r.y),r.z),f=l>=d&&d>=0;return f&&e.copy(t.direction).mulScalar(d).add(t.origin),f}_fastIntersectsRay(t){const e=ui,i=pi,s=Ao,a=wo,r=of,n=t.direction;return e.sub2(t.origin,this.center),a.set(Math.abs(e.x),Math.abs(e.y),Math.abs(e.z)),s.mul2(e,n),!(a.x>this.halfExtents.x&&s.x>=0||a.y>this.halfExtents.y&&s.y>=0||a.z>this.halfExtents.z&&s.z>=0||(r.set(Math.abs(n.x),Math.abs(n.y),Math.abs(n.z)),i.cross(n,e),i.set(Math.abs(i.x),Math.abs(i.y),Math.abs(i.z)),i.x>this.halfExtents.y*r.z+this.halfExtents.z*r.y)||i.y>this.halfExtents.x*r.z+this.halfExtents.z*r.x||i.z>this.halfExtents.x*r.y+this.halfExtents.y*r.x)}intersectsRay(t,e){return e?this._intersectsRay(t,e):this._fastIntersectsRay(t)}setMinMax(t,e){this.center.add2(e,t).mulScalar(.5),this.halfExtents.sub2(e,t).mulScalar(.5)}getMin(){return this._min.copy(this.center).sub(this.halfExtents)}getMax(){return this._max.copy(this.center).add(this.halfExtents)}containsPoint(t){const e=this.center,i=this.halfExtents;return!(t.x<e.x-i.x||t.x>e.x+i.x||t.y<e.y-i.y||t.y>e.y+i.y||t.z<e.z-i.z||t.z>e.z+i.z)}closestPoint(t,e=new _){const i=this.center,s=this.halfExtents;return e.set(Math.max(i.x-s.x,Math.min(t.x,i.x+s.x)),Math.max(i.y-s.y,Math.min(t.y,i.y+s.y)),Math.max(i.z-s.z,Math.min(t.z,i.z+s.z)))}setFromTransformedAabb(t,e,i=!1){const s=t.center,a=t.halfExtents,r=e.data;let n=r[0],l=r[4],d=r[8],f=r[1],h=r[5],u=r[9],p=r[2],m=r[6],g=r[10];if(i){let v=n*n+l*l+d*d;if(v>0){const E=1/Math.sqrt(v);n*=E,l*=E,d*=E}if(v=f*f+h*h+u*u,v>0){const E=1/Math.sqrt(v);f*=E,h*=E,u*=E}if(v=p*p+m*m+g*g,v>0){const E=1/Math.sqrt(v);p*=E,m*=E,g*=E}}this.center.set(r[12]+n*s.x+l*s.y+d*s.z,r[13]+f*s.x+h*s.y+u*s.z,r[14]+p*s.x+m*s.y+g*s.z),this.halfExtents.set(Math.abs(n)*a.x+Math.abs(l)*a.y+Math.abs(d)*a.z,Math.abs(f)*a.x+Math.abs(h)*a.y+Math.abs(u)*a.z,Math.abs(p)*a.x+Math.abs(m)*a.y+Math.abs(g)*a.z)}static computeMinMax(t,e,i,s=t.length/3){if(s>0){let a=t[0],r=t[1],n=t[2],l=a,d=r,f=n;const h=s*3;for(let u=3;u<h;u+=3){const p=t[u],m=t[u+1],g=t[u+2];p<a&&(a=p),m<r&&(r=m),g<n&&(n=g),p>l&&(l=p),m>d&&(d=m),g>f&&(f=g)}e.set(a,r,n),i.set(l,d,f)}}compute(t,e){Ce.computeMinMax(t,ui,pi,e),this.setMinMax(ui,pi)}intersectsBoundingSphere(t){return this._distanceToBoundingSphereSq(t)<=t.radius*t.radius}_distanceToBoundingSphereSq(t){const e=this.getMin(),i=this.getMax();let s=0;const a=["x","y","z"];for(let r=0;r<3;++r){let n=0;const l=t.center[a[r]],d=e[a[r]],f=i[a[r]];let h=0;l<d&&(h=d-l,n+=h*h),l>f&&(h=l-f,n+=h*h),s+=n}return s}_expand(t,e){ui.add2(this.getMin(),t),pi.add2(this.getMax(),e),this.setMinMax(ui,pi)}}const Os=new _,lf=new _;class bc{constructor(t=new _,e=.5){o(this,"center");o(this,"radius");this.center=t,this.radius=e}containsPoint(t){const e=Os.sub2(t,this.center).lengthSq(),i=this.radius;return e<i*i}intersectsRay(t,e){const i=Os.copy(t.origin).sub(this.center),s=i.dot(lf.copy(t.direction).normalize()),a=i.dot(i)-this.radius*this.radius;if(a>0&&s>0)return!1;const r=s*s-a;if(r<0)return!1;const n=Math.abs(-s-Math.sqrt(r));return e&&e.copy(t.direction).mulScalar(n).add(t.origin),!0}intersectsBoundingSphere(t){Os.sub2(t.center,this.center);const e=t.radius+this.radius;return Os.lengthSq()<=e*e}}class cf{constructor(t=_.UP,e=0){o(this,"normal",new _);o(this,"distance");this.normal.copy(t),this.distance=e}clone(){const t=this.constructor;return new t().copy(this)}copy(t){return this.normal.copy(t.normal),this.distance=t.distance,this}intersectsLine(t,e,i){const s=this.distance,a=this.normal.dot(t)+s,r=this.normal.dot(e)+s,n=a/(a-r),l=n>=0&&n<=1;return l&&i&&i.lerp(t,e,n),l}intersectsRay(t,e){const i=this.normal.dot(t.direction);if(i===0)return!1;const s=-(this.normal.dot(t.origin)+this.distance)/i;return s>=0&&e&&e.copy(t.direction).mulScalar(s).add(t.origin),s>=0}normalize(){const t=1/this.normal.length();return this.normal.mulScalar(t),this.distance*=t,this}set(t,e,i,s){return this.normal.set(t,e,i),this.distance=s,this}setFromPointNormal(t,e){return this.normal.copy(e),this.distance=-this.normal.dot(t),this}}const Hi=new _,Fs=new _,Us=new _,Lo=new _;function df(c,t,e,i){Hi.cross(t.normal,e.normal);const s=c.normal.dot(Hi);if(Math.abs(s)<1e-6)return!1;Fs.cross(e.normal,c.normal),Us.cross(c.normal,t.normal);const a=-1/s;return i.set((c.distance*Hi.x+t.distance*Fs.x+e.distance*Us.x)*a,(c.distance*Hi.y+t.distance*Fs.y+e.distance*Us.y)*a,(c.distance*Hi.z+t.distance*Fs.z+e.distance*Us.z)*a),isFinite(i.x)&&isFinite(i.y)&&isFinite(i.z)}class Rc{constructor(){o(this,"planes",[]);for(let t=0;t<6;t++)this.planes[t]=new cf}clone(){const t=this.constructor;return new t().copy(this)}copy(t){for(let e=0;e<6;e++)this.planes[e].copy(t.planes[e]);return this}setFromMat4(t){const e=t.data,i=e[0],s=e[1],a=e[2],r=e[3],n=e[4],l=e[5],d=e[6],f=e[7],h=e[8],u=e[9],p=e[10],m=e[11],g=e[12],v=e[13],E=e[14],S=e[15],T=this.planes;T[0].set(r-i,f-n,m-h,S-g).normalize(),T[1].set(r+i,f+n,m+h,S+g).normalize(),T[2].set(r+s,f+l,m+u,S+v).normalize(),T[3].set(r-s,f-l,m-u,S-v).normalize(),T[4].set(r-a,f-d,m-p,S-E).normalize(),T[5].set(r+a,f+d,m+p,S+E).normalize()}containsPoint(t){for(let e=0;e<6;e++){const{normal:i,distance:s}=this.planes[e];if(i.dot(t)+s<=0)return!1}return!0}add(t){const e=this.planes,i=t.planes;for(let s=4;s<=5;s++)for(let a=0;a<=1;a++)for(let r=2;r<=3;r++)if(df(i[s],i[a],i[r],Lo))for(let n=0;n<6;n++){const l=e[n],d=l.normal.dot(Lo)+l.distance;d<0&&(l.distance-=d)}return this}containsSphere(t){const{center:e,radius:i}=t;let s=0;for(let a=0;a<6;a++){const{normal:r,distance:n}=this.planes[a],l=r.dot(e)+n;if(l<=-i)return 0;l>i&&s++}return s===6?2:1}}class Do{constructor(t,e){o(this,"origin",new _);o(this,"direction",_.FORWARD.clone());t&&this.origin.copy(t),e&&this.direction.copy(e)}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.set(t.origin,t.direction)}clone(){return new this.constructor(this.origin,this.direction)}}const ds=0,q=1,s2=2,Pn=0,Se=1,hf=2,Mc=4,ff=5,In=6,bn=8,qe=0,uf=2,pf=3,mf=4,a2=1,r2=4,n2=8,o2=16,l2=32,c2=64,d2=128,h2=256,Nt=0,Po=1,f2=2,u2=3,_f=1,gf=2,vf=4,gs=0,Sf=1,Tf=2,p2=3,sn=0,Ef=1,ve=0,Ae=1,m2=2,_2=3,g2=4,Nc=5,v2=0,an=1,S2=2,Io=3,T2=4,E2=5,y2=6,Bs=7,x2=0,rn=1,nn=2,yf=[1,2,4],xf=0,Cf=1,Af=2,Oc=3,Fc=4,Uc=5,wf=6,je=7,Lf=8,Df=9,Bc=10,kc=11,Ue=12,zc=13,at=14,Ni=15,Di=16,Rn=17,Pf=18,If=19,on=20,bf=21,Rf=22,Mf=23,Vc=24,Gc=25,Nf=26,Of=27,Ff=28,Uf=29,Bf=30,kf=31,Hc=32,Wc=33,Xc=34,Yc=35,$c=36,hs=37,qc=38,zf=39,jc=40,Kc=41,Zc=42,Mn=43,Jc=44,Vf=45,Qc=46,Nn=47,ed=48,ma=49,On=50,td=51,Gf=52,Hf=53,bo=54,Ro=55,Mo=56,No=61,Oo=62,Fo=63,Wf=64,Xf=65,Yf=66,$f=67,Uo=68,fs=69,id=70,sd=71,ad=72,rd=73,nd=74,od=75,Re=new Map([[xf,{name:"A8",size:1,ldr:!0}],[Gf,{name:"R8",size:1,ldr:!0}],[Cf,{name:"L8",size:1,ldr:!0}],[Af,{name:"LA8",size:2,ldr:!0}],[Hf,{name:"RG8",size:2,ldr:!0}],[Oc,{name:"RGB565",size:2,ldr:!0}],[Fc,{name:"RGBA5551",size:2,ldr:!0}],[Uc,{name:"RGBA4",size:2,ldr:!0}],[wf,{name:"RGB8",size:4,ldr:!0}],[je,{name:"RGBA8",size:4,ldr:!0,srgbFormat:on}],[On,{name:"R16F",size:2}],[td,{name:"RG16F",size:4}],[kc,{name:"RGB16F",size:8}],[Ue,{name:"RGBA16F",size:8}],[zc,{name:"RGB32F",size:16}],[at,{name:"RGBA32F",size:16}],[Ni,{name:"R32F",size:4}],[id,{name:"RG32F",size:8}],[sd,{name:"RGB9E5",size:4}],[ad,{name:"RG8S",size:2}],[rd,{name:"RGBA8S",size:4}],[nd,{name:"RGB10A2",size:4}],[od,{name:"RGB10A2U",size:4,isUint:!0}],[Di,{name:"DEPTH",size:4}],[fs,{name:"DEPTH16",size:2}],[Rn,{name:"DEPTHSTENCIL",size:4}],[Pf,{name:"111110F",size:4}],[If,{name:"SRGB8",size:4,ldr:!0,srgb:!0}],[on,{name:"SRGBA8",size:4,ldr:!0,srgb:!0}],[kf,{name:"BGRA8",size:4,ldr:!0}],[Wf,{name:"SBGRA8",size:4,ldr:!0,srgb:!0}],[Lf,{name:"DXT1",blockSize:8,ldr:!0,srgbFormat:bo}],[Df,{name:"DXT3",blockSize:16,ldr:!0,srgbFormat:Ro}],[Bc,{name:"DXT5",blockSize:16,ldr:!0,srgbFormat:Mo}],[bf,{name:"ETC1",blockSize:8,ldr:!0}],[Rf,{name:"ETC2_RGB",blockSize:8,ldr:!0,srgbFormat:No}],[Mf,{name:"ETC2_RGBA",blockSize:16,ldr:!0,srgbFormat:Oo}],[Vc,{name:"PVRTC_2BPP_RGB_1",ldr:!0,blockSize:8}],[Gc,{name:"PVRTC_2BPP_RGBA_1",ldr:!0,blockSize:8}],[Nf,{name:"PVRTC_4BPP_RGB_1",ldr:!0,blockSize:8}],[Of,{name:"PVRTC_4BPP_RGBA_1",ldr:!0,blockSize:8}],[Ff,{name:"ASTC_4x4",blockSize:16,ldr:!0,srgbFormat:Fo}],[Uf,{name:"ATC_RGB",blockSize:8,ldr:!0}],[Bf,{name:"ATC_RGBA",blockSize:16,ldr:!0}],[Xf,{name:"BC6H_RGBF",blockSize:16}],[Yf,{name:"BC6H_RGBUF",blockSize:16}],[$f,{name:"BC7_RGBA",blockSize:16,ldr:!0,srgbFormat:Uo}],[bo,{name:"DXT1_SRGB",blockSize:8,ldr:!0,srgb:!0}],[Ro,{name:"DXT3_SRGBA",blockSize:16,ldr:!0,srgb:!0}],[Mo,{name:"DXT5_SRGBA",blockSize:16,ldr:!0,srgb:!0}],[No,{name:"ETC2_SRGB",blockSize:8,ldr:!0,srgb:!0}],[Oo,{name:"ETC2_SRGBA",blockSize:16,ldr:!0,srgb:!0}],[Fo,{name:"ASTC_4x4_SRGB",blockSize:16,ldr:!0,srgb:!0}],[Uo,{name:"BC7_SRGBA",blockSize:16,ldr:!0,srgb:!0}],[Hc,{name:"R8I",size:1,isInt:!0}],[Xc,{name:"R16I",size:2,isInt:!0}],[$c,{name:"R32I",size:4,isInt:!0}],[qc,{name:"RG8I",size:2,isInt:!0}],[jc,{name:"RG16I",size:4,isInt:!0}],[Zc,{name:"RG32I",size:8,isInt:!0}],[Jc,{name:"RGBA8I",size:4,isInt:!0}],[Qc,{name:"RGBA16I",size:8,isInt:!0}],[ed,{name:"RGBA32I",size:16,isInt:!0}],[Wc,{name:"R8U",size:1,isUint:!0}],[Yc,{name:"R16U",size:2,isUint:!0}],[hs,{name:"R32U",size:4,isUint:!0}],[zf,{name:"RG8U",size:2,isUint:!0}],[Kc,{name:"RG16U",size:4,isUint:!0}],[Mn,{name:"RG32U",size:8,isUint:!0}],[Vf,{name:"RGBA8U",size:4,isUint:!0}],[Nn,{name:"RGBA16U",size:8,isUint:!0}],[ma,{name:"RGBA32U",size:16,isUint:!0}]]),qf=c=>{var t;return((t=Re.get(c))==null?void 0:t.blockSize)!==void 0},_a=c=>{var t;return((t=Re.get(c))==null?void 0:t.srgb)===!0},ts=c=>{const t=Re.get(c);return(t==null?void 0:t.isInt)===!0||(t==null?void 0:t.isUint)===!0},jf={sampler:"sampler2D",returnType:"vec4"},Kf={sampler:"usampler2D",returnType:"uvec4"},Zf={sampler:"isampler2D",returnType:"ivec4"},Jf={textureType:"texture_2d<f32>",returnType:"vec4f"},Qf={textureType:"texture_2d<u32>",returnType:"vec4u"},eu={textureType:"texture_2d<i32>",returnType:"vec4i"},Qa=c=>{const t=Re.get(c);return t!=null&&t.isUint?Kf:t!=null&&t.isInt?Zf:jf},ks=c=>{const t=Re.get(c);return t!=null&&t.isUint?Qf:t!=null&&t.isInt?eu:Jf},Bo=c=>{var t;return((t=Re.get(c))==null?void 0:t.srgbFormat)||c},tu=c=>{for(const[t,e]of Re)if(e.srgbFormat===c)return t;return c},iu=c=>{const t=Re.get(c);return!!(t!=null&&t.ldr&&!(t!=null&&t.srgb))},su=c=>{switch(c){case Ni:case id:case zc:case at:return Float32Array;case $c:case Zc:case ed:return Int32Array;case hs:case Mn:case ma:case sd:case nd:case od:return Uint32Array;case Xc:case jc:case Qc:return Int16Array;case Yc:case Kc:case Nn:case Oc:case Fc:case Uc:case On:case td:case kc:case Ue:return Uint16Array;case Hc:case qc:case Jc:case ad:case rd:return Int8Array;default:return Uint8Array}},au=0,ld=1,C2=2,A2=3,ga=4,cd=5,ru=6,ge="POSITION",Ri="NORMAL",Oi="TANGENT",ri="BLENDWEIGHT",ni="BLENDINDICES",gt="COLOR",ko="TEXCOORD",Ua="TEXCOORD0",Ba="TEXCOORD1",dd="TEXCOORD2",hd="TEXCOORD3",fd="TEXCOORD4",ud="TEXCOORD5",pd="TEXCOORD6",md="TEXCOORD7",nu="ATTR0",ou="ATTR1",lu="ATTR2",cu="ATTR3",du="ATTR4",hu="ATTR5",fu="ATTR6",uu="ATTR7",_d="ATTR8",gd="ATTR9",pu="ATTR10",Fn="ATTR11",Un="ATTR12",mu="ATTR13",Bn="ATTR14",vs="ATTR15",_u=1,w2=0,L2=2,D2=3,P2=5,er=0,gu=1,zo=2,ii="default",tr="rgbm",vu="rgbe",va="rgbp",ln="swizzleGGGR",I2="1d",vd="2d",b2="2d-array",R2="cube",M2="cube-array",N2="3d",Sd=0,O2=1,F2=2,Su=3,Tu=4,Eu="none",cn="cube",Vo="equirect",yu="octahedral",ae="glsl",ue="wgsl",xu=0,ir=1,Cu=2,Au=3,kn=4,ka=5,Ye=6,U2=7,Td=0,Pi=1,Ss=2,za=3,Qt=4,Va=5,zn=6,Ts=7,Vn=8,Ed=9,yd=10,xd=11,Cd=12,Sa=13,bt=14,B2=15,k2=16,Ad=17,z2=18,V2=19,G2=20,wd=21,Ld=22,wu=23,Lu=24,H2=25,Ga=26,Gn=27,Hn=28,Wn=29,Xn=30,Dd=31,Pd=32,Yn=33,Id=34,bd=35,$n=36,Rd=37,Md=38,Du=39,Pu=40,Iu=41,W2=42,X2=43,Y2=44,$2=45,q2=46,j2=47,K2=48,Z2=49,J2=["bool","int","float","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","mat2","mat3","mat4","sampler2D","samplerCube","","sampler2DShadow","samplerCubeShadow","sampler3D","","","","","sampler2DArray","uint","uvec2","uvec3","uvec4","","","","","","","","","","","","","isampler2D","usampler2D","isamplerCube","usamplerCube","isampler3D","usampler3D","isampler2DArray","usampler2DArray"],bu=[["bool"],["i32"],["f32"],["vec2f","vec2<f32>"],["vec3f","vec3<f32>"],["vec4f","vec4<f32>"],["vec2i","vec2<i32>"],["vec3i","vec3<i32>"],["vec4i","vec4<i32>"],["vec2<bool>"],["vec3<bool>"],["vec4<bool>"],["mat2x2f","mat2x2<f32>"],["mat3x3f","mat3x3<f32>"],["mat4x4f","mat4x4<f32>"],["texture_2d<f32>"],["texture_cube<f32>"],["array<f32>"],["texture_depth_2d"],["texture_depth_cube"],["texture_3d<f32>"],["array<vec2<f32>>"],["array<vec3<f32>>"],["array<vec4<f32>>"],["array<mat4x4<f32>>"],["texture_2d_array<f32>"],["u32"],["vec2u","vec2<u32>"],["vec3u","vec3<u32>"],["vec4u","vec4<u32>"],["array<i32>"],["array<u32>"],["array<bool>"],["array<vec2i>","array<vec2<i32>>"],["array<vec2u>","array<vec2<u32>>"],["array<vec2b>","array<vec2<bool>>"],["array<vec3i>","array<vec3<i32>>"],["array<vec3u>","array<vec3<u32>>"],["array<vec3b>","array<vec3<bool>>"],["array<vec4i>","array<vec4<i32>>"],["array<vec4u>","array<vec4<u32>>"],["array<vec4b>","array<vec4<bool>>"],["texture_2d<i32>"],["texture_2d<u32>"],["texture_cube<i32>"],["texture_cube<u32>"],["texture_3d<i32>"],["texture_3d<u32>"],["texture_2d_array<i32>"],["texture_2d_array<u32>"]],Ru=new Map;bu.forEach((c,t)=>{c.forEach(e=>Ru.set(e,t))});const Q2="webgl2",eA="webgpu",tA=1,iA=2,Nd=4,sA="ldr",aA="ldr_srgb",rA="hdr",Go=1,Mu=2,Nu=4,Ou=8,Fu=16,Uu=32,Bu=64,ku=128,zu=255,Ha=0,Od=1,dn=2,nA=["view","mesh","mesh_ub"],Vu="default",oA="_unused_float_uniform",Ho=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Uint16Array],sr=[1,1,2,2,4,4,4,2],Gu=[Uint8Array,Uint16Array,Uint32Array],Hu=[1,2,4],Fd=new Map([["float","f32"],["vec2","vec2f"],["vec3","vec3f"],["vec4","vec4f"],["int","i32"],["ivec2","vec2i"],["ivec3","vec3i"],["ivec4","vec4i"],["uint","u32"],["uvec2","vec2u"],["uvec3","vec3u"],["uvec4","vec4u"]]),X={};X[ge]=0;X[Ri]=1;X[ri]=2;X[ni]=3;X[gt]=4;X[Ua]=5;X[Ba]=6;X[dd]=7;X[hd]=8;X[fd]=9;X[ud]=10;X[pd]=11;X[md]=12;X[Oi]=13;X[nu]=0;X[ou]=1;X[lu]=2;X[cu]=3;X[du]=4;X[hu]=5;X[fu]=6;X[uu]=7;X[_d]=8;X[gd]=9;X[pu]=10;X[Fn]=11;X[Un]=12;X[mu]=13;X[Bn]=14;X[vs]=15;let Wu=0;class Wa{constructor(t,e){o(this,"slot",-1);o(this,"scopeId",null);this.name=t,this.visibility=e}}class Xu extends Wa{}class Yu extends Wa{constructor(e,i,s=!1){super(e,i);o(this,"format","");this.readOnly=s}}class hn extends Wa{constructor(t,e,i=vd,s=Sd,a=!0,r=null){super(t,e),this.textureDimension=i,this.sampleType=s,this.hasSampler=a,this.samplerName=r??`${t}_sampler`}}class $u extends Wa{constructor(t,e=je,i=vd,s=!0,a=!1){super(t,Nd),this.format=e,this.textureDimension=i,this.write=s,this.read=a}}class lA{constructor(t,e){o(this,"uniformBufferFormats",[]);o(this,"textureFormats",[]);o(this,"storageTextureFormats",[]);o(this,"storageBufferFormats",[]);this.id=Wu++;let i=0;e.forEach(a=>{a.slot=i++,a instanceof hn&&a.hasSampler&&i++,a instanceof Xu?this.uniformBufferFormats.push(a):a instanceof hn?this.textureFormats.push(a):a instanceof $u?this.storageTextureFormats.push(a):a instanceof Yu&&this.storageBufferFormats.push(a)}),this.device=t;const s=t.scope;this.bufferFormatsMap=new Map,this.uniformBufferFormats.forEach((a,r)=>this.bufferFormatsMap.set(a.name,r)),this.textureFormatsMap=new Map,this.textureFormats.forEach((a,r)=>{this.textureFormatsMap.set(a.name,r),a.scopeId=s.resolve(a.name)}),this.storageTextureFormatsMap=new Map,this.storageTextureFormats.forEach((a,r)=>{this.storageTextureFormatsMap.set(a.name,r),a.scopeId=s.resolve(a.name)}),this.storageBufferFormatsMap=new Map,this.storageBufferFormats.forEach((a,r)=>{this.storageBufferFormatsMap.set(a.name,r),a.scopeId=s.resolve(a.name)}),this.impl=t.createBindGroupFormatImpl(this)}destroy(){this.impl.destroy()}getTexture(t){const e=this.textureFormatsMap.get(t);return e!==void 0?this.textureFormats[e]:null}getStorageTexture(t){const e=this.storageTextureFormatsMap.get(t);return e!==void 0?this.storageTextureFormats[e]:null}loseContext(){}}class nt{constructor(){o(this,"_cache",new Map)}get(t,e){return this._cache.has(t)||(this._cache.set(t,e()),t.on("destroy",()=>{this.remove(t)}),t.on("devicelost",()=>{var i,s;(s=(i=this._cache.get(t))==null?void 0:i.loseContext)==null||s.call(i,t)})),this._cache.get(t)}remove(t){var e,i;(i=(e=this._cache.get(t))==null?void 0:e.destroy)==null||i.call(e,t),this._cache.delete(t)}}class Ot{static calcLevelDimension(t,e){return Math.max(t>>e,1)}static calcMipLevelsCount(t,e,i=1){return 1+Math.floor(Math.log2(Math.max(t,e,i)))}static calcLevelGpuSize(t,e,i,s){var h;const a=Re.get(s),r=((h=Re.get(s))==null?void 0:h.size)??0;if(r>0)return t*e*i*r;const n=a.blockSize??0;let l=Math.floor((t+3)/4);const d=Math.floor((e+3)/4),f=Math.floor((i+3)/4);return(s===Vc||s===Gc)&&(l=Math.max(Math.floor(l/2),1)),l*d*f*n}static calcGpuSize(t,e,i,s,a,r){let n=0;for(;n+=Ot.calcLevelGpuSize(t,e,i,s),!(!a||t===1&&e===1&&i===1);)t=Math.max(t>>1,1),e=Math.max(e>>1,1),i=Math.max(i>>1,1);return n*(r?6:1)}static calcTextureSize(t,e,i=1){let s=Math.ceil(Math.sqrt(t));return i>1&&(s=I.roundUp(s,i)),e.set(s,Math.ceil(t/s))}}class qn{constructor(){o(this,"map",new Map);o(this,"id",0)}get(t){let e=this.map.get(t);return e===void 0&&(e=this.id++,this.map.set(t,e)),e}}const qu=new qn;class fn{constructor(t,e=0,i=1,s=0,a=1){o(this,"texture");o(this,"baseMipLevel");o(this,"mipLevelCount");o(this,"baseArrayLayer");o(this,"arrayLayerCount");o(this,"key");this.texture=t,this.baseMipLevel=e,this.mipLevelCount=i,this.baseArrayLayer=s,this.arrayLayerCount=a,this.key=qu.get(`${e}:${i}:${s}:${a}`)}}let ju=0;class ce{constructor(t,e={}){o(this,"name");o(this,"_gpuSize",0);o(this,"releaseSourceAfterUpload",!1);o(this,"id",ju++);o(this,"_invalid",!1);o(this,"_lockedLevel",-1);o(this,"_lockedMode",er);o(this,"renderVersionDirty",0);o(this,"uploadVersion",0);o(this,"_storage",!1);o(this,"_numLevels",0);o(this,"_numLevelsRequested");this.device=t,this.name=e.name??"",this._width=Math.floor(e.width??4),this._height=Math.floor(e.height??4);const i=e.format??je;this._format=e.srgb?Bo(i):i,this._compressed=qf(this._format),this._integerFormat=ts(this._format),this._integerFormat&&(e.minFilter=ve,e.magFilter=ve),this._volume=e.volume??!1,this._depth=Math.floor(e.depth??1),this._arrayLength=Math.floor(e.arrayLength??0),this._storage=e.storage??!1,this._cubemap=e.cubemap??!1,this._flipY=e.flipY??!1,this._premultiplyAlpha=e.premultiplyAlpha??!1,this._mipmaps=e.mipmaps??!0,this._numLevelsRequested=e.numLevels,e.numLevels!==void 0&&(this._numLevels=e.numLevels),this._updateNumLevels(),this._minFilter=e.minFilter??Nc,this._magFilter=e.magFilter??Ae,this._anisotropy=e.anisotropy??1,this._addressU=e.addressU??ds,this._addressV=e.addressV??ds,this._addressW=e.addressW??ds,this._compareOnRead=e.compareOnRead??!1,this._compareFunc=e.compareFunc??an,this._type=e.type??ii,this.projection=Eu,this._cubemap?this.projection=cn:e.projection&&e.projection!==cn&&(this.projection=e.projection),this._levels=e.levels;const s=!!e.levels;this._levels||this._clearLevels(),this.recreateImpl(s)}static createDataTexture2D(t,e,i,s,a,r){return new ce(t,{name:e,width:i,height:s,format:a,mipmaps:!1,minFilter:ve,magFilter:ve,addressU:q,addressV:q,levels:r})}destroy(){const t=this.device;t&&(t.onTextureDestroyed(this),this.impl.destroy(t),this.adjustVramSizeTracking(t._vram,-this._gpuSize),this.releaseSourceAfterUpload&&this.releaseImageSources(),this._levels=null,this.device=null)}releaseImageSources(){if(this.releaseSourceAfterUpload=!1,!(typeof ImageBitmap>"u"||!this._levels))for(let t=0;t<this._levels.length;t++){const e=this._levels[t];if(e instanceof ImageBitmap)e.close(),this._levels[t]=null;else if(Array.isArray(e))for(let i=0;i<e.length;i++)e[i]instanceof ImageBitmap&&(e[i].close(),e[i]=null)}}setReleaseSourceAfterUpload(){this.releaseSourceAfterUpload=!0,!this._needsUpload&&!this._needsMipmapsUpload&&this.releaseImageSources()}recreateImpl(t=!0){var i;const{device:e}=this;(i=this.impl)==null||i.destroy(e),this.impl=null,this.impl=e.createTextureImpl(this),this.dirtyAll(),t&&this.upload()}_clearLevels(){this._levels=this._cubemap?[[null,null,null,null,null,null]]:[null]}resize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){const s=this.device;this.adjustVramSizeTracking(s._vram,-this._gpuSize),this._gpuSize=0,this.impl.destroy(s),this._clearLevels(),this._width=Math.floor(t),this._height=Math.floor(e),this._depth=Math.floor(i),this._updateNumLevels(),this.impl=s.createTextureImpl(this),this.dirtyAll()}}loseContext(){this.impl.loseContext(),this.dirtyAll()}adjustVramSizeTracking(t,e){t.tex+=e}propertyChanged(t){this.impl.propertyChanged(t),this.renderVersionDirty=this.device.renderVersion}_updateNumLevels(){const t=this.mipmaps?Ot.calcMipLevelsCount(this.width,this.height):1,e=this._numLevelsRequested;this._numLevels=Math.min(e??t,t),this._mipmaps=this._numLevels>1}get lockedMode(){return this._lockedMode}set minFilter(t){this._minFilter!==t&&(ts(this._format)||(this._minFilter=t,this.propertyChanged(Go)))}get minFilter(){return this._minFilter}set magFilter(t){this._magFilter!==t&&(ts(this._format)||(this._magFilter=t,this.propertyChanged(Mu)))}get magFilter(){return this._magFilter}set addressU(t){this._addressU!==t&&(this._addressU=t,this.propertyChanged(Nu))}get addressU(){return this._addressU}set addressV(t){this._addressV!==t&&(this._addressV=t,this.propertyChanged(Ou))}get addressV(){return this._addressV}set addressW(t){this._volume&&t!==this._addressW&&(this._addressW=t,this.propertyChanged(Fu))}get addressW(){return this._addressW}set compareOnRead(t){this._compareOnRead!==t&&(this._compareOnRead=t,this.propertyChanged(Uu))}get compareOnRead(){return this._compareOnRead}set compareFunc(t){this._compareFunc!==t&&(this._compareFunc=t,this.propertyChanged(Bu))}get compareFunc(){return this._compareFunc}set anisotropy(t){this._anisotropy!==t&&(this._anisotropy=t,this.propertyChanged(ku))}get anisotropy(){return this._anisotropy}set mipmaps(t){var e,i;if(this._mipmaps!==t&&!ts(this._format)){const s=this._mipmaps,a=this._numLevels;this._mipmaps=t,this._updateNumLevels(),(this.array||this.device.isWebGPU)&&this._numLevels!==a?this.recreateImpl():this._mipmaps!==s&&(this.propertyChanged(Go),this._mipmaps?(this._needsMipmapsUpload=!0,(i=(e=this.device)==null?void 0:e.texturesToUpload)==null||i.add(this)):this._needsMipmapsUpload=!1)}}get mipmaps(){return this._mipmaps}get numLevels(){return this._numLevels}get storage(){return this._storage}get width(){return this._width}get height(){return this._height}get depth(){return this._depth}get format(){return this._format}get cubemap(){return this._cubemap}get gpuSize(){const t=this.pot&&this._mipmaps&&!(this._compressed&&this._levels.length===1);return Ot.calcGpuSize(this._width,this._height,this._depth,this._format,t,this._cubemap)}get array(){return this._arrayLength>0}get arrayLength(){return this._arrayLength}get volume(){return this._volume}set type(t){this._type!==t&&(this._type=t,this.device._shadersDirty=!0)}get type(){return this._type}set rgbm(t){this.type=t?tr:ii}get rgbm(){return this.type===tr}set swizzleGGGR(t){this.type=t?ln:ii}get swizzleGGGR(){return this.type===ln}get _glTexture(){return this.impl._glTexture}set srgb(t){const e=_a(this.format);if(t!==e)if(t){const i=Bo(this.format);this._format!==i&&(this._format=i,this.recreateImpl(),this.device._shadersDirty=!0)}else{const i=tu(this.format);this._format!==i&&(this._format=i,this.recreateImpl(),this.device._shadersDirty=!0)}}get srgb(){return _a(this.format)}set flipY(t){this._flipY!==t&&(this._flipY=t,this.markForUpload())}get flipY(){return this._flipY}set premultiplyAlpha(t){this._premultiplyAlpha!==t&&(this._premultiplyAlpha=t,this.markForUpload())}get premultiplyAlpha(){return this._premultiplyAlpha}get pot(){return I.powerOfTwo(this._width)&&I.powerOfTwo(this._height)}get encoding(){switch(this.type){case tr:return"rgbm";case vu:return"rgbe";case va:return"rgbp"}return iu(this.format)?"srgb":"linear"}dirtyAll(){this._levelsUpdated=this._cubemap?[[!0,!0,!0,!0,!0,!0]]:[!0],this.markForUpload(),this._needsMipmapsUpload=this._mipmaps,this._mipmapsUploaded=!1,this.propertyChanged(zu)}lock(t={}){t.level??(t.level=0),t.face??(t.face=0),t.mode??(t.mode=zo),this._lockedMode=t.mode,this._lockedLevel=t.level;const e=this.cubemap?this._levels[t.face]:this._levels;if(!e[t.level]){const i=Math.max(1,this._width>>t.level),s=Math.max(1,this._height>>t.level),a=Math.max(1,this._depth>>t.level),r=new ArrayBuffer(Ot.calcLevelGpuSize(i,s,a,this._format));e[t.level]=new(su(this._format))(r)}return e[t.level]}setSource(t,e=0){if(this.device._isHTMLElementInterface(t)&&(!this.device.supportsHtmlTextures||this._cubemap||this._volume))return;let i=!1,s,a;if(this._cubemap){if(t[0]){s=t[0].width||0,a=t[0].height||0;for(let r=0;r<6;r++){const n=t[r];if(!n||n.width!==s||n.height!==a||!this.device._isBrowserInterface(n)){i=!0;break}}}else i=!0;if(!i)for(let r=0;r<6;r++)this._levels[e][r]!==t[r]&&(this._levelsUpdated[e][r]=!0)}else if(this.device._isBrowserInterface(t)||(i=!0),!i)if(t!==this._levels[e]&&(this._levelsUpdated[e]=!0),t instanceof HTMLVideoElement)s=t.videoWidth,a=t.videoHeight;else if(this.device._isHTMLElementInterface(t)){const r=t.getBoundingClientRect();s=Math.floor(r.width)||1,a=Math.floor(r.height)||1}else s=t.width,a=t.height;if(i)if(this._width=4,this._height=4,this._cubemap)for(let r=0;r<6;r++)this._levels[e][r]=null,this._levelsUpdated[e][r]=!0;else this._levels[e]=null,this._levelsUpdated[e]=!0;else e===0&&(this._width=s,this._height=a),this._levels[e]=t;(this._invalid!==i||!i)&&(this._invalid=i,this.upload())}getSource(t=0){return this._levels[t]}unlock(){this._lockedMode,this._lockedMode===zo&&this.upload(),this._lockedLevel=-1,this._lockedMode=er}markForUpload(){var t,e;this._needsUpload=!0,this.device&&(this.uploadVersion=this.device.renderVersion),(e=(t=this.device)==null?void 0:t.texturesToUpload)==null||e.add(this)}upload(){var t,e;this.markForUpload(),this._needsMipmapsUpload=this._mipmaps,(e=(t=this.impl).uploadImmediate)==null||e.call(t,this.device,this)}read(t,e,i,s,a={}){var r,n;return(n=(r=this.impl).read)==null?void 0:n.call(r,t,e,i,s,a)}write(t,e,i,s,a){var r,n;return(n=(r=this.impl).write)==null?void 0:n.call(r,t,e,i,s,a)}_validateCopy(t,e){return!0}copy(t,e={}){var i,s;return this._validateCopy(t,e)?((s=(i=this.impl).copy)==null?void 0:s.call(i,t,e))??!0:!1}getView(t=0,e=1,i=0,s=1){return new fn(this,t,e,i,s)}}const Ku={white:[255,255,255,255],gray:[128,128,128,255],black:[0,0,0,255],normal:[128,128,255,255],pink:[255,128,255,255]};class Zu{constructor(){o(this,"map",new Map)}destroy(){this.map.forEach(t=>{t.destroy()})}}const Ju=new nt,ar=(c,t)=>{const e=Ju.get(c,()=>new Zu);if(!e.map.has(t)){const i=new ce(c,{name:`built-in-texture-${t}`,width:1,height:1,format:je}),s=i.lock(),a=Ku[t];s.set(a),i.unlock(),e.map.set(t,i)}return e.map.get(t)};let Qu=0;class jn{constructor(){o(this,"bindGroup");o(this,"offsets",[])}}class Ud{constructor(t,e,i){o(this,"renderVersionUpdated",-1);o(this,"uniformBuffers");o(this,"uniformBufferOffsets",[]);o(this,"_uniformBufferContainers",[]);o(this,"_textureImpls",[]);o(this,"_storageTextureImpls",[]);this.id=Qu++,this.device=t,this.format=e,this.dirty=!0,this.impl=t.createBindGroupImpl(this),this.textures=[],this.storageTextures=[],this.storageBuffers=[],this.uniformBuffers=[],this.defaultUniformBuffer=i,i&&this.setUniformBuffer(Vu,i)}destroy(){this.impl.destroy(),this.impl=null,this.format=null,this.defaultUniformBuffer=null}setUniformBuffer(t,e){const i=this.format.bufferFormatsMap.get(t);this.uniformBuffers[i]!==e&&(this.uniformBuffers[i]=e,this.dirty=!0)}setStorageBuffer(t,e){const i=this.format.storageBufferFormatsMap.get(t);this.storageBuffers[i]!==e&&(this.storageBuffers[i]=e,this.dirty=!0)}setTexture(t,e){const i=this.format.textureFormatsMap.get(t),s=e instanceof fn?e.texture:e;this.textures[i]!==e?(this.textures[i]=e,this.dirty=!0):this.renderVersionUpdated<s.renderVersionDirty?this.dirty=!0:this._textureImpls[i]!==s.impl&&(this.dirty=!0),this._textureImpls[i]=s.impl}setStorageTexture(t,e){const i=this.format.storageTextureFormatsMap.get(t),s=e instanceof fn?e.texture:e;this.storageTextures[i]!==e?(this.storageTextures[i]=e,this.dirty=!0):this.renderVersionUpdated<s.renderVersionDirty?this.dirty=!0:this._storageTextureImpls[i]!==s.impl&&(this.dirty=!0),this._storageTextureImpls[i]=s.impl}updateUniformBuffers(){for(let t=0;t<this.uniformBuffers.length;t++)this.uniformBuffers[t].update()}update(){const{textureFormats:t,storageTextureFormats:e,storageBufferFormats:i}=this.format;for(let s=0;s<t.length;s++){const a=t[s];let r=a.scopeId.value;r||(a.name==="uSceneDepthMap"&&(r=ar(this.device,"white")),a.name==="uSceneColorMap"&&(r=ar(this.device,"pink")),r||(r=ar(this.device,"pink"))),this.setTexture(a.name,r)}for(let s=0;s<e.length;s++){const a=e[s],r=a.scopeId.value;this.setStorageTexture(a.name,r)}for(let s=0;s<i.length;s++){const a=i[s],r=a.scopeId.value;this.setStorageBuffer(a.name,r)}this.uniformBufferOffsets.length=this.uniformBuffers.length;for(let s=0;s<this.uniformBuffers.length;s++){const a=this.uniformBuffers[s];if(this.uniformBufferOffsets[s]=a.offset,!a.persistent){const r=a.allocation.gpuBuffer;this._uniformBufferContainers[s]!==r&&(this._uniformBufferContainers[s]=r,this.dirty=!0)}}this.dirty&&(this.dirty=!1,this.renderVersionUpdated=this.device.renderVersion,this.impl.update(this))}}const Z={set(c,t,e,i=1){return c&~(i<<e)|t<<e},get(c,t,e=1){return c>>t&e},all(c,t,e=1){const i=e<<t;return(c&i)===i},any(c,t,e=1){return(c&e<<t)!==0}},zs=7,yt=15,Wo=0,Xo=3,Yo=7,$o=11,qo=14,jo=18,un=22,Ko=23,Zo=24,Jo=25,Qo=26,ep=15,tp=un,Ve=class Ve{constructor(t=!1,e=qe,i=Se,s=Pn,a,r,n,l=!0,d=!0,f=!0,h=!0){o(this,"target0",0);this.setColorBlend(e,i,s),this.setAlphaBlend(a??e,r??i,n??s),this.setColorWrite(l,d,f,h),this.blend=t}set blend(t){this.target0=Z.set(this.target0,t?1:0,Qo)}get blend(){return Z.all(this.target0,Qo)}setColorBlend(t,e,i){this.target0=Z.set(this.target0,t,Wo,zs),this.target0=Z.set(this.target0,e,Xo,yt),this.target0=Z.set(this.target0,i,Yo,yt)}setAlphaBlend(t,e,i){this.target0=Z.set(this.target0,t,$o,zs),this.target0=Z.set(this.target0,e,qo,yt),this.target0=Z.set(this.target0,i,jo,yt)}setColorWrite(t,e,i,s){this.redWrite=t,this.greenWrite=e,this.blueWrite=i,this.alphaWrite=s}get colorOp(){return Z.get(this.target0,Wo,zs)}get colorSrcFactor(){return Z.get(this.target0,Xo,yt)}get colorDstFactor(){return Z.get(this.target0,Yo,yt)}get alphaOp(){return Z.get(this.target0,$o,zs)}get alphaSrcFactor(){return Z.get(this.target0,qo,yt)}get alphaDstFactor(){return Z.get(this.target0,jo,yt)}set redWrite(t){this.target0=Z.set(this.target0,t?1:0,un)}get redWrite(){return Z.all(this.target0,un)}set greenWrite(t){this.target0=Z.set(this.target0,t?1:0,Ko)}get greenWrite(){return Z.all(this.target0,Ko)}set blueWrite(t){this.target0=Z.set(this.target0,t?1:0,Zo)}get blueWrite(){return Z.all(this.target0,Zo)}set alphaWrite(t){this.target0=Z.set(this.target0,t?1:0,Jo)}get alphaWrite(){return Z.all(this.target0,Jo)}get allWrite(){return Z.get(this.target0,tp,ep)}copy(t){return this.target0=t.target0,this}clone(){return new this.constructor().copy(this)}get key(){return this.target0}equals(t){return this.target0===t.target0}static get DEFAULT(){return Ve.NOBLEND}};o(Ve,"NOBLEND",Object.freeze(new Ve)),o(Ve,"NOWRITE",Object.freeze(new Ve(void 0,void 0,void 0,void 0,void 0,void 0,void 0,!1,!1,!1,!1))),o(Ve,"ALPHABLEND",Object.freeze(new Ve(!0,qe,In,bn))),o(Ve,"ADDBLEND",Object.freeze(new Ve(!0,qe,Se,Se)));let vt=Ve;const ip=new qn,el=7,tl=0,il=3,Pt=class Pt{constructor(t=Io,e=!0){o(this,"data",0);o(this,"_depthBias",0);o(this,"_depthBiasSlope",0);o(this,"key",0);this.func=t,this.write=e}set test(t){this.func=t?Io:Bs,this.updateKey()}get test(){return this.func!==Bs}set write(t){this.data=Z.set(this.data,t?1:0,il),this.updateKey()}get write(){return Z.all(this.data,il)}set func(t){this.data=Z.set(this.data,t,tl,el),this.updateKey()}get func(){return Z.get(this.data,tl,el)}set depthBias(t){this._depthBias=t,this.updateKey()}get depthBias(){return this._depthBias}set depthBiasSlope(t){this._depthBiasSlope=t,this.updateKey()}get depthBiasSlope(){return this._depthBiasSlope}copy(t){return this.data=t.data,this._depthBias=t._depthBias,this._depthBiasSlope=t._depthBiasSlope,this.key=t.key,this}clone(){return new this.constructor().copy(this)}updateKey(){const{data:t,_depthBias:e,_depthBiasSlope:i}=this,s=`${t}-${e}-${i}`;this.key=ip.get(s)}equals(t){return this.key===t.key}};o(Pt,"DEFAULT",Object.freeze(new Pt)),o(Pt,"NODEPTH",Object.freeze(new Pt(Bs,!1))),o(Pt,"WRITEDEPTH",Object.freeze(new Pt(Bs,!0)));let pn=Pt,sp=0;class sl{constructor(t,e,i,s=Nt,a,r){this.device=t,this.format=e,this.numIndices=i,this.usage=s,this.id=sp++,this.impl=t.createIndexBufferImpl(this,r);const n=Hu[e];this.bytesPerIndex=n,this.numBytes=this.numIndices*n,a?this.setData(a):this.storage=new ArrayBuffer(this.numBytes),this.adjustVramSizeTracking(t._vram,this.numBytes),this.device.buffers.add(this)}destroy(){const t=this.device;t.buffers.delete(this),this.device.indexBuffer===this&&(this.device.indexBuffer=null),this.impl.initialized&&(this.impl.destroy(t),this.adjustVramSizeTracking(t._vram,-this.storage.byteLength))}adjustVramSizeTracking(t,e){t.ib+=e}loseContext(){this.impl.loseContext()}restoreContext(){this.unlock()}getFormat(){return this.format}getNumIndices(){return this.numIndices}lock(){return this.storage}unlock(){this.impl.unlock(this)}setData(t){return t.byteLength!==this.numBytes?!1:(this.storage=t,this.unlock(),!0)}_lockTypedArray(){const t=this.lock();return this.format===nn?new Uint32Array(t):this.format===rn?new Uint16Array(t):new Uint8Array(t)}writeData(t,e){const i=this._lockTypedArray();if(t.length>e)if(ArrayBuffer.isView(t))t=t.subarray(0,e),i.set(t);else for(let s=0;s<e;s++)i[s]=t[s];else i.set(t);this.unlock()}readData(t){const e=this._lockTypedArray(),i=this.numIndices;if(ArrayBuffer.isView(t))t.set(e);else{t.length=0;for(let s=0;s<i;s++)t[s]=e[s]}return i}}let ap=0;class Bd{constructor(t,e,i,s){o(this,"usage",Nt);this.usage=(s==null?void 0:s.usage)??Nt,this.device=t,this.format=e,this.numVertices=i,this.id=ap++,this.impl=t.createVertexBufferImpl(this,e,s),this.numBytes=e.verticesByteSize?e.verticesByteSize:e.size*i,this.adjustVramSizeTracking(t._vram,this.numBytes);const a=s==null?void 0:s.data;a?this.setData(a):this.storage=new ArrayBuffer(this.numBytes),this.device.buffers.add(this)}destroy(){const t=this.device;t.buffers.delete(this),this.impl.initialized&&(this.impl.destroy(t),this.adjustVramSizeTracking(t._vram,-this.storage.byteLength))}adjustVramSizeTracking(t,e){t.vb+=e}loseContext(){this.impl.loseContext()}restoreContext(){this.unlock()}getFormat(){return this.format}getUsage(){return this.usage}getNumVertices(){return this.numVertices}lock(){return this.storage}unlock(){this.impl.unlock(this)}setData(t){return t.byteLength!==this.numBytes?!1:(this.storage=t,this.unlock(),!0)}}function $e(c){if(c==null)return 0;let t=0;for(let e=0,i=c.length;e<i;e++)t=(t<<5)-t+c.charCodeAt(e),t|=0;return t}function kd(c){let e=2166136261;for(let i=0;i<c.length;i++)e^=c[i],e*=16777619;return e>>>0}const rp=new qn,np=[2,4,8,12,16],op=new nt;class Kn{constructor(t,e,i){this.device=t,this._elements=[],this.hasUv0=!1,this.hasUv1=!1,this.hasColor=!1,this.hasTangents=!1,this.verticesByteSize=0,this.vertexCount=i,this.interleaved=i===void 0,this.instancing=!1,this.size=e.reduce((r,n)=>r+Math.ceil(n.components*sr[n.type]/4)*4,0);let s=0,a;for(let r=0,n=e.length;r<n;r++){const l=e[r];a=l.components*sr[l.type],i&&(s=I.roundUp(s,a));const d=l.asInt??!1,f=d?!1:l.normalize??!1,h={name:l.semantic,offset:i?s:l.hasOwnProperty("offset")?l.offset:s,stride:i?a:l.hasOwnProperty("stride")?l.stride:this.size,dataType:l.type,numComponents:l.components,normalize:f,size:a,asInt:d};this._elements.push(h),i?s+=a*i:s+=Math.ceil(a/4)*4,l.semantic===Ua?this.hasUv0=!0:l.semantic===Ba?this.hasUv1=!0:l.semantic===gt?this.hasColor=!0:l.semantic===Oi&&(this.hasTangents=!0)}i&&(this.verticesByteSize=s),this._evaluateHash()}get elements(){return this._elements}static getDefaultInstancingFormat(t){return op.get(t,()=>new Kn(t,[{semantic:Fn,components:4,type:Ye},{semantic:Un,components:4,type:Ye},{semantic:Bn,components:4,type:Ye},{semantic:vs,components:4,type:Ye}]))}static get defaultInstancingFormat(){return null}static isElementValid(t,e){const i=e.components*sr[e.type];return!(t.isWebGPU&&!np.includes(i))}update(){this._evaluateHash()}_evaluateHash(){const t=[],e=[],i=this._elements.length;for(let a=0;a<i;a++){const{name:r,dataType:n,numComponents:l,normalize:d,offset:f,stride:h,size:u,asInt:p}=this._elements[a],m=r+n+l+d+p;t.push(m);const g=m+f+h+u;e.push(g)}t.sort();const s=t.join();this.batchingHash=$e(s),this.shaderProcessingHashString=s,this.renderingHashString=e.join("_"),this.renderingHash=rp.get(this.renderingHashString)}}let lp=0;class _t{constructor(t={}){o(this,"name");o(this,"_device");o(this,"_colorBuffer");o(this,"_colorBuffers");o(this,"_depthBuffer");o(this,"_depth");o(this,"_stencil");o(this,"_samples");o(this,"_transientColor");o(this,"_transientDepth");o(this,"autoResolve");o(this,"_face");o(this,"_mipLevel");o(this,"_mipmaps");o(this,"_width");o(this,"_height");o(this,"flipY");var a,r,n,l,d;this.id=lp++;const e=((a=t.colorBuffer)==null?void 0:a.device)??((r=t.colorBuffers)==null?void 0:r[0].device)??((n=t.depthBuffer)==null?void 0:n.device)??t.graphicsDevice;this._device=e;const{maxSamples:i}=this._device;if(this._samples=Math.min(t.samples??1,i),e.isWebGPU&&(this._samples=this._samples>1?i:1),this._colorBuffer=t.colorBuffer,t.colorBuffer&&(this._colorBuffers=[t.colorBuffer]),this._depthBuffer=t.depthBuffer,this._face=t.face??0,this._depthBuffer){const f=this._depthBuffer._format;f===Di||f===fs?(this._depth=!0,this._stencil=!1):f===Rn?(this._depth=!0,this._stencil=!0):f===Ni&&this._depthBuffer.device.isWebGPU&&this._samples>1?(this._depth=!0,this._stencil=!1):(this._depth=!1,this._stencil=!1)}else this._depth=t.depth??!0,this._stencil=t.stencil??!1;t.colorBuffers&&(this._colorBuffers||(this._colorBuffers=[...t.colorBuffers],this._colorBuffer=t.colorBuffers[0])),this.autoResolve=t.autoResolve??!0,this.name=t.name,this.name||(this.name=(l=this._colorBuffer)==null?void 0:l.name),this.name||(this.name=(d=this._depthBuffer)==null?void 0:d.name),this.name||(this.name="Untitled");const s=!!this._device.supportsTransientAttachments;this._transientColor=(t.transientColor??!1)&&s&&this._samples>1,this._transientDepth=(t.transientDepth??!1)&&s&&!this._depthBuffer,(t.transientDepth??!1)&&this._depthBuffer,this.flipY=t.flipY??!1,this._mipLevel=t.mipLevel??0,this._mipLevel>0&&this._depth&&(this._mipLevel=0),this._mipmaps=t.mipLevel===void 0,this.evaluateDimensions(),this.validateMrt(),this.impl=e.createRenderTargetImpl(this)}destroy(){const t=this._device;t&&(t.targets.delete(this),t.renderTarget===this&&t.setRenderTarget(null),this.destroyFrameBuffers())}destroyFrameBuffers(){const t=this._device;t&&this.impl.destroy(t)}destroyTextureBuffers(){var t,e;(t=this._depthBuffer)==null||t.destroy(),this._depthBuffer=null,(e=this._colorBuffers)==null||e.forEach(i=>{i.destroy()}),this._colorBuffers=null,this._colorBuffer=null}resize(t,e){var i,s;if(!(this.mipLevel>0)&&((i=this._depthBuffer)==null||i.resize(t,e),(s=this._colorBuffers)==null||s.forEach(a=>{a.resize(t,e)}),this._width!==t||this._height!==e)){this.destroyFrameBuffers();const a=this._device;a.renderTarget===this&&a.setRenderTarget(null),this.evaluateDimensions(),this.validateMrt(),this.impl=a.createRenderTargetImpl(this)}}validateMrt(){}evaluateDimensions(){const t=this._colorBuffer??this._depthBuffer;t&&(this._width=t.width,this._height=t.height,this._mipLevel>0&&(this._width=Ot.calcLevelDimension(this._width,this._mipLevel),this._height=Ot.calcLevelDimension(this._height,this._mipLevel)))}init(){this.impl.init(this._device,this)}get initialized(){return this.impl.initialized}get device(){return this._device}loseContext(){this.impl.loseContext()}resolve(t=!0,e=!!this._depthBuffer){this._device&&this._samples>1&&this.impl.resolve(this._device,this,t,e)}copy(t,e,i){if(!this._device)if(t._device)this._device=t._device;else return!1;return this._device.copyRenderTarget(t,this,e,i)}get samples(){return this._samples}get transientColor(){return this._transientColor}get transientDepth(){return this._transientDepth}get depth(){return this._depth}get stencil(){return this._stencil}get colorBuffer(){return this._colorBuffer}getColorBuffer(t){var e;return(e=this._colorBuffers)==null?void 0:e[t]}get depthBuffer(){return this._depthBuffer}get face(){return this._face}get mipLevel(){return this._mipLevel}get mipmaps(){return this._mipmaps}get width(){return this._width??this._device.width}get height(){return this._height??this._device.height}set _glFrameBuffer(t){}get _glFrameBuffer(){return this.impl._glFrameBuffer}isColorBufferSrgb(t=0){if(this.device.backBuffer===this)return _a(this.device.backBufferFormat);const e=this.getColorBuffer(t);return e?_a(e.format):!1}}class cp{constructor(){o(this,"_refCount",0)}incRefCount(){this._refCount++}decRefCount(){this._refCount--}get refCount(){return this._refCount}}const de=[];de[Ss]=1;de[za]=2;de[Qt]=3;de[Va]=4;de[Pi]=1;de[zn]=2;de[Ts]=3;de[Vn]=4;de[Td]=1;de[Ed]=2;de[yd]=3;de[xd]=4;de[Cd]=8;de[Sa]=12;de[bt]=16;de[Ga]=1;de[Gn]=2;de[Hn]=3;de[Wn]=4;class re{constructor(t,e,i=0){o(this,"name");o(this,"type");o(this,"byteSize");o(this,"offset");o(this,"scopeId");o(this,"count");o(this,"numComponents");if(this.shortName=t,this.name=i?`${t}[0]`:t,this.type=e,this.numComponents=de[e],this.updateType=e,i>0)switch(e){case Ss:this.updateType=Ad;break;case Pi:this.updateType=Xn;break;case Ga:this.updateType=Dd;break;case Td:this.updateType=Pd;break;case za:this.updateType=wd;break;case zn:this.updateType=Yn;break;case Gn:this.updateType=Id;break;case Ed:this.updateType=bd;break;case Qt:this.updateType=Ld;break;case Ts:this.updateType=$n;break;case Hn:this.updateType=Rd;break;case yd:this.updateType=Md;break;case Va:this.updateType=wu;break;case Vn:this.updateType=Du;break;case Wn:this.updateType=Pu;break;case xd:this.updateType=Iu;break;case bt:this.updateType=Lu;break}this.count=i;let s=this.numComponents;i&&(s=I.roundUp(s,4)),this.byteSize=s*4,i&&(this.byteSize*=i)}get isArrayType(){return this.count>0}calculateOffset(t){let e=this.byteSize<=8?this.byteSize:16;this.count&&(e=16),t=I.roundUp(t,e),this.offset=t/4}}class zd{constructor(t,e){o(this,"byteSize",0);o(this,"map",new Map);this.scope=t.scope,this.uniforms=e;let i=0;for(let s=0;s<e.length;s++){const a=e[s];a.calculateOffset(i),i=a.offset*4+a.byteSize,a.scopeId=this.scope.resolve(a.name),this.map.set(a.name,a)}this.byteSize=I.roundUp(i,16)}get(t){return this.map.get(t)}}const ke=/[ \t]*#(ifn?def|if|endif|else|elif|define|undef|extension|include)/g,rr=/define[ \t]+([^\n]+)\r?(?:\n|$)/g,al=/extension[ \t]+([\w-]+)[ \t]*:[ \t]*(enable|require)/g,nr=/undef[ \t]+([^\n]+)\r?(?:\n|$)/g,or=/(ifdef|ifndef|if)[ \t]*([^\r\n]+)\r?\n/g,lr=/(endif|else|elif)(?:[ \t]+([^\r\n]*))?\r?\n?/g,rl=/\{?[\w-]+\}?/,dp=/(!|\s)?defined\(([\w-]+)\)/,hp=/!?defined\s*\([^)]*\)/g,fp=/!?defined\s*$/,up=/([a-z_]\w*)\s*(==|!=|<|<=|>|>=)\s*([\w"']+)/i,pp=/[+\-]/g,cr=/include[ \t]+"([\w-]+)(?:\s*,\s*([\w-]+))?"/g,mp=/\{i\}/g,nl=/(pcFragColor[1-8])\b/g,_p=/^\d+(?:\.\d+)?$/,he=class he{static run(t,e=new Map,i={}){he.sourceName=i.sourceName,t=this.stripComments(t),t=t.split(/\r?\n/).map(n=>n.trimEnd()).join(`
`);const s=new Map,a=new Map;if(t=this._preprocess(t,s,a,e,i.stripDefines),t===null)return null;const r=new Map;return s.forEach((n,l)=>{Number.isInteger(parseFloat(n))&&!n.includes(".")&&r.set(l,n)}),t=this.stripComments(t),t=this.stripUnusedColorAttachments(t,i),t=this.RemoveEmptyLines(t),t=this.processArraySize(t,r),t=this.injectDefines(t,a),t}static stripUnusedColorAttachments(t,e){if(e.stripUnusedColorAttachments){const i=new Map,s=t.match(nl);if(s==null||s.forEach(r=>{const n=parseInt(r.charAt(r.length-1),10);i.set(n,(i.get(n)??0)+1)}),Array.from(i.values()).some(r=>r===1)){const r=t.split(`
`),n=[];for(let l=0;l<r.length;l++){const d=r[l].match(nl);if(d){const f=parseInt(d[0].charAt(d[0].length-1),10);if(f>0&&i.get(f)===1)continue}n.push(r[l])}t=n.join(`
`)}}return t}static stripComments(t){return t.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm,"$1")}static processArraySize(t,e){return t!==null&&e.forEach((i,s)=>{t=t.replace(new RegExp(`\\[${s}\\]`,"g"),`[${i}]`)}),t}static injectDefines(t,e){if(t!==null&&e.size>0){const i=t.split(`
`);e.forEach((s,a)=>{const r=new RegExp(a,"g");for(let n=0;n<i.length;n++)i[n].includes("#")||(i[n]=i[n].replace(r,s))}),t=i.join(`
`)}return t}static RemoveEmptyLines(t){return t!==null&&(t=t.split(/\r?\n/).map(e=>e.trim()===""?"":e).join(`
`),t=t.replace(/(\n\n){3,}/g,`

`)),t}static _preprocess(t,e=new Map,i,s,a){var f;const r=t,n=[];let l=!1,d;for(;(d=ke.exec(t))!==null&&!l;){const h=d[1];switch(h){case"define":{rr.lastIndex=d.index;const u=rr.exec(t);l||(l=u===null);const p=u[1];rl.lastIndex=u.index;const g=rl.exec(p)[0];let v=p.substring(g.length).trim();v===""&&(v="true");const E=he._keep(n);let S=a;if(E){const T=g.startsWith("{")&&g.endsWith("}");T&&(S=!0),T?i.set(g,v):e.set(g,v),S&&(t=t.substring(0,u.index-1)+t.substring(rr.lastIndex),ke.lastIndex=u.index-1)}S||(ke.lastIndex=u.index+u[0].length);break}case"undef":{nr.lastIndex=d.index;const u=nr.exec(t),p=u[1].trim();he._keep(n)&&(e.delete(p),a&&(t=t.substring(0,u.index-1)+t.substring(nr.lastIndex),ke.lastIndex=u.index-1)),a||(ke.lastIndex=u.index+u[0].length);break}case"extension":{al.lastIndex=d.index;const u=al.exec(t);if(l||(l=u===null),u){const p=u[1];he._keep(n)&&e.set(p,"true")}ke.lastIndex=u.index+u[0].length;break}case"ifdef":case"ifndef":case"if":{or.lastIndex=d.index;const u=or.exec(t),p=u[2],m=he.evaluate(p,e);l||(l=m.error);let g=m.result;h==="ifndef"&&(g=!g),n.push({anyKeep:g,keep:g,start:d.index,end:or.lastIndex}),ke.lastIndex=u.index+u[0].length;break}case"endif":case"else":case"elif":{lr.lastIndex=d.index;const u=lr.exec(t),p=n.pop();if(!p){console.error(`Shader preprocessing encountered "#${u[1]}" without a preceding #if #ifdef #ifndef while preprocessing ${he.sourceName} on line:
 ${t.substring(d.index,d.index+100)}...`,{source:r}),l=!0;continue}const m=p.keep?t.substring(p.end,d.index):"";t=t.substring(0,p.start)+m+t.substring(lr.lastIndex),ke.lastIndex=p.start+m.length;const g=u[1];if(g==="else"||g==="elif"){let v=!1;if(!p.anyKeep)if(g==="else")v=!p.keep;else{const E=he.evaluate(u[2],e);v=E.result,l||(l=E.error)}n.push({anyKeep:p.anyKeep||v,keep:v,start:ke.lastIndex,end:ke.lastIndex})}break}case"include":{cr.lastIndex=d.index;const u=cr.exec(t);if(l||(l=u===null),!u){l=!0;continue}const p=u[1].trim(),m=(f=u[2])==null?void 0:f.trim();if(he._keep(n)){let v=s==null?void 0:s.get(p);if(v!==void 0){if(v=this.stripComments(v),m){const E=e.get(m),S=parseFloat(E);if(Number.isInteger(S)){let T="";for(let y=0;y<S;y++)T+=v.replace(mp,String(y));v=T}else console.error(`Include Count identifier "${m}" not resolved while preprocessing ${he.sourceName} on line:
 ${t.substring(d.index,d.index+100)}...`,{originalSource:r,source:t}),l=!0}t=t.substring(0,u.index-1)+v+t.substring(cr.lastIndex),ke.lastIndex=u.index-1}else{console.error(`Include "${p}" not resolved while preprocessing ${he.sourceName}`,{originalSource:r,source:t}),l=!0;continue}}break}}}return n.length>0&&(console.error(`Shader preprocessing reached the end of the file without encountering the necessary #endif to close a preceding #if, #ifdef, or #ifndef block. ${he.sourceName}`),l=!0),l?(console.error("Failed to preprocess shader: ",{source:r}),null):t}static _keep(t){for(let e=0;e<t.length;e++)if(!t[e].keep)return!1;return!0}static evaluateAtomicExpression(t,e){let i=!1;t=t.trim();let s=!1;if(t==="true")return{result:!0,error:i};if(t==="false")return{result:!1,error:i};if(_p.test(t))return{result:parseFloat(t)!==0,error:i};const a=dp.exec(t);if(a){s=a[1]==="!",t=a[2].trim();const l=e.has(t);return{result:s?!l:l,error:i}}const r=up.exec(t);if(r){const l=e.get(r[1].trim())??r[1].trim(),d=e.get(r[3].trim())??r[3].trim(),f=r[2].trim();let h=!1;switch(f){case"==":h=l===d;break;case"!=":h=l!==d;break;case"<":h=l<d;break;case"<=":h=l<=d;break;case">":h=l>d;break;case">=":h=l>=d;break;default:i=!0}return{result:h,error:i}}return{result:e.has(t),error:i}}static processParentheses(t,e){let i=!1,s=t.trim();for(;s.startsWith("(")&&s.endsWith(")");){let a=0,r=!0;for(let n=0;n<s.length-1;n++)if(s[n]==="(")a++;else if(s[n]===")"&&(a--,a===0)){r=!1;break}if(r)s=s.slice(1,-1).trim();else break}for(;;){let a=!1,r=0,n=0,l=-1,d=-1,f=0;for(let m=0;m<s.length;m++)if(s[m]==="("){const g=s.substring(0,m);fp.test(g)?f++:f===0&&(r++,r>n&&(n=r,l=m),a=!0)}else s[m]===")"&&(f>0?f--:r>0&&(r===n&&l!==-1&&(d=m),r--));if(!a||l===-1||d===-1)break;const h=s.substring(l+1,d),{result:u,error:p}=he.evaluate(h,e);i=i||p,s=s.substring(0,l)+(u?"true":"false")+s.substring(d+1)}return{expression:s,error:i}}static evaluate(t,e){const i=pp.exec(t)===null;let s=t,a=!1;if(t.replace(hp,"").indexOf("(")!==-1){const l=he.processParentheses(t,e);s=l.expression,a=l.error}if(a)return{result:!1,error:!0};const n=s.split("||");for(const l of n){const d=l.split("&&");let f=!0;for(const h of d){const{result:u,error:p}=he.evaluateAtomicExpression(h.trim(),e);if(!u||p){f=!1;break}}if(f)return{result:!0,error:!i}}return{result:!1,error:!i}}};o(he,"sourceName");let us=he;var Vd=`
#ifndef outType_0
#define outType_0 vec4
#endif
layout(location = 0) out highp outType_0 pcFragColor0;
#if COLOR_ATTACHMENT_1
layout(location = 1) out highp outType_1 pcFragColor1;
#endif
#if COLOR_ATTACHMENT_2
layout(location = 2) out highp outType_2 pcFragColor2;
#endif
#if COLOR_ATTACHMENT_3
layout(location = 3) out highp outType_3 pcFragColor3;
#endif
#if COLOR_ATTACHMENT_4
layout(location = 4) out highp outType_4 pcFragColor4;
#endif
#if COLOR_ATTACHMENT_5
layout(location = 5) out highp outType_5 pcFragColor5;
#endif
#if COLOR_ATTACHMENT_6
layout(location = 6) out highp outType_6 pcFragColor6;
#endif
#if COLOR_ATTACHMENT_7
layout(location = 7) out highp outType_7 pcFragColor7;
#endif
#define gl_FragColor pcFragColor0
#define varying in
#define texture2D texture
#define texture2DBias texture
#define textureCube texture
#define texture2DProj textureProj
#define texture2DLod textureLod
#define texture2DProjLod textureProjLod
#define textureCubeLod textureLod
#define texture2DGrad textureGrad
#define texture2DProjGrad textureProjGrad
#define textureCubeGrad textureGrad
#define utexture2D texture
#define itexture2D texture
#define texture2DLodEXT texture2DLodEXT_is_no_longer_supported_use_texture2DLod_instead
#define texture2DProjLodEXT texture2DProjLodEXT_is_no_longer_supported_use_texture2DProjLod
#define textureCubeLodEXT textureCubeLodEXT_is_no_longer_supported_use_textureCubeLod_instead
#define texture2DGradEXT texture2DGradEXT_is_no_longer_supported_use_texture2DGrad_instead
#define texture2DProjGradEXT texture2DProjGradEXT_is_no_longer_supported_use_texture2DProjGrad_instead
#define textureCubeGradEXT textureCubeGradEXT_is_no_longer_supported_use_textureCubeGrad_instead
#define textureShadow(res, uv) textureGrad(res, uv, vec2(1, 1), vec2(1, 1))
#define SHADOWMAP_PASS(name) name
#define SHADOWMAP_ACCEPT(name) sampler2DShadow name
#define TEXTURE_PASS(name) name
#define TEXTURE_ACCEPT(name) sampler2D name
#define TEXTURE_ACCEPT_HIGHP(name) highp sampler2D name
#define GL2
`,Gd=`
#extension GL_ANGLE_multi_draw : enable
#define attribute in
#define varying out
#define texture2D texture
#define utexture2D texture
#define itexture2D texture
#define GL2
#define VERTEXSHADER
#define TEXTURE_PASS(name) name
#define TEXTURE_ACCEPT(name) sampler2D name
#define TEXTURE_ACCEPT_HIGHP(name) highp sampler2D name
`,Hd=`
#extension GL_EXT_samplerless_texture_functions : require
#ifndef outType_0
#define outType_0 vec4
#endif
#ifndef outType_1
#define outType_1 vec4
#endif
#ifndef outType_2
#define outType_2 vec4
#endif
#ifndef outType_3
#define outType_3 vec4
#endif
#ifndef outType_4
#define outType_4 vec4
#endif
#ifndef outType_5
#define outType_5 vec4
#endif
#ifndef outType_6
#define outType_6 vec4
#endif
#ifndef outType_7
#define outType_7 vec4
#endif
layout(location = 0) out highp outType_0 pcFragColor0;
layout(location = 1) out highp outType_1 pcFragColor1;
layout(location = 2) out highp outType_2 pcFragColor2;
layout(location = 3) out highp outType_3 pcFragColor3;
layout(location = 4) out highp outType_4 pcFragColor4;
layout(location = 5) out highp outType_5 pcFragColor5;
layout(location = 6) out highp outType_6 pcFragColor6;
layout(location = 7) out highp outType_7 pcFragColor7;
#define gl_FragColor pcFragColor0
#define texture2D(res, uv) texture(sampler2D(res, res ## _sampler), uv)
#define texture2DBias(res, uv, bias) texture(sampler2D(res, res ## _sampler), uv, bias)
#define texture2DLod(res, uv, lod) textureLod(sampler2D(res, res ## _sampler), uv, lod)
#define textureCube(res, uv) texture(samplerCube(res, res ## _sampler), uv)
#define textureCubeLod(res, uv, lod) textureLod(samplerCube(res, res ## _sampler), uv, lod)
#define textureShadow(res, uv) textureLod(sampler2DShadow(res, res ## _sampler), uv, 0.0)
#define itexture2D(res, uv) texture(isampler2D(res, res ## _sampler), uv)
#define utexture2D(res, uv) texture(usampler2D(res, res ## _sampler), uv)
#define texture2DLodEXT texture2DLodEXT_is_no_longer_supported_use_texture2DLod_instead
#define texture2DProjLodEXT texture2DProjLodEXT_is_no_longer_supported_use_texture2DProjLod
#define textureCubeLodEXT textureCubeLodEXT_is_no_longer_supported_use_textureCubeLod_instead
#define texture2DGradEXT texture2DGradEXT_is_no_longer_supported_use_texture2DGrad_instead
#define texture2DProjGradEXT texture2DProjGradEXT_is_no_longer_supported_use_texture2DProjGrad_instead
#define textureCubeGradEXT textureCubeGradEXT_is_no_longer_supported_use_textureCubeGrad_instead
#define SHADOWMAP_PASS(name) name, name ## _sampler
#define SHADOWMAP_ACCEPT(name) texture2D name, sampler name ## _sampler
#define TEXTURE_PASS(name) name, name ## _sampler
#define TEXTURE_ACCEPT(name) texture2D name, sampler name ## _sampler
#define TEXTURE_ACCEPT_HIGHP TEXTURE_ACCEPT
#define GL2
#define WEBGPU
`,Wd=`
#extension GL_EXT_samplerless_texture_functions : require
#define texture2D(res, uv) texture(sampler2D(res, res ## _sampler), uv)
#define itexture2D(res, uv) texture(isampler2D(res, res ## _sampler), uv)
#define utexture2D(res, uv) texture(usampler2D(res, res ## _sampler), uv)
#define TEXTURE_PASS(name) name, name ## _sampler
#define TEXTURE_ACCEPT(name) texture2D name, sampler name ## _sampler
#define TEXTURE_ACCEPT_HIGHP TEXTURE_ACCEPT
#define GL2
#define WEBGPU
#define VERTEXSHADER
#define gl_VertexID gl_VertexIndex
#define gl_InstanceID gl_InstanceIndex
`,Xd=`
`,Yd=`
#define VERTEXSHADER
`,ol=`
vec2 getGrabScreenPos(vec4 clipPos) {
	vec2 uv = (clipPos.xy / clipPos.w) * 0.5 + 0.5;
	#ifdef WEBGPU
		uv.y = 1.0 - uv.y;
	#endif
	return uv;
}
vec2 getImageEffectUV(vec2 uv) {
	#ifdef WEBGPU
		uv.y = 1.0 - uv.y;
	#endif
	return uv;
}
`,ll=`
#define WEBGPU
fn getGrabScreenPos(clipPos: vec4<f32>) -> vec2<f32> {
	var uv: vec2<f32> = (clipPos.xy / clipPos.w) * 0.5 + vec2<f32>(0.5);
	uv.y = 1.0 - uv.y;
	return uv;
}
fn getImageEffectUV(uv: vec2<f32>) -> vec2<f32> {
	var modifiedUV: vec2<f32> = uv;
	modifiedUV.y = 1.0 - modifiedUV.y;
	return modifiedUV;
}
struct WrappedF32 { @size(16) element: f32 }
struct WrappedI32 { @size(16) element: i32 }
struct WrappedU32 { @size(16) element: u32 }
struct WrappedVec2F { @size(16) element: vec2f }
struct WrappedVec2I { @size(16) element: vec2i }
struct WrappedVec2U { @size(16) element: vec2u }
`,mn=`
#ifdef CAPS_SHADER_F16
	alias half = f16;
	alias half2 = vec2<f16>;
	alias half3 = vec3<f16>;
	alias half4 = vec4<f16>;
	alias half2x2 = mat2x2<f16>;
	alias half3x3 = mat3x3<f16>;
	alias half4x4 = mat4x4<f16>;
#else
	alias half = f32;
	alias half2 = vec2f;
	alias half3 = vec3f;
	alias half4 = vec4f;
	alias half2x2 = mat2x2f;
	alias half3x3 = mat3x3f;
	alias half4x4 = mat4x4f;
#endif
`;const gp={vertex_position:ge,vertex_normal:Ri,vertex_tangent:Oi,vertex_texCoord0:Ua,vertex_texCoord1:Ba,vertex_texCoord2:dd,vertex_texCoord3:hd,vertex_texCoord4:fd,vertex_texCoord5:ud,vertex_texCoord6:pd,vertex_texCoord7:md,vertex_color:gt,vertex_boneIndices:ni,vertex_boneWeights:ri};class _e{static createDefinition(t,e){const i=u=>{let p=u.fragmentOutputTypes??"vec4";return Array.isArray(p)||(p=[p]),p},s=(u,p,m,g)=>{const v=t.isWebGPU?u:p;let E="";if(!m){const S=i(g);for(let T=0;T<t.maxColorAttachments;T++){E+=`#define COLOR_ATTACHMENT_${T}
`;const y=S[T]??"vec4";E+=`#define outType_${T} ${y}
`}}return E+v},a=(u,p)=>{let m=_e.getWGSLEnables(t,u?"vertex":"fragment");if(!u){const g=i(p);for(let v=0;v<t.maxColorAttachments;v++){const E=g[v]??"vec4",S=Fd.get(E);m+=`alias pcOutType${v} = ${S};
`}}return m},r=e.name??"Untitled";let n,l;const d=_e.getDefinesCode(t,e.vertexDefines),f=_e.getDefinesCode(t,e.fragmentDefines);return e.shaderLanguage===ue?(n=`
								${a(!0,e)}
								${d}
								${mn}
								${Yd}
								${ll}
								${e.vertexCode}
						`,l=`
								${a(!1,e)}
								${f}
								${mn}
								${Xd}
								${ll}
								${e.fragmentCode}
						`):(n=`${_e.versionCode(t)+s(Wd,Gd,!0,e)+d+_e.precisionCode(t)}
								${ol}
								${_e.getShaderNameCode(r)}
								${e.vertexCode}`,l=`${(e.fragmentPreamble||"")+_e.versionCode(t)+s(Hd,Vd,!1,e)+f+_e.precisionCode(t)}
								${ol}
								${_e.getShaderNameCode(r)}
								${e.fragmentCode}`),{name:r,shaderLanguage:e.shaderLanguage??ae,attributes:e.attributes,vshader:n,vincludes:e.vertexIncludes,fincludes:e.fragmentIncludes,fshader:l,feedbackVaryings:e.feedbackVaryings,useTransformFeedback:e.useTransformFeedback,meshUniformBufferFormat:e.meshUniformBufferFormat,meshBindGroupFormat:e.meshBindGroupFormat}}static getWGSLEnables(t,e){let i="";return t.supportsShaderF16&&(i+=`enable f16;
`),e==="fragment"&&t.supportsPrimitiveIndex&&(i+=`enable primitive_index;
`),t.supportsSubgroups&&(i+=`enable subgroups;
`),t.supportsSubgroupId&&(i+=`requires subgroup_id;
`),e==="compute"&&t.supportsLinearIndexing&&(i+=`requires linear_indexing;
`),t.supportsUnrestrictedPointerParameters&&(i+=`requires unrestricted_pointer_parameters;
`),t.supportsPointerCompositeAccess&&(i+=`requires pointer_composite_access;
`),t.supportsPacked4x8IntegerDotProduct&&(i+=`requires packed_4x8_integer_dot_product;
`),t.supportsTextureAndSamplerLet&&(i+=`requires texture_and_sampler_let;
`),i}static getDefinesCode(t,e){let i="";return t.capsDefines.forEach((s,a)=>{i+=`#define ${a} ${s}
`}),i+=`
`,e==null||e.forEach((s,a)=>{i+=`#define ${a} ${s}
`}),i+=`
`,i}static getShaderNameCode(t){return`#define SHADER_NAME ${t}
`}static versionCode(t){return t.isWebGPU?`#version 450
`:`#version 300 es
`}static precisionCode(t,e){e&&e!=="highp"&&e!=="mediump"&&e!=="lowp"&&(e=null),e&&(e==="highp"&&t.maxPrecision!=="highp"&&(e="mediump"),e==="mediump"&&t.maxPrecision==="lowp"&&(e="lowp"));const i=e||t.precision;return`
						precision ${i} float;
						precision ${i} int;
						precision ${i} usampler2D;
						precision ${i} isampler2D;
						precision ${i} sampler2DShadow;
						precision ${i} samplerCubeShadow;
						precision ${i} sampler2DArray;
				`}static collectAttributes(t){const e={};let i=0,s=t.indexOf("attribute");for(;s>=0&&!(s>0&&t[s-1]==="/");){let a=!1;if(s>0){let r=t.lastIndexOf(`
`,s);r=r!==-1?r+1:0,t.substring(r,s).includes("#")&&(a=!0)}if(!a){const r=t.indexOf(";",s),n=t.lastIndexOf(" ",r),l=t.substring(n+1,r);if(!e[l]){const d=gp[l];d!==void 0?e[l]=d:(e[l]=`ATTR${i}`,i++)}}s=t.indexOf("attribute",s+1)}return e}}let vp=0;class $d{constructor(t,e){o(this,"meshUniformBufferFormat");o(this,"meshBindGroupFormat");o(this,"attributes",new Map);if(this.id=vp++,this.device=t,this.definition=e,this.name=e.name||"Untitled",this.init(),e.cshader){const i=_e.getWGSLEnables(t,"compute"),s=_e.getDefinesCode(t,e.cdefines),a=i+s+e.cshader,r=e.cincludes??new Map;r.has("halfTypesCS")||r.set("halfTypesCS",mn),e.cshader=us.run(a,r,{sourceName:`compute shader for ${this.label}`,stripDefines:!0})}else{const i=e.shaderLanguage===ue;e.vshader=us.run(e.vshader,e.vincludes,{sourceName:`vertex shader for ${this.label}`,stripDefines:i}),e.shaderLanguage===ae&&(e.attributes??(e.attributes=_e.collectAttributes(e.vshader)));const s=t.isWebGL2&&(bi.name==="osx"||bi.name==="ios");if(e.fshader=us.run(e.fshader,e.fincludes,{stripUnusedColorAttachments:s,stripDefines:i,sourceName:`fragment shader for ${this.label}`}),!e.vshader||!e.fshader){this.failed=!0;return}}this.impl=t.createShaderImpl(this)}init(){this.ready=!1,this.failed=!1}get label(){return`Shader Id ${this.id} (${this.definition.shaderLanguage===ue?"WGSL":"GLSL"}) ${this.name}`}destroy(){this.device.onDestroyShader(this),this.impl.destroy(this)}loseContext(){this.init(),this.impl.loseContext()}restoreContext(){this.impl.restoreContext(this.device,this)}}class Sp{constructor(){o(this,"gpuBuffer");o(this,"stagingBuffer");o(this,"offset");o(this,"size")}}class Tp{constructor(){o(this,"storage");o(this,"gpuBuffer");o(this,"offset")}}class cA{constructor(t,e,i){o(this,"bufferSize");o(this,"gpuBuffers",[]);o(this,"stagingBuffers",[]);o(this,"usedBuffers",[]);o(this,"activeBuffer",null);this.device=t,this.bufferSize=e,this.bufferAlignment=i}destroy(){this.gpuBuffers.forEach(t=>{t.destroy(this.device)}),this.gpuBuffers=null,this.stagingBuffers.forEach(t=>{t.destroy(this.device)}),this.stagingBuffers=null,this.usedBuffers=null,this.activeBuffer=null}alloc(t,e){if(this.activeBuffer){const a=I.roundUp(this.activeBuffer.size,this.bufferAlignment);this.bufferSize-a<e&&this.scheduleSubmit()}if(!this.activeBuffer){let a=this.gpuBuffers.pop();a||(a=this.createBuffer(this.device,this.bufferSize,!1));let r=this.stagingBuffers.pop();r||(r=this.createBuffer(this.device,this.bufferSize,!0)),this.activeBuffer=new Sp,this.activeBuffer.stagingBuffer=r,this.activeBuffer.gpuBuffer=a,this.activeBuffer.offset=0,this.activeBuffer.size=0}const i=this.activeBuffer,s=I.roundUp(i.size,this.bufferAlignment);t.gpuBuffer=i.gpuBuffer,t.offset=s,t.storage=i.stagingBuffer.alloc(s,e),i.size=s+e}scheduleSubmit(){this.activeBuffer&&(this.usedBuffers.push(this.activeBuffer),this.activeBuffer=null)}submit(){this.scheduleSubmit()}}const W=[];W[Ss]=function(c,t,e){const i=c.storageFloat32;i[e]=t};W[za]=(c,t,e)=>{const i=c.storageFloat32;i[e]=t[0],i[e+1]=t[1]};W[Qt]=(c,t,e)=>{const i=c.storageFloat32;i[e]=t[0],i[e+1]=t[1],i[e+2]=t[2]};W[Va]=(c,t,e)=>{const i=c.storageFloat32;i[e]=t[0],i[e+1]=t[1],i[e+2]=t[2],i[e+3]=t[3]};W[Pi]=function(c,t,e){const i=c.storageInt32;i[e]=t};W[zn]=function(c,t,e){const i=c.storageInt32;i[e]=t[0],i[e+1]=t[1]};W[Ts]=function(c,t,e){const i=c.storageInt32;i[e]=t[0],i[e+1]=t[1],i[e+2]=t[2]};W[Vn]=function(c,t,e){const i=c.storageInt32;i[e]=t[0],i[e+1]=t[1],i[e+2]=t[2],i[e+3]=t[3]};W[Cd]=(c,t,e)=>{const i=c.storageFloat32;i[e]=t[0],i[e+1]=t[1],i[e+4]=t[2],i[e+5]=t[3],i[e+8]=t[4],i[e+9]=t[5]};W[Sa]=(c,t,e)=>{const i=c.storageFloat32;i[e]=t[0],i[e+1]=t[1],i[e+2]=t[2],i[e+4]=t[3],i[e+5]=t[4],i[e+6]=t[5],i[e+8]=t[6],i[e+9]=t[7],i[e+10]=t[8]};W[Ad]=function(c,t,e,i){const s=c.storageFloat32;for(let a=0;a<i;a++)s[e+a*4]=t[a]};W[wd]=(c,t,e,i)=>{const s=c.storageFloat32;for(let a=0;a<i;a++)s[e+a*4]=t[a*2],s[e+a*4+1]=t[a*2+1]};W[Ld]=(c,t,e,i)=>{const s=c.storageFloat32;for(let a=0;a<i;a++)s[e+a*4]=t[a*3],s[e+a*4+1]=t[a*3+1],s[e+a*4+2]=t[a*3+2]};W[Ga]=(c,t,e,i)=>{const s=c.storageUint32;s[e]=t};W[Gn]=(c,t,e,i)=>{const s=c.storageUint32;s[e]=t[0],s[e+1]=t[1]};W[Hn]=(c,t,e,i)=>{const s=c.storageUint32;s[e]=t[0],s[e+1]=t[1],s[e+2]=t[2]};W[Wn]=(c,t,e,i)=>{const s=c.storageUint32;s[e]=t[0],s[e+1]=t[1],s[e+2]=t[2],s[e+3]=t[3]};W[Xn]=function(c,t,e,i){const s=c.storageInt32;for(let a=0;a<i;a++)s[e+a*4]=t[a]};W[Pd]=W[Xn];W[Dd]=function(c,t,e,i){const s=c.storageUint32;for(let a=0;a<i;a++)s[e+a*4]=t[a]};W[Yn]=(c,t,e,i)=>{const s=c.storageInt32;for(let a=0;a<i;a++)s[e+a*4]=t[a*2],s[e+a*4+1]=t[a*2+1]};W[bd]=W[Yn];W[Id]=(c,t,e,i)=>{const s=c.storageUint32;for(let a=0;a<i;a++)s[e+a*4]=t[a*2],s[e+a*4+1]=t[a*2+1]};W[$n]=(c,t,e,i)=>{const s=c.storageInt32;for(let a=0;a<i;a++)s[e+a*4]=t[a*3],s[e+a*4+1]=t[a*3+1],s[e+a*4+2]=t[a*3+2]};W[Md]=W[$n];W[Rd]=(c,t,e,i)=>{const s=c.storageUint32;for(let a=0;a<i;a++)s[e+a*4]=t[a*3],s[e+a*4+1]=t[a*3+1],s[e+a*4+2]=t[a*3+2]};class Zn{constructor(t,e,i=!0){o(this,"device");o(this,"persistent");o(this,"allocation");o(this,"storageFloat32");o(this,"storageInt32");o(this,"storageUint32");if(this.device=t,this.format=e,this.persistent=i,i){this.impl=t.createUniformBufferImpl(this);const s=new ArrayBuffer(e.byteSize);this.assignStorage(new Int32Array(s)),t._vram.ub+=this.format.byteSize,this.device.buffers.add(this)}else this.allocation=new Tp}destroy(){if(this.persistent){const t=this.device;t.buffers.delete(this),this.impl.destroy(t),t._vram.ub-=this.format.byteSize}}get offset(){return this.persistent?0:this.allocation.offset}assignStorage(t){this.storageInt32=t,this.storageUint32=new Uint32Array(t.buffer,t.byteOffset,t.byteLength/4),this.storageFloat32=new Float32Array(t.buffer,t.byteOffset,t.byteLength/4)}loseContext(){var t;(t=this.impl)==null||t.loseContext()}restoreContext(){var t;(t=this.impl)==null||t.unlock(this)}setUniform(t,e){const i=t.offset;if(e!=null){const s=W[t.updateType];s?s(this,e,i,t.count):this.storageFloat32.set(e,i)}}set(t,e){const i=this.format.map.get(t);i&&this.setUniform(i,e)}startUpdate(t){if(!this.persistent){const e=this.allocation;this.device.dynamicBuffers.alloc(e,this.format.byteSize),this.assignStorage(e.storage),t&&(t.bindGroup=e.gpuBuffer.getBindGroup(this),t.offsets[0]=e.offset)}}endUpdate(){this.persistent?this.impl.unlock(this):(this.allocation.gpuBuffer.upload(),this.storageFloat32=null,this.storageInt32=null)}update(t){this.startUpdate(t);const e=this.format.uniforms;for(let i=0;i<e.length;i++){const s=e[i].scopeId.value;this.setUniform(e[i],s)}this.endUpdate()}}class cl{constructor(t,e=0){o(this,"device");o(this,"indexSizeBytes");o(this,"_maxCount",0);o(this,"impl",null);o(this,"_count",1);o(this,"slotIndex",0);o(this,"primitiveCount",0);this.device=t,this.indexSizeBytes=e,this.impl=t.createDrawCommandImpl(this)}get maxCount(){return this._maxCount}get count(){return this._count}destroy(){var t,e;(e=(t=this.impl)==null?void 0:t.destroy)==null||e.call(t),this.impl=null}allocate(t){var e,i;this._maxCount=t,(i=(e=this.impl).allocate)==null||i.call(e,t)}add(t,e,i,s,a=0,r=0){this.impl.add(t,e,i,s,a,r)}update(t){var e,i;this._count=t,this.primitiveCount=((i=(e=this.impl).update)==null?void 0:i.call(e,t))??0}}class Fi{constructor(t){o(this,"_name");o(this,"device");o(this,"_enabled",!0);o(this,"_skipStart",!1);o(this,"_skipEnd",!1);o(this,"executeEnabled",!0);o(this,"requiresCubemaps",!1);o(this,"beforePasses",[]);o(this,"afterPasses",[]);this.device=t}set name(t){this._name=t}get name(){return this._name||(this._name=this.constructor.name),this._name}set enabled(t){this._enabled!==t&&(this._enabled=t,t?this.onEnable():this.onDisable())}get enabled(){return this._enabled}onEnable(){}onDisable(){}frameUpdate(){}before(){}execute(){}after(){}destroy(){}render(){this.enabled&&(this.before(),this.executeEnabled&&this.execute(),this.after(),this.device.renderPassIndex++)}}class Ep{constructor(){o(this,"clearValue",new U(0,0,0,1));o(this,"clearValueLinear",new U(0,0,0,1));o(this,"clear",!1);o(this,"store",!1);o(this,"resolve",!0);o(this,"genMipmaps",!1)}}class yp{constructor(){o(this,"clearDepthValue",1);o(this,"clearStencilValue",0);o(this,"clearDepth",!1);o(this,"clearStencil",!1);o(this,"storeDepth",!1);o(this,"resolveDepth",!1);o(this,"storeStencil",!1)}}class Ui extends Fi{constructor(){super(...arguments);o(this,"renderTarget");o(this,"_options");o(this,"samples",0);o(this,"colorArrayOps",[]);o(this,"depthStencilOps");o(this,"requiresCubemaps",!0);o(this,"fullSizeClearRect",!0)}get colorOps(){return this.colorArrayOps[0]}set scaleX(e){this._options.scaleX=e}get scaleX(){return this._options.scaleX}set scaleY(e){this._options.scaleY=e}get scaleY(){return this._options.scaleY}set options(e){this._options=e,e&&(this.scaleX=this.scaleX??1,this.scaleY=this.scaleY??1)}get options(){return this._options}init(e=null,i){this.options=i,this.renderTarget=e,this.samples=Math.max(this.renderTarget?this.renderTarget.samples:this.device.samples,1),this.allocateAttachments(),this.postInit()}allocateAttachments(){var s,a,r,n;const e=this.renderTarget;this.depthStencilOps=new yp,e!=null&&e.depthBuffer&&(this.depthStencilOps.storeDepth=!0);const i=e?((s=e._colorBuffers)==null?void 0:s.length)??0:1;this.colorArrayOps.length=0;for(let l=0;l<i;l++){const d=new Ep;this.colorArrayOps[l]=d,this.samples===1&&(d.store=!0,d.resolve=!1);const f=(r=(a=this.renderTarget)==null?void 0:a._colorBuffers)==null?void 0:r[l];if((n=this.renderTarget)!=null&&n.mipmaps&&(f!=null&&f.mipmaps)){const h=ts(f._format);d.genMipmaps=!h}}}postInit(){}frameUpdate(){if(this._options&&this.renderTarget){const e=this._options.resizeSource??this.device.backBuffer,i=Math.floor(e.width*this.scaleX),s=Math.floor(e.height*this.scaleY);this.renderTarget.resize(i,s)}}setClearColor(e){const i=this.colorArrayOps.length;for(let s=0;s<i;s++){const a=this.colorArrayOps[s];e&&(a.clearValue.copy(e),a.clearValueLinear.linear(e)),a.clear=!!e}}setClearDepth(e){e!==void 0&&(this.depthStencilOps.clearDepthValue=e),this.depthStencilOps.clearDepth=e!==void 0}setClearStencil(e){e!==void 0&&(this.depthStencilOps.clearStencilValue=e),this.depthStencilOps.clearStencil=e!==void 0}render(){if(this.enabled){const e=this.device,i=this.renderTarget!==void 0;this.before(),this.executeEnabled&&(i&&!this._skipStart&&e.startRenderPass(this),this.execute(),i&&!this._skipEnd&&e.endRenderPass(this)),this.after(),e.renderPassIndex++}}}function xp(c){this.array[this.index]=c}function Cp(c,t){this.array[this.index]=c,this.array[this.index+1]=t}function Ap(c,t,e){this.array[this.index]=c,this.array[this.index+1]=t,this.array[this.index+2]=e}function wp(c,t,e,i){this.array[this.index]=c,this.array[this.index+1]=t,this.array[this.index+2]=e,this.array[this.index+3]=i}function Lp(c,t,e){this.array[c]=t[e]}function Dp(c,t,e){this.array[c]=t[e],this.array[c+1]=t[e+1]}function Pp(c,t,e){this.array[c]=t[e],this.array[c+1]=t[e+1],this.array[c+2]=t[e+2]}function Ip(c,t,e){this.array[c]=t[e],this.array[c+1]=t[e+1],this.array[c+2]=t[e+2],this.array[c+3]=t[e+3]}function bp(c,t,e){t[e]=this.array[c]}function Rp(c,t,e){t[e]=this.array[c],t[e+1]=this.array[c+1]}function Mp(c,t,e){t[e]=this.array[c],t[e+1]=this.array[c+1],t[e+2]=this.array[c+2]}function Np(c,t,e){t[e]=this.array[c],t[e+1]=this.array[c+1],t[e+2]=this.array[c+2],t[e+3]=this.array[c+3]}class Op{constructor(t,e,i){switch(this.index=0,this.numComponents=e.numComponents,i.interleaved?this.array=new Ho[e.dataType](t,e.offset):this.array=new Ho[e.dataType](t,e.offset,i.vertexCount*e.numComponents),this.stride=e.stride/this.array.constructor.BYTES_PER_ELEMENT,e.numComponents){case 1:this.set=xp,this.getToArray=bp,this.setFromArray=Lp;break;case 2:this.set=Cp,this.getToArray=Rp,this.setFromArray=Dp;break;case 3:this.set=Ap,this.getToArray=Mp,this.setFromArray=Pp;break;case 4:this.set=wp,this.getToArray=Np,this.setFromArray=Ip;break}}get(t){return this.array[this.index+t]}set(t,e,i,s){}getToArray(t,e,i){}setFromArray(t,e,i){}}class dr{constructor(t){this.vertexBuffer=t,this.vertexFormatSize=t.getFormat().size,this.buffer=this.vertexBuffer.lock(),this.accessors=[],this.element={};const e=this.vertexBuffer.getFormat();for(let i=0;i<e.elements.length;i++){const s=e.elements[i];this.accessors[i]=new Op(this.buffer,s,e),this.element[s.name]=this.accessors[i]}}next(t=1){let e=0;const i=this.accessors,s=this.accessors.length;for(;e<s;){const a=i[e++];a.index+=t*a.stride}}end(){this.vertexBuffer.unlock()}writeData(t,e,i){const s=this.element[t];if(s){i>this.vertexBuffer.numVertices&&(i=this.vertexBuffer.numVertices);const a=s.numComponents;if(this.vertexBuffer.getFormat().interleaved){let r=0;for(let n=0;n<i;n++)s.setFromArray(r,e,n*a),r+=s.stride}else if(e.length>i*a){const r=i*a;if(ArrayBuffer.isView(e))e=e.subarray(0,r),s.array.set(e);else for(let n=0;n<r;n++)s.array[n]=e[n]}else s.array.set(e)}}readData(t,e){const i=this.element[t];let s=0;if(i){s=this.vertexBuffer.numVertices;let a;const r=i.numComponents;if(this.vertexBuffer.getFormat().interleaved){Array.isArray(e)&&(e.length=0),i.index=0;let n=0;for(a=0;a<s;a++)i.getToArray(n,e,a*r),n+=i.stride}else if(ArrayBuffer.isView(e))e.set(i.array);else{e.length=0;const n=s*r;for(a=0;a<n;a++)e[a]=i.array[a]}}return s}}const V=class V{constructor(){o(this,"withCredentials",!1);o(this,"_maxConcurrentRequests",128);o(this,"_activeRequests",0);o(this,"_sendQueue",[]);o(this,"_sendQueueHead",0)}set maxConcurrentRequests(t){this._maxConcurrentRequests=t,this._pump()}get maxConcurrentRequests(){return this._maxConcurrentRequests}get(t,e,i){typeof e=="function"&&(i=e,e={});const s=this.request("GET",t,e,i),{progress:a}=e;if(a){const r=l=>{l.lengthComputable&&a.fire("progress",l.loaded,l.total)},n=l=>{r(l),s.removeEventListener("loadstart",r),s.removeEventListener("progress",r),s.removeEventListener("loadend",n)};s.addEventListener("loadstart",r),s.addEventListener("progress",r),s.addEventListener("loadend",n)}return s}post(t,e,i,s){return typeof i=="function"&&(s=i,i={}),i.postdata=e,this.request("POST",t,i,s)}put(t,e,i,s){return typeof i=="function"&&(s=i,i={}),i.postdata=e,this.request("PUT",t,i,s)}del(t,e,i){return typeof e=="function"&&(i=e,e={}),this.request("DELETE",t,e,i)}request(t,e,i,s){let a,r,n,l=!1;if(typeof i=="function"&&(s=i,i={}),i.retry&&(i=Object.assign({retries:0,maxRetries:5},i)),i.callback=s,i.async==null&&(i.async=!0),i.headers==null&&(i.headers={}),i.postdata!=null)if(i.postdata instanceof Document)n=i.postdata;else if(i.postdata instanceof FormData)n=i.postdata;else if(i.postdata instanceof Object){let h=i.headers["Content-Type"];switch(h===void 0&&(i.headers["Content-Type"]=V.ContentType.FORM_URLENCODED,h=i.headers["Content-Type"]),h){case V.ContentType.FORM_URLENCODED:{n="";let u=!0;for(const p in i.postdata)if(i.postdata.hasOwnProperty(p)){u?u=!1:n+="&";const m=encodeURIComponent(p),g=encodeURIComponent(i.postdata[p]);n+=`${m}=${g}`}break}default:case V.ContentType.JSON:h==null&&(i.headers["Content-Type"]=V.ContentType.JSON),n=JSON.stringify(i.postdata);break}}else n=i.postdata;if(i.cache===!1){const h=Ee();a=new Ja(e),a.query?a.query=`${a.query}&ts=${h}`:a.query=`ts=${h}`,e=a.toString()}i.query&&(a=new Ja(e),r=Qr(a.getQuery(),i.query),a.setQuery(r),e=a.toString());const d=new XMLHttpRequest;d.open(t,e,i.async),d.withCredentials=i.withCredentials!==void 0?i.withCredentials:this.withCredentials,d.responseType=i.responseType||this._guessResponseType(e);for(const h in i.headers)i.headers.hasOwnProperty(h)&&d.setRequestHeader(h,i.headers[h]);d.onreadystatechange=()=>{this._onReadyStateChange(t,e,i,d)},d.onerror=()=>{this._onError(t,e,i,d),l=!0};const f=()=>{try{d.send(n)}catch(h){this._releaseSlot(d),!l&&typeof i.error=="function"&&i.error(d.status,d,h)}};return this._acquire(d,i,f),d}_guessResponseType(t){const e=new Ja(t),i=J.getExtension(e.path).toLowerCase();return V.binaryExtensions.indexOf(i)>=0?V.ResponseType.ARRAY_BUFFER:i===".json"?V.ResponseType.JSON:i===".xml"?V.ResponseType.DOCUMENT:V.ResponseType.TEXT}_isBinaryContentType(t){return[V.ContentType.BASIS,V.ContentType.BIN,V.ContentType.DDS,V.ContentType.GLB,V.ContentType.MP3,V.ContentType.MP4,V.ContentType.OGG,V.ContentType.OPUS,V.ContentType.WAV].indexOf(t)>=0}_isBinaryResponseType(t){return t===V.ResponseType.ARRAY_BUFFER||t===V.ResponseType.BLOB||t===V.ResponseType.JSON}_onReadyStateChange(t,e,i,s){if(s.readyState===4)switch(s.status){case 0:{s.responseURL&&s.responseURL.startsWith("file:///")?this._onSuccess(t,e,i,s):this._onError(t,e,i,s);break}case 200:case 201:case 206:case 304:{this._onSuccess(t,e,i,s);break}default:{this._onError(t,e,i,s);break}}}_onSuccess(t,e,i,s){this._releaseSlot(s);let a,r;const n=s.getResponseHeader("Content-Type");n&&(r=n.split(";")[0].trim());try{this._isBinaryContentType(r)||this._isBinaryResponseType(s.responseType)?a=s.response:r===V.ContentType.JSON||e.split("?")[0].endsWith(".json")?a=JSON.parse(s.responseText):s.responseType===V.ResponseType.DOCUMENT||r===V.ContentType.XML?a=s.responseXML:a=s.responseText,i.callback(null,a)}catch(l){i.callback(l)}}_onError(t,e,i,s){if(this._releaseSlot(s),!i.retrying)if(i.retry&&i.retries<i.maxRetries){i.retries++,i.retrying=!0;const a=I.clamp(Math.pow(2,i.retries)*V.retryDelay,0,i.maxRetryDelay||5e3);console.log(`${t}: ${e} - Error ${s.status}. Retrying in ${a} ms`),setTimeout(()=>{i.retrying=!1,this.request(t,e,i,i.callback)},a)}else i.callback(s.status===0?"Network error":s.status,null)}_acquire(t,e,i){const s=this._maxConcurrentRequests,a=s>0&&Number.isFinite(s)&&e.async!==!1;!a||this._activeRequests<s?(a&&(this._activeRequests++,t._slotHeld=!0),i()):this._sendQueue.push({xhr:t,send:i})}_releaseSlot(t){t._slotHeld&&(t._slotHeld=!1,this._activeRequests--,this._pump())}_pump(){const t=this._maxConcurrentRequests;if(t>0&&Number.isFinite(t))for(;this._sendQueueHead<this._sendQueue.length&&this._activeRequests<t;){const{xhr:i,send:s}=this._sendQueue[this._sendQueueHead++];this._activeRequests++,i._slotHeld=!0,s()}else for(;this._sendQueueHead<this._sendQueue.length;)this._sendQueue[this._sendQueueHead++].send();this._sendQueueHead===this._sendQueue.length?(this._sendQueue.length=0,this._sendQueueHead=0):this._sendQueueHead>256&&(this._sendQueue=this._sendQueue.slice(this._sendQueueHead),this._sendQueueHead=0)}};o(V,"ContentType",{AAC:"audio/aac",BASIS:"image/basis",BIN:"application/octet-stream",DDS:"image/dds",FORM_URLENCODED:"application/x-www-form-urlencoded",GIF:"image/gif",GLB:"model/gltf-binary",JPEG:"image/jpeg",JSON:"application/json",MP3:"audio/mpeg",MP4:"audio/mp4",OGG:"audio/ogg",OPUS:'audio/ogg; codecs="opus"',PNG:"image/png",TEXT:"text/plain",WAV:"audio/x-wav",XML:"application/xml"}),o(V,"ResponseType",{TEXT:"text",ARRAY_BUFFER:"arraybuffer",BLOB:"blob",DOCUMENT:"document",JSON:"json"}),o(V,"binaryExtensions",[".model",".wav",".ogg",".mp3",".mp4",".m4a",".aac",".dds",".basis",".glb",".opus"]),o(V,"retryDelay",100);let Ta=V;const ei=new Ta,qd=0,jd=1,St=2,oi=3,Kd=4,Zd=5,Jn=6,Jd=7,Qd=8,eh=9,th=10,Fp={[qd]:"SUBTRACTIVE",[jd]:"ADDITIVE",[St]:"NORMAL",[oi]:"NONE",[Kd]:"PREMULTIPLIED",[Zd]:"MULTIPLICATIVE",[Jn]:"ADDITIVEALPHA",[Jd]:"MULTIPLICATIVE2X",[Qd]:"SCREEN",[eh]:"MIN",[th]:"MAX"},Bi="none",Up="linear",Bp=0,Qn=2,kp={[Bp]:"NONE",[Qn]:"SCHLICK"},dA=0,zp=15,Xa=0,Ft=1,eo=2,to=3,ih=4,$=0,Te=1,fe=2,dl={[$]:"DIRECTIONAL",[Te]:"OMNI",[fe]:"SPOT"},Vp=100,Ut=0,sh=1,ah=2,rh=3,Gp={[Ut]:"PUNCTUAL",[sh]:"RECT",[ah]:"DISK",[rh]:"SPHERE"},Hp=0,Wp=1,Xp={[Hp]:"LINEAR",[Wp]:"INVERSESQUARED"},io=0,Yp=2,nh=3,$p=4,qp=5,_n=6,jp=7,Kp=8,Zp=9,si=new Map([[qp,{name:"PCF1_32F",kind:"PCF1",format:Di,pcf:!0}],[io,{name:"PCF3_32F",kind:"PCF3",format:Di,pcf:!0}],[$p,{name:"PCF5_32F",kind:"PCF5",format:Di,pcf:!0}],[jp,{name:"PCF1_16F",kind:"PCF1",format:fs,pcf:!0}],[Kp,{name:"PCF3_16F",kind:"PCF3",format:fs,pcf:!0}],[Zp,{name:"PCF5_16F",kind:"PCF5",format:fs,pcf:!0}],[Yp,{name:"VSM_16F",kind:"VSM",format:Ue,vsm:!0}],[nh,{name:"VSM_32F",kind:"VSM",format:at,vsm:!0}],[_n,{name:"PCSS_32F",kind:"PCSS",format:Ni,pcss:!0}]]),Jp=255,Qp=1,hA=0,fA=0,hr=0,uA=1,pA=0,mA=1,Lt=0,oh=1,is=0,jt=1,Vs=2,so=0,lh=1,em={[so]:"NONE",[lh]:"BOX"},hl="mul",ao=0,ss=1,tm={[ao]:"NONE",[ss]:"SRGB"},im=0,ch=6,dh=["LINEAR","FILMIC","HEJL","ACES","ACES2","NEUTRAL","NONE"],sm=0,hh=1,am=2,rm={[sm]:"NONE",[hh]:"AO",[am]:"GLOSSDEPENDENT"},Bt="none",Ea="envAtlas",ya="envAtlasHQ",xa="cubeMap",fh="sphereMap",nm={[Bt]:"NONE",[Ea]:"ENVATLAS",[ya]:"ENVATLASHQ",[xa]:"CUBEMAP",[fh]:"SPHEREMAP"},ro="ambientSH",no="envAtlas",oo="constant",om={[ro]:"AMBIENTSH",[no]:"ENVALATLAS",[oo]:"CONSTANT"},Ca=1,Es=2,uh=4,ph=8,mh=16,ys=32,lm=64,cm=128,Aa=256,lo=512,xs=1024,Cs=2048,dm=4096,As=8192,da=16384,st=0,as=1,_A=2,li=1,_h=2,gA=4,Ya=0,$a=1,hm=2,qa=3,fm=4,gh=0,co=1,ho=2,um={[gh]:"SIMPLE",[co]:"SLICED",[ho]:"TILED"},pm=1,wa=0,ha=0,mm=1,fl=2,fr=3,_m=4,gm=5,ul=0,vm=1,vA=0,SA=1,yi="infinite",Sm="box",Tm="dome",ci="none",Em="bayer8",ym="bluenoise",xm="ignnoise",vh={[ci]:"NONE",[Em]:"BAYER8",[ym]:"BLUENOISE",[xm]:"IGNNOISE"},Cm="prerender",Am="postrender",wm="prerender:layer",Lm="postrender:layer",Sh="precull",Th="postcull",Dm="cull:end",TA=1,EA=2,Pm="pcShadowCamera",yA=0,xA=1,CA=2,Im=0,ur=1,pr="compact",mr=0,_r=1,pl=2,bm=3,Wi=0,Gs=1,ml=2,Rm=3,_l=4,gl=5,AA=0,wA=1,LA=2;class fo{constructor(t,e){o(this,"uniformFormats",[]);o(this,"bindGroupFormats",[]);o(this,"vertexFormat");this.uniformFormats[Ha]=t,this.vertexFormat=e}hasUniform(t){for(let e=0;e<this.uniformFormats.length;e++){const i=this.uniformFormats[e];if(i!=null&&i.get(t))return!0}return!1}hasTexture(t){for(let e=0;e<this.bindGroupFormats.length;e++){const i=this.bindGroupFormats[e];if(i!=null&&i.getTexture(t))return!0}return!1}getVertexElement(t){var e;return(e=this.vertexFormat)==null?void 0:e.elements.find(i=>i.name===t)}generateKey(t){var i;let e=JSON.stringify(this.uniformFormats)+JSON.stringify(this.bindGroupFormats);return t.isWebGPU&&(e+=(i=this.vertexFormat)==null?void 0:i.shaderProcessingHashString),e}}const Eh=new nt;function ws(c){return Eh.get(c)}function Mm(c,t){Eh.get(c,()=>t)}class Ls{static definesHash(t){const e=Array.from(t).sort((i,s)=>i[0]>s[0]?1:-1);return $e(JSON.stringify(e))}}const Nm=new nt;class Om{constructor(t,e,i={}){o(this,"index");o(this,"name");o(this,"defines",new Map);this.name=t,this.index=e,Object.assign(this,i),this.buildShaderDefines()}buildShaderDefines(){let t;this.isShadow?t="SHADOW":this.isForward?t="FORWARD":this.index===qa?t="PICK":this.index===fm&&(t="PICK",this.defines.set("DEPTH_PICK_PASS","")),this.defines.set(`${t}_PASS`,""),this.defines.set(`${this.name.toUpperCase()}_PASS`,"")}}class Tt{constructor(){o(this,"passesNamed",new Map);o(this,"passesIndexed",[]);o(this,"nextIndex",0);const t=(e,i,s)=>{this.allocate(e,s)};t("forward",Ya,{isForward:!0}),t("prepass"),t("shadow"),t("pick"),t("depth_pick")}static get(t){return Nm.get(t,()=>new Tt)}allocate(t,e){let i=this.passesNamed.get(t);return i===void 0&&(i=new Om(t,this.nextIndex,e),this.passesNamed.set(i.name,i),this.passesIndexed[i.index]=i,this.nextIndex++),i}getByIndex(t){return this.passesIndexed[t]}getByName(t){return this.passesNamed.get(t)}}class vl extends Map{constructor(e){super();o(this,"_validations");o(this,"_keyDirty",!1);o(this,"_key","");this._validations=e}set(e,i){return(!this.has(e)||this.get(e)!==i)&&this.markDirty(),super.set(e,i)}add(e,i=!0){for(const[s,a]of Object.entries(e))(i||!this.has(s))&&this.set(s,a);return this}delete(e){const i=this.has(e),s=super.delete(e);return i&&s&&this.markDirty(),s}clear(){this.size>0&&this.markDirty(),super.clear()}markDirty(){this._dirty=!0,this._keyDirty=!0}isDirty(){return this._dirty}resetDirty(){this._dirty=!1}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=Array.from(this.entries()).sort(([e],[i])=>e<i?-1:e>i?1:0).map(([e,i])=>`${e}=${$e(i)}`).join(",")),this._key}copy(e){for(const i of this.keys())e.has(i)||this.delete(i);for(const[i,s]of e)this.set(i,s);return this}}const Fm=new nt,wi=class wi{constructor(){o(this,"glsl",new vl(wi._validations));o(this,"wgsl",new vl(wi._validations));o(this,"version","")}static get(t,e=ae){const i=Fm.get(t,()=>new wi);return e===ae?i.glsl:i.wgsl}static registerValidation(t,e){}get useWGSL(){return this.glsl.size===0||this.wgsl.size>0}get key(){return`GLSL:${this.glsl.key}|WGSL:${this.wgsl.key}|API:${this.version}`}isDirty(){return this.glsl.isDirty()||this.wgsl.isDirty()}resetDirty(){this.glsl.resetDirty(),this.wgsl.resetDirty()}copy(t){return this.version=t.version,this.glsl.copy(t.glsl),this.wgsl.copy(t.wgsl),this}};o(wi,"_validations",new Map);let ne=wi;class La{static merge(...t){const e=new Map(t[0]??[]);for(let i=1;i<t.length;i++){const s=t[i];if(s)for(const[a,r]of s)e.set(a,r)}return e}}class Um extends Ls{constructor(t,e){super(),this.key=t,this.shaderDefinition=e}generateKey(t){return this.key}createShaderDefinition(t,e){return this.shaderDefinition}}class zt{static createShader(t,e){const i=ws(t);let s=i.getCachedShader(e.uniqueName);if(!s){const a=t.isWebGPU&&(!!e.vertexWGSL||!!e.vertexChunk)&&(!!e.fragmentWGSL||!!e.fragmentChunk),r=ne.get(t,a?ue:ae),n=e.vertexChunk?r.get(e.vertexChunk):a?e.vertexWGSL:e.vertexGLSL,l=e.fragmentChunk?r.get(e.fragmentChunk):a?e.fragmentWGSL:e.fragmentGLSL,d=La.merge(r,e.fragmentIncludes),f=La.merge(r,e.vertexIncludes);s=new $d(t,_e.createDefinition(t,{name:e.uniqueName,shaderLanguage:a?ue:ae,attributes:e.attributes,vertexCode:n,fragmentCode:l,useTransformFeedback:e.useTransformFeedback,vertexIncludes:f,vertexDefines:e.vertexDefines,fragmentIncludes:d,fragmentDefines:e.fragmentDefines,fragmentOutputTypes:e.fragmentOutputTypes})),i.setCachedShader(e.uniqueName,s)}return s}static getCoreDefines(t,e){const i=new Map(t.defines);return e.cameraShaderParams.defines.forEach((a,r)=>i.set(r,a)),Tt.get(e.device).getByIndex(e.pass).defines.forEach((a,r)=>i.set(r,a)),i}static processShader(t,e){const i=t.definition,a=`${i.name??"shader"}-id-${t.id}`,r=new Um(a,i),n="shader",l=ws(t.device);l.register(n,r);const d=l.getProgram(n,{},e);return l.unregister(n),d}static addScreenDepthChunkDefines(t,e){t.sceneDepthMapLinear&&e.set("SCENE_DEPTHMAP_LINEAR","")}}const Bm={type:ga,base:0,count:6,indexed:!0},Xi=new se,Yi=new se,gr=new jn;class gn{constructor(t){o(this,"uniformBuffer");o(this,"bindGroup");const e=t.device;if(this.shader=t,e.supportsUniformBuffers){const i=new fo;this.shader=zt.processShader(t,i);const s=this.shader.meshUniformBufferFormat;s&&(this.uniformBuffer=new Zn(e,s,!1));const a=this.shader.meshBindGroupFormat;this.bindGroup=new Ud(e,a)}}destroy(){var t,e;(t=this.uniformBuffer)==null||t.destroy(),this.uniformBuffer=null,(e=this.bindGroup)==null||e.destroy(),this.bindGroup=null}render(t,e,i){const s=this.shader.device;t&&(Xi.set(s.vx,s.vy,s.vw,s.vh),Yi.set(s.sx,s.sy,s.sw,s.sh),e=e??t,s.setViewport(t.x,t.y,t.z,t.w),s.setScissor(e.x,e.y,e.z,e.w)),s.setVertexBuffer(s.quadVertexBuffer);const a=this.shader;if(s.setShader(a),s.supportsUniformBuffers){s.setBindGroup(Ha,s.emptyBindGroup);const r=this.bindGroup;r.update(),s.setBindGroup(Od,r);const n=this.uniformBuffer;n?(n.update(gr),s.setBindGroup(dn,gr.bindGroup,gr.offsets)):s.setBindGroup(dn,s.emptyBindGroup)}s.draw(Bm,s.quadIndexBuffer,i),t&&(s.setViewport(Xi.x,Xi.y,Xi.z,Xi.w),s.setScissor(Yi.x,Yi.y,Yi.z,Yi.w))}}class km extends Ui{constructor(t,e,i,s){super(t),this.quad=e,this.rect=i,this.scissorRect=s}execute(){const{device:t}=this;t.setDrawStates(t.blendState),this.quad.render(this.rect,this.scissorRect)}}const zm=new se;function Da(c,t,e,i,s){const a=new gn(e);i||(i=zm,i.x=0,i.y=0,i.z=t?t.width:c.width,i.w=t?t.height:c.height);const r=new km(c,a,i,s);r.init(t),r.colorOps.clear=!1,r.depthStencilOps.clearDepth=!1,c.isWebGPU&&t===null&&c.samples>1&&(r.colorOps.store=!0),r.render(),a.destroy()}class Mt{constructor(t,e,i,s,a=[Xa]){o(this,"_ui",!1);o(this,"_sprite",!1);o(this,"_obj",{model:[],element:[],sprite:[],render:[]});o(this,"id");o(this,"name");o(this,"dynamic");o(this,"maxAabbSize");o(this,"layers");this.id=t,this.name=e,this.dynamic=i,this.maxAabbSize=s,this.layers=a}}o(Mt,"MODEL","model"),o(Mt,"ELEMENT","element"),o(Mt,"SPRITE","sprite"),o(Mt,"RENDER","render");const Sl=new b;class Vm{constructor(t){o(this,"bones");this._dirty=!0,this._rootBone=null,this._skinUpdateIndex=-1,this._updateBeforeCull=!0,t&&this.initSkin(t)}set rootBone(t){this._rootBone=t}get rootBone(){return this._rootBone}init(t,e){const i=e*3;let s=Math.ceil(Math.sqrt(i));s=I.roundUp(s,3);const a=Math.ceil(i/s);this.boneTexture=new ce(t,{width:s,height:a,format:at,mipmaps:!1,minFilter:ve,magFilter:ve,name:"skin"}),this.matrixPalette=this.boneTexture.lock({mode:gu}),this.boneTexture.unlock()}destroy(){this.boneTexture&&(this.boneTexture.destroy(),this.boneTexture=null)}resolve(t,e){this.rootBone=t;const i=this.skin,s=[];for(let a=0;a<i.boneNames.length;a++){const r=i.boneNames[a];let n=t.findByName(r);n||(n=e),s.push(n)}this.bones=s}initSkin(t){this.skin=t,this.bones=[];const e=t.inverseBindPose.length;this.init(t.device,e),this.matrices=[];for(let i=0;i<e;i++)this.matrices[i]=new b}uploadBones(t){this.boneTexture.upload()}_updateMatrices(t,e){if(this._skinUpdateIndex!==e){this._skinUpdateIndex=e,Sl.copy(t.getWorldTransform()).invert();for(let i=this.bones.length-1;i>=0;i--)this.matrices[i].mulAffine2(Sl,this.bones[i].getWorldTransform()),this.matrices[i].mulAffine2(this.matrices[i],this.skin.inverseBindPose[i])}}updateMatrices(t,e){this._updateBeforeCull&&this._updateMatrices(t,e)}updateMatrixPalette(t,e){this._updateMatrices(t,e);const i=this.matrixPalette,s=this.bones.length;for(let a=0;a<s;a++){const r=this.matrices[a].data,n=a*12;i[n]=r[0],i[n+1]=r[4],i[n+2]=r[8],i[n+3]=r[12],i[n+4]=r[1],i[n+5]=r[5],i[n+6]=r[9],i[n+7]=r[13],i[n+8]=r[2],i[n+9]=r[6],i[n+10]=r[10],i[n+11]=r[14]}this.uploadBones(this.skin.device)}}let Gm=0;class tt{constructor(){this.initDefaults()}initDefaults(){this.recreate=!1,this.verticesUsage=Nt,this.indicesUsage=Nt,this.maxVertices=0,this.maxIndices=0,this.vertexCount=0,this.indexCount=0,this.vertexStreamsUpdated=!1,this.indexStreamUpdated=!1,this.vertexStreamDictionary={},this.indices=null}_changeVertexCount(t,e){this.vertexCount||(this.vertexCount=t)}}o(tt,"DEFAULT_COMPONENTS_POSITION",3),o(tt,"DEFAULT_COMPONENTS_NORMAL",3),o(tt,"DEFAULT_COMPONENTS_UV",2),o(tt,"DEFAULT_COMPONENTS_COLORS",4);class Hm{constructor(t,e,i,s,a){this.data=t,this.componentCount=e,this.dataType=i,this.dataTypeNormalize=s,this.asInt=a}}class xe extends cp{constructor(e,i){super();o(this,"indexBuffer",[null]);o(this,"vertexBuffer",null);o(this,"primitive",[{type:0,base:0,baseVertex:0,count:0}]);o(this,"skin",null);o(this,"boneAabb",null);o(this,"_aabbVer",0);o(this,"_aabb",new Ce);o(this,"_geometryData",null);o(this,"_morph",null);o(this,"_storageIndex",!1);o(this,"_storageVertex",!1);this.id=Gm++,this.device=e,this._storageIndex=(i==null?void 0:i.storageIndex)||!1,this._storageVertex=(i==null?void 0:i.storageVertex)||!1}static fromGeometry(e,i,s={}){const a=new xe(e,s),{positions:r,normals:n,tangents:l,colors:d,uvs:f,uvs1:h,blendIndices:u,blendWeights:p,indices:m}=i;return r&&a.setPositions(r),n&&a.setNormals(n),l&&a.setVertexStream(Oi,l,4),d&&a.setColors32(d),f&&a.setUvs(0,f),h&&a.setUvs(1,h),u&&a.setVertexStream(ni,u,4,u.length/4,ir),p&&a.setVertexStream(ri,p,4),m&&a.setIndices(m),a.update(),a}set morph(e){e!==this._morph&&(this._morph&&this._morph.decRefCount(),this._morph=e,e&&e.incRefCount())}get morph(){return this._morph}set aabb(e){this._aabb=e,this._aabbVer++}get aabb(){return this._aabb}destroy(){const e=this.morph;e&&(this.morph=null,e.refCount<1&&e.destroy()),this.vertexBuffer&&(this.vertexBuffer.destroy(),this.vertexBuffer=null);for(let i=0;i<this.indexBuffer.length;i++)this._destroyIndexBuffer(i);this.indexBuffer.length=0,this._geometryData=null}_destroyIndexBuffer(e){this.indexBuffer[e]&&(this.indexBuffer[e].destroy(),this.indexBuffer[e]=null)}_initBoneAabbs(e){this.boneAabb=[],this.boneUsed=[];let i,s,a,r,n;const l=[],d=[],f=this.boneUsed,h=this.skin.boneNames.length;let u,p,m;for(let C=0;C<h;C++)l[C]=new _(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),d[C]=new _(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);const g=new dr(this.vertexBuffer),v=g.element[ge],E=g.element[ri],S=g.element[ni],T=this.vertexBuffer.numVertices;for(let C=0;C<T;C++){for(let x=0;x<4;x++)if(E.array[E.index+x]>0){const w=S.array[S.index+x];if(f[w]=!0,i=v.array[v.index],s=v.array[v.index+1],a=v.array[v.index+2],r=d[w],n=l[w],n.x>i&&(n.x=i),n.y>s&&(n.y=s),n.z>a&&(n.z=a),r.x<i&&(r.x=i),r.y<s&&(r.y=s),r.z<a&&(r.z=a),e){let L=u=i,P=p=s,R=m=a;for(let O=0;O<e.length;O++){const B=e[O],M=B.deltaPositions[C*3],j=B.deltaPositions[C*3+1],F=B.deltaPositions[C*3+2];M<0?L+=M:u+=M,j<0?P+=j:p+=j,F<0?R+=F:m+=F}n.x>L&&(n.x=L),n.y>P&&(n.y=P),n.z>R&&(n.z=R),r.x<u&&(r.x=u),r.y<p&&(r.y=p),r.z<m&&(r.z=m)}}g.next()}const y=this.vertexBuffer.getFormat().elements.find(C=>C.name===ge);if(y&&y.normalize){const C=(()=>{switch(y.dataType){case xu:return x=>Math.max(x/127,-1);case ir:return x=>x/255;case Cu:return x=>Math.max(x/32767,-1);case Au:return x=>x/65535;default:return x=>x}})();for(let x=0;x<h;x++)if(f[x]){const A=l[x],w=d[x];A.set(C(A.x),C(A.y),C(A.z)),w.set(C(w.x),C(w.y),C(w.z))}}for(let C=0;C<h;C++){const x=new Ce;x.setMinMax(l[C],d[C]),this.boneAabb.push(x)}}_initGeometryData(){this._geometryData||(this._geometryData=new tt,this.vertexBuffer&&(this._geometryData.vertexCount=this.vertexBuffer.numVertices,this._geometryData.maxVertices=this.vertexBuffer.numVertices),this.indexBuffer.length>0&&this.indexBuffer[0]&&(this._geometryData.indexCount=this.indexBuffer[0].numIndices,this._geometryData.maxIndices=this.indexBuffer[0].numIndices))}clear(e,i,s=0,a=0){this._initGeometryData(),this._geometryData.initDefaults(),this._geometryData.recreate=!0,this._geometryData.maxVertices=s,this._geometryData.maxIndices=a,this._geometryData.verticesUsage=e?Po:Nt,this._geometryData.indicesUsage=i?Po:Nt}setVertexStream(e,i,s,a,r=Ye,n=!1,l=!1){this._initGeometryData();const d=a||i.length/s;this._geometryData._changeVertexCount(d,e),this._geometryData.vertexStreamsUpdated=!0,this._geometryData.vertexStreamDictionary[e]=new Hm(i,s,r,n,l)}getVertexStream(e,i){let s=0,a=!1;if(this._geometryData){const r=this._geometryData.vertexStreamDictionary[e];r&&(a=!0,s=this._geometryData.vertexCount,ArrayBuffer.isView(i)?i.set(r.data):(i.length=0,i.push(r.data)))}return a||this.vertexBuffer&&(s=new dr(this.vertexBuffer).readData(e,i)),s}setPositions(e,i=tt.DEFAULT_COMPONENTS_POSITION,s){this.setVertexStream(ge,e,i,s,Ye,!1)}setNormals(e,i=tt.DEFAULT_COMPONENTS_NORMAL,s){this.setVertexStream(Ri,e,i,s,Ye,!1)}setUvs(e,i,s=tt.DEFAULT_COMPONENTS_UV,a){this.setVertexStream(ko+e,i,s,a,Ye,!1)}setColors(e,i=tt.DEFAULT_COMPONENTS_COLORS,s){this.setVertexStream(gt,e,i,s,Ye,!1)}setColors32(e,i){this.setVertexStream(gt,e,tt.DEFAULT_COMPONENTS_COLORS,i,ir,!0)}setIndices(e,i){this._initGeometryData(),this._geometryData.indexStreamUpdated=!0,this._geometryData.indices=e,this._geometryData.indexCount=i||e.length}getPositions(e){return this.getVertexStream(ge,e)}getNormals(e){return this.getVertexStream(Ri,e)}getUvs(e,i){return this.getVertexStream(ko+e,i)}getColors(e){return this.getVertexStream(gt,e)}getIndices(e){let i=0;if(this._geometryData&&this._geometryData.indices){const s=this._geometryData.indices;if(i=this._geometryData.indexCount,ArrayBuffer.isView(e))e.set(s);else{e.length=0;for(let a=0,r=s.length;a<r;a++)e.push(s[a])}}else this.indexBuffer.length>0&&this.indexBuffer[0]&&(i=this.indexBuffer[0].readData(e));return i}update(e=ga,i=!0){if(this._geometryData){if(i){const r=this._geometryData.vertexStreamDictionary[ge];r&&r.componentCount===3&&(this._aabb.compute(r.data,this._geometryData.vertexCount),this._aabbVer++)}let s=this._geometryData.recreate;this._geometryData.vertexCount>this._geometryData.maxVertices&&(s=!0,this._geometryData.maxVertices=this._geometryData.vertexCount),s&&this.vertexBuffer&&(this.vertexBuffer.destroy(),this.vertexBuffer=null);let a=this._geometryData.recreate;this._geometryData.indexCount>this._geometryData.maxIndices&&(a=!0,this._geometryData.maxIndices=this._geometryData.indexCount),a&&this.indexBuffer.length>0&&this.indexBuffer[0]&&(this.indexBuffer[0].destroy(),this.indexBuffer[0]=null),this._geometryData.vertexStreamsUpdated&&this._updateVertexBuffer(),this._geometryData.indexStreamUpdated&&this._updateIndexBuffer(),this.primitive[0].type=e,this.indexBuffer.length>0&&this.indexBuffer[0]?this._geometryData.indexStreamUpdated&&(this.primitive[0].count=this._geometryData.indexCount,this.primitive[0].indexed=!0):this._geometryData.vertexStreamsUpdated&&(this.primitive[0].count=this._geometryData.vertexCount,this.primitive[0].indexed=!1),this._geometryData.vertexCount=0,this._geometryData.indexCount=0,this._geometryData.vertexStreamsUpdated=!1,this._geometryData.indexStreamUpdated=!1,this._geometryData.recreate=!1,this.updateRenderStates()}}_buildVertexFormat(e){const i=[];for(const s in this._geometryData.vertexStreamDictionary){const a=this._geometryData.vertexStreamDictionary[s];i.push({semantic:s,components:a.componentCount,type:a.dataType,normalize:a.dataTypeNormalize,asInt:a.asInt})}return new Kn(this.device,i,e)}_updateVertexBuffer(){if(!this.vertexBuffer){const s=this._geometryData.maxVertices,a=this._buildVertexFormat(s);this.vertexBuffer=new Bd(this.device,a,s,{usage:this._geometryData.verticesUsage,storage:this._storageVertex})}const e=new dr(this.vertexBuffer),i=this._geometryData.vertexCount;for(const s in this._geometryData.vertexStreamDictionary){const a=this._geometryData.vertexStreamDictionary[s];e.writeData(s,a.data,i),delete this._geometryData.vertexStreamDictionary[s]}e.end()}_updateIndexBuffer(){if(this.indexBuffer.length<=0||!this.indexBuffer[0]){const i=this._geometryData.maxVertices,s=i>65535||i===0?nn:rn,a=this._storageIndex?{storage:!0}:void 0;this.indexBuffer[0]=new sl(this.device,s,this._geometryData.maxIndices,this._geometryData.indicesUsage,void 0,a)}const e=this._geometryData.indices;e&&(this.indexBuffer[0].writeData(e,this._geometryData.indexCount),this._geometryData.indices=null)}prepareRenderState(e){e===jt?this.generateWireframe():e===Vs&&(this.primitive[Vs]={type:au,base:0,baseVertex:0,count:this.vertexBuffer?this.vertexBuffer.numVertices:0,indexed:!1})}updateRenderStates(){this.primitive[Vs]&&this.prepareRenderState(Vs),this.primitive[jt]&&this.prepareRenderState(jt)}generateWireframe(){this._destroyIndexBuffer(jt);const e=this.vertexBuffer.numVertices;let i,s;if(this.indexBuffer.length>0&&this.indexBuffer[0]){const r=[[0,1],[1,2],[2,0]],n=this.primitive[is].base,l=this.primitive[is].count,d=this.primitive[is].baseVertex||0,f=this.indexBuffer[is],h=Gu[f.format],u=new h(f.storage),p=new h(l*2),m=new Set;let g=0;for(let v=n;v<n+l;v+=3)for(let E=0;E<3;E++){const S=u[v+r[E][0]]+d,T=u[v+r[E][1]]+d,y=S>T?T*e+S:S*e+T;m.has(y)||(m.add(y),p[g++]=S,p[g++]=T)}m.clear(),s=f.format,i=p.slice(0,g)}else{const r=e-e%3,n=r/3*6;s=n>65535?nn:rn,i=n>65535?new Uint32Array(n):new Uint16Array(n);let l=0;for(let d=0;d<r;d+=3)i[l++]=d,i[l++]=d+1,i[l++]=d+1,i[l++]=d+2,i[l++]=d+2,i[l++]=d}const a=new sl(this.vertexBuffer.device,s,i.length,Nt,i.buffer);this.primitive[jt]={type:ld,base:0,baseVertex:0,count:i.length,indexed:!0},this.indexBuffer[jt]=a}}const Tl=new b,vr=new _,El=new G,Sr=new G,yl=new _,xl=new _,Wm=new b,Xm=new G,De=new _,$i=new b,Pe=new G,mi=new G,Cl=new b,Tr=new _,Hs=new _;function Al(c,t){return c instanceof Function?c:e=>{let i=e[c];return i instanceof Function&&(i=i()),i===t}}function yh(c,t){if(t(c))return c;const e=c._children,i=e.length;for(let s=0;s<i;++s){const a=yh(e[s],t);if(a)return a}return null}class ki extends pe{constructor(e="Untitled"){super();o(this,"name");o(this,"tags",new cs(this));o(this,"localPosition",new _);o(this,"localRotation",new G);o(this,"localScale",new _(1,1,1));o(this,"localEulerAngles",new _);o(this,"position",new _);o(this,"rotation",new G);o(this,"eulerAngles",new _);o(this,"_scale",null);o(this,"localTransform",new b);o(this,"_dirtyLocal",!1);o(this,"_aabbVer",0);o(this,"_frozen",!1);o(this,"worldTransform",new b);o(this,"_dirtyWorld",!1);o(this,"_worldScaleSign",0);o(this,"_normalMatrix",new _s);o(this,"_dirtyNormal",!0);o(this,"_right",null);o(this,"_up",null);o(this,"_forward",null);o(this,"_parent",null);o(this,"_children",[]);o(this,"_graphDepth",0);o(this,"_enabled",!0);o(this,"_enabledInHierarchy",!1);o(this,"scaleCompensation",!1);this.name=e}get right(){return this._right||(this._right=new _),this.getWorldTransform().getX(this._right).normalize()}get up(){return this._up||(this._up=new _),this.getWorldTransform().getY(this._up).normalize()}get forward(){return this._forward||(this._forward=new _),this.getWorldTransform().getZ(this._forward).normalize().mulScalar(-1)}get normalMatrix(){const e=this._normalMatrix;return this._dirtyNormal&&(e.invertMat4(this.getWorldTransform()).transpose(),this._dirtyNormal=!1),e}set enabled(e){var i;this._enabled!==e&&(this._enabled=e,(e&&((i=this._parent)!=null&&i.enabled)||!e)&&this._notifyHierarchyStateChanged(this,e))}get enabled(){return this._enabled&&this._enabledInHierarchy}get parent(){return this._parent}get path(){let e=this._parent;if(!e)return"";let i=this.name;for(;e&&e._parent;)i=`${e.name}/${i}`,e=e._parent;return i}get root(){let e=this;for(;e._parent;)e=e._parent;return e}get children(){return this._children}getChildren(){return this.children}getName(){return this.name}getPath(){return this.path}getRoot(){return this.root}getParent(){return this.parent}setName(e){this.name=e}get graphDepth(){return this._graphDepth}_notifyHierarchyStateChanged(e,i){e._onHierarchyStateChanged(i);const s=e._children;for(let a=0,r=s.length;a<r;a++)s[a]._enabled&&this._notifyHierarchyStateChanged(s[a],i)}_onHierarchyStateChanged(e){this._enabledInHierarchy=e,e&&!this._frozen&&this._unfreezeParentToRoot()}_cloneInternal(e){e.name=this.name;const i=this.tags._list;e.tags.clear();for(let s=0;s<i.length;s++)e.tags.add(i[s]);e.localPosition.copy(this.localPosition),e.localRotation.copy(this.localRotation),e.localScale.copy(this.localScale),e.localEulerAngles.copy(this.localEulerAngles),e.position.copy(this.position),e.rotation.copy(this.rotation),e.eulerAngles.copy(this.eulerAngles),e.localTransform.copy(this.localTransform),e._dirtyLocal=this._dirtyLocal,e.worldTransform.copy(this.worldTransform),e._dirtyWorld=this._dirtyWorld,e._dirtyNormal=this._dirtyNormal,e._aabbVer=this._aabbVer+1,e._enabled=this._enabled,e.scaleCompensation=this.scaleCompensation,e._enabledInHierarchy=!1}clone(){const e=new this.constructor;return this._cloneInternal(e),e}copy(e){return e._cloneInternal(this),this}destroy(){this.remove();const e=this._children;for(;e.length;){const i=e.pop();i._parent=null,i.destroy()}this.fire("destroy",this),this.off()}find(e,i){const s=[],a=Al(e,i);return this.forEach(r=>{a(r)&&s.push(r)}),s}findOne(e,i){const s=Al(e,i);return yh(this,s)}findByTag(...e){const i=[],s=(a,r)=>{r&&a.tags.has(...e)&&i.push(a);for(let n=0;n<a._children.length;n++)s(a._children[n],!0)};return s(this,!1),i}findByName(e){return this.findOne("name",e)}findByPath(e){const i=Array.isArray(e)?e:e.split("/");let s=this;for(let a=0,r=i.length;a<r;++a)if(s=s.children.find(n=>n.name===i[a]),!s)return null;return s}forEach(e,i){e.call(i,this);const s=this._children,a=s.length;for(let r=0;r<a;++r)s[r].forEach(e,i)}isDescendantOf(e){let i=this._parent;for(;i;){if(i===e)return!0;i=i._parent}return!1}isAncestorOf(e){return e.isDescendantOf(this)}getEulerAngles(){return this.getWorldTransform().getEulerAngles(this.eulerAngles),this.eulerAngles}getLocalEulerAngles(){return this.localRotation.getEulerAngles(this.localEulerAngles),this.localEulerAngles}getLocalPosition(){return this.localPosition}getLocalRotation(){return this.localRotation}getLocalScale(){return this.localScale}getLocalTransform(){return this._dirtyLocal&&(this.localTransform.setTRS(this.localPosition,this.localRotation,this.localScale),this._dirtyLocal=!1),this.localTransform}getPosition(){return this.getWorldTransform().getTranslation(this.position),this.position}getRotation(){return this.rotation.setFromMat4(this.getWorldTransform()),this.rotation}getScale(){return this._scale||(this._scale=new _),this.getWorldTransform().getScale(this._scale)}getWorldTransform(){return!this._dirtyLocal&&!this._dirtyWorld?this.worldTransform:(this._parent&&this._parent.getWorldTransform(),this._sync(),this.worldTransform)}get worldScaleSign(){return this._worldScaleSign===0&&(this._worldScaleSign=this.getWorldTransform().scaleSign),this._worldScaleSign}remove(){var e;(e=this._parent)==null||e.removeChild(this)}reparent(e,i){this.remove(),e&&(i>=0?e.insertChild(this,i):e.addChild(this))}setLocalEulerAngles(e,i,s){this.localRotation.setFromEulerAngles(e,i,s),this._dirtyLocal||this._dirtifyLocal()}setLocalPosition(e,i,s){e instanceof _?this.localPosition.copy(e):this.localPosition.set(e,i,s),this._dirtyLocal||this._dirtifyLocal()}setLocalRotation(e,i,s,a){e instanceof G?this.localRotation.copy(e):this.localRotation.set(e,i,s,a),this._dirtyLocal||this._dirtifyLocal()}setLocalScale(e,i,s){e instanceof _?this.localScale.copy(e):this.localScale.set(e,i,s),this._dirtyLocal||this._dirtifyLocal()}_dirtifyLocal(){this._dirtyLocal||(this._dirtyLocal=!0,this._dirtyWorld||this._dirtifyWorld())}_unfreezeParentToRoot(){let e=this._parent;for(;e;)e._frozen=!1,e=e._parent}_dirtifyWorld(){this._dirtyWorld||this._unfreezeParentToRoot(),this._dirtifyWorldInternal()}_dirtifyWorldInternal(){if(!this._dirtyWorld){this._frozen=!1,this._dirtyWorld=!0;for(let e=0;e<this._children.length;e++)this._children[e]._dirtyWorld||this._children[e]._dirtifyWorldInternal()}this._dirtyNormal=!0,this._worldScaleSign=0,this._aabbVer++}setPosition(e,i,s){e instanceof _?De.copy(e):De.set(e,i,s),this._parent===null?this.localPosition.copy(De):($i.copy(this._parent.getWorldTransform()).invert(),$i.transformPoint(De,this.localPosition)),this._dirtyLocal||this._dirtifyLocal()}setRotation(e,i,s,a){if(e instanceof G?Pe.copy(e):Pe.set(e,i,s,a),this._parent===null)this.localRotation.copy(Pe);else{const r=this._parent.getRotation();mi.copy(r).invert(),this.localRotation.copy(mi).mul(Pe)}this._dirtyLocal||this._dirtifyLocal()}setPositionAndRotation(e,i){if(this._parent===null)this.localPosition.copy(e),this.localRotation.copy(i);else{const s=this._parent.getWorldTransform();$i.copy(s).invert(),$i.transformPoint(e,this.localPosition),this.localRotation.setFromMat4($i).mul(i)}this._dirtyLocal||this._dirtifyLocal()}setEulerAngles(e,i,s){if(this.localRotation.setFromEulerAngles(e,i,s),this._parent!==null){const a=this._parent.getRotation();mi.copy(a).invert(),this.localRotation.mul2(mi,this.localRotation)}this._dirtyLocal||this._dirtifyLocal()}addChild(e){this._prepareInsertChild(e),this._children.push(e),this._onInsertChild(e)}addChildAndSaveTransform(e){const i=e.getPosition(),s=e.getRotation();this._prepareInsertChild(e),e.setPosition(Wm.copy(this.worldTransform).invert().transformPoint(i)),e.setRotation(Xm.copy(this.getRotation()).invert().mul(s)),this._children.push(e),this._onInsertChild(e)}insertChild(e,i){this._prepareInsertChild(e),this._children.splice(i,0,e),this._onInsertChild(e)}_prepareInsertChild(e){e.remove()}_fireOnHierarchy(e,i,s){this.fire(e,s);for(let a=0;a<this._children.length;a++)this._children[a]._fireOnHierarchy(i,i,s)}_onInsertChild(e){e._parent=this;const i=e._enabled&&this.enabled;e._enabledInHierarchy!==i&&(e._enabledInHierarchy=i,e._notifyHierarchyStateChanged(e,i)),e._updateGraphDepth(),e._dirtifyWorld(),this._frozen&&e._unfreezeParentToRoot(),e._fireOnHierarchy("insert","inserthierarchy",this),this.fire&&this.fire("childinsert",e)}_updateGraphDepth(){this._graphDepth=this._parent?this._parent._graphDepth+1:0;for(let e=0,i=this._children.length;e<i;e++)this._children[e]._updateGraphDepth()}removeChild(e){const i=this._children.indexOf(e);i!==-1&&(this._children.splice(i,1),e._parent=null,e._fireOnHierarchy("remove","removehierarchy",this),this.fire("childremove",e))}_sync(){if(this._dirtyLocal&&(this.localTransform.setTRS(this.localPosition,this.localRotation,this.localScale),this._dirtyLocal=!1),this._dirtyWorld){if(this._parent===null)this.worldTransform.copy(this.localTransform);else if(this.scaleCompensation){let e;const i=this._parent;let s=this.localScale,a=i;if(a){for(;a&&a.scaleCompensation;)a=a._parent;a&&(a=a._parent,a&&(e=a.worldTransform.getScale(),yl.mul2(e,this.localScale),s=yl))}Sr.setFromMat4(i.worldTransform),El.mul2(Sr,this.localRotation);let r=i.worldTransform;i.scaleCompensation&&(xl.mul2(e,i.getLocalScale()),Tl.setTRS(i.worldTransform.getTranslation(vr),Sr,xl),r=Tl),r.transformPoint(this.localPosition,vr),this.worldTransform.setTRS(vr,El,s)}else this.worldTransform.mulAffine2(this._parent.worldTransform,this.localTransform);this._dirtyWorld=!1}}syncHierarchy(){if(!this._enabled||this._frozen)return;this._frozen=!0,(this._dirtyLocal||this._dirtyWorld)&&this._sync();const e=this._children;for(let i=0,s=e.length;i<s;i++)e[i].syncHierarchy()}lookAt(e,i,s,a=0,r=1,n=0){if(e instanceof _)Tr.copy(e),i instanceof _?Hs.copy(i):Hs.copy(_.UP);else{if(s===void 0)return;Tr.set(e,i,s),Hs.set(a,r,n)}Cl.setLookAt(this.getPosition(),Tr,Hs),Pe.setFromMat4(Cl),this.setRotation(Pe)}translate(e,i,s){e instanceof _?De.copy(e):De.set(e,i,s),De.add(this.getPosition()),this.setPosition(De)}translateLocal(e,i,s){e instanceof _?De.copy(e):De.set(e,i,s),this.localRotation.transformVector(De,De),this.localPosition.add(De),this._dirtyLocal||this._dirtifyLocal()}rotate(e,i,s){if(Pe.setFromEulerAngles(e,i,s),this._parent===null)this.localRotation.mul2(Pe,this.localRotation);else{const a=this.getRotation(),r=this._parent.getRotation();mi.copy(r).invert(),Pe.mul2(mi,Pe),this.localRotation.mul2(Pe,a)}this._dirtyLocal||this._dirtifyLocal()}rotateLocal(e,i,s){Pe.setFromEulerAngles(e,i,s),this.localRotation.mul(Pe),this._dirtyLocal||this._dirtifyLocal()}}const xh=new nt;function uo(c){return xh.get(c)}function Ym(c,t){xh.get(c,()=>t)}class $m{constructor(){o(this,"cache",new Map)}destroy(){this.cache.forEach((t,e)=>{e.destroy()}),this.cache.clear()}incRef(t){const e=(this.cache.get(t)||0)+1;this.cache.set(t,e)}decRef(t){if(t){let e=this.cache.get(t);e&&(e--,e===0?(this.cache.delete(t),t.destroy()):this.cache.set(t,e))}}}class vn{static incRef(t){this.cache.incRef(t)}static decRef(t){this.cache.decRef(t)}static destroy(){this.cache.destroy()}}o(vn,"cache",new $m);class qm{constructor(){o(this,"_counter",0)}get(){return this._counter++}}const jm=new qm,Km=new Ce,Ws=new Ce,Er=new bc,yr=new Set,_i=new Uint32Array(4);class wl{constructor(t){o(this,"vertexBuffer",null);o(this,"_destroyVertexBuffer",!1);this.count=t}destroy(){var t;this._destroyVertexBuffer&&((t=this.vertexBuffer)==null||t.destroy()),this.vertexBuffer=null}}class Zm{constructor(){o(this,"shader");o(this,"bindGroup",null);o(this,"uniformBuffer",null);o(this,"hashes")}getBindGroup(t){if(!this.bindGroup){const i=this.shader.meshBindGroupFormat;this.bindGroup=new Ud(t,i)}return this.bindGroup}getUniformBuffer(t){if(!this.uniformBuffer){const i=this.shader.meshUniformBufferFormat;this.uniformBuffer=new Zn(t,i,!1)}return this.uniformBuffer}destroy(){var t,e;(t=this.bindGroup)==null||t.destroy(),this.bindGroup=null,(e=this.uniformBuffer)==null||e.destroy(),this.uniformBuffer=null}}const Zt=class Zt{constructor(t,e,i=null){o(this,"castShadow",!1);o(this,"shadowCascadeMask",Jp);o(this,"cull",!0);o(this,"drawOrder",0);o(this,"_drawBucket",127);o(this,"node");o(this,"visible",!0);o(this,"shaderPassMask",4294967295);o(this,"visibleThisFrame",!1);o(this,"flipFacesFactor",1);o(this,"gsplatInstance",null);o(this,"id",jm.get());o(this,"isVisibleFunc",null);o(this,"instancingData",null);o(this,"indirectData",null);o(this,"drawCommands",null);o(this,"meshMetaData",null);o(this,"parameters",{});o(this,"pick",!0);o(this,"stencilFront",null);o(this,"stencilBack",null);o(this,"transparent",!1);o(this,"_aabb",new Ce);o(this,"_aabbVer",-1);o(this,"_aabbMeshVer",-1);o(this,"_customAabb",null);o(this,"_updateAabb",!0);o(this,"_updateAabbFunc",null);o(this,"_sortKeyShadow",0);o(this,"_sortKeyForward",0);o(this,"_sortKeyDynamic",0);o(this,"_layer",zp);o(this,"_material",null);o(this,"_skinInstance",null);o(this,"_morphInstance",null);o(this,"_receiveShadow",!0);o(this,"_renderStyle",is);o(this,"_screenSpace",!1);o(this,"_shaderCache",new Map);o(this,"_shaderDefs",li<<16);o(this,"_calculateSortDistance",null);if(this.node=i,this._mesh=t,t.incRefCount(),this.material=e,t.vertexBuffer){const s=t.vertexBuffer.format;this._shaderDefs|=s.hasUv0?uh:0,this._shaderDefs|=s.hasUv1?ph:0,this._shaderDefs|=s.hasColor?mh:0,this._shaderDefs|=s.hasTangents?lo:0}this.updateKey()}set drawBucket(t){this._drawBucket=Math.floor(t)&255,this.updateKey()}get drawBucket(){return this._drawBucket}set renderStyle(t){this._renderStyle=t,this.mesh.prepareRenderState(t)}get renderStyle(){return this._renderStyle}set mesh(t){t!==this._mesh&&(this._mesh&&this._mesh.decRefCount(),this._mesh=t,t&&t.incRefCount())}get mesh(){return this._mesh}set aabb(t){this._aabb=t}get aabb(){if(!this._updateAabb)return this._aabb;if(this._updateAabbFunc)return this._updateAabbFunc(this._aabb);let t=this._customAabb,e=!!t;if(!t){if(t=Km,this.skinInstance){if(!this.mesh.boneAabb){const a=this._morphInstance?this._morphInstance.morph._targets:null;this.mesh._initBoneAabbs(a)}const i=this.mesh.boneUsed;let s=!0;for(let a=0;a<this.mesh.boneAabb.length;a++)i[a]&&(Ws.setFromTransformedAabb(this.mesh.boneAabb[a],this.skinInstance.matrices[a]),s?(s=!1,t.center.copy(Ws.center),t.halfExtents.copy(Ws.halfExtents)):t.add(Ws));e=!0}else if(this.node._aabbVer!==this._aabbVer||this.mesh._aabbVer!==this._aabbMeshVer){if(this.mesh?(t.center.copy(this.mesh.aabb.center),t.halfExtents.copy(this.mesh.aabb.halfExtents)):(t.center.set(0,0,0),t.halfExtents.set(0,0,0)),this.mesh&&this.mesh.morph){const i=this.mesh.morph.aabb;t._expand(i.getMin(),i.getMax())}e=!0,this._aabbVer=this.node._aabbVer,this._aabbMeshVer=this.mesh._aabbVer}}return e&&this._aabb.setFromTransformedAabb(t,this.node.getWorldTransform()),this._aabb}clearShaders(){this._shaderCache.forEach(t=>{t.destroy()}),this._shaderCache.clear()}getShaderInstance(t,e,i,s,a,r){var f;const n=this._shaderDefs;_i[0]=t,_i[1]=e,_i[2]=n,_i[3]=s.hash;const l=kd(_i);let d=this._shaderCache.get(l);if(!d){const h=this._material;if(d=new Zm,d.shader=h.variants.get(l),d.hashes=new Uint32Array(_i),!d.shader){const u=h.getShaderVariant({device:this.mesh.device,scene:i,objDefs:n,cameraShaderParams:s,pass:t,sortedLights:r,viewUniformFormat:a,vertexFormat:(f=this.mesh.vertexBuffer)==null?void 0:f.format});h.variants.set(l,u),d.shader=u}this._shaderCache.set(l,d)}return d}set material(t){this.clearShaders();const e=this._material;e&&e.removeMeshInstanceRef(this),this._material=t,t&&(t.addMeshInstanceRef(this),this.transparent=t.transparent,this.updateKey())}get material(){return this._material}_updateShaderDefs(t){t!==this._shaderDefs&&(this._shaderDefs=t,this.clearShaders())}set calculateSortDistance(t){this._calculateSortDistance=t}get calculateSortDistance(){return this._calculateSortDistance}set receiveShadow(t){this._receiveShadow!==t&&(this._receiveShadow=t,this._updateShaderDefs(t?this._shaderDefs&~Ca:this._shaderDefs|Ca))}get receiveShadow(){return this._receiveShadow}set batching(t){this._updateShaderDefs(t?this._shaderDefs|da:this._shaderDefs&~da)}get batching(){return(this._shaderDefs&da)!==0}set skinInstance(t){this._skinInstance=t,this._updateShaderDefs(t?this._shaderDefs|Es:this._shaderDefs&~Es),this._setupSkinUpdate()}get skinInstance(){return this._skinInstance}set morphInstance(t){var i;(i=this._morphInstance)==null||i.destroy(),this._morphInstance=t;let e=this._shaderDefs;e=t&&t.morph.morphPositions?e|xs:e&~xs,e=t&&t.morph.morphNormals?e|Cs:e&~Cs,e=t&&t.morph.intRenderFormat?e|As:e&~As,this._updateShaderDefs(e)}get morphInstance(){return this._morphInstance}set screenSpace(t){this._screenSpace!==t&&(this._screenSpace=t,this._updateShaderDefs(t?this._shaderDefs|Aa:this._shaderDefs&~Aa))}get screenSpace(){return this._screenSpace}set key(t){this._sortKeyForward=t}get key(){return this._sortKeyForward}set mask(t){const e=this._shaderDefs&65535;this._updateShaderDefs(e|t<<16)}get mask(){return this._shaderDefs>>16}set instancingCount(t){this.instancingData&&(this.instancingData.count=t)}get instancingCount(){return this.instancingData?this.instancingData.count:0}destroy(){var e,i,s;const t=this.mesh;t&&(this.mesh=null,t.refCount<1&&t.destroy()),this.setRealtimeLightmap(Zt.lightmapParamNames[0],null),this.setRealtimeLightmap(Zt.lightmapParamNames[1],null),(e=this._skinInstance)==null||e.destroy(),this._skinInstance=null,(i=this.morphInstance)==null||i.destroy(),this.morphInstance=null,this.clearShaders(),this.material=null,(s=this.instancingData)==null||s.destroy(),this.destroyDrawCommands()}destroyDrawCommands(){if(this.drawCommands){for(const t of this.drawCommands.values())t==null||t.destroy();this.drawCommands=null}}static _prepareRenderStyleForArray(t,e){if(t){for(let i=0;i<t.length;i++){t[i]._renderStyle=e;const s=t[i].mesh;yr.has(s)||(yr.add(s),s.prepareRenderState(e))}yr.clear()}}_isVisible(t){return this.visible?this.isVisibleFunc?this.isVisibleFunc(t):(Er.center=this.aabb.center,Er.radius=this._aabb.halfExtents.length(),t.frustum.containsSphere(Er)>0):!1}updateKey(){const{material:t}=this;this._sortKeyForward=this._drawBucket<<23|(t.alphaToCoverage||t.alphaTest?4194304:0)|t.id&4194303}setInstancing(t,e=!1){t?(t===!0?this.instancingData=new wl(0):(this.instancingData=new wl(t.numVertices),this.instancingData.vertexBuffer=t,t.format.instancing=!0),this.cull=e):(this.instancingData=null,this.cull=!0),this._updateShaderDefs(t instanceof Bd?this._shaderDefs|ys:this._shaderDefs&~ys)}setIndirect(t,e,i=1){const s=(t==null?void 0:t.camera)??null;if(e===-1)this._deleteDrawCommandsKey(s);else{this.drawCommands??(this.drawCommands=new Map);const a=this.drawCommands.get(s)??new cl(this.mesh.device);a.slotIndex=e,a.update(i),this.drawCommands.set(s,a),this.mesh.device.mapsToClear.add(this.drawCommands)}}setMultiDraw(t,e=1){var a;const i=(t==null?void 0:t.camera)??null;let s;if(e===0)this._deleteDrawCommandsKey(i);else{if(this.drawCommands??(this.drawCommands=new Map),s=this.drawCommands.get(i),!s){const r=(a=this.mesh.indexBuffer)==null?void 0:a[0],n=r==null?void 0:r.format,l=n!==void 0?yf[n]:0;s=new cl(this.mesh.device,l),this.drawCommands.set(i,s)}s.allocate(e)}return s}_deleteDrawCommandsKey(t){const e=this.drawCommands;if(e){const i=e.get(t);i==null||i.destroy(),e.delete(t),e.size===0&&this.destroyDrawCommands()}}getDrawCommands(t){const e=this.drawCommands;if(e)return e.get(t)??e.get(null)}getIndirectMetaData(){var i;const t=(i=this.mesh)==null?void 0:i.primitive[this.renderStyle],e=this.meshMetaData??(this.meshMetaData=new Int32Array(4));return e[0]=t.count,e[1]=t.base,e[2]=t.baseVertex,e}ensureMaterial(t){this.material||(this.material=uo(t))}clearParameters(){this.parameters={}}getParameters(){return this.parameters}getParameter(t){return this.parameters[t]}setParameter(t,e){const i=this.parameters[t];i?i.data=e:this.parameters[t]={scopeId:null,data:e}}setRealtimeLightmap(t,e){const i=this.getParameter(t);i!==e&&(i&&vn.decRef(i.data),e?(vn.incRef(e),this.setParameter(t,e)):this.deleteParameter(t))}deleteParameter(t){this.parameters[t]&&delete this.parameters[t]}setParameters(t){const e=this.parameters;for(const i in e){const s=e[i];s.scopeId||(s.scopeId=t.scope.resolve(i)),s.scopeId.setValue(s.data)}}setLightmapped(t){t?this.mask=(this.mask|_h)&-6:(this.setRealtimeLightmap(Zt.lightmapParamNames[0],null),this.setRealtimeLightmap(Zt.lightmapParamNames[1],null),this._shaderDefs&=-4289,this.mask=(this.mask|li)&-7)}setCustomAabb(t){t?this._customAabb?this._customAabb.copy(t):this._customAabb=t.clone():(this._customAabb=null,this._aabbVer=-1),this._setupSkinUpdate()}_setupSkinUpdate(){this._skinInstance&&(this._skinInstance._updateBeforeCull=!this._customAabb)}};o(Zt,"lightmapParamNames",["texture_lightMap","texture_dirLightMap"]);let Vt=Zt;const Ll="uSceneColorMap";class Jm extends Fi{constructor(){super(...arguments);o(this,"colorRenderTarget",null);o(this,"source",null)}destroy(){super.destroy(),this.releaseRenderTarget(this.colorRenderTarget)}shouldReallocate(e,i,s){if((e==null?void 0:e.colorBuffer.format)!==s)return!0;const r=(i==null?void 0:i.width)||this.device.width,n=(i==null?void 0:i.height)||this.device.height;return!e||r!==e.width||n!==e.height}allocateRenderTarget(e,i,s,a){const r=new ce(s,{name:Ll,format:a,width:i?i.colorBuffer.width:s.width,height:i?i.colorBuffer.height:s.height,mipmaps:!0,minFilter:Nc,magFilter:Ae,addressU:q,addressV:q});return e?(e.destroyFrameBuffers(),e._colorBuffer=r,e._colorBuffers=[r],e.evaluateDimensions()):e=new _t({name:"ColorGrabRT",colorBuffer:r,depth:!1,stencil:!1,autoResolve:!1}),e}releaseRenderTarget(e){e&&(e.destroyTextureBuffers(),e.destroy())}frameUpdate(){const e=this.device,i=this.source,s=(i==null?void 0:i.colorBuffer.format)??this.device.backBufferFormat;this.shouldReallocate(this.colorRenderTarget,i==null?void 0:i.colorBuffer,s)&&(this.releaseRenderTarget(this.colorRenderTarget),this.colorRenderTarget=this.allocateRenderTarget(this.colorRenderTarget,i,e,s));const a=this.colorRenderTarget.colorBuffer;e.scope.resolve(Ll).setValue(a)}execute(){const e=this.device,i=this.source,s=this.colorRenderTarget.colorBuffer;e.isWebGPU?(e.copyRenderTarget(i,this.colorRenderTarget,!0,!1),e.mipmapRenderer.generate(this.colorRenderTarget.colorBuffer.impl)):(e.copyRenderTarget(i,this.colorRenderTarget,!0,!1),e.activeTexture(e.maxCombinedTextures-1),e.bindTexture(s),e.gl.generateMipmap(s.impl._glTarget))}}const Dl="uSceneDepthMap";class Qm extends Fi{constructor(e,i){super(e);o(this,"depthRenderTarget",null);o(this,"camera",null);this.camera=i}destroy(){super.destroy(),this.releaseRenderTarget(this.depthRenderTarget)}shouldReallocate(e,i){const s=(i==null?void 0:i.width)||this.device.width,a=(i==null?void 0:i.height)||this.device.height;return!e||s!==e.width||a!==e.height}allocateRenderTarget(e,i,s,a,r){const n=ce.createDataTexture2D(s,Dl,i?i.colorBuffer.width:s.width,i?i.colorBuffer.height:s.height,a);return e?(e.destroyFrameBuffers(),r?e._depthBuffer=n:(e._colorBuffer=n,e._colorBuffers=[n]),e.evaluateDimensions()):e=new _t({name:"DepthGrabRT",colorBuffer:r?null:n,depthBuffer:r?n:null,depth:!r,stencil:s.supportsStencil,autoResolve:!1}),e}releaseRenderTarget(e){e&&(e.destroyTextureBuffers(),e.destroy())}before(){var d,f;const e=this.camera,i=this.device,s=(e==null?void 0:e.renderTarget)??i.backBuffer;let a=!0,r=s.stencil?Rn:Di;i.isWebGPU&&s.samples>1&&(r=Ni,a=!1);const n=((d=e.renderTarget)==null?void 0:d.depthBuffer)??((f=e.renderTarget)==null?void 0:f.colorBuffer);this.shouldReallocate(this.depthRenderTarget,n)&&(this.releaseRenderTarget(this.depthRenderTarget),this.depthRenderTarget=this.allocateRenderTarget(this.depthRenderTarget,e.renderTarget,i,r,a));const l=a?this.depthRenderTarget.depthBuffer:this.depthRenderTarget.colorBuffer;i.scope.resolve(Dl).setValue(l)}execute(){const e=this.device;if(e.isWebGL2&&e.renderTarget.samples>1){const i=e.renderTarget.impl._glFrameBuffer,s=this.depthRenderTarget;e.renderTarget=s,e.updateBegin(),this.depthRenderTarget.impl.internalResolve(e,i,s.impl._glFrameBuffer,this.depthRenderTarget,e.gl.DEPTH_BUFFER_BIT)}else e.copyRenderTarget(e.renderTarget,this.depthRenderTarget,!1,!0)}}class Ch{constructor(){o(this,"_gammaCorrection",ss);o(this,"_toneMapping",im);o(this,"_srgbRenderTarget",!1);o(this,"_ssaoEnabled",!1);o(this,"_fog",Bi);o(this,"_sceneDepthMapLinear",!1);o(this,"_hash");o(this,"_defines",new Map);o(this,"_definesDirty",!0)}get hash(){if(this._hash===void 0){const t=`${this.gammaCorrection}_${this.toneMapping}_${this.srgbRenderTarget}_${this.fog}_${this.ssaoEnabled}_${this.sceneDepthMapLinear}`;this._hash=$e(t)}return this._hash}get defines(){const t=this._defines;return this._definesDirty&&(this._definesDirty=!1,t.clear(),this._sceneDepthMapLinear&&t.set("SCENE_DEPTHMAP_LINEAR",""),this.shaderOutputGamma===ss&&t.set("SCENE_COLORMAP_GAMMA",""),t.set("FOG",this._fog.toUpperCase()),t.set("TONEMAP",dh[this._toneMapping]),t.set("GAMMA",tm[this.shaderOutputGamma])),t}markDirty(){this._hash=void 0,this._definesDirty=!0}set fog(t){this._fog!==t&&(this._fog=t,this.markDirty())}get fog(){return this._fog}set ssaoEnabled(t){this._ssaoEnabled!==t&&(this._ssaoEnabled=t,this.markDirty())}get ssaoEnabled(){return this._ssaoEnabled}set gammaCorrection(t){this._gammaCorrectionAssigned=!0,this._gammaCorrection!==t&&(this._gammaCorrection=t,this.markDirty())}get gammaCorrection(){return this._gammaCorrection}set toneMapping(t){this._toneMapping!==t&&(this._toneMapping=t,this.markDirty())}get toneMapping(){return this._toneMapping}set srgbRenderTarget(t){this._srgbRenderTarget!==t&&(this._srgbRenderTarget=t,this.markDirty())}get srgbRenderTarget(){return this._srgbRenderTarget}set sceneDepthMapLinear(t){this._sceneDepthMapLinear!==t&&(this._sceneDepthMapLinear=t,this.markDirty())}get sceneDepthMapLinear(){return this._sceneDepthMapLinear}get shaderOutputGamma(){return this._gammaCorrection===ss&&!this._srgbRenderTarget?ss:ao}}const gi=new _,qi=new _,Pl=new _,Il=new b,Xs=new b,bl=new Rc,xr=new b,Rl=new b,Ml=new b,e_=[new _,new _,new _,new _,new _,new _,new _,new _],Ge=class Ge{constructor(t){o(this,"shaderPassInfo",null);o(this,"renderPassColorGrab",null);o(this,"renderPassDepthGrab",null);o(this,"fogParams",null);o(this,"shaderParams",new Ch);o(this,"framePasses",[]);o(this,"beforePasses",[]);o(this,"jitter",0);o(this,"device");this.device=t,this._aspectRatio=16/9,this._aspectRatioMode=ul,this._calculateProjection=null,this._calculateTransform=null,this._clearColor=new U(.75,.75,.75,1),this._clearColorBuffer=!0,this._clearDepth=1,this._clearDepthBuffer=!0,this._clearStencil=0,this._clearStencilBuffer=!0,this._cullFaces=!0,this._farClip=1e3,this._flipFaces=!1,this._fov=45,this._frustumCulling=!0,this._horizontalFov=!1,this._layers=[Xa,Ft,eo,ih,to],this._layersSet=new Set(this._layers),this._nearClip=.1,this._node=null,this._orthoHeight=10,this._projection=Lt,this._rect=new se(0,0,1,1),this._renderTarget=null,this._scissorRect=new se(0,0,1,1),this._scissorRectClear=!1,this._aperture=16,this._shutter=1/1e3,this._sensitivity=1e3,this._projMat=new b,this._projMatDirty=!0,this._projMatSkybox=new b,this._viewMat=new b,this._viewMatDirty=!0,this._viewProjMat=new b,this._viewProjMatDirty=!0,this._shaderMatricesVersion=0,this._viewProjInverse=new b,this._viewProjCurrent=null,this._viewProjPrevious=new b,this._jitters=[0,0,0,0],this.frustum=new Rc,this._cullLayers=new Set,this._xrViews=null,this._xrProperties={horizontalFov:this._horizontalFov,fov:this._fov,aspectRatio:this._aspectRatio,farClip:this._farClip,nearClip:this._nearClip}}static applyShaderProjectionTransform(t,e,i,s){if(!i&&!s)return e.copy(t),e;if(i&&s){const a=Ge._applyShaderProjectionScratch;return a.mul2(Ge._flipYProjectionMatrix,t),e.mul2(Ge._webGpuDepthRangeMatrix,a),e}return i?(e.mul2(Ge._flipYProjectionMatrix,t),e):(e.mul2(Ge._webGpuDepthRangeMatrix,t),e)}destroy(){var t,e;(t=this.renderPassColorGrab)==null||t.destroy(),this.renderPassColorGrab=null,(e=this.renderPassDepthGrab)==null||e.destroy(),this.renderPassDepthGrab=null,this.framePasses.length=0,this.beforePasses.length=0}_storeShaderMatrices(t,e,i,s){this._shaderMatricesVersion!==s&&(this._shaderMatricesVersion=s,this._viewProjPrevious.copy(this._viewProjCurrent??t),this._viewProjCurrent??(this._viewProjCurrent=new b),this._viewProjCurrent.copy(t),this._viewProjInverse.invert(t),this._jitters[2]=this._jitters[0],this._jitters[3]=this._jitters[1],this._jitters[0]=e,this._jitters[1]=i)}get fullSizeClearRect(){const t=this._scissorRectClear?this.scissorRect:this._rect;return t.x===0&&t.y===0&&t.z===1&&t.w===1}set aspectRatio(t){this._aspectRatio!==t&&(this._aspectRatio=t,this._projMatDirty=!0)}get aspectRatio(){if(this.xrActive)return this._xrProperties.aspectRatio;if(this._aspectRatioMode===ul){const t=this.calculateAspectRatio();this._aspectRatio!==t&&(this._aspectRatio=t,this._projMatDirty=!0)}return this._aspectRatio}set aspectRatioMode(t){this._aspectRatioMode!==t&&(this._aspectRatioMode=t,this._projMatDirty=!0)}get aspectRatioMode(){return this._aspectRatioMode}set calculateProjection(t){this._calculateProjection=t,this._projMatDirty=!0}get calculateProjection(){return this._calculateProjection}set calculateTransform(t){this._calculateTransform=t}get calculateTransform(){return this._calculateTransform}set clearColor(t){this._clearColor.copy(t)}get clearColor(){return this._clearColor}set clearColorBuffer(t){this._clearColorBuffer=t}get clearColorBuffer(){return this._clearColorBuffer}set clearDepth(t){this._clearDepth=t}get clearDepth(){return this._clearDepth}set clearDepthBuffer(t){this._clearDepthBuffer=t}get clearDepthBuffer(){return this._clearDepthBuffer}set clearStencil(t){this._clearStencil=t}get clearStencil(){return this._clearStencil}set clearStencilBuffer(t){this._clearStencilBuffer=t}get clearStencilBuffer(){return this._clearStencilBuffer}set cullFaces(t){this._cullFaces=t}get cullFaces(){return this._cullFaces}set farClip(t){this._farClip!==t&&(this._farClip=t,this._projMatDirty=!0)}get farClip(){return this.xrActive?this._xrProperties.farClip:this._farClip}set flipFaces(t){this._flipFaces=t}get flipFaces(){return this._flipFaces}set fov(t){this._fov!==t&&(this._fov=t,this._projMatDirty=!0)}get fov(){return this.xrActive?this._xrProperties.fov:this._fov}set frustumCulling(t){this._frustumCulling=t}get frustumCulling(){return this._frustumCulling}set horizontalFov(t){this._horizontalFov!==t&&(this._horizontalFov=t,this._projMatDirty=!0)}get horizontalFov(){return this.xrActive?this._xrProperties.horizontalFov:this._horizontalFov}set layers(t){this._layers=t.slice(0),this._layersSet=new Set(this._layers)}get layers(){return this._layers}get layersSet(){return this._layersSet}set nearClip(t){this._nearClip!==t&&(this._nearClip=t,this._projMatDirty=!0)}get nearClip(){return this.xrActive?this._xrProperties.nearClip:this._nearClip}set node(t){this._node=t}get node(){return this._node}set orthoHeight(t){this._orthoHeight!==t&&(this._orthoHeight=t,this._projMatDirty=!0)}get orthoHeight(){return this._orthoHeight}set projection(t){this._projection!==t&&(this._projection=t,this._projMatDirty=!0)}get projection(){return this._projection}get projectionMatrix(){return this._evaluateProjectionMatrix(),this._projMat}set rect(t){this._rect.copy(t),this._projMatDirty=!0}get rect(){return this._rect}set renderTarget(t){this._renderTarget=t,this._projMatDirty=!0}get renderTarget(){return this._renderTarget}set scissorRect(t){this._scissorRect.copy(t)}get scissorRect(){return this._scissorRect}get viewMatrix(){if(this._viewMatDirty){const t=this._node.getWorldTransform();this._viewMat.copy(t).invert(),this._viewMatDirty=!1}return this._viewMat}set aperture(t){this._aperture=t}get aperture(){return this._aperture}set sensitivity(t){this._sensitivity=t}get sensitivity(){return this._sensitivity}set shutter(t){this._shutter=t}get shutter(){return this._shutter}set xrViews(t){t!==null!=(this._xrViews!==null)&&(this._projMatDirty=!0),this._xrViews=t}get xrViews(){return this._xrViews}get xrActive(){return this._xrViews!==null}addCullLayer(t){const e=this._cullLayers.size===0;return this._cullLayers.add(t),e}get cullLayers(){return this._cullLayers}clearCullLayers(){this._cullLayers.clear()}calculateAspectRatio(t){const e=t??this._renderTarget,i=e?e.width:this.device.width,s=e?e.height:this.device.height;return i*this._rect.z/(s*this._rect.w)}clone(){return new Ge(this.device).copy(this)}copy(t){return this._aspectRatio=t._aspectRatio,this._farClip=t._farClip,this._fov=t._fov,this._horizontalFov=t._horizontalFov,this._nearClip=t._nearClip,this._xrProperties.aspectRatio=t._xrProperties.aspectRatio,this._xrProperties.farClip=t._xrProperties.farClip,this._xrProperties.fov=t._xrProperties.fov,this._xrProperties.horizontalFov=t._xrProperties.horizontalFov,this._xrProperties.nearClip=t._xrProperties.nearClip,this.aspectRatioMode=t.aspectRatioMode,this.calculateProjection=t.calculateProjection,this.calculateTransform=t.calculateTransform,this.clearColor=t.clearColor,this.clearColorBuffer=t.clearColorBuffer,this.clearDepth=t.clearDepth,this.clearDepthBuffer=t.clearDepthBuffer,this.clearStencil=t.clearStencil,this.clearStencilBuffer=t.clearStencilBuffer,this.cullFaces=t.cullFaces,this.flipFaces=t.flipFaces,this.frustumCulling=t.frustumCulling,this.layers=t.layers,this.orthoHeight=t.orthoHeight,this.projection=t.projection,this.rect=t.rect,this.renderTarget=t.renderTarget,this.scissorRect=t.scissorRect,this.aperture=t.aperture,this.shutter=t.shutter,this.sensitivity=t.sensitivity,this.shaderPassInfo=t.shaderPassInfo,this.jitter=t.jitter,this._projMatDirty=!0,this}_enableRenderPassColorGrab(t,e){var i;e?this.renderPassColorGrab||(this.renderPassColorGrab=new Jm(t)):((i=this.renderPassColorGrab)==null||i.destroy(),this.renderPassColorGrab=null)}_enableRenderPassDepthGrab(t,e,i){var s;i?this.renderPassDepthGrab||(this.renderPassDepthGrab=new Qm(t,this)):((s=this.renderPassDepthGrab)==null||s.destroy(),this.renderPassDepthGrab=null)}_updateViewProjMat(){(this._projMatDirty||this._viewMatDirty||this._viewProjMatDirty)&&(this._viewProjMat.mul2(this.projectionMatrix,this.viewMatrix),this._viewProjMatDirty=!1)}updateViewTransforms(){var i,s;const t=this.xrViews;if(!t)return;const e=((s=(i=this._node)==null?void 0:i.parent)==null?void 0:s.getWorldTransform())??null;for(let a=0;a<t.length;a++)t[a].updateTransforms(e)}updateXrFrustum(){const t=this.xrViews;if(!(t!=null&&t.length))return!1;Xs.mul2(t[0].projMat,t[0].viewOffMat),this.frustum.setFromMat4(Xs);for(let e=1;e<t.length;e++)Xs.mul2(t[e].projMat,t[e].viewOffMat),bl.setFromMat4(Xs),this.frustum.add(bl);return!0}updateFrustum(){if(this.updateXrFrustum())return;const t=this.projectionMatrix;if(this.calculateProjection&&this.calculateProjection(t,wa),this.calculateTransform)this.calculateTransform(xr,wa);else{const e=this._node.getPosition(),i=this._node.getRotation();xr.setTRS(e,i,_.ONE)}Rl.copy(xr).invert(),Ml.mul2(t,Rl),this.frustum.setFromMat4(Ml)}worldToScreen(t,e,i,s=new _){this._updateViewProjMat(),this._viewProjMat.transformPoint(t,s);const a=this._viewProjMat.data,r=t.x*a[3]+t.y*a[7]+t.z*a[11]+1*a[15];s.x=(s.x/r+1)*.5,s.y=(1-s.y/r)*.5;const{x:n,y:l,z:d,w:f}=this._rect;return s.x=s.x*d*e+n*e,s.y=s.y*f*i+(1-l-f)*i,s}screenToWorld(t,e,i,s,a,r=new _){const{x:n,y:l,z:d,w:f}=this._rect,h=this.farClip-this.nearClip;if(gi.set((t-n*s)/(d*s),1-(e-(1-l-f)*a)/(f*a),i/h),gi.mulScalar(2),gi.sub(_.ONE),this._projection===Lt){b._getPerspectiveHalfSize(qi,this.fov,this.aspectRatio,this.nearClip,this.horizontalFov),qi.x*=gi.x,qi.y*=gi.y;const u=this._node.getWorldTransform();qi.z=-this.nearClip,u.transformPoint(qi,Pl);const p=this._node.getPosition();r.sub2(Pl,p),r.normalize(),r.mulScalar(i),r.add(p)}else this._updateViewProjMat(),Il.copy(this._viewProjMat).invert(),Il.transformPoint(gi,r);return r}_evaluateProjectionMatrix(){const t=this.aspectRatio;if(this._projMatDirty){if(this._projection===Lt)this._projMat.setPerspective(this.fov,t,this.nearClip,this.farClip,this.horizontalFov),this._projMatSkybox.copy(this._projMat);else{const e=this._orthoHeight,i=e*t;this._projMat.setOrtho(-i,i,-e,e,this.nearClip,this.farClip),this._projMatSkybox.setPerspective(this.fov,t,this.nearClip,this.farClip)}this._projMatDirty=!1}}getProjectionMatrixSkybox(){return this._evaluateProjectionMatrix(),this._projMatSkybox}getExposure(){const t=Math.log2(this._aperture*this._aperture/this._shutter*100/this._sensitivity);return 1/(Math.pow(2,t)*1.2)}getScreenSize(t){if(this._projection===Lt){const e=this._node.getPosition().distance(t.center);if(e<t.radius)return 1;const i=Math.asin(t.radius/e),s=Math.tan(i),a=Math.tan(this.fov/2*I.DEG_TO_RAD);return Math.min(s/a,1)}return I.clamp(t.radius/this._orthoHeight,0,1)}getFrustumCorners(t=this.nearClip,e=this.farClip){const i=this.fov*I.DEG_TO_RAD;let s,a;this.projection===Lt?this.horizontalFov?(s=t*Math.tan(i/2),a=s/this.aspectRatio):(a=t*Math.tan(i/2),s=a*this.aspectRatio):(a=this._orthoHeight,s=a*this.aspectRatio);const r=e_;return r[0].x=s,r[0].y=-a,r[0].z=-t,r[1].x=s,r[1].y=a,r[1].z=-t,r[2].x=-s,r[2].y=a,r[2].z=-t,r[3].x=-s,r[3].y=-a,r[3].z=-t,this._projection===Lt&&(this.horizontalFov?(s=e*Math.tan(i/2),a=s/this.aspectRatio):(a=e*Math.tan(i/2),s=a*this.aspectRatio)),r[4].x=s,r[4].y=-a,r[4].z=-e,r[5].x=s,r[5].y=a,r[5].z=-e,r[6].x=-s,r[6].y=a,r[6].z=-e,r[7].x=-s,r[7].y=-a,r[7].z=-e,r}setXrProperties(t){Object.assign(this._xrProperties,t),this._projMatDirty=!0}fillShaderParams(t){const e=this._farClip;return t[0]=1/e,t[1]=e,t[2]=this._nearClip,t[3]=this._projection===oh?1:0,t}};o(Ge,"_flipYProjectionMatrix",new b().setScale(1,-1,1)),o(Ge,"_webGpuDepthRangeMatrix",new b().set([1,0,0,0,0,1,0,0,0,0,.5,0,0,0,.5,1])),o(Ge,"_applyShaderProjectionScratch",new b);let Ds=Ge;const Nl=new b,Ol=new b,Fl=new b,It=class It{static create(t,e,i,s){const a=new Ds(t);switch(a.node=new ki(e),a.aspectRatio=1,a.aspectRatioMode=vm,a._scissorRectClear=!0,i){case Te:a.node.setRotation(It.pointLightRotations[s]),a.fov=90,a.projection=Lt;break;case fe:a.projection=Lt;break;case $:a.projection=oh;break}return a}static evalSpotCookieMatrix(t){let e=It._spotCookieCamera;e||(e=It.create(t.device,"SpotCookieCamera",fe),It._spotCookieCamera=e),e.fov=t._outerConeAngle*2;const i=e._node;i.setPosition(t._node.getPosition()),i.setRotation(t._node.getRotation()),i.rotateLocal(-90,0,0),Nl.setTRS(i.getPosition(),i.getRotation(),_.ONE).invert(),Ol.mul2(e.projectionMatrix,Nl);const s=t.cookieMatrix,a=t.atlasViewport;return Fl.setViewport(a.x,a.y,a.z,a.w),s.mul2(Fl,Ol),s}};o(It,"pointLightRotations",[new G().setFromEulerAngles(0,90,180),new G().setFromEulerAngles(0,-90,180),new G().setFromEulerAngles(90,0,0),new G().setFromEulerAngles(-90,0,0),new G().setFromEulerAngles(0,180,180),new G().setFromEulerAngles(0,0,180)]),o(It,"_spotCookieCamera",null);let Mi=It;const Me=new _,Wt=new Float32Array(6),t_=new _(-.5,0,0),i_=new _(0,0,.5),ie={POSITION_RANGE:0,DIRECTION_FLAGS:1,COLOR_ANGLES_BIAS:2,PROJ_MAT_0:3,ATLAS_VIEWPORT:3,PROJ_MAT_1:4,PROJ_MAT_2:5,PROJ_MAT_3:6,AREA_DATA_WIDTH:7,AREA_DATA_HEIGHT:8,COUNT:9},s_={LIGHTSHAPE_PUNCTUAL:`${Ut}u`,LIGHTSHAPE_RECT:`${sh}u`,LIGHTSHAPE_DISK:`${ah}u`,LIGHTSHAPE_SPHERE:`${rh}u`,LIGHT_COLOR_DIVIDER:`${Vp}.0`},Ul=(c,t)=>Object.keys(c).map(e=>`#define {${t}${e}} ${c[e]}`).join(`
`),Bl=`

		${Ul(ie,"CLUSTER_TEXTURE_")}
		${Ul(s_,"")}
`;class a_{constructor(t){o(this,"areaLightsEnabled",!1);this.device=t,ne.get(t,ae).set("lightBufferDefinesPS",Bl),ne.get(t,ue).set("lightBufferDefinesPS",Bl),this.cookiesEnabled=!1,this.shadowsEnabled=!1,this.areaLightsEnabled=!1,this.maxLights=255;const e=ie.COUNT;this.lightsFloat=new Float32Array(4*e*this.maxLights),this.lightsUint=new Uint32Array(this.lightsFloat.buffer),this.lightsTexture=this.createTexture(this.device,e,this.maxLights,at,"LightsTexture"),this._lightsTextureId=this.device.scope.resolve("lightsTexture"),this.invMaxColorValue=0,this.invMaxAttenuation=0,this.boundsMin=new _,this.boundsDelta=new _}destroy(){var t;(t=this.lightsTexture)==null||t.destroy(),this.lightsTexture=null}createTexture(t,e,i,s,a){return new ce(t,{name:a,width:e,height:i,mipmaps:!1,format:s,addressU:q,addressV:q,type:ii,magFilter:ve,minFilter:ve,anisotropy:1})}setBounds(t,e){this.boundsMin.copy(t),this.boundsDelta.copy(e)}uploadTextures(){this.lightsTexture.lock().set(this.lightsFloat),this.lightsTexture.unlock()}updateUniforms(){this._lightsTextureId.setValue(this.lightsTexture)}getSpotDirection(t,e){e._node.getWorldTransform().getY(t).mulScalar(-1),t.normalize()}getLightAreaSizes(t){const e=t._node.getWorldTransform();return e.transformVector(t_,Me),Wt[0]=Me.x,Wt[1]=Me.y,Wt[2]=Me.z,e.transformVector(i_,Me),Wt[3]=Me.x,Wt[4]=Me.y,Wt[5]=Me.z,Wt}addLightData(t,e){const i=t._type===fe,s=t.atlasViewportAllocated,a=this.cookiesEnabled&&!!t._cookie&&s,r=this.areaLightsEnabled&&t.shape!==Ut,n=this.shadowsEnabled&&t.castShadows&&s,l=t._node.getPosition();let d=null,f=null;i?n?d=t.getRenderData(null,0).shadowMatrix:a&&(d=Mi.evalSpotCookieMatrix(t)):(n||a)&&(f=t.atlasViewport);const h=this.lightsFloat,u=this.lightsUint,p=e*this.lightsTexture.width*4;h[p+4*ie.POSITION_RANGE+0]=l.x,h[p+4*ie.POSITION_RANGE+1]=l.y,h[p+4*ie.POSITION_RANGE+2]=l.z,h[p+4*ie.POSITION_RANGE+3]=t.attenuationEnd;const m=t.clusteredData;if(u[p+4*ie.COLOR_ANGLES_BIAS+0]=m[0],u[p+4*ie.COLOR_ANGLES_BIAS+1]=m[1],u[p+4*ie.COLOR_ANGLES_BIAS+2]=m[2],t.castShadows){const g=t.getRenderData(null,0),v=t._getUniformBiasValues(g),E=tn.float2Half(v.bias),S=tn.float2Half(v.normalBias);u[p+4*ie.COLOR_ANGLES_BIAS+3]=E|S<<16}if(i&&(this.getSpotDirection(Me,t),h[p+4*ie.DIRECTION_FLAGS+0]=Me.x,h[p+4*ie.DIRECTION_FLAGS+1]=Me.y,h[p+4*ie.DIRECTION_FLAGS+2]=Me.z),u[p+4*ie.DIRECTION_FLAGS+3]=t.getClusteredFlags(n,a),d){const g=d.data;for(let v=0;v<16;v++)h[p+4*ie.PROJ_MAT_0+v]=g[v]}if(f&&(h[p+4*ie.ATLAS_VIEWPORT+0]=f.x,h[p+4*ie.ATLAS_VIEWPORT+1]=f.y,h[p+4*ie.ATLAS_VIEWPORT+2]=f.z/3),r){const g=this.getLightAreaSizes(t);h[p+4*ie.AREA_DATA_WIDTH+0]=g[0],h[p+4*ie.AREA_DATA_WIDTH+1]=g[1],h[p+4*ie.AREA_DATA_WIDTH+2]=g[2],h[p+4*ie.AREA_DATA_HEIGHT+0]=g[3],h[p+4*ie.AREA_DATA_HEIGHT+1]=g[4],h[p+4*ie.AREA_DATA_HEIGHT+2]=g[5]}}}const r_=new k,Ys=new _,$s=new _,qs=new _,Cr=new Ce;class kl{constructor(){this.light=null,this.min=new _,this.max=new _}}class zl{constructor(t){o(this,"clusterTexture");this.device=t,this.name="Untitled",this.reportCount=0,this.boundsMin=new _,this.boundsMax=new _,this.boundsDelta=new _,this._cells=new _(1,1,1),this._cellsLimit=new _,this.cells=this._cells,this.maxCellLightCount=4,this._usedLights=[],this._usedLights.push(new kl),this.lightsBuffer=new a_(t),this.registerUniforms(t)}set maxCellLightCount(t){t!==this._maxCellLightCount&&(this._maxCellLightCount=t,this._cellsDirty=!0)}get maxCellLightCount(){return this._maxCellLightCount}set cells(t){Ys.copy(t).floor(),this._cells.equals(Ys)||(this._cells.copy(Ys),this._cellsLimit.copy(Ys).sub(_.ONE),this._cellsDirty=!0)}get cells(){return this._cells}destroy(){this.lightsBuffer.destroy(),this.releaseClusterTexture()}releaseClusterTexture(){this.clusterTexture&&(this.clusterTexture.destroy(),this.clusterTexture=null)}registerUniforms(t){this._numClusteredLightsId=t.scope.resolve("numClusteredLights"),this._clusterMaxCellsId=t.scope.resolve("clusterMaxCells"),this._clusterWorldTextureId=t.scope.resolve("clusterWorldTexture"),this._clusterBoundsMinId=t.scope.resolve("clusterBoundsMin"),this._clusterBoundsMinData=new Float32Array(3),this._clusterBoundsDeltaId=t.scope.resolve("clusterBoundsDelta"),this._clusterBoundsDeltaData=new Float32Array(3),this._clusterCellsCountByBoundsSizeId=t.scope.resolve("clusterCellsCountByBoundsSize"),this._clusterCellsCountByBoundsSizeData=new Float32Array(3),this._clusterCellsDotId=t.scope.resolve("clusterCellsDot"),this._clusterCellsDotData=new Int32Array(3),this._clusterCellsMaxId=t.scope.resolve("clusterCellsMax"),this._clusterCellsMaxData=new Int32Array(3),this._clusterTextureWidthId=t.scope.resolve("clusterTextureWidth")}updateParams(t){t&&(this.cells=t.cells,this.maxCellLightCount=t.maxLightsPerCell,this.lightsBuffer.cookiesEnabled=t.cookiesEnabled,this.lightsBuffer.shadowsEnabled=t.shadowsEnabled,this.lightsBuffer.areaLightsEnabled=t.areaLightsEnabled)}updateCells(){if(this._cellsDirty){this._cellsDirty=!1;const t=this._cells.x,e=this._cells.y,i=this._cells.z,s=t*e*i,a=this.maxCellLightCount*s,{x:r,y:n}=Ot.calcTextureSize(a,r_,this.maxCellLightCount);this._clusterCellsMaxData[0]=t,this._clusterCellsMaxData[1]=e,this._clusterCellsMaxData[2]=i,this._clusterCellsDotData[0]=this.maxCellLightCount,this._clusterCellsDotData[1]=t*i*this.maxCellLightCount,this._clusterCellsDotData[2]=t*this.maxCellLightCount,this.clusters=new Uint8ClampedArray(a),this.counts=new Int32Array(s),this.releaseClusterTexture(),this.clusterTexture=this.lightsBuffer.createTexture(this.device,r,n,Wc,"ClusterTexture")}}uploadTextures(){this.clusterTexture.lock().set(this.clusters),this.clusterTexture.unlock(),this.lightsBuffer.uploadTextures()}updateUniforms(){this._numClusteredLightsId.setValue(this._usedLights.length),this.lightsBuffer.updateUniforms(),this._clusterWorldTextureId.setValue(this.clusterTexture),this._clusterMaxCellsId.setValue(this.maxCellLightCount);const t=this.boundsDelta;this._clusterCellsCountByBoundsSizeData[0]=this._cells.x/t.x,this._clusterCellsCountByBoundsSizeData[1]=this._cells.y/t.y,this._clusterCellsCountByBoundsSizeData[2]=this._cells.z/t.z,this._clusterCellsCountByBoundsSizeId.setValue(this._clusterCellsCountByBoundsSizeData),this._clusterBoundsMinData[0]=this.boundsMin.x,this._clusterBoundsMinData[1]=this.boundsMin.y,this._clusterBoundsMinData[2]=this.boundsMin.z,this._clusterBoundsDeltaData[0]=t.x,this._clusterBoundsDeltaData[1]=t.y,this._clusterBoundsDeltaData[2]=t.z,this._clusterBoundsMinId.setValue(this._clusterBoundsMinData),this._clusterBoundsDeltaId.setValue(this._clusterBoundsDeltaData),this._clusterCellsDotId.setValue(this._clusterCellsDotData),this._clusterCellsMaxId.setValue(this._clusterCellsMaxData),this._clusterTextureWidthId.setValue(this.clusterTexture.width)}evalLightCellMinMax(t,e,i){e.copy(t.min),e.sub(this.boundsMin),e.div(this.boundsDelta),e.mul2(e,this.cells),e.floor(),i.copy(t.max),i.sub(this.boundsMin),i.div(this.boundsDelta),i.mul2(i,this.cells),i.ceil(),e.max(_.ZERO),i.min(this._cellsLimit)}collectLights(t){const e=this.lightsBuffer.maxLights,i=this._usedLights;let s=1;t.forEach(a=>{const r=!!(a.mask&(li|_h)),n=a.type===fe&&a._outerConeAngle===0;if(a.enabled&&a.type!==$&&a.visibleThisFrame&&a.intensity>0&&r&&!n&&s<e){let l;s<i.length?l=i[s]:(l=new kl,i.push(l)),l.light=a,a.getBoundingBox(Cr),l.min.copy(Cr.getMin()),l.max.copy(Cr.getMax()),s++}}),i.length=s}evaluateBounds(){const t=this._usedLights,e=this.boundsMin,i=this.boundsMax;if(t.length>1){e.copy(t[1].min),i.copy(t[1].max);for(let s=2;s<t.length;s++)e.min(t[s].min),i.max(t[s].max)}else e.set(0,0,0),i.set(1,1,1);this.boundsDelta.sub2(i,e),this.lightsBuffer.setBounds(e,this.boundsDelta)}updateClusters(t){this.counts.fill(0),this.clusters.fill(0),this.lightsBuffer.areaLightsEnabled=t?t.areaLightsEnabled:!1;const e=this._cells.x,i=this._cells.z,s=this.counts,a=this._maxCellLightCount,r=this.clusters,n=this.maxCellLightCount,l=this._usedLights;for(let d=1;d<l.length;d++){const f=l[d],h=f.light;this.lightsBuffer.addLightData(h,d),this.evalLightCellMinMax(f,$s,qs);const u=$s.x,p=qs.x,m=$s.y,g=qs.y,v=$s.z,E=qs.z;for(let S=u;S<=p;S++)for(let T=v;T<=E;T++)for(let y=m;y<=g;y++){const C=S+e*(T+y*i),x=s[C];x<a&&(r[n*C+x]=d,s[C]=x+1)}}}update(t,e=null){this.updateParams(e),this.updateCells(),this.collectLights(t),this.evaluateBounds(),this.updateClusters(e),this.uploadTextures()}activate(){this.updateUniforms()}}const n_="muPIHORMLNDCz4DxVR/ZvYfAUVEFR47KRIC4nwAAAAAP7WxlhD6Ci+2HCe7BF8jRAPZwdH2UPpI5PdLCJdkvG4UTaNDJ/0crAzne71GCrb4kbdMjjCEGzdX6fNxDMLJq5xkeoIVTdfiZkodEeArmZmp/FQzFjD4x8iOW7Dg64n+3mWqyEwLxXT8zoJXfbw8QJKDCaarUYyTlMzNFHbgUe9IQV7g4YOgtSKpIFZJ0qERm7u4PpmiF89ktHWCywaGmD6h+hfh2/Zd8KYlKqqo4Cem4T42bT/Z9FpCQF1hhSjfBzZ5XFn/y3jegWC6u86KuELRundQS/1Rp+XuKKGIgRv3CvP5y749yqLlFO495JOT3+f2CXgd71npU0/KjjpkZucbJ5m78IVyuSrSozc9jgBUhDrz0hFsyb7LFUH9//wJbBgLdNWJZObfKxrNt8TliLA9w9sXFv6g26iXpf6r/BqcAusj/QzGBZuoUGeEtw8BCXCZ3jUiw4hvM18ZVqlUD3C40LAFXW6FRjuAZGRNstb0/qVk4skwyT+MHrvRorI4rKHVMWZmKyAkzL/78u/9pMQuX14pZN50b2PHn6fRxeaCQLsfT4dpvIkWWFuFVENZIh+8xgR6lU+85W0PPdAu1j99kcCG40JBQa4JMyRzq6qriOBLtqF87vpCJan0WEduVr/mOYkS00urVA0mA6M3031+GmGmW48PaJDYOEIb3bIXWPaLoAOEinX1TN3+/vwhG6nqJu0TdHpedS7QsGZIoxH3nQYYjQP1jmbahlbNngw5ogsGk1y50XZyUmQBY+/JBJ3Unu4dApm+WmPwHPU9gLb+4mHh4BiY6M86pq+WeTyWdI3s0CXPEtHGXZ8zMZgUoyRomBi1VdazzuN+WOmQ9Pa0Z0tlNopUi8AJ4x2Xn4mmOKEbXLxlbVsWu8XhuDGYFOGCRVdSqDPXrHU5SDdUlti3k5///SBwzTMwK3L4a1H7w4lnpEas6////AfX8asyIBfeFXVJ3tgvxQ/blZuUKyIODIfr/UzdWNu7pciLBpdZRZ4pIfZ1R6szq+XNxkGG///8EZFpu7VHAhFWqHEOrB9unw+YQa5o8/9IR/V5/zq+986rJSyfgJKt2u9hxU1wzyQWPjJGvzG9+eWWxGFOHVKqI4jBQALwZZswesnvZ2UmmkEXdiRpz8B+oWE7PY70ZTMndisYSXg2TqoI+3y9BxbnY2Y4EfbdcRhAvG59NqDENNYbxKvK5HJfPG5M+Wi2AcpLVJrD6caiEOzgSoVNSgQK8fm2M3zGcF4xtClv/8Hs9oD7C3jitTATYNQxmKqKf1LhIxzf1bmfiNn7UKFmcJu4sLqVLwxGSue3taBEyknkw5hXTsUCvqmmL/f8n/w0giR7Hu/9EHvpkz3yuu64TioMkzdTJ30i0+hFnQqW1+v9mMwq+z9qGX0UFu9MomvVG2xod6vc12AAAAACq7sGa5qptFR0jF3nQt/D+7PibKYahaxP3hEixPbGi9nwNf2LAa7LkEZRKxzXeCD64Xpii5n+8Kpg8eHIv7AWXZltgMoGltmoJ0XGdOCL8WkzphvR9N2o3ARSZ42l5e5Pe4B58MCRlP3EKv+mcloknH+fto5BWsmEutW6KvjOVsznFCktkSczVk4aGvj9VXlRcLeDoKG8RkBgdcNG2bf8HUL4MT2DM+ar7NImJhKpxakX4Vk0CnP+/XNhl5UsP0lXgeZXPoDBMSW5An+DXlTCO5FQGwSPYwHLKYVIimEdAoVe49rQLaaNcye5LxU2/c5TijTgJtD5eQQIe1snxauj5jZsxJBUJdoP/zqpjqv8qBruoPsVsP8N44PCUW5Dd0DzqjSS/Dl5mI9cn1w2ndN/0KAEm1QAAAACwu6KM/083IBbH5bPa/9oHUwcU8I9v3j6/v18QYammrf+P6VL///8BrpuM3fOLCxaLNOFNF1zPbPYTP65ni6njft4eVcyrVXRQFrs52tr35StiSp55edVDCBC0H5rIfac6nzUwxQSt7y15QoKb+5zebEQUmVbrPjXuUa19Ey7sqXMiSUKHaw72PJKDdrutJoQr3u6lEYJ8K0MakWKj9zjTFi4X94TsKYco0GrLeB60M6D8M/80rhXUW8iMequg8y5F838WI0+gp3GBN5Kj/xIOxTWQuUaPV/LwvARr1VH93BFgGZR1MFW0Ua30GbYmdnAgo9VWy8SQtpDUgGE2r2zq2eTEMCL7sMKmE1hchVhuF/TCq9iXKEm86kzOf3Rp9ZnCxbpDUj+FKNxVyXe6pVZkRXv/m95SnB/EB8aME29N85MtAcDoXWlor8De2Q5Dg1tar+8wgiZufbMam81j//ASUohoR/zSh2KG4bvT6mkIPz6C5/98DC3LaWlaEZ1zA5JORZRu6J/a0GY285sEYzw71YqOT1ihAG0z5SDt1xNiDQWZdFpndArp6xWhqSDkRb4kSJEHb9liPvw7uLV/6i5MVf//A9Qjr8xkAEUh+KDI+zdtJ68d6MBOktg1iyp/SCq8O9f5pbamn1VVVQPRTWqNBvhQKa07s6P0lc9Luu/3gw4HeyOUfz8MxMwV4UQhua+t9cr4bz/nIB2wnDSK1K7I94M+s6C84htaX/CNlMQUSs2KJO+yaebfTbkNX5yWcqEJevo0vbKUiETuFXiL019A3E+lmsyZMwXrXLLiQAZ5t9+jI3JobhJTMiDH5ZOQ+8Jau5555NMjHSscP9qCVaa40doh+1a3Ukf6jqBmLddgh79/fwTfCyqiuldNkUoy+nUp+4nerwg0OjtGv2x485PJOJvUEokNhYIdWjpx7BWk0VZGWOp3jSFTJ2bnu6KCduZtG/UcBC9RZ3W/jMSfSMw4Etr/DoD/XYP2V5Ovw+YoM3F5g2dGLdvuG6ZkVGLE6Dk5Zr+sdSyGliJP1y2OFf/KFO0RWO+3gsGhesTnfZVpTd8/HwgO216gwaqo+vY3TljfJWowY+i0p0Os4SLn/1wLqDHMlszggmT/D8MRFzs+pLv6LNJSsNZ/r41mWi/rF6ZcKp/yzJdK0VU44hskq3RGpgO6mIpJDsf/mZkFrz0yYOMLbuaj/wp1v7JMFM5eqvBhmTd7U8frQAtHtys4zgpjZmzUhOVTfNNLifElGXADlqHGKrkBT/nYwX8ZRm3RjvyPvjKyEqEGKUpVnvOGx+NKPHiWM//ZDpDVGvvrjmk8RPF/wiYZD3+Us8YCXjrVOfjdd1UPAfjLp8jgSn4me7DPTpz1Ggy9XL80guFO7ECT10AvILKfD18Qx+KY/f8aRqu0oOO8hfKRFZa9PUJwCsp6VdZz6LFkm2b9Pl2LIifCwzRy7TpdG2uAtOxP2OemY26bJMa9ZGSLIRlMsgpDpnDJwd0oa5pQ13x1hrHf52HpulUWonGWsfXZbSQYKu9bnEN76ciQih0opN3deDVrbrxorfVlnCmL1R9zq3ePGWIv21c7pW8kEiFTM5JX8dAw867s/60cf79/BH+MDFCZBHlz1L+qGOJf/1txhhmrf3//As+RIJwevDb+fgNXVeHw67QptZegayhrEwr5Gy+EPo1RLaMtPbqOZYoVzXzwzjMFWZxyUG9YUIf6////AQWy84iAygLk9COtXt92+0mT/xg0zMzMBeLkb8y9SL2TDXgSX422hDgpGNLJyuPioA+YJ91G8znrpNqHkwYyscaJDEc9Vc+j4cXle3hvcd2JqDQH2lBZxDn6mUTs0b75raMvbs727codX01Anj8f3wir9P2xQaQ22v/TxCMglKDFoTjaP01XTLgxnTvPv02JgEUrW6UDgOnobFpLdvKdlypgIzPcq14fgXU5tvVW0FEs7VRlsG1IyA69fN4n+awHhT34cE+xUvdj86C8LgAsFheTjI9Ht9EyYAAAAAAVBVKRx2wLgUTI0/2QfyJo2riRw3JDqzEShmx/Lifo6mRkQVbS7X53t+EvKxcXogtdts31e9MRHdcHgsA8rt4/mt2unlzQ/wsU8Gu7+W6Oj7eD8EQdDp5XlCsVaS/AV/t5ZpPOHR3rGpyAJe9IPV+xMrBL1Oz/8MQhFs31h0N1cVnq371uqIJYHyafKH1jteAK3VpMXBcuC+yt0ZeKyRUY4QhdrJJ4tJ1wg3Hu6kDsbovxupTMkGdRrm8oZSoYPbJ+PwH/xotgTdkA1205vUEfnqkI04T/fnnd1fiZW5AwNcggd7fi4j5zasmcntZexIxqFZQMzMJpfndmI5jn17cgn5EV5t9XN0C///8Q9wlJpMGXdoiaMTG2sVyHQsn8mWRISCLNG777S0OuDRP2GlLcJ2UeOg7Fo8hTNPeJ//iTJhyqxhKRUntdXOihq2wfKfH///8B0GGrwT+fSOQRdctKxjjGCSS11d6BlQ9BDfE0J6Z25FaNTKGpFKNCMr2G/041KpWwBLVe1k08vncseQbKZdXi8x1t9XA45U/Wd43D9wAh3Tal0aiLVzGPusOZ1F+W3TWoqlX/A95+dNef11TsuGful+ctGssldk3fqpfqh+43XTxL42+leSHoF/dWHYGX6maqUEuLX7UB+r/6Llr4LKocbVIeu+hB9QTPfz9fCP8RyWmX4SmbhMFsNtCijV7lVcwejLKlvl0GfCndnWV7/39VBrtTRuUx92oke3GBgKkC5fdGK0YvNK+xenKaDmsHDjNFUM3NMz3ZiXXFuLgojosPVCDEl2W5BjX3Ms+j0GSqACHmh0+RPWyuNm/Qe8vFf9AW7N1uRaxWirrUytqEJnJ4/Flm8hSoiZ2NQBsS6w/yQlC4gCaFo8q4nyY6AFdo4hiwhBXzbNKKvZvktCjSCukRR/BbYVbNwZi2Yh3hGodEacLW8qijiWJODf0P2bhfaiPspPT4lYJBgi/KfcFwCfvyUIgkJOv///8CG/JEepRBLaMFE+2TgrqsJXOVOWHt6g/bFwVLLMVBsMR50dis/39/AlBX+/rMTJkUQrnlxpR2iu0Tp8tATkRYGmDIrcAiRP8PjoWIlb7/0ecTdSCE9Y58+a+n/FovJQTVF4F2jAxMZhTgrM/KVS5BQu6bVbkWY5HXnxRshks3urDdW4RkWp4M4TeLmFK5KF/uHkkiO5Kv96RioH984v/CSDBnG+BwlnU9B+o7Y+0X0Nob+0pLsStxjvPXMy2eCpzhOWV4XbObBHN4UE2sLQ/DIqXhOzxVf38GlTi6aG7EnePO7TRJm9yOfUUcqq1I2iQHrVDqn3TUNRi/lMw8KbMW/3/nqCz/Ef8PoW5Qxcz2yHR/f78EPB2Stbd+ZFmfNTUYILzsb9YNhpaHcaymYrBiNHmFE3Y4ccYJ25Prqm7zHobGHED8/93ZNlWro9vcKivGZs31UiK1k5zjUhexUgbqJb+fUTjxce/7Zly8a5KMC1fX5nfjPgibdvzbXV1jRT2asXvmSAusaLdq1TSIJ8fXINk5AtT34EWPAsfP9IFQqM5K11O6saoHJA==";let pt=null;const Ah=()=>{if(!pt){const c=atob(n_);pt=Uint8Array.from(c,t=>t.charCodeAt(0))}},o_=()=>(Ah(),pt);class l_{constructor(t=0){o(this,"seed",0);this.seed=t*4,Ah()}_next(){this.seed=(this.seed+4)%pt.length}value(){return this._next(),pt[this.seed]/255}vec4(t=new se){return this._next(),t.set(pt[this.seed],pt[this.seed+1],pt[this.seed+2],pt[this.seed+3]).mulScalar(1/255)}}const c_=[new _(-1,0,0),new _(1,0,0),new _(0,-1,0),new _(0,1,0),new _(0,0,-1),new _(0,0,1)];class d_{constructor(){o(this,"colors",new Float32Array(18))}update(t,e){const i=this.colors,{r:s,g:a,b:r}=t;for(let n=0;n<6;n++)i[n*3]=s,i[n*3+1]=a,i[n*3+2]=r;for(let n=0;n<e.length;n++){const l=e[n];if(l._type===$)for(let d=0;d<6;d++){const f=Math.max(c_[d].dot(l._direction),0)*l._intensity,h=l._color;i[d*3]+=h.r*f,i[d*3+1]+=h.g*f,i[d*3+2]+=h.b*f}}}}const h_=(c,t,e,i)=>{const s=new ce(c,{name:`${t}${e}`,width:e,height:e,format:je,addressU:ds,addressV:ds,type:ii,magFilter:ve,minFilter:ve,anisotropy:1,mipmaps:!1});return s.lock().set(i),s.unlock(),s},f_=new nt,u_=c=>f_.get(c,()=>{const t=o_(),e=Math.sqrt(t.length/4);return h_(c,"BlueNoise",e,t)});class di{constructor(t,e){this.texture=t,this.cached=!1,this.renderTargets=e}destroy(){this.texture&&(this.texture.destroy(),this.texture=null);const t=this.renderTargets;for(let e=0;e<t.length;e++)t[e].destroy();this.renderTargets.length=0}static create(t,e){let i=null;return e._type===Te?i=this.createCubemap(t,e._shadowResolution,e._shadowType):i=this.create2dMap(t,e._shadowResolution,e._shadowType),i}static createAtlas(t,e,i){const s=this.create2dMap(t,e,i),a=s.renderTargets,r=a[0];for(let n=0;n<5;n++)a.push(r);return s}static create2dMap(t,e,i){var f;const s=si.get(i);let a=s.format;a===Ni&&!t.textureFloatRenderable&&t.textureHalfFloatRenderable&&(a=On);const r=(f=Re.get(a))==null?void 0:f.name;let n=Ae;i===nh&&(n=t.extTextureFloatLinear?Ae:ve),i===_n&&(n=ve);const l=new ce(t,{format:a,width:e,height:e,mipmaps:!1,minFilter:n,magFilter:n,addressU:q,addressV:q,name:`ShadowMap2D_${r}`});let d=null;return s!=null&&s.pcf?(l.compareOnRead=!0,l.compareFunc=an,d=new _t({depthBuffer:l})):d=new _t({colorBuffer:l,depth:!0}),t.isWebGPU&&(d.flipY=!0),new di(l,[d])}static createCubemap(t,e,i){var f;const s=si.get(i),a=(f=Re.get(s.format))==null?void 0:f.name,r=i===_n,n=r?ve:Ae,l=new ce(t,{format:s==null?void 0:s.format,width:e,height:e,cubemap:!0,mipmaps:!1,minFilter:n,magFilter:n,addressU:q,addressV:q,name:`ShadowMapCube_${a}`});r||(l.compareOnRead=!0,l.compareFunc=an);const d=[];for(let h=0;h<6;h++)r?d.push(new _t({colorBuffer:l,face:h,depth:!0})):d.push(new _t({depthBuffer:l,face:h}));return new di(l,d)}}const p_=[],m_=[],ot=new se,Ar=new se;class wr{constructor(t){this.size=Math.floor(t.w*1024),this.used=!1,this.lightId=-1,this.rect=t}}class __{constructor(t){this.device=t,this.version=1,this.shadowAtlasResolution=2048,this.shadowAtlas=null,this.shadowEdgePixels=3,this.cookieAtlasResolution=4,this.cookieAtlas=ce.createDataTexture2D(this.device,"CookieAtlas",this.cookieAtlasResolution,this.cookieAtlasResolution,on),this.cookieRenderTarget=new _t({colorBuffer:this.cookieAtlas,depth:!1,flipY:!0}),this.slots=[],this.atlasSplit=[],this.cubeSlotsOffsets=[new k(0,0),new k(0,1),new k(1,0),new k(1,1),new k(2,0),new k(2,1)],this.scissorVec=new se,this.allocateShadowAtlas(1),this.allocateCookieAtlas(1),this.allocateUniforms()}destroy(){this.destroyShadowAtlas(),this.destroyCookieAtlas()}destroyShadowAtlas(){var t;(t=this.shadowAtlas)==null||t.destroy(),this.shadowAtlas=null}destroyCookieAtlas(){var t,e;(t=this.cookieAtlas)==null||t.destroy(),this.cookieAtlas=null,(e=this.cookieRenderTarget)==null||e.destroy(),this.cookieRenderTarget=null}allocateShadowAtlas(t,e=io){var a;const i=(a=this.shadowAtlas)==null?void 0:a.texture.format,s=si.get(e).format;if(!this.shadowAtlas||this.shadowAtlas.texture.width!==t||i!==s){this.version++,this.destroyShadowAtlas(),this.shadowAtlas=di.createAtlas(this.device,t,e),this.shadowAtlas.cached=!0;const r=4/this.shadowAtlasResolution;this.scissorVec.set(r,r,-2*r,-2*r)}}allocateCookieAtlas(t){this.cookieAtlas.width!==t&&(this.cookieRenderTarget.resize(t,t),this.version++)}allocateUniforms(){this._shadowAtlasTextureId=this.device.scope.resolve("shadowAtlasTexture"),this._shadowAtlasParamsId=this.device.scope.resolve("shadowAtlasParams"),this._shadowAtlasParams=new Float32Array(2),this._cookieAtlasTextureId=this.device.scope.resolve("cookieAtlasTexture")}updateUniforms(){const e=this.shadowAtlas.renderTargets[0].depthBuffer;this._shadowAtlasTextureId.setValue(e),this._shadowAtlasParams[0]=this.shadowAtlasResolution,this._shadowAtlasParams[1]=this.shadowEdgePixels,this._shadowAtlasParamsId.setValue(this._shadowAtlasParams),this._cookieAtlasTextureId.setValue(this.cookieAtlas)}subdivide(t,e){let i=e.atlasSplit;if(!i){const a=Math.ceil(Math.sqrt(t));i=m_,i[0]=a,i.length=1}if(!((a,r)=>a.length===r.length&&a.every((n,l)=>n===r[l]))(i,this.atlasSplit)){this.version++,this.slots.length=0,this.atlasSplit.length=0,this.atlasSplit.push(...i);const a=this.atlasSplit[0];if(a>1){const r=1/a;for(let n=0;n<a;n++)for(let l=0;l<a;l++){const d=new se(n*r,l*r,r,r),f=this.atlasSplit[1+n*a+l];if(f>1)for(let h=0;h<f;h++)for(let u=0;u<f;u++){const p=r/f,m=new se(d.x+h*p,d.y+u*p,p,p);this.slots.push(new wr(m))}else this.slots.push(new wr(d))}}else this.slots.push(new wr(new se(0,0,1,1)));this.slots.sort((r,n)=>n.size-r.size)}}collectLights(t,e){const i=e.cookiesEnabled,s=e.shadowsEnabled;let a=!1,r=!1;const n=p_;return n.length=0,(i||s)&&(d=>{for(let f=0;f<d.length;f++){const h=d[f];if(h.visibleThisFrame){const u=s&&h.castShadows,p=i&&!!h.cookie;a||(a=u),r||(r=p),(u||p)&&n.push(h)}}})(t),n.sort((d,f)=>f.maxScreenSize-d.maxScreenSize),a&&this.allocateShadowAtlas(this.shadowAtlasResolution,e.shadowType),r&&this.allocateCookieAtlas(this.cookieAtlasResolution),(a||r)&&this.subdivide(n.length,e),n}setupSlot(t,e){t.atlasViewport.copy(e);const i=t.numShadowFaces;for(let s=0;s<i;s++)if(t.castShadows||t._cookie){if(ot.copy(e),Ar.copy(e),t._type===fe&&ot.add(this.scissorVec),t._type===Te){const a=ot.z/3,r=this.cubeSlotsOffsets[s];ot.x+=a*r.x,ot.y+=a*r.y,ot.z=a,ot.w=a,Ar.copy(ot)}if(t.castShadows){const a=t.getRenderData(null,s);a.shadowViewport.copy(ot),a.shadowScissor.copy(Ar)}}}assignSlot(t,e,i){t.atlasViewportAllocated=!0;const s=this.slots[e];s.lightId=t.id,s.used=!0,i&&(t.atlasSlotUpdated=!0,t.atlasVersion=this.version,t.atlasSlotIndex=e)}update(t,e){this.shadowAtlasResolution=e.shadowAtlasResolution,this.cookieAtlasResolution=e.cookieAtlasResolution;const i=this.collectLights(t,e);if(i.length>0){const s=this.slots;for(let n=0;n<s.length;n++)s[n].used=!1;const a=Math.min(i.length,s.length);for(let n=0;n<a;n++){const l=i[n];l.castShadows&&(l._shadowMap=this.shadowAtlas);const d=s[l.atlasSlotIndex];if(l.atlasVersion===this.version&&l.id===(d==null?void 0:d.lightId)){const f=s[l.atlasSlotIndex];f.size===s[n].size&&!f.used&&this.assignSlot(l,l.atlasSlotIndex,!1)}}let r=0;for(let n=0;n<a;n++){for(;r<s.length&&s[r].used;)r++;const l=i[n];l.atlasViewportAllocated||this.assignSlot(l,r,!0);const d=s[l.atlasSlotIndex];this.setupSlot(l,d.rect)}}this.updateUniforms()}}const we=[];we[qd]={src:Se,dst:Se,op:uf};we[oi]={src:Se,dst:Pn,op:qe};we[St]={src:In,dst:bn,op:qe,alphaSrc:Se};we[Kd]={src:Se,dst:bn,op:qe};we[jd]={src:Se,dst:Se,op:qe};we[Jn]={src:In,dst:Se,op:qe};we[Jd]={src:Mc,dst:hf,op:qe};we[Qd]={src:ff,dst:Se,op:qe};we[Zd]={src:Mc,dst:Pn,op:qe};we[eh]={src:Se,dst:Se,op:pf};we[th]={src:Se,dst:Se,op:mf};let g_=0;class zi{constructor(){o(this,"meshInstances",new Set);o(this,"name","Untitled");o(this,"userId","");o(this,"id",g_++);o(this,"variants",new Map);o(this,"defines",new Map);o(this,"_definesDirty",!1);o(this,"_definesKey",null);o(this,"parameters",{});o(this,"alphaTest",0);o(this,"alphaToCoverage",!1);o(this,"_blendState",new vt);o(this,"_depthState",new pn);o(this,"cull",Sf);o(this,"frontFace",sn);o(this,"stencilFront",null);o(this,"stencilBack",null);o(this,"_shaderChunks",null);o(this,"_oldChunks",{});o(this,"_dirtyShader",!0);o(this,"_shaderVersion",0);o(this,"_scene",null);o(this,"dirty",!0)}get hasShaderChunks(){return this._shaderChunks!=null}get shaderChunks(){return this._shaderChunks||(this._shaderChunks=new ne),this._shaderChunks}getShaderChunks(t=ae){const e=this.shaderChunks;return t===ae?e.glsl:e.wgsl}set shaderChunksVersion(t){this.shaderChunks.version=t}get shaderChunksVersion(){return this.shaderChunks.version}set chunks(t){this._oldChunks=t}get chunks(){return Object.assign(this._oldChunks,Object.fromEntries(this.shaderChunks.glsl)),this._oldChunks}set depthBias(t){this._depthState.depthBias=t}get depthBias(){return this._depthState.depthBias}set slopeDepthBias(t){this._depthState.depthBiasSlope=t}get slopeDepthBias(){return this._depthState.depthBiasSlope}set redWrite(t){this._blendState.redWrite=t}get redWrite(){return this._blendState.redWrite}set greenWrite(t){this._blendState.greenWrite=t}get greenWrite(){return this._blendState.greenWrite}set blueWrite(t){this._blendState.blueWrite=t}get blueWrite(){return this._blendState.blueWrite}set alphaWrite(t){this._blendState.alphaWrite=t}get alphaWrite(){return this._blendState.alphaWrite}get transparent(){return this._blendState.blend}_updateTransparency(){for(const t of this.meshInstances)t.transparent=this.transparent}set blendState(t){this._blendState.copy(t),this._updateTransparency()}get blendState(){return this._blendState}set blendType(t){const e=we[t];this._blendState.setColorBlend(e.op,e.src,e.dst),this._blendState.setAlphaBlend(e.alphaOp??e.op,e.alphaSrc??e.src,e.alphaDst??e.dst);const i=t!==oi;this._blendState.blend!==i&&(this._blendState.blend=i,this._updateTransparency()),this._updateMeshInstanceKeys()}get blendType(){if(!this.transparent)return oi;const{colorOp:t,colorSrcFactor:e,colorDstFactor:i,alphaOp:s,alphaSrcFactor:a,alphaDstFactor:r}=this._blendState;for(let n=0;n<we.length;n++){const l=we[n];if(l.src===e&&l.dst===i&&l.op===t&&l.src===a&&l.dst===r&&l.op===s)return n}return St}set depthState(t){this._depthState.copy(t)}get depthState(){return this._depthState}set depthTest(t){this._depthState.test=t}get depthTest(){return this._depthState.test}set depthFunc(t){this._depthState.func=t}get depthFunc(){return this._depthState.func}set depthWrite(t){this._depthState.write=t}get depthWrite(){return this._depthState.write}copy(t){var e,i;this.name=t.name,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this._blendState.copy(t._blendState),this._depthState.copy(t._depthState),this.cull=t.cull,this.frontFace=t.frontFace,this.stencilFront=(e=t.stencilFront)==null?void 0:e.clone(),t.stencilBack&&(this.stencilBack=t.stencilFront===t.stencilBack?this.stencilFront:t.stencilBack.clone()),this.clearParameters();for(const s in t.parameters)t.parameters.hasOwnProperty(s)&&this._setParameterSimple(s,t.parameters[s].data);return this.defines.clear(),t.defines.forEach((s,a)=>this.defines.set(a,s)),this._definesKey=null,this._shaderChunks=t.hasShaderChunks?new ne:null,(i=this._shaderChunks)==null||i.copy(t._shaderChunks),this}clone(){return new this.constructor().copy(this)}_updateMeshInstanceKeys(){for(const t of this.meshInstances)t.updateKey()}updateUniforms(t,e){this._dirtyShader&&(this.clearVariants(),this._dirtyShader=!1)}getShaderVariant(t){}update(){var t,e;if(Object.keys(this._oldChunks).length>0)for(const[i,s]of Object.entries(this._oldChunks))this.shaderChunks.glsl.set(i,s),delete this._oldChunks[i];(this._definesDirty||(t=this._shaderChunks)!=null&&t.isDirty())&&(this._definesDirty=!1,(e=this._shaderChunks)==null||e.resetDirty(),this.clearVariants()),this.dirty=!0}clearParameters(){this.parameters={}}getParameters(){return this.parameters}clearVariants(){this.variants.clear();for(const t of this.meshInstances)t.clearShaders()}getParameter(t){return this.parameters[t]}_setParameterSimple(t,e){const i=this.parameters[t];i?i.data=e:this.parameters[t]={scopeId:null,data:e}}setParameter(t,e){if(e===void 0&&typeof t=="object"){const i=t;if(i.length){for(let s=0;s<i.length;s++)this.setParameter(i[s]);return}t=i.name,e=i.value}this._setParameterSimple(t,e)}deleteParameter(t){this.parameters[t]&&delete this.parameters[t]}setParameters(t,e){const i=this.parameters;e===void 0&&(e=i);for(const s in e){const a=i[s];a&&(a.scopeId||(a.scopeId=t.scope.resolve(s)),a.scopeId.setValue(a.data))}}setDefine(t,e){let i=!1;const{defines:s}=this;e!==void 0&&e!==!1?(i=!s.has(t)||s.get(t)!==e,s.set(t,e)):(i=s.has(t),s.delete(t)),this._definesDirty||(this._definesDirty=i),i&&(this._definesKey=null)}get definesKey(){return this._definesKey===null&&(this._definesKey=Array.from(this.defines).sort(([t],[e])=>t<e?-1:t>e?1:0).map(([t,e])=>`${t}=${e}`).join(",")),this._definesKey}getDefine(t){return this.defines.has(t)}destroy(){this.variants.clear();for(const t of this.meshInstances)if(t.clearShaders(),t._material=null,t.mesh){const e=uo(t.mesh.device);this!==e&&(t.material=e)}this.meshInstances.clear()}addMeshInstanceRef(t){this.meshInstances.add(t)}removeMeshInstanceRef(t){this.meshInstances.delete(t)}}class v_{constructor(){this.cache=new Map}destroy(){this.clear(),this.cache=null}clear(){this.cache.forEach(t=>{t.forEach(e=>{e.destroy()})}),this.cache.clear()}getKey(t){const e=t._type===Te,i=t._shadowType,s=t._shadowResolution;return`${e}-${i}-${s}`}get(t,e){const i=this.getKey(e),s=this.cache.get(i);if(s&&s.length)return s.pop();const a=di.create(t,e);return a.cached=!0,a}add(t,e){const i=this.getKey(t),s=this.cache.get(i);s?s.push(e):this.cache.set(i,[e])}}class S_ extends Ui{constructor(t,e,i,s,a){super(t),this.requiresCubemaps=!1,this.shadowRenderer=e,this.light=i,this.face=s,this.applyVsm=a,this.shadowCamera=e.prepareFace(i,null,s),e.setupRenderPass(this,this.shadowCamera,!0)}execute(){this.shadowRenderer.renderFace(this.light,null,this.face,!1)}after(){this.applyVsm&&this.shadowRenderer.renderVsm(this.light,this.shadowCamera)}}class T_{constructor(t,e){o(this,"shadowLights",[]);o(this,"renderer");o(this,"shadowRenderer");o(this,"device");this.renderer=t,this.shadowRenderer=e,this.device=t.device}prepareShadowMap(t){!this.renderer.scene.clusteredLightingEnabled&&!t._shadowMap&&(t._shadowMap=di.create(this.device,t))}cull(t,e,i=null){const s=this.renderer.scene.clusteredLightingEnabled;t.visibleThisFrame=!0,this.prepareShadowMap(t);const a=t._type,r=a===fe?1:6;for(let n=0;n<r;n++){const l=t.getRenderData(null,n),d=l.shadowCamera;d.nearClip=t.attenuationEnd/1e3,d.farClip=t.attenuationEnd;const f=d._node,h=t._node;if(f.setPosition(h.getPosition()),a===fe)d.fov=t._outerConeAngle*2,f.setRotation(h.getRotation()),f.rotateLocal(-90,0,0);else if(a===Te)if(s){const m=2/(this.shadowRenderer.lightTextureAtlas.shadowAtlasResolution*t.atlasViewport.z/3)*this.shadowRenderer.lightTextureAtlas.shadowEdgePixels;d.fov=Math.atan(1+m)*I.RAD_TO_DEG*2}else d.fov=90;d.updateFrustum(),this.shadowRenderer.cullShadowCasters(e,t,l.visibleCasters,d,i)}}prepareLights(t,e){let i;for(let s=0;s<e.length;s++){const a=e[s];if(this.shadowRenderer.needsShadowRendering(a)&&a.atlasViewportAllocated){t.push(a);for(let r=0;r<a.numShadowFaces;r++)i=this.shadowRenderer.prepareFace(a,null,r)}}return i}buildNonClusteredRenderPasses(t,e){for(let i=0;i<e.length;i++){const s=e[i];if(this.shadowRenderer.needsShadowRendering(s)){const a=s._type===fe,r=s.numShadowFaces;for(let n=0;n<r;n++){const l=new S_(this.device,this.shadowRenderer,s,n,a);t.addRenderPass(l)}}}}}class E_ extends Ui{constructor(t,e,i,s,a){super(t),this.shadowRenderer=e,this.light=i,this.camera=s,this.allCascadesRendering=a}execute(){const{light:t,camera:e,shadowRenderer:i,allCascadesRendering:s}=this,a=t.numShadowFaces,r=t.shadowUpdateOverrides;for(let n=0;n<a;n++)(r==null?void 0:r[n])!==st&&i.renderFace(t,e,n,!s),(r==null?void 0:r[n])===as&&(r[n]=st)}after(){this.shadowRenderer.renderVsm(this.light,this.camera)}}const Lr=new Ce,js=[new Ce,new Ce,new Ce,new Ce],Dr=[!1,!1,!1,!1],Vl=[0,0,0,0],lt=new _,Gl=new b,K=[new _,new _,new _,new _,new _,new _,new _,new _],Pr={min:0,max:0};function y_(c,t,e){K[0].x=K[1].x=K[2].x=K[3].x=t.x,K[1].y=K[3].y=K[7].y=K[5].y=t.y,K[2].z=K[3].z=K[6].z=K[7].z=t.z,K[4].x=K[5].x=K[6].x=K[7].x=e.x,K[0].y=K[2].y=K[4].y=K[6].y=e.y,K[0].z=K[1].z=K[4].z=K[5].z=e.z;let i=9999999999,s=-9999999999;for(let a=0;a<8;++a){c.transformPoint(K[a],K[a]);const r=K[a].z;r<i&&(i=r),r>s&&(s=r)}return Pr.min=i,Pr.max=s,Pr}class x_{constructor(t,e){o(this,"renderer");o(this,"shadowRenderer");o(this,"device");this.renderer=t,this.shadowRenderer=e,this.device=t.device}prepareShadowMap(t){t.visibleThisFrame=!0,t._shadowMap||(t._shadowMap=di.create(this.device,t))}cull(t,e,i,s=null){const a=i._nearClip;this.generateSplitDistances(t,a,Math.min(i._farClip,t.shadowDistance));const r=t.shadowUpdateOverrides;let n=0;for(let d=0;d<t.numCascades&&(r==null?void 0:r[d])!==st;d++){const f=t.getRenderData(i,d),h=f.shadowCamera;h.renderTarget=t._shadowMap.renderTargets[0],f.shadowViewport.copy(t.cascades[d]),f.shadowScissor.copy(t.cascades[d]);const u=h._node,p=t._node;u.setPosition(p.getPosition()),u.setRotation(p.getRotation()),u.rotateLocal(-90,0,0);const m=d===0?a:t._shadowCascadeDistances[d-1],g=t._shadowCascadeDistances[d],v=i.getFrustumCorners(m,g);lt.set(0,0,0);const E=i.node.getWorldTransform();for(let H=0;H<8;H++)E.transformPoint(v[H],v[H]),lt.add(v[H]);lt.mulScalar(1/8);let S=0;for(let H=0;H<8;H++){const Ze=v[H].sub(lt).length();Ze>S&&(S=Ze)}const T=u.right,y=u.up,C=u.forward,x=.25*t._shadowResolution/S,A=Math.ceil(lt.dot(y)*x)/x,w=Math.ceil(lt.dot(T)*x)/x,L=y.mulScalar(A),P=T.mulScalar(w),R=lt.dot(C),O=C.mulScalar(R);lt.add2(L,P).add(O),u.setPosition(lt),u.translateLocal(0,0,1e6),h.nearClip=.01,h.farClip=2e6,h.orthoHeight=S,h.updateFrustum(),this.shadowRenderer.cullShadowCasters(e,t,f.visibleCasters,h,s);const B=1<<d,M=f.visibleCasters,j=M.length;let F=0;const N=js[d];for(let H=0;H<j;H++){const Ze=M[H];Ze.shadowCascadeMask&B&&(M[F++]=Ze,F===1?N.copy(Ze.aabb):N.add(Ze.aabb))}j!==F&&(M.length=F),Dr[d]=F>0,Vl[d]=S,n++}let l=!1;if(t._isPcss)for(let d=0;d<n;d++)Dr[d]&&(l?Lr.add(js[d]):(Lr.copy(js[d]),l=!0));for(let d=0;d<n;d++){let f;if(l)f=Lr;else if(Dr[d])f=js[d];else continue;const h=t.getRenderData(i,d),u=h.shadowCamera,p=u._node;Gl.copy(p.getWorldTransform()).invert();const m=y_(Gl,f.getMin(),f.getMax());p.translateLocal(0,0,m.max+.1),u.farClip=m.max-m.min+.2,h.projectionCompensation=Vl[d]}}generateSplitDistances(t,e,i){t._shadowCascadeDistances.fill(i);for(let s=1;s<t.numCascades;s++){const a=s/t.numCascades,r=e+(i-e)*a,n=e*(i/e)**a,l=I.lerp(r,n,t.cascadeDistribution);t._shadowCascadeDistances[s-1]=l}}getLightRenderPass(t,e){let i=null;if(this.shadowRenderer.needsShadowRendering(t)){const s=t.numShadowFaces,a=t.shadowUpdateOverrides;let r=!0,n;for(let l=0;l<s;l++)(a==null?void 0:a[l])===st&&(r=!1),n=this.shadowRenderer.prepareFace(t,e,l);i=new E_(this.device,this.shadowRenderer,t,e,r),this.shadowRenderer.setupRenderPass(i,n,r)}return i}}const Ir=new Set,Hl=new b,Wl=new b,Xt=new Float32Array(2),ji=new se(1,1,0,0),Xl=new b;function C_(c,t){return Math.exp(-(c*c)/(2*t*t))}function A_(c){const t=(c-1)/6,e=(c-1)*.5,i=new Array(c);let s=0;for(let a=0;a<c;++a)i[a]=C_(a-e,t),s+=i[a];for(let a=0;a<c;++a)i[a]/=s;return i}class w_{constructor(t,e){o(this,"shadowPassCache",[]);this.device=t.device,this.renderer=t,this.lightTextureAtlas=e;const i=this.device.scope;this.sourceId=i.resolve("source"),this.pixelOffsetId=i.resolve("pixelOffset"),this.weightId=i.resolve("weight[0]"),this.blurVsmShader=[{},{}],this.blurVsmWeights={},this.shadowMapLightRadiusId=i.resolve("light_radius"),this.viewUniformFormat=null,this.blendStateWrite=new vt,this.blendStateNoWrite=new vt,this.blendStateNoWrite.setColorWrite(!1,!1,!1,!1)}static createShadowCamera(t,e,i,s){const a=Mi.create(t,Pm,i,s),r=si.get(e),n=(r==null?void 0:r.vsm)??!1,l=(r==null?void 0:r.pcf)??!1;return n?a.clearColor=new U(0,0,0,0):a.clearColor=new U(1,1,1,1),a.clearDepthBuffer=!0,a.clearStencilBuffer=!1,a.clearColorBuffer=!l,a}_cullShadowCastersInternal(t,e,i){const s=t.length;for(let a=0;a<s;a++){const r=t[a];r.castShadow&&(!r.cull||r._isVisible(i))&&(r.visibleThisFrame=!0,e.push(r))}}cullShadowCasters(t,e,i,s,a){var r,n;if((r=this.renderer.scene)==null||r.fire(Sh,null),i.length=0,a)this._cullShadowCastersInternal(a,i,s);else{const l=t.layerList,d=l.length;for(let f=0;f<d;f++){const h=l[f];h._lightsSet.has(e)&&(Ir.has(h)||(Ir.add(h),this._cullShadowCastersInternal(h.shadowCasters,i,s)))}Ir.clear()}i.sort(this.sortCompareShader),(n=this.renderer.scene)==null||n.fire(Th,null)}sortCompareShader(t,e){const i=t._sortKeyShadow,s=e._sortKeyShadow;return i===s?e.mesh.id-t.mesh.id:s-i}setupRenderState(t,e){const s=this.renderer.scene.clusteredLightingEnabled?e._isPcf:e._isPcf&&e._type!==Te;t.setBlendState(s?this.blendStateNoWrite:this.blendStateWrite),t.setDepthState(e.shadowDepthState),t.setStencilState(null,null)}dispatchUniforms(t,e,i,s){const a=e._node;t._type!==$&&(this.renderer.dispatchViewPos(a.getPosition()),this.shadowMapLightRadiusId.setValue(t.attenuationEnd)),Hl.setTRS(a.getPosition(),a.getRotation(),_.ONE).invert(),Wl.mul2(e.projectionMatrix,Hl);const r=i.shadowViewport;e.rect=r,e.scissorRect=i.shadowScissor,Xl.setViewport(r.x,r.y,r.z,r.w),i.shadowMatrix.mul2(Xl,Wl),t._type===$&&t._shadowMatrixPalette.set(i.shadowMatrix.data,s*16)}getShadowPass(t){var a;const e=t._type,i=t._shadowType;let s=(a=this.shadowPassCache[e])==null?void 0:a[i];if(!s){const r=`ShadowPass_${e}_${i}`;s=Tt.get(this.device).allocate(r,{isShadow:!0,lightType:e,shadowType:i}),this.shadowPassCache[e]||(this.shadowPassCache[e]=[]),this.shadowPassCache[e][i]=s}return s.index}submitCasters(t,e,i){const s=this.device,a=this.renderer,r=a.scene,n=this.getShadowPass(e),l=i.shaderParams,d=i.renderTarget.flipY?-1:1,f=t.length;for(let h=0;h<f;h++){const u=t[h],p=u.mesh,m=u.instancingData;if(m&&m.count<=0)continue;u.ensureMaterial(s);const g=u.material;a.setBaseConstants(s,g),a.setSkinning(s,u),g.dirty&&(g.updateUniforms(s,r),g.dirty=!1),a.setupCullModeAndFrontFace(!0,d,u),g.setParameters(s),u.setParameters(s);const v=u.getShaderInstance(n,0,r,l,this.viewUniformFormat),E=v.shader;if(E.failed)continue;u._sortKeyShadow=E.id,s.setShader(E),a.setVertexBuffers(s,p),a.setMorphing(s,u.morphInstance),m&&s.setVertexBuffer(m.vertexBuffer),a.setMeshInstanceMatrices(u),a.setupMeshUniformBuffers(v);const S=u.renderStyle,T=u.getDrawCommands(i);s.draw(p.primitive[S],p.indexBuffer[S],m==null?void 0:m.count,T),a._shadowDrawCalls++,m&&a._instancedDrawCalls++}}needsShadowRendering(t){return t.enabled&&t.castShadows&&t.shadowUpdateMode!==st&&t.visibleThisFrame}getLightRenderData(t,e,i){return t.getRenderData(t._type===$?e:null,i)}setupRenderPass(t,e,i){const s=e.renderTarget;t.init(s),t.depthStencilOps.clearDepthValue=1,t.depthStencilOps.clearDepth=i,s.depthBuffer?t.depthStencilOps.storeDepth=!0:(t.colorOps.clearValue.copy(e.clearColor),t.colorOps.clear=i,t.depthStencilOps.storeDepth=!1),t.requiresCubemaps=!1}prepareFace(t,e,i){const s=t._type,r=this.getLightRenderData(t,e,i).shadowCamera,n=s===$?0:i;return r.renderTarget=t._shadowMap.renderTargets[n],r}renderFace(t,e,i,s){const a=this.device,r=this.getLightRenderData(t,e,i),n=r.shadowCamera;this.dispatchUniforms(t,n,r,i);const l=n.renderTarget,d=this.renderer;d.setCameraUniforms(n,l),d.setupViewUniformBuffers(this.viewUniformFormat,null),d.setupViewport(n,l),s&&d.clear(n),this.setupRenderState(a,t),this.submitCasters(r.visibleCasters,t,n)}renderVsm(t,e){t._isVsm&&t._vsmBlurSize>1&&(!this.renderer.scene.clusteredLightingEnabled||t._type===$)&&this.applyVsmBlur(t,e)}getVsmBlurShader(t,e){const i=this.blurVsmShader;let s=i[t][e];if(!s){this.blurVsmWeights[e]=A_(e);const a=new Map;a.set("{SAMPLES}",e),t===1&&a.set("GAUSS",""),s=zt.createShader(this.device,{uniqueName:`blurVsm${t}${e}`,attributes:{vertex_position:ge},vertexChunk:"fullscreenQuadVS",fragmentChunk:"blurVSMPS",fragmentDefines:a}),i[t][e]=s}return s}applyVsmBlur(t,e){const i=this.device;i.setBlendState(vt.NOBLEND);const r=t.getRenderData(t._type===$?e:null,0).shadowCamera.renderTarget,n=this.renderer.shadowMapCache.get(i,t),l=n.renderTargets[0],d=t.vsmBlurMode,f=t._vsmBlurSize,h=this.getVsmBlurShader(d,f);ji.z=t._shadowResolution-2,ji.w=ji.z,this.sourceId.setValue(r.colorBuffer),Xt[0]=1/t._shadowResolution,Xt[1]=0,this.pixelOffsetId.setValue(Xt),d===Qp&&this.weightId.setValue(this.blurVsmWeights[f]),Da(i,l,h,null,ji),this.sourceId.setValue(l.colorBuffer),Xt[1]=Xt[0],Xt[0]=0,this.pixelOffsetId.setValue(Xt),Da(i,r,h,null,ji),this.renderer.shadowMapCache.add(t,n)}initViewUniformFormat(){this.viewUniformFormat||(this.viewUniformFormat=new zd(this.device,[new re("matrix_viewProjection",bt)]))}frameUpdate(){this.initViewUniformFormat()}}class Sn extends Fi{constructor(e){super(e);o(this,"children",[]);this.name="FramePassMultiView"}addChild(e){this.children.push(e)}render(){var h,u,p,m;if(!this.enabled)return;const e=this.device,i=e.xrSubImages,s=(i==null?void 0:i.length)??0,a=this.children,r=a.length;if(s===0){for(let g=0;g<r;g++)a[g].render();return}const n=(h=e.backBuffer)==null?void 0:h.impl,l=e.xrColorTexture,d=(n==null?void 0:n.assignedColorTexture)??null,f=((p=(u=n==null?void 0:n.colorAttachments)==null?void 0:u[0])==null?void 0:p.format)??null;for(let g=0;g<s;g++){const v=i[g];e.xrCurrentViewIndex=g,e.xrColorTexture=v.colorTexture,e.xrColorTextureViewDescriptor=v.viewDescriptor,(m=n==null?void 0:n.assignColorTexture)==null||m.call(n,v.colorTexture,v.viewFormat);for(let E=0;E<r;E++)a[E].render()}e.xrCurrentViewIndex=-1,e.xrColorTextureViewDescriptor=null,e.xrColorTexture=l??null,n&&d&&f&&n.assignedColorTexture!==d&&n.assignColorTexture(d,f)}}const Ks=[];class L_{constructor(t){o(this,"_empty",null);o(this,"_allocated",[]);o(this,"_clusters",new Map);this.device=t}destroy(){this._empty&&(this._empty.destroy(),this._empty=null),this._allocated.forEach(t=>{t.destroy()}),this._allocated.length=0}get count(){return this._allocated.length}get empty(){if(!this._empty){const t=new zl(this.device);t.name="ClusterEmpty",t.update([]),this._empty=t}return this._empty}_assignClustersForPass(t){const e=t.layerRenderSteps;if(!e)return;const i=e.length;for(let s=0;s<i;s++){const a=e[s];a.lightClusters=null;const r=a.layer;if(r.hasClusteredLights&&r.meshInstances.length){const n=r.getLightIdHash(),l=this._clusters.get(n);let d=l==null?void 0:l.lightClusters;d||(d=Ks.pop()??new zl(this.device),this._allocated.push(d),this._clusters.set(n,a)),a.lightClusters=d}a.lightClusters||(a.lightClusters=this.empty)}}assign(t){Ks.push(...this._allocated),this._allocated.length=0,this._clusters.clear();const e=t.length;for(let i=0;i<e;i++){const s=t[i];if(s instanceof Sn){const a=s.children;for(let r=0;r<a.length;r++)this._assignClustersForPass(a[r])}else this._assignClustersForPass(s)}Ks.forEach(i=>i.destroy()),Ks.length=0}update(t,e){this.assign(t),this._clusters.forEach(i=>{const s=i.layer;i.lightClusters.update(s.clusteredLightsSet,e)})}}const xt=new se,br=[];class po extends Ui{constructor(e,i){super(e);o(this,"_quadRenderer2D",null);o(this,"_quadRendererCube",null);o(this,"_filteredLights",[]);o(this,"_forceCopy",!1);o(this,"_evtDeviceRestored",null);this._cubeSlotsOffsets=i,this.requiresCubemaps=!1,this.blitTextureId=e.scope.resolve("blitTexture"),this.invViewProjId=e.scope.resolve("invViewProj"),this._evtDeviceRestored=e.on("devicerestored",this.onDeviceRestored,this)}destroy(){var e,i,s;(e=this._quadRenderer2D)==null||e.destroy(),this._quadRenderer2D=null,(i=this._quadRendererCube)==null||i.destroy(),this._quadRendererCube=null,(s=this._evtDeviceRestored)==null||s.off(),this._evtDeviceRestored=null}static create(e,i){const s=new po(e.device,i);return s.init(e),s.colorOps.clear=!1,s.depthStencilOps.clearDepth=!1,s}onDeviceRestored(){this._forceCopy=!0}update(e){const i=this._filteredLights;this.filter(e,i),this.executeEnabled=i.length>0}filter(e,i){for(let s=0;s<e.length;s++){const a=e[s];if(a._type===$||!a.atlasViewportAllocated)continue;const r=a.cookie&&a.cookie.uploadVersion!==a.cookieRenderVersion;!a.atlasSlotUpdated&&!r&&!this._forceCopy||a.enabled&&a.cookie&&a.visibleThisFrame&&i.push(a)}this._forceCopy=!1}initInvViewProjMatrices(){if(!br.length)for(let e=0;e<6;e++){const i=Mi.create(this.device,null,Te,e),s=i.projectionMatrix,a=i.node.getLocalTransform().clone().invert();br[e]=new b().mul2(s,a).invert()}}get quadRenderer2D(){if(!this._quadRenderer2D){const e=zt.createShader(this.device,{uniqueName:"cookieRenderer2d",attributes:{vertex_position:ge},vertexChunk:"cookieBlitVS",fragmentChunk:"cookieBlit2DPS"});this._quadRenderer2D=new gn(e)}return this._quadRenderer2D}get quadRendererCube(){if(!this._quadRendererCube){const e=zt.createShader(this.device,{uniqueName:"cookieRendererCube",attributes:{vertex_position:ge},vertexChunk:"cookieBlitVS",fragmentChunk:"cookieBlitCubePS"});this._quadRendererCube=new gn(e)}return this._quadRendererCube}execute(){this.device.setDrawStates();const i=this.renderTarget.colorBuffer.width,s=this._cubeSlotsOffsets,a=this._filteredLights;for(let r=0;r<a.length;r++){const n=a[r],l=n.numShadowFaces,d=l>1?this.quadRendererCube:this.quadRenderer2D;l>1&&this.initInvViewProjMatrices(),this.blitTextureId.setValue(n.cookie),n.cookieRenderVersion=n.cookie.uploadVersion;for(let f=0;f<l;f++){if(xt.copy(n.atlasViewport),l>1){const h=xt.z/3,u=s[f];xt.x+=h*u.x,xt.y+=h*u.y,xt.z=h,xt.w=h,this.invViewProjId.setValue(br[f].data)}xt.mulScalar(i),d.render(xt)}}a.length=0}}class D_ extends Ui{constructor(t,e,i){super(t),this.requiresCubemaps=!1,this.shadowRenderer=e,this.shadowRendererLocal=i}update(t){const e=this.shadowRendererLocal.shadowLights,i=this.shadowRendererLocal.prepareLights(e,t),s=e.length;this.enabled=s>0,s&&this.shadowRenderer.setupRenderPass(this,i,!1)}execute(){const t=this.shadowRendererLocal.shadowLights,e=t.length;for(let i=0;i<e;i++){const s=t[i];for(let a=0;a<s.numShadowFaces;a++)this.shadowRenderer.renderFace(s,null,a,!0)}t.length=0}}class P_ extends Fi{constructor(t,e,i,s,a){super(t),this.renderer=e,this.frameGraph=null,this.cookiesRenderPass=po.create(a.cookieRenderTarget,a.cubeSlotsOffsets),this.beforePasses.push(this.cookiesRenderPass),this.shadowRenderPass=new D_(t,i,s),this.beforePasses.push(this.shadowRenderPass)}update(t,e,i,s,a){this.frameGraph=t,this.cookiesRenderPass.enabled=i,i&&this.cookiesRenderPass.update(s),this.shadowRenderPass.enabled=e,e&&this.shadowRenderPass.update(a)}destroy(){this.cookiesRenderPass.destroy(),this.cookiesRenderPass=null}execute(){const{renderer:t}=this,{scene:e}=t;t.worldClustersAllocator.update(this.frameGraph.renderPasses,e.lighting)}}const Rr=new bc,Mr=new Set;class I_{constructor(t){o(this,"processingMeshInstances",new Set);o(this,"_cullCameras",[]);o(this,"cameraDirShadowLights",new Map);o(this,"dirLightShadows",new Map);this.renderer=t}cullMeshInstances(t,e,i){const s=i.opaque;s.length=0;const a=i.transparent;a.length=0;const r=t.frustumCulling,n=e.length;for(let l=0;l<n;l++){const d=e[l];d.visible&&(!r||!d.cull||d._isVisible(t))&&(d.visibleThisFrame=!0,(d.transparent?a:s).push(d),(d.skinInstance||d.morphInstance||d.gsplatInstance)&&(this.processingMeshInstances.add(d),d.gsplatInstance&&d.gsplatInstance.cameras.push(t)))}}cullLights(t,e){const{scene:i}=this.renderer,s=i.clusteredLightingEnabled,a=i.physicalUnits;for(let r=0;r<e.length;r++){const n=e[r];if(n.enabled)if(n._type!==$)if(n.getBoundingSphere(Rr),t.frustum.containsSphere(Rr)){n.visibleThisFrame=!0,n.usePhysicalUnits=a;const l=t.getScreenSize(Rr);n.maxScreenSize=Math.max(n.maxScreenSize,l)}else s||n.castShadows&&!n.shadowMap&&(n.visibleThisFrame=!0);else n.usePhysicalUnits=i.physicalUnits}}cullShadowmaps(t){const{renderer:e}=this,i=e.localLights;for(let s=0;s<i.length;s++){const a=i[s];a._type!==$&&a.visibleThisFrame&&a.castShadows&&a.shadowUpdateMode!==st&&e._shadowRendererLocal.cull(a,t)}this.cameraDirShadowLights.forEach((s,a)=>{for(let r=0;r<s.length;r++)e._shadowRendererDirectional.cull(s[r],t,a)})}consumeOneShotShadows(){const{renderer:t}=this,e=t.scene.clusteredLightingEnabled,i=t.shadowRenderer,s=t.localLights;for(let a=0;a<s.length;a++){const r=s[a];i.needsShadowRendering(r)&&(!e||r.atlasViewportAllocated)&&(t._shadowMapUpdates+=r.numShadowFaces,r.shadowUpdateMode===as&&(r.shadowUpdateMode=st))}this.cameraDirShadowLights.forEach(a=>{for(let r=0;r<a.length;r++){const n=a[r];i.needsShadowRendering(n)&&(t._shadowMapUpdates+=n.numShadowFaces,n.shadowUpdateMode===as&&(n.shadowUpdateMode=st))}})}collectDirectionalShadowLights(t){const{renderer:e}=this;this.cameraDirShadowLights.clear();const i=t.cameras;for(let s=0;s<i.length;s++){const a=i[s];if(a.enabled){const r=a.camera;let n;const l=r.layers;for(let d=0;d<l.length;d++){const f=t.getLayerById(l[d]);if(f){const h=f.splitLights[$];for(let u=0;u<h.length;u++){const p=h[u];p.castShadows&&!Mr.has(p)&&(Mr.add(p),n=n??[],n.push(p),e._shadowRendererDirectional.prepareShadowMap(p))}}}n&&this.cameraDirShadowLights.set(r,n),Mr.clear()}}}updateLightVisibility(t){const{renderer:e}=this,{scene:i}=e,s=e.lights;for(let l=0;l<s.length;l++)s[l].beginFrame();const a=t.cameras.length;for(let l=0;l<a;l++){const d=t.cameras[l];d.camera.updateFrustum();const f=d.layers;for(let h=0;h<f.length;h++){const u=t.getLayerById(f[h]);u&&u.enabled&&this.cullLights(d.camera,u._lights)}}const r=i.clusteredLightingEnabled;r&&e.updateLightTextureAtlas();const n=e.localLights;for(let l=0;l<n.length;l++){const d=n[l];d._type!==$&&(r?d.atlasSlotUpdated&&d.shadowUpdateMode===st&&(d.shadowUpdateMode=as):d.castShadows&&d.visibleThisFrame&&!d._shadowMap&&(e._shadowRendererLocal.prepareShadowMap(d),d.shadowUpdateMode===st&&(d.shadowUpdateMode=as)))}this.collectDirectionalShadowLights(t)}requestMeshInstanceCull(t,e){t.addCullLayer(e)&&this._cullCameras.push(t)}executeMeshInstanceCull(){var s;const{renderer:t}=this,{scene:e}=t,i=this._cullCameras;for(let a=0;a<i.length;a++){const r=i[a],n=((s=r.node)==null?void 0:s.camera)??null;e==null||e.fire(Sh,n),r.updateFrustum();for(const l of r.cullLayers)this.cullMeshInstances(r,l.meshInstances,l.getCulledInstances(r));e==null||e.fire(Th,n),r.clearCullLayers()}i.length=0}cullComposition(t){const{renderer:e}=this,{scene:i}=e;this.processingMeshInstances.clear(),e._camerasRendered+=t.cameras.length,this.executeMeshInstanceCull(),this.cullShadowmaps(t),i==null||i.fire(Dm)}}let Nr=0;const Zs=new b,Js=new b,Qs=new b,Yl=new _s,Or=new Set,Fr=new Set,Ur=new jn,rs=[0,0,0,1],ea={color:rs,depth:1,stencil:0,flags:0},$l=[new k(.5,.333333),new k(.25,.666667),new k(.75,.111111),new k(.125,.444444),new k(.625,.777778),new k(.375,.222222),new k(.875,.555556),new k(.0625,.888889),new k(.5625,.037037),new k(.3125,.37037),new k(.8125,.703704),new k(.1875,.148148),new k(.6875,.481481),new k(.4375,.814815),new k(.9375,.259259),new k(.03125,.592593)],b_=new b,R_=new b,M_=new b,N_=new b,Br=new Set,kr=[],zr=[];class O_{constructor(t,e){o(this,"clustersDebugRendered",!1);o(this,"scene");o(this,"culler");o(this,"worldClustersAllocator");o(this,"lights",[]);o(this,"localLights",[]);o(this,"_viewUniformBuffers",new WeakMap);o(this,"_dynamicViewBindGroup",new jn);o(this,"_viewBindGroups",[]);o(this,"_viewBindGroupOffsets",[]);o(this,"_viewOffsetScratch",[0]);o(this,"blueNoise",new l_(123));o(this,"gsplatDirector",null);this.device=t,this.scene=e,this.worldClustersAllocator=new L_(t),this.lightTextureAtlas=new __(t),this.shadowMapCache=new v_,this.shadowRenderer=new w_(this,this.lightTextureAtlas),this._shadowRendererLocal=new T_(this,this.shadowRenderer),this._shadowRendererDirectional=new x_(this,this.shadowRenderer),this.culler=new I_(this),this.scene.clusteredLightingEnabled&&(this._renderPassUpdateClustered=new P_(this.device,this,this.shadowRenderer,this._shadowRendererLocal,this.lightTextureAtlas)),this.viewUniformFormat=null,this._skinTime=0,this._morphTime=0,this._cullTime=0,this._shadowMapTime=0,this._lightClustersTime=0,this._layerCompositionUpdateTime=0,this._shadowDrawCalls=0,this._skinDrawCalls=0,this._instancedDrawCalls=0,this._shadowMapUpdates=0,this._numDrawCallsCulled=0,this._camerasRendered=0,this._lightClusters=0,this._gsplatCount=0;const i=t.scope;this.boneTextureId=i.resolve("texture_poseMap"),this.modelMatrixId=i.resolve("matrix_model"),this.normalMatrixId=i.resolve("matrix_normal"),this.viewInvId=i.resolve("matrix_viewInverse"),this.viewPos=new Float32Array(3),this.viewPosId=i.resolve("view_position"),this.projId=i.resolve("matrix_projection"),this.projSkyboxId=i.resolve("matrix_projectionSkybox"),this.viewId=i.resolve("matrix_view"),this.viewId3=i.resolve("matrix_view3"),this.viewProjId=i.resolve("matrix_viewProjection"),this.flipYId=i.resolve("projectionFlipY"),this.tbnBasis=i.resolve("tbnBasis"),this.cameraParams=new Float32Array(4),this.cameraParamsId=i.resolve("camera_params"),this.viewportSize=new Float32Array(4),this.viewportSizeId=i.resolve("viewport_size"),this.viewIndexId=i.resolve("view_index"),this.viewIndexId.setValue(0),this.blueNoiseJitterVersion=0,this.blueNoiseJitterVec=new se,this.blueNoiseJitterData=new Float32Array(4),this.blueNoiseJitterId=i.resolve("blueNoiseJitter"),this.blueNoiseTextureId=i.resolve("blueNoiseTex32"),this.alphaTestId=i.resolve("alpha_ref"),this.opacityMapId=i.resolve("texture_opacityMap"),this.exposureId=i.resolve("exposure"),this.morphPositionTex=i.resolve("morphPositionTex"),this.morphNormalTex=i.resolve("morphNormalTex"),this.morphTexParams=i.resolve("morph_tex_params"),this.lightCube=new d_,this.constantLightCube=i.resolve("lightCube[0]")}destroy(){var t,e;this.shadowRenderer=null,this._shadowRendererLocal=null,this._shadowRendererDirectional=null,this.shadowMapCache.destroy(),this.shadowMapCache=null,(t=this._renderPassUpdateClustered)==null||t.destroy(),this._renderPassUpdateClustered=null,this.lightTextureAtlas.destroy(),this.lightTextureAtlas=null,(e=this.gsplatDirector)==null||e.destroy(),this.gsplatDirector=null}setupViewport(t,e){const i=this.device,s=e?e.width:i.width,a=e?e.height:i.height,r=t.rect;let n=Math.floor(r.x*s),l=Math.floor(r.y*a),d=Math.floor(r.z*s),f=Math.floor(r.w*a);if(i.setViewport(n,l,d,f),t._scissorRectClear){const h=t.scissorRect;n=Math.floor(h.x*s),l=Math.floor(h.y*a),d=Math.floor(h.z*s),f=Math.floor(h.w*a)}i.setScissor(n,l,d,f)}setCameraUniforms(t,e){const i=e==null?void 0:e.flipY;let s=null;if(t.xrActive)s=t.xrViews,t.updateViewTransforms();else{let l=t.projectionMatrix;t.calculateProjection&&t.calculateProjection(l,wa);let d=t.getProjectionMatrixSkybox();const f=this.device.isWebGPU;l=Ds.applyShaderProjectionTransform(l,b_,i,f),d=Ds.applyShaderProjectionTransform(d,R_,i,f);const{jitter:h}=t;let u=0,p=0;if(h>0){const g=e?e.width:this.device.width,v=e?e.height:this.device.height,E=$l[this.device.renderVersion%$l.length];u=h*(E.x*2-1)/g,p=h*(E.y*2-1)/v,l=M_.copy(l),l.data[8]=u,l.data[9]=p,d=N_.copy(d),d.data[8]=u,d.data[9]=p,this.blueNoiseJitterVersion!==this.device.renderVersion&&(this.blueNoiseJitterVersion=this.device.renderVersion,this.blueNoise.vec4(this.blueNoiseJitterVec))}const m=h>0?this.blueNoiseJitterVec:se.ZERO;if(this.blueNoiseJitterData[0]=m.x,this.blueNoiseJitterData[1]=m.y,this.blueNoiseJitterData[2]=m.z,this.blueNoiseJitterData[3]=m.w,this.blueNoiseJitterId.setValue(this.blueNoiseJitterData),this.projId.setValue(l.data),this.projSkyboxId.setValue(d.data),t.calculateTransform)t.calculateTransform(Js,wa);else{const g=t._node.getPosition(),v=t._node.getRotation();Js.setTRS(g,v,_.ONE)}this.viewInvId.setValue(Js.data),Qs.copy(Js).invert(),this.viewId.setValue(Qs.data),Yl.setFromMat4(Qs),this.viewId3.setValue(Yl.data),Zs.mul2(l,Qs),this.viewProjId.setValue(Zs.data),t._storeShaderMatrices(Zs,u,p,this.device.renderVersion),this.flipYId.setValue(i?-1:1),this.dispatchViewPos(t._node.getPosition()),t.frustum.setFromMat4(Zs)}this.tbnBasis.setValue(this.device.isWebGPU!==!!i?-1:1),this.cameraParamsId.setValue(t.fillShaderParams(this.cameraParams));const a=t.xrActive?t.xrViews[0]??null:null;let r=a?a.viewport.z:e?e.width:this.device.width,n=a?a.viewport.w:e?e.height:this.device.height;return r*=t.rect.z,n*=t.rect.w,this.viewportSize[0]=r,this.viewportSize[1]=n,this.viewportSize[2]=1/r,this.viewportSize[3]=1/n,this.viewportSizeId.setValue(this.viewportSize),this.exposureId.setValue(this.scene.physicalUnits?t.getExposure():this.scene.exposure),s}clear(t,e,i,s){const a=(e??t._clearColorBuffer?_f:0)|(i??t._clearDepthBuffer?gf:0)|(s??t._clearStencilBuffer?vf:0);if(a){const r=this.device,n=t._clearColor;rs[0]=n.r,rs[1]=n.g,rs[2]=n.b,rs[3]=n.a,ea.depth=t._clearDepth,ea.stencil=t._clearStencil,ea.flags=a,r.clear(ea)}}setupCullModeAndFrontFace(t,e,i){const s=i.material,a=e*i.flipFacesFactor*i.node.worldScaleSign;let r=s.frontFace;a<0&&(r=r===sn?Ef:sn),this.device.setCullMode(t?s.cull:gs),this.device.setFrontFace(r)}setupCullMode(t,e,i){this.setupCullModeAndFrontFace(t,e,i)}setBaseConstants(t,e){t.setCullMode(e.cull),t.setFrontFace(e.frontFace),e.opacityMap&&this.opacityMapId.setValue(e.opacityMap),(e.opacityMap||e.alphaTest>0)&&this.alphaTestId.setValue(e.alphaTest)}updateCpuSkinMatrices(t){Nr++;const e=t.length;if(e!==0)for(let i=0;i<e;i++){const s=t[i].skinInstance;s&&(s.updateMatrices(t[i].node,Nr),s._dirty=!0)}}updateGpuSkinMatrices(t){for(const e of t){const i=e.skinInstance;i&&i._dirty&&(i.updateMatrixPalette(e.node,Nr),i._dirty=!1)}}updateMorphing(t){for(const e of t){const i=e.morphInstance;i&&i._dirty&&i.update()}}updateGSplats(t){var e;for(const i of t)(e=i.gsplatInstance)==null||e.update()}gpuUpdate(t){this.updateGpuSkinMatrices(t),this.updateMorphing(t),this.updateGSplats(t)}setVertexBuffers(t,e){t.setVertexBuffer(e.vertexBuffer)}setMorphing(t,e){e&&(e.prepareRendering(t),t.setVertexBuffer(e.morph.vertexBufferIds),this.morphPositionTex.setValue(e.texturePositions),this.morphNormalTex.setValue(e.textureNormals),this.morphTexParams.setValue(e._textureParams))}setSkinning(t,e){const i=e.skinInstance;if(i){this._skinDrawCalls++;const s=i.boneTexture;this.boneTextureId.setValue(s)}}dispatchViewPos(t){const e=this.viewPos;e[0]=t.x,e[1]=t.y,e[2]=t.z,this.viewPosId.setValue(e)}initViewUniformFormat(t){if(!this.viewUniformFormat){const e=[new re("matrix_view",bt),new re("matrix_viewInverse",bt),new re("matrix_projection",bt),new re("matrix_projectionSkybox",bt),new re("matrix_viewProjection",bt),new re("matrix_view3",Sa),new re("cubeMapRotationMatrix",Sa),new re("view_position",Qt),new re("viewport_size",Va),new re("skyboxIntensity",Ss),new re("exposure",Ss),new re("view_index",Ga)];t&&e.push(new re("clusterCellsCountByBoundsSize",Qt),new re("clusterBoundsMin",Qt),new re("clusterBoundsDelta",Qt),new re("clusterCellsDot",Ts),new re("clusterCellsMax",Ts),new re("shadowAtlasParams",za),new re("clusterMaxCells",Pi),new re("numClusteredLights",Pi),new re("clusterTextureWidth",Pi)),this.viewUniformFormat=new zd(this.device,e)}}setupViewUniforms(t,e){this.projId.setValue(t.projMat.data),this.projSkyboxId.setValue(t.projMat.data),this.viewId.setValue(t.viewOffMat.data),this.viewInvId.setValue(t.viewInvOffMat.data),this.viewId3.setValue(t.viewMat3.data),this.viewProjId.setValue(t.projViewOffMat.data),this.viewPosId.setValue(t.positionData),this.viewIndexId.setValue(e)}getViewUniformBuffer(t){let e=this._viewUniformBuffers.get(t);return e||(e=new Zn(this.device,t,!1),this._viewUniformBuffers.set(t,e)),e}setupViewUniformBuffers(t,e){const{device:i}=this,s=this.getViewUniformBuffer(t);if(e){const a=e.length;for(let r=0;r<a;r++)this.setupViewUniforms(e[r],r),s.update(this._dynamicViewBindGroup),this._viewBindGroups[r]=this._dynamicViewBindGroup.bindGroup,this._viewBindGroupOffsets[r]=this._dynamicViewBindGroup.offsets[0]}else s.update(this._dynamicViewBindGroup),i.setBindGroup(Ha,this._dynamicViewBindGroup.bindGroup,this._dynamicViewBindGroup.offsets)}setupMeshUniformBuffers(t){const e=this.device;if(e.supportsUniformBuffers){const i=t.getBindGroup(e);i.update(),e.setBindGroup(Od,i),t.getUniformBuffer(e).update(Ur),e.setBindGroup(dn,Ur.bindGroup,Ur.offsets)}}setMeshInstanceMatrices(t,e=!1){const i=t.node.worldTransform;this.modelMatrixId.setValue(i.data),e&&this.normalMatrixId.setValue(t.node.normalMatrix.data)}collectLights(t){this.lights.length=0,this.localLights.length=0;const e=this.scene._stats,i=t.layerList.length;for(let s=0;s<i;s++){const a=t.layerList[s];if(!Fr.has(a)){Fr.add(a);const r=a._lights;for(let n=0;n<r.length;n++){const l=r[n];Or.has(l)||(Or.add(l),this.lights.push(l),l._type!==$&&this.localLights.push(l))}}}e.lights=this.lights.length,Or.clear(),Fr.clear()}updateShaders(t,e){const i=t.length;for(let s=0;s<i;s++){const a=t[s].material;if(a&&!Br.has(a)&&(Br.add(a),a.getShaderVariant!==zi.prototype.getShaderVariant)){if(e&&(!a.useLighting||a.emitter&&!a.emitter.lighting))continue;a.clearVariants()}}Br.clear()}updateFrameUniforms(){this.blueNoiseTextureId.setValue(u_(this.device))}beginFrame(t){const e=this.scene,i=e.updateShaders||this.device._shadersDirty,s=t.layerList,a=s.length;for(let r=0;r<a;r++){const l=s[r].meshInstances,d=l.length;for(let f=0;f<d;f++){const h=l[f];h.visibleThisFrame=!1,i&&kr.push(h),h.skinInstance&&zr.push(h)}}if(i){const r=!e.updateShaders||!this.device._shadersDirty;this.updateShaders(kr,r),e.updateShaders=!1,this.device._shadersDirty=!1,e._shaderVersion++}this.updateFrameUniforms(),this.updateCpuSkinMatrices(zr),kr.length=0,zr.length=0}updateLightTextureAtlas(){this.lightTextureAtlas.update(this.localLights,this.scene.lighting)}updateLayerComposition(t){const e=t.layerList.length,s=this.scene._shaderVersion;for(let a=0;a<e;a++){const r=t.layerList[a];r._shaderVersion=s}t._update()}frameUpdate(){this.clustersDebugRendered=!1,this.initViewUniformFormat(this.scene.clusteredLightingEnabled),this.culler.dirLightShadows.clear()}}class wh{constructor(t,e,i,s){o(this,"cameraComponent");o(this,"layer");o(this,"transparent");o(this,"renderTarget");o(this,"lightClusters",null);o(this,"clearColor",!1);o(this,"clearDepth",!1);o(this,"clearStencil",!1);o(this,"firstCameraUse",!1);o(this,"lastCameraUse",!1);this.cameraComponent=t,this.layer=e,this.transparent=i,this.renderTarget=s}setupClears(t,e){this.clearColor=(t==null?void 0:t.clearColorBuffer)||e.clearColorBuffer,this.clearDepth=(t==null?void 0:t.clearDepthBuffer)||e.clearDepthBuffer,this.clearStencil=(t==null?void 0:t.clearStencilBuffer)||e.clearStencilBuffer}}class F_ extends Ui{constructor(e,i,s,a){super(e);o(this,"layerComposition");o(this,"scene");o(this,"renderer");o(this,"layerRenderSteps",[]);o(this,"gammaCorrection");o(this,"toneMapping");o(this,"noDepthClear",!1);this.layerComposition=i,this.scene=s,this.renderer=a}get rendersAnything(){return this.layerRenderSteps.length>0}addLayerRenderStep(e){this.layerRenderSteps.push(e)}addLayer(e,i,s,a=!0){const r=new wh(e,i,s,this.renderTarget);if(a){const n=this.layerRenderSteps.length===0;r.setupClears(n?e:void 0,i)}this.addLayerRenderStep(r)}updateDirectionalShadows(){const{renderer:e,layerRenderSteps:i}=this;for(let s=0;s<i.length;s++){const n=i[s].cameraComponent.camera,l=this.renderer.culler.cameraDirShadowLights.get(n);if(l)for(let d=0;d<l.length;d++){const f=l[d];if(e.culler.dirLightShadows.get(f)!==n){e.culler.dirLightShadows.set(f,n);const h=e._shadowRendererDirectional.getLightRenderPass(f,n);h&&this.beforePasses.push(h)}}}}updateCameraBeforePasses(){var e;for(let i=0;i<this.layerRenderSteps.length;i++){const s=this.layerRenderSteps[i];if(s.firstCameraUse){const a=(e=s.cameraComponent)==null?void 0:e.camera;if(a){const{beforePasses:r}=a;for(let n=0;n<r.length;n++)this.beforePasses.push(r[n])}}}}updateClears(){const e=this.layerRenderSteps[0];if(e){const s=e.cameraComponent.camera,a=s.fullSizeClearRect;this.setClearColor(a&&e.clearColor?s.clearColor:void 0),this.setClearDepth(a&&e.clearDepth&&!this.noDepthClear?s.clearDepth:void 0),this.setClearStencil(a&&e.clearStencil?s.clearStencil:void 0)}}frameUpdate(){super.frameUpdate(),this.updateDirectionalShadows(),this.updateCameraBeforePasses(),this.updateClears();const{renderer:e,layerComposition:i,layerRenderSteps:s}=this;for(let a=0;a<s.length;a++){const r=s[a];i.isEnabled(r.layer,r.transparent)&&e.culler.requestMeshInstanceCull(r.cameraComponent.camera,r.layer)}}before(){const{layerRenderSteps:e}=this;for(let i=0;i<e.length;i++){const s=e[i];s.firstCameraUse&&this.scene.fire(Cm,s.cameraComponent)}}execute(){const{layerComposition:e,layerRenderSteps:i}=this;for(let s=0;s<i.length;s++){const a=i[s],r=a.layer;e.isEnabled(r,a.transparent)&&this.renderLayerRenderStep(a,s===0)}}after(){for(let e=0;e<this.layerRenderSteps.length;e++){const i=this.layerRenderSteps[e];i.lastCameraUse&&this.scene.fire(Am,i.cameraComponent)}this.beforePasses.length=0}renderLayerRenderStep(e,i){var f;const{renderer:s,scene:a}=this,r=s.device,{layer:n,transparent:l,cameraComponent:d}=e;if(d){const h=d.gammaCorrection,u=d.toneMapping;this.gammaCorrection!==void 0&&(d.gammaCorrection=this.gammaCorrection),this.toneMapping!==void 0&&(d.toneMapping=this.toneMapping),a.fire(wm,d,n,l);const p={lightClusters:e.lightClusters},m=((f=d.camera.shaderPassInfo)==null?void 0:f.index)??Ya;(!i||!d.camera.fullSizeClearRect)&&(p.clearColor=e.clearColor,p.clearDepth=e.clearDepth,p.clearStencil=e.clearStencil);const g=e.renderTarget??r.backBuffer;s.renderForwardLayer(d.camera,g,n,l,m,p),r.setBlendState(vt.NOBLEND),r.setStencilState(null,null),r.setAlphaToCoverage(!1),a.fire(Lm,d,n,l),this.gammaCorrection!==void 0&&(d.gammaCorrection=h),this.toneMapping!==void 0&&(d.toneMapping=u)}}}class U_ extends Fi{constructor(t,e,i){super(t),this.renderer=e,this.renderAction=i}execute(){this.renderAction.camera.onPostprocessing()}}const B_=[[],[],[]],Ct=new U,Yt={drawCalls:[],shaderInstances:[],isNewMaterial:[],lightMaskChanged:[],clear:function(){this.drawCalls.length=0,this.shaderInstances.length=0,this.isNewMaterial.length=0,this.lightMaskChanged.length=0}};function k_(c){const t=[];for(let e=0;e<c;++e){const i=Math.sqrt(e+.5)/Math.sqrt(c);t.push(i)}return t}function z_(c){const t=[];for(let e=0;e<c;e++){const i=e/c,s=Math.sqrt(i*i);t.push(s)}return t}class Lh extends O_{constructor(t,e){super(t,e);const i=this.device;this._forwardDrawCalls=0,this._materialSwitches=0,this._depthMapTime=0,this._forwardTime=0,this._sortTime=0;const s=i.scope;this.fogColorId=s.resolve("fog_color"),this.fogStartId=s.resolve("fog_start"),this.fogEndId=s.resolve("fog_end"),this.fogDensityId=s.resolve("fog_density"),this.ambientId=s.resolve("light_globalAmbient"),this.skyboxIntensityId=s.resolve("skyboxIntensity"),this.cubeMapRotationMatrixId=s.resolve("cubeMapRotationMatrix"),this.pcssDiskSamplesId=s.resolve("pcssDiskSamples[0]"),this.pcssSphereSamplesId=s.resolve("pcssSphereSamples[0]"),this.lightColorId=[],this.lightDir=[],this.lightDirId=[],this.lightShadowMapId=[],this.lightShadowMatrixId=[],this.lightShadowParamsId=[],this.lightShadowIntensity=[],this.lightRadiusId=[],this.lightPos=[],this.lightPosId=[],this.lightWidth=[],this.lightWidthId=[],this.lightHeight=[],this.lightHeightId=[],this.lightInAngleId=[],this.lightOutAngleId=[],this.lightCookieId=[],this.lightCookieIntId=[],this.lightCookieMatrixId=[],this.lightCookieOffsetId=[],this.lightShadowSearchAreaId=[],this.lightCameraParamsId=[],this.lightSoftShadowParamsId=[],this.shadowMatrixPaletteId=[],this.shadowCascadeDistancesId=[],this.shadowCascadeCountId=[],this.shadowCascadeBlendId=[],this.shadowCascadeRadiiId=[],this.screenSizeId=s.resolve("uScreenSize"),this._screenSize=new Float32Array(4),this.fogColor=new Float32Array(3),this.ambientColor=new Float32Array(3),this.pcssDiskSamples=k_(16),this.pcssSphereSamples=z_(16)}destroy(){super.destroy()}dispatchGlobalLights(t){const e=this.ambientColor;if(Ct.linear(t.ambientLight),e[0]=Ct.r,e[1]=Ct.g,e[2]=Ct.b,t.physicalUnits)for(let i=0;i<3;i++)e[i]*=t.ambientLuminance;this.ambientId.setValue(e),this.skyboxIntensityId.setValue(t.physicalUnits?t.skyboxLuminance:t.skyboxIntensity),this.cubeMapRotationMatrixId.setValue(t._skyboxRotationMat3.data)}_resolveLight(t,e){const i=`light${e}`;this.lightColorId[e]=t.resolve(`${i}_color`),this.lightDir[e]=new Float32Array(3),this.lightDirId[e]=t.resolve(`${i}_direction`),this.lightShadowMapId[e]=t.resolve(`${i}_shadowMap`),this.lightShadowMatrixId[e]=t.resolve(`${i}_shadowMatrix`),this.lightShadowParamsId[e]=t.resolve(`${i}_shadowParams`),this.lightShadowIntensity[e]=t.resolve(`${i}_shadowIntensity`),this.lightShadowSearchAreaId[e]=t.resolve(`${i}_shadowSearchArea`),this.lightRadiusId[e]=t.resolve(`${i}_radius`),this.lightPos[e]=new Float32Array(3),this.lightPosId[e]=t.resolve(`${i}_position`),this.lightWidth[e]=new Float32Array(3),this.lightWidthId[e]=t.resolve(`${i}_halfWidth`),this.lightHeight[e]=new Float32Array(3),this.lightHeightId[e]=t.resolve(`${i}_halfHeight`),this.lightInAngleId[e]=t.resolve(`${i}_innerConeAngle`),this.lightOutAngleId[e]=t.resolve(`${i}_outerConeAngle`),this.lightCookieId[e]=t.resolve(`${i}_cookie`),this.lightCookieIntId[e]=t.resolve(`${i}_cookieIntensity`),this.lightCookieMatrixId[e]=t.resolve(`${i}_cookieMatrix`),this.lightCookieOffsetId[e]=t.resolve(`${i}_cookieOffset`),this.lightCameraParamsId[e]=t.resolve(`${i}_cameraParams`),this.lightSoftShadowParamsId[e]=t.resolve(`${i}_softShadowParams`),this.shadowMatrixPaletteId[e]=t.resolve(`${i}_shadowMatrixPalette[0]`),this.shadowCascadeDistancesId[e]=t.resolve(`${i}_shadowCascadeDistances`),this.shadowCascadeCountId[e]=t.resolve(`${i}_shadowCascadeCount`),this.shadowCascadeBlendId[e]=t.resolve(`${i}_shadowCascadeBlend`),this.shadowCascadeRadiiId[e]=t.resolve(`${i}_shadowCascadeRadii`)}setLTCDirectionalLight(t,e,i,s,a){this.lightPos[e][0]=s.x-i.x*a,this.lightPos[e][1]=s.y-i.y*a,this.lightPos[e][2]=s.z-i.z*a,this.lightPosId[e].setValue(this.lightPos[e]);const r=t.transformVector(new _(-.5,0,0));this.lightWidth[e][0]=r.x*a,this.lightWidth[e][1]=r.y*a,this.lightWidth[e][2]=r.z*a,this.lightWidthId[e].setValue(this.lightWidth[e]);const n=t.transformVector(new _(0,0,.5));this.lightHeight[e][0]=n.x*a,this.lightHeight[e][1]=n.y*a,this.lightHeight[e][2]=n.z*a,this.lightHeightId[e].setValue(this.lightHeight[e])}dispatchDirectLights(t,e,i){let s=0;const a=this.device.scope;for(let r=0;r<t.length;r++){if(!(t[r].mask&e))continue;const n=t[r],l=n._node.getWorldTransform();if(this.lightColorId[s]||this._resolveLight(a,s),this.lightColorId[s].setValue(n._colorLinear),l.getY(n._direction).mulScalar(-1),n._direction.normalize(),this.lightDir[s][0]=n._direction.x,this.lightDir[s][1]=n._direction.y,this.lightDir[s][2]=n._direction.z,this.lightDirId[s].setValue(this.lightDir[s]),n.shape!==Ut&&this.setLTCDirectionalLight(l,s,n._direction,i._node.getPosition(),i.farClip),n.castShadows){const d=n.getRenderData(i,0),f=n._getUniformBiasValues(d);if(this.lightShadowMapId[s].setValue(d.shadowBuffer),this.lightShadowMatrixId[s].setValue(d.shadowMatrix.data),this.shadowMatrixPaletteId[s].setValue(n._shadowMatrixPalette),this.shadowCascadeDistancesId[s].setValue(n._shadowCascadeDistances),this.shadowCascadeCountId[s].setValue(n.numCascades),this.shadowCascadeBlendId[s].setValue(1-n.cascadeBlend),this.lightShadowIntensity[s].setValue(n.shadowIntensity),n._isPcss){this.lightSoftShadowParamsId[s].setValue(n._softShadowParams),d.shadowCamera.renderTarget&&this.lightShadowSearchAreaId[s].setValue(n.penumbraSize/d.shadowCamera.renderTarget.width*d.projectionCompensation);const p=n._shadowCameraParams;p.length=4,p[0]=d.projectionCompensation,p[1]=d.shadowCamera._farClip,p[2]=d.shadowCamera._nearClip,p[3]=1,this.lightCameraParamsId[s].setValue(p);const m=n._shadowCascadeRadii??(n._shadowCascadeRadii=new Float32Array(4));for(let g=0;g<4;g++){const v=g<n.numCascades?n.getRenderData(i,g).projectionCompensation:0;m[g]=v>0?v:d.projectionCompensation}this.shadowCascadeRadiiId[s].setValue(m)}const h=n._shadowRenderParams;h.length=4,h[0]=n._shadowResolution,h[1]=f.normalBias,h[2]=f.bias,h[3]=0,this.lightShadowParamsId[s].setValue(h)}s++}return s}setLTCPositionalLight(t,e){const i=t.transformVector(new _(-.5,0,0));this.lightWidth[e][0]=i.x,this.lightWidth[e][1]=i.y,this.lightWidth[e][2]=i.z,this.lightWidthId[e].setValue(this.lightWidth[e]);const s=t.transformVector(new _(0,0,.5));this.lightHeight[e][0]=s.x,this.lightHeight[e][1]=s.y,this.lightHeight[e][2]=s.z,this.lightHeightId[e].setValue(this.lightHeight[e])}dispatchOmniLight(t,e,i){const s=e._node.getWorldTransform();if(this.lightColorId[i]||this._resolveLight(t,i),this.lightRadiusId[i].setValue(e.attenuationEnd),this.lightColorId[i].setValue(e._colorLinear),s.getTranslation(e._position),this.lightPos[i][0]=e._position.x,this.lightPos[i][1]=e._position.y,this.lightPos[i][2]=e._position.z,this.lightPosId[i].setValue(this.lightPos[i]),e.shape!==Ut&&this.setLTCPositionalLight(s,i),e.castShadows){const a=e.getRenderData(null,0);this.lightShadowMapId[i].setValue(a.shadowBuffer);const r=e._getUniformBiasValues(a),n=e._shadowRenderParams;n.length=4,n[0]=e._shadowResolution,n[1]=r.normalBias,n[2]=r.bias,n[3]=1/e.attenuationEnd,this.lightShadowParamsId[i].setValue(n),this.lightShadowIntensity[i].setValue(e.shadowIntensity);const l=e.penumbraSize/a.shadowCamera.renderTarget.width;this.lightShadowSearchAreaId[i].setValue(l);const d=e._shadowCameraParams;d.length=4,d[0]=0,d[1]=a.shadowCamera._farClip,d[2]=a.shadowCamera._nearClip,d[3]=0,this.lightCameraParamsId[i].setValue(d)}e._cookie&&(this.lightCookieId[i].setValue(e._cookie),this.lightShadowMatrixId[i].setValue(s.data),this.lightCookieIntId[i].setValue(e.cookieIntensity))}dispatchSpotLight(t,e,i){const s=e._node.getWorldTransform();if(this.lightColorId[i]||this._resolveLight(t,i),this.lightInAngleId[i].setValue(e._innerConeAngleCos),this.lightOutAngleId[i].setValue(e._outerConeAngleCos),this.lightRadiusId[i].setValue(e.attenuationEnd),this.lightColorId[i].setValue(e._colorLinear),s.getTranslation(e._position),this.lightPos[i][0]=e._position.x,this.lightPos[i][1]=e._position.y,this.lightPos[i][2]=e._position.z,this.lightPosId[i].setValue(this.lightPos[i]),e.shape!==Ut&&this.setLTCPositionalLight(s,i),s.getY(e._direction).mulScalar(-1),e._direction.normalize(),this.lightDir[i][0]=e._direction.x,this.lightDir[i][1]=e._direction.y,this.lightDir[i][2]=e._direction.z,this.lightDirId[i].setValue(this.lightDir[i]),e.castShadows){const a=e.getRenderData(null,0);this.lightShadowMapId[i].setValue(a.shadowBuffer),this.lightShadowMatrixId[i].setValue(a.shadowMatrix.data);const r=e._getUniformBiasValues(a),n=e._shadowRenderParams;n.length=4,n[0]=e._shadowResolution,n[1]=r.normalBias,n[2]=r.bias,n[3]=1/e.attenuationEnd,this.lightShadowParamsId[i].setValue(n),this.lightShadowIntensity[i].setValue(e.shadowIntensity);const l=e.penumbraSize/a.shadowCamera.renderTarget.width,d=a.shadowCamera._fov*I.DEG_TO_RAD,f=1/Math.tan(d/2);this.lightShadowSearchAreaId[i].setValue(l*f);const h=e._shadowCameraParams;h.length=4,h[0]=0,h[1]=a.shadowCamera._farClip,h[2]=a.shadowCamera._nearClip,h[3]=0,this.lightCameraParamsId[i].setValue(h)}if(e._cookie){if(!e.castShadows){const a=Mi.evalSpotCookieMatrix(e);this.lightShadowMatrixId[i].setValue(a.data)}this.lightCookieId[i].setValue(e._cookie),this.lightCookieIntId[i].setValue(e.cookieIntensity),e._cookieTransform&&(e._cookieTransformUniform[0]=e._cookieTransform.x,e._cookieTransformUniform[1]=e._cookieTransform.y,e._cookieTransformUniform[2]=e._cookieTransform.z,e._cookieTransformUniform[3]=e._cookieTransform.w,this.lightCookieMatrixId[i].setValue(e._cookieTransformUniform),e._cookieOffsetUniform[0]=e._cookieOffset.x,e._cookieOffsetUniform[1]=e._cookieOffset.y,this.lightCookieOffsetId[i].setValue(e._cookieOffsetUniform))}}dispatchLocalLights(t,e,i){let s=i;const a=this.device.scope,r=t[Te],n=r.length;for(let f=0;f<n;f++){const h=r[f];h.mask&e&&(this.dispatchOmniLight(a,h,s),s++)}const l=t[fe],d=l.length;for(let f=0;f<d;f++){const h=l[f];h.mask&e&&(this.dispatchSpotLight(a,h,s),s++)}}renderForwardPrepareMaterials(t,e,i,s,a,r,n){const l=t.fogParams??this.scene.fog,d=t.shaderParams;d.fog=l.type,d.srgbRenderTarget=(e==null?void 0:e.isColorBufferSrgb(0))??!1;const f=(T,y,C,x)=>{Yt.drawCalls.push(T),Yt.shaderInstances.push(y),Yt.isNewMaterial.push(C),Yt.lightMaskChanged.push(x)};Yt.clear();const h=this.device,u=this.scene,p=u.clusteredLightingEnabled,m=(a==null?void 0:a.getLightHash(p))??0;let g=null,v,E;const S=i.length;for(let T=0;T<S;T++){const y=i[T];if((y.shaderPassMask&1<<r)===0)continue;const C=y.instancingData;if(C&&C.count<=0)continue;y.ensureMaterial(h);const x=y.material,A=y._shaderDefs,w=y.mask;x&&x===g&&A!==v&&(g=null),x!==g&&(this._materialSwitches++,x._scene=u,x.dirty&&(x.updateUniforms(h,u),x.dirty=!1));const L=y.getShaderInstance(r,m,u,d,n,s);f(y,L,x!==g,!g||w!==E),g=x,v=A,E=w}return Yt}renderForwardInternal(t,e,i,s,a,r){const n=this.device,l=this.scene,d=r?-1:1,f=l.clusteredLightingEnabled,h=t.xrActive&&t.xrViews.length?t.xrViews:null,u=n.xrCurrentViewIndex??-1,p=h&&u>=0?u:0,m=h&&u>=0?u+1:h?h.length:0,g=e.drawCalls.length;for(let v=0;v<g;v++){const E=e.drawCalls[v],S=e.isNewMaterial[v],T=e.lightMaskChanged[v],y=e.shaderInstances[v],C=E.material,x=E.mask;if(y.shader.failed)continue;if(S){if(n.setShader(y.shader,!1),C.setParameters(n),T){const j=this.dispatchDirectLights(i[$],x,t);f||this.dispatchLocalLights(i,x,j)}this.alphaTestId.setValue(C.alphaTest),n.setBlendState(C.blendState),n.setDepthState(C.depthState),n.setAlphaToCoverage(C.alphaToCoverage)}this.setupCullModeAndFrontFace(t._cullFaces,d,E);const A=E.stencilFront??C.stencilFront,w=E.stencilBack??C.stencilBack;n.setStencilState(A,w),E.setParameters(n),n.scope.resolve("meshInstanceId").setValue(E.id);const L=E.mesh;this.setVertexBuffers(n,L),this.setMorphing(n,E.morphInstance),this.setSkinning(n,E);const P=E.instancingData;P&&n.setVertexBuffer(P.vertexBuffer),this.setMeshInstanceMatrices(E,!0),this.setupMeshUniformBuffers(y);const R=E.renderStyle,O=L.indexBuffer[R];a==null||a(E,v);const B=E.getDrawCommands(t);if(h)for(let M=p;M<m;M++){const j=h[M];n.setViewport(j.viewport.x,j.viewport.y,j.viewport.z,j.viewport.w),this._viewOffsetScratch[0]=this._viewBindGroupOffsets[M],n.setBindGroup(Ha,this._viewBindGroups[M],this._viewOffsetScratch);const F=M===p,N=M===m-1;n.draw(L.primitive[R],O,P==null?void 0:P.count,B,F,N),this._forwardDrawCalls++,E.instancingData&&this._instancedDrawCalls++}else n.draw(L.primitive[R],O,P==null?void 0:P.count,B),this._forwardDrawCalls++,E.instancingData&&this._instancedDrawCalls++;v<g-1&&!e.isNewMaterial[v+1]&&C.setParameters(n,E.parameters)}}renderForward(t,e,i,s,a,r,n,l,d){const f=this.renderForwardPrepareMaterials(t,e,i,s,n,a,d);this.renderForwardInternal(t,f,s,a,r,l),Yt.clear()}renderForwardLayer(t,e,i,s,a,r={}){const{scene:n}=this,l=n.clusteredLightingEnabled;this.setupViewport(t,e);let d,f;if(i){i.sortVisible(t,s);const T=i.getCulledInstances(t);d=s?T.transparent:T.opaque,n.immediate.onPreRenderLayer(i,d,s),i.requiresLightCube&&(this.lightCube.update(n.ambientLight,i._lights),this.constantLightCube.setValue(this.lightCube.colors)),f=i.splitLights}else d=r.meshInstances,f=r.splitLights??B_;l&&((r.lightClusters??this.worldClustersAllocator.empty).activate(),i&&!this.clustersDebugRendered&&n.lighting.debugLayer===i.id&&(this.clustersDebugRendered=!0)),n._activeCamera=t;const h=t.fogParams??this.scene.fog;this.setFogConstants(h);const u=this.setCameraUniforms(t,e);this.initViewUniformFormat(n.clusteredLightingEnabled);const p=r.viewUniformFormat??this.viewUniformFormat;this.setupViewUniformBuffers(p,u);const m=r.clearColor??!1,g=r.clearDepth??!1,v=r.clearStencil??!1;(m||g||v)&&this.clear(t,m,g,v);const E=!!(t._flipFaces^(e==null?void 0:e.flipY)),S=this._forwardDrawCalls;this.renderForward(t,e,d,f,a,r.drawCallback??null,i,E,p),i&&(i._forwardDrawCalls+=this._forwardDrawCalls-S)}setFogConstants(t){if(t.type!==Bi){Ct.linear(t.color);const e=this.fogColor;e[0]=Ct.r,e[1]=Ct.g,e[2]=Ct.b,this.fogColorId.setValue(e),t.type===Up?(this.fogStartId.setValue(t.start),this.fogEndId.setValue(t.end)):this.fogDensityId.setValue(t.density)}}setSceneConstants(){const t=this.scene;this.dispatchGlobalLights(t);const e=this.device;this._screenSize[0]=e.width,this._screenSize[1]=e.height,this._screenSize[2]=1/e.width,this._screenSize[3]=1/e.height,this.screenSizeId.setValue(this._screenSize),this.pcssDiskSamplesId.setValue(this.pcssDiskSamples),this.pcssSphereSamplesId.setValue(this.pcssSphereSamples)}buildFrameGraph(t,e){const i=this.scene;if(t.reset(),i.clusteredLightingEnabled){const{shadowsEnabled:l,cookiesEnabled:d}=i.lighting;this._renderPassUpdateClustered.update(t,l,d,this.lights,this.localLights),t.addRenderPass(this._renderPassUpdateClustered)}else this._shadowRendererLocal.buildNonClusteredRenderPasses(t,this.localLights);let s=0,a=!0,r=null;const n=e._renderActions;for(let l=s;l<n.length;l++){const d=n[l],{layer:f,camera:h}=d,u=this._isMultiview(h);if(d.useCameraPasses)u&&t.beginMultiView(this.device),h.camera.framePasses.forEach(p=>{t.addRenderPass(p)}),u&&t.endMultiView();else{const p=f.id===Ft,m=p&&(h.renderSceneColorMap||h.renderSceneDepthMap);a&&(a=!1,s=l,r=d.renderTarget);const g=n[l+1],E=(g?!g.useCameraPasses&&g.layer.id===Ft:!1)&&(h.renderSceneColorMap||h.renderSceneDepthMap),S=g?g.firstCameraUse&&this.culler.cameraDirShadowLights.has(g.camera.camera):!1;if(!g||g.renderTarget!==r||g.camera!==h||S||E||m){const T=p&&s===l;if(u&&(h.renderSceneColorMap||h.renderSceneDepthMap||d.triggerPostprocess&&(h!=null&&h.onPostprocessing)),u&&t.beginMultiView(this.device),T||this.addMainRenderPass(t,e,r,s,l),p){if(h.renderSceneColorMap){const y=h.camera.renderPassColorGrab;y.source=h.renderTarget,t.addRenderPass(y)}h.renderSceneDepthMap&&t.addRenderPass(h.camera.renderPassDepthGrab)}if(d.triggerPostprocess&&(h!=null&&h.onPostprocessing)){const y=new U_(this.device,this,d);t.addRenderPass(y)}u&&t.endMultiView(),a=!0}}}}_isMultiview(t){const e=t.camera;return this.device.isWebGPU&&!!(e!=null&&e.xrActive)&&e.xrViews.length>=2}addMainRenderPass(t,e,i,s,a){const r=new F_(this.device,e,this.scene,this);r.init(i);const n=e._renderActions;for(let l=s;l<=a;l++)r.addLayerRenderStep(this._layerRenderStepFromRenderAction(n[l]));t.addRenderPass(r)}_layerRenderStepFromRenderAction(t){const e=new wh(t.camera,t.layer,t.transparent,t.renderTarget);return e.clearColor=t.clearColor,e.clearDepth=t.clearDepth,e.clearStencil=t.clearStencil,e.firstCameraUse=t.firstCameraUse,e.lastCameraUse=t.lastCameraUse,e}update(t){var e;this.frameUpdate(),this.shadowRenderer.frameUpdate(),this.scene._updateSkyMesh(),this.updateLayerComposition(t),this.collectLights(t),this.beginFrame(t),this.setSceneConstants(),(e=this.gsplatDirector)==null||e.update(t),this.culler.updateLightVisibility(t)}cull(t){var e;this.culler.cullComposition(t),(e=this.gsplatDirector)==null||e.updateShadows(),this.gpuUpdate(this.culler.processingMeshInstances),this.culler.consumeOneShotShadows()}}let Vr=0;const Ki=[],ta=new Set;function V_(c,t){return c.drawOrder-t.drawOrder}function G_(c,t){const e=c._sortKeyForward,i=t._sortKeyForward;return e===i?t.mesh.id-c.mesh.id:i-e}function H_(c,t){return t._sortKeyDynamic-c._sortKeyDynamic}function W_(c,t){return c._sortKeyDynamic-t._sortKeyDynamic}const X_=[null,V_,G_,H_,W_];class Y_{constructor(){o(this,"opaque",[]);o(this,"transparent",[])}}class vi{constructor(t={}){o(this,"id");o(this,"name");o(this,"_enabled",!0);o(this,"_refCounter",1);o(this,"opaqueSortMode",fl);o(this,"transparentSortMode",fr);o(this,"customSortCallback",null);o(this,"customCalculateSortValues",null);o(this,"_clearColorBuffer",!1);o(this,"_clearDepthBuffer",!1);o(this,"_clearStencilBuffer",!1);o(this,"onEnable");o(this,"onDisable");o(this,"meshInstances",[]);o(this,"meshInstancesSet",new Set);o(this,"shadowCasters",[]);o(this,"shadowCastersSet",new Set);o(this,"_visibleInstances",new WeakMap);o(this,"_lights",[]);o(this,"_lightsSet",new Set);o(this,"_clusteredLightsSet",new Set);o(this,"_splitLights",[[],[],[]]);o(this,"_splitLightsDirty",!0);o(this,"_lightHash",0);o(this,"_lightHashDirty",!1);o(this,"_lightIdHash",0);o(this,"_lightIdHashDirty",!1);o(this,"requiresLightCube",!1);o(this,"cameras",[]);o(this,"camerasSet",new Set);o(this,"gsplatPlacements",[]);o(this,"gsplatPlacementsSet",new Set);o(this,"gsplatShadowCasters",[]);o(this,"gsplatShadowCastersSet",new Set);o(this,"gsplatPlacementsDirty",!0);o(this,"_dirtyComposition",!1);o(this,"_shaderVersion",-1);t.id!==void 0?(this.id=t.id,Vr=Math.max(this.id+1,Vr)):this.id=Vr++,this.name=t.name,this._enabled=t.enabled??!0,this._refCounter=this._enabled?1:0,this.opaqueSortMode=t.opaqueSortMode??fl,this.transparentSortMode=t.transparentSortMode??fr,this._clearColorBuffer=!!t.clearColorBuffer,this._clearDepthBuffer=!!t.clearDepthBuffer,this._clearStencilBuffer=!!t.clearStencilBuffer,this.onEnable=t.onEnable,this.onDisable=t.onDisable,this._enabled&&this.onEnable&&this.onEnable()}set enabled(t){t!==this._enabled&&(this._dirtyComposition=!0,this.gsplatPlacementsDirty=!0,this._enabled=t,t?(this.incrementCounter(),this.onEnable&&this.onEnable()):(this.decrementCounter(),this.onDisable&&this.onDisable()))}get enabled(){return this._enabled}set clearColorBuffer(t){this._clearColorBuffer=t,this._dirtyComposition=!0}get clearColorBuffer(){return this._clearColorBuffer}set clearDepthBuffer(t){this._clearDepthBuffer=t,this._dirtyComposition=!0}get clearDepthBuffer(){return this._clearDepthBuffer}set clearStencilBuffer(t){this._clearStencilBuffer=t,this._dirtyComposition=!0}get clearStencilBuffer(){return this._clearStencilBuffer}get hasClusteredLights(){return this._clusteredLightsSet.size>0}get clusteredLightsSet(){return this._clusteredLightsSet}incrementCounter(){this._refCounter===0&&(this._enabled=!0,this.onEnable&&this.onEnable()),this._refCounter++}decrementCounter(){if(this._refCounter===1)this._enabled=!1,this.onDisable&&this.onDisable();else if(this._refCounter===0)return;this._refCounter--}addGSplatPlacement(t){this.gsplatPlacementsSet.has(t)||(this.gsplatPlacements.push(t),this.gsplatPlacementsSet.add(t),this.gsplatPlacementsDirty=!0)}removeGSplatPlacement(t){const e=this.gsplatPlacements.indexOf(t);e>=0&&(this.gsplatPlacements.splice(e,1),this.gsplatPlacementsSet.delete(t),this.gsplatPlacementsDirty=!0)}addGSplatShadowCaster(t){this.gsplatShadowCastersSet.has(t)||(this.gsplatShadowCasters.push(t),this.gsplatShadowCastersSet.add(t),this.gsplatPlacementsDirty=!0)}removeGSplatShadowCaster(t){const e=this.gsplatShadowCasters.indexOf(t);e>=0&&(this.gsplatShadowCasters.splice(e,1),this.gsplatShadowCastersSet.delete(t),this.gsplatPlacementsDirty=!0)}addMeshInstances(t,e){const i=this.meshInstances,s=this.meshInstancesSet;for(let a=0;a<t.length;a++){const r=t[a];s.has(r)||(i.push(r),s.add(r),ta.add(r.material))}if(e||this.addShadowCasters(t),ta.size>0){const a=this._shaderVersion;ta.forEach(r=>{a>=0&&r._shaderVersion!==a&&(r.getShaderVariant!==zi.prototype.getShaderVariant&&r.clearVariants(),r._shaderVersion=a)}),ta.clear()}}removeMeshInstances(t,e){const i=this.meshInstances,s=this.meshInstancesSet;for(let a=0;a<t.length;a++){const r=t[a];if(s.has(r)){s.delete(r);const n=i.indexOf(r);n>=0&&i.splice(n,1)}}e||this.removeShadowCasters(t)}addShadowCasters(t){const e=this.shadowCasters,i=this.shadowCastersSet;for(let s=0;s<t.length;s++){const a=t[s];a.castShadow&&!i.has(a)&&(i.add(a),e.push(a))}}removeShadowCasters(t){const e=this.shadowCasters,i=this.shadowCastersSet;for(let s=0;s<t.length;s++){const a=t[s];if(i.has(a)){i.delete(a);const r=e.indexOf(a);r>=0&&e.splice(r,1)}}}clearMeshInstances(t=!1){this.meshInstances.length=0,this.meshInstancesSet.clear(),t||(this.shadowCasters.length=0,this.shadowCastersSet.clear())}markLightsDirty(){this._lightHashDirty=!0,this._lightIdHashDirty=!0,this._splitLightsDirty=!0}hasLight(t){return this._lightsSet.has(t)}addLight(t){const e=t.light;this._lightsSet.has(e)||(this._lightsSet.add(e),this._lights.push(e),this.markLightsDirty()),e.type!==$&&this._clusteredLightsSet.add(e)}removeLight(t){const e=t.light;this._lightsSet.has(e)&&(this._lightsSet.delete(e),this._lights.splice(this._lights.indexOf(e),1),this.markLightsDirty()),e.type!==$&&this._clusteredLightsSet.delete(e)}clearLights(){this._lightsSet.forEach(t=>t.removeLayer(this)),this._lightsSet.clear(),this._clusteredLightsSet.clear(),this._lights.length=0,this.markLightsDirty()}get splitLights(){if(this._splitLightsDirty){this._splitLightsDirty=!1;const t=this._splitLights;for(let i=0;i<t.length;i++)t[i].length=0;const e=this._lights;for(let i=0;i<e.length;i++){const s=e[i];s.enabled&&t[s._type].push(s)}for(let i=0;i<t.length;i++)t[i].sort((s,a)=>s.key-a.key)}return this._splitLights}evaluateLightHash(t,e,i){let s=0;const a=this._lights;for(let r=0;r<a.length;r++){const n=a[r].type!==$;(t&&n||e&&!n)&&Ki.push(i?a[r].id:a[r].key)}return Ki.length>0&&(Ki.sort(),s=kd(Ki),Ki.length=0),s}getLightHash(t){return this._lightHashDirty&&(this._lightHashDirty=!1,this._lightHash=this.evaluateLightHash(!t,!0,!1)),this._lightHash}getLightIdHash(){return this._lightIdHashDirty&&(this._lightIdHashDirty=!1,this._lightIdHash=this.evaluateLightHash(!0,!1,!0)),this._lightIdHash}addCamera(t){this.camerasSet.has(t.camera)||(this.camerasSet.add(t.camera),this.cameras.push(t),this._dirtyComposition=!0)}removeCamera(t){if(this.camerasSet.has(t.camera)){this.camerasSet.delete(t.camera);const e=this.cameras.indexOf(t);this.cameras.splice(e,1),this._dirtyComposition=!0}}clearCameras(){this.cameras.length=0,this.camerasSet.clear(),this._dirtyComposition=!0}_calculateSortDistances(t,e,i){const s=t.length,{x:a,y:r,z:n}=e,{x:l,y:d,z:f}=i;for(let h=0;h<s;h++){const u=t[h];let p;if(u.calculateSortDistance)p=u.calculateSortDistance(u,e,i);else{const g=u.aabb.center;p=(g.x-a)*l+(g.y-r)*d+(g.z-n)*f}const m=u._drawBucket*1e9;u._sortKeyDynamic=m+p}}getCulledInstances(t){let e=this._visibleInstances.get(t);return e||(e=new Y_,this._visibleInstances.set(t,e)),e}sortVisible(t,e){const i=e?this.transparentSortMode:this.opaqueSortMode;if(i===ha)return;const s=this.getCulledInstances(t),a=e?s.transparent:s.opaque,r=t.node;if(i===gm){const n=r.getPosition(),l=r.forward;this.customCalculateSortValues&&this.customCalculateSortValues(a,a.length,n,l),this.customSortCallback&&a.sort(this.customSortCallback)}else{if(i===fr||i===_m){const n=r.getPosition(),l=r.forward;this._calculateSortDistances(a,n,l)}a.sort(X_[i])}}}const $_=(c,t)=>c.priority-t.priority,q_=c=>c.sort($_);class j_{constructor(){o(this,"camera",null);this.layer=null,this.transparent=!1,this.renderTarget=null,this.clearColor=!1,this.clearDepth=!1,this.clearStencil=!1,this.triggerPostprocess=!1,this.firstCameraUse=!1,this.lastCameraUse=!1,this.useCameraPasses=!1}setupClears(t,e){this.clearColor=(t==null?void 0:t.clearColorBuffer)||e.clearColorBuffer,this.clearDepth=(t==null?void 0:t.clearDepthBuffer)||e.clearDepthBuffer,this.clearStencil=(t==null?void 0:t.clearStencilBuffer)||e.clearStencilBuffer}}class ql extends pe{constructor(e="Untitled"){super();o(this,"layerList",[]);o(this,"layerIdMap",new Map);o(this,"layerNameMap",new Map);o(this,"layerOpaqueIndexMap",new Map);o(this,"layerTransparentIndexMap",new Map);o(this,"subLayerList",[]);o(this,"subLayerEnabled",[]);o(this,"cameras",[]);o(this,"camerasSet",new Set);o(this,"_renderActions",[]);o(this,"_dirty",!1);this.name=e,this._opaqueOrder={},this._transparentOrder={}}markDirty(){this._dirty=!0}_update(){const e=this.layerList.length;if(!this._dirty){for(let i=0;i<e;i++)if(this.layerList[i]._dirtyComposition){this._dirty=!0;break}}if(this._dirty){this._dirty=!1,this.cameras.length=0,this.camerasSet.clear();for(let s=0;s<e;s++){const a=this.layerList[s];a._dirtyComposition=!1;for(let r=0;r<a.cameras.length;r++){const n=a.cameras[r];this.camerasSet.has(n.camera)||(this.camerasSet.add(n.camera),this.cameras.push(n))}}this.cameras.length>1&&q_(this.cameras);let i=0;this._renderActions.length=0;for(let s=0;s<this.cameras.length;s++){const a=this.cameras[s];if(a.camera.framePasses.length>0){this.addDummyRenderAction(i,a),i++;continue}let r=!0;const n=i;let l=null,d=!1;for(let f=0;f<e;f++){const h=this.layerList[f];if(h.enabled&&this.subLayerEnabled[f]&&h.cameras.length>0&&a.layers.indexOf(h.id)>=0){!d&&h.id===a.disablePostEffectsLayer&&(d=!0,l&&(l.triggerPostprocess=!0));const p=this.subLayerList[f];l=this.addRenderAction(i,h,p,a,r,d),i++,r=!1}}n<i&&(l.lastCameraUse=!0),!d&&l&&(l.triggerPostprocess=!0),a.renderTarget&&a.postEffectsEnabled&&this.propagateRenderTarget(n-1,a)}this._logRenderActions()}}getNextRenderAction(e){const i=new j_;return this._renderActions.push(i),i}addDummyRenderAction(e,i){const s=this.getNextRenderAction(e);s.camera=i,s.useCameraPasses=!0}addRenderAction(e,i,s,a,r,n){let l=i.id!==Ft?a.renderTarget:null,d=!1;const f=this._renderActions;for(let m=e-1;m>=0;m--)if(f[m].camera===a&&f[m].renderTarget===l){d=!0;break}n&&a.postEffectsEnabled&&(l=null);const h=this.getNextRenderAction(e);h.triggerPostprocess=!1,h.layer=i,h.transparent=s,h.camera=a,h.renderTarget=l,h.firstCameraUse=r,h.lastCameraUse=!1;const u=r||!d,p=i.clearColorBuffer||i.clearDepthBuffer||i.clearStencilBuffer;return(u||p)&&h.setupClears(u?a:void 0,i),h}propagateRenderTarget(e,i){for(let s=e;s>=0;s--){const a=this._renderActions[s],r=a.layer;if(a.renderTarget&&r.id!==Ft)break;if(r.id===Ft)continue;if(a.useCameraPasses)break;const n=a==null?void 0:a.camera.camera;if(n&&(!i.camera.rect.equals(n.rect)||!i.camera.scissorRect.equals(n.scissorRect)))break;a.renderTarget=i.renderTarget}}_logRenderActions(){}_isLayerAdded(e){return this.layerIdMap.get(e.id)===e}_isSublayerAdded(e,i){return(i?this.layerTransparentIndexMap:this.layerOpaqueIndexMap).get(e)!==void 0}push(e){this._isLayerAdded(e)||(this.layerList.push(e),this.layerList.push(e),this._opaqueOrder[e.id]=this.subLayerList.push(!1)-1,this._transparentOrder[e.id]=this.subLayerList.push(!0)-1,this.subLayerEnabled.push(!0),this.subLayerEnabled.push(!0),this._updateLayerMaps(),this._dirty=!0,this.fire("add",e))}insert(e,i){if(this._isLayerAdded(e))return;this.layerList.splice(i,0,e,e),this.subLayerList.splice(i,0,!1,!0);const s=this.layerList.length;this._updateOpaqueOrder(i,s-1),this._updateTransparentOrder(i,s-1),this.subLayerEnabled.splice(i,0,!0,!0),this._updateLayerMaps(),this._dirty=!0,this.fire("add",e)}remove(e){let i=this.layerList.indexOf(e);for(delete this._opaqueOrder[i],delete this._transparentOrder[i];i>=0;)this.layerList.splice(i,1),this.subLayerList.splice(i,1),this.subLayerEnabled.splice(i,1),i=this.layerList.indexOf(e),this._dirty=!0,this.fire("remove",e);const s=this.layerList.length;this._updateOpaqueOrder(0,s-1),this._updateTransparentOrder(0,s-1),this._updateLayerMaps()}pushOpaque(e){this._isSublayerAdded(e,!1)||(this.layerList.push(e),this._opaqueOrder[e.id]=this.subLayerList.push(!1)-1,this.subLayerEnabled.push(!0),this._updateLayerMaps(),this._dirty=!0,this.fire("add",e))}insertOpaque(e,i){if(this._isSublayerAdded(e,!1))return;this.layerList.splice(i,0,e),this.subLayerList.splice(i,0,!1);const s=this.subLayerList.length;this._updateOpaqueOrder(i,s-1),this.subLayerEnabled.splice(i,0,!0),this._updateLayerMaps(),this._dirty=!0,this.fire("add",e)}removeOpaque(e){for(let i=0,s=this.layerList.length;i<s;i++)if(this.layerList[i]===e&&!this.subLayerList[i]){this.layerList.splice(i,1),this.subLayerList.splice(i,1),s--,this._updateOpaqueOrder(i,s-1),this.subLayerEnabled.splice(i,1),this._dirty=!0,this.layerList.indexOf(e)<0&&this.fire("remove",e);break}this._updateLayerMaps()}pushTransparent(e){this._isSublayerAdded(e,!0)||(this.layerList.push(e),this._transparentOrder[e.id]=this.subLayerList.push(!0)-1,this.subLayerEnabled.push(!0),this._updateLayerMaps(),this._dirty=!0,this.fire("add",e))}insertTransparent(e,i){if(this._isSublayerAdded(e,!0))return;this.layerList.splice(i,0,e),this.subLayerList.splice(i,0,!0);const s=this.subLayerList.length;this._updateTransparentOrder(i,s-1),this.subLayerEnabled.splice(i,0,!0),this._updateLayerMaps(),this._dirty=!0,this.fire("add",e)}removeTransparent(e){for(let i=0,s=this.layerList.length;i<s;i++)if(this.layerList[i]===e&&this.subLayerList[i]){this.layerList.splice(i,1),this.subLayerList.splice(i,1),s--,this._updateTransparentOrder(i,s-1),this.subLayerEnabled.splice(i,1),this._dirty=!0,this.layerList.indexOf(e)<0&&this.fire("remove",e);break}this._updateLayerMaps()}getOpaqueIndex(e){return this.layerOpaqueIndexMap.get(e)??-1}getTransparentIndex(e){return this.layerTransparentIndexMap.get(e)??-1}isEnabled(e,i){if(e.enabled){const s=i?this.getTransparentIndex(e):this.getOpaqueIndex(e);if(s>=0)return this.subLayerEnabled[s]}return!1}isSubLayerRenderedByCamera(e,i){const s=this.layerList[e];return s.enabled&&this.subLayerEnabled[e]&&s.camerasSet.has(i)}_updateLayerMaps(){this.layerIdMap.clear(),this.layerNameMap.clear(),this.layerOpaqueIndexMap.clear(),this.layerTransparentIndexMap.clear();for(let e=0;e<this.layerList.length;e++){const i=this.layerList[e];this.layerIdMap.set(i.id,i),this.layerNameMap.set(i.name,i),(this.subLayerList[e]?this.layerTransparentIndexMap:this.layerOpaqueIndexMap).set(i,e)}}getLayerById(e){return this.layerIdMap.get(e)??null}getLayerByName(e){return this.layerNameMap.get(e)??null}_updateOpaqueOrder(e,i){for(let s=e;s<=i;s++)this.subLayerList[s]===!1&&(this._opaqueOrder[this.layerList[s].id]=s)}_updateTransparentOrder(e,i){for(let s=e;s<=i;s++)this.subLayerList[s]===!0&&(this._transparentOrder[this.layerList[s].id]=s)}_sortLayersDescending(e,i,s){let a=-1,r=-1;for(let n=0,l=e.length;n<l;n++){const d=e[n];s.hasOwnProperty(d)&&(a=Math.max(a,s[d]))}for(let n=0,l=i.length;n<l;n++){const d=i[n];s.hasOwnProperty(d)&&(r=Math.max(r,s[d]))}return a===-1&&r!==-1?1:r===-1&&a!==-1?-1:r-a}sortTransparentLayers(e,i){return this._sortLayersDescending(e,i,this._transparentOrder)}sortOpaqueLayers(e,i){return this._sortLayersDescending(e,i,this._opaqueOrder)}}class K_{constructor(t,e,i){o(this,"_areaLightsEnabled",!1);o(this,"_cells",new _(10,3,10));o(this,"_maxLightsPerCell",255);o(this,"_shadowsEnabled",!0);o(this,"_shadowType",io);o(this,"_shadowAtlasResolution",2048);o(this,"_cookiesEnabled",!1);o(this,"_cookieAtlasResolution",2048);o(this,"debugLayer");o(this,"atlasSplit",null);this._supportsAreaLights=t,this._maxTextureSize=e,this._dirtyLightsFnc=i}applySettings(t){this.shadowsEnabled=t.lightingShadowsEnabled??this.shadowsEnabled,this.cookiesEnabled=t.lightingCookiesEnabled??this.cookiesEnabled,this.areaLightsEnabled=t.lightingAreaLightsEnabled??this.areaLightsEnabled,this.shadowAtlasResolution=t.lightingShadowAtlasResolution??this.shadowAtlasResolution,this.cookieAtlasResolution=t.lightingCookieAtlasResolution??this.cookieAtlasResolution,this.maxLightsPerCell=t.lightingMaxLightsPerCell??this.maxLightsPerCell,this.shadowType=t.lightingShadowType??this.shadowType,t.lightingCells&&(this.cells=new _(t.lightingCells))}set cells(t){this._cells.copy(t)}get cells(){return this._cells}set maxLightsPerCell(t){this._maxLightsPerCell=I.clamp(t,1,255)}get maxLightsPerCell(){return this._maxLightsPerCell}set cookieAtlasResolution(t){this._cookieAtlasResolution=I.clamp(t,32,this._maxTextureSize)}get cookieAtlasResolution(){return this._cookieAtlasResolution}set shadowAtlasResolution(t){this._shadowAtlasResolution=I.clamp(t,32,this._maxTextureSize)}get shadowAtlasResolution(){return this._shadowAtlasResolution}set shadowType(t){this._shadowType!==t&&(this._shadowType=t,this._dirtyLightsFnc())}get shadowType(){return this._shadowType}set cookiesEnabled(t){this._cookiesEnabled!==t&&(this._cookiesEnabled=t,this._dirtyLightsFnc())}get cookiesEnabled(){return this._cookiesEnabled}set areaLightsEnabled(t){this._supportsAreaLights&&this._areaLightsEnabled!==t&&(this._areaLightsEnabled=t,this._dirtyLightsFnc())}get areaLightsEnabled(){return this._areaLightsEnabled}set shadowsEnabled(t){this._shadowsEnabled!==t&&(this._shadowsEnabled=t,this._dirtyLightsFnc())}get shadowsEnabled(){return this._shadowsEnabled}}class mo{constructor(t){this.morph=t,t.incRefCount(),this.device=t.device;const e=t._targets.length;this.shader=this._createShader(e),this._weights=[],this._weightMap=new Map;for(let r=0;r<t._targets.length;r++){const n=t._targets[r];n.name&&this._weightMap.set(n.name,r),this.setWeight(r,n.defaultWeight)}this._shaderMorphWeights=new Float32Array(e),this._shaderMorphIndex=new Uint32Array(e);const i=(r,n)=>(this[n]=t._createTexture(r,t._renderTextureFormat),new _t({colorBuffer:this[n],depth:!1}));t.morphPositions&&(this.rtPositions=i("MorphRTPos","texturePositions")),t.morphNormals&&(this.rtNormals=i("MorphRTNrm","textureNormals")),this._textureParams=new Float32Array([t.morphTextureWidth,t.morphTextureHeight]);const s=t.aabb.halfExtents;this._aabbSize=new Float32Array([s.x*4,s.y*4,s.z*4]);const a=t.aabb.getMin();this._aabbMin=new Float32Array([a.x*2,a.y*2,a.z*2]),this._aabbNrmSize=new Float32Array([2,2,2]),this._aabbNrmMin=new Float32Array([-1,-1,-1]),this.aabbSizeId=this.device.scope.resolve("aabbSize"),this.aabbMinId=this.device.scope.resolve("aabbMin"),this.morphTextureId=this.device.scope.resolve("morphTexture"),this.morphFactor=this.device.scope.resolve("morphFactor[0]"),this.morphIndex=this.device.scope.resolve("morphIndex[0]"),this.countId=this.device.scope.resolve("count"),this.zeroTextures=!1}destroy(){var e,i,s,a;this.shader=null;const t=this.morph;t&&(this.morph=null,t.decRefCount(),t.refCount<1&&t.destroy()),(e=this.rtPositions)==null||e.destroy(),this.rtPositions=null,(i=this.texturePositions)==null||i.destroy(),this.texturePositions=null,(s=this.rtNormals)==null||s.destroy(),this.rtNormals=null,(a=this.textureNormals)==null||a.destroy(),this.textureNormals=null}clone(){return new mo(this.morph)}_getWeightIndex(t){return typeof t=="string"?this._weightMap.get(t):t}getWeight(t){const e=this._getWeightIndex(t);return this._weights[e]}setWeight(t,e){const i=this._getWeightIndex(t);this._weights[i]=e,this._dirty=!0}_createShader(t){const e=new Map;e.set("{MORPH_TEXTURE_MAX_COUNT}",t),this.morph.intRenderFormat&&e.set("MORPH_INT","");const i=this.morph.intRenderFormat?"uvec4":"vec4";return zt.createShader(this.device,{uniqueName:`TextureMorphShader_${t}-${this.morph.intRenderFormat?"int":"float"}`,attributes:{vertex_position:ge},vertexChunk:"morphVS",fragmentChunk:"morphPS",fragmentDefines:e,fragmentOutputTypes:[i]})}_updateTextureRenderTarget(t,e,i){const{morph:s,device:a}=this;this.setAabbUniforms(i),this.morphTextureId.setValue(i?s.targetsTexturePositions:s.targetsTextureNormals),a.setBlendState(vt.NOBLEND),this.countId.setValue(e),this.morphFactor.setValue(this._shaderMorphWeights),this.morphIndex.setValue(this._shaderMorphIndex),Da(a,t,this.shader)}_updateTextureMorph(t){this.device,(t>0||!this.zeroTextures)&&(this.rtPositions&&this._updateTextureRenderTarget(this.rtPositions,t,!0),this.rtNormals&&this._updateTextureRenderTarget(this.rtNormals,t,!1),this.zeroTextures=t===0)}setAabbUniforms(t=!0){this.aabbSizeId.setValue(t?this._aabbSize:this._aabbNrmSize),this.aabbMinId.setValue(t?this._aabbMin:this._aabbNrmMin)}prepareRendering(t){this.setAabbUniforms()}update(){this._dirty=!1;const t=this.morph._targets,e=1e-5,i=this._shaderMorphWeights,s=this._shaderMorphIndex;let a=0;for(let r=0;r<t.length;r++)Math.abs(this.getWeight(r))>e&&(i[a]=this.getWeight(r),s[a]=r,a++);this._updateTextureMorph(a)}}class _o{constructor(){o(this,"graph",null);o(this,"meshInstances",[]);o(this,"skinInstances",[]);o(this,"morphInstances",[]);this.cameras=[],this.lights=[],this._shadersVersion=0,this._immutable=!1}getGraph(){return this.graph}setGraph(t){this.graph=t}getCameras(){return this.cameras}setCameras(t){this.cameras=t}getLights(){return this.lights}setLights(t){this.lights=t}getMaterials(){const t=[];for(let e=0;e<this.meshInstances.length;e++){const i=this.meshInstances[e];t.indexOf(i.material)===-1&&t.push(i.material)}return t}clone(){const t=[],e=[],i=function(d){const f=d.clone();t.push(d),e.push(f);for(let h=0;h<d._children.length;h++)f.addChild(i(d._children[h]));return f},s=i(this.graph),a=[],r=[],n=[];for(let d=0;d<this.skinInstances.length;d++){const f=this.skinInstances[d].skin,h=new Vm(f),u=[];for(let p=0;p<f.boneNames.length;p++){const m=f.boneNames[p],g=s.findByName(m);u.push(g)}h.bones=u,r.push(h)}for(let d=0;d<this.morphInstances.length;d++){const f=this.morphInstances[d].morph,h=new mo(f);n.push(h)}for(let d=0;d<this.meshInstances.length;d++){const f=this.meshInstances[d],h=t.indexOf(f.node),u=new Vt(f.mesh,f.material,e[h]);if(f.skinInstance){const p=this.skinInstances.indexOf(f.skinInstance);u.skinInstance=r[p]}if(f.morphInstance){const p=this.morphInstances.indexOf(f.morphInstance);u.morphInstance=n[p]}a.push(u)}const l=new _o;return l.graph=s,l.meshInstances=a,l.skinInstances=r,l.morphInstances=n,l.getGraph().syncHierarchy(),l}destroy(){const t=this.meshInstances;for(let e=0;e<t.length;e++)t[e].destroy();this.meshInstances.length=0}generateWireframe(){Vt._prepareRenderStyleForArray(this.meshInstances,jt)}}class Z_ extends Ls{generateKey(t){var f;const e=t.shaderDesc,i=e.vertexGLSL?$e(e.vertexGLSL):0,s=e.fragmentGLSL?$e(e.fragmentGLSL):0,a=e.vertexWGSL?$e(e.vertexWGSL):0,r=e.fragmentWGSL?$e(e.fragmentWGSL):0,n=Ls.definesHash(t.defines),l=((f=t.shaderChunks)==null?void 0:f.key)??"";let d=`${e.uniqueName}_${n}_${i}_${s}_${a}_${r}_${l}`;return t.skin&&(d+="_skin"),t.useInstancing&&(d+="_inst"),t.useMorphPosition&&(d+="_morphp"),t.useMorphNormal&&(d+="_morphn"),t.useMorphTextureBasedInt&&(d+="_morphi"),d}createAttributesDefinition(t,e){const i=e.shaderDesc.attributes,s=i?{...i}:void 0;e.skin&&(s.vertex_boneWeights=ri,s.vertex_boneIndices=ni),(e.useMorphPosition||e.useMorphNormal)&&(s.morph_vertex_id=vs),t.attributes=s}addSharedDefines(t,e){e.skin&&t.set("SKIN",!0),e.useInstancing&&t.set("INSTANCING",!0),(e.useMorphPosition||e.useMorphNormal)&&(t.set("MORPHING",!0),e.useMorphTextureBasedInt&&t.set("MORPHING_INT",!0),e.useMorphPosition&&t.set("MORPHING_POSITION",!0),e.useMorphNormal&&t.set("MORPHING_NORMAL",!0))}createVertexDefinition(t,e,i,s){const a=e.shaderDesc,r=new Map(i);r.set("transformInstancingVS","");const n=new Map(e.defines);this.addSharedDefines(n,e),t.vertexCode=s?a.vertexWGSL:a.vertexGLSL,t.vertexIncludes=r,t.vertexDefines=n}createFragmentDefinition(t,e,i,s){const a=e.shaderDesc,r=new Map(i),n=new Map(e.defines);this.addSharedDefines(n,e),t.fragmentCode=s?a.fragmentWGSL:a.fragmentGLSL,t.fragmentIncludes=r,t.fragmentDefines=n}createShaderDefinition(t,e){var l;const i=e.shaderDesc,s=t.isWebGPU&&!!i.vertexWGSL&&!!i.fragmentWGSL&&(((l=e.shaderChunks)==null?void 0:l.useWGSL)??!0),a={name:`ShaderMaterial-${i.uniqueName}`,shaderLanguage:s?ue:ae,fragmentOutputTypes:i.fragmentOutputTypes,meshUniformBufferFormat:i.meshUniformBufferFormat,meshBindGroupFormat:i.meshBindGroupFormat},r=s?ue:ae,n=La.merge(ne.get(t,r),e.shaderChunks[r]);return this.createAttributesDefinition(a,e),this.createVertexDefinition(a,e,n,s),this.createFragmentDefinition(a,e,n,s),_e.createDefinition(t,a)}}const J_=new Z_;class Ps extends zi{constructor(e){super();o(this,"_shaderDesc");this.shaderDesc=e}set shaderDesc(e){if(this._shaderDesc=void 0,e&&(this._shaderDesc={uniqueName:e.uniqueName,attributes:e.attributes,fragmentOutputTypes:e.fragmentOutputTypes,vertexGLSL:e.vertexGLSL,fragmentGLSL:e.fragmentGLSL,vertexWGSL:e.vertexWGSL,fragmentWGSL:e.fragmentWGSL},e.vertexCode||e.fragmentCode||e.shaderLanguage)){const i=e.shaderLanguage??ae;i===ae?(this._shaderDesc.vertexGLSL=e.vertexCode,this._shaderDesc.fragmentGLSL=e.fragmentCode):i===ue&&(this._shaderDesc.vertexWGSL=e.vertexCode,this._shaderDesc.fragmentWGSL=e.fragmentCode)}this.clearVariants()}get shaderDesc(){return this._shaderDesc}copy(e){return super.copy(e),this.shaderDesc=e.shaderDesc,this}getShaderVariant(e){const{objDefs:i}=e,s={defines:zt.getCoreDefines(this,e),skin:(i&Es)!==0,useInstancing:(i&ys)!==0,useMorphPosition:(i&xs)!==0,useMorphNormal:(i&Cs)!==0,useMorphTextureBasedInt:(i&As)!==0,pass:e.pass,gamma:e.cameraShaderParams.shaderOutputGamma,toneMapping:e.cameraShaderParams.toneMapping,fog:e.cameraShaderParams.fog,shaderDesc:this.shaderDesc,shaderChunks:this.shaderChunks},a=new fo(e.viewUniformFormat,e.vertexFormat),r=ws(e.device);return r.register("shader-material",J_),r.getProgram("shader-material",s,a,this.userId)}}var Q_=`
uniform highp {sampler} {name};
{returnType} load{funcName}() { return texelFetch({name}, splat.uv, 0); }
{returnType} load{funcName}WithIndex(uint index) { return texelFetch({name}, ivec2(index % splatTextureSize, index / splatTextureSize), 0); }
`,eg=`
var {name}: {textureType};
fn load{funcName}() -> {returnType} { return textureLoad({name}, splat.uv, 0); }
fn load{funcName}WithIndex(index: u32) -> {returnType} { return textureLoad({name}, vec2i(i32(index % uniform.splatTextureSize), i32(index / uniform.splatTextureSize)), 0); }
`,tg=`
@group(0) @binding({binding}) var {name}: {textureType};
fn load{funcName}() -> {returnType} { return textureLoad({name}, splat.uv, 0); }
fn load{funcName}WithIndex(index: u32) -> {returnType} { return textureLoad({name}, vec2i(i32(index % uniforms.splatTextureSize), i32(index / uniforms.splatTextureSize)), 0); }
`,jl=`
void write{funcName}({returnType} value) {
#if {defineGuard}
	pcFragColor{index} = value;
#endif
}
`,Kl=`
fn write{funcName}(value: {returnType}) {
#if {defineGuard}
	processOutput.{colorSlot} = value;
#endif
}
`,ig=`
vec3 getCenter() { return loadDataCenter().xyz; }
vec4 getColor() { return loadDataColor(); }
vec3 getScale() { return loadDataScale().xyz; }
vec4 getRotation() { return loadDataRotation(); }
`,sg=`
fn getCenter() -> vec3f { return loadDataCenter().xyz; }
fn getColor() -> vec4f { return loadDataColor(); }
fn getScale() -> vec3f { return loadDataScale().xyz; }
fn getRotation() -> vec4f { return loadDataRotation(); }
`,ag=`
	vec3 getCenter() { return loadDataCenter().xyz; }
	vec4 getColor() { return loadDataColor(); }
	vec3 getScale() { return vec3(loadDataCenter().w); }
	vec4 getRotation() { return vec4(0.0, 0.0, 0.0, 1.0); }
`,rg=`
	fn getCenter() -> vec3f { return loadDataCenter().xyz; }
	fn getColor() -> vec4f { return loadDataColor(); }
	fn getScale() -> vec3f { return vec3f(loadDataCenter().w); }
	fn getRotation() -> vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }
`;const Zl=c=>c.map(t=>`${t.name}:${t.format}:${t.storage}`).join(","),Jl=/\{name\}/g,ng=/\{sampler\}/g,Ql=/\{textureType\}/g,ia=/\{returnType\}/g,sa=/\{funcName\}/g,og=/\{binding\}/g,lg=/\{index\}/g,cg=/\{colorSlot\}/g,ec=/\{defineGuard\}/g;class Is{constructor(t,e,i){o(this,"_device");o(this,"streams");o(this,"_read");o(this,"allowStreamRemoval",!1);o(this,"dataFormat",null);o(this,"_extraStreams",[]);o(this,"_streamNames",new Set);o(this,"_extraStreamsVersion",0);o(this,"_hash");o(this,"_resourceStreams",null);o(this,"_instanceStreams",null);this._device=t,this.streams=[...e],this._streamNames=new Set(this.streams.map(a=>a.name));const s=t.isWebGPU;this._read=s?i.readWGSL:i.readGLSL}get hash(){if(this._hash===void 0){const t=Zl(this.streams),e=Zl(this._extraStreams);this._hash=$e(t+e+this._read)}return this._hash}get extraStreamsVersion(){return this._extraStreamsVersion}get extraStreams(){return this._extraStreams}get resourceStreams(){return this._resourceStreams===null&&(this._resourceStreams=[...this.streams.filter(t=>t.storage!==ur),...this._extraStreams.filter(t=>t.storage!==ur)]),this._resourceStreams}get instanceStreams(){return this._instanceStreams===null&&(this._instanceStreams=this._extraStreams.filter(t=>t.storage===ur)),this._instanceStreams}addExtraStreams(t){if(!t||t.length===0)return;let e=!1;for(const i of t)this._streamNames.has(i.name)||(this._extraStreams.push({name:i.name,format:i.format,storage:i.storage??Im}),this._streamNames.add(i.name),e=!0);e&&(this._extraStreamsVersion++,this._invalidateCaches())}removeExtraStreams(t){if(!this.allowStreamRemoval)return;let e=!1;for(const i of t){const s=this._extraStreams.findIndex(a=>a.name===i);s!==-1&&(this._extraStreams.splice(s,1),this._streamNames.delete(i),e=!0)}e&&(this._extraStreamsVersion++,this._invalidateCaches())}getInputDeclarations(t){const e=this._device.isWebGPU,i=e?eg:Q_,s=e?ks:Qa,a=[];let r=[...this.streams,...this._extraStreams];t&&(r=r.filter(n=>t.includes(n.name)));for(const n of r){const l=s(n.format),d=n.name.charAt(0).toUpperCase()+n.name.slice(1);let f=l.textureType??"";e&&n.format===at&&(f="texture_2d<uff>");const h=i.replace(Jl,n.name).replace(ng,l.sampler??"").replace(Ql,f).replace(ia,l.returnType).replace(sa,d);a.push(h)}return a.join(`
`)}getReadCode(){return this._read}getComputeInputDeclarations(t,e){const i=[];let s=[...this.streams,...this._extraStreams];e&&(s=s.filter(a=>e.includes(a.name)));for(let a=0;a<s.length;a++){const r=s[a],n=ks(r.format),l=r.name.charAt(0).toUpperCase()+r.name.slice(1);let d=n.textureType??"";r.format===at&&(d="texture_2d<uff>");const f=tg.replace(og,String(t+a)).replace(Jl,r.name).replace(Ql,d).replace(ia,n.returnType).replace(sa,l);i.push(f)}return i.join(`
`)}getComputeBindFormats(t){let e=[...this.streams,...this._extraStreams];return t&&(e=e.filter(i=>t.includes(i.name))),e.map(i=>{const s=Re.get(i.format);let a=Sd;return s!=null&&s.isUint?a=Tu:s!=null&&s.isInt&&(a=Su),new hn(i.name,Nd,void 0,a,!1)})}setWriteCode(t,e){this._write=this._device.isWebGPU?e:t}getWriteCode(){return this._write}getOutputDeclarations(t){const e=this._device.isWebGPU,i=[],s=e?Kl:jl,a=e?ks:Qa;for(let r=0;r<t.length;r++){const n=t[r],l=a(n.format),d=n.name.charAt(0).toUpperCase()+n.name.slice(1),f=r===0?"color":`color${r}`,h=s.replace(sa,d).replace(ia,l.returnType).replace(lg,String(r)).replace(cg,f).replace(ec,"1");i.push(h)}return i.join(`
`)}getOutputStubs(t){const e=this._device.isWebGPU,i=[],s=e?Kl:jl,a=e?ks:Qa;for(const r of t){const n=a(r.format),l=r.name.charAt(0).toUpperCase()+r.name.slice(1),d=s.replace(sa,l).replace(ia,n.returnType).replace(ec,"0");i.push(d)}return i.join(`
`)}getStream(t){let e=this.streams.find(i=>i.name===t);return e||(e=this._extraStreams.find(i=>i.name===t)),e}_invalidateCaches(){this._hash=void 0,this._resourceStreams=null,this._instanceStreams=null}static createDefaultFormat(t){return new Is(t,[{name:"dataColor",format:Ue},{name:"dataCenter",format:at},{name:"dataScale",format:Ue},{name:"dataRotation",format:Ue}],{readGLSL:ig,readWGSL:sg})}static createSimpleFormat(t){return new Is(t,[{name:"dataCenter",format:at},{name:"dataColor",format:Ue}],{readGLSL:ag,readWGSL:rg})}}const tc=8;var dg=`
flat varying {type} user_{name};
void set{funcName}({type} value) { user_{name} = value; }
`,hg=`
flat varying {type} user_{name};
{type} get{funcName}() { return user_{name}; }
`,fg=`
varying @interpolate(flat) user_{name}: {type};
var<private> _user_{name}: {type};
fn set{funcName}(value: {type}) { _user_{name} = value; }
`,ug=`
output.user_{name} = _user_{name};
`,pg=`
var<private> _user_{name}: {type};
fn set{funcName}(value: {type}) { _user_{name} = value; }
`,mg=`
varying @interpolate(flat) user_{name}: {type};
fn get{funcName}() -> {type} { return user_{name}; }
`,_g=`
projCache[base + {word}u] = {value};
`,gg=`
output.user_{name} = {value};
`;const vg={[Ye]:["float","vec2","vec3","vec4"],[kn]:["int","ivec2","ivec3","ivec4"],[ka]:["uint","uvec2","uvec3","uvec4"]},Sg={[Ye]:["f32","vec2f","vec3f","vec4f"],[kn]:["i32","vec2i","vec3i","vec4i"],[ka]:["u32","vec2u","vec3u","vec4u"]},Tg=["x","y","z","w"],ic=/\{name\}/g,Eg=/\{type\}/g,yg=/\{funcName\}/g,xg=/\{word\}/g,sc=/\{value\}/g,Cg=["gsplatUserVaryingsVS","gsplatUserVaryingsPS"],Ag=["gsplatUserVaryingsVS","gsplatUserVaryingsFlushVS","gsplatUserVaryingsCS","gsplatUserVaryingsPS","gsplatUserCacheWriteCS","gsplatUserCacheReadVS"],wg=c=>c.charAt(0).toUpperCase()+c.slice(1),Lg=(c,t)=>c===ka?t:`bitcast<u32>(${t})`,Dg=(c,t)=>c===ka?t:c===kn?`bitcast<i32>(${t})`:`bitcast<f32>(${t})`;class Pg{constructor(t){o(this,"_device");o(this,"_streams",[]);o(this,"_words",0);o(this,"_version",0);this._device=t}get streams(){return this._streams}get words(){return this._words}get version(){return this._version}add(t){for(const e of t)this._streams.push({name:e.name,type:e.type,components:e.components});this._changed()}remove(t){const e=this._streams.length;this._streams=this._streams.filter(i=>!t.includes(i.name)),this._streams.length!==e&&this._changed()}_changed(){this._words=this._streams.reduce((t,e)=>t+e.components,0),this._version++}_generateChunks(){const t=this._device.isWebGPU,e=t?Sg:vg,i=t?fg:dg,s=t?mg:hg,a=[],r=[],n=[],l=[],d=[],f=[];let h=0;for(const p of this._streams){const{name:m,type:g,components:v}=p,E=e[g][v-1],S=wg(m),T=y=>y.replace(ic,m).replace(Eg,E).replace(yg,S);if(a.push(T(i)),r.push(T(s)),t){n.push(T(ug)),l.push(T(pg));const y=[];for(let C=0;C<v;C++){const x=v===1?`_user_${m}`:`_user_${m}.${Tg[C]}`;d.push(_g.replace(xg,String(tc+h+C)).replace(sc,Lg(g,x))),y.push(Dg(g,`projCache[base + ${tc+h+C}u]`))}f.push(gg.replace(ic,m).replace(sc,v===1?y[0]:`${E}(${y.join(", ")})`))}h+=v}const u={gsplatUserVaryingsVS:a.join(""),gsplatUserVaryingsPS:r.join("")};return t&&(u.gsplatUserVaryingsFlushVS=n.join(""),u.gsplatUserVaryingsCS=l.join(""),u.gsplatUserCacheWriteCS=d.join(""),u.gsplatUserCacheReadVS=f.join("")),u}apply(t){const e=this._device.isWebGPU,i=t.getShaderChunks(e?ue:ae);if(t.setDefine("GSPLAT_USER_VARYINGS",this._streams.length>0),this._streams.length>0){const s=this._generateChunks();for(const a in s)i.set(a,s[a])}else(e?Ag:Cg).forEach(a=>i.delete(a));t.update()}}var Ig=`
uvec4 cachedTransformA;
vec3 getCenter() {
	cachedTransformA = loadDataTransformA();
	return vec3(uintBitsToFloat(cachedTransformA.r), uintBitsToFloat(cachedTransformA.g), uintBitsToFloat(cachedTransformA.b));
}
float getOpacity() {
	return float(cachedTransformA.a >> 24u) / 255.0;
}
vec3 getColor() {
	uint data = loadDataColor().x;
	float r = float(data & 0x7FFu) * (4.0 / 2047.0);
	float g = float((data >> 11u) & 0x7FFu) * (4.0 / 2047.0);
	float b = float((data >> 22u) & 0x3FFu) * (4.0 / 1023.0);
	return vec3(r, g, b);
}
vec4 getRotation() {
	uint data = loadDataTransformB().x;
	vec3 p = vec3(
		float(data & 0x7FFu) / 2047.0 * 2.0 - 1.0,
		float((data >> 11u) & 0x7FFu) / 2047.0 * 2.0 - 1.0,
		float((data >> 22u) & 0x3FFu) / 1023.0 * 2.0 - 1.0
	);
	float d = dot(p, p);
	return vec4(1.0 - d, sqrt(max(0.0, 2.0 - d)) * p);
}
vec3 getScale() {
	uint data = cachedTransformA.a;
	float sx = float(data & 0xFFu);
	float sy = float((data >> 8u) & 0xFFu);
	float sz = float((data >> 16u) & 0xFFu);
	const float logRange = 21.0 / 255.0;
	const float logMin = -12.0;
	return vec3(
		sx == 0.0 ? 0.0 : exp(sx * logRange + logMin),
		sy == 0.0 ? 0.0 : exp(sy * logRange + logMin),
		sz == 0.0 ? 0.0 : exp(sz * logRange + logMin)
	);
}
`,bg=`
void writeSplat(vec3 center, vec4 rotation, vec3 scale, vec4 color) {
	vec3 rgb = clamp(color.rgb, 0.0, 4.0);
	uint rBits = uint(rgb.r * (2047.0 / 4.0) + 0.5);
	uint gBits = uint(rgb.g * (2047.0 / 4.0) + 0.5);
	uint bBits = uint(rgb.b * (1023.0 / 4.0) + 0.5);
	writeDataColor(uvec4(rBits | (gBits << 11u) | (bBits << 22u), 0u, 0u, 0u));
	#ifndef GSPLAT_COLOR_ONLY
		vec4 q = rotation;
		if (q.w < 0.0) q = -q;
		vec3 p = q.xyz * inversesqrt(1.0 + q.w);
		uint aBitsQ = uint(clamp((p.x * 0.5 + 0.5) * 2047.0 + 0.5, 0.0, 2047.0));
		uint bBitsQ = uint(clamp((p.y * 0.5 + 0.5) * 2047.0 + 0.5, 0.0, 2047.0));
		uint cBitsQ = uint(clamp((p.z * 0.5 + 0.5) * 1023.0 + 0.5, 0.0, 1023.0));
		uint packedQuat = aBitsQ | (bBitsQ << 11u) | (cBitsQ << 22u);
		const float invLogRange = 255.0 / 21.0;
		const float logMin = -12.0;
		uint sxBits = scale.x < 1e-10 ? 0u : uint(clamp((log(scale.x) - logMin) * invLogRange + 0.5, 1.0, 255.0));
		uint syBits = scale.y < 1e-10 ? 0u : uint(clamp((log(scale.y) - logMin) * invLogRange + 0.5, 1.0, 255.0));
		uint szBits = scale.z < 1e-10 ? 0u : uint(clamp((log(scale.z) - logMin) * invLogRange + 0.5, 1.0, 255.0));
		uint alphaBits = uint(clamp(color.a, 0.0, 1.0) * 255.0 + 0.5);
		uint packedScaleAlpha = sxBits | (syBits << 8u) | (szBits << 16u) | (alphaBits << 24u);
		writeDataTransformA(uvec4(floatBitsToUint(center.x), floatBitsToUint(center.y), floatBitsToUint(center.z), packedScaleAlpha));
		writeDataTransformB(uvec4(packedQuat, 0u, 0u, 0u));
	#endif
}
`,Rg=`
uvec4 cachedTransformA;
uvec2 cachedTransformB;
vec4 cachedColor;
vec3 getCenter() {
	cachedTransformA = loadDataTransformA();
	cachedTransformB = loadDataTransformB().xy;
	return vec3(uintBitsToFloat(cachedTransformA.r), uintBitsToFloat(cachedTransformA.g), uintBitsToFloat(cachedTransformA.b));
}
float getOpacity() {
	#ifdef GSPLAT_COLOR_FLOAT
		cachedColor = loadDataColor();
	#else
		uvec4 packedColor = loadDataColor();
		uint packed_rg = packedColor.r | (packedColor.g << 16u);
		uint packed_ba = packedColor.b | (packedColor.a << 16u);
		cachedColor = vec4(unpackHalf2x16(packed_rg), unpackHalf2x16(packed_ba));
	#endif
	return cachedColor.a;
}
vec3 getColor() {
	return cachedColor.rgb;
}
vec4 getRotation() {
	vec2 rotXY = unpackHalf2x16(cachedTransformA.a);
	vec2 rotZscaleX = unpackHalf2x16(cachedTransformB.x);
	vec3 rotXYZ = vec3(rotXY, rotZscaleX.x);
	return vec4(rotXYZ, sqrt(max(0.0, 1.0 - dot(rotXYZ, rotXYZ)))).wxyz;
}
vec3 getScale() {
	vec2 rotZscaleX = unpackHalf2x16(cachedTransformB.x);
	vec2 scaleYZ = unpackHalf2x16(cachedTransformB.y);
	return vec3(rotZscaleX.y, scaleYZ);
}
`,Mg=`
void writeSplat(vec3 center, vec4 rotation, vec3 scale, vec4 color) {
	#ifdef GSPLAT_COLOR_UINT
		uint packed_rg = packHalf2x16(color.rg);
		uint packed_ba = packHalf2x16(color.ba);
		writeDataColor(uvec4(
			packed_rg & 0xFFFFu,
			packed_rg >> 16u,
			packed_ba & 0xFFFFu,
			packed_ba >> 16u
		));
	#else
		writeDataColor(color);
	#endif
	#ifndef GSPLAT_COLOR_ONLY
		writeDataTransformA(uvec4(floatBitsToUint(center.x), floatBitsToUint(center.y), floatBitsToUint(center.z), packHalf2x16(rotation.xy)));
		writeDataTransformB(uvec4(packHalf2x16(vec2(rotation.z, scale.x)), packHalf2x16(scale.yz), 0u, 0u));
	#endif
}
`,Ng=`
var<private> cachedTransformA: vec4u;
fn getCenter() -> vec3f {
	cachedTransformA = loadDataTransformA();
	return vec3f(bitcast<f32>(cachedTransformA.r), bitcast<f32>(cachedTransformA.g), bitcast<f32>(cachedTransformA.b));
}
fn getOpacity() -> f32 {
	return f32(cachedTransformA.a >> 24u) / 255.0;
}
fn getColor() -> vec3f {
	let data = loadDataColor().x;
	let r = f32(data & 0x7FFu) * (4.0 / 2047.0);
	let g = f32((data >> 11u) & 0x7FFu) * (4.0 / 2047.0);
	let b = f32((data >> 22u) & 0x3FFu) * (4.0 / 1023.0);
	return vec3f(r, g, b);
}
fn getRotation() -> vec4f {
	let data = loadDataTransformB().x;
	let p = vec3f(
		f32(data & 0x7FFu) / 2047.0 * 2.0 - 1.0,
		f32((data >> 11u) & 0x7FFu) / 2047.0 * 2.0 - 1.0,
		f32((data >> 22u) & 0x3FFu) / 1023.0 * 2.0 - 1.0
	);
	let d = dot(p, p);
	return vec4f(1.0 - d, sqrt(max(0.0, 2.0 - d)) * p);
}
fn getScale() -> vec3f {
	let data = cachedTransformA.a;
	let sx = f32(data & 0xFFu);
	let sy = f32((data >> 8u) & 0xFFu);
	let sz = f32((data >> 16u) & 0xFFu);
	let logRange = 21.0 / 255.0;
	let logMin = -12.0;
	return vec3f(
		select(exp(sx * logRange + logMin), 0.0, sx == 0.0),
		select(exp(sy * logRange + logMin), 0.0, sy == 0.0),
		select(exp(sz * logRange + logMin), 0.0, sz == 0.0)
	);
}
`,Og=`
fn writeSplat(center: vec3f, rotation: vec4f, scale: vec3f, color: vec4f) {
	let rgb = clamp(color.rgb, vec3f(0.0), vec3f(4.0));
	let rBits = u32(rgb.r * (2047.0 / 4.0) + 0.5);
	let gBits = u32(rgb.g * (2047.0 / 4.0) + 0.5);
	let bBits = u32(rgb.b * (1023.0 / 4.0) + 0.5);
	writeDataColor(vec4u(rBits | (gBits << 11u) | (bBits << 22u), 0u, 0u, 0u));
	#ifndef GSPLAT_COLOR_ONLY
		var q = rotation;
		if (q.w < 0.0) { q = -q; }
		let p = q.xyz * inverseSqrt(1.0 + q.w);
		let aBitsQ = u32(clamp(p.x * 0.5 + 0.5, 0.0, 1.0) * 2047.0 + 0.5);
		let bBitsQ = u32(clamp(p.y * 0.5 + 0.5, 0.0, 1.0) * 2047.0 + 0.5);
		let cBitsQ = u32(clamp(p.z * 0.5 + 0.5, 0.0, 1.0) * 1023.0 + 0.5);
		let packedQuat = aBitsQ | (bBitsQ << 11u) | (cBitsQ << 22u);
		let invLogRange = 255.0 / 21.0;
		let logMin = -12.0;
		let sxBits = select(u32(clamp((log(scale.x) - logMin) * invLogRange + 0.5, 1.0, 255.0)), 0u, scale.x < 1e-10);
		let syBits = select(u32(clamp((log(scale.y) - logMin) * invLogRange + 0.5, 1.0, 255.0)), 0u, scale.y < 1e-10);
		let szBits = select(u32(clamp((log(scale.z) - logMin) * invLogRange + 0.5, 1.0, 255.0)), 0u, scale.z < 1e-10);
		let alphaBits = u32(clamp(color.a, 0.0, 1.0) * 255.0 + 0.5);
		let packedScaleAlpha = sxBits | (syBits << 8u) | (szBits << 16u) | (alphaBits << 24u);
		writeDataTransformA(vec4u(bitcast<u32>(center.x), bitcast<u32>(center.y), bitcast<u32>(center.z), packedScaleAlpha));
		writeDataTransformB(vec4u(packedQuat, 0u, 0u, 0u));
	#endif
}
`,Fg=`
var<private> cachedTransformA: vec4u;
var<private> cachedTransformB: vec2u;
var<private> cachedColor: vec4f;
fn getCenter() -> vec3f {
	cachedTransformA = loadDataTransformA();
	cachedTransformB = loadDataTransformB().xy;
	return vec3f(bitcast<f32>(cachedTransformA.r), bitcast<f32>(cachedTransformA.g), bitcast<f32>(cachedTransformA.b));
}
fn getOpacity() -> f32 {
	#ifdef GSPLAT_COLOR_FLOAT
		cachedColor = loadDataColor();
	#else
		let packedColor = loadDataColor();
		let packed_rg = packedColor.r | (packedColor.g << 16u);
		let packed_ba = packedColor.b | (packedColor.a << 16u);
		cachedColor = vec4f(unpack2x16float(packed_rg), unpack2x16float(packed_ba));
	#endif
	return cachedColor.a;
}
fn getColor() -> vec3f {
	return cachedColor.rgb;
}
fn getRotation() -> vec4f {
	let rotXY = unpack2x16float(cachedTransformA.a);
	let rotZscaleX = unpack2x16float(cachedTransformB.x);
	let rotXYZ = vec3f(rotXY, rotZscaleX.x);
	return vec4f(rotXYZ, sqrt(max(0.0, 1.0 - dot(rotXYZ, rotXYZ)))).wxyz;
}
fn getScale() -> vec3f {
	let rotZscaleX = unpack2x16float(cachedTransformB.x);
	let scaleYZ = unpack2x16float(cachedTransformB.y);
	return vec3f(rotZscaleX.y, scaleYZ);
}
`,Ug=`
fn writeSplat(center: vec3f, rotation: vec4f, scale: vec3f, color: vec4f) {
	writeDataColor(color);
	#ifndef GSPLAT_COLOR_ONLY
		writeDataTransformA(vec4u(bitcast<u32>(center.x), bitcast<u32>(center.y), bitcast<u32>(center.z), pack2x16float(rotation.xy)));
		writeDataTransformB(vec4u(pack2x16float(vec2f(rotation.z, scale.x)), pack2x16float(scale.yz), 0u, 0u));
	#endif
}
`;class Bg{constructor(t){o(this,"_material",new Ps);o(this,"_format");o(this,"_device");o(this,"_dataFormat",pr);o(this,"radialSorting",!1);o(this,"_renderer",mr);o(this,"_currentRenderer",_r);o(this,"dirty",!1);o(this,"_debug",Wi);o(this,"_enableIds",!1);o(this,"lodUpdateDistance",1);o(this,"lodUpdateAngle",0);o(this,"_lodBehindPenalty",1);o(this,"_lodUnderfillLimit",0);o(this,"_splatBudget",0);o(this,"_colorRamp",null);o(this,"colorRampIntensity",1);o(this,"useFog",!0);o(this,"colorUpdateAngle",10);o(this,"_fisheye",0);o(this,"cooldownTicks",100);o(this,"_varyings");o(this,"_appliedVaryingsVersion",0);this._device=t,this._currentRenderer=this._resolveRenderer(this._renderer),this._format=this._createFormat(pr),this._varyings=new Pg(t),this._material.setParameter("alphaClip",.3),this._material.setParameter("alphaClipForward",1/255),this._material.setParameter("minPixelSize",2),this._material.setParameter("minContribution",3),this._material.setParameter("foveationStrength",0),this._material.setParameter("foveationCenter",.3)}_createFormat(t){let e;if(t===pr)e=new Is(this._device,[{name:"dataColor",format:hs},{name:"dataTransformA",format:ma},{name:"dataTransformB",format:hs}],{readGLSL:Ig,readWGSL:Ng}),e.setWriteCode(bg,Og);else{const i=this._device.getRenderableHdrFormat([Ue])||Nn;e=new Is(this._device,[{name:"dataColor",format:i},{name:"dataTransformA",format:ma},{name:"dataTransformB",format:Mn}],{readGLSL:Rg,readWGSL:Fg}),e.setWriteCode(Mg,Ug)}return e.allowStreamRemoval=!0,e.dataFormat=t,e}_resolveRenderer(t){return t===mr?this._device.isWebGPU?pl:_r:t===pl&&!this._device.isWebGPU?_r:t}set renderer(t){t===bm&&(t=mr),this._renderer!==t&&(this._renderer=t,this._currentRenderer=this._resolveRenderer(t))}get renderer(){return this._renderer}get currentRenderer(){return this._currentRenderer}set debug(t){if(t!==Rm&&this._debug!==t){const e=this._debug;this._debug=t,(t===Gs||e===Gs)&&(this.dirty=!0)}}get debug(){return this._debug}set colorizeLod(t){this.debug=t?Gs:Wi}get colorizeLod(){return this._debug===Gs}set debugAabbs(t){this.debug=t?_l:Wi}get debugAabbs(){return this._debug===_l}set debugNodeAabbs(t){this.debug=t?gl:Wi}get debugNodeAabbs(){return this._debug===gl}set enableIds(t){t&&!this._enableIds?(this._enableIds=!0,this._format.getStream("pcId")||this._format.addExtraStreams([{name:"pcId",format:hs}])):!t&&this._enableIds&&(this._enableIds=!1,this._format.removeExtraStreams(["pcId"]))}get enableIds(){return this._enableIds}set lodBehindPenalty(t){this._lodBehindPenalty!==t&&(this._lodBehindPenalty=t,this.dirty=!0)}get lodBehindPenalty(){return this._lodBehindPenalty}set lodRangeMin(t){}get lodRangeMin(){return 0}set lodRangeMax(t){}get lodRangeMax(){return 99}set lodUnderfillLimit(t){this._lodUnderfillLimit!==t&&(this._lodUnderfillLimit=t,this.dirty=!0)}get lodUnderfillLimit(){return this._lodUnderfillLimit}set splatBudget(t){this._splatBudget!==t&&(this._splatBudget=t,this.dirty=!0)}get splatBudget(){return this._splatBudget}set colorRamp(t){this._colorRamp!==t&&(this._colorRamp=t,this.dirty=!0)}get colorRamp(){return this._colorRamp}set colorizeColorUpdate(t){this.debug=t?ml:Wi}get colorizeColorUpdate(){return this._debug===ml}set colorUpdateDistance(t){}get colorUpdateDistance(){return 0}set colorUpdateDistanceLodScale(t){}get colorUpdateDistanceLodScale(){return 0}set colorUpdateAngleLodScale(t){}get colorUpdateAngleLodScale(){return 0}set alphaClip(t){this._material.setParameter("alphaClip",t),this._material.update()}get alphaClip(){var t;return((t=this._material.getParameter("alphaClip"))==null?void 0:t.data)??.3}set alphaClipForward(t){this._material.setParameter("alphaClipForward",t),this._material.update()}get alphaClipForward(){var t;return((t=this._material.getParameter("alphaClipForward"))==null?void 0:t.data)??1/255}set minPixelSize(t){this._material.setParameter("minPixelSize",t),this._material.update()}get minPixelSize(){var t;return((t=this._material.getParameter("minPixelSize"))==null?void 0:t.data)??2}set minContribution(t){this._material.setParameter("minContribution",t),this._material.update()}get minContribution(){var t;return((t=this._material.getParameter("minContribution"))==null?void 0:t.data)??3}set foveationStrength(t){this._material.setParameter("foveationStrength",t),this._material.update()}get foveationStrength(){var t;return((t=this._material.getParameter("foveationStrength"))==null?void 0:t.data)??0}set foveationCenter(t){this._material.setParameter("foveationCenter",t),this._material.update()}get foveationCenter(){var t;return((t=this._material.getParameter("foveationCenter"))==null?void 0:t.data)??.3}set antiAlias(t){this._material.setDefine("GSPLAT_AA",t),this._material.update()}get antiAlias(){return!!this._material.getDefine("GSPLAT_AA")}set twoDimensional(t){this._material.setDefine("GSPLAT_2DGS",t),this._material.update()}get twoDimensional(){return!!this._material.getDefine("GSPLAT_2DGS")}set fisheye(t){if(this._fisheye!==t){const e=this._fisheye>0;this._fisheye=t;const i=t>0;e!==i&&(this._material.setDefine("GSPLAT_FISHEYE",i),this._material.update())}}get fisheye(){return this._fisheye}set dataFormat(t){if(this._dataFormat!==t){this._dataFormat=t;const e=this._format.extraStreams.map(i=>({name:i.name,format:i.format,storage:i.storage}));this._format=this._createFormat(t),e.length>0&&this._format.addExtraStreams(e),this.dirty=!0}}get dataFormat(){return this._dataFormat}get material(){return this._material}get format(){return this._format}get varyings(){return this._varyings}applySettings(t){this.radialSorting=t.gsplatRadialSorting??this.radialSorting,this.lodUpdateDistance=t.gsplatLodUpdateDistance??this.lodUpdateDistance,this.lodUpdateAngle=t.gsplatLodUpdateAngle??this.lodUpdateAngle,this.lodBehindPenalty=t.gsplatLodBehindPenalty??this.lodBehindPenalty,this.lodUnderfillLimit=t.gsplatLodUnderfillLimit??this.lodUnderfillLimit,this.splatBudget=t.gsplatSplatBudget??this.splatBudget,this.alphaClip=t.gsplatAlphaClip??this.alphaClip,this.alphaClipForward=t.gsplatAlphaClipForward??this.alphaClipForward,this.minPixelSize=t.gsplatMinPixelSize??this.minPixelSize,this.minContribution=t.gsplatMinContribution??this.minContribution,this.foveationStrength=t.gsplatFoveationStrength??this.foveationStrength,this.foveationCenter=t.gsplatFoveationCenter??this.foveationCenter,this.antiAlias=t.gsplatAntiAlias??this.antiAlias,this.useFog=t.gsplatUseFog??this.useFog,this.colorUpdateAngle=t.gsplatColorUpdateAngle??this.colorUpdateAngle,this.cooldownTicks=t.gsplatCooldownTicks??this.cooldownTicks,this.dataFormat=t.gsplatDataFormat??this.dataFormat,this.enableIds=t.gsplatEnableIds??this.enableIds}frameEnd(){this._material.dirty=!1,this.dirty=!1}frameUpdate(){this._appliedVaryingsVersion!==this._varyings.version&&(this._appliedVaryingsVersion=this._varyings.version,this._varyings.apply(this._material))}}class kg{constructor(){o(this,"enabled",!1);o(this,"k",1);o(this,"invK",1);o(this,"cornerScale",1);o(this,"projMat00",1);o(this,"projMat11",1);o(this,"maxTheta",Math.PI);o(this,"_lastT",-1);o(this,"_lastFov",-1);o(this,"_lastP00",0);o(this,"_lastP11",0)}update(t,e,i){i.data[15]===1&&(t=0);const s=i.data[0],a=i.data[5];if(t===this._lastT&&e===this._lastFov&&s===this._lastP00&&a===this._lastP11)return;if(this._lastT=t,this._lastFov=e,this._lastP00=s,this._lastP11=a,t<=0){this.enabled=!1,this.k=1,this.invK=1,this.cornerScale=1,this.maxTheta=Math.PI;return}this.enabled=!0;const r=e/180+.15,n=Math.max(1,e/180+.05),l=n*Math.pow(r/n,t);this.k=l,this.invK=1/l,this.cornerScale=1+(Math.SQRT2-1)*t;const d=Math.min(l*Math.PI/2,3.13),f=this.cornerScale,h=Math.atan2(1,s),u=Math.min(h,d-.01);this.projMat00=f/(l*Math.tan(u/l));const p=Math.atan2(1,a),m=Math.min(p,d-.01);this.projMat11=f/(l*Math.tan(m/l)),this.maxTheta=d}}const zg={linear:"decodeLinear",srgb:"decodeGamma",rgbm:"decodeRGBM",rgbe:"decodeRGBE",rgbp:"decodeRGBP",xy:"unpackNormalXY",xyz:"unpackNormalXYZ"},Vg={linear:"encodeLinear",srgb:"encodeGamma",rgbm:"encodeRGBM",rgbe:"encodeRGBE",rgbp:"encodeRGBP"};class kt{static decodeFunc(t){return zg[t]??"decodeGamma"}static encodeFunc(t){return Vg[t]??"encodeGamma"}}const Gg=(c,t)=>{const e=t.length/3,i=c.length/3,s=new _,a=new _,r=new _,n=new _,l=new _,d=new _,f=[];for(let h=0;h<c.length;h++)f[h]=0;for(let h=0;h<e;h++){const u=t[h*3],p=t[h*3+1],m=t[h*3+2];s.set(c[u*3],c[u*3+1],c[u*3+2]),a.set(c[p*3],c[p*3+1],c[p*3+2]),r.set(c[m*3],c[m*3+1],c[m*3+2]),n.sub2(a,s),l.sub2(r,s),d.cross(n,l).normalize(),f[u*3]+=d.x,f[u*3+1]+=d.y,f[u*3+2]+=d.z,f[p*3]+=d.x,f[p*3+1]+=d.y,f[p*3+2]+=d.z,f[m*3]+=d.x,f[m*3+1]+=d.y,f[m*3+2]+=d.z}for(let h=0;h<i;h++){const u=f[h*3],p=f[h*3+1],m=f[h*3+2],g=1/Math.sqrt(u*u+p*p+m*m);f[h*3]*=g,f[h*3+1]*=g,f[h*3+2]*=g}return f},Gt=(c,t,e,i)=>{const s=i.length/3,a=c.length/3,r=new _,n=new _,l=new _,d=new k,f=new k,h=new k,u=new _,p=new _,m=new Float32Array(a*3),g=new Float32Array(a*3),v=[];for(let C=0;C<s;C++){const x=i[C*3],A=i[C*3+1],w=i[C*3+2];r.set(c[x*3],c[x*3+1],c[x*3+2]),n.set(c[A*3],c[A*3+1],c[A*3+2]),l.set(c[w*3],c[w*3+1],c[w*3+2]),d.set(e[x*2],e[x*2+1]),f.set(e[A*2],e[A*2+1]),h.set(e[w*2],e[w*2+1]);const L=n.x-r.x,P=l.x-r.x,R=n.y-r.y,O=l.y-r.y,B=n.z-r.z,M=l.z-r.z,j=f.x-d.x,F=h.x-d.x,N=f.y-d.y,H=h.y-d.y,Ze=j*H-F*N;if(Ze===0)u.set(0,1,0),p.set(1,0,0);else{const hi=1/Ze;u.set((H*L-N*P)*hi,(H*R-N*O)*hi,(H*B-N*M)*hi),p.set((j*P-F*L)*hi,(j*O-F*R)*hi,(j*M-F*B)*hi)}m[x*3+0]+=u.x,m[x*3+1]+=u.y,m[x*3+2]+=u.z,m[A*3+0]+=u.x,m[A*3+1]+=u.y,m[A*3+2]+=u.z,m[w*3+0]+=u.x,m[w*3+1]+=u.y,m[w*3+2]+=u.z,g[x*3+0]+=p.x,g[x*3+1]+=p.y,g[x*3+2]+=p.z,g[A*3+0]+=p.x,g[A*3+1]+=p.y,g[A*3+2]+=p.z,g[w*3+0]+=p.x,g[w*3+1]+=p.y,g[w*3+2]+=p.z}const E=new _,S=new _,T=new _,y=new _;for(let C=0;C<a;C++){T.set(t[C*3],t[C*3+1],t[C*3+2]),E.set(m[C*3],m[C*3+1],m[C*3+2]),S.set(g[C*3],g[C*3+1],g[C*3+2]);const x=T.dot(E);y.copy(T).mulScalar(x),y.sub2(E,y).normalize(),v[C*4]=y.x,v[C*4+1]=y.y,v[C*4+2]=y.z,y.cross(T,E),v[C*4+3]=y.dot(S)<0?-1:1}return v};class Ms{constructor(){o(this,"positions");o(this,"normals");o(this,"colors");o(this,"uvs");o(this,"uvs1");o(this,"blendIndices");o(this,"blendWeights");o(this,"tangents");o(this,"indices")}calculateNormals(){this.normals=Gg(this.positions,this.indices)}calculateTangents(){this.tangents=Gt(this.positions,this.normals,this.uvs,this.indices)}}const Tn=8/64,ac=1-Tn*2;class En extends Ms{constructor(t={}){super();const e=t.halfExtents??new _(.5,.5,.5),i=t.widthSegments??1,s=t.lengthSegments??1,a=t.heightSegments??1,r=t.yOffset??0,n=-e.y+r,l=e.y+r,d=[new _(-e.x,n,e.z),new _(e.x,n,e.z),new _(e.x,l,e.z),new _(-e.x,l,e.z),new _(e.x,n,-e.z),new _(-e.x,n,-e.z),new _(-e.x,l,-e.z),new _(e.x,l,-e.z)],f=[[0,1,3],[4,5,7],[3,2,6],[1,0,4],[1,4,2],[5,0,6]],h=[[0,0,1],[0,0,-1],[0,1,0],[0,-1,0],[1,0,0],[-1,0,0]],u={FRONT:0,BACK:1,TOP:2,BOTTOM:3,RIGHT:4,LEFT:5},p=[],m=[],g=[],v=[],E=[];let S=0;const T=(y,C,x)=>{const A=new _,w=new _,L=new _,P=new _;for(let R=0;R<=C;R++)for(let O=0;O<=x;O++){A.lerp(d[f[y][0]],d[f[y][1]],R/C),w.lerp(d[f[y][0]],d[f[y][2]],O/x),L.sub2(w,d[f[y][0]]),P.add2(A,L);let B=R/C,M=O/x;p.push(P.x,P.y,P.z),m.push(h[y][0],h[y][1],h[y][2]),g.push(B,1-M),B=B*ac+Tn,M=M*ac+Tn,B/=3,M/=3,B+=y%3/3,M+=Math.floor(y/3)/3,v.push(B,1-M),R<C&&O<x&&(E.push(S+x+1,S+1,S),E.push(S+x+1,S+x+2,S+1)),S++}};T(u.FRONT,i,a),T(u.BACK,i,a),T(u.TOP,i,s),T(u.BOTTOM,i,s),T(u.RIGHT,s,a),T(u.LEFT,s,a),this.positions=p,this.normals=m,this.uvs=g,this.uvs1=v,this.indices=E,t.calculateTangents&&(this.tangents=Gt(p,m,g,E))}}class Dh extends Ms{constructor(t={}){super();const e=t.radius??.5,i=t.latitudeBands??16,s=t.longitudeBands??16,a=[],r=[],n=[],l=[];for(let d=0;d<=i;d++){const f=d*Math.PI/i,h=Math.sin(f),u=Math.cos(f);for(let p=0;p<=s;p++){const m=p*2*Math.PI/s-Math.PI/2,g=Math.sin(m),E=Math.cos(m)*h,S=u,T=g*h,y=1-p/s,C=1-d/i;a.push(E*e,S*e,T*e),r.push(E,S,T),n.push(y,1-C)}}for(let d=0;d<i;++d)for(let f=0;f<s;++f){const h=d*(s+1)+f,u=h+s+1;l.push(h+1,u,h),l.push(h+1,u+1,u)}this.positions=a,this.normals=r,this.uvs=n,this.uvs1=n,this.indices=l,t.calculateTangents&&(this.tangents=Gt(a,r,n,l))}}class Hg extends Dh{constructor(t={}){const i=t.latitudeBands??16,s=t.longitudeBands??16;super({radius:.5,latitudeBands:i,longitudeBands:s});const a=.1,r=.95,n=r*r,l=this.positions;for(let d=0;d<l.length;d+=3){const f=l[d]/.5;let h=l[d+1]/.5;const u=l[d+2]/.5;h<0&&(h*=.3,f*f+u*u<n&&(h=-a)),h+=a,h*=.5,l[d+1]=h}}}class ps{static create(t,e){switch(e){case Sm:return ps.box(t);case Tm:return ps.dome(t)}return ps.infinite(t)}static infinite(t){return xe.fromGeometry(t,new En(t))}static box(t){return xe.fromGeometry(t,new En({yOffset:.5}))}static dome(t){const e=new Hg({latitudeBands:50,longitudeBands:50});return e.normals=void 0,e.uvs=void 0,xe.fromGeometry(t,e)}}class Wg{constructor(t,e,i,s,a){o(this,"meshInstance",null);o(this,"_depthWrite",!1);const r=new Ps({uniqueName:"SkyMaterial",vertexGLSL:ne.get(t,ae).get("skyboxVS"),fragmentGLSL:ne.get(t,ae).get("skyboxPS"),vertexWGSL:ne.get(t,ue).get("skyboxVS"),fragmentWGSL:ne.get(t,ue).get("skyboxPS"),attributes:{aPosition:ge}});r.setDefine("{SKYBOX_DECODE_FNC}",kt.decodeFunc(s.encoding)),a!==yi&&r.setDefine("SKYMESH",""),s.cubemap&&r.setDefine("SKY_CUBEMAP",""),r.setParameter("skyboxHighlightMultiplier",e.skyboxHighlightMultiplier),s.cubemap?r.setParameter("texture_cubeMap",s):(r.setParameter("texture_envAtlas",s),r.setParameter("mipLevel",e.skyboxMip)),r.cull=Tf,r.depthWrite=this._depthWrite;const n=e.layers.getLayerById(eo);if(n){const l=ps.create(t,a),d=new Vt(l,r,i);this.meshInstance=d,d.cull=!1,d.pick=!1,n.addMeshInstances([d]),this.skyLayer=n}}destroy(){this.meshInstance&&(this.skyLayer&&this.skyLayer.removeMeshInstances([this.meshInstance]),this.meshInstance.destroy(),this.meshInstance=null)}set depthWrite(t){this._depthWrite=t,this.meshInstance&&(this.meshInstance.material.depthWrite=t)}get depthWrite(){return this._depthWrite}}class Xg{constructor(t){o(this,"_type",yi);o(this,"_center",new _(0,1,0));o(this,"skyMesh",null);o(this,"_depthWrite",!1);o(this,"_fisheye",0);o(this,"_fisheyeProj",null);o(this,"node",new ki("SkyMeshNode"));this.device=t.device,this.scene=t,this.center=new _(0,1,0),this.centerArray=new Float32Array(3),this.projectedSkydomeCenterId=this.device.scope.resolve("projectedSkydomeCenter"),this._preRenderEvt=t.on("prerender",this._onPreRender,this)}destroy(){this._preRenderEvt.off(),this.resetSkyMesh()}applySettings(t){this.type=t.skyType??yi,this.node.setLocalPosition(new _(t.skyMeshPosition??[0,0,0])),this.node.setLocalEulerAngles(new _(t.skyMeshRotation??[0,0,0])),this.node.setLocalScale(new _(t.skyMeshScale??[1,1,1])),t.skyCenter&&(this._center=new _(t.skyCenter))}set type(t){this._type!==t&&(this._type=t,this.scene.updateShaders=!0,this.updateSkyMesh())}get type(){return this._type}set center(t){this._center.copy(t)}get center(){return this._center}set depthWrite(t){this._depthWrite!==t&&(this._depthWrite=t,this.skyMesh&&(this.skyMesh.depthWrite=t))}get depthWrite(){return this._depthWrite}set fisheye(t){if(this._fisheye!==t){const e=this._fisheye>0;this._fisheye=t;const i=t>0;e!==i&&(this._fisheyeProj??(this._fisheyeProj=new kg),this._type===yi&&this._setFisheyeDefine(i))}}get fisheye(){return this._fisheye}updateSkyMesh(){const t=this.scene._getSkyboxTex();t&&(this.resetSkyMesh(),this.skyMesh=new Wg(this.device,this.scene,this.node,t,this.type),this.skyMesh.depthWrite=this._depthWrite,this._fisheye>0&&this.type===yi&&this._setFisheyeDefine(!0),this.scene.fire("set:skybox",t))}resetSkyMesh(){var t;(t=this.skyMesh)==null||t.destroy(),this.skyMesh=null}update(){if(this.type!==yi){const{center:t,centerArray:e}=this,i=new _;this.node.getWorldTransform().transformPoint(t,i),e[0]=i.x,e[1]=i.y,e[2]=i.z,this.projectedSkydomeCenterId.setValue(e)}}_setFisheyeDefine(t){var e;if((e=this.skyMesh)!=null&&e.meshInstance){const i=this.skyMesh.meshInstance.material;i.setDefine("SKY_FISHEYE",t),i.update()}}_onPreRender(t){var e;if(this._fisheye>0&&this._fisheyeProj&&((e=this.skyMesh)!=null&&e.meshInstance)){const i=t.camera,s=this._fisheyeProj;s.update(this._fisheye,i.fov,i.projectionMatrix);const a=this.skyMesh.meshInstance.material;a.setParameter("fisheye_k",s.k),a.setParameter("fisheye_invK",s.invK),a.setParameter("fisheye_projMat00",s.projMat00),a.setParameter("fisheye_projMat11",s.projMat11)}}}const Pa=new ki;Pa.worldTransform=b.IDENTITY;Pa._dirtyWorld=Pa._dirtyNormal=!1;class Yg{constructor(t,e,i){this.material=e,this.layer=i,this.positions=[],this.colors=[],this.mesh=new xe(t),this.meshInstance=null}addLines(t,e){const i=this.positions,s=t.length;for(let r=0;r<s;r++){const n=t[r];i.push(n.x,n.y,n.z)}const a=this.colors;if(e.length)for(let r=0;r<s;r++){const n=e[r];a.push(n.r,n.g,n.b,n.a)}else for(let r=0;r<s;r++)a.push(e.r,e.g,e.b,e.a)}addLinesArrays(t,e){const i=this.positions;for(let a=0;a<t.length;a+=3)i.push(t[a],t[a+1],t[a+2]);const s=this.colors;if(e.length)for(let a=0;a<e.length;a+=4)s.push(e[a],e[a+1],e[a+2],e[a+3]);else{const a=t.length/3;for(let r=0;r<a;r++)s.push(e.r,e.g,e.b,e.a)}}onPreRender(t,e){this.positions.length>0&&this.material.transparent===e&&(this.mesh.setPositions(this.positions),this.mesh.setColors(this.colors),this.mesh.update(ld,!1),this.meshInstance||(this.meshInstance=new Vt(this.mesh,this.material,Pa)),t.push(this.meshInstance))}clear(){this.positions.length=0,this.colors.length=0}}class $g{constructor(t){this.device=t,this.map=new Map}getBatch(t,e){let i=this.map.get(t);return i||(i=new Yg(this.device,t,e),this.map.set(t,i)),i}onPreRender(t,e){this.map.forEach(i=>{i.onPreRender(t,e)})}clear(){this.map.forEach(t=>t.clear())}}const Ne=[],Si=new _;class qg{constructor(t){o(this,"shaderDescs",new Map);this.device=t,this.quadMesh=null,this.textureShader=null,this.depthTextureShader=null,this.cubeLocalPos=null,this.cubeWorldPos=null,this.batchesMap=new Map,this.allBatches=new Set,this.updatedLayers=new Set,this._materialDepth=null,this._materialNoDepth=null,this.layerMeshInstances=new Map}createMaterial(t){const e=new Ps({uniqueName:"ImmediateLine",vertexGLSL:ne.get(this.device,ae).get("immediateLineVS"),fragmentGLSL:ne.get(this.device,ae).get("immediateLinePS"),vertexWGSL:ne.get(this.device,ue).get("immediateLineVS"),fragmentWGSL:ne.get(this.device,ue).get("immediateLinePS"),attributes:{vertex_position:ge,vertex_color:gt}});return e.blendType=St,e.depthTest=t,e.update(),e}get materialDepth(){return this._materialDepth||(this._materialDepth=this.createMaterial(!0)),this._materialDepth}get materialNoDepth(){return this._materialNoDepth||(this._materialNoDepth=this.createMaterial(!1)),this._materialNoDepth}getBatch(t,e){let i=this.batchesMap.get(t);i||(i=new $g(this.device),this.batchesMap.set(t,i)),this.allBatches.add(i);const s=e?this.materialDepth:this.materialNoDepth;return i.getBatch(s,t)}getShaderDesc(t,e,i){return this.shaderDescs.has(t)||this.shaderDescs.set(t,{uniqueName:`DebugShader:${t}`,vertexGLSL:`
					attribute vec2 vertex_position;
					uniform mat4 matrix_model;
					varying vec2 uv0;
					void main(void) {
						gl_Position = matrix_model * vec4(vertex_position, 0, 1);
						uv0 = vertex_position.xy + 0.5;
					}
				`,vertexWGSL:`
					attribute vertex_position: vec2f;
					uniform matrix_model: mat4x4f;
					varying uv0: vec2f;
					@vertex fn vertexMain(input: VertexInput) -> VertexOutput {
						var output: VertexOutput;
						output.position = uniform.matrix_model * vec4f(input.vertex_position, 0.0, 1.0);
						output.uv0 = input.vertex_position.xy + vec2f(0.5);
						return output;
					}
				`,fragmentGLSL:e,fragmentWGSL:i,attributes:{vertex_position:ge}}),this.shaderDescs.get(t)}getTextureShaderDesc(t){const e=kt.decodeFunc(t);return this.getShaderDesc(`textureShader-${t}`,`
			#include "gammaPS"
			varying vec2 uv0;
			uniform sampler2D colorMap;
			void main (void) {
				vec3 linearColor = ${e}(texture2D(colorMap, uv0));
				gl_FragColor = vec4(gammaCorrectOutput(linearColor), 1);
			}
		`,`
			#include "gammaPS"
			varying uv0: vec2f;
			var colorMap: texture_2d<f32>;
			var colorMapSampler: sampler;
			@fragment fn fragmentMain(input : FragmentInput) -> FragmentOutput {
				var output: FragmentOutput;
				let sampledTex = textureSample(colorMap, colorMapSampler, input.uv0);
				let linearColor: vec3f = ${e}(sampledTex);
				output.color = vec4f(gammaCorrectOutput(linearColor), 1.0);
				return output;
			}
		`)}getUnfilterableTextureShaderDesc(){return this.getShaderDesc("textureShaderUnfilterable",`
			varying vec2 uv0;
			uniform highp sampler2D colorMap;
			void main (void) {
				ivec2 uv = ivec2(uv0 * textureSize(colorMap, 0));
				gl_FragColor = vec4(texelFetch(colorMap, uv, 0).xyz, 1);
			}
		`,`
			varying uv0: vec2f;
			var colorMap: texture_2d<uff>;
			@fragment fn fragmentMain(input : FragmentInput) -> FragmentOutput {
				var output: FragmentOutput;
				let uv : vec2<i32> = vec2<i32>(input.uv0 * vec2f(textureDimensions(colorMap, 0)));
				let fetchedColor : vec4f = textureLoad(colorMap, uv, 0);
				output.color = vec4f(fetchedColor.xyz, 1.0);
				return output;
			}
		`)}getDepthTextureShaderDesc(){return this.getShaderDesc("depthTextureShader",`
			#include "screenDepthPS"
			#include "gammaPS"
			varying vec2 uv0;
			void main() {
				float depth = getLinearScreenDepth(getImageEffectUV(uv0)) * camera_params.x;
				gl_FragColor = vec4(gammaCorrectOutput(vec3(depth)), 1.0);
			}
		`,`
			#include "screenDepthPS"
			#include "gammaPS"
			varying uv0: vec2f;
			@fragment fn fragmentMain(input: FragmentInput) -> FragmentOutput {
				var output: FragmentOutput;
				let depth: f32 = getLinearScreenDepth(getImageEffectUV(input.uv0)) * uniform.camera_params.x;
				output.color = vec4f(gammaCorrectOutput(vec3f(depth)), 1.0);
				return output;
			}
		`)}getQuadMesh(){return this.quadMesh||(this.quadMesh=new xe(this.device),this.quadMesh.setPositions([-.5,-.5,0,.5,-.5,0,-.5,.5,0,.5,.5,0]),this.quadMesh.update(cd)),this.quadMesh}drawMesh(t,e,i,s,a){if(!s){const n=this.getGraphNode(e);s=new Vt(i,t,n)}let r=this.layerMeshInstances.get(a);r||(r=[],this.layerMeshInstances.set(a,r)),r.push(s)}drawWireAlignedBox(t,e,i,s,a,r){if(r){const l=(d,f,h)=>{Si.set(d,f,h),r.transformPoint(Si,Si),Ne.push(Si.x,Si.y,Si.z)};l(t.x,t.y,t.z),l(t.x,e.y,t.z),l(t.x,e.y,t.z),l(e.x,e.y,t.z),l(e.x,e.y,t.z),l(e.x,t.y,t.z),l(e.x,t.y,t.z),l(t.x,t.y,t.z),l(t.x,t.y,e.z),l(t.x,e.y,e.z),l(t.x,e.y,e.z),l(e.x,e.y,e.z),l(e.x,e.y,e.z),l(e.x,t.y,e.z),l(e.x,t.y,e.z),l(t.x,t.y,e.z),l(t.x,t.y,t.z),l(t.x,t.y,e.z),l(t.x,e.y,t.z),l(t.x,e.y,e.z),l(e.x,e.y,t.z),l(e.x,e.y,e.z),l(e.x,t.y,t.z),l(e.x,t.y,e.z)}else Ne.push(t.x,t.y,t.z,t.x,e.y,t.z,t.x,e.y,t.z,e.x,e.y,t.z,e.x,e.y,t.z,e.x,t.y,t.z,e.x,t.y,t.z,t.x,t.y,t.z,t.x,t.y,e.z,t.x,e.y,e.z,t.x,e.y,e.z,e.x,e.y,e.z,e.x,e.y,e.z,e.x,t.y,e.z,e.x,t.y,e.z,t.x,t.y,e.z,t.x,t.y,t.z,t.x,t.y,e.z,t.x,e.y,t.z,t.x,e.y,e.z,e.x,e.y,t.z,e.x,e.y,e.z,e.x,t.y,t.z,e.x,t.y,e.z);this.getBatch(a,s).addLinesArrays(Ne,i),Ne.length=0}drawWireSphere(t,e,i,s,a,r){const n=2*Math.PI/s;let l=0;for(let f=0;f<s;f++){const h=Math.sin(l),u=Math.cos(l);l+=n;const p=Math.sin(l),m=Math.cos(l);Ne.push(t.x+e*h,t.y,t.z+e*u),Ne.push(t.x+e*p,t.y,t.z+e*m),Ne.push(t.x+e*h,t.y+e*u,t.z),Ne.push(t.x+e*p,t.y+e*m,t.z),Ne.push(t.x,t.y+e*h,t.z+e*u),Ne.push(t.x,t.y+e*p,t.z+e*m)}this.getBatch(r,a).addLinesArrays(Ne,i),Ne.length=0}getGraphNode(t){const e=new ki("ImmediateDebug");return e.worldTransform=t,e._dirtyWorld=e._dirtyNormal=!1,e}onPreRenderLayer(t,e,i){if(this.batchesMap.forEach((s,a)=>{a===t&&s.onPreRender(e,i)}),!this.updatedLayers.has(t)){this.updatedLayers.add(t);const s=this.layerMeshInstances.get(t);if(s){for(let a=0;a<s.length;a++)e.push(s[a]);s.length=0}}}onPostRender(){this.allBatches.forEach(t=>t.clear()),this.allBatches.clear(),this.updatedLayers.clear()}}const rc=2.399963229728653,go={circlePoint(c){const t=Math.sqrt(Math.random()),e=Math.random()*2*Math.PI;c.x=t*Math.cos(e),c.y=t*Math.sin(e)},circlePointDeterministic(c,t,e){const i=t*rc,s=Math.sqrt(t/e);c.x=s*Math.cos(i),c.y=s*Math.sin(i)},spherePointDeterministic(c,t,e,i=0,s=1){i=1-2*i,s=1-2*s;const a=I.lerp(i,s,t/e),r=Math.sqrt(1-a*a),n=rc*t;c.x=Math.cos(n)*r,c.y=a,c.z=Math.sin(n)*r},radicalInverse(c){let t=(c<<16|c>>>16)>>>0;return t=((t&1431655765)<<1|(t&2863311530)>>>1)>>>0,t=((t&858993459)<<2|(t&3435973836)>>>2)>>>0,t=((t&252645135)<<4|(t&4042322160)>>>4)>>>0,t=((t&16711935)<<8|(t&4278255360)>>>8)>>>0,t*23283064365386963e-26}},nc=c=>{switch(c){case cn:return"Cubemap";case yu:return"Octahedral";default:return"Equirect"}},aa=(c,t,e)=>{if(c<=0)t[e+0]=0,t[e+1]=0,t[e+2]=0,t[e+3]=0;else if(c>=1)t[e+0]=255,t[e+1]=0,t[e+2]=0,t[e+3]=0;else{let i=1*c%1,s=255*c%1,a=65025*c%1;const r=16581375*c%1;i-=s/255,s-=a/255,a-=r/255,t[e+0]=Math.min(255,Math.floor(i*256)),t[e+1]=Math.min(255,Math.floor(s*256)),t[e+2]=Math.min(255,Math.floor(a*256)),t[e+3]=Math.min(255,Math.floor(r*256))}},jg=c=>{const t=c.length,e=Math.min(t,512),i=Math.ceil(t/e),s=new Uint8Array(e*i*4);let a=0;for(let r=0;r<t;r+=4)aa(c[r+0]*.5+.5,s,a+0),aa(c[r+1]*.5+.5,s,a+4),aa(c[r+2]*.5+.5,s,a+8),aa(c[r+3]/8,s,a+12),a+=16;return{width:e,height:i,data:s}},Kg=(c,t,e,i)=>{const s=e*2*Math.PI,a=Math.pow(1-t,1/(i+1)),r=Math.sqrt(1-a*a);c.set(Math.cos(s)*r,Math.sin(s)*r,a).normalize()},Zg=(c,t,e)=>{const i=e*2*Math.PI,s=Math.sqrt(1-t),a=Math.sqrt(t);c.set(Math.cos(i)*a,Math.sin(i)*a,s).normalize()},Jg=(c,t,e,i)=>{const s=e*2*Math.PI,a=Math.sqrt((1-t)/(1+(i*i-1)*t)),r=Math.sqrt(1-a*a);c.set(Math.cos(s)*r,Math.sin(s)*r,a).normalize()},Qg=(c,t)=>{const e=c*t,i=t/(1-c*c+e*e);return i*i*(1/Math.PI)},ev=(c,t)=>{const e=new _,i=[];for(let s=0;s<c;++s)Kg(e,s/c,go.radicalInverse(s),t),i.push(e.x,e.y,e.z,0);return i},tv=(c,t)=>{const e=t/c,i=new _,s=[];for(let a=0;a<c;++a){Zg(i,a/c,go.radicalInverse(a));const r=i.z/Math.PI,n=.5*Math.log2(e/r);s.push(i.x,i.y,i.z,n)}return s},iv={16:{2:26,8:20,32:17,128:16,512:16},32:{2:53,8:40,32:34,128:32,512:32},128:{2:214,8:163,32:139,128:130,512:128},1024:{2:1722,8:1310,32:1114,128:1041,512:1025}},sv=(c,t)=>{const e=iv[c];return e&&e[t]||c},av=(c,t,e)=>{const i=e/c,s=1-Math.log2(t)/11,a=s*s,r=new _,n=new _,l=new _(0,0,1),d=[],f=sv(c,t);for(let h=0;h<f;++h){Jg(r,h/f,go.radicalInverse(h),a);const u=r.z;if(n.set(r.x,r.y,r.z).mulScalar(2*u).sub(l),n.z>0){const p=Qg(Math.min(1,u),a)/4+.001,m=.5*Math.log2(i/p);d.push(n.x,n.y,n.z,m)}}for(;d.length<c*4;)d.push(0,0,0,0);return d},rv=(c,t,e)=>{const i=jg(e);return new ce(c,{name:t,width:i.width,height:i.height,mipmaps:!1,minFilter:ve,magFilter:ve,levels:[i.data]})};class Ph{constructor(t=!0){o(this,"map",new Map);this.destroyContent=t}destroy(){this.destroyContent&&this.map.forEach((t,e)=>{t.destroy()})}get(t,e){if(!this.map.has(t)){const i=e();return this.map.set(t,i),i}return this.map.get(t)}}const nv=new Ph(!1),ov=new nt,vo=(c,t,e)=>ov.get(c,()=>new Ph).get(t,()=>rv(c,t,nv.get(t,e))),lv=(c,t,e)=>{const i=`lambert-samples-${t}-${e}`;return vo(c,i,()=>tv(t,e))},cv=(c,t,e)=>{const i=`phong-samples-${t}-${e}`;return vo(c,i,()=>ev(t,e))},dv=(c,t,e,i)=>{const s=`ggx-samples-${t}-${e}-${i}`;return vo(c,s,()=>av(t,e,i))};function ct(c,t,e={}){var w,L;const i=e.seamPixels??0,s=(((w=e.rect)==null?void 0:w.z)??t.width)-i*2,a=(((L=e.rect)==null?void 0:L.w)??t.height)-i*2;if(s<1||a<1)return!1;const r={none:"reproject",lambert:"prefilterSamplesUnweighted",phong:"prefilterSamplesUnweighted",ggx:"prefilterSamples"},n=e.hasOwnProperty("specularPower")?e.specularPower:1,l=e.hasOwnProperty("face")?e.face:null,d=e.hasOwnProperty("distribution")?e.distribution:n===1?"none":"phong",f=r[d]||"reproject",h=f.startsWith("prefilterSamples"),u=kt.decodeFunc(c.encoding),p=kt.encodeFunc(t.encoding),m=`sample${nc(c.projection)}`,g=`getDirection${nc(t.projection)}`,v=e.hasOwnProperty("numSamples")?e.numSamples:1024,E=`ReprojectShader:${f}_${u}_${p}_${m}_${g}_${v}`,S=c.device;let T=ws(S).getCachedShader(E);if(!T){const P=new Map;h&&P.set("USE_SAMPLES_TEX",""),c.cubemap&&P.set("CUBEMAP_SOURCE",""),P.set("{PROCESS_FUNC}",f),P.set("{DECODE_FUNC}",u),P.set("{ENCODE_FUNC}",p),P.set("{SOURCE_FUNC}",m),P.set("{TARGET_FUNC}",g),P.set("{NUM_SAMPLES}",v),P.set("{NUM_SAMPLES_SQRT}",Math.round(Math.sqrt(v)).toFixed(1)),T=zt.createShader(S,{uniqueName:E,attributes:{vertex_position:ge},vertexChunk:"reprojectVS",fragmentChunk:"reprojectPS",fragmentDefines:P})}S.setBlendState(vt.NOBLEND),S.scope.resolve(c.cubemap?"sourceCube":"sourceTex").setValue(c);const C=S.scope.resolve("params"),x=S.scope.resolve("uvMod");i>0?x.setValue([(s+i*2)/s,(a+i*2)/a,-i/s,-i/a]):x.setValue([1,1,0,0]);const A=[0,t.width*t.height*(t.cubemap?6:1),c.width*c.height*(c.cubemap?6:1)];if(h){const P=c.width*c.height*(c.cubemap?6:1),R=d==="ggx"?dv(S,v,n,P):d==="lambert"?lv(S,v,P):cv(S,v,n);S.scope.resolve("samplesTex").setValue(R),S.scope.resolve("samplesTexInverseSize").setValue([1/R.width,1/R.height])}for(let P=0;P<(t.cubemap?6:1);P++)if(l===null||P===l){const R=new _t({colorBuffer:t,face:P,depth:!1,flipY:S.isWebGPU});A[0]=P,C.setValue(A),Da(S,R,T,e==null?void 0:e.rect),R.destroy()}return!0}const Gr=(c,t=0)=>1+Math.floor(Math.log2(Math.max(c,t))),hv=c=>c.textureHalfFloatRenderable,fv=c=>c.textureFloatRenderable,uv=c=>hv(c)?Ue:fv(c)?at:je,pv=c=>je,mv=(c,t,e,i)=>new ce(c,{name:`lighting-${t}`,cubemap:!0,width:t,height:t,format:e,type:va,addressU:q,addressV:q,mipmaps:!1});class Ih{static generateSkyboxCubemap(t,e){const i=t.device,s=mv(i,e||(t.cubemap?t.width:t.width/4),je);return ct(t,s,{numSamples:1024}),s}static generateLightingSource(t,e){const i=t.device,s=uv(i),a=(e==null?void 0:e.target)||new ce(i,{name:"lighting-source",cubemap:!0,width:(e==null?void 0:e.size)||128,height:(e==null?void 0:e.size)||128,format:s,type:s===je?va:ii,addressU:q,addressV:q,mipmaps:!0});return ct(t,a,{numSamples:t.mipmaps?1:1024}),a}static generateAtlas(t,e){const i=t.device,s=pv(),a=(e==null?void 0:e.target)||new ce(i,{name:"envAtlas",width:(e==null?void 0:e.size)||512,height:(e==null?void 0:e.size)||512,format:s,type:va,projection:Vo,addressU:q,addressV:q,mipmaps:!1}),r=a.width/512,n=new se(0,0,512*r,256*r),l=Gr(256)-Gr(4);for(let d=0;d<l;++d)ct(t,a,{numSamples:1,rect:n,seamPixels:r}),n.x+=n.w,n.y+=n.w,n.z=Math.max(1,Math.floor(n.z*.5)),n.w=Math.max(1,Math.floor(n.w*.5));n.set(0,256*r,256*r,128*r);for(let d=1;d<7;++d)ct(t,a,{numSamples:(e==null?void 0:e.numReflectionSamples)||1024,distribution:(e==null?void 0:e.distribution)||"ggx",specularPower:Math.max(1,2048>>d*2),rect:n,seamPixels:r}),n.y+=n.w,n.z=Math.max(1,Math.floor(n.z*.5)),n.w=Math.max(1,Math.floor(n.w*.5));return n.set(128*r,384*r,64*r,32*r),ct(t,a,{numSamples:(e==null?void 0:e.numAmbientSamples)||2048,distribution:"lambert",rect:n,seamPixels:r}),a}static generatePrefilteredAtlas(t,e){const i=t[0].device,s=t[0].format,a=t[0].type,r=(e==null?void 0:e.target)||new ce(i,{name:"envPrefilteredAtlas",width:(e==null?void 0:e.size)||512,height:(e==null?void 0:e.size)||512,format:s,type:a,projection:Vo,addressU:q,addressV:q,mipmaps:!1}),n=r.width/512,l=new se(0,0,512*n,256*n),d=Gr(512);for(let f=0;f<d;++f)ct(t[0],r,{numSamples:1,rect:l,seamPixels:n}),l.x+=l.w,l.y+=l.w,l.z=Math.max(1,Math.floor(l.z*.5)),l.w=Math.max(1,Math.floor(l.w*.5));l.set(0,256*n,256*n,128*n);for(let f=1;f<t.length;++f)ct(t[f],r,{numSamples:1,rect:l,seamPixels:n}),l.y+=l.w,l.z=Math.max(1,Math.floor(l.z*.5)),l.w=Math.max(1,Math.floor(l.w*.5));return l.set(128*n,384*n,64*n,32*n),e!=null&&e.legacyAmbient?ct(t[5],r,{numSamples:1,rect:l,seamPixels:n}):ct(t[0],r,{numSamples:(e==null?void 0:e.numSamples)||2048,distribution:"lambert",rect:l,seamPixels:n}),r}}class _v{constructor(){o(this,"type",Bi);o(this,"color",new U(0,0,0));o(this,"density",0);o(this,"start",1);o(this,"end",1e3)}}class ft extends pe{constructor(e){super();o(this,"ambientBake",!1);o(this,"ambientBakeOcclusionBrightness",0);o(this,"ambientBakeOcclusionContrast",0);o(this,"ambientLight",new U(0,0,0));o(this,"ambientLuminance",0);o(this,"exposure",1);o(this,"lightmapSizeMultiplier",1);o(this,"lightmapMaxResolution",2048);o(this,"lightmapMode",pm);o(this,"lightmapFilterEnabled",!1);o(this,"lightmapHDR",!1);o(this,"root",null);o(this,"physicalUnits",!1);o(this,"_envAtlas",null);o(this,"_skyboxCubeMap",null);o(this,"_fogParams",new _v);o(this,"forcePassThroughSpecular",!1);this.device=e,this._gravity=new _(0,-9.8,0),this._layers=null,this._prefilteredCubemaps=[],this._internalEnvAtlas=null,this._skyboxIntensity=1,this._skyboxLuminance=0,this._skyboxMip=0,this._skyboxHighlightMultiplier=1,this._skyboxRotationShaderInclude=!1,this._skyboxRotation=new G,this._skyboxRotationMat3=new _s,this._skyboxRotationMat4=new b,this._ambientBakeNumSamples=1,this._ambientBakeSpherePart=.4,this._lightmapFilterRange=10,this._lightmapFilterSmoothness=.2,this._clusteredLightingEnabled=!0,this._lightingParams=new K_(this.device.supportsAreaLights,this.device.maxTextureSize,()=>{this.updateShaders=!0}),this.gsplatCentersEnabled=!0,this._gsplatParams=new Bg(this.device),this._sky=new Xg(this),this._stats={meshInstances:0,lights:0,dynamicLights:0,bakedLights:0,updateShadersTime:0},this.updateShaders=!0,this._shaderVersion=0,this.immediate=new qg(this.device)}get defaultDrawLayer(){return this.layers.getLayerById(to)}set ambientBakeNumSamples(e){this._ambientBakeNumSamples=I.clamp(Math.floor(e),1,255)}get ambientBakeNumSamples(){return this._ambientBakeNumSamples}set ambientBakeSpherePart(e){this._ambientBakeSpherePart=I.clamp(e,.001,1)}get ambientBakeSpherePart(){return this._ambientBakeSpherePart}set clusteredLightingEnabled(e){if(!(this.device.isWebGPU&&!e)){if(!this._clusteredLightingEnabled&&e){console.error("Turning on disabled clustered lighting is not currently supported");return}this._clusteredLightingEnabled=e}}get clusteredLightingEnabled(){return this._clusteredLightingEnabled}set envAtlas(e){e!==this._envAtlas&&(this._envAtlas=e,e&&(e.addressU=q,e.addressV=q,e.minFilter=Ae,e.magFilter=Ae,e.mipmaps=!1),this._prefilteredCubemaps=[],this._internalEnvAtlas&&(this._internalEnvAtlas.destroy(),this._internalEnvAtlas=null),this._resetSkyMesh())}get envAtlas(){return this._envAtlas}set layers(e){const i=this._layers;this._layers=e,this.fire("set:layers",i,e)}get layers(){return this._layers}get sky(){return this._sky}get lighting(){return this._lightingParams}get gsplat(){return this._gsplatParams}get fog(){return this._fogParams}set lightmapFilterRange(e){this._lightmapFilterRange=Math.max(e,.001)}get lightmapFilterRange(){return this._lightmapFilterRange}set lightmapFilterSmoothness(e){this._lightmapFilterSmoothness=Math.max(e,.001)}get lightmapFilterSmoothness(){return this._lightmapFilterSmoothness}set prefilteredCubemaps(e){e=e||[];const i=this._prefilteredCubemaps;(i.length!==e.length||i.some((a,r)=>a!==e[r]))&&(e.length===6&&e.every(r=>!!r)?(this._internalEnvAtlas=Ih.generatePrefilteredAtlas(e,{target:this._internalEnvAtlas}),this._envAtlas=this._internalEnvAtlas):(this._internalEnvAtlas&&(this._internalEnvAtlas.destroy(),this._internalEnvAtlas=null),this._envAtlas=null),this._prefilteredCubemaps=e.slice(),this._resetSkyMesh())}get prefilteredCubemaps(){return this._prefilteredCubemaps}set skybox(e){e!==this._skyboxCubeMap&&(this._skyboxCubeMap=e,this._resetSkyMesh())}get skybox(){return this._skyboxCubeMap}set skyboxIntensity(e){e!==this._skyboxIntensity&&(this._skyboxIntensity=e,this._resetSkyMesh())}get skyboxIntensity(){return this._skyboxIntensity}set skyboxLuminance(e){e!==this._skyboxLuminance&&(this._skyboxLuminance=e,this._resetSkyMesh())}get skyboxLuminance(){return this._skyboxLuminance}set skyboxMip(e){e!==this._skyboxMip&&(this._skyboxMip=e,this._resetSkyMesh())}get skyboxMip(){return this._skyboxMip}set skyboxHighlightMultiplier(e){e!==this._skyboxHighlightMultiplier&&(this._skyboxHighlightMultiplier=e,this._resetSkyMesh())}get skyboxHighlightMultiplier(){return this._skyboxHighlightMultiplier}set skyboxRotation(e){if(!this._skyboxRotation.equals(e)){const i=e.equals(G.IDENTITY);this._skyboxRotation.copy(e),i?this._skyboxRotationMat3.setIdentity():(this._skyboxRotationMat4.setTRS(_.ZERO,e,_.ONE),this._skyboxRotationMat3.invertMat4(this._skyboxRotationMat4)),!this._skyboxRotationShaderInclude&&!i&&(this._skyboxRotationShaderInclude=!0,this._resetSkyMesh())}}get skyboxRotation(){return this._skyboxRotation}destroy(){this._sky.destroy(),this.root=null,this.off()}drawLine(e,i,s=U.WHITE,a=!0,r=this.defaultDrawLayer){this.immediate.getBatch(r,a).addLines([e,i],[s,s])}drawLines(e,i,s=!0,a=this.defaultDrawLayer){this.immediate.getBatch(a,s).addLines(e,i)}drawLineArrays(e,i,s=!0,a=this.defaultDrawLayer){this.immediate.getBatch(a,s).addLinesArrays(e,i)}applySettings(e){const i=e.physics,s=e.render;this._gravity.set(i.gravity[0],i.gravity[1],i.gravity[2]),this.ambientLight.set(s.global_ambient[0],s.global_ambient[1],s.global_ambient[2]),this.ambientLuminance=s.ambientLuminance,this.fog.type=s.fog,this.fog.color.set(s.fog_color[0],s.fog_color[1],s.fog_color[2]),this.fog.start=s.fog_start,this.fog.end=s.fog_end,this.fog.density=s.fog_density,this.lightmapSizeMultiplier=s.lightmapSizeMultiplier,this.lightmapMaxResolution=s.lightmapMaxResolution,this.lightmapMode=s.lightmapMode,this.exposure=s.exposure,this._skyboxIntensity=s.skyboxIntensity??1,this._skyboxLuminance=s.skyboxLuminance??2e4,this._skyboxMip=s.skyboxMip??0,s.skyboxRotation&&(this.skyboxRotation=new G().setFromEulerAngles(s.skyboxRotation[0],s.skyboxRotation[1],s.skyboxRotation[2])),this.sky.applySettings(s),this.clusteredLightingEnabled=s.clusteredLightingEnabled??!1,this.lighting.applySettings(s),this.gsplat.applySettings(s),["lightmapFilterEnabled","lightmapFilterRange","lightmapFilterSmoothness","ambientBake","ambientBakeNumSamples","ambientBakeSpherePart","ambientBakeOcclusionBrightness","ambientBakeOcclusionContrast"].forEach(a=>{s.hasOwnProperty(a)&&(this[a]=s[a])}),this._resetSkyMesh()}_getSkyboxTex(){const e=this._prefilteredCubemaps;return this._skyboxMip?e[[0,1,3,4,5,6][this._skyboxMip]]||this._envAtlas||e[0]||this._skyboxCubeMap:this._skyboxCubeMap||e[0]||this._envAtlas}_updateSkyMesh(){this.sky.skyMesh||this.sky.updateSkyMesh(),this.sky.update()}_resetSkyMesh(){this.sky.resetSkyMesh(),this.updateShaders=!0}setSkybox(e){e?(this.skybox=e[0]||null,e[1]&&!e[1].cubemap?this.envAtlas=e[1]:this.prefilteredCubemaps=e.slice(1)):(this.skybox=null,this.envAtlas=null)}get lightmapPixelFormat(){return this.lightmapHDR&&this.device.getRenderableHdrFormat()||je}get defaultMaterial(){return uo(this.device)}set fogColor(e){this.fog.color=e}get fogColor(){return this.fog.color}set fogEnd(e){this.fog.end=e}get fogEnd(){return this.fog.end}set fogStart(e){this.fog.start=e}get fogStart(){return this.fog.start}set fogDensity(e){this.fog.density=e}get fogDensity(){return this.fog.density}set skyboxPrefiltered128(e){this._prefilteredCubemaps[0]=e,this.updateShaders=!0}get skyboxPrefiltered128(){return this._prefilteredCubemaps[0]}set skyboxPrefiltered64(e){this._prefilteredCubemaps[1]=e,this.updateShaders=!0}get skyboxPrefiltered64(){return this._prefilteredCubemaps[1]}set skyboxPrefiltered32(e){this._prefilteredCubemaps[2]=e,this.updateShaders=!0}get skyboxPrefiltered32(){return this._prefilteredCubemaps[2]}set skyboxPrefiltered16(e){this._prefilteredCubemaps[3]=e,this.updateShaders=!0}get skyboxPrefiltered16(){return this._prefilteredCubemaps[3]}set skyboxPrefiltered8(e){this._prefilteredCubemaps[4]=e,this.updateShaders=!0}get skyboxPrefiltered8(){return this._prefilteredCubemaps[4]}set skyboxPrefiltered4(e){this._prefilteredCubemaps[5]=e,this.updateShaders=!0}get skyboxPrefiltered4(){return this._prefilteredCubemaps[5]}get models(){return this._models??(this._models=[]),this._models}}o(ft,"EVENT_SETLAYERS","set:layers"),o(ft,"EVENT_SETSKYBOX","set:skybox"),o(ft,"EVENT_PRERENDER","prerender"),o(ft,"EVENT_POSTRENDER","postrender"),o(ft,"EVENT_PRERENDER_LAYER","prerender:layer"),o(ft,"EVENT_POSTRENDER_LAYER","postrender:layer"),o(ft,"EVENT_PRECULL","precull"),o(ft,"EVENT_POSTCULL","postcull");class bh{constructor(){o(this,"hasTangents",!1);o(this,"shaderChunks",null);o(this,"pass",0);o(this,"alphaTest",!1);o(this,"blendType",oi);o(this,"separateAmbient",!1);o(this,"screenSpace",!1);o(this,"skin",!1);o(this,"batch",!1);o(this,"useInstancing",!1);o(this,"useMorphPosition",!1);o(this,"useMorphNormal",!1);o(this,"useMorphTextureBasedInt",!1);o(this,"nineSlicedMode",0);o(this,"clusteredLightingEnabled",!0);o(this,"clusteredLightingCookiesEnabled",!1);o(this,"clusteredLightingShadowsEnabled",!1);o(this,"clusteredLightingShadowType",0);o(this,"clusteredLightingAreaLightsEnabled",!1);o(this,"vertexColors",!1);o(this,"useVertexColorGamma",!1);o(this,"lightMapEnabled",!1);o(this,"dirLightMapEnabled",!1);o(this,"useHeights",!1);o(this,"useNormals",!1);o(this,"useClearCoatNormals",!1);o(this,"useAo",!1);o(this,"diffuseMapEnabled",!1);o(this,"pixelSnap",!1);o(this,"ambientSH",!1);o(this,"ssao",!1);o(this,"twoSidedLighting",!1);o(this,"occludeDirect",!1);o(this,"occludeSpecular",0);o(this,"occludeSpecularFloat",!1);o(this,"useMsdf",!1);o(this,"msdfTextAttribute",!1);o(this,"alphaToCoverage",!1);o(this,"opacityFadesSpecular",!1);o(this,"opacityDither",ci);o(this,"opacityShadowDither",ci);o(this,"cubeMapProjection",0);o(this,"useSpecular",!1);o(this,"useSpecularityFactor",!1);o(this,"enableGGXSpecular",!1);o(this,"fresnelModel",0);o(this,"useRefraction",!1);o(this,"useClearCoat",!1);o(this,"useSheen",!1);o(this,"useIridescence",!1);o(this,"useMetalness",!1);o(this,"useDynamicRefraction",!1);o(this,"dispersion",!1);o(this,"fog",Bi);o(this,"gamma",ao);o(this,"toneMap",-1);o(this,"reflectionSource",Bt);o(this,"reflectionEncoding",null);o(this,"reflectionCubemapEncoding",null);o(this,"ambientSource","constant");o(this,"ambientEncoding",null);o(this,"skyboxIntensity",1);o(this,"useCubeMapRotation",!1);o(this,"lightMapWithoutAmbient",!1);o(this,"lights",[]);o(this,"noShadow",!1);o(this,"lightMaskDynamic",0);o(this,"userAttributes",{});o(this,"linearDepth",!1);o(this,"shadowCatcher",!1)}}class He{static update(t,e,i,s,a,r,n){He.updateSharedOptions(t,e,i,a,r),He.updateMaterialOptions(t,e),He.updateEnvOptions(t,e,i,s),He.updateLightingOptions(t,e,i,a,n)}static updateSharedOptions(t,e,i,s,a){t.shaderChunks=e.shaderChunks,t.pass=a,t.alphaTest=e.alphaTest>0,t.blendType=e.blendType,t.screenSpace=s&&(s&Aa)!==0,t.skin=s&&(s&Es)!==0,t.useInstancing=s&&(s&ys)!==0,t.useMorphPosition=s&&(s&xs)!==0,t.useMorphNormal=s&&(s&Cs)!==0,t.useMorphTextureBasedInt=s&&(s&As)!==0,t.hasTangents=s&&(s&lo)!==0,t.nineSlicedMode=e.nineSlicedMode||gh,e.useLighting&&i.clusteredLightingEnabled?(t.clusteredLightingEnabled=!0,t.clusteredLightingCookiesEnabled=i.lighting.cookiesEnabled,t.clusteredLightingShadowsEnabled=i.lighting.shadowsEnabled,t.clusteredLightingShadowType=i.lighting.shadowType,t.clusteredLightingAreaLightsEnabled=i.lighting.areaLightsEnabled):(t.clusteredLightingEnabled=!1,t.clusteredLightingCookiesEnabled=!1,t.clusteredLightingShadowsEnabled=!1,t.clusteredLightingAreaLightsEnabled=!1)}static updateMaterialOptions(t,e){t.separateAmbient=!1,t.pixelSnap=e.pixelSnap,t.ambientSH=e.ambientSH,t.twoSidedLighting=e.twoSidedLighting,t.occludeDirect=e.occludeDirect,t.occludeSpecular=e.occludeSpecular,t.occludeSpecularFloat=e.occludeSpecularIntensity!==1,t.useMsdf=!1,t.msdfTextAttribute=!1,t.alphaToCoverage=e.alphaToCoverage,t.opacityFadesSpecular=e.opacityFadesSpecular,t.opacityDither=e.opacityDither,t.cubeMapProjection=so,t.useSpecular=e.hasSpecular,t.useSpecularityFactor=e.hasSpecularityFactor,t.enableGGXSpecular=e.ggxSpecular,t.useAnisotropy=!1,t.fresnelModel=e.fresnelModel,t.useRefraction=e.hasRefraction,t.useClearCoat=e.hasClearCoat,t.useSheen=e.hasSheen,t.useIridescence=e.hasIrridescence,t.useMetalness=e.hasMetalness,t.useDynamicRefraction=e.dynamicRefraction,t.dispersion=e.dispersion>0,t.vertexColors=!1,t.lightMapEnabled=e.hasLighting,t.dirLightMapEnabled=e.dirLightMap,t.useHeights=e.hasHeights,t.useNormals=e.hasNormals,t.useClearCoatNormals=e.hasClearCoatNormals,t.useAo=e.hasAo,t.diffuseMapEnabled=e.hasDiffuseMap}static updateEnvOptions(t,e,i,s){t.fog=e.useFog?s.fog:Bi,t.gamma=s.shaderOutputGamma,t.toneMap=e.useTonemap?s.toneMapping:ch,e.useSkybox&&i.envAtlas&&i.skybox?(t.reflectionSource=ya,t.reflectionEncoding=i.envAtlas.encoding,t.reflectionCubemapEncoding=i.skybox.encoding):e.useSkybox&&i.envAtlas?(t.reflectionSource=Ea,t.reflectionEncoding=i.envAtlas.encoding):e.useSkybox&&i.skybox?(t.reflectionSource=xa,t.reflectionEncoding=i.skybox.encoding):(t.reflectionSource=Bt,t.reflectionEncoding=null),e.ambientSH?(t.ambientSource=ro,t.ambientEncoding=null):t.reflectionSource!==Bt&&i.envAtlas?(t.ambientSource=no,t.ambientEncoding=i.envAtlas.encoding):(t.ambientSource=oo,t.ambientEncoding=null);const a=t.reflectionSource!==Bt;t.skyboxIntensity=a,t.useCubeMapRotation=a&&i._skyboxRotationShaderInclude}static updateLightingOptions(t,e,i,s,a){if(t.lightMapWithoutAmbient=!1,e.useLighting){const r=[],n=s?s>>16:li;t.lightMaskDynamic=!!(n&li),t.lightMapWithoutAmbient=!1,a&&(He.collectLights($,a[$],r,n),i.clusteredLightingEnabled||(He.collectLights(Te,a[Te],r,n),He.collectLights(fe,a[fe],r,n))),t.lights=r}else t.lights=[];(t.lights.length===0&&!i.clusteredLightingEnabled||(s&Ca)!==0)&&(t.noShadow=!0)}static collectLights(t,e,i,s){for(let a=0;a<e.length;a++){const r=e[a];r.enabled&&r.mask&s&&i.push(r)}}}const Hr={vertex_normal:Ri,vertex_tangent:Oi,vertex_texCoord0:Ua,vertex_texCoord1:Ba,vertex_color:gt,vertex_boneWeights:ri,vertex_boneIndices:ni};class gv{constructor(t,e,i=!0){o(this,"varyingsCode","");o(this,"device");o(this,"options");o(this,"shaderLanguage");o(this,"vDefines",new Map);o(this,"fDefines",new Map);o(this,"includes",new Map);o(this,"chunks",null);this.device=t,this.options=e;const s=e.shaderChunks;if(this.shaderLanguage=t.isWebGPU&&i&&(!s||s.useWGSL)?ue:ae,t.isWebGPU&&this.shaderLanguage===ae&&t.hasTranspilers,this.attributes={vertex_position:ge},e.userAttributes)for(const[r,n]of Object.entries(e.userAttributes))this.attributes[n]=r;const a=ne.get(t,this.shaderLanguage);this.chunks=new Map(a),s&&(this.shaderLanguage===ae?s.glsl:s.wgsl).forEach((n,l)=>{for(const d in Hr)Hr.hasOwnProperty(d)&&n.indexOf(d)>=0&&(this.attributes[d]=Hr[d]);this.chunks.set(l,n)}),this.shaderPassInfo=Tt.get(this.device).getByIndex(e.pass),this.shadowPass=this.shaderPassInfo.isShadow,this.lighting=e.lights.length>0||e.dirLightMapEnabled||e.clusteredLightingEnabled,this.reflections=e.reflectionSource!==Bt,this.needsNormal=this.lighting||this.reflections||e.useSpecular||e.ambientSH||e.useHeights||e.enableGGXSpecular||e.clusteredLightingEnabled&&!this.shadowPass||e.useClearCoatNormals,this.needsNormal=this.needsNormal&&!this.shadowPass,this.needsSceneColor=e.useDynamicRefraction,this.needsScreenSize=e.useDynamicRefraction,this.needsTransforms=e.useDynamicRefraction,this.vshader=null,this.fshader=null}fDefineSet(t,e,i=""){t&&this.fDefines.set(e,i)}sharedDefineSet(t,e,i=""){t&&(this.vDefines.set(e,i),this.fDefines.set(e,i))}generateVertexShader(t,e,i){const{options:s,vDefines:a,attributes:r}=this,n=new Map;if(n.set("vPositionW","vec3"),(s.nineSlicedMode===co||s.nineSlicedMode===ho)&&a.set("NINESLICED",!0),this.options.linearDepth&&(a.set("LINEAR_DEPTH",!0),n.set("vLinearDepth","float")),this.needsNormal&&a.set("NORMALS",!0),this.options.useInstancing){const h=ne.get(this.device,this.shaderLanguage);this.chunks.get("transformInstancingVS")===h.get("transformInstancingVS")&&(r.instance_line1=Fn,r.instance_line2=Un,r.instance_line3=Bn,r.instance_line4=vs)}this.needsNormal&&(r.vertex_normal=Ri,n.set("vNormalW","vec3"),s.hasTangents&&(s.useHeights||s.useNormals||s.useClearCoatNormals||s.enableGGXSpecular)?(a.set("TANGENTS",!0),r.vertex_tangent=Oi,n.set("vTangentW","vec3"),n.set("vBinormalW","vec3")):s.enableGGXSpecular&&(a.set("GGX_SPECULAR",!0),n.set("vObjectSpaceUpW","vec3")));const l=2;for(let h=0;h<l;h++)t[h]&&(a.set(`UV${h}`,!0),r[`vertex_texCoord${h}`]=`TEXCOORD${h}`),e[h]&&(a.set(`UV${h}_UNMODIFIED`,!0),n.set(`vUv${h}`,"vec2"));let d=0;const f=new Set;i.forEach(h=>{const{id:u,uv:p,name:m}=h,g=u+p*100;if(!f.has(g)){f.add(g),n.set(`vUV${p}_${u}`,"vec2");const v=`texture_${m}MapTransform`;a.set(`{TRANSFORM_NAME_${d}}`,v),a.set(`{TRANSFORM_UV_${d}}`,p),a.set(`{TRANSFORM_ID_${d}}`,u),d++}}),a.set("UV_TRANSFORMS_COUNT",d),s.vertexColors&&(r.vertex_color=gt,a.set("VERTEX_COLOR",!0),n.set("vVertexColor","vec4"),s.useVertexColorGamma&&a.set("STD_VERTEX_COLOR_GAMMA","")),s.useMsdf&&s.msdfTextAttribute&&(r.vertex_outlineParameters=_d,r.vertex_shadowParameters=gd,a.set("MSDF",!0)),(s.useMorphPosition||s.useMorphNormal)&&(this.sharedDefineSet(!0,"MORPHING",!0),this.sharedDefineSet(s.useMorphTextureBasedInt,"MORPHING_INT",!0),this.sharedDefineSet(s.useMorphPosition,"MORPHING_POSITION",!0),this.sharedDefineSet(s.useMorphNormal,"MORPHING_NORMAL",!0),r.morph_vertex_id=vs),s.skin&&(r.vertex_boneIndices=ni,s.batch?this.sharedDefineSet(!0,"BATCH",!0):(r.vertex_boneWeights=ri,this.sharedDefineSet(!0,"SKIN",!0))),this.sharedDefineSet(s.useInstancing,"INSTANCING",!0),this.sharedDefineSet(s.screenSpace,"SCREENSPACE",!0),s.pixelSnap&&a.set("PIXELSNAP",!0),n.forEach((h,u)=>{this.varyingsCode+=`#define VARYING_${u.toUpperCase()}
`,this.varyingsCode+=this.shaderLanguage===ue?`varying ${u}: ${Fd.get(h)};
`:`varying ${h} ${u};
`}),this.includes.set("varyingsVS",this.varyingsCode),this.includes.set("varyingsPS",this.varyingsCode),this.vshader=`
						#include "litMainVS"
				`}_setupLightingDefines(t,e){const i=this.fDefines,s=this.options;if(this.fDefines.set("LIGHT_COUNT",s.lights.length),t&&i.set("AREA_LIGHTS",!0),e&&this.lighting&&(i.set("LIT_CLUSTERED_LIGHTS",!0),s.clusteredLightingCookiesEnabled&&i.set("CLUSTER_COOKIES",!0),s.clusteredLightingAreaLightsEnabled&&i.set("CLUSTER_AREALIGHTS",!0),s.lightMaskDynamic&&i.set("CLUSTER_MESH_DYNAMIC_LIGHTS",!0),s.clusteredLightingShadowsEnabled&&!s.noShadow)){const a=si.get(s.clusteredLightingShadowType);i.set("CLUSTER_SHADOWS",!0),i.set(`SHADOW_KIND_${a.kind}`,!0),i.set(`CLUSTER_SHADOW_TYPE_${a.kind}`,!0)}for(let a=0;a<s.lights.length;a++){const r=s.lights[a],n=r._type;if(e&&n!==$)continue;const l=t&&r._shape?r._shape:Ut,d=r._shadowType,f=r.castShadows&&!s.noShadow,h=si.get(d);i.set(`LIGHT${a}`,!0),i.set(`LIGHT${a}TYPE`,`${dl[n]}`),i.set(`LIGHT${a}SHADOWTYPE`,`${h.name}`),i.set(`LIGHT${a}SHAPE`,`${Gp[l]}`),i.set(`LIGHT${a}FALLOFF`,`${Xp[r._falloffMode]}`),r.affectSpecularity&&i.set(`LIGHT${a}AFFECT_SPECULARITY`,!0),r._cookie&&(n===fe&&!r._cookie._cubemap||n===Te&&r._cookie._cubemap)&&(i.set(`LIGHT${a}COOKIE`,!0),i.set(`{LIGHT${a}COOKIE_CHANNEL}`,r._cookieChannel),n===fe&&(r._cookieTransform&&i.set(`LIGHT${a}COOKIE_TRANSFORM`,!0),r._cookieFalloff&&i.set(`LIGHT${a}COOKIE_FALLOFF`,!0))),f&&(i.set(`LIGHT${a}CASTSHADOW`,!0),h.pcf&&i.set(`LIGHT${a}SHADOW_PCF`,!0),r._normalOffsetBias&&!r._isVsm&&i.set(`LIGHT${a}_SHADOW_SAMPLE_NORMAL_OFFSET`,!0),n===$&&(i.set(`LIGHT${a}_SHADOW_SAMPLE_ORTHO`,!0),r.cascadeBlend>0&&i.set(`LIGHT${a}_SHADOW_CASCADE_BLEND`,!0),r.numCascades>1&&i.set(`LIGHT${a}_SHADOW_CASCADES`,!0)),(h.pcf||h.pcss||this.device.isWebGPU)&&i.set(`LIGHT${a}_SHADOW_SAMPLE_SOURCE_ZBUFFER`,!0),n===Te&&i.set(`LIGHT${a}_SHADOW_SAMPLE_POINT`,!0)),f&&(i.set(`SHADOW_KIND_${h.kind}`,!0),n===$&&i.set("SHADOW_DIRECTIONAL",!0))}}prepareForwardPass(t){const{options:e}=this,s=e.clusteredLightingEnabled&&e.clusteredLightingAreaLightsEnabled||e.lights.some(n=>n._shape&&n._shape!==Ut),a=!e.lightMapEnabled||e.lightMapWithoutAmbient,r=this.needsNormal&&(e.useNormals||e.useClearCoatNormals||e.enableGGXSpecular&&!e.useHeights);e.useSpecular&&(this.fDefineSet(!0,"LIT_SPECULAR"),this.fDefineSet(this.reflections,"LIT_REFLECTIONS"),this.fDefineSet(e.useClearCoat,"LIT_CLEARCOAT"),this.fDefineSet(e.fresnelModel>0,"LIT_SPECULAR_FRESNEL"),this.fDefineSet(e.useSheen,"LIT_SHEEN"),this.fDefineSet(e.useIridescence,"LIT_IRIDESCENCE")),this.fDefineSet(this.lighting&&e.useSpecular||this.reflections,"LIT_SPECULAR_OR_REFLECTION"),this.fDefineSet(this.needsSceneColor,"LIT_SCENE_COLOR"),this.fDefineSet(this.needsScreenSize,"LIT_SCREEN_SIZE"),this.fDefineSet(this.needsTransforms,"LIT_TRANSFORMS"),this.fDefineSet(this.needsNormal,"LIT_NEEDS_NORMAL"),this.fDefineSet(this.lighting,"LIT_LIGHTING"),this.fDefineSet(e.useMetalness,"LIT_METALNESS"),this.fDefineSet(e.enableGGXSpecular,"LIT_GGX_SPECULAR"),this.fDefineSet(e.useAnisotropy,"LIT_ANISOTROPY"),this.fDefineSet(e.useSpecularityFactor,"LIT_SPECULARITY_FACTOR"),this.fDefineSet(e.useCubeMapRotation,"CUBEMAP_ROTATION"),this.fDefineSet(e.occludeSpecularFloat,"LIT_OCCLUDE_SPECULAR_FLOAT"),this.fDefineSet(e.separateAmbient,"LIT_SEPARATE_AMBIENT"),this.fDefineSet(e.twoSidedLighting,"LIT_TWO_SIDED_LIGHTING"),this.fDefineSet(e.lightMapEnabled,"LIT_LIGHTMAP"),this.fDefineSet(e.dirLightMapEnabled,"LIT_DIR_LIGHTMAP"),this.fDefineSet(e.skyboxIntensity>0,"LIT_SKYBOX_INTENSITY"),this.fDefineSet(e.clusteredLightingShadowsEnabled,"LIT_CLUSTERED_SHADOWS"),this.fDefineSet(e.clusteredLightingAreaLightsEnabled,"LIT_CLUSTERED_AREA_LIGHTS"),this.fDefineSet(r,"LIT_TBN"),this.fDefineSet(a,"LIT_ADD_AMBIENT"),this.fDefineSet(e.hasTangents,"LIT_TANGENTS"),this.fDefineSet(e.useNormals,"LIT_USE_NORMALS"),this.fDefineSet(e.useClearCoatNormals,"LIT_USE_CLEARCOAT_NORMALS"),this.fDefineSet(e.useRefraction,"LIT_REFRACTION"),this.fDefineSet(e.useDynamicRefraction,"LIT_DYNAMIC_REFRACTION"),this.fDefineSet(e.dispersion,"LIT_DISPERSION"),this.fDefineSet(e.useHeights,"LIT_HEIGHTS"),this.fDefineSet(e.opacityFadesSpecular,"LIT_OPACITY_FADES_SPECULAR"),this.fDefineSet(e.alphaToCoverage,"LIT_ALPHA_TO_COVERAGE"),this.fDefineSet(e.alphaTest,"LIT_ALPHA_TEST"),this.fDefineSet(e.useMsdf,"LIT_MSDF"),this.fDefineSet(e.ssao,"LIT_SSAO"),this.fDefineSet(e.useAo,"LIT_AO"),this.fDefineSet(e.occludeDirect,"LIT_OCCLUDE_DIRECT"),this.fDefineSet(e.msdfTextAttribute,"LIT_MSDF_TEXT_ATTRIBUTE"),this.fDefineSet(e.diffuseMapEnabled,"LIT_DIFFUSE_MAP"),this.fDefineSet(e.shadowCatcher,"LIT_SHADOW_CATCHER"),this.fDefineSet(!0,"LIT_FRESNEL_MODEL",kp[e.fresnelModel]),this.fDefineSet(!0,"LIT_NONE_SLICE_MODE",um[e.nineSlicedMode]),this.fDefineSet(!0,"LIT_BLEND_TYPE",Fp[e.blendType]),this.fDefineSet(!0,"LIT_CUBEMAP_PROJECTION",em[e.cubeMapProjection]),this.fDefineSet(!0,"LIT_OCCLUDE_SPECULAR",rm[e.occludeSpecular]),this.fDefineSet(!0,"LIT_REFLECTION_SOURCE",nm[e.reflectionSource]),this.fDefineSet(!0,"LIT_AMBIENT_SOURCE",om[e.ambientSource]),this.fDefineSet(!0,"{lightingUv}",t??""),this.fDefineSet(!0,"{reflectionDecode}",kt.decodeFunc(e.reflectionEncoding)),this.fDefineSet(!0,"{reflectionCubemapDecode}",kt.decodeFunc(e.reflectionCubemapEncoding)),this.fDefineSet(!0,"{ambientDecode}",kt.decodeFunc(e.ambientEncoding)),this._setupLightingDefines(s,e.clusteredLightingEnabled)}preparePrepassPass(){const{options:t}=this;this.fDefineSet(t.alphaTest,"LIT_ALPHA_TEST"),this.fDefineSet(!0,"STD_OPACITY_DITHER",vh[t.opacityShadowDither])}prepareShadowPass(){const{options:t}=this,e=this.shaderPassInfo.lightType,i=this.shaderPassInfo.shadowType,s=si.get(i),a=e===$||!s.vsm&&e===fe;this.fDefineSet(a,"PERSPECTIVE_DEPTH"),this.fDefineSet(!0,"LIGHT_TYPE",`${dl[e]}`),this.fDefineSet(!0,"SHADOW_TYPE",`${s.name}`),this.fDefineSet(t.alphaTest,"LIT_ALPHA_TEST")}generateFragmentShader(t,e,i){const s=this.options;this.includes.set("frontendDeclPS",t??""),this.includes.set("frontendCodePS",e??""),s.pass===qa||(s.pass===$a?this.preparePrepassPass():this.shadowPass?this.prepareShadowPass():this.prepareForwardPass(i)),this.fshader=`
						#include "litMainPS"
				`}}const Rh={generateKey(c){return`lit${Object.keys(c).sort().map(t=>{var e;return t==="shaderChunks"?((e=c.shaderChunks)==null?void 0:e.key)??"":t==="lights"?Rh.generateLightsKey(c):t+c[t]}).join(`
`)}`},generateLightsKey(c){return`lights:${c.lights.map(t=>!c.clusteredLightingEnabled||t._type===$?`${t.key},`:"").join("")}`}};class bs{constructor(){o(this,"defines",new Map);o(this,"forceUv1",!1);o(this,"specularTint",!1);o(this,"metalnessTint",!1);o(this,"glossTint",!1);o(this,"emissiveEncoding","linear");o(this,"lightMapEncoding","linear");o(this,"vertexColorGamma",!1);o(this,"packedNormal",!1);o(this,"normalDetailPackedNormal",!1);o(this,"clearCoatPackedNormal",!1);o(this,"glossInvert",!1);o(this,"sheenGlossInvert",!1);o(this,"clearCoatGlossInvert",!1);o(this,"useAO",!1);o(this,"litOptions",new bh)}get pass(){return this.litOptions.pass}}const Ii=[],Wr=c=>Object.keys(c).filter(t=>t!=="litOptions").sort();class vv extends Ls{constructor(){super(...arguments);o(this,"optionsContext",new bs);o(this,"optionsContextMin",new bs)}generateKey(e){let i;return e===this.optionsContextMin?(this.propsMin||(this.propsMin=Wr(e)),i=this.propsMin):e===this.optionsContext?(this.props||(this.props=Wr(e)),i=this.props):i=Wr(e),`standard:
${Ls.definesHash(e.defines)}
${i.map(r=>r+e[r]).join(`
`)}${Rh.generateKey(e.litOptions)}`}_getUvSourceExpression(e,i,s){const a=s[e],r=s[i],n=s.litOptions.pass===Ya;let l;return n&&s.litOptions.nineSlicedMode===co||n&&s.litOptions.nineSlicedMode===ho?l="nineSlicedUv":(a===0?l=`vUv${r}`:l=`vUV${r}_${a}`,s.heightMap&&e!=="heightMapTransform"&&(l+=" + dUvOffset")),l}_validateMapChunk(e,i,s,a){}_addMapDefines(e,i,s,a,r,n,l=null){const d=`${i}Map`,f=i.toUpperCase(),h=`${d}Uv`,u=`${d}Identifier`,p=`${d}Transform`,m=`${d}Channel`,g=`${i}VertexColorChannel`,v=`${i}Tint`,E=`${i}VertexColor`,S=`${i}Mode`,T=`${i}Invert`,y=a[v],C=a[E],x=a[d],A=a[u],w=a[S],L=r.get(s);if(x){e.set(`STD_${f}_TEXTURE`,"");const P=this._getUvSourceExpression(p,h,a);e.set(`{STD_${f}_TEXTURE_UV}`,P),e.set(`{STD_${f}_TEXTURE_CHANNEL}`,a[m]);const R=`{STD_${f}_TEXTURE_NAME}`;if(L.includes(R)){let O=`texture_${d}`;const B=n[A];B?O=B:(n[A]=O,e.set(`STD_${f}_TEXTURE_ALLOCATE`,"")),e.set(R,O)}if(l){const O=a[m]==="aaa"?"passThrough":kt.decodeFunc(l);e.set(`{STD_${f}_TEXTURE_DECODE}`,O)}}C&&(e.set(`STD_${f}_VERTEX`,""),e.set(`{STD_${f}_VERTEX_CHANNEL}`,a[g])),w&&e.set(`{STD_${f}_DETAILMODE}`,w),y&&e.set(`STD_${f}_CONSTANT`,""),a[T]&&e.set(`STD_${f}_INVERT`,"")}_correctChannel(e,i,s){if(s[e]>0){if(s[e]<i.length)return i.substring(0,s[e]);if(s[e]>i.length){let a=i;const r=a.charAt(a.length-1),n=s[e]-a.length;for(let l=0;l<n;l++)a+=r;return a}return i}}createVertexShader(e,i){const s=[],a=[],r=[];for(const l in Ii){const d=`${l}Map`;if(i[`${l}VertexColor`]){const f=`${l}VertexColorChannel`;i[f]=this._correctChannel(l,i[f],Ii)}if(i[d]){const f=`${d}Channel`,h=`${d}Transform`,u=`${d}Uv`;i[u]=Math.min(i[u],1),i[f]=this._correctChannel(l,i[f],Ii);const p=i[u];s[p]=!0,a[p]=a[p]||i[d]&&!i[h],i[h]&&r.push({name:l,id:i[h],uv:i[u]})}}i.forceUv1&&(s[1]=!0,a[1]=a[1]!==void 0?a[1]:!0),e.generateVertexShader(s,a,r)}prepareFragmentDefines(e,i,s){const a=(r,n,l="")=>{r&&i.set(n,l)};a(e.lightMap,"STD_LIGHTMAP",""),a(e.lightVertexColor,"STD_LIGHT_VERTEX_COLOR",""),a(e.dirLightMap&&e.litOptions.useSpecular,"STD_LIGHTMAP_DIR",""),a(e.heightMap,"STD_HEIGHT_MAP",""),a(e.useSpecularColor,"STD_SPECULAR_COLOR",""),a(e.aoMap||e.aoVertexColor||e.useAO,"STD_AO",""),a(!0,"STD_OPACITY_DITHER",vh[s.isForward?e.litOptions.opacityDither:e.litOptions.opacityShadowDither])}createShaderDefinition(e,i){const s=Tt.get(e).getByIndex(i.litOptions.pass),a=s.isForward,r=new gv(e,i.litOptions);this.createVertexShader(r,i);const n={};i.litOptions.fresnelModel=i.litOptions.fresnelModel===0?Qn:i.litOptions.fresnelModel;const l=r.fDefines;this.prepareFragmentDefines(i,l,s);let d="";if(a){if(i.heightMap&&this._addMapDefines(l,"height","parallaxPS",i,r.chunks,n),(i.litOptions.blendType!==oi||i.litOptions.alphaTest||i.litOptions.alphaToCoverage||i.litOptions.opacityDither!==ci)&&this._addMapDefines(l,"opacity","opacityPS",i,r.chunks,n),r.needsNormal){if((i.normalMap||i.clearCoatNormalMap)&&!i.litOptions.hasTangents){const p=i.normalMap?"normalMap":"clearCoatNormalMap";d=this._getUvSourceExpression(`${p}Transform`,`${p}Uv`,i)}this._addMapDefines(l,"normalDetail","normalMapPS",i,r.chunks,n,i.normalDetailPackedNormal?"xy":"xyz"),this._addMapDefines(l,"normal","normalMapPS",i,r.chunks,n,i.packedNormal?"xy":"xyz")}i.diffuseDetail&&this._addMapDefines(l,"diffuseDetail","diffusePS",i,r.chunks,n,i.diffuseDetailEncoding),this._addMapDefines(l,"diffuse","diffusePS",i,r.chunks,n,i.diffuseEncoding),i.litOptions.useRefraction&&(this._addMapDefines(l,"refraction","transmissionPS",i,r.chunks,n),this._addMapDefines(l,"thickness","thicknessPS",i,r.chunks,n)),i.litOptions.useIridescence&&(this._addMapDefines(l,"iridescence","iridescencePS",i,r.chunks,n),this._addMapDefines(l,"iridescenceThickness","iridescenceThicknessPS",i,r.chunks,n)),(r.lighting&&i.litOptions.useSpecular||r.reflections)&&(i.litOptions.useSheen&&(this._addMapDefines(l,"sheen","sheenPS",i,r.chunks,n,i.sheenEncoding),this._addMapDefines(l,"sheenGloss","sheenGlossPS",i,r.chunks,n)),i.litOptions.useMetalness&&(this._addMapDefines(l,"metalness","metalnessPS",i,r.chunks,n),this._addMapDefines(l,"ior","iorPS",i,r.chunks,n)),i.litOptions.useSpecularityFactor&&this._addMapDefines(l,"specularityFactor","specularityFactorPS",i,r.chunks,n),i.useSpecularColor&&this._addMapDefines(l,"specular","specularPS",i,r.chunks,n,i.specularEncoding),this._addMapDefines(l,"gloss","glossPS",i,r.chunks,n)),i.aoDetail&&this._addMapDefines(l,"aoDetail","aoPS",i,r.chunks,n),(i.aoMap||i.aoVertexColor||i.useAO)&&this._addMapDefines(l,"ao","aoPS",i,r.chunks,n),this._addMapDefines(l,"emissive","emissivePS",i,r.chunks,n,i.emissiveEncoding),i.litOptions.useClearCoat&&(this._addMapDefines(l,"clearCoat","clearCoatPS",i,r.chunks,n),this._addMapDefines(l,"clearCoatGloss","clearCoatGlossPS",i,r.chunks,n),this._addMapDefines(l,"clearCoatNormal","clearCoatNormalPS",i,r.chunks,n,i.clearCoatPackedNormal?"xy":"xyz")),i.litOptions.enableGGXSpecular&&this._addMapDefines(l,"anisotropy","anisotropyPS",i,r.chunks,n),(i.lightMap||i.lightVertexColor)&&this._addMapDefines(l,"light","lightmapPS",i,r.chunks,n,i.lightMapEncoding)}else{const p=i.litOptions.opacityShadowDither;(i.litOptions.alphaTest||p)&&this._addMapDefines(l,"opacity","opacityPS",i,r.chunks,n)}r.generateFragmentShader(r.chunks.get("stdDeclarationPS"),r.chunks.get("stdFrontEndPS"),d);const f=La.merge(r.chunks,r.includes),h=r.vDefines;i.defines.forEach((p,m)=>h.set(m,p)),i.defines.forEach((p,m)=>l.set(m,p));const u=_e.createDefinition(e,{name:"StandardShader",attributes:r.attributes,shaderLanguage:r.shaderLanguage,vertexCode:r.vshader,fragmentCode:r.fshader,vertexIncludes:f,fragmentIncludes:f,fragmentDefines:l,vertexDefines:h});return r.shaderPassInfo.isForward&&(u.tag=_u),u}}const Xr=new vv,oc=(c,t)=>{if(c.length!==t.length)return!1;for(let e=0;e<c.length;++e)if(c[e]!==t[e])return!1;return!0},Sv=c=>c.r!==1||c.g!==1||c.b!==1,Tv=c=>c.r!==0||c.g!==0||c.b!==0;class Ev{constructor(){this._mapXForms=null}updateMinRef(t,e,i,s,a,r){this._updateSharedOptions(t,e,i,s,a),this._updateMinOptions(t,i,a),this._updateUVOptions(t,i,s,!0)}updateRef(t,e,i,s,a,r,n){this._updateSharedOptions(t,e,s,a,r),this._updateEnvOptions(t,s,e,i),this._updateMaterialOptions(t,s,e),t.litOptions.hasTangents=a&&(a&lo)!==0,this._updateLightOptions(t,e,s,a,n),this._updateUVOptions(t,s,a,!1,i)}_updateSharedOptions(t,e,i,s,a){t.forceUv1=i.forceUv1,i.userAttributes&&(t.litOptions.userAttributes=Object.fromEntries(i.userAttributes.entries())),t.litOptions.shaderChunks=i.shaderChunks,t.litOptions.pass=a,t.litOptions.alphaTest=i.alphaTest>0,t.litOptions.blendType=i.blendType,t.litOptions.screenSpace=s&&(s&Aa)!==0,t.litOptions.skin=s&&(s&Es)!==0,t.litOptions.batch=s&&(s&da)!==0,t.litOptions.useInstancing=s&&(s&ys)!==0,t.litOptions.useMorphPosition=s&&(s&xs)!==0,t.litOptions.useMorphNormal=s&&(s&Cs)!==0,t.litOptions.useMorphTextureBasedInt=s&&(s&As)!==0,t.litOptions.nineSlicedMode=i.nineSlicedMode||0,e.clusteredLightingEnabled&&i.useLighting?(t.litOptions.clusteredLightingEnabled=!0,t.litOptions.clusteredLightingCookiesEnabled=e.lighting.cookiesEnabled,t.litOptions.clusteredLightingShadowsEnabled=e.lighting.shadowsEnabled,t.litOptions.clusteredLightingShadowType=e.lighting.shadowType,t.litOptions.clusteredLightingAreaLightsEnabled=e.lighting.areaLightsEnabled):(t.litOptions.clusteredLightingEnabled=!1,t.litOptions.clusteredLightingCookiesEnabled=!1,t.litOptions.clusteredLightingShadowsEnabled=!1,t.litOptions.clusteredLightingAreaLightsEnabled=!1)}_updateUVOptions(t,e,i,s,a){let r=!1,n=!1,l=!1;i&&(r=(i&uh)!==0,n=(i&ph)!==0,l=(i&mh)!==0),t.litOptions.vertexColors=!1,this._mapXForms=[];const d={};for(const f in Ii)this._updateTexOptions(t,e,f,r,n,l,s,d);this._mapXForms=null,t.litOptions.ssao=a==null?void 0:a.ssaoEnabled,t.useAO=t.litOptions.ssao,t.litOptions.lightMapEnabled=t.lightMap,t.litOptions.dirLightMapEnabled=t.dirLightMap,t.litOptions.useHeights=t.heightMap,t.litOptions.useNormals=t.normalMap,t.litOptions.useClearCoatNormals=t.clearCoatNormalMap,t.litOptions.useAo=t.aoMap||t.aoVertexColor||t.litOptions.ssao,t.litOptions.diffuseMapEnabled=t.diffuseMap}_updateTexOptions(t,e,i,s,a,r,n,l){const d=i==="opacity";if(!n||d){const f=`${i}Map`,h=`${i}VertexColor`,u=`${i}VertexColorChannel`,p=`${f}Channel`,m=`${f}Transform`,g=`${f}Uv`,v=`${f}Identifier`;if(i!=="light"&&(t[f]=!1,t[v]=void 0,t[p]="",t[m]=0,t[g]=0),t[h]=!1,t[u]="",d&&e.blendType===oi&&e.alphaTest===0&&!e.alphaToCoverage&&e.opacityDither===ci)return;if(i!=="height"&&e[h]&&r&&(t[h]=e[h],t[u]=e[u],t.litOptions.vertexColors=!0),e[f]){let E=!0;if(e[g]===0&&!s&&(E=!1),e[g]===1&&!a&&(E=!1),E){const S=e[f].id;let T=l[S];T===void 0&&(l[S]=i,T=i),t[f]=!!e[f],t[v]=T,t[m]=this._getMapTransformID(e.getUniform(m),e[g]),t[p]=e[p],t[g]=e[g]}}}}_updateMinOptions(t,e,i){const s=i===$a;t.litOptions.opacityShadowDither=s?e.opacityDither:e.opacityShadowDither,t.litOptions.linearDepth=s,t.litOptions.lights=[]}_updateMaterialOptions(t,e,i){var f,h,u,p,m,g;const s=!!(e.useMetalness||e.specularMap||e.sphereMap||e.cubeMap||Tv(e.specular)||e.specularityFactor>0&&e.useMetalness||e.enableGGXSpecular||e.clearCoat>0),a=!e.useMetalness||e.useMetalnessSpecularColor,r=s&&(e.specularTint||Sv(e.specular)),n=s&&e.useMetalnessSpecularColor&&(e.specularityFactorTint||e.specularityFactor!==1),l=v=>v?v.format===Bc||v.type===ln:!1,d=(v,E)=>Math.abs(v-E)<1e-4;t.specularTint=r,t.specularityFactorTint=n,t.metalnessTint=e.useMetalness&&e.metalness<1,t.glossTint=!0,t.diffuseEncoding=(f=e.diffuseMap)==null?void 0:f.encoding,t.diffuseDetailEncoding=(h=e.diffuseDetailMap)==null?void 0:h.encoding,t.emissiveEncoding=(u=e.emissiveMap)==null?void 0:u.encoding,t.lightMapEncoding=(p=e.lightMap)==null?void 0:p.encoding,t.packedNormal=l(e.normalMap),t.refractionTint=!d(e.refraction,1),t.refractionIndexTint=!d(e.refractionIndex,1/1.5),t.thicknessTint=e.useDynamicRefraction&&e.thickness!==1,t.specularEncoding=(m=e.specularMap)==null?void 0:m.encoding,t.sheenEncoding=(g=e.sheenMap)==null?void 0:g.encoding,t.aoMapUv=e.aoUvSet,t.aoDetail=!!e.aoDetailMap,t.diffuseDetail=!!e.diffuseDetailMap,t.normalDetail=!!e.normalMap,t.normalDetailPackedNormal=l(e.normalDetailMap),t.diffuseDetailMode=e.diffuseDetailMode,t.aoDetailMode=e.aoDetailMode,t.clearCoatGloss=!!e.clearCoatGloss,t.clearCoatPackedNormal=l(e.clearCoatNormalMap),t.iorTint=!d(e.refractionIndex,1/1.5),i.forcePassThroughSpecular&&(t.specularEncoding="linear",t.sheenEncoding="linear"),t.iridescenceTint=e.iridescence!==1,t.glossInvert=e.glossInvert,t.sheenGlossInvert=e.sheenGlossInvert,t.clearCoatGlossInvert=e.clearCoatGlossInvert,t.useSpecularColor=a,t.litOptions.separateAmbient=!1,t.litOptions.pixelSnap=e.pixelSnap,t.litOptions.ambientSH=!!e.ambientSH,t.litOptions.twoSidedLighting=e.twoSidedLighting,t.litOptions.occludeSpecular=e.occludeSpecular,t.litOptions.occludeSpecularFloat=e.occludeSpecularIntensity!==1,t.litOptions.useMsdf=!!e.msdfMap,t.litOptions.msdfTextAttribute=!!e.msdfTextAttribute,t.litOptions.alphaToCoverage=e.alphaToCoverage,t.litOptions.opacityFadesSpecular=e.opacityFadesSpecular,t.litOptions.opacityDither=e.opacityDither,t.litOptions.cubeMapProjection=e.cubeMapProjection,t.litOptions.occludeDirect=e.occludeDirect,t.litOptions.useSpecular=s,t.litOptions.useSpecularityFactor=(n||!!e.specularityFactorMap)&&e.useMetalnessSpecularColor,t.litOptions.enableGGXSpecular=e.enableGGXSpecular,t.litOptions.useAnisotropy=e.enableGGXSpecular&&(e.anisotropyIntensity>0||!!e.anisotropyMap),t.litOptions.fresnelModel=e.fresnelModel,t.litOptions.useRefraction=(e.refraction||!!e.refractionMap)&&(e.useDynamicRefraction||t.litOptions.reflectionSource!==Bt),t.litOptions.useClearCoat=!!e.clearCoat,t.litOptions.useSheen=e.useSheen,t.litOptions.useIridescence=e.useIridescence&&e.iridescence!==0,t.litOptions.useMetalness=e.useMetalness,t.litOptions.useDynamicRefraction=e.useDynamicRefraction,t.litOptions.dispersion=e.dispersion>0,t.litOptions.shadowCatcher=e.shadowCatcher,t.litOptions.useVertexColorGamma=e.vertexColorGamma}_updateEnvOptions(t,e,i,s){t.litOptions.fog=e.useFog?s.fog:Bi,t.litOptions.gamma=s.shaderOutputGamma,t.litOptions.toneMap=e.useTonemap?s.toneMapping:ch;let a=!1;if(e.envAtlas&&e.cubeMap?(t.litOptions.reflectionSource=ya,t.litOptions.reflectionEncoding=e.envAtlas.encoding,t.litOptions.reflectionCubemapEncoding=e.cubeMap.encoding):e.envAtlas?(t.litOptions.reflectionSource=Ea,t.litOptions.reflectionEncoding=e.envAtlas.encoding):e.cubeMap?(t.litOptions.reflectionSource=xa,t.litOptions.reflectionEncoding=e.cubeMap.encoding):e.sphereMap?(t.litOptions.reflectionSource=fh,t.litOptions.reflectionEncoding=e.sphereMap.encoding):e.useSkybox&&i.envAtlas&&i.skybox?(t.litOptions.reflectionSource=ya,t.litOptions.reflectionEncoding=i.envAtlas.encoding,t.litOptions.reflectionCubemapEncoding=i.skybox.encoding,a=!0):e.useSkybox&&i.envAtlas?(t.litOptions.reflectionSource=Ea,t.litOptions.reflectionEncoding=i.envAtlas.encoding,a=!0):e.useSkybox&&i.skybox?(t.litOptions.reflectionSource=xa,t.litOptions.reflectionEncoding=i.skybox.encoding,a=!0):(t.litOptions.reflectionSource=Bt,t.litOptions.reflectionEncoding=null),e.ambientSH)t.litOptions.ambientSource=ro,t.litOptions.ambientEncoding=null;else{const r=e.envAtlas||(e.useSkybox&&i.envAtlas?i.envAtlas:null);r&&!e.sphereMap?(t.litOptions.ambientSource=no,t.litOptions.ambientEncoding=r.encoding):(t.litOptions.ambientSource=oo,t.litOptions.ambientEncoding=null)}t.litOptions.skyboxIntensity=a,t.litOptions.useCubeMapRotation=a&&i._skyboxRotationShaderInclude}_updateLightOptions(t,e,i,s,a){if(t.lightMap=!1,t.lightMapChannel="",t.lightMapUv=0,t.lightMapTransform=0,t.litOptions.lightMapWithoutAmbient=!1,t.dirLightMap=!1,s&&(t.litOptions.noShadow=(s&Ca)!==0,(s&lm)!==0&&(t.lightMapEncoding=e.lightmapPixelFormat===je?"rgbm":"linear",t.lightMap=!0,t.lightMapChannel="rgb",t.lightMapUv=1,t.lightMapTransform=0,t.litOptions.lightMapWithoutAmbient=!i.lightMap,(s&cm)!==0&&(t.dirLightMap=!0),(s&dm)!==0&&(t.litOptions.lightMapWithoutAmbient=!1))),i.useLighting){const r=[],n=s?s>>16:li;t.litOptions.lightMaskDynamic=!!(n&li),a&&(He.collectLights($,a[$],r,n),e.clusteredLightingEnabled||(He.collectLights(Te,a[Te],r,n),He.collectLights(fe,a[fe],r,n))),t.litOptions.lights=r}else t.litOptions.lights=[];t.litOptions.lights.length===0&&!e.clusteredLightingEnabled&&(t.litOptions.noShadow=!0)}_getMapTransformID(t,e){if(!t)return 0;let i=this._mapXForms[e];i||(i=[],this._mapXForms[e]=i);for(let s=0;s<i.length;s++)if(oc(i[s][0].value,t[0].value)&&oc(i[s][1].value,t[1].value))return s+1;return i.push(t)}}function te(c,t=!0,e=!0){const i={};return i[`${c}Map`]="texture",i[`${c}MapTiling`]="vec2",i[`${c}MapOffset`]="vec2",i[`${c}MapRotation`]="number",i[`${c}MapUv`]="number",t&&(i[`${c}MapChannel`]="string",e&&(i[`${c}VertexColor`]="boolean",i[`${c}VertexColorChannel`]="string")),i}const Ia={name:"string",chunks:"chunks",mappingFormat:"string",_engine:"boolean",ambient:"rgb",...te("ao"),...te("aoDetail",!0,!1),aoDetailMode:"string",aoIntensity:"number",diffuse:"rgb",...te("diffuse"),...te("diffuseDetail",!0,!1),diffuseDetailMode:"string",vertexColorGamma:"boolean",specular:"rgb",specularTint:"boolean",...te("specular"),occludeSpecular:"enum:occludeSpecular",specularityFactor:"number",specularityFactorTint:"boolean",...te("specularityFactor"),useMetalness:"boolean",metalness:"number",enableGGXSpecular:"boolean",metalnessTint:"boolean",...te("metalness"),useMetalnessSpecularColor:"boolean",anisotropyIntensity:"number",anisotropyRotation:"number",...te("anisotropy"),shininess:"number",gloss:"number",glossInvert:"boolean",...te("gloss"),clearCoat:"number",...te("clearCoat"),clearCoatGloss:"number",clearCoatGlossInvert:"boolean",...te("clearCoatGloss"),clearCoatBumpiness:"number",...te("clearCoatNormal",!1),useSheen:"boolean",sheen:"rgb",...te("sheen"),sheenGloss:"number",sheenGlossInvert:"boolean",...te("sheenGloss"),fresnelModel:"number",emissive:"rgb",...te("emissive"),emissiveIntensity:"number",...te("normal",!1),bumpiness:"number",...te("normalDetail",!1),normalDetailMapBumpiness:"number",...te("height",!0,!1),heightMapFactor:"number",alphaToCoverage:"boolean",alphaTest:"number",alphaFade:"number",alphaDither:"number",opacity:"number",...te("opacity"),opacityFadesSpecular:"boolean",opacityDither:"string",opacityShadowDither:"string",reflectivity:"number",refraction:"number",refractionTint:"boolean",...te("refraction"),refractionIndex:"number",dispersion:"number",thickness:"number",thicknessTint:"boolean",...te("thickness"),attenuation:"rgb",attenuationDistance:"number",useDynamicRefraction:"boolean",sphereMap:"texture",cubeMap:"cubemap",cubeMapProjection:"number",cubeMapProjectionBox:"boundingbox",useIridescence:"boolean",iridescence:"number",iridescenceTint:"boolean",...te("iridescence"),iridescenceThicknessTint:"boolean",iridescenceThicknessMin:"number",iridescenceThicknessMax:"number",iridescenceRefractionIndex:"number",...te("iridescenceThickness"),...te("light"),depthTest:"boolean",depthFunc:"enum:depthFunc",depthWrite:"boolean",depthBias:"number",slopeDepthBias:"number",cull:"enum:cull",blendType:"enum:blendType",useFog:"boolean",useLighting:"boolean",useSkybox:"boolean",useTonemap:"boolean",envAtlas:"texture",twoSidedLighting:"boolean",shadowCatcher:"boolean"},So=[];for(const c in Ia)Ia[c]==="texture"&&So.push(c);const Mh=[];for(const c in Ia)Ia[c]==="cubemap"&&Mh.push(c);const DA={aoMapVertexColor:"boolean",diffuseMapTint:"boolean",diffuseMapVertexColor:"boolean",emissiveMapTint:"boolean",emissiveMapVertexColor:"boolean",glossMapVertexColor:"boolean",metalnessMapVertexColor:"boolean",opacityMapVertexColor:"boolean",specularAntialias:"boolean",specularMapTint:"boolean",specularMapVertexColor:"boolean",ambientTint:"boolean",emissiveTint:"boolean",diffuseTint:"boolean",sheenTint:"boolean",conserveEnergy:"boolean",useGamma:"boolean",useGammaTonemap:"boolean",sheenGlossTint:"boolean",anisotropy:"boolean"},fa={},Nh={};let Zi=new Set;const ra=new U;class Le extends zi{constructor(){super();o(this,"userAttributes",new Map);o(this,"onUpdateShader");this._assetReferences={},this._activeParams=new Set,this._activeLightingParams=new Set,this.shaderOptBuilder=new Ev,this.reset()}reset(){Object.keys(fa).forEach(e=>{this[`_${e}`]=fa[e].value()}),this._uniformCache={}}copy(e){return super.copy(e),Object.keys(fa).forEach(i=>{this[i]=e[i]}),this._alphaDither=e._alphaDither,this.userAttributes=new Map(e.userAttributes),this}setAttribute(e,i){this.userAttributes.set(i,e)}_setParameter(e,i){Zi.add(e),this.setParameter(e,i)}_setParameters(e){e.forEach(i=>{this._setParameter(i.name,i.value)})}_processParameters(e){const i=this[e];i.forEach(s=>{Zi.has(s)||delete this.parameters[s]}),this[e]=Zi,Zi=i,Zi.clear()}_updateMap(e){const i=`${e}Map`,s=this[i];if(s){this._setParameter(`texture_${i}`,s);const a=`${i}Transform`,r=this.getUniform(a);r&&this._setParameters(r)}}_allocUniform(e,i){let s=this._uniformCache[e];return s||(s=i(),this._uniformCache[e]=s),s}getUniform(e,i,s){return Nh[e](this,i,s)}updateUniforms(e,i){const s=l=>this.getUniform(l,e,i);this._setParameter("material_ambient",s("ambient")),this._setParameter("material_diffuse",s("diffuse")),this._setParameter("material_aoIntensity",this.aoIntensity);const a=this.specular.r!==1||this.specular.g!==1||this.specular.b!==1,r=!this.specularMap||this.specularTint||a;this.useMetalness?((!this.metalnessMap||this.metalness<1)&&this._setParameter("material_metalness",this.metalness),r&&this._setParameter("material_specular",s("specular")),(!this.specularityFactorMap||this.specularityFactorTint||this.specularityFactor!==1)&&this._setParameter("material_specularityFactor",this.specularityFactor),this._setParameter("material_sheen",s("sheen")),this._setParameter("material_sheenGloss",this.sheenGloss),this._setParameter("material_refractionIndex",this.refractionIndex)):r&&this._setParameter("material_specular",s("specular")),this.enableGGXSpecular&&(this._setParameter("material_anisotropyIntensity",this.anisotropyIntensity),this._setParameter("material_anisotropyRotation",[Math.cos(this.anisotropyRotation*I.DEG_TO_RAD),Math.sin(this.anisotropyRotation*I.DEG_TO_RAD)])),this.clearCoat>0&&(this._setParameter("material_clearCoat",this.clearCoat),this._setParameter("material_clearCoatGloss",this.clearCoatGloss),this._setParameter("material_clearCoatBumpiness",this.clearCoatBumpiness)),this._setParameter("material_gloss",this.gloss),this._setParameter("material_emissive",s("emissive")),this._setParameter("material_emissiveIntensity",this.emissiveIntensity),this.refraction>0&&this._setParameter("material_refraction",this.refraction),this.dispersion>0&&this._setParameter("material_dispersion",this.dispersion),this.useDynamicRefraction&&(this._setParameter("material_thickness",this.thickness),this._setParameter("material_attenuation",s("attenuation")),this._setParameter("material_invAttenuationDistance",this.attenuationDistance===0?0:1/this.attenuationDistance)),this.useIridescence&&(this._setParameter("material_iridescence",this.iridescence),this._setParameter("material_iridescenceRefractionIndex",this.iridescenceRefractionIndex),this._setParameter("material_iridescenceThicknessMin",this.iridescenceThicknessMin),this._setParameter("material_iridescenceThicknessMax",this.iridescenceThicknessMax)),this._setParameter("material_opacity",this.opacity);const n=this._opacity>0?this.alphaDither/this._opacity:1;this._setParameter("material_alphaDitherScale",n),this.opacityFadesSpecular===!1&&this._setParameter("material_alphaFade",this.alphaFade),this.occludeSpecular&&this._setParameter("material_occludeSpecularIntensity",this.occludeSpecularIntensity),this.cubeMapProjection===lh&&this._setParameter(s("cubeMapProjectionBox"));for(const l in Ii)this._updateMap(l);this.ambientSH&&this._setParameter("ambientSH[0]",this.ambientSH),this.normalMap&&this._setParameter("material_bumpiness",this.bumpiness),this.normalMap&&this.normalDetailMap&&this._setParameter("material_normalDetailMapBumpiness",this.normalDetailMapBumpiness),this.heightMap&&this._setParameter("material_heightMapFactor",s("heightMapFactor")),this.envAtlas&&this.cubeMap?(this._setParameter("texture_envAtlas",this.envAtlas),this._setParameter("texture_cubeMap",this.cubeMap)):this.envAtlas?this._setParameter("texture_envAtlas",this.envAtlas):this.cubeMap?this._setParameter("texture_cubeMap",this.cubeMap):this.sphereMap&&this._setParameter("texture_sphereMap",this.sphereMap),this._setParameter("material_reflectivity",this.reflectivity),this._processParameters("_activeParams"),super.updateUniforms(e,i)}updateEnvUniforms(e,i){!(this.envAtlas||this.cubeMap||this.sphereMap)&&this.useSkybox&&(i.envAtlas&&i.skybox?(this._setParameter("texture_envAtlas",i.envAtlas),this._setParameter("texture_cubeMap",i.skybox)):i.envAtlas?this._setParameter("texture_envAtlas",i.envAtlas):i.skybox&&this._setParameter("texture_cubeMap",i.skybox)),this._processParameters("_activeLightingParams")}getShaderVariant(e){const{device:i,scene:s,pass:a,objDefs:r,sortedLights:n,cameraShaderParams:l}=e;this.updateEnvUniforms(i,s);const d=Tt.get(i).getByIndex(a),f=a===qa||a===$a||d.isShadow;let h=f?Xr.optionsContextMin:Xr.optionsContext;h.defines=zt.getCoreDefines(this,e),f?this.shaderOptBuilder.updateMinRef(h,s,this,r,a,n):this.shaderOptBuilder.updateRef(h,s,l,this,r,a,n),this.useFog||h.defines.set("FOG","NONE"),h.defines.set("TONEMAP",dh[h.litOptions.toneMap]),this.onUpdateShader&&(h=this.onUpdateShader(h));const u=new fo(e.viewUniformFormat,e.vertexFormat),p=ws(i);return p.register("standard",Xr),p.getProgram("standard",h,u,this.userId)}destroy(){for(const e in this._assetReferences)this._assetReferences[e]._unbind();this._assetReferences=null,super.destroy()}}o(Le,"TEXTURE_PARAMETERS",So),o(Le,"CUBEMAP_PARAMETERS",Mh);const ja=(c,t)=>{Nh[c]=t},To=(c,t,e,i)=>{Object.defineProperty(Le.prototype,c,{get:i||function(){return this[`_${c}`]},set:e}),fa[c]={value:t}},yv=c=>{const t=`_${c.name}`,e=c.dirtyShaderFunc||(()=>!0),i=function(s){const a=this[t];a!==s&&(this._dirtyShader=this._dirtyShader||e(a,s),this[t]=s)};To(c.name,()=>c.defaultValue,i,c.getterFunc)},xv=c=>{const t=`_${c.name}`,e=c.dirtyShaderFunc||(()=>!0),i=function(s){const a=this[t];a.equals(s)||(this._dirtyShader=this._dirtyShader||e(a,s),this[t]=a.copy(s))};To(c.name,()=>c.defaultValue.clone(),i,c.getterFunc)},be=c=>c.defaultValue&&c.defaultValue.clone?xv(c):yv(c);function ee(c,t="rgb",e=!0,i=0){Ii[c]=t.length||-1,be({name:`${c}Map`,defaultValue:null,dirtyShaderFunc:(l,d)=>!!l!=!!d||l&&(l.type!==d.type||l.format!==d.format)}),be({name:`${c}MapTiling`,defaultValue:new k(1,1)}),be({name:`${c}MapOffset`,defaultValue:new k(0,0)}),be({name:`${c}MapRotation`,defaultValue:0}),be({name:`${c}MapUv`,defaultValue:i}),t&&(be({name:`${c}MapChannel`,defaultValue:t}),e&&(be({name:`${c}VertexColor`,defaultValue:!1}),be({name:`${c}VertexColorChannel`,defaultValue:t})));const s=`${c}MapTiling`,a=`${c}MapOffset`,r=`${c}MapRotation`,n=`${c}MapTransform`;ja(n,(l,d,f)=>{const h=l[s],u=l[a],p=l[r];if(h.x===1&&h.y===1&&u.x===0&&u.y===0&&p===0)return null;const m=l._allocUniform(n,()=>[{name:`texture_${n}0`,value:new Float32Array(3)},{name:`texture_${n}1`,value:new Float32Array(3)}]),g=Math.cos(p*I.DEG_TO_RAD),v=Math.sin(p*I.DEG_TO_RAD),E=m[0].value;E[0]=g*h.x,E[1]=-v*h.y,E[2]=u.x;const S=m[1].value;return S[0]=v*h.x,S[1]=g*h.y,S[2]=1-h.y-u.y,m})}function Ti(c,t){be({name:c,defaultValue:t,getterFunc:function(){return this._dirtyShader=!0,this[`_${c}`]}}),ja(c,(e,i,s)=>{const a=e._allocUniform(c,()=>new Float32Array(3)),r=e[c];return ra.linear(r),a[0]=ra.r,a[1]=ra.g,a[2]=ra.b,a})}function Y(c,t,e){be({name:c,defaultValue:t,dirtyShaderFunc:(i,s)=>(i===0||i===1)!=(s===0||s===1)}),ja(c,e)}function Ji(c,t){be({name:c,defaultValue:null,dirtyShaderFunc:(e,i)=>!!e==!!i}),ja(c,t)}function z(c,t){be({name:c,defaultValue:t})}function Cv(){Ti("ambient",new U(1,1,1)),Ti("diffuse",new U(1,1,1)),Ti("specular",new U(0,0,0)),Ti("emissive",new U(0,0,0)),Ti("sheen",new U(1,1,1)),Ti("attenuation",new U(1,1,1)),Y("emissiveIntensity",1),Y("specularityFactor",1),Y("sheenGloss",0),Y("gloss",.25),Y("aoIntensity",1),Y("heightMapFactor",1,(i,s,a)=>i.heightMapFactor*.025),Y("opacity",1),Y("alphaFade",1),be({name:"alphaDither",defaultValue:null,dirtyShaderFunc:()=>!1,getterFunc:function(){return this._alphaDither??this._opacity}}),Y("alphaTest",0),Y("bumpiness",1),Y("normalDetailMapBumpiness",1),Y("reflectivity",1),Y("occludeSpecularIntensity",1),Y("refraction",0),Y("refractionIndex",1/1.5,(i,s,a)=>Math.max(.001,i.refractionIndex)),Y("dispersion",0),Y("thickness",0),Y("attenuationDistance",0),Y("metalness",1),Y("anisotropyIntensity",0),Y("anisotropyRotation",0),Y("clearCoat",0),Y("clearCoatGloss",1),Y("clearCoatBumpiness",1),Y("aoUvSet",0,null),Y("iridescence",0),Y("iridescenceRefractionIndex",1/1.5),Y("iridescenceThicknessMin",0),Y("iridescenceThicknessMax",0),Ji("ambientSH"),Ji("cubeMapProjectionBox",(i,s,a)=>{const r=i._allocUniform("cubeMapProjectionBox",()=>[{name:"envBoxMin",value:new Float32Array(3)},{name:"envBoxMax",value:new Float32Array(3)}]),n=i.cubeMapProjectionBox.getMin(),l=r[0].value;l[0]=n.x,l[1]=n.y,l[2]=n.z;const d=i.cubeMapProjectionBox.getMax(),f=r[1].value;return f[0]=d.x,f[1]=d.y,f[2]=d.z,r}),z("specularTint",!1),z("specularityFactorTint",!1),z("useMetalness",!1),z("useMetalnessSpecularColor",!1),z("useSheen",!1),z("enableGGXSpecular",!1),z("occludeDirect",!1),z("opacityFadesSpecular",!0),z("occludeSpecular",hh),z("fresnelModel",Qn),z("useDynamicRefraction",!1),z("cubeMapProjection",so),z("useFog",!0),z("useLighting",!0),z("useTonemap",!0),z("useSkybox",!0),z("forceUv1",!1),z("pixelSnap",!1),z("twoSidedLighting",!1),z("nineSlicedMode",void 0),z("msdfTextAttribute",!1),z("useIridescence",!1),z("glossInvert",!1),z("sheenGlossInvert",!1),z("clearCoatGlossInvert",!1),z("opacityDither",ci),z("opacityShadowDither",ci),z("shadowCatcher",!1),z("vertexColorGamma",!1),ee("diffuse"),ee("specular"),ee("emissive"),ee("thickness","g"),ee("specularityFactor","g"),ee("normal",""),ee("metalness","g"),ee("gloss","g"),ee("opacity","a"),ee("refraction","g"),ee("height","g",!1),ee("ao","g"),ee("light","rgb",!0,1),ee("msdf",""),ee("diffuseDetail","rgb",!1),ee("normalDetail",""),ee("aoDetail","g",!1),ee("clearCoat","g"),ee("clearCoatGloss","g"),ee("clearCoatNormal",""),ee("sheen","rgb"),ee("sheenGloss","g"),ee("iridescence","g"),ee("iridescenceThickness","g"),ee("anisotropy",""),z("diffuseDetailMode",hl),z("aoDetailMode",hl),Ji("cubeMap"),Ji("sphereMap"),Ji("envAtlas");const c=function(){return this._prefilteredCubemaps},t=function(i){const s=this._prefilteredCubemaps;i=i||[];let a=!1,r=!0;for(let n=0;n<6;++n){const l=i[n]||null;s[n]!==l&&(s[n]=l,a=!0),r=r&&!!s[n]}a&&(r?this.envAtlas=Ih.generatePrefilteredAtlas(s,{target:this.envAtlas}):this.envAtlas&&(this.envAtlas.destroy(),this.envAtlas=null),this._dirtyShader=!0)},e=[null,null,null,null,null,null];To("prefilteredCubemaps",()=>e.slice(),t,c)}Cv();const ze=8/64,et=1-ze*2;class Eo extends Ms{constructor(t,e,i,s,a,r){super();const n=new _,l=new _,d=new _,f=new _,h=new _,u=new _,p=[],m=[],g=[],v=[],E=[];let S;if(i>0)for(let T=0;T<=s;T++)for(let y=0;y<=a;y++){const C=y/a*2*Math.PI-Math.PI,x=Math.sin(C),A=Math.cos(C);h.set(x*t,-i/2,A*t),f.set(x*e,i/2,A*e),n.lerp(h,f,T/s),l.sub2(f,h).normalize(),u.set(A,0,-x),d.cross(u,l).normalize(),p.push(n.x,n.y,n.z),m.push(d.x,d.y,d.z);let w=y/a,L=T/s;g.push(w,1-L);const P=L;if(L=w,w=P,w=w*et+ze,L=L*et+ze,w/=3,v.push(w,1-L),T<s&&y<a){const R=T*(a+1)+y,O=T*(a+1)+(y+1),B=(T+1)*(a+1)+y,M=(T+1)*(a+1)+(y+1);E.push(R,O,B),E.push(O,M,B)}}if(r){const T=Math.floor(a/2),y=a,C=i/2;for(let x=0;x<=T;x++){const A=x*Math.PI*.5/T,w=Math.sin(A),L=Math.cos(A);for(let P=0;P<=y;P++){const R=P*2*Math.PI/y-Math.PI/2,O=Math.sin(R),M=Math.cos(R)*w,j=L,F=O*w;let N=1-P/y,H=1-x/T;p.push(M*e,j*e+C,F*e),m.push(M,j,F),g.push(N,1-H),N=N*et+ze,H=H*et+ze,N/=3,H/=3,N+=1/3,v.push(N,1-H)}}S=(s+1)*(a+1);for(let x=0;x<T;++x)for(let A=0;A<y;++A){const w=x*(y+1)+A,L=w+y+1;E.push(S+w+1,S+L,S+w),E.push(S+w+1,S+L+1,S+L)}for(let x=0;x<=T;x++){const A=Math.PI*.5+x*Math.PI*.5/T,w=Math.sin(A),L=Math.cos(A);for(let P=0;P<=y;P++){const R=P*2*Math.PI/y-Math.PI/2,O=Math.sin(R),M=Math.cos(R)*w,j=L,F=O*w;let N=1-P/y,H=1-x/T;p.push(M*e,j*e-C,F*e),m.push(M,j,F),g.push(N,1-H),N=N*et+ze,H=H*et+ze,N/=3,H/=3,N+=2/3,v.push(N,1-H)}}S=(s+1)*(a+1)+(y+1)*(T+1);for(let x=0;x<T;++x)for(let A=0;A<y;++A){const w=x*(y+1)+A,L=w+y+1;E.push(S+w+1,S+L,S+w),E.push(S+w+1,S+L+1,S+L)}}else{if(S=(s+1)*(a+1),t>0)for(let T=0;T<a;T++){const y=T/a*2*Math.PI,C=Math.sin(y),x=-i/2,A=Math.cos(y);let w=1-(C+1)/2,L=(A+1)/2;p.push(C*t,x,A*t),m.push(0,-1,0),g.push(w,1-L),w=w*et+ze,L=L*et+ze,w/=3,L/=3,w+=1/3,v.push(w,1-L),T>1&&E.push(S,S+T,S+T-1)}if(S+=a,e>0)for(let T=0;T<a;T++){const y=T/a*2*Math.PI,C=Math.sin(y),x=i/2,A=Math.cos(y);let w=1-(C+1)/2,L=(A+1)/2;p.push(C*e,x,A*e),m.push(0,1,0),g.push(w,1-L),w=w*et+ze,L=L*et+ze,w/=3,L/=3,w+=2/3,v.push(w,1-L),T>1&&E.push(S,S+T-1,S+T)}}this.positions=p,this.normals=m,this.uvs=g,this.uvs1=v,this.indices=E}}class Av extends Eo{constructor(t={}){const e=t.radius??.3,i=t.height??1,s=t.heightSegments??1,a=t.sides??20;super(e,e,i-2*e,s,a,!0),t.calculateTangents&&(this.tangents=Gt(this.positions,this.normals,this.uvs,this.indices))}}class wv extends Eo{constructor(t={}){const e=t.baseRadius??.5,i=t.peakRadius??0,s=t.height??1,a=t.heightSegments??5,r=t.capSegments??18;super(e,i,s,a,r,!1),t.calculateTangents&&(this.tangents=Gt(this.positions,this.normals,this.uvs,this.indices))}}class Lv extends Eo{constructor(t={}){const e=t.radius??.5,i=t.height??1,s=t.heightSegments??5,a=t.capSegments??20;super(e,e,i,s,a,!1),t.calculateTangents&&(this.tangents=Gt(this.positions,this.normals,this.uvs,this.indices))}}class Dv extends Ms{constructor(t={}){super();const e=t.halfExtents??new k(.5,.5),i=t.widthSegments??5,s=t.lengthSegments??5,a=[],r=[],n=[],l=[];let d=0;for(let f=0;f<=i;f++)for(let h=0;h<=s;h++){const u=-e.x+2*e.x*f/i,p=0,m=-(-e.y+2*e.y*h/s),g=f/i,v=h/s;a.push(u,p,m),r.push(0,1,0),n.push(g,1-v),f<i&&h<s&&(l.push(d+s+1,d+1,d),l.push(d+s+1,d+s+2,d+1)),d++}this.positions=a,this.normals=r,this.uvs=n,this.uvs1=n,this.indices=l,t.calculateTangents&&(this.tangents=Gt(a,r,n,l))}}class Pv extends Ms{constructor(t={}){super();const e=t.tubeRadius??.2,i=t.ringRadius??.3,s=(t.sectorAngle??360)*I.DEG_TO_RAD,a=t.segments??30,r=t.sides??20,n=[],l=[],d=[],f=[];for(let h=0;h<=r;h++)for(let u=0;u<=a;u++){const p=Math.cos(s*u/a)*(i+e*Math.cos(2*Math.PI*h/r)),m=Math.sin(2*Math.PI*h/r)*e,g=Math.sin(s*u/a)*(i+e*Math.cos(2*Math.PI*h/r)),v=Math.cos(s*u/a)*Math.cos(2*Math.PI*h/r),E=Math.sin(2*Math.PI*h/r),S=Math.sin(s*u/a)*Math.cos(2*Math.PI*h/r),T=h/r,y=1-u/a;if(n.push(p,m,g),l.push(v,E,S),d.push(T,1-y),h<r&&u<a){const C=h*(a+1)+u,x=(h+1)*(a+1)+u,A=h*(a+1)+(u+1),w=(h+1)*(a+1)+(u+1);f.push(C,x,A),f.push(x,w,A)}}this.positions=n,this.normals=l,this.uvs=d,this.uvs1=d,this.indices=f,t.calculateTangents&&(this.tangents=Gt(n,l,d,f))}}class Iv{constructor(t,e){o(this,"processedCache",new Map);o(this,"definitionsCache",new Map);o(this,"_generators",new Map);this._device=t,this._isClearingCache=!1,this._precached=!1,this._programsCollection=[],this._defaultStdMatOption=new bs,this._defaultStdMatOptionMin=new bs;const i=new Ch;e.shaderOptBuilder.updateRef(this._defaultStdMatOption,{},i,e,null,[],Ya,null),e.shaderOptBuilder.updateMinRef(this._defaultStdMatOptionMin,{},e,null,hm,null),t.on("destroy:shader",s=>{this.removeFromCache(s)})}destroy(){this.clearCache()}register(t,e){this._generators.has(t)||this._generators.set(t,e)}unregister(t){this._generators.has(t)&&this._generators.delete(t)}isRegistered(t){return this._generators.has(t)}generateShaderDefinition(t,e,i,s){var r,n;let a=this.definitionsCache.get(i);if(!a){let l;(r=s.litOptions)!=null&&r.lights&&(l=s.litOptions.lights,s.litOptions.lights=l.map(f=>{const h=f.clone?f.clone():f;return h.key=f.key,h})),this.storeNewProgram(e,s),(n=s.litOptions)!=null&&n.lights&&(s.litOptions.lights=l),this._precached;const d=this._device;a=t.createShaderDefinition(d,s),a.name=a.name??(s.pass?`${e}-pass:${s.pass}`:e),this.definitionsCache.set(i,a)}return a}getCachedShader(t){return this.processedCache.get(t)}setCachedShader(t,e){this.processedCache.set(t,e)}getProgram(t,e,i,s){const a=this._generators.get(t);if(!a)return null;const r=a.generateKey(e),n=$e(r),l=i.generateKey(this._device),d=$e(l),f=`${n}#${d}`;let h=this.getCachedShader(f);if(!h){const u=this.generateShaderDefinition(a,t,n,e);let p="",m;e.pass!==void 0&&(m=Tt.get(this._device).getByIndex(e.pass),p=`-${m.name}`),this._device.fire("shader:generate",{userMaterialId:s,shaderPassInfo:m,definition:u});const g={name:`${u.name}${p}-proc`,attributes:u.attributes,vshader:u.vshader,vincludes:u.vincludes,fincludes:u.fincludes,fshader:u.fshader,processingOptions:i,shaderLanguage:u.shaderLanguage,meshUniformBufferFormat:u.meshUniformBufferFormat,meshBindGroupFormat:u.meshBindGroupFormat};h=new $d(this._device,g),this.setCachedShader(f,h)}return h}storeNewProgram(t,e){let i={};if(t==="standard"){const s=this._getDefaultStdMatOptions(e.pass);for(const a in e)(e.hasOwnProperty(a)&&s[a]!==e[a]||a==="pass")&&(i[a]=e[a]);for(const a in e.litOptions)i[a]=e.litOptions[a]}else i=e;this._programsCollection.push(JSON.stringify({name:t,options:i}))}dumpPrograms(){let t=`let device = pc.app ? pc.app.graphicsDevice : pc.Application.getApplication().graphicsDevice;
`;t+="let shaders = [",this._programsCollection[0]&&(t+=`
	${this._programsCollection[0]}`);for(let i=1;i<this._programsCollection.length;++i)t+=`,
	${this._programsCollection[i]}`;t+=`
];
`,t+=`pc.getProgramLibrary(device).precompile(shaders);
`,t+=`if (pc.version != "${jh}" || pc.revision != "${Kh}")
`,t+='	console.warn("precompile-shaders.js: engine version mismatch, rebuild shaders lib with current engine");';const e=document.createElement("a");e.setAttribute("href",`data:text/plain;charset=utf-8,${encodeURIComponent(t)}`),e.setAttribute("download","precompile-shaders.js"),e.style.display="none",document.body.appendChild(e),e.click(),document.body.removeChild(e)}clearCache(){this._isClearingCache=!0,this.processedCache.forEach(t=>{t.destroy()}),this.processedCache.clear(),this._isClearingCache=!1}removeFromCache(t){this._isClearingCache||this.processedCache.forEach((e,i)=>{t===e&&this.processedCache.delete(i)})}_getDefaultStdMatOptions(t){const e=Tt.get(this._device).getByIndex(t);return t===qa||t===$a||e.isShadow?this._defaultStdMatOptionMin:this._defaultStdMatOption}precompile(t){if(t){const e=new Array(t.length);for(let i=0;i<t.length;i++){if(t[i].name==="standard"){const s=t[i].options,a=this._getDefaultStdMatOptions(s.pass);for(const r in a)a.hasOwnProperty(r)&&s[r]===void 0&&(s[r]=a[r])}e[i]=this.getProgram(t[i].name,t[i].options)}}this._precached=!0}}const bv="FILL_WINDOW",lc="KEEP_ASPECT",cc="AUTO",Rv="FIXED";let Oh;function rt(){return Oh}function Yr(c){Oh=c}class Mv{constructor(){o(this,"renderPasses",[]);o(this,"renderTargetMap",new Map);o(this,"multiview",null)}beginMultiView(t){this.multiview=new Sn(t)}endMultiView(){const t=this.multiview;this.multiview=null,t!=null&&t.children.length&&this.renderPasses.push(t)}addRenderPass(t){t.frameUpdate();const e=t.beforePasses;for(let s=0;s<e.length;s++){const a=e[s];a.enabled&&this.addRenderPass(a)}t.enabled&&(this.multiview?this.multiview.addChild(t):this.renderPasses.push(t));const i=t.afterPasses;for(let s=0;s<i.length;s++){const a=i[s];a.enabled&&this.addRenderPass(a)}}reset(){this.renderPasses.length=0}compile(){this._compilePasses(this.renderPasses);for(let t=0;t<this.renderPasses.length;t++){const e=this.renderPasses[t];e instanceof Sn&&this._compilePasses(e.children)}}_compilePasses(t){const e=this.renderTargetMap;for(let a=0;a<t.length;a++){const r=t[a];r._skipStart=!1,r._skipEnd=!1;const n=r.renderTarget;if(n!==void 0){const l=e.get(n);if(l){const d=r.colorArrayOps.length;for(let f=0;f<d;f++)r.colorArrayOps[f].clear||(l.colorArrayOps[f].store=!0);r.depthStencilOps.clearDepth||(l.depthStencilOps.storeDepth=!0),r.depthStencilOps.clearStencil||(l.depthStencilOps.storeStencil=!0)}e.set(n,r)}}for(let a=0;a<t.length-1;a++){const r=t[a],n=r.renderTarget,l=t[a+1],d=l.renderTarget;n!==d||n===void 0||l.depthStencilOps.clearDepth||l.depthStencilOps.clearStencil||l.colorArrayOps.some(f=>f.clear)||r.afterPasses.length>0||l.beforePasses.length>0||(r._skipEnd=!0,l._skipStart=!0)}let i=null,s=null;for(let a=0;a<t.length;a++){const r=t[a],n=r.renderTarget,l=n==null?void 0:n.colorBuffer;if(l!=null&&l.cubemap){if(i===l){const d=s.colorArrayOps.length;for(let f=0;f<d;f++)s.colorArrayOps[f].mipmaps=!1}i=n.colorBuffer,s=r}else r.requiresCubemaps&&(i=null,s=null)}e.clear()}render(t){this.compile();const e=this.renderPasses;for(let i=0;i<e.length;i++)e[i].render()}}class Nv{constructor(t,e){this.texture0=t,this.texture1=e}destroy(){var t,e;(t=this.texture0)==null||t.destroy(),(e=this.texture1)==null||e.destroy()}}const dc=new nt;class ti{static createTexture(t,e,i,s=""){return new ce(t,{name:`AreaLightLUT${s}`,width:i,height:i,format:e,addressU:q,addressV:q,type:ii,magFilter:Ae,minFilter:ve,anisotropy:1,mipmaps:!1})}static applyTextures(t,e,i){dc.remove(t),dc.get(t,()=>new Nv(e,e===i?null:i)),t.scope.resolve("areaLightsLutTex1").setValue(e),t.scope.resolve("areaLightsLutTex2").setValue(i)}static createPlaceholder(t){const e=ti.createTexture(t,Ue,2,"placeholder");e.lock().fill(0),e.unlock(),ti.applyTextures(t,e,e)}static set(t,e,i){function s(u,p,m){const g=ti.createTexture(u,m,64);return g.lock().set(p),g.unlock(),g}function a(u){const p=u.length,m=new Uint16Array(p),g=tn.float2Half;for(let v=0;v<p;v++)m[v]=g(u[v]);return m}const r=e,n=i,l=a(r),d=a(n),f=s(t,l,Ue),h=s(t,d,Ue);ti.applyTextures(t,f,h)}}const ba="en-US",Ra={en:"en-US",es:"en-ES",zh:"zh-CN","zh-HK":"zh-TW","zh-TW":"zh-HK","zh-MO":"zh-HK",fr:"fr-FR",de:"de-DE",it:"it-IT",ru:"ru-RU",ja:"ja-JP"},yo={};function Ht(c,t){for(let e=0,i=c.length;e<i;e++)yo[c[e]]=t}function ut(c){const t=c.indexOf("-");return t!==-1?c.substring(0,t):c}function Ov(c,t){const e=c.indexOf("-");return e!==-1?t+c.substring(e):t}function Fh(c,t){if(t[c])return c;let e=Ra[c];if(e&&t[e])return e;const i=ut(c);return e=Ra[i],t[e]?e:t[i]?i:ba}Ht(["ja","ko","th","vi","zh","id"],c=>0);Ht(["fa","hi"],c=>c>=0&&c<=1?0:1);Ht(["fr","pt"],c=>c>=0&&c<2?0:1);Ht(["da"],c=>c===1||!Number.isInteger(c)&&c>=0&&c<=1?0:1);Ht(["de","en","it","el","es","tr","fi","sv","nb","no","ur"],c=>c===1?0:1);Ht(["ru","uk"],c=>{if(Number.isInteger(c)){const t=c%10,e=c%100;if(t===1&&e!==11)return 0;if(t>=2&&t<=4&&(e<12||e>14))return 1;if(t===0||t>=5&&t<=9||e>=11&&e<=14)return 2}return 3});Ht(["pl"],c=>{if(Number.isInteger(c)){if(c===1)return 0;const t=c%10,e=c%100;if(t>=2&&t<=4&&(e<12||e>14))return 1;if(t>=0&&t<=1||t>=5&&t<=9||e>=12&&e<=14)return 2}return 3});Ht(["ar"],c=>{if(c===0)return 0;if(c===1)return 1;if(c===2)return 2;if(Number.isInteger(c)){const t=c%100;if(t>=3&&t<=10)return 3;if(t>=11&&t<=99)return 4}return 5});const Fv=yo[ut(ba)];function $r(c){return yo[c]||Fv}const yn=new RegExp("^\\s*(?:(?:[a-z]+[a-z0-9\\-+.]*:)?//|data:|blob:)","i");class Uv{constructor(t="",e="",i=null,s=null,a=null,r=null){this.url=t,this.filename=e,this.hash=i,this.size=s,this.opt=a,this.contents=r}equals(t){return this.url===t.url&&this.filename===t.filename&&this.hash===t.hash&&this.size===t.size&&this.opt===t.opt&&this.contents===t.contents}}let Bv=-1;const kv={pvr:"extCompressedTexturePVRTC",dxt:"extCompressedTextureS3TC",etc2:"extCompressedTextureETC",etc1:"extCompressedTextureETC1",basis:"canvas"},hc=["pvr","dxt","etc2","etc1","basis"];class ye extends pe{constructor(e,i,s,a={},r={}){super();o(this,"_file",null);o(this,"_i18n",{});o(this,"_preload",!1);o(this,"_resources",[]);o(this,"id",Bv--);o(this,"loaded",!1);o(this,"loading",!1);o(this,"options",{});o(this,"registry",null);o(this,"tags",new cs(this));o(this,"type");o(this,"urlObject",null);this._name=e||"",this.type=i,this._data=a||{},this.options=r||{},s&&(this.file=s)}set name(e){if(this._name===e)return;const i=this._name;this._name=e,this.fire("name",this,this._name,i)}get name(){return this._name}set file(e){var a,r;if(e&&e.variants&&["texture","textureatlas","bundle"].indexOf(this.type)!==-1){const n=((r=(a=this.registry)==null?void 0:a._loader)==null?void 0:r._app)||rt(),l=n==null?void 0:n.graphicsDevice;if(l)for(let d=0,f=hc.length;d<f;d++){const h=hc[d];if(e.variants[h]&&l[kv[h]]){e=e.variants[h];break}if(n.enableBundles){const u=n.bundles.listBundlesForAsset(this);if(u&&u.find(p=>{var m;return(m=p==null?void 0:p.file)==null?void 0:m.variants[h]}))break}}}const i=this._file,s=e?new Uv(e.url,e.filename,e.hash,e.size,e.opt,e.contents):null;(!!s!=!!i||s&&!s.equals(i))&&(this._file=s,this.fire("change",this,"file",s,i),this.reload())}get file(){return this._file}set data(e){const i=this._data;this._data=e,e!==i&&(this.fire("change",this,"data",e,i),this.loaded&&this.registry._loader.patch(this,this.registry))}get data(){return this._data}set resource(e){const i=this._resources[0];this._resources[0]=e,this.fire("change",this,"resource",e,i)}get resource(){return this._resources[0]}set resources(e){const i=this._resources;this._resources=e,this.fire("change",this,"resources",e,i)}get resources(){return this._resources}set preload(e){e=!!e,this._preload!==e&&(this._preload=e,this._preload&&!this.loaded&&!this.loading&&this.registry&&this.registry.load(this))}get preload(){return this._preload}set loadFaces(e){e=!!e,(!this.hasOwnProperty("_loadFaces")||e!==this._loadFaces)&&(this._loadFaces=e,this.loaded&&this.registry._loader.patch(this,this.registry))}get loadFaces(){return this._loadFaces}getFileUrl(){const e=this.file;if(!e||!e.url)return null;let i=e.url;if(this.registry&&this.registry.prefix&&!yn.test(i)&&(i=this.registry.prefix+i),this.type!=="script"&&e.hash){const s=i.indexOf("?")!==-1?"&":"?";i+=`${s}t=${e.hash}`}return i}getAbsoluteUrl(e){if(e.startsWith("blob:")||e.startsWith("data:"))return e;const i=J.getDirectory(this.file.url);return J.join(i,e)}getLocalizedAssetId(e){return e=Fh(e,this._i18n),this._i18n[e]||null}addLocalizedAssetId(e,i){this._i18n[e]=i,this.fire("add:localized",e,i)}removeLocalizedAssetId(e){const i=this._i18n[e];i&&(delete this._i18n[e],this.fire("remove:localized",e,i))}ready(e,i){i=i||this,this.loaded?e.call(i,this):this.once("load",s=>{e.call(i,s)})}reload(){this.loaded&&(this.loaded=!1,this.registry.load(this))}unload(){var i,s;if(!this.loaded&&this._resources.length===0)return;this.fire("unload",this),this.registry.fire(`unload:${this.id}`,this);const e=this._resources;this.urlObject&&(URL.revokeObjectURL(this.urlObject),this.urlObject=null),this.resources=[],this.loaded=!1,this.file&&this.registry._loader.clearCache(this.getFileUrl(),this.type);for(let a=0;a<e.length;++a)(s=(i=e[a])==null?void 0:i.destroy)==null||s.call(i)}static fetchArrayBuffer(e,i,s,a=0){var r;(r=s==null?void 0:s.file)!=null&&r.contents?setTimeout(()=>{i(null,s.file.contents)}):ei.get(e,{cache:!0,responseType:"arraybuffer",retry:a>0,maxRetries:a,progress:s},i)}}o(ye,"EVENT_LOAD","load"),o(ye,"EVENT_UNLOAD","unload"),o(ye,"EVENT_REMOVE","remove"),o(ye,"EVENT_ERROR","error"),o(ye,"EVENT_CHANGE","change"),o(ye,"EVENT_PROGRESS","progress"),o(ye,"EVENT_ADDLOCALIZED","add:localized"),o(ye,"EVENT_REMOVELOCALIZED","remove:localized");class zv{constructor(t=null){o(this,"_index",{});o(this,"_key");this._key=t}addItem(t){const e=t.tags._list;for(const i of e)this.add(i,t)}removeItem(t){const e=t.tags._list;for(const i of e)this.remove(i,t)}add(t,e){this._index[t]&&this._index[t].list.indexOf(e)!==-1||(this._index[t]||(this._index[t]={list:[]},this._key&&(this._index[t].keys={})),this._index[t].list.push(e),this._key&&(this._index[t].keys[e[this._key]]=e))}remove(t,e){if(!this._index[t]||this._key&&!this._index[t].keys[e[this._key]])return;const i=this._index[t].list.indexOf(e);i!==-1&&(this._index[t].list.splice(i,1),this._key&&delete this._index[t].keys[e[this._key]],this._index[t].list.length===0&&delete this._index[t])}find(t){const e={},i=[];let s,a,r,n,l;const d=(f,h)=>this._index[f].list.length-this._index[h].list.length;for(let f=0;f<t.length;f++){if(a=t[f],a instanceof Array){if(a.length===0)continue;if(a.length===1)a=a[0];else{l=!1;for(let h=0;h<a.length;h++)if(!this._index[a[h]]){l=!0;break}if(l)continue;r=a.slice(0).sort(d),n=r.slice(1),n.length===1&&(n=n[0]);for(let h=0;h<this._index[r[0]].list.length;h++)s=this._index[r[0]].list[h],(this._key?!e[s[this._key]]:i.indexOf(s)===-1)&&s.tags.has(n)&&(this._key&&(e[s[this._key]]=!0),i.push(s));continue}}if(a&&typeof a=="string"&&this._index[a])for(let h=0;h<this._index[a].list.length;h++)s=this._index[a].list[h],this._key?e[s[this._key]]||(e[s[this._key]]=!0,i.push(s)):i.indexOf(s)===-1&&i.push(s)}return i}}class xi extends pe{constructor(e){super();o(this,"_assets",new Set);o(this,"_loader");o(this,"_idToAsset",new Map);o(this,"_urlToAsset",new Map);o(this,"_nameToAsset",new Map);o(this,"_tags",new zv("id"));o(this,"prefix",null);o(this,"bundles",null);this._loader=e}get loader(){return this._loader}list(e={}){const i=Array.from(this._assets);return e.preload!==void 0?i.filter(s=>s.preload===e.preload):i}add(e){var i,s;this._assets.has(e)||(this._assets.add(e),this._idToAsset.set(e.id,e),(i=e.file)!=null&&i.url&&this._urlToAsset.set(e.file.url,e),this._nameToAsset.has(e.name)||this._nameToAsset.set(e.name,new Set),this._nameToAsset.get(e.name).add(e),e.on("name",this._onNameChange,this),e.registry=this,this._tags.addItem(e),e.tags.on("add",this._onTagAdd,this),e.tags.on("remove",this._onTagRemove,this),this.fire("add",e),this.fire(`add:${e.id}`,e),(s=e.file)!=null&&s.url&&this.fire(`add:url:${e.file.url}`,e),e.preload&&this.load(e))}remove(e){var i,s;if(!this._assets.has(e))return!1;if(this._assets.delete(e),this._idToAsset.delete(e.id),(i=e.file)!=null&&i.url&&this._urlToAsset.delete(e.file.url),e.off("name",this._onNameChange,this),this._nameToAsset.has(e.name)){const a=this._nameToAsset.get(e.name);a.delete(e),a.size===0&&this._nameToAsset.delete(e.name)}return this._tags.removeItem(e),e.tags.off("add",this._onTagAdd,this),e.tags.off("remove",this._onTagRemove,this),e.fire("remove",e),this.fire("remove",e),this.fire(`remove:${e.id}`,e),(s=e.file)!=null&&s.url&&this.fire(`remove:url:${e.file.url}`,e),!0}get(e){return this._idToAsset.get(Number(e))}getByUrl(e){return this._urlToAsset.get(e)}load(e,i){if((e.loading||e.loaded)&&!(i!=null&&i.force))return;const s=e.file,a=()=>{this.fire("load",e),this.fire(`load:${e.id}`,e),s&&s.url&&this.fire(`load:url:${s.url}`,e),e.fire("load",e)},r=l=>{if(l instanceof Array?e.resources=l:e.resource=l,this._loader.patch(e,this),e.type==="bundle"){const d=e.data.assets;for(let f=0;f<d.length;f++){const h=this._idToAsset.get(d[f]);h&&!h.loaded&&this.load(h,{force:!0})}e.resource.loaded?a():(this.fire("load:start",e),this.fire(`load:start:${e.id}`,e),s&&s.url&&this.fire(`load:start:url:${s.url}`,e),e.fire("load:start",e),e.resource.on("load",a))}else a()},n=(l,d,f)=>{if(e.loaded=!0,e.loading=!1,l)this.fire("error",l,e),this.fire(`error:${e.id}`,l,e),e.fire("error",l,e);else{if(e.type==="script"){const h=this._loader.getHandler("script");h._cache[e.id]&&h._cache[e.id].parentNode===document.head&&document.head.removeChild(h._cache[e.id]),f&&(h._cache[e.id]=f)}r(d)}};if(s||e.type==="cubemap"){this.fire("load:start",e),this.fire(`load:${e.id}:start`,e),e.loading=!0;const l=e.getFileUrl();if(e.type==="bundle"){const d=e.data.assets;for(let f=0;f<d.length;f++){const h=this._idToAsset.get(d[f]);h&&(h.loaded||h.resource||h.loading||(h.loading=!0))}}this._loader.load(l,e.type,n,e,i)}else{const l=this._loader.open(e.type,e.data);e.loaded=!0,r(l)}}loadFromUrl(e,i,s){this.loadFromUrlAndFilename(e,null,i,s)}loadFromUrlAndFilename(e,i,s,a){const r=J.getBasename(i||e),n={filename:i||r,url:e};let l=this.getByUrl(e);if(!l)l=new ye(r,s,n),this.add(l);else if(l.loaded){a(l.loadFromUrlError||null,l);return}const d=f=>{f.once("load",h=>{s==="material"?this._loadTextures(h,(u,p)=>{a(u,h)}):a(null,h)}),f.once("error",h=>{h&&(this.loadFromUrlError=h),a(h,f)}),this.load(f)};l.resource?a(null,l):s==="model"?this._loadModel(l,d):d(l)}_loadModel(e,i){const s=e.getFileUrl(),a=J.getExtension(s);if(a===".json"||a===".glb"){const r=J.getDirectory(s),n=J.getBasename(s),l=J.join(r,n.replace(a,".mapping.json"));this._loader.load(l,"json",(d,f)=>{d?(e.data={mapping:[]},i(e)):this._loadMaterials(e,f,(h,u)=>{e.data=f,i(e)})})}else i(e)}_loadMaterials(e,i,s){const a=[];let r=0;const n=(l,d)=>{this._loadTextures(d,(f,h)=>{a.push(d),a.length===r&&s(null,a)})};for(let l=0;l<i.mapping.length;l++){const d=i.mapping[l].path;if(d){r++;const f=e.getAbsoluteUrl(d);this.loadFromUrl(f,"material",n)}}r===0&&s(null,a)}_loadTextures(e,i){const s=[];let a=0;const r=e.data;if(r.mappingFormat!=="path"){i(null,s);return}const n=(d,f)=>{d&&console.error(`Failed to load material texture for "${e.name}": ${(d==null?void 0:d.message)??d}`,d),s.push(f),s.length===a&&i(null,s)},l=So;for(let d=0;d<l.length;d++){const f=r[l[d]];if(f&&typeof f=="string"){a++;const h=e.getAbsoluteUrl(f);this.loadFromUrl(h,"texture",n)}}a===0&&i(null,s)}_onTagAdd(e,i){this._tags.add(e,i)}_onTagRemove(e,i){this._tags.remove(e,i)}_onNameChange(e,i,s){if(this._nameToAsset.has(s)){const a=this._nameToAsset.get(s);a.delete(e),a.size===0&&this._nameToAsset.delete(s)}this._nameToAsset.has(e.name)||this._nameToAsset.set(e.name,new Set),this._nameToAsset.get(e.name).add(e)}findByTag(...e){return this._tags.find(e)}filter(e){return Array.from(this._assets).filter(i=>e(i))}find(e,i){const s=this._nameToAsset.get(e);if(!s)return null;for(const a of s)if(!i||a.type===i)return a;return null}findAll(e,i){const s=this._nameToAsset.get(e);if(!s)return[];const a=Array.from(s);return i?a.filter(r=>r.type===i):a}log(){}}o(xi,"EVENT_LOAD","load"),o(xi,"EVENT_ADD","add"),o(xi,"EVENT_REMOVE","remove"),o(xi,"EVENT_ERROR","error");class Vv{constructor(t){o(this,"_idToBundle",new Map);o(this,"_assetToBundles",new Map);o(this,"_urlsToBundles",new Map);o(this,"_fileRequests",new Map);this._assets=t,this._assets.bundles=this,this._assets.on("add",this._onAssetAdd,this),this._assets.on("remove",this._onAssetRemove,this)}_onAssetAdd(t){if(t.type==="bundle"){this._idToBundle.set(t.id,t),this._assets.on(`load:start:${t.id}`,this._onBundleLoadStart,this),this._assets.on(`load:${t.id}`,this._onBundleLoad,this),this._assets.on(`error:${t.id}`,this._onBundleError,this);const e=t.data.assets;for(let i=0;i<e.length;i++)this._indexAssetInBundle(e[i],t)}else this._assetToBundles.has(t.id)&&this._indexAssetFileUrls(t)}_unbindAssetEvents(t){this._assets.off(`load:start:${t}`,this._onBundleLoadStart,this),this._assets.off(`load:${t}`,this._onBundleLoad,this),this._assets.off(`error:${t}`,this._onBundleError,this)}_indexAssetInBundle(t,e){let i=this._assetToBundles.get(t);i||(i=new Set,this._assetToBundles.set(t,i)),i.add(e);const s=this._assets.get(t);s&&this._indexAssetFileUrls(s)}_indexAssetFileUrls(t){const e=this._getAssetFileUrls(t);if(e)for(let i=0;i<e.length;i++){const s=this._assetToBundles.get(t.id);s&&this._urlsToBundles.set(e[i],s)}}_getAssetFileUrls(t){let e=t.getFileUrl();if(!e)return null;e=e.split("?")[0];const i=[e];if(t.type==="font"){const s=t.data.info.maps.length;for(let a=1;a<s;a++)i.push(e.replace(".png",`${a}.png`))}return i}_onAssetRemove(t){if(t.type==="bundle"){this._idToBundle.delete(t.id),this._unbindAssetEvents(t.id);const e=t.data.assets;for(let i=0;i<e.length;i++){const s=this._assetToBundles.get(e[i]);if(s&&(s.delete(t),s.size===0)){this._assetToBundles.delete(e[i]);for(const[a,r]of this._urlsToBundles)r===s&&this._urlsToBundles.delete(a)}}this._onBundleError(`Bundle ${t.id} was removed`)}else{if(!this._assetToBundles.get(t.id))return;this._assetToBundles.delete(t.id);const i=this._getAssetFileUrls(t);if(!i)return;for(let s=0;s<i.length;s++)this._urlsToBundles.delete(i[s])}}_onBundleLoadStart(t){t.resource.on("add",(e,i)=>{const s=this._fileRequests.get(e);if(s){for(let a=0;a<s.length;a++)s[a](null,i);this._fileRequests.delete(e)}})}_onBundleLoad(t){if(!t.resource){this._onBundleError(`Bundle ${t.id} failed to load`);return}if(this._fileRequests)for(const[e,i]of this._fileRequests){const s=this._urlsToBundles.get(e);if(!s||!s.has(t))continue;const a=decodeURIComponent(e);let r,n;if(t.resource.has(a))n=t.resource.get(a);else if(t.resource.loaded)r=`Bundle ${t.id} does not contain URL ${e}`;else continue;for(let l=0;l<i.length;l++)i[l](r,r||n);this._fileRequests.delete(e)}}_onBundleError(t){for(const[e,i]of this._fileRequests)if(!this._findLoadedOrLoadingBundleForUrl(e)){for(let a=0;a<i.length;a++)i[a](t);this._fileRequests.delete(e)}}_findLoadedOrLoadingBundleForUrl(t){const e=this._urlsToBundles.get(t);if(!e)return null;let i=null;for(const s of e){if(s.loaded&&s.resource)return s;s.loading&&(i=s)}return i}listBundlesForAsset(t){const e=this._assetToBundles.get(t.id);return e?Array.from(e):null}list(){return Array.from(this._idToBundle.values())}hasUrl(t){return this._urlsToBundles.has(t)}urlIsLoadedOrLoading(t){return!!this._findLoadedOrLoadingBundleForUrl(t)}loadUrl(t,e){const i=this._findLoadedOrLoadingBundleForUrl(t);if(!i){e(`URL ${t} not found in any bundles`);return}if(i.loaded){const a=decodeURIComponent(t);if(i.resource.has(a)){e(null,i.resource.get(a));return}else if(i.resource.loaded){e(`Bundle ${i.id} does not contain URL ${t}`);return}}let s=this._fileRequests.get(t);s||(s=[],this._fileRequests.set(t,s)),s.push(e)}destroy(){this._assets.off("add",this._onAssetAdd,this),this._assets.off("remove",this._onAssetRemove,this);for(const t of this._idToBundle.keys())this._unbindAssetEvents(t);this._assets=null,this._idToBundle.clear(),this._idToBundle=null,this._assetToBundles.clear(),this._assetToBundles=null,this._urlsToBundles.clear(),this._urlsToBundles=null,this._fileRequests.clear(),this._fileRequests=null}}class Gv extends pe{constructor(){super();o(this,"anim");o(this,"animation");o(this,"audiolistener");o(this,"button");o(this,"camera");o(this,"collision");o(this,"element");o(this,"gsplat");o(this,"joint");o(this,"layoutchild");o(this,"layoutgroup");o(this,"light");o(this,"model");o(this,"particlesystem");o(this,"render");o(this,"rigidbody");o(this,"screen");o(this,"script");o(this,"scrollbar");o(this,"scrollview");o(this,"sound");o(this,"sprite");o(this,"zone");this.list=[]}add(e){const i=e.id;if(this[i])throw new Error(`ComponentSystem name '${i}' already registered or not allowed`);this[i]=e,this.list.push(e)}remove(e){const i=e.id;if(!this[i])throw new Error(`No ComponentSystem named '${i}' registered`);delete this[i];const s=this.list.indexOf(this[i]);s!==-1&&this.list.splice(s,1)}destroy(){this.off();for(let e=0;e<this.list.length;e++)this.list[e].destroy()}}class xn extends pe{constructor(){super(...arguments);o(this,"_index",new Map);o(this,"_loaded",!1)}addFile(e,i){this._index.has(e)||(this._index.set(e,i),this.fire("add",e,i))}has(e){return this._index.has(e)}get(e){return this._index.get(e)||null}destroy(){this._index.clear()}set loaded(e){!e||this._loaded||(this._loaded=!0,this.fire("load"))}get loaded(){return this._loaded}}o(xn,"EVENT_ADD","add"),o(xn,"EVENT_LOAD","load");class Hv extends pe{constructor(e,i=""){super();o(this,"headerSize",512);o(this,"paddingSize",512);o(this,"bytesRead",0);o(this,"bytesReceived",0);o(this,"headerRead",!1);o(this,"reader",null);o(this,"data",new Uint8Array(0));o(this,"decoder",null);o(this,"prefix","");o(this,"fileName","");o(this,"fileSize",0);o(this,"fileType","");o(this,"ustarFormat","");this.prefix=i||"",this.reader=e.body.getReader(),this.reader.read().then(s=>{this.pump(s.done,s.value)}).catch(s=>{this.fire("error",s)})}pump(e,i){if(e)return this.fire("done"),null;this.bytesReceived+=i.byteLength;const s=new Uint8Array(this.data.length+i.length);for(s.set(this.data),s.set(i,this.data.length),this.data=s;this.readFile(););return this.reader.read().then(a=>{this.pump(a.done,a.value)}).catch(a=>{this.fire("error",a)})}readFile(){if(!this.headerRead&&this.bytesReceived>this.bytesRead+this.headerSize){this.headerRead=!0;const e=new DataView(this.data.buffer,this.bytesRead,this.headerSize);this.decoder??(this.decoder=new TextDecoder("windows-1252"));const i=this.decoder.decode(e);if(this.fileName=i.substring(0,100).replace(/\0/g,""),this.fileSize=parseInt(i.substring(124,136),8),this.fileType=i.substring(156,157),this.ustarFormat=i.substring(257,263),this.ustarFormat.indexOf("ustar")!==-1){const s=i.substring(345,500).replace(/\0/g,"");s.length>0&&(this.fileName=s.trim()+this.fileName.trim())}this.bytesRead+=512}if(this.headerRead){if(this.bytesReceived<this.bytesRead+this.fileSize)return!1;if(this.fileType===""||this.fileType==="0"){const i=new DataView(this.data.buffer,this.bytesRead,this.fileSize),s={name:this.prefix+this.fileName,size:this.fileSize,data:i};this.fire("file",s)}this.bytesRead+=this.fileSize,this.headerRead=!1;const e=this.bytesRead%this.paddingSize;return e!==0&&(this.bytesRead+=this.paddingSize-e),!0}return!1}}class Wv{constructor(t,e){o(this,"handlerType","");o(this,"_app");o(this,"_maxRetries",0);o(this,"_parsers",[]);this._app=t,this.handlerType=e}get app(){return this._app}set maxRetries(t){this._maxRetries=t}get maxRetries(){return this._maxRetries}addParser(t,e){!t||typeof t.canParse!="function"||(t.handler=this,this._parsers.push(t))}removeParser(t){const e=this._parsers.indexOf(t);e!==-1&&(this._parsers.splice(e,1),t.handler=null)}get parsers(){return this._parsers.slice()}fetch(t,e,i,s){if(typeof t=="string"&&(t={load:t,original:t}),e===Ta.ResponseType.ARRAY_BUFFER){ye.fetchArrayBuffer(t.load,i,s,this.maxRetries);return}ei.get(t.load,{responseType:e,retry:this.maxRetries>0,maxRetries:this.maxRetries},i)}_makeContext(t,e){const i=t&&typeof t=="object"?t.original:t,s=i?i.split("?")[0]:"";return{url:i??null,ext:i?J.getExtension(s).toLowerCase().replace(".",""):"",basename:i?J.getBasename(s).toLowerCase():"",asset:e,app:this._app}}_selectParser(t){for(let e=this._parsers.length-1;e>=0;e--)if(this._parsers[e].canParse(t))return this._parsers[e];return null}load(t,e,i){if(this._parsers.length===0)return;typeof t=="string"&&(t={load:t,original:t});const s=this._makeContext(t,i),a=this._selectParser(s);if(!a){e(`No parser found for resource: ${s.url}`);return}a.load(t,e,i)}open(t,e,i){if(this._parsers.length===0)return e;const s=this._selectParser(this._makeContext(t,i));return s!=null&&s.open?s.open(t,e,i):e}patch(t,e){}}class Xv extends Wv{constructor(t){super(t,"bundle"),this._assets=t.assets}_fetchRetries(t,e,i=0){return new Promise((s,a)=>{const r=()=>{fetch(t,e).then(s).catch(n=>{i++,i<this.maxRetries?r():a(n)})};r()})}load(t,e){typeof t=="string"&&(t={load:t,original:t}),this._fetchRetries(t.load,{mode:"cors"},this.maxRetries).then(i=>{const s=new xn;e(null,s);const a=new Hv(i,this._assets.prefix);a.on("file",r=>{s.addFile(r.name,r.data)}),a.on("done",()=>{s.loaded=!0}),a.on("error",r=>{e(r)})}).catch(i=>{e(i)})}open(t,e){return e}}class ms{constructor(t){this._handlers={},this._requests={},this._cache={},this._app=t}addHandler(t,e){this._handlers[t]=e,e._loader=this}removeHandler(t){delete this._handlers[t]}getHandler(t){return this._handlers[t]}static makeKey(t,e){return`${t}-${e}`}load(t,e,i,s,a){var l;const r=this._handlers[e];if(!r){const d=`No resource handler for asset type: '${e}' when loading [${t}]`;i(d);return}if(!t){this._loadNull(r,i,s);return}const n=ms.makeKey(t,e);if(this._cache[n]!==void 0)i(null,this._cache[n]);else if(this._requests[n])this._requests[n].push(i);else{this._requests[n]=[i];const d=this,f=function(u,p){if(u){d._onFailure(n,u);return}if(p.load instanceof DataView){if(r.openBinary){if(!d._requests[n])return;try{const m=r.openBinary(p.load);d._onSuccess(n,m)}catch(m){d._onFailure(n,m)}return}p.load=URL.createObjectURL(new Blob([p.load])),s&&(s.urlObject&&URL.revokeObjectURL(s.urlObject),s.urlObject=p.load)}r.load(p,(m,g,v)=>{if(d._requests[n]){if(m){d._onFailure(n,m);return}try{d._onSuccess(n,r.open(p.original,g,s),v)}catch(E){d._onFailure(n,E)}}},s)},h=t.split("?")[0];if(this._app.enableBundles&&this._app.bundles.hasUrl(h)&&!(a&&a.bundlesIgnore)){if(!this._app.bundles.urlIsLoadedOrLoading(h)){const u=this._app.bundles.listBundlesForAsset(s);let p;a&&a.bundlesFilter&&(p=a.bundlesFilter(u)),p||(u==null||u.sort((m,g)=>m.file.size-g.file.size),p=u==null?void 0:u[0]),p&&((l=this._app.assets)==null||l.load(p))}this._app.bundles.loadUrl(h,(u,p)=>{f(u,{load:p,original:h})})}else f(null,{load:t,original:s&&s.file.filename||t})}}_loadNull(t,e,i){const s=function(a,r,n){if(a)e(a);else try{e(null,t.open(null,r,i),n)}catch(l){e(l)}};t.load(null,s,i)}_onSuccess(t,e,i){e!==null?this._cache[t]=e:delete this._cache[t];for(let s=0;s<this._requests[t].length;s++)this._requests[t][s](null,e,i);delete this._requests[t]}_onFailure(t,e){if(console.error(`Failed to load resource [${t}]: ${(e==null?void 0:e.message)??e}`,e),this._requests[t]){for(let i=0;i<this._requests[t].length;i++)this._requests[t][i](e);delete this._requests[t]}}open(t,e){const i=this._handlers[t];return i?i.open(null,e):(console.warn(`No resource handler found for: ${t}`),e)}patch(t,e){const i=this._handlers[t.type];if(!i){console.warn(`No resource handler found for: ${t.type}`);return}i.patch&&i.patch(t,e)}clearCache(t,e){const i=ms.makeKey(t,e);delete this._cache[i]}getFromCache(t,e){const i=ms.makeKey(t,e);if(this._cache[i])return this._cache[i]}enableRetry(t=5){t=Math.max(0,Math.floor(t))||0;for(const e in this._handlers)this._handlers[e].maxRetries=t}disableRetry(){for(const t in this._handlers)this._handlers[t].maxRetries=0}set maxConcurrentRequests(t){ei.maxConcurrentRequests=Math.max(0,Math.floor(t))||0}get maxConcurrentRequests(){return ei.maxConcurrentRequests}set withCredentials(t){ei.withCredentials=!!t}get withCredentials(){return ei.withCredentials}destroy(){this._handlers={},this._requests={},this._cache={}}}class Yv{_validate(t){if(!t.header)throw new Error('I18n#addData: Missing "header" field');if(!t.header.version)throw new Error('I18n#addData: Missing "header.version" field');if(t.header.version!==1)throw new Error('I18n#addData: Invalid "header.version" field');if(t.data){if(!Array.isArray(t.data))throw new Error('I18n#addData: "data" field must be an array')}else throw new Error('I18n#addData: Missing "data" field');for(let e=0,i=t.data.length;e<i;e++){const s=t.data[e];if(!s.info)throw new Error(`I18n#addData: missing "data[${e}].info" field`);if(!s.info.locale)throw new Error(`I18n#addData: missing "data[${e}].info.locale" field`);if(typeof s.info.locale!="string")throw new Error(`I18n#addData: "data[${e}].info.locale" must be a string`);if(!s.messages)throw new Error(`I18n#addData: missing "data[${e}].messages" field`)}}parse(t){return t.data}}const Na=class Na extends pe{constructor(t){super(),this.locale=ba,this._translations={},this._availableLangs={},this._app=t,this._assets=[],this._parser=new Yv}set assets(t){const e={};for(let s=0,a=t.length;s<a;s++){const r=t[s]instanceof ye?t[s].id:t[s];e[r]=!0}let i=this._assets.length;for(;i--;){const s=this._assets[i];if(!e[s]){this._app.assets.off(`add:${s}`,this._onAssetAdd,this);const a=this._app.assets.get(s);a&&this._onAssetRemove(a),this._assets.splice(i,1)}}for(const s in e){const a=parseInt(s,10);if(this._assets.indexOf(a)!==-1)continue;this._assets.push(a);const r=this._app.assets.get(a);r?this._onAssetAdd(r):this._app.assets.once(`add:${a}`,this._onAssetAdd,this)}}get assets(){return this._assets}set locale(t){if(this._locale===t)return;let e=ut(t);if(e==="in"&&(e="id",t=Ov(t,e),this._locale===t))return;const i=this._locale;this._locale=t,this._lang=e,this._pluralFn=$r(this._lang),this.fire(Na.EVENT_CHANGE,t,i)}get locale(){return this._locale}static findAvailableLocale(t,e){return Fh(t,e)}findAvailableLocale(t){if(this._translations[t])return t;const e=ut(t);return this._findFallbackLocale(t,e)}getText(t,e){let i=t,s;e||(e=this._locale,s=this._lang);let a=this._translations[e];return a||(s||(s=ut(e)),e=this._findFallbackLocale(e,s),a=this._translations[e]),a&&a.hasOwnProperty(t)&&(i=a[t],Array.isArray(i)&&(i=i[0]),i==null&&(i=t)),i}getPluralText(t,e,i){let s=t,a,r;i?(a=ut(i),r=$r(a)):(i=this._locale,a=this._lang,r=this._pluralFn);let n=this._translations[i];if(n||(i=this._findFallbackLocale(i,a),a=ut(i),r=$r(a),n=this._translations[i]),n&&n[t]&&r){const l=r(e);s=n[t][l],s==null&&(s=t)}return s}addData(t){let e;try{e=this._parser.parse(t)}catch(i){console.error(`I18n.addData: failed to parse localization data: ${(i==null?void 0:i.message)??i}`,i);return}for(let i=0,s=e.length;i<s;i++){const a=e[i],r=a.info.locale,n=a.messages;if(!this._translations[r]){this._translations[r]={};const l=ut(r);this._availableLangs[l]||(this._availableLangs[l]=r)}Object.assign(this._translations[r],n),this.fire("data:add",r,n)}}removeData(t){let e;try{e=this._parser.parse(t)}catch(i){console.error(`I18n.removeData: failed to parse localization data: ${(i==null?void 0:i.message)??i}`,i);return}for(let i=0,s=e.length;i<s;i++){const a=e[i],r=a.info.locale,n=this._translations[r];if(!n)continue;const l=a.messages;for(const d in l)delete n[d];Object.keys(n).length===0&&(delete this._translations[r],delete this._availableLangs[ut(r)]),this.fire("data:remove",r,l)}}destroy(){this._translations=null,this._availableLangs=null,this._assets=null,this._parser=null,this.off()}_findFallbackLocale(t,e){let i=Ra[t];return i&&this._translations[i]||(i=Ra[e],i&&this._translations[i])||(i=this._availableLangs[e],i&&this._translations[i])?i:ba}_onAssetAdd(t){t.on("load",this._onAssetLoad,this),t.on("change",this._onAssetChange,this),t.on("remove",this._onAssetRemove,this),t.on("unload",this._onAssetUnload,this),t.resource&&this._onAssetLoad(t)}_onAssetLoad(t){this.addData(t.resource)}_onAssetChange(t){t.resource&&this.addData(t.resource)}_onAssetRemove(t){t.off("load",this._onAssetLoad,this),t.off("change",this._onAssetChange,this),t.off("remove",this._onAssetRemove,this),t.off("unload",this._onAssetUnload,this),t.resource&&this.removeData(t.resource),this._app.assets.once(`add:${t.id}`,this._onAssetAdd,this)}_onAssetUnload(t){t.resource&&this.removeData(t.resource)}};o(Na,"EVENT_CHANGE","change");let Cn=Na;const $v="initialize",qv="postInitialize",PA="update",IA="postUpdate",bA="swap",jv=new Set(["system","entity","create","destroy","swap","move","data","scripts","_scripts","_scriptsIndex","_scriptsData","enabled","_oldState","onEnable","onDisable","onPostStateChange","_onSetEnabled","_checkState","_onBeforeRemove","_onInitializeAttributes","_onInitialize","_onPostInitialize","_onUpdate","_onPostUpdate","_callbacks","_callbackActive","has","get","on","off","fire","once","hasEvent","worker"]);class At extends pe{constructor(e){super();o(this,"app");o(this,"entity");o(this,"_enabled");o(this,"_enabledOld");o(this,"_initialized");o(this,"_postInitialized");o(this,"__destroyed");o(this,"__scriptType");o(this,"__executionOrder");this.initScript(e)}set enabled(e){this._enabled=!!e,this.enabled!==this._enabledOld&&(this._enabledOld=this.enabled,this.fire(this.enabled?"enable":"disable"),this.fire("state",this.enabled),!this._initialized&&this.enabled&&(this._initialized=!0,this.fire("preInitialize"),this.initialize&&this.entity.script._scriptMethod(this,$v)),this._initialized&&!this._postInitialized&&this.enabled&&!this.entity.script._beingEnabled&&(this._postInitialized=!0,this.postInitialize&&this.entity.script._scriptMethod(this,qv)))}get enabled(){return this._enabled&&!this._destroyed&&this.entity.script.enabled&&this.entity.enabled}initScript(e){const i=this.constructor;this.app=e.app,this.entity=e.entity,this._enabled=typeof e.enabled=="boolean"?e.enabled:!0,this._enabledOld=this.enabled,this.__destroyed=!1,this.__scriptType=i,this.__executionOrder=-1}static set scriptName(e){this.__name=e}static get scriptName(){return this.__name}}o(At,"EVENT_ENABLE","enable"),o(At,"EVENT_DISABLE","disable"),o(At,"EVENT_STATE","state"),o(At,"EVENT_DESTROY","destroy"),o(At,"EVENT_ATTR","attr"),o(At,"EVENT_ERROR","error"),o(At,"__name",null),o(At,"__getScriptName",Uh);const Kv=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s\/]*)\s*/,Zv=c=>c&&c[0].toLowerCase()+c.substring(1);function Uh(c){if(typeof c!="function")return;if(Object.prototype.hasOwnProperty.call(c,"scriptName")&&c.scriptName)return c.scriptName;if("name"in Function.prototype)return c.name;if(c===Function||c===Function.prototype.constructor)return"Function";const t=`${c}`.match(Kv);return t?t[1]:void 0}function Jv(c){if(typeof c!="function")return;if(Object.prototype.hasOwnProperty.call(c,"__name")&&c.__name)return c.__name;if(Object.prototype.hasOwnProperty.call(c,"scriptName")&&c.scriptName)return c.scriptName;const t=Uh(c);return t?Zv(t):void 0}class Qv extends pe{constructor(e){super();o(this,"_scripts",new Map);o(this,"_list",[]);o(this,"_scriptSchemas",new Map);this.app=e}destroy(){this.app=null,this.off()}addSchema(e,i){i&&this._scriptSchemas.set(e,i)}getSchema(e){return this._scriptSchemas.get(e)}add(e){const i=Jv(e);return!i||jv.has(i)?!1:(e.__name=i,this._scripts.has(i)?(setTimeout(()=>{if(e.prototype.swap){const s=this._scripts.get(i),a=this._list.indexOf(s);this._list[a]=e,this._scripts.set(i,e),this.fire("swap",i,e),this.fire(`swap:${i}`,e)}else console.warn(`script registry already has '${i}' script, define 'swap' method for new script type to enable code hot swapping`)}),!1):(this._scripts.set(i,e),this._list.push(e),this.fire("add",i,e),this.fire(`add:${i}`,e),setTimeout(()=>{if(!this._scripts.has(i)||!this.app||!this.app.systems||!this.app.systems.script)return;const s=this.app.systems.script._components;let a;const r=[],n=[];for(s.loopIndex=0;s.loopIndex<s.length;s.loopIndex++){const l=s.items[s.loopIndex];if(l._scriptsIndex[i]&&l._scriptsIndex[i].awaiting){l._scriptsData&&l._scriptsData[i]&&(a=l._scriptsData[i].attributes);const d=l.create(i,{preloading:!0,ind:l._scriptsIndex[i].ind,attributes:a});d&&r.push(d);for(const f of l.scripts)l.initializeAttributes(f)}}for(let l=0;l<r.length;l++)r[l].enabled&&(r[l]._initialized=!0,n.push(r[l]),r[l].initialize&&r[l].initialize());for(let l=0;l<n.length;l++)!n[l].enabled||n[l]._postInitialized||(n[l]._postInitialized=!0,n[l].postInitialize&&n[l].postInitialize())}),!0))}remove(e){let i=e,s=e;if(typeof s!="string"?s=i.__name:i=this.get(s),this.get(s)!==i)return!1;this._scripts.delete(s);const a=this._list.indexOf(i);return this._list.splice(a,1),this.fire("remove",s,i),this.fire(`remove:${s}`,i),!0}get(e){return this._scripts.get(e)||null}has(e){if(typeof e=="string")return this._scripts.has(e);if(!e)return!1;const i=e.__name;return this._scripts.get(i)===e}list(){return this._list}}const eS=(c,t)=>c.constructor.order-t.constructor.order,tS=c=>c.sort(eS),Qi=[],Bh=[],iS=()=>Bh.pop()??[],fc=c=>{c.length=0,Bh.push(c)},Oa=class Oa extends ki{constructor(e,i=rt()){super(e);o(this,"anim");o(this,"animation");o(this,"audiolistener");o(this,"button");o(this,"camera");o(this,"collision");o(this,"element");o(this,"gsplat");o(this,"layoutchild");o(this,"layoutgroup");o(this,"light");o(this,"model");o(this,"particlesystem");o(this,"render");o(this,"rigidbody");o(this,"screen");o(this,"script");o(this,"scrollbar");o(this,"scrollview");o(this,"sound");o(this,"sprite");o(this,"c",{});o(this,"_app");o(this,"_destroying",!1);o(this,"_guid",null);o(this,"_template",!1);this._app=i}addComponent(e,i){const s=this._app.systems[e];return!s||this.c[e]?null:s.addComponent(this,i)}removeComponent(e){const i=this._app.systems[e];i&&this.c[e]&&i.removeComponent(this)}findComponent(e){const i=this.findOne(s=>{var a;return(a=s.c)==null?void 0:a[e]});return i&&i.c[e]}findComponents(e){return this.find(i=>{var s;return(s=i.c)==null?void 0:s[e]}).map(i=>i.c[e])}findScript(e){const i=this.findOne(s=>{var a,r;return(r=(a=s.c)==null?void 0:a.script)==null?void 0:r.has(e)});return i==null?void 0:i.c.script.get(e)}findScripts(e){return this.find(s=>{var a,r;return(r=(a=s.c)==null?void 0:a.script)==null?void 0:r.has(e)}).map(s=>s.c.script.get(e))}set guid(e){const i=this._app._entityIndex;this._guid&&delete i[this._guid],this._guid=e,i[this._guid]=this}get guid(){return this._guid||(this.guid=Zh.create()),this._guid}getGuid(){return this.guid}setGuid(e){this.guid=e}_notifyHierarchyStateChanged(e,i){let s=!1;e===this&&Qi.length===0&&(s=!0),e._beingEnabled=!0,e._onHierarchyStateChanged(i),e._onHierarchyStatePostChanged&&Qi.push(e);const a=e._children;for(let r=0,n=a.length;r<n;r++)a[r]._enabled&&this._notifyHierarchyStateChanged(a[r],i);if(e._beingEnabled=!1,s){for(let r=0;r<Qi.length;r++)Qi[r]._onHierarchyStatePostChanged();Qi.length=0}}_onHierarchyStateChanged(e){super._onHierarchyStateChanged(e);const i=this._getSortedComponents();for(let s=0;s<i.length;s++){const a=i[s];a.enabled&&(e?a.onEnable():a.onDisable())}fc(i)}_onHierarchyStatePostChanged(){const e=this._getSortedComponents();for(let i=0;i<e.length;i++)e[i].onPostStateChange();fc(e)}findByGuid(e){if(this._guid===e)return this;const i=this._app._entityIndex[e];return i&&(i===this||i.isDescendantOf(this))?i:null}destroy(){this._destroying=!0;for(const e in this.c)this.c[e].enabled=!1;for(const e in this.c)this.c[e].system.removeComponent(this);super.destroy(),this._guid&&delete this._app._entityIndex[this._guid],this._destroying=!1}clone(){const e={},i=this._cloneRecursively(e);return e[this.guid]=i,kh(this,this,i,e),i}_getSortedComponents(){const e=this.c,i=iS();let s=0;for(const a in e)if(e.hasOwnProperty(a)){const r=e[a];s|=r.constructor.order!==0,i.push(r)}return s&&i.length>1&&tS(i),i}_cloneRecursively(e){const i=new this.constructor(void 0,this._app);super._cloneInternal(i);for(const s in this.c)this.c[s].system.cloneComponent(this,i);for(let s=0;s<this._children.length;s++){const a=this._children[s];if(a instanceof Oa){const r=a._cloneRecursively(e);i.addChild(r),e[a.guid]=r}}return i}};o(Oa,"EVENT_DESTROY","destroy");let Q=Oa;function kh(c,t,e,i){if(t instanceof Q){const s=t.c;for(const n in s){const l=s[n],d=l.system.getPropertiesOfType("entity");for(let f=0,h=d.length;f<h;f++){const p=d[f].name,m=l[p];if(!!c.findByGuid(m)){const v=i[m].guid;v&&(e.c[n][p]=v)}}}s.script&&e.script.resolveDuplicatedEntityReferenceProperties(s.script,i),s.render&&e.render.resolveDuplicatedEntityReferenceProperties(s.render,i),s.button&&e.button.resolveDuplicatedEntityReferenceProperties(s.button,i),s.joint&&e.joint.resolveDuplicatedEntityReferenceProperties(s.joint,i),s.scrollview&&e.scrollview.resolveDuplicatedEntityReferenceProperties(s.scrollview,i),s.scrollbar&&e.scrollbar.resolveDuplicatedEntityReferenceProperties(s.scrollbar,i),s.anim&&e.anim.resolveDuplicatedEntityReferenceProperties(s.anim,i);const a=t.children.filter(n=>n instanceof Q),r=e.children.filter(n=>n instanceof Q);for(let n=0,l=a.length;n<l;n++)kh(c,a[n],r[n],i)}}class uc{constructor(t,e){o(this,"name");o(this,"url");o(this,"data",null);o(this,"_loading",!1);o(this,"_onLoadedCallbacks",[]);this.name=t,this.url=e}get loaded(){return!!this.data}get loading(){return this._loading}}class sS{constructor(t){o(this,"_app");o(this,"_list",[]);o(this,"_index",{});o(this,"_urlIndex",{});this._app=t}destroy(){this._app=null}list(){return this._list}add(t,e){if(this._index.hasOwnProperty(t))return!1;const i=new uc(t,e),s=this._list.push(i);return this._index[i.name]=s-1,this._urlIndex[i.url]=s-1,!0}find(t){return this._index.hasOwnProperty(t)?this._list[this._index[t]]:null}findByUrl(t){return this._urlIndex.hasOwnProperty(t)?this._list[this._urlIndex[t]]:null}remove(t){if(this._index.hasOwnProperty(t)){const e=this._index[t];let i=this._list[e];delete this._urlIndex[i.url],delete this._index[t],this._list.splice(e,1);for(let s=0;s<this._list.length;s++)i=this._list[s],this._index[i.name]=s,this._urlIndex[i.url]=s}}_loadSceneData(t,e,i){const s=this._app;let a=t;if(typeof t=="string"&&(t=this.findByUrl(a)||this.find(a)||new uc("Untitled",a)),a=t.url,!a){i("Cannot find scene to load");return}if(t.loaded){i(null,t);return}s.assets&&s.assets.prefix&&!yn.test(a)&&(a=J.join(s.assets.prefix,a)),t._onLoadedCallbacks.push(i),t._loading||s.loader.getHandler("hierarchy").load(a,(n,l)=>{t.data=l,t._loading=!1;for(let d=0;d<t._onLoadedCallbacks.length;d++)t._onLoadedCallbacks[d](n,t);e||(t.data=null),t._onLoadedCallbacks.length=0}),t._loading=!0}loadSceneData(t,e){this._loadSceneData(t,!0,e)}unloadSceneData(t){typeof t=="string"&&(t=this.findByUrl(t)),t&&(t.data=null)}_loadSceneHierarchy(t,e,i){this._loadSceneData(t,!1,(s,a)=>{if(s){i&&i(s);return}e&&e(a);const r=this._app,n=()=>{const l=r.loader.getHandler("hierarchy");r.systems.script.preloading=!0;const d=l.open(a.url,a.data);r.systems.script.preloading=!1,r.loader.clearCache(a.url,"hierarchy"),r.root.addChild(d),r.systems.fire("initialize",d),r.systems.fire("postInitialize",d),r.systems.fire("postPostInitialize",d),i&&i(null,d)};r._preloadScripts(a.data,n)})}loadSceneHierarchy(t,e){this._loadSceneHierarchy(t,null,e)}loadSceneSettings(t,e){this._loadSceneData(t,!1,(i,s)=>{i?e&&e(i):(this._app.applySceneSettings(s.data.settings),e&&e(null))})}changeScene(t,e){const i=this._app,s=a=>{const{children:r}=i.root;for(;r.length;)r[0].destroy();i.applySceneSettings(a.data.settings)};this._loadSceneHierarchy(t,s,e)}loadScene(t,e){const i=this._app,s=i.loader.getHandler("scene");i.assets&&i.assets.prefix&&!yn.test(t)&&(t=J.join(i.assets.prefix,t)),s.load(t,(a,r)=>{if(a)e&&e(a);else{const n=()=>{i.systems.script.preloading=!0;const l=s.open(t,r),d=this.findByUrl(t);d&&!d.loaded&&(d.data=r),i.systems.script.preloading=!1,i.loader.clearCache(t,"scene"),i.loader.patch({resource:l,type:"scene"},i.assets),i.root.addChild(l.root),i.systems.rigidbody&&i.systems.rigidbody.gravity.set(l._gravity.x,l._gravity.y,l._gravity.z),e&&e(null,l)};i._preloadScripts(r,n)}})}}class aS{constructor(t){var e;this.frame={fps:0,ms:0,dt:0,updateStart:0,updateTime:0,renderStart:0,renderTime:0,physicsStart:0,physicsTime:0,scriptUpdateStart:0,scriptUpdate:0,scriptPostUpdateStart:0,scriptPostUpdate:0,animUpdateStart:0,animUpdate:0,cullTime:0,sortTime:0,skinTime:0,morphTime:0,instancingTime:0,triangles:0,gsplats:0,gsplatSort:0,gsplatBufferCopy:0,otherPrimitives:0,shaders:0,materials:0,cameras:0,shadowMapUpdates:0,shadowMapTime:0,depthMapTime:0,forwardTime:0,lightClustersTime:0,lightClusters:0,_timeToCountFrames:0,_fpsAccum:0},this.drawCalls={forward:0,depth:0,shadow:0,immediate:0,misc:0,total:0,skinned:0,instanced:0,removedByInstancing:0},this.misc={renderTargetCreationTime:0},this.particles={updatesPerFrame:0,_updatesPerFrame:0,frameTime:0,_frameTime:0},this.shaders=t._shaderStats,this.vram=t._vram,this.gpu=((e=t.gpuProfiler)==null?void 0:e.passTimings)??new Map,Object.defineProperty(this.vram,"totalUsed",{get:function(){return this.tex+this.vb+this.ib+this.ub+this.sb}}),Object.defineProperty(this.vram,"geom",{get:function(){return this.vb+this.ib}}),Object.defineProperty(this.vram,"buffers",{get:function(){return this.ub+this.sb}})}get scene(){return rt().scene._stats}get lightmapper(){var t;return(t=rt().lightmapper)==null?void 0:t.stats}get batcher(){const t=rt()._batcher;return t?t._stats:null}updateBasic(t,e,i,s,a){const r=this.frame;r.dt=e,r.ms=i,t>r._timeToCountFrames?(r.fps=r._fpsAccum,r._fpsAccum=0,r._timeToCountFrames=t+1e3):r._fpsAccum++,this.drawCalls.total=a._drawCallsPerFrame,a._drawCallsPerFrame=0,r.gsplats=s._gsplatCount,r.gsplatBufferCopy=s._gsplatBufferCopy??0}updateDetailed(t,e){let i=this.frame;i.cameras=t._camerasRendered,i.materials=t._materialSwitches,i.shaders=e._shaderSwitchesPerFrame,i.shadowMapUpdates=t._shadowMapUpdates,i.shadowMapTime=t._shadowMapTime,i.depthMapTime=t._depthMapTime,i.forwardTime=t._forwardTime;const s=e._primsPerFrame;i.triangles=s[ga]/3+Math.max(s[cd]-2,0)+Math.max(s[ru]-2,0),i.cullTime=t._cullTime,i.sortTime=t._sortTime,i.skinTime=t._skinTime,i.morphTime=t._morphTime,i.lightClusters=t._lightClusters,i.lightClustersTime=t._lightClustersTime,i.otherPrimitives=0;for(let a=0;a<s.length;a++)a<ga&&(i.otherPrimitives+=s[a]),s[a]=0;t._camerasRendered=0,t._materialSwitches=0,t._shadowMapUpdates=0,e._shaderSwitchesPerFrame=0,t._cullTime=0,t._layerCompositionUpdateTime=0,t._lightClustersTime=0,t._sortTime=0,t._skinTime=0,t._morphTime=0,t._shadowMapTime=0,t._depthMapTime=0,t._forwardTime=0,i=this.drawCalls,i.forward=t._forwardDrawCalls,i.culled=t._numDrawCallsCulled,i.depth=0,i.shadow=t._shadowDrawCalls,i.skinned=t._skinDrawCalls,i.immediate=0,i.instanced=0,i.removedByInstancing=0,i.misc=i.total-(i.forward+i.shadow),t._depthDrawCalls=0,t._shadowDrawCalls=0,t._forwardDrawCalls=0,t._numDrawCallsCulled=0,t._skinDrawCalls=0,t._immediateRendered=0,t._instancedDrawCalls=0,this.misc.renderTargetCreationTime=e.renderTargetCreationTime,i=this.particles,i.updatesPerFrame=i._updatesPerFrame,i.frameTime=i._frameTime,i._updatesPerFrame=0,i._frameTime=0}frameEnd(){this.frame.gsplatSort=0}}var rS=`
uniform float alpha_ref;
void alphaTest(float a) {
	if (a < alpha_ref) discard;
}
`,nS=`
#ifdef LIT_AMBIENT_SOURCE == AMBIENTSH
	uniform vec3 ambientSH[9];
#endif
#if LIT_AMBIENT_SOURCE == ENVALATLAS
	#include "envAtlasPS"
	#ifndef ENV_ATLAS
	#define ENV_ATLAS
		uniform sampler2D texture_envAtlas;
	#endif
#endif
void addAmbient(vec3 worldNormal) {
	#ifdef LIT_AMBIENT_SOURCE == AMBIENTSH
		vec3 n = cubeMapRotate(worldNormal);
		vec3 color =
			ambientSH[0] +
			ambientSH[1] * n.x +
			ambientSH[2] * n.y +
			ambientSH[3] * n.z +
			ambientSH[4] * n.x * n.z +
			ambientSH[5] * n.z * n.y +
			ambientSH[6] * n.y * n.x +
			ambientSH[7] * (3.0 * n.z * n.z - 1.0) +
			ambientSH[8] * (n.x * n.x - n.y * n.y);
		dDiffuseLight += processEnvironment(max(color, vec3(0.0)));
	#endif
	#if LIT_AMBIENT_SOURCE == ENVALATLAS
		vec3 dir = normalize(cubeMapRotate(worldNormal) * vec3(-1.0, 1.0, 1.0));
		vec2 uv = mapUv(toSphericalUv(dir), vec4(128.0, 256.0 + 128.0, 64.0, 32.0) / atlasSize);
		vec4 raw = texture2D(texture_envAtlas, uv);
		vec3 linear = {ambientDecode}(raw);
		dDiffuseLight += processEnvironment(linear);
	#endif
	#if LIT_AMBIENT_SOURCE == CONSTANT
		dDiffuseLight += light_globalAmbient;
	#endif
}
`,oS=`
#ifdef LIT_GGX_SPECULAR
	uniform float material_anisotropyIntensity;
	uniform vec2 material_anisotropyRotation;
#endif
void getAnisotropy() {
	dAnisotropy = 0.0;
	dAnisotropyRotation = vec2(1.0, 0.0);
#ifdef LIT_GGX_SPECULAR
	dAnisotropy = material_anisotropyIntensity;
	dAnisotropyRotation = material_anisotropyRotation;
#endif
	#ifdef STD_ANISOTROPY_TEXTURE
	vec3 anisotropyTex = texture2DBias({STD_ANISOTROPY_TEXTURE_NAME}, {STD_ANISOTROPY_TEXTURE_UV}, textureBias).rgb;
	dAnisotropy *= anisotropyTex.b;
	vec2 anisotropyRotationFromTex = anisotropyTex.rg * 2.0 - vec2(1.0);
	mat2 rotationMatrix = mat2(dAnisotropyRotation.x, dAnisotropyRotation.y, -dAnisotropyRotation.y, dAnisotropyRotation.x);
	dAnisotropyRotation = rotationMatrix * anisotropyRotationFromTex;
	#endif
	
	dAnisotropy = clamp(dAnisotropy, 0.0, 1.0);
}
`,lS=`
#if defined(STD_AO_TEXTURE) || defined(STD_AO_VERTEX)
	uniform float material_aoIntensity;
#endif
#ifdef STD_AODETAIL_TEXTURE
	#include "detailModesPS"
#endif
void getAO() {
	dAo = 1.0;
	#ifdef STD_AO_TEXTURE
		float aoBase = texture2DBias({STD_AO_TEXTURE_NAME}, {STD_AO_TEXTURE_UV}, textureBias).{STD_AO_TEXTURE_CHANNEL};
		#ifdef STD_AODETAIL_TEXTURE
			float aoDetail = texture2DBias({STD_AODETAIL_TEXTURE_NAME}, {STD_AODETAIL_TEXTURE_UV}, textureBias).{STD_AODETAIL_TEXTURE_CHANNEL};
			aoBase = detailMode_{STD_AODETAIL_DETAILMODE}(vec3(aoBase), vec3(aoDetail)).r;
		#endif
		dAo *= aoBase;
	#endif
	#ifdef STD_AO_VERTEX
		dAo *= saturate(vVertexColor.{STD_AO_VERTEX_CHANNEL});
	#endif
	#if defined(STD_AO_TEXTURE) || defined(STD_AO_VERTEX)
		dAo = mix(1.0, dAo, material_aoIntensity);
	#endif
}
`,cS=`
void occludeDiffuse(float ao) {
	dDiffuseLight *= ao;
}
`,dS=`
#if LIT_OCCLUDE_SPECULAR != NONE
	#ifdef LIT_OCCLUDE_SPECULAR_FLOAT
		uniform float material_occludeSpecularIntensity;
	#endif
#endif
void occludeSpecular(float gloss, float ao, vec3 worldNormal, vec3 viewDir) {
	#if LIT_OCCLUDE_SPECULAR == AO
		#ifdef LIT_OCCLUDE_SPECULAR_FLOAT
			float specOcc = mix(1.0, ao, material_occludeSpecularIntensity);
		#else
			float specOcc = ao;
		#endif
	#endif
	#if LIT_OCCLUDE_SPECULAR == GLOSSDEPENDENT
		float specPow = exp2(gloss * 11.0);
		float specOcc = saturate(pow(dot(worldNormal, viewDir) + ao, 0.01 * specPow) - 1.0 + ao);
		#ifdef LIT_OCCLUDE_SPECULAR_FLOAT
			specOcc = mix(1.0, specOcc, material_occludeSpecularIntensity);
		#endif
	#endif
	#if LIT_OCCLUDE_SPECULAR != NONE
		dSpecularLight *= specOcc;
		dReflection *= specOcc;
		#ifdef LIT_SHEEN
			sSpecularLight *= specOcc;
			sReflection *= specOcc;
		#endif
	#endif
}
`,hS=`
	vec4 dirLm = texture2D(texture_dirLightMap, vUv1);
	if (bakeDir > 0.5) {
		if (dAtten > 0.00001) {
			dirLm.xyz = dirLm.xyz * 2.0 - vec3(1.0);
			dAtten = saturate(dAtten);
			gl_FragColor.rgb = normalize(dLightDirNormW.xyz*dAtten + dirLm.xyz*dirLm.w) * 0.5 + vec3(0.5);
			gl_FragColor.a = dirLm.w + dAtten;
			gl_FragColor.a = max(gl_FragColor.a, 1.0 / 255.0);
		} else {
			gl_FragColor = dirLm;
		}
	} else {
		gl_FragColor.rgb = dirLm.xyz;
		gl_FragColor.a = max(dirLm.w, dAtten > 0.00001 ? (1.0/255.0) : 0.0);
	}
`,fS=`
#ifdef LIT_LIGHTMAP_BAKING_ADD_AMBIENT
	dDiffuseLight = ((dDiffuseLight - 0.5) * max(ambientBakeOcclusionContrast + 1.0, 0.0)) + 0.5;
	dDiffuseLight += vec3(ambientBakeOcclusionBrightness);
	dDiffuseLight = saturate(dDiffuseLight);
	dDiffuseLight *= dAmbientLight;
#endif
#ifdef LIGHTMAP_RGBM
	gl_FragColor.rgb = dDiffuseLight;
	gl_FragColor.rgb = pow(gl_FragColor.rgb, vec3(0.5));
	gl_FragColor.rgb /= 8.0;
	gl_FragColor.a = clamp( max( max( gl_FragColor.r, gl_FragColor.g ), max( gl_FragColor.b, 1.0 / 255.0 ) ), 0.0,1.0 );
	gl_FragColor.a = ceil(gl_FragColor.a * 255.0) / 255.0;
	gl_FragColor.rgb /= gl_FragColor.a;
#else
	gl_FragColor = vec4(dDiffuseLight, 1.0);
#endif
`,uS=`
uniform vec3 view_position;
uniform vec3 light_globalAmbient;
float square(float x) {
	return x*x;
}
float saturate(float x) {
	return clamp(x, 0.0, 1.0);
}
vec3 saturate(vec3 x) {
	return clamp(x, vec3(0.0), vec3(1.0));
}
`,pS=`
#define NINESLICED
varying vec2 vMask;
varying vec2 vTiledUv;
uniform mediump vec4 innerOffset;
uniform mediump vec2 outerScale;
uniform mediump vec4 atlasRect;
vec2 nineSlicedUv;
`,mS=`
#define NINESLICED
#define NINESLICETILED
varying vec2 vMask;
varying vec2 vTiledUv;
uniform mediump vec4 innerOffset;
uniform mediump vec2 outerScale;
uniform mediump vec4 atlasRect;
vec2 nineSlicedUv;
`,_S=`
float bayer2(vec2 p) {
	return mod(2.0 * p.y + p.x + 1.0, 4.0);
}
float bayer4(vec2 p) {
	vec2 p1 = mod(p, 2.0);
	vec2 p2 = floor(0.5 * mod(p, 4.0));
	return 4.0 * bayer2(p1) + bayer2(p2);
}
float bayer8(vec2 p) {
	vec2 p1 = mod(p, 2.0);
	vec2 p2 = floor(0.5 * mod(p, 4.0));
	vec2 p4 = floor(0.25 * mod(p, 8.0));
	return 4.0 * (4.0 * bayer2(p1) + bayer2(p2)) + bayer2(p4);
}
`,gS=`
varying vec2 vUv0;
uniform sampler2D source;
uniform vec2 pixelOffset;
#ifdef GAUSS
	uniform float weight[{SAMPLES}];
#endif
void main(void) {
	vec3 moments = vec3(0.0);
	vec2 uv = vUv0 - pixelOffset * (float({SAMPLES}) * 0.5);
	for (int i = 0; i < {SAMPLES}; i++) {
		vec4 c = texture2D(source, uv + pixelOffset * float(i));
		#ifdef GAUSS
			moments += c.xyz * weight[i];
		#else
			moments += c.xyz;
		#endif
	}
	#ifndef GAUSS
		moments *= 1.0 / float({SAMPLES});
	#endif
	gl_FragColor = vec4(moments.x, moments.y, moments.z, 1.0);
}
`,vS=`
uniform float material_clearCoat;
void getClearCoat() {
	ccSpecularity = material_clearCoat;
	#ifdef STD_CLEARCOAT_TEXTURE
	ccSpecularity *= texture2DBias({STD_CLEARCOAT_TEXTURE_NAME}, {STD_CLEARCOAT_TEXTURE_UV}, textureBias).{STD_CLEARCOAT_TEXTURE_CHANNEL};
	#endif
	#ifdef STD_CLEARCOAT_VERTEX
	ccSpecularity *= saturate(vVertexColor.{STD_CLEARCOAT_VERTEX_CHANNEL});
	#endif
}
`,SS=`
uniform float material_clearCoatGloss;
void getClearCoatGlossiness() {
	ccGlossiness = material_clearCoatGloss;
	#ifdef STD_CLEARCOATGLOSS_TEXTURE
	ccGlossiness *= texture2DBias({STD_CLEARCOATGLOSS_TEXTURE_NAME}, {STD_CLEARCOATGLOSS_TEXTURE_UV}, textureBias).{STD_CLEARCOATGLOSS_TEXTURE_CHANNEL};
	#endif
	#ifdef STD_CLEARCOATGLOSS_VERTEX
	ccGlossiness *= saturate(vVertexColor.{STD_CLEARCOATGLOSS_VERTEX_CHANNEL});
	#endif
	#ifdef STD_CLEARCOATGLOSS_INVERT
	ccGlossiness = 1.0 - ccGlossiness;
	#endif
	ccGlossiness += 0.0000001;
}
`,TS=`
#ifdef STD_CLEARCOATNORMAL_TEXTURE
uniform float material_clearCoatBumpiness;
#endif
void getClearCoatNormal() {
#ifdef STD_CLEARCOATNORMAL_TEXTURE
	vec3 normalMap = {STD_CLEARCOATNORMAL_TEXTURE_DECODE}(texture2DBias({STD_CLEARCOATNORMAL_TEXTURE_NAME}, {STD_CLEARCOATNORMAL_TEXTURE_UV}, textureBias));
	normalMap = mix(vec3(0.0, 0.0, 1.0), normalMap, material_clearCoatBumpiness);
	ccNormalW = normalize(dTBN * normalMap);
#else
	ccNormalW = dVertexNormalW;
#endif
}
`,ES=`
vec2 getCubemapFaceCoordinates(const vec3 dir, out float faceIndex, out vec2 tileOffset)
{
	vec3 vAbs = abs(dir);
	float ma;
	vec2 uv;
	if (vAbs.z >= vAbs.x && vAbs.z >= vAbs.y) {
		faceIndex = dir.z < 0.0 ? 5.0 : 4.0;
		ma = 0.5 / vAbs.z;
		uv = vec2(dir.z < 0.0 ? -dir.x : dir.x, -dir.y);
		tileOffset.x = 2.0;
		tileOffset.y = dir.z < 0.0 ? 1.0 : 0.0;
	} else if(vAbs.y >= vAbs.x) {
		faceIndex = dir.y < 0.0 ? 3.0 : 2.0;
		ma = 0.5 / vAbs.y;
		uv = vec2(dir.x, dir.y < 0.0 ? -dir.z : dir.z);
		tileOffset.x = 1.0;
		tileOffset.y = dir.y < 0.0 ? 1.0 : 0.0;
	} else {
		faceIndex = dir.x < 0.0 ? 1.0 : 0.0;
		ma = 0.5 / vAbs.x;
		uv = vec2(dir.x < 0.0 ? dir.z : -dir.z, -dir.y);
		tileOffset.x = 0.0;
		tileOffset.y = dir.x < 0.0 ? 1.0 : 0.0;
	}
	return uv * ma + 0.5;
}
vec2 getCubemapAtlasCoordinates(const vec3 omniAtlasViewport, float shadowEdgePixels, float shadowTextureResolution, const vec3 dir) {
	float faceIndex;
	vec2 tileOffset;
	vec2 uv = getCubemapFaceCoordinates(dir, faceIndex, tileOffset);
	float atlasFaceSize = omniAtlasViewport.z;
	float tileSize = shadowTextureResolution * atlasFaceSize;
	float offset = shadowEdgePixels / tileSize;
	uv = uv * vec2(1.0 - offset * 2.0) + vec2(offset * 1.0);
	uv *= atlasFaceSize;
	uv += tileOffset * atlasFaceSize;
	uv += omniAtlasViewport.xy;
	return uv;
}
`,yS=`
vec3 _getCookieClustered(TEXTURE_ACCEPT(tex), vec2 uv, float intensity, vec4 cookieChannel) {
	vec4 pixel = mix(vec4(1.0), texture2DLod(tex, uv, 0.0), intensity);
	bool isRgb = dot(cookieChannel.rgb, vec3(1.0)) == 3.0;
	return isRgb ? pixel.rgb : vec3(dot(pixel, cookieChannel));
}
vec3 getCookie2DClustered(TEXTURE_ACCEPT(tex), mat4 transform, vec3 worldPosition, float intensity, vec4 cookieChannel) {
	vec4 projPos = transform * vec4(worldPosition, 1.0);
	return _getCookieClustered(TEXTURE_PASS(tex), projPos.xy / projPos.w, intensity, cookieChannel);
}
vec3 getCookieCubeClustered(TEXTURE_ACCEPT(tex), vec3 dir, float intensity, vec4 cookieChannel, float shadowTextureResolution, float shadowEdgePixels, vec3 omniAtlasViewport) {
	vec2 uv = getCubemapAtlasCoordinates(omniAtlasViewport, shadowEdgePixels, shadowTextureResolution, dir);
	return _getCookieClustered(TEXTURE_PASS(tex), uv, intensity, cookieChannel);
}
`,xS=`
vec3 _getShadowCoordPerspZbuffer(mat4 shadowMatrix, vec4 shadowParams, vec3 wPos) {
	vec4 projPos = shadowMatrix * vec4(wPos, 1.0);
	projPos.xyz /= projPos.w;
	return projPos.xyz;
}
vec3 getShadowCoordPerspZbufferNormalOffset(mat4 shadowMatrix, vec4 shadowParams, vec3 normal) {
	vec3 wPos = vPositionW + normal * shadowParams.y;
	return _getShadowCoordPerspZbuffer(shadowMatrix, shadowParams, wPos);
}
vec3 normalOffsetPointShadow(vec4 shadowParams, vec3 lightPos, vec3 lightDir, vec3 lightDirNorm, vec3 normal) {
	float distScale = length(lightDir);
	vec3 wPos = vPositionW + normal * shadowParams.y * clamp(1.0 - dot(normal, -lightDirNorm), 0.0, 1.0) * distScale;
	vec3 dir = wPos - lightPos;
	return dir;
}
#if defined(CLUSTER_SHADOW_TYPE_PCF1)
float getShadowOmniClusteredPCF1(SHADOWMAP_ACCEPT(shadowMap), vec4 shadowParams, vec3 omniAtlasViewport, float shadowEdgePixels, vec3 lightDir) {
	float shadowTextureResolution = shadowParams.x;
	vec2 uv = getCubemapAtlasCoordinates(omniAtlasViewport, shadowEdgePixels, shadowTextureResolution, lightDir);
	float shadowZ = length(lightDir) * shadowParams.w + shadowParams.z;
	return textureShadow(shadowMap, vec3(uv, shadowZ));
}
#endif
#if defined(CLUSTER_SHADOW_TYPE_PCF3)
float getShadowOmniClusteredPCF3(SHADOWMAP_ACCEPT(shadowMap), vec4 shadowParams, vec3 omniAtlasViewport, float shadowEdgePixels, vec3 lightDir) {
	float shadowTextureResolution = shadowParams.x;
	vec2 uv = getCubemapAtlasCoordinates(omniAtlasViewport, shadowEdgePixels, shadowTextureResolution, lightDir);
	float shadowZ = length(lightDir) * shadowParams.w + shadowParams.z;
	vec3 shadowCoord = vec3(uv, shadowZ);
	return getShadowPCF3x3(SHADOWMAP_PASS(shadowMap), shadowCoord, shadowParams);
}
#endif
#if defined(CLUSTER_SHADOW_TYPE_PCF5)
float getShadowOmniClusteredPCF5(SHADOWMAP_ACCEPT(shadowMap), vec4 shadowParams, vec3 omniAtlasViewport, float shadowEdgePixels, vec3 lightDir) {
	float shadowTextureResolution = shadowParams.x;
	vec2 uv = getCubemapAtlasCoordinates(omniAtlasViewport, shadowEdgePixels, shadowTextureResolution, lightDir);
	float shadowZ = length(lightDir) * shadowParams.w + shadowParams.z;
	vec3 shadowCoord = vec3(uv, shadowZ);
	return getShadowPCF5x5(SHADOWMAP_PASS(shadowMap), shadowCoord, shadowParams);
}
#endif
#if defined(CLUSTER_SHADOW_TYPE_PCF1)
float getShadowSpotClusteredPCF1(SHADOWMAP_ACCEPT(shadowMap), vec3 shadowCoord, vec4 shadowParams) {
	return textureShadow(shadowMap, shadowCoord);
}
#endif
#if defined(CLUSTER_SHADOW_TYPE_PCF3)
float getShadowSpotClusteredPCF3(SHADOWMAP_ACCEPT(shadowMap), vec3 shadowCoord, vec4 shadowParams) {
	return getShadowSpotPCF3x3(SHADOWMAP_PASS(shadowMap), shadowCoord, shadowParams);
}
#endif
#if defined(CLUSTER_SHADOW_TYPE_PCF5)
float getShadowSpotClusteredPCF5(SHADOWMAP_ACCEPT(shadowMap), vec3 shadowCoord, vec4 shadowParams) {
	return getShadowPCF5x5(SHADOWMAP_PASS(shadowMap), shadowCoord, shadowParams);
}
#endif
`,CS=`
#include "lightBufferDefinesPS"
#include "clusteredLightUtilsPS"
#ifdef CLUSTER_COOKIES
	#include "clusteredLightCookiesPS"
#endif
#ifdef CLUSTER_SHADOWS
	#include "clusteredLightShadowsPS"
#endif
uniform highp usampler2D clusterWorldTexture;
uniform highp sampler2D lightsTexture;
#ifdef CLUSTER_SHADOWS
	uniform sampler2DShadow shadowAtlasTexture;
#endif
#ifdef CLUSTER_COOKIES
	uniform sampler2D cookieAtlasTexture;
#endif
uniform int clusterMaxCells;
uniform int numClusteredLights;
uniform int clusterTextureWidth;
uniform vec3 clusterCellsCountByBoundsSize;
uniform vec3 clusterBoundsMin;
uniform vec3 clusterBoundsDelta;
uniform ivec3 clusterCellsDot;
uniform ivec3 clusterCellsMax;
uniform vec2 shadowAtlasParams;
struct ClusterLightData {
	vec3 position;
	int lightIndex;
	vec3 direction;
	uint shape;
	vec3 color;
	float shadowIntensity;
	float range;
	float biasesData;
	float cookieIntensity;
	bool isSpot;
	bool falloffModeLinear;
	bool isDynamic;
	bool isLightmapped;
};
struct ClusterLightSpotData {
	float innerConeAngleCos;
	float outerConeAngleCos;
};
struct ClusterLightAreaData {
	vec3 halfWidth;
	vec3 halfHeight;
};
struct ClusterLightShadowData {
	float shadowBias;
	float shadowNormalBias;
};
mat4 lightProjectionMatrix;
uint clusterLightData_flags;
float clusterLightData_anglesData;
uint clusterLightData_colorBFlagsData;
vec4 sampleLightTextureF(int lightIndex, int index) {
	return texelFetch(lightsTexture, ivec2(index, lightIndex), 0);
}
ClusterLightData decodeClusterLightCore(int lightIndex) {
	ClusterLightData clusterLightData;
	clusterLightData.lightIndex = lightIndex;
	vec4 halfData = sampleLightTextureF(lightIndex, {CLUSTER_TEXTURE_COLOR_ANGLES_BIAS});
	clusterLightData_anglesData = halfData.z;
	clusterLightData.biasesData = halfData.w;
	clusterLightData_colorBFlagsData = floatBitsToUint(halfData.y);
	vec2 colorRG = unpackHalf2x16(floatBitsToUint(halfData.x));
	vec2 colorB_flags = unpackHalf2x16(clusterLightData_colorBFlagsData);
	clusterLightData.color = vec3(colorRG, colorB_flags.x) * {LIGHT_COLOR_DIVIDER};
	vec4 lightPosRange = sampleLightTextureF(lightIndex, {CLUSTER_TEXTURE_POSITION_RANGE});
	clusterLightData.position = lightPosRange.xyz;
	clusterLightData.range = lightPosRange.w;
	vec4 lightDir_Flags = sampleLightTextureF(lightIndex, {CLUSTER_TEXTURE_DIRECTION_FLAGS});
	clusterLightData.direction = lightDir_Flags.xyz;
	clusterLightData_flags = floatBitsToUint(lightDir_Flags.w);
	clusterLightData.isSpot = (clusterLightData_flags & (1u << 30u)) != 0u;
	clusterLightData.shape = (clusterLightData_flags >> 28u) & 0x3u;
	clusterLightData.falloffModeLinear = (clusterLightData_flags & (1u << 27u)) == 0u;
	clusterLightData.shadowIntensity = float((clusterLightData_flags >> 0u) & 0xFFu) / 255.0;
	clusterLightData.cookieIntensity = float((clusterLightData_flags >> 8u) & 0xFFu) / 255.0;
	clusterLightData.isDynamic = (clusterLightData_flags & (1u << 22u)) != 0u;
	clusterLightData.isLightmapped = (clusterLightData_flags & (1u << 21u)) != 0u;
	return clusterLightData;
}
ClusterLightSpotData decodeClusterLightSpot() {
	uint angleFlags = (clusterLightData_colorBFlagsData >> 16u) & 0xFFFFu;
	vec2 angleValues = unpackHalf2x16(floatBitsToUint(clusterLightData_anglesData));
	float innerVal = angleValues.x;
	float outerVal = angleValues.y;
	float innerIsVersine = float(angleFlags & 1u);
	float outerIsVersine = float((angleFlags >> 1u) & 1u);
	return ClusterLightSpotData(
		mix(innerVal, 1.0 - innerVal, innerIsVersine),
		mix(outerVal, 1.0 - outerVal, outerIsVersine)
	);
}
vec3 decodeClusterLightOmniAtlasViewport(int lightIndex) {
	return sampleLightTextureF(lightIndex, {CLUSTER_TEXTURE_PROJ_MAT_0}).xyz;
}
ClusterLightAreaData decodeClusterLightAreaData(int lightIndex) {
	return ClusterLightAreaData(
		sampleLightTextureF(lightIndex, {CLUSTER_TEXTURE_AREA_DATA_WIDTH}).xyz,
		sampleLightTextureF(lightIndex, {CLUSTER_TEXTURE_AREA_DATA_HEIGHT}).xyz
	);
}
mat4 decodeClusterLightProjectionMatrixData(int lightIndex) {
	vec4 m0 = sampleLightTextureF(lightIndex, {CLUSTER_TEXTURE_PROJ_MAT_0});
	vec4 m1 = sampleLightTextureF(lightIndex, {CLUSTER_TEXTURE_PROJ_MAT_1});
	vec4 m2 = sampleLightTextureF(lightIndex, {CLUSTER_TEXTURE_PROJ_MAT_2});
	vec4 m3 = sampleLightTextureF(lightIndex, {CLUSTER_TEXTURE_PROJ_MAT_3});
	return mat4(m0, m1, m2, m3);
}
ClusterLightShadowData decodeClusterLightShadowData(float biasesData) {
	vec2 biases = unpackHalf2x16(floatBitsToUint(biasesData));
	return ClusterLightShadowData(biases.x, biases.y);
}
vec4 decodeClusterLightCookieData() {
	uint cookieFlags = (clusterLightData_flags >> 23u) & 0x0Fu;
	vec4 mask = vec4(uvec4(cookieFlags) & uvec4(1u, 2u, 4u, 8u));
	return step(1.0, mask);
}
void evaluateLight(
	ClusterLightData light, 
	vec3 worldNormal, 
	vec3 viewDir, 
	vec3 reflectionDir,
#if defined(LIT_CLEARCOAT)
	vec3 clearcoatReflectionDir,
#endif
	float gloss, 
	vec3 specularity, 
	vec3 geometricNormal, 
	mat3 tbn, 
#if defined(LIT_IRIDESCENCE)
	vec3 iridescenceFresnel,
#endif
	vec3 clearcoat_worldNormal,
	float clearcoat_gloss,
	float sheen_gloss,
	float iridescence_intensity
) {
	vec3 cookieAttenuation = vec3(1.0);
	float diffuseAttenuation = 1.0;
	float falloffAttenuation = 1.0;
	vec3 lightDirW = evalOmniLight(light.position);
	vec3 lightDirNormW = normalize(lightDirW);
	#ifdef CLUSTER_AREALIGHTS
	if (light.shape != {LIGHTSHAPE_PUNCTUAL}) {
		ClusterLightAreaData areaData = decodeClusterLightAreaData(light.lightIndex);
		if (light.shape == {LIGHTSHAPE_RECT}) {
			calcRectLightValues(light.position, areaData.halfWidth, areaData.halfHeight);
		} else if (light.shape == {LIGHTSHAPE_DISK}) {
			calcDiskLightValues(light.position, areaData.halfWidth, areaData.halfHeight);
		} else {
			calcSphereLightValues(light.position, areaData.halfWidth, areaData.halfHeight);
		}
		falloffAttenuation = getFalloffWindow(light.range, lightDirW);
	} else
	#endif
	{
		if (light.falloffModeLinear)
			falloffAttenuation = getFalloffLinear(light.range, lightDirW);
		else
			falloffAttenuation = getFalloffInvSquared(light.range, lightDirW);
	}
	if (falloffAttenuation > 0.00001) {
		#ifdef CLUSTER_AREALIGHTS
		if (light.shape != {LIGHTSHAPE_PUNCTUAL}) {
			if (light.shape == {LIGHTSHAPE_RECT}) {
				diffuseAttenuation = getRectLightDiffuse(worldNormal, viewDir, lightDirW, lightDirNormW) * 16.0;
			} else if (light.shape == {LIGHTSHAPE_DISK}) {
				diffuseAttenuation = getDiskLightDiffuse(worldNormal, viewDir, lightDirW, lightDirNormW) * 16.0;
			} else {
				diffuseAttenuation = getSphereLightDiffuse(worldNormal, viewDir, lightDirW, lightDirNormW) * 16.0;
			}
		} else
		#endif
		{
			falloffAttenuation *= getLightDiffuse(worldNormal, viewDir, lightDirNormW); 
		}
		if (light.isSpot) {
			ClusterLightSpotData spotData = decodeClusterLightSpot();
			falloffAttenuation *= getSpotEffect(light.direction, spotData.innerConeAngleCos, spotData.outerConeAngleCos, lightDirNormW);
		}
		#if defined(CLUSTER_COOKIES) || defined(CLUSTER_SHADOWS)
		if (falloffAttenuation > 0.00001) {
			if (light.shadowIntensity > 0.0 || light.cookieIntensity > 0.0) {
				vec3 omniAtlasViewport = vec3(0.0);
				if (light.isSpot) {
					lightProjectionMatrix = decodeClusterLightProjectionMatrixData(light.lightIndex);
				} else {
					omniAtlasViewport = decodeClusterLightOmniAtlasViewport(light.lightIndex);
				}
				float shadowTextureResolution = shadowAtlasParams.x;
				float shadowEdgePixels = shadowAtlasParams.y;
				#ifdef CLUSTER_COOKIES
				if (light.cookieIntensity > 0.0) {
					vec4 cookieChannelMask = decodeClusterLightCookieData();
					if (light.isSpot) {
						cookieAttenuation = getCookie2DClustered(TEXTURE_PASS(cookieAtlasTexture), lightProjectionMatrix, vPositionW, light.cookieIntensity, cookieChannelMask);
					} else {
						cookieAttenuation = getCookieCubeClustered(TEXTURE_PASS(cookieAtlasTexture), lightDirW, light.cookieIntensity, cookieChannelMask, shadowTextureResolution, shadowEdgePixels, omniAtlasViewport);
					}
				}
				#endif
				#ifdef CLUSTER_SHADOWS
				if (light.shadowIntensity > 0.0) {
					ClusterLightShadowData shadowData = decodeClusterLightShadowData(light.biasesData);
					vec4 shadowParams = vec4(shadowTextureResolution, shadowData.shadowNormalBias, shadowData.shadowBias, 1.0 / light.range);
					if (light.isSpot) {
						vec3 shadowCoord = getShadowCoordPerspZbufferNormalOffset(lightProjectionMatrix, shadowParams, geometricNormal);
						
						#if defined(CLUSTER_SHADOW_TYPE_PCF1)
							float shadow = getShadowSpotClusteredPCF1(SHADOWMAP_PASS(shadowAtlasTexture), shadowCoord, shadowParams);
						#elif defined(CLUSTER_SHADOW_TYPE_PCF3)
							float shadow = getShadowSpotClusteredPCF3(SHADOWMAP_PASS(shadowAtlasTexture), shadowCoord, shadowParams);
						#elif defined(CLUSTER_SHADOW_TYPE_PCF5)
							float shadow = getShadowSpotClusteredPCF5(SHADOWMAP_PASS(shadowAtlasTexture), shadowCoord, shadowParams);
						#elif defined(CLUSTER_SHADOW_TYPE_PCSS)
							float shadow = getShadowSpotClusteredPCSS(SHADOWMAP_PASS(shadowAtlasTexture), shadowCoord, shadowParams);
						#endif
						falloffAttenuation *= mix(1.0, shadow, light.shadowIntensity);
					} else {
						vec3 dir = normalOffsetPointShadow(shadowParams, light.position, lightDirW, lightDirNormW, geometricNormal);
						#if defined(CLUSTER_SHADOW_TYPE_PCF1)
							float shadow = getShadowOmniClusteredPCF1(SHADOWMAP_PASS(shadowAtlasTexture), shadowParams, omniAtlasViewport, shadowEdgePixels, dir);
						#elif defined(CLUSTER_SHADOW_TYPE_PCF3)
							float shadow = getShadowOmniClusteredPCF3(SHADOWMAP_PASS(shadowAtlasTexture), shadowParams, omniAtlasViewport, shadowEdgePixels, dir);
						#elif defined(CLUSTER_SHADOW_TYPE_PCF5)
							float shadow = getShadowOmniClusteredPCF5(SHADOWMAP_PASS(shadowAtlasTexture), shadowParams, omniAtlasViewport, shadowEdgePixels, dir);
						#endif
						falloffAttenuation *= mix(1.0, shadow, light.shadowIntensity);
					}
				}
				#endif
			}
		}
		#endif
		#ifdef CLUSTER_AREALIGHTS
		if (light.shape != {LIGHTSHAPE_PUNCTUAL}) {
			{
				vec3 areaDiffuse = (diffuseAttenuation * falloffAttenuation) * light.color * cookieAttenuation;
				#if defined(LIT_SPECULAR)
					areaDiffuse = mix(areaDiffuse, vec3(0), dLTCSpecFres);
				#endif
				dDiffuseLight += areaDiffuse;
			}
			#ifdef LIT_SPECULAR
				float areaLightSpecular;
				if (light.shape == {LIGHTSHAPE_RECT}) {
					areaLightSpecular = getRectLightSpecular(worldNormal, viewDir);
				} else if (light.shape == {LIGHTSHAPE_DISK}) {
					areaLightSpecular = getDiskLightSpecular(worldNormal, viewDir);
				} else {
					areaLightSpecular = getSphereLightSpecular(worldNormal, viewDir);
				}
				dSpecularLight += dLTCSpecFres * areaLightSpecular * falloffAttenuation * light.color * cookieAttenuation;
				#ifdef LIT_CLEARCOAT
					float areaLightSpecularCC;
					if (light.shape == {LIGHTSHAPE_RECT}) {
						areaLightSpecularCC = getRectLightSpecular(clearcoat_worldNormal, viewDir);
					} else if (light.shape == {LIGHTSHAPE_DISK}) {
						areaLightSpecularCC = getDiskLightSpecular(clearcoat_worldNormal, viewDir);
					} else {
						areaLightSpecularCC = getSphereLightSpecular(clearcoat_worldNormal, viewDir);
					}
					ccSpecularLight += ccLTCSpecFres * areaLightSpecularCC * falloffAttenuation * light.color  * cookieAttenuation;
				#endif
			#endif
		} else
		#endif
		{
			{
				vec3 punctualDiffuse = falloffAttenuation * light.color * cookieAttenuation;
				#if defined(CLUSTER_AREALIGHTS)
				#if defined(LIT_SPECULAR)
					punctualDiffuse = mix(punctualDiffuse, vec3(0), specularity);
				#endif
				#endif
				dDiffuseLight += punctualDiffuse;
			}
	 
			#ifdef LIT_SPECULAR
				vec3 halfDir = normalize(-lightDirNormW + viewDir);
				
				#ifdef LIT_SPECULAR_FRESNEL
					dSpecularLight += 
						getLightSpecular(halfDir, reflectionDir, worldNormal, viewDir, lightDirNormW, gloss, tbn) * falloffAttenuation * light.color * cookieAttenuation * 
						getFresnel(
							dot(viewDir, halfDir), 
							gloss, 
							specularity
						#if defined(LIT_IRIDESCENCE)
							, iridescenceFresnel,
							iridescence_intensity
						#endif
							);
				#else
					dSpecularLight += getLightSpecular(halfDir, reflectionDir, worldNormal, viewDir, lightDirNormW, gloss, tbn) * falloffAttenuation * light.color * cookieAttenuation * specularity;
				#endif
				#ifdef LIT_CLEARCOAT
					#ifdef LIT_SPECULAR_FRESNEL
						ccSpecularLight += getLightSpecular(halfDir, clearcoatReflectionDir, clearcoat_worldNormal, viewDir, lightDirNormW, clearcoat_gloss, tbn) * falloffAttenuation * light.color * cookieAttenuation * getFresnelCC(dot(viewDir, halfDir));
					#else
						ccSpecularLight += getLightSpecular(halfDir, clearcoatReflectionDir, clearcoat_worldNormal, viewDir, lightDirNormW, clearcoat_gloss, tbn) * falloffAttenuation * light.color * cookieAttenuation; 
					#endif
				#endif
				#ifdef LIT_SHEEN
					sSpecularLight += getLightSpecularSheen(halfDir, worldNormal, viewDir, lightDirNormW, sheen_gloss) * falloffAttenuation * light.color * cookieAttenuation;
				#endif
			#endif
		}
	}
	dAtten = falloffAttenuation;
	dLightDirNormW = lightDirNormW;
}
void evaluateClusterLight(
	int lightIndex, 
	vec3 worldNormal, 
	vec3 viewDir, 
	vec3 reflectionDir, 
#if defined(LIT_CLEARCOAT)
	vec3 clearcoatReflectionDir,
#endif
	float gloss, 
	vec3 specularity, 
	vec3 geometricNormal, 
	mat3 tbn, 
#if defined(LIT_IRIDESCENCE)
	vec3 iridescenceFresnel,
#endif
	vec3 clearcoat_worldNormal,
	float clearcoat_gloss,
	float sheen_gloss,
	float iridescence_intensity
) {
	ClusterLightData clusterLightData = decodeClusterLightCore(lightIndex);
	#ifdef CLUSTER_MESH_DYNAMIC_LIGHTS
		bool acceptLightMask = clusterLightData.isDynamic;
	#else
		bool acceptLightMask = clusterLightData.isLightmapped;
	#endif
	if (acceptLightMask)
		evaluateLight(
			clusterLightData, 
			worldNormal, 
			viewDir, 
			reflectionDir, 
#if defined(LIT_CLEARCOAT)
			clearcoatReflectionDir, 
#endif
			gloss, 
			specularity, 
			geometricNormal, 
			tbn, 
#if defined(LIT_IRIDESCENCE)
			iridescenceFresnel,
#endif
			clearcoat_worldNormal,
			clearcoat_gloss,
			sheen_gloss,
			iridescence_intensity
		);
}
void addClusteredLights(
	vec3 worldNormal, 
	vec3 viewDir, 
	vec3 reflectionDir, 
#if defined(LIT_CLEARCOAT)
	vec3 clearcoatReflectionDir,
#endif
	float gloss, 
	vec3 specularity, 
	vec3 geometricNormal, 
	mat3 tbn, 
#if defined(LIT_IRIDESCENCE)
	vec3 iridescenceFresnel,
#endif
	vec3 clearcoat_worldNormal,
	float clearcoat_gloss,
	float sheen_gloss,
	float iridescence_intensity
) {
	if (numClusteredLights <= 1)
		return;
	ivec3 cellCoords = ivec3(floor((vPositionW - clusterBoundsMin) * clusterCellsCountByBoundsSize));
	if (!(any(lessThan(cellCoords, ivec3(0))) || any(greaterThanEqual(cellCoords, clusterCellsMax)))) {
		int cellIndex = cellCoords.x * clusterCellsDot.x + cellCoords.y * clusterCellsDot.y + cellCoords.z * clusterCellsDot.z;
		int clusterV = cellIndex / clusterTextureWidth;
		int clusterU = cellIndex - clusterV * clusterTextureWidth;
		for (int lightCellIndex = 0; lightCellIndex < clusterMaxCells; lightCellIndex++) {
			uint lightIndex = texelFetch(clusterWorldTexture, ivec2(clusterU + lightCellIndex, clusterV), 0).x;
			if (lightIndex == 0u)
				break;
			evaluateClusterLight(
				int(lightIndex), 
				worldNormal, 
				viewDir, 
				reflectionDir,
#if defined(LIT_CLEARCOAT)
				clearcoatReflectionDir,
#endif
				gloss, 
				specularity, 
				geometricNormal, 
				tbn, 
#if defined(LIT_IRIDESCENCE)
				iridescenceFresnel,
#endif
				clearcoat_worldNormal,
				clearcoat_gloss,
				sheen_gloss,
				iridescence_intensity
			); 
		}
	}
}
`,AS=`
vec3 combineColor(vec3 albedo, vec3 sheenSpecularity, float clearcoatSpecularity) {
	vec3 ret = vec3(0);
#ifdef LIT_OLD_AMBIENT
	ret += (dDiffuseLight - light_globalAmbient) * albedo + material_ambient * light_globalAmbient;
#else
	ret += albedo * dDiffuseLight;
#endif
#ifdef LIT_SPECULAR
	ret += dSpecularLight;
#endif
#ifdef LIT_REFLECTIONS
	ret += dReflection.rgb * dReflection.a;
#endif
#ifdef LIT_SHEEN
	float sheenScaling = 1.0 - max(max(sheenSpecularity.r, sheenSpecularity.g), sheenSpecularity.b) * 0.157;
	ret = ret * sheenScaling + (sSpecularLight + sReflection.rgb) * sheenSpecularity;
#endif
#ifdef LIT_CLEARCOAT
	float clearCoatScaling = 1.0 - ccFresnel * clearcoatSpecularity;
	ret = ret * clearCoatScaling + (ccSpecularLight + ccReflection) * clearcoatSpecularity;
#endif
	return ret;
}
`,wS=`
	varying vec2 uv0;
	uniform sampler2D blitTexture;
	void main(void) {
		gl_FragColor = texture2D(blitTexture, uv0);
	}
`,LS=`
	varying vec2 uv0;
	uniform samplerCube blitTexture;
	uniform mat4 invViewProj;
	void main(void) {
		vec4 projPos = vec4(uv0 * 2.0 - 1.0, 0.5, 1.0);
		vec4 worldPos = invViewProj * projPos;
		gl_FragColor = textureCube(blitTexture, worldPos.xyz);
	}
`,DS=`
	attribute vec2 vertex_position;
	varying vec2 uv0;
	void main(void) {
		gl_Position = vec4(vertex_position, 0.5, 1.0);
		uv0 = vertex_position.xy * 0.5 + 0.5;
		#ifndef WEBGPU
			uv0.y = 1.0 - uv0.y;
		#endif
	}
`,PS=`
vec4 getCookie2D(sampler2D tex, mat4 transform, float intensity) {
	vec4 projPos = transform * vec4(vPositionW, 1.0);
	projPos.xy /= projPos.w;
	return mix(vec4(1.0), texture2D(tex, projPos.xy), intensity);
}
vec4 getCookie2DClip(sampler2D tex, mat4 transform, float intensity) {
	vec4 projPos = transform * vec4(vPositionW, 1.0);
	projPos.xy /= projPos.w;
	if (projPos.x < 0.0 || projPos.x > 1.0 || projPos.y < 0.0 || projPos.y > 1.0 || projPos.z < 0.0) return vec4(0.0);
	return mix(vec4(1.0), texture2D(tex, projPos.xy), intensity);
}
vec4 getCookie2DXform(sampler2D tex, mat4 transform, float intensity, vec4 cookieMatrix, vec2 cookieOffset) {
	vec4 projPos = transform * vec4(vPositionW, 1.0);
	projPos.xy /= projPos.w;
	projPos.xy += cookieOffset;
	vec2 uv = mat2(cookieMatrix) * (projPos.xy-vec2(0.5)) + vec2(0.5);
	return mix(vec4(1.0), texture2D(tex, uv), intensity);
}
vec4 getCookie2DClipXform(sampler2D tex, mat4 transform, float intensity, vec4 cookieMatrix, vec2 cookieOffset) {
	vec4 projPos = transform * vec4(vPositionW, 1.0);
	projPos.xy /= projPos.w;
	projPos.xy += cookieOffset;
	if (projPos.x < 0.0 || projPos.x > 1.0 || projPos.y < 0.0 || projPos.y > 1.0 || projPos.z < 0.0) return vec4(0.0);
	vec2 uv = mat2(cookieMatrix) * (projPos.xy-vec2(0.5)) + vec2(0.5);
	return mix(vec4(1.0), texture2D(tex, uv), intensity);
}
vec4 getCookieCube(samplerCube tex, mat4 transform, float intensity) {
	return mix(vec4(1.0), textureCube(tex, dLightDirNormW * mat3(transform)), intensity);
}
`,IS=`
#if LIT_CUBEMAP_PROJECTION == BOX
	uniform vec3 envBoxMin;
	uniform vec3 envBoxMax;
#endif
vec3 cubeMapProject(vec3 nrdir) {
	#if LIT_CUBEMAP_PROJECTION == NONE
		return cubeMapRotate(nrdir);
	#endif
	#if LIT_CUBEMAP_PROJECTION == BOX
		nrdir = cubeMapRotate(nrdir);
		vec3 rbmax = (envBoxMax - vPositionW) / nrdir;
		vec3 rbmin = (envBoxMin - vPositionW) / nrdir;
		vec3 rbminmax = mix(rbmin, rbmax, vec3(greaterThan(nrdir, vec3(0.0))));
		float fa = min(min(rbminmax.x, rbminmax.y), rbminmax.z);
		vec3 posonbox = vPositionW + nrdir * fa;
		vec3 envBoxPos = (envBoxMin + envBoxMax) * 0.5;
		return normalize(posonbox - envBoxPos);
	#endif
}
`,bS=`
#ifdef CUBEMAP_ROTATION
uniform mat3 cubeMapRotationMatrix;
#endif
vec3 cubeMapRotate(vec3 refDir) {
#ifdef CUBEMAP_ROTATION
	return refDir * cubeMapRotationMatrix;
#else
	return refDir;
#endif
}
`,RS=`
#ifdef DEBUG_ALBEDO_PASS
gl_FragColor = vec4(gammaCorrectOutput(dAlbedo), 1.0);
#endif
#ifdef DEBUG_UV0_PASS
gl_FragColor = vec4(litArgs_albedo , 1.0);
#endif
#ifdef DEBUG_WORLD_NORMAL_PASS
gl_FragColor = vec4(litArgs_worldNormal * 0.5 + 0.5, 1.0);
#endif
#ifdef DEBUG_OPACITY_PASS
gl_FragColor = vec4(vec3(litArgs_opacity) , 1.0);
#endif
#ifdef DEBUG_SPECULARITY_PASS
gl_FragColor = vec4(litArgs_specularity, 1.0);
#endif
#ifdef DEBUG_GLOSS_PASS
gl_FragColor = vec4(vec3(litArgs_gloss) , 1.0);
#endif
#ifdef DEBUG_METALNESS_PASS
gl_FragColor = vec4(vec3(litArgs_metalness) , 1.0);
#endif
#ifdef DEBUG_AO_PASS
gl_FragColor = vec4(vec3(litArgs_ao) , 1.0);
#endif
#ifdef DEBUG_EMISSION_PASS
gl_FragColor = vec4(gammaCorrectOutput(litArgs_emission), 1.0);
#endif
`,MS=`
#ifdef DEBUG_LIGHTING_PASS
litArgs_albedo = vec3(0.5);
#endif
#ifdef DEBUG_UV0_PASS
#ifdef VARYING_VUV0
litArgs_albedo = vec3(vUv0, 0);
#else
litArgs_albedo = vec3(0);
#endif
#endif
`,NS=`
#ifndef _DECODE_INCLUDED_
#define _DECODE_INCLUDED_
vec3 decodeLinear(vec4 raw) {
	return raw.rgb;
}
float decodeGamma(float raw) {
	return pow(raw, 2.2);
}
vec3 decodeGamma(vec3 raw) {
	return pow(raw, vec3(2.2));
}
vec3 decodeGamma(vec4 raw) {
	return pow(raw.xyz, vec3(2.2));
}
vec3 decodeRGBM(vec4 raw) {
	vec3 color = (8.0 * raw.a) * raw.rgb;
	return color * color;
}
vec3 decodeRGBP(vec4 raw) {
	vec3 color = raw.rgb * (-raw.a * 7.0 + 8.0);
	return color * color;
}
vec3 decodeRGBE(vec4 raw) {
	if (raw.a == 0.0) {
		return vec3(0.0, 0.0, 0.0);
	} else {
		return raw.xyz * pow(2.0, raw.w * 255.0 - 128.0);
	}
}
vec4 passThrough(vec4 raw) {
	return raw;
}
vec3 unpackNormalXYZ(vec4 nmap) {
	return nmap.xyz * 2.0 - 1.0;
}
vec3 unpackNormalXY(vec4 nmap) {
	vec3 normal;
	normal.xy = nmap.wy * 2.0 - 1.0;
	normal.z = sqrt(1.0 - clamp(dot(normal.xy, normal.xy), 0.0, 1.0));
	return normal;
}
#endif
`,OS=`
#ifndef _DETAILMODES_INCLUDED_
#define _DETAILMODES_INCLUDED_
vec3 detailMode_mul(vec3 c1, vec3 c2) {
	return c1 * c2;
}
vec3 detailMode_add(vec3 c1, vec3 c2) {
	return c1 + c2;
}
vec3 detailMode_screen(vec3 c1, vec3 c2) {
	return 1.0 - (1.0 - c1)*(1.0 - c2);
}
vec3 detailMode_overlay(vec3 c1, vec3 c2) {
	return mix(1.0 - 2.0 * (1.0 - c1)*(1.0 - c2), 2.0 * c1 * c2, step(c1, vec3(0.5)));
}
vec3 detailMode_min(vec3 c1, vec3 c2) {
	return min(c1, c2);
}
vec3 detailMode_max(vec3 c1, vec3 c2) {
	return max(c1, c2);
}
#endif
`,FS=`
uniform vec3 material_diffuse;
#ifdef STD_DIFFUSEDETAIL_TEXTURE
	#include "detailModesPS"
#endif
void getAlbedo() {
	dAlbedo = material_diffuse.rgb;
	#ifdef STD_DIFFUSE_TEXTURE
		vec3 albedoTexture = {STD_DIFFUSE_TEXTURE_DECODE}(texture2DBias({STD_DIFFUSE_TEXTURE_NAME}, {STD_DIFFUSE_TEXTURE_UV}, textureBias)).{STD_DIFFUSE_TEXTURE_CHANNEL};
		#ifdef STD_DIFFUSEDETAIL_TEXTURE
			vec3 albedoDetail = {STD_DIFFUSEDETAIL_TEXTURE_DECODE}(texture2DBias({STD_DIFFUSEDETAIL_TEXTURE_NAME}, {STD_DIFFUSEDETAIL_TEXTURE_UV}, textureBias)).{STD_DIFFUSEDETAIL_TEXTURE_CHANNEL};
			albedoTexture = detailMode_{STD_DIFFUSEDETAIL_DETAILMODE}(albedoTexture, albedoDetail);
		#endif
		dAlbedo *= albedoTexture;
	#endif
	#ifdef STD_DIFFUSE_VERTEX
		dAlbedo *= saturate(vVertexColor.{STD_DIFFUSE_VERTEX_CHANNEL});
	#endif
}
`,US=`
uniform vec3 material_emissive;
uniform float material_emissiveIntensity;
void getEmission() {
	dEmission = material_emissive * material_emissiveIntensity;
	#ifdef STD_EMISSIVE_TEXTURE
	dEmission *= {STD_EMISSIVE_TEXTURE_DECODE}(texture2DBias({STD_EMISSIVE_TEXTURE_NAME}, {STD_EMISSIVE_TEXTURE_UV}, textureBias)).{STD_EMISSIVE_TEXTURE_CHANNEL};
	#endif
	#ifdef STD_EMISSIVE_VERTEX
	dEmission *= saturate(vVertexColor.{STD_EMISSIVE_VERTEX_CHANNEL});
	#endif
}
`,BS=`
vec4 encodeLinear(vec3 source) {
	return vec4(source, 1.0);
}
vec4 encodeGamma(vec3 source) {
	return vec4(pow(source + 0.0000001, vec3(1.0 / 2.2)), 1.0);
}
vec4 encodeRGBM(vec3 source) {
	vec4 result;
	result.rgb = pow(source.rgb, vec3(0.5));
	result.rgb *= 1.0 / 8.0;
	result.a = saturate( max( max( result.r, result.g ), max( result.b, 1.0 / 255.0 ) ) );
	result.a = ceil(result.a * 255.0) / 255.0;
	result.rgb /= result.a;
	return result;
}
vec4 encodeRGBP(vec3 source) {
	vec3 gamma = pow(source, vec3(0.5));
	float maxVal = min(8.0, max(1.0, max(gamma.x, max(gamma.y, gamma.z))));
	float v = 1.0 - ((maxVal - 1.0) / 7.0);
	v = ceil(v * 255.0) / 255.0;
	return vec4(gamma / (-v * 7.0 + 8.0), v);	
}
vec4 encodeRGBE(vec3 source) {
	float maxVal = max(source.x, max(source.y, source.z));
	if (maxVal < 1e-32) {
		return vec4(0, 0, 0, 0);
	} else {
		float e = ceil(log2(maxVal));
		return vec4(source / pow(2.0, e), (e + 128.0) / 255.0);
	}
}
`,kS=`
	gl_FragColor.rgb = combineColor(litArgs_albedo, litArgs_sheen_specularity, litArgs_clearcoat_specularity);
	gl_FragColor.rgb += litArgs_emission;
	gl_FragColor.rgb = addFog(gl_FragColor.rgb);
	gl_FragColor.rgb = toneMap(gl_FragColor.rgb);
	gl_FragColor.rgb = gammaCorrectOutput(gl_FragColor.rgb);
`,zS=`
#ifndef _ENVATLAS_INCLUDED_
#define _ENVATLAS_INCLUDED_
const float atlasSize = 512.0;
const float seamSize = 1.0 / atlasSize;
vec2 mapUv(vec2 uv, vec4 rect) {
	return vec2(mix(rect.x + seamSize, rect.x + rect.z - seamSize, uv.x),
				mix(rect.y + seamSize, rect.y + rect.w - seamSize, uv.y));
}
vec2 mapRoughnessUv(vec2 uv, float level) {
	float t = 1.0 / exp2(level);
	return mapUv(uv, vec4(0, 1.0 - t, t, t * 0.5));
}
vec2 mapShinyUv(vec2 uv, float level) {
	float t = 1.0 / exp2(level);
	return mapUv(uv, vec4(1.0 - t, 1.0 - t, t, t * 0.5));
}
#endif
`,VS=`
#ifdef LIT_SKYBOX_INTENSITY
	uniform float skyboxIntensity;
#endif
vec3 processEnvironment(vec3 color) {
	#ifdef LIT_SKYBOX_INTENSITY
		return color * skyboxIntensity;
	#else
		return color;
	#endif
}
`,GS=`
float getFalloffWindow(float lightRadius, vec3 lightDir) {
	float sqrDist = dot(lightDir, lightDir);
	float invRadius = 1.0 / lightRadius;
	return square(saturate(1.0 - square(sqrDist * square(invRadius))));
}
float getFalloffInvSquared(float lightRadius, vec3 lightDir) {
	float sqrDist = dot(lightDir, lightDir);
	float falloff = 1.0 / (sqrDist + 1.0);
	float invRadius = 1.0 / lightRadius;
	falloff *= 16.0;
	falloff *= square(saturate(1.0 - square(sqrDist * square(invRadius))));
	return falloff;
}
`,HS=`
float getFalloffLinear(float lightRadius, vec3 lightDir) {
	float d = length(lightDir);
	return max(((lightRadius - d) / lightRadius), 0.0);
}
`,WS=`
#ifndef FLOAT_AS_UINT
#define FLOAT_AS_UINT
vec4 float2uint(float value) {
	uint intBits = floatBitsToUint(value);
	return vec4(
		float((intBits >> 24u) & 0xFFu) / 255.0,
		float((intBits >> 16u) & 0xFFu) / 255.0,
		float((intBits >> 8u) & 0xFFu) / 255.0,
		float(intBits & 0xFFu) / 255.0
	);
}
float uint2float(vec4 value) {
	uint intBits = 
		(uint(value.r * 255.0) << 24u) |
		(uint(value.g * 255.0) << 16u) |
		(uint(value.b * 255.0) << 8u) |
		uint(value.a * 255.0);
	return uintBitsToFloat(intBits);
}
vec4 float2vec4(float value) {
	#if defined(CAPS_TEXTURE_FLOAT_RENDERABLE)
		return vec4(value, 1.0, 1.0, 1.0);
	#else
		return float2uint(value);
	#endif
}
#endif
`,XS=`
float dBlendModeFogFactor = 1.0;
#if (FOG != NONE)
	uniform vec3 fog_color;
	#if (FOG == LINEAR)
		uniform float fog_start;
		uniform float fog_end;
	#else
		uniform float fog_density;
	#endif
#endif
#ifdef VERTEXSHADER
	float getFogFactor(float depth) {
#else
	float getFogFactor() {
		float depth = gl_FragCoord.z / gl_FragCoord.w;
#endif
	float fogFactor = 0.0;
	#if (FOG == LINEAR)
		fogFactor = (fog_end - depth) / (fog_end - fog_start);
	#elif (FOG == EXP)
		fogFactor = exp(-depth * fog_density);
	#elif (FOG == EXP2)
		fogFactor = exp(-depth * depth * fog_density * fog_density);
	#endif
	return clamp(fogFactor, 0.0, 1.0);
}
#ifdef VERTEXSHADER
	vec3 addFog(vec3 color, float depth) {
		#if (FOG != NONE)
			return mix(fog_color * dBlendModeFogFactor, color, getFogFactor(depth));
		#endif
		return color;
	}
#else
	vec3 addFog(vec3 color) {
		#if (FOG != NONE)
			return mix(fog_color * dBlendModeFogFactor, color, getFogFactor());
		#endif
		return color;
	}
#endif
`,YS=`
float pow5(float x) {
	float x2 = x * x;
	return x2 * x2 * x;
}
vec3 getFresnel(
		float cosTheta, 
		float gloss, 
		vec3 specularity
#if defined(LIT_IRIDESCENCE)
		, vec3 iridescenceFresnel, 
		float iridescenceIntensity
#endif
	) {
	float fresnel = pow5(1.0 - saturate(cosTheta));
	float glossSq = gloss * gloss;
	float specIntensity = max(specularity.r, max(specularity.g, specularity.b));
	vec3 ret = specularity + (max(vec3(glossSq * specIntensity), specularity) - specularity) * fresnel;
#if defined(LIT_IRIDESCENCE)
	return mix(ret, iridescenceFresnel, iridescenceIntensity);
#else
	return ret;
#endif	
}
float getFresnelCC(float cosTheta) {
	float fresnel = pow5(1.0 - saturate(cosTheta));
	return 0.04 + (1.0 - 0.04) * fresnel;
}
`,$S=`
attribute vec2 vertex_position;
varying vec2 vUv0;
void main(void)
{
	gl_Position = vec4(vertex_position, 0.5, 1.0);
	vUv0 = vertex_position.xy * 0.5 + 0.5;
}
`,qS=`
#include "decodePS"
#if (GAMMA == SRGB)
	float gammaCorrectInput(float color) {
		return decodeGamma(color);
	}
	vec3 gammaCorrectInput(vec3 color) {
		return decodeGamma(color);
	}
	vec4 gammaCorrectInput(vec4 color) {
		return vec4(decodeGamma(color.xyz), color.w);
	}
	vec3 gammaCorrectOutput(vec3 color) {
		return pow(color + 0.0000001, vec3(1.0 / 2.2));
	}
#else
	float gammaCorrectInput(float color) {
		return color;
	}
	vec3 gammaCorrectInput(vec3 color) {
		return color;
	}
	vec4 gammaCorrectInput(vec4 color) {
		return color;
	}
	vec3 gammaCorrectOutput(vec3 color) {
		return color;
	}
#endif
`,jS=`
#ifdef STD_GLOSS_CONSTANT
uniform float material_gloss;
#endif
void getGlossiness() {
	dGlossiness = 1.0;
	#ifdef STD_GLOSS_CONSTANT
	dGlossiness *= material_gloss;
	#endif
	#ifdef STD_GLOSS_TEXTURE
	dGlossiness *= texture2DBias({STD_GLOSS_TEXTURE_NAME}, {STD_GLOSS_TEXTURE_UV}, textureBias).{STD_GLOSS_TEXTURE_CHANNEL};
	#endif
	#ifdef STD_GLOSS_VERTEX
	dGlossiness *= saturate(vVertexColor.{STD_GLOSS_VERTEX_CHANNEL});
	#endif
	#ifdef STD_GLOSS_INVERT
	dGlossiness = 1.0 - dGlossiness;
	#endif
	dGlossiness += 0.0000001;
}
`,KS=`
	attribute vec2 aPosition;
	varying vec2 uv0;
	void main(void)
	{
		gl_Position = vec4(aPosition, 0.0, 1.0);
		uv0 = getImageEffectUV((aPosition.xy + 1.0) * 0.5);
	}
`,ZS=`
		#include "gammaPS"
		varying vec4 color;
		void main(void) {
			gl_FragColor = vec4(gammaCorrectOutput(decodeGamma(color.rgb)), color.a);
		}
`,JS=`
	attribute vec4 vertex_position;
	attribute vec4 vertex_color;
	uniform mat4 matrix_model;
	uniform mat4 matrix_viewProjection;
	varying vec4 color;
	void main(void) {
		color = vertex_color;
		gl_Position = matrix_viewProjection * matrix_model * vertex_position;
	}
`,QS=`
uniform float material_iridescenceRefractionIndex;
float iridescence_iorToFresnel(float transmittedIor, float incidentIor) {
	return pow((transmittedIor - incidentIor) / (transmittedIor + incidentIor), 2.0);
}
vec3 iridescence_iorToFresnel(vec3 transmittedIor, float incidentIor) {
	return pow((transmittedIor - vec3(incidentIor)) / (transmittedIor + vec3(incidentIor)), vec3(2.0));
}
vec3 iridescence_fresnelToIor(vec3 f0) {
	vec3 sqrtF0 = sqrt(f0);
	return (vec3(1.0) + sqrtF0) / (vec3(1.0) - sqrtF0);
}
vec3 iridescence_sensitivity(float opd, vec3 shift) {
	float PI = 3.141592653589793;
	float phase = 2.0 * PI * opd * 1.0e-9;
	const vec3 val = vec3(5.4856e-13, 4.4201e-13, 5.2481e-13);
	const vec3 pos = vec3(1.6810e+06, 1.7953e+06, 2.2084e+06);
	const vec3 var = vec3(4.3278e+09, 9.3046e+09, 6.6121e+09);
	vec3 xyz = val * sqrt(2.0 * PI * var) * cos(pos * phase + shift) * exp(-pow(phase, 2.0) * var);
	xyz.x += 9.7470e-14 * sqrt(2.0 * PI * 4.5282e+09) * cos(2.2399e+06 * phase + shift[0]) * exp(-4.5282e+09 * pow(phase, 2.0));
	xyz /= vec3(1.0685e-07);
	const mat3 XYZ_TO_REC709 = mat3(
		3.2404542, -0.9692660,  0.0556434,
	   -1.5371385,  1.8760108, -0.2040259,
	   -0.4985314,  0.0415560,  1.0572252
	);
	return XYZ_TO_REC709 * xyz;
}
float iridescence_fresnel(float cosTheta, float f0) {
	float x = clamp(1.0 - cosTheta, 0.0, 1.0);
	float x2 = x * x;
	float x5 = x * x2 * x2;
	return f0 + (1.0 - f0) * x5;
} 
vec3 iridescence_fresnel(float cosTheta, vec3 f0) {
	float x = clamp(1.0 - cosTheta, 0.0, 1.0);
	float x2 = x * x;
	float x5 = x * x2 * x2; 
	return f0 + (vec3(1.0) - f0) * x5;
}
vec3 calcIridescence(float outsideIor, float cosTheta, vec3 base_f0, float iridescenceThickness) {
	float PI = 3.141592653589793;
	float iridescenceIor = mix(outsideIor, material_iridescenceRefractionIndex, smoothstep(0.0, 0.03, iridescenceThickness));
	float sinTheta2Sq = pow(outsideIor / iridescenceIor, 2.0) * (1.0 - pow(cosTheta, 2.0));
	float cosTheta2Sq = 1.0 - sinTheta2Sq;
	if (cosTheta2Sq < 0.0) {
		return vec3(1.0);
	}
	float cosTheta2 = sqrt(cosTheta2Sq);
	float r0 = iridescence_iorToFresnel(iridescenceIor, outsideIor);
	float r12 = iridescence_fresnel(cosTheta, r0);
	float r21 = r12;
	float t121 = 1.0 - r12;
	float phi12 = iridescenceIor < outsideIor ? PI : 0.0;
	float phi21 = PI - phi12;
	vec3 baseIor = iridescence_fresnelToIor(base_f0 + vec3(0.0001));
	vec3 r1 = iridescence_iorToFresnel(baseIor, iridescenceIor);
	vec3 r23 = iridescence_fresnel(cosTheta2, r1);
	vec3 phi23 = vec3(0.0);
	if (baseIor[0] < iridescenceIor) phi23[0] = PI;
	if (baseIor[1] < iridescenceIor) phi23[1] = PI;
	if (baseIor[2] < iridescenceIor) phi23[2] = PI;
	float opd = 2.0 * iridescenceIor * iridescenceThickness * cosTheta2;
	vec3 phi = vec3(phi21) + phi23; 
	vec3 r123Sq = clamp(r12 * r23, 1e-5, 0.9999);
	vec3 r123 = sqrt(r123Sq);
	vec3 rs = pow(t121, 2.0) * r23 / (1.0 - r123Sq);
	vec3 c0 = r12 + rs;
	vec3 i = c0;
	vec3 cm = rs - t121;
	for (int m = 1; m <= 2; m++) {
		cm *= r123;
		vec3 sm = 2.0 * iridescence_sensitivity(float(m) * opd, float(m) * phi);
		i += cm * sm;
	}
	return max(i, vec3(0.0));
}
vec3 getIridescence(float cosTheta, vec3 specularity, float iridescenceThickness) {
	return calcIridescence(1.0, cosTheta, specularity, iridescenceThickness);
}
`,e0=`
#ifdef STD_IRIDESCENCE_CONSTANT
uniform float material_iridescence;
#endif
void getIridescence() {
	float iridescence = 1.0;
	#ifdef STD_IRIDESCENCE_CONSTANT
	iridescence *= material_iridescence;
	#endif
	#ifdef STD_IRIDESCENCE_TEXTURE
	iridescence *= texture2DBias({STD_IRIDESCENCE_TEXTURE_NAME}, {STD_IRIDESCENCE_TEXTURE_UV}, textureBias).{STD_IRIDESCENCE_TEXTURE_CHANNEL};
	#endif
	dIridescence = iridescence; 
}
`,t0=`
uniform float material_iridescenceThicknessMax;
#ifdef STD_IRIDESCENCETHICKNESS_TEXTURE
uniform float material_iridescenceThicknessMin;
#endif
void getIridescenceThickness() {
	#ifdef STD_IRIDESCENCETHICKNESS_TEXTURE
		float blend = texture2DBias({STD_IRIDESCENCETHICKNESS_TEXTURE_NAME}, {STD_IRIDESCENCETHICKNESS_TEXTURE_UV}, textureBias).{STD_IRIDESCENCETHICKNESS_TEXTURE_CHANNEL};
		float iridescenceThickness = mix(material_iridescenceThicknessMin, material_iridescenceThicknessMax, blend);
	#else
		float iridescenceThickness = material_iridescenceThicknessMax;
	#endif
	dIridescenceThickness = iridescenceThickness; 
}
`,i0=`
#ifdef STD_IOR_CONSTANT
uniform float material_refractionIndex;
#endif
void getIor() {
#ifdef STD_IOR_CONSTANT
	dIor = material_refractionIndex;
#else
	dIor = 1.0 / 1.5;
#endif
}
`,s0=`
#if defined(LIGHT{i})
	uniform vec3 light{i}_color;
	#if LIGHT{i}TYPE == DIRECTIONAL
		uniform vec3 light{i}_direction;
	#else
		#define LIT_CODE_LIGHTS_POINT
		uniform vec3 light{i}_position;
		uniform float light{i}_radius;
		#if LIGHT{i}TYPE == SPOT
			#define LIT_CODE_LIGHTS_SPOT
			uniform vec3 light{i}_direction;
			uniform float light{i}_innerConeAngle;
			uniform float light{i}_outerConeAngle;
		#endif
	#endif
	#if LIGHT{i}SHAPE != PUNCTUAL
		#define LIT_CODE_FALLOFF_SQUARED
		#if LIGHT{i}TYPE == DIRECTIONAL
			uniform vec3 light{i}_position;
		#endif
		uniform vec3 light{i}_halfWidth;
		uniform vec3 light{i}_halfHeight;
	#else
		#if LIGHT{i}FALLOFF == LINEAR
			#define LIT_CODE_FALLOFF_LINEAR
		#endif
		#if LIGHT{i}FALLOFF == INVERSESQUARED
			#define LIT_CODE_FALLOFF_SQUARED
		#endif
	#endif
	#if defined(LIGHT{i}CASTSHADOW)
		#if LIGHT{i}TYPE != OMNI
			uniform mat4 light{i}_shadowMatrix;
		#endif
		uniform float light{i}_shadowIntensity;
		uniform vec4 light{i}_shadowParams;
		#if LIGHT{i}SHADOWTYPE == PCSS_32F
			uniform float light{i}_shadowSearchArea;
			uniform vec4 light{i}_cameraParams;
			#if LIGHT{i}TYPE == DIRECTIONAL
				uniform vec4 light{i}_softShadowParams;
				uniform vec4 light{i}_shadowCascadeRadii;
			#endif
		#endif
		#if LIGHT{i}TYPE == DIRECTIONAL
			uniform mat4 light{i}_shadowMatrixPalette[4];
			uniform vec4 light{i}_shadowCascadeDistances;
			uniform int light{i}_shadowCascadeCount;
			uniform float light{i}_shadowCascadeBlend;
		#endif
		#if LIGHT{i}TYPE == OMNI
			#if defined(LIGHT{i}SHADOW_PCF)
				uniform samplerCubeShadow light{i}_shadowMap;
			#else
				uniform samplerCube light{i}_shadowMap;
			#endif
		#else
			#if defined(LIGHT{i}SHADOW_PCF)
				uniform sampler2DShadow light{i}_shadowMap;
			#else
				uniform sampler2D light{i}_shadowMap;
			#endif
		#endif
	#endif
	#if defined(LIGHT{i}COOKIE)
		#define LIT_CODE_COOKIE
		#if LIGHT{i}TYPE == OMNI
			uniform samplerCube light{i}_cookie;
			uniform float light{i}_cookieIntensity;
			uniform mat4 light{i}_shadowMatrix;
		#endif
		#if LIGHT{i}TYPE == SPOT
			uniform sampler2D light{i}_cookie;
			uniform float light{i}_cookieIntensity;
			#if !defined(LIGHT{i}CASTSHADOW)
				uniform mat4 light{i}_shadowMatrix;
			#endif
			#if defined(LIGHT{i}COOKIE_TRANSFORM)
				uniform vec4 light{i}_cookieMatrix;
				uniform vec2 light{i}_cookieOffset;
			#endif
		#endif
	#endif
#endif
`,a0=`
float getLightDiffuse(vec3 worldNormal, vec3 viewDir, vec3 lightDirNorm) {
	return max(dot(worldNormal, -lightDirNorm), 0.0);
}
`,r0=`
vec3 evalOmniLight(vec3 lightPosW) {
	return vPositionW - lightPosW;
}
`,n0=`
#if defined(LIGHT{i})
	evaluateLight{i}(
		#if defined(LIT_IRIDESCENCE)
			iridescenceFresnel
		#endif
	);
#endif
`,o0=`
#if defined(LIGHT{i})
void evaluateLight{i}(
	#if defined(LIT_IRIDESCENCE)
		vec3 iridescenceFresnel
	#endif
) {
	vec3 lightColor = light{i}_color;
	#if LIGHT{i}TYPE == DIRECTIONAL && !defined(LIT_SHADOW_CATCHER)
		if (all(equal(lightColor, vec3(0.0)))) {
			return;
		}
	#endif
	#if LIGHT{i}TYPE == DIRECTIONAL
		dLightDirNormW = light{i}_direction;
		dAtten = 1.0;
	#else
		
		vec3 lightDirW = evalOmniLight(light{i}_position);
		dLightDirNormW = normalize(lightDirW);
		#if defined(LIGHT{i}COOKIE)
			#if LIGHT{i}TYPE == SPOT
				#ifdef LIGHT{i}COOKIE_FALLOFF
					#ifdef LIGHT{i}COOKIE_TRANSFORM
						vec3 cookieAttenuation = getCookie2DXform(light{i}_cookie, light{i}_shadowMatrix, light{i}_cookieIntensity, light{i}_cookieMatrix, light{i}_cookieOffset).{LIGHT{i}COOKIE_CHANNEL};
					#else
						vec3 cookieAttenuation = getCookie2D(light{i}_cookie, light{i}_shadowMatrix, light{i}_cookieIntensity).{LIGHT{i}COOKIE_CHANNEL};
					#endif
				#else
					#ifdef LIGHT{i}COOKIE_TRANSFORM
						vec3 cookieAttenuation = getCookie2DClipXform(light{i}_cookie, light{i}_shadowMatrix, light{i}_cookieIntensity, light{i}_cookieMatrix, light{i}_cookieOffset).{LIGHT{i}COOKIE_CHANNEL};
					#else
						vec3 cookieAttenuation = getCookie2DClip(light{i}_cookie, light{i}_shadowMatrix, light{i}_cookieIntensity).{LIGHT{i}COOKIE_CHANNEL};
					#endif
				#endif
			#endif
			#if LIGHT{i}TYPE == OMNI
				vec3 cookieAttenuation = getCookieCube(light{i}_cookie, light{i}_shadowMatrix, light{i}_cookieIntensity).{LIGHT{i}COOKIE_CHANNEL};
			#endif
			lightColor *= cookieAttenuation;
		#endif
		#if LIGHT{i}SHAPE == PUNCTUAL
			#if LIGHT{i}FALLOFF == LINEAR
				dAtten = getFalloffLinear(light{i}_radius, lightDirW);
			#else
				dAtten = getFalloffInvSquared(light{i}_radius, lightDirW);
			#endif
		#else
			dAtten = getFalloffWindow(light{i}_radius, lightDirW);
		#endif
		#if LIGHT{i}TYPE == SPOT
			#if !defined(LIGHT{i}COOKIE) || defined(LIGHT{i}COOKIE_FALLOFF)
				dAtten *= getSpotEffect(light{i}_direction, light{i}_innerConeAngle, light{i}_outerConeAngle, dLightDirNormW);
			#endif
		#endif
	#endif
	if (dAtten < 0.00001) {
		return;
	}
	#if LIGHT{i}SHAPE != PUNCTUAL
		#if LIGHT{i}SHAPE == RECT
			calcRectLightValues(light{i}_position, light{i}_halfWidth, light{i}_halfHeight);
		#elif LIGHT{i}SHAPE == DISK
			calcDiskLightValues(light{i}_position, light{i}_halfWidth, light{i}_halfHeight);
		#elif LIGHT{i}SHAPE == SPHERE
			calcSphereLightValues(light{i}_position, light{i}_halfWidth, light{i}_halfHeight);
		#endif
	#endif
	#if LIGHT{i}SHAPE != PUNCTUAL
		#if LIGHT{i}TYPE == DIRECTIONAL
			float attenDiffuse = getLightDiffuse(litArgs_worldNormal, dViewDirW, dLightDirNormW);
		#else
			#if LIGHT{i}SHAPE == RECT
				float attenDiffuse = getRectLightDiffuse(litArgs_worldNormal, dViewDirW, lightDirW, dLightDirNormW) * 16.0;
			#elif LIGHT{i}SHAPE == DISK
				float attenDiffuse = getDiskLightDiffuse(litArgs_worldNormal, dViewDirW, lightDirW, dLightDirNormW) * 16.0;
			#elif LIGHT{i}SHAPE == SPHERE
				float attenDiffuse = getSphereLightDiffuse(litArgs_worldNormal, dViewDirW, lightDirW, dLightDirNormW) * 16.0;
			#endif
		#endif
	#else
		dAtten *= getLightDiffuse(litArgs_worldNormal, vec3(0.0), dLightDirNormW);
	#endif
	#ifdef LIGHT{i}CASTSHADOW
		#if LIGHT{i}TYPE == DIRECTIONAL
			float shadow = getShadow{i}(vec3(0.0));
		#else
			float shadow = getShadow{i}(lightDirW);
		#endif
		shadow = mix(1.0, shadow, light{i}_shadowIntensity);
		dAtten *= shadow;
		#if defined(LIT_SHADOW_CATCHER) && LIGHT{i}TYPE == DIRECTIONAL
			dShadowCatcher *= shadow;
		#endif			
	#endif
	#if LIGHT{i}SHAPE != PUNCTUAL
		#ifdef LIT_SPECULAR
			dDiffuseLight += ((attenDiffuse * dAtten) * lightColor) * (1.0 - dLTCSpecFres);
		#else
			dDiffuseLight += (attenDiffuse * dAtten) * lightColor;
		#endif						
	#else
		#if defined(AREA_LIGHTS) && defined(LIT_SPECULAR)
			dDiffuseLight += (dAtten * lightColor) * (1.0 - litArgs_specularity);
		#else
			dDiffuseLight += dAtten * lightColor;
		#endif
	#endif
	#ifdef LIGHT{i}AFFECT_SPECULARITY
		#if LIGHT{i}SHAPE != PUNCTUAL
			#ifdef LIT_CLEARCOAT
				#if LIGHT{i}SHAPE == RECT
					ccSpecularLight += ccLTCSpecFres * getRectLightSpecular(litArgs_clearcoat_worldNormal, dViewDirW) * dAtten * lightColor;
				#elif LIGHT{i}SHAPE == DISK
					ccSpecularLight += ccLTCSpecFres * getDiskLightSpecular(litArgs_clearcoat_worldNormal, dViewDirW) * dAtten * lightColor;
				#elif LIGHT{i}SHAPE == SPHERE
					ccSpecularLight += ccLTCSpecFres * getSphereLightSpecular(litArgs_clearcoat_worldNormal, dViewDirW) * dAtten * lightColor;
				#endif
			#endif
			#ifdef LIT_SPECULAR
				#if LIGHT{i}SHAPE == RECT
					dSpecularLight += dLTCSpecFres * getRectLightSpecular(litArgs_worldNormal, dViewDirW) * dAtten * lightColor;
				#elif LIGHT{i}SHAPE == DISK
					dSpecularLight += dLTCSpecFres * getDiskLightSpecular(litArgs_worldNormal, dViewDirW) * dAtten * lightColor;
				#elif LIGHT{i}SHAPE == SPHERE
					dSpecularLight += dLTCSpecFres * getSphereLightSpecular(litArgs_worldNormal, dViewDirW) * dAtten * lightColor;
				#endif
			#endif
		#else
			#if LIGHT{i}TYPE == DIRECTIONAL && LIT_FRESNEL_MODEL != NONE
				#define LIGHT{i}FRESNEL
			#endif
			#ifdef LIT_SPECULAR
				vec3 halfDirW = normalize(-dLightDirNormW + dViewDirW);
			#endif
			#ifdef LIT_CLEARCOAT
				vec3 lightspecularCC = getLightSpecular(halfDirW, ccReflDirW, litArgs_clearcoat_worldNormal, dViewDirW, dLightDirNormW, litArgs_clearcoat_gloss, dTBN) * dAtten * lightColor;
				#ifdef LIGHT{i}FRESNEL
					lightspecularCC *= getFresnelCC(dot(dViewDirW, halfDirW));
				#endif
				ccSpecularLight += lightspecularCC;
			#endif
			#ifdef LIT_SHEEN
				sSpecularLight += getLightSpecularSheen(halfDirW, litArgs_worldNormal, dViewDirW, dLightDirNormW, litArgs_sheen_gloss) * dAtten * lightColor;
			#endif
			#ifdef LIT_SPECULAR
				vec3 lightSpecular = getLightSpecular(halfDirW, dReflDirW, litArgs_worldNormal, dViewDirW, dLightDirNormW, litArgs_gloss, dTBN) * dAtten * lightColor;
				#ifdef LIGHT{i}FRESNEL
					#if defined(LIT_IRIDESCENCE)
						lightSpecular *= getFresnel(dot(dViewDirW, halfDirW), litArgs_gloss, litArgs_specularity, iridescenceFresnel, litArgs_iridescence_intensity);
					#else
						lightSpecular *= getFresnel(dot(dViewDirW, halfDirW), litArgs_gloss, litArgs_specularity);
					#endif
				#else
					lightSpecular *= litArgs_specularity;
				#endif
				
				dSpecularLight += lightSpecular;
			#endif
		#endif
	#endif
}
#endif
`,l0=`
#ifdef LIGHT{i}CASTSHADOW
	#ifdef LIGHT{i}_SHADOW_SAMPLE_POINT
		vec3 getShadowSampleCoordOmni{i}(vec4 shadowParams, vec3 worldPosition, vec3 lightPos, inout vec3 lightDir, vec3 lightDirNorm, vec3 normal) {
			#ifdef LIGHT{i}_SHADOW_SAMPLE_NORMAL_OFFSET
				float distScale = length(lightDir);
				vec3 surfacePosition = worldPosition + normal * shadowParams.y * clamp(1.0 - dot(normal, -lightDirNorm), 0.0, 1.0) * distScale;
				lightDir = surfacePosition - lightPos;
			#endif
			return lightDir;
		}
	#endif
	#ifndef LIGHT{i}_SHADOW_SAMPLE_POINT
		vec3 getShadowSampleCoord{i}(mat4 shadowTransform, vec4 shadowParams, vec3 worldPosition, vec3 lightPos, inout vec3 lightDir, vec3 lightDirNorm, vec3 normal) {
			vec3 surfacePosition = worldPosition;
			#ifdef LIGHT{i}_SHADOW_SAMPLE_SOURCE_ZBUFFER
				#ifdef LIGHT{i}_SHADOW_SAMPLE_NORMAL_OFFSET
					surfacePosition = surfacePosition + normal * shadowParams.y;
				#endif
			#else
				#ifdef LIGHT{i}_SHADOW_SAMPLE_NORMAL_OFFSET
					#ifdef LIGHT{i}_SHADOW_SAMPLE_ORTHO
						float distScale = 1.0;
					#else
						float distScale = abs(dot(vPositionW - lightPos, lightDirNorm));
					#endif
					surfacePosition = surfacePosition + normal * shadowParams.y * clamp(1.0 - dot(normal, -lightDirNorm), 0.0, 1.0) * distScale;
				#endif
			#endif
			vec4 positionInShadowSpace = shadowTransform * vec4(surfacePosition, 1.0);
			#ifdef LIGHT{i}_SHADOW_SAMPLE_ORTHO
				positionInShadowSpace.z = saturate(positionInShadowSpace.z) - 0.0001;
			#else
				#ifdef LIGHT{i}_SHADOW_SAMPLE_SOURCE_ZBUFFER
					positionInShadowSpace.xyz /= positionInShadowSpace.w;
				#else
					positionInShadowSpace.xy /= positionInShadowSpace.w;
					positionInShadowSpace.z = length(lightDir) * shadowParams.w;
				#endif
			#endif
			return positionInShadowSpace.xyz;
		}
	#endif
	float getShadow{i}(vec3 lightDirW) {
		#if LIGHT{i}TYPE == OMNI
			vec3 shadowCoord = getShadowSampleCoordOmni{i}(light{i}_shadowParams, vPositionW, light{i}_position, lightDirW, dLightDirNormW, dVertexNormalW);
		#else
			#ifdef LIGHT{i}_SHADOW_CASCADES
				int cascadeIndex = getShadowCascadeIndex(light{i}_shadowCascadeDistances, light{i}_shadowCascadeCount);
				#ifdef LIGHT{i}_SHADOW_CASCADE_BLEND
					cascadeIndex = ditherShadowCascadeIndex(cascadeIndex, light{i}_shadowCascadeDistances, light{i}_shadowCascadeCount, light{i}_shadowCascadeBlend);
				#endif
				mat4 shadowMatrix = light{i}_shadowMatrixPalette[cascadeIndex];
			#else
				mat4 shadowMatrix = light{i}_shadowMatrix;
			#endif
			#if LIGHT{i}TYPE == DIRECTIONAL
				vec3 shadowCoord = getShadowSampleCoord{i}(shadowMatrix, light{i}_shadowParams, vPositionW, vec3(0.0), lightDirW, dLightDirNormW, dVertexNormalW);
			#else
				vec3 shadowCoord = getShadowSampleCoord{i}(shadowMatrix, light{i}_shadowParams, vPositionW, light{i}_position, lightDirW, dLightDirNormW, dVertexNormalW);
			#endif
		#endif
		#if LIGHT{i}TYPE == DIRECTIONAL
			shadowCoord = fadeShadow(shadowCoord, light{i}_shadowCascadeDistances);
		#endif
		#if LIGHT{i}TYPE == DIRECTIONAL
			#if LIGHT{i}SHADOWTYPE == VSM_16F
				return getShadowVSM16(SHADOWMAP_PASS(light{i}_shadowMap), shadowCoord, light{i}_shadowParams, 5.54);
			#endif
			#if LIGHT{i}SHADOWTYPE == VSM_32F
				return getShadowVSM32(SHADOWMAP_PASS(light{i}_shadowMap), shadowCoord, light{i}_shadowParams, 15.0);
			#endif
			#if LIGHT{i}SHADOWTYPE == PCSS_32F
				#if LIGHT{i}SHAPE != PUNCTUAL
					vec2 shadowSearchArea = vec2(length(light{i}_halfWidth), length(light{i}_halfHeight)) * light{i}_shadowSearchArea;
					return getShadowPCSS(SHADOWMAP_PASS(light{i}_shadowMap), shadowCoord, light{i}_shadowParams, light{i}_cameraParams, shadowSearchArea, lightDirW);
				#else
					vec4 pcssCameraParams = light{i}_cameraParams;
					#ifdef LIGHT{i}_SHADOW_CASCADES
						pcssCameraParams.x = light{i}_shadowCascadeRadii[cascadeIndex];
					#endif
					return getShadowPCSS(SHADOWMAP_PASS(light{i}_shadowMap), shadowCoord, light{i}_shadowParams, pcssCameraParams, light{i}_softShadowParams, lightDirW);
				#endif
			#endif
			#if LIGHT{i}SHADOWTYPE == PCF1_16F || LIGHT{i}SHADOWTYPE == PCF1_32F
				return getShadowPCF1x1(SHADOWMAP_PASS(light{i}_shadowMap), shadowCoord, light{i}_shadowParams);
			#endif
			#if LIGHT{i}SHADOWTYPE == PCF3_16F || LIGHT{i}SHADOWTYPE == PCF3_32F
				return getShadowPCF3x3(SHADOWMAP_PASS(light{i}_shadowMap), shadowCoord, light{i}_shadowParams);
			#endif
			#if LIGHT{i}SHADOWTYPE == PCF5_16F || LIGHT{i}SHADOWTYPE == PCF5_32F
				return getShadowPCF5x5(SHADOWMAP_PASS(light{i}_shadowMap), shadowCoord, light{i}_shadowParams);
			#endif
		#endif
		#if LIGHT{i}TYPE == SPOT
			#if LIGHT{i}SHADOWTYPE == VSM_16F
				return getShadowSpotVSM16(SHADOWMAP_PASS(light{i}_shadowMap), shadowCoord, light{i}_shadowParams, 5.54, lightDirW);
			#endif
			#if LIGHT{i}SHADOWTYPE == VSM_32F
				return getShadowSpotVSM32(SHADOWMAP_PASS(light{i}_shadowMap), shadowCoord, light{i}_shadowParams, 15.0, lightDirW);
			#endif
			#if LIGHT{i}SHADOWTYPE == PCSS_32F
				#if LIGHT{i}SHAPE != PUNCTUAL
					vec2 shadowSearchArea = vec2(length(light{i}_halfWidth), length(light{i}_halfHeight)) * light{i}_shadowSearchArea;
				#else
					vec2 shadowSearchArea = vec2(light{i}_shadowSearchArea);
				#endif
				return getShadowSpotPCSS(SHADOWMAP_PASS(light{i}_shadowMap), shadowCoord, light{i}_shadowParams, light{i}_cameraParams, shadowSearchArea, lightDirW);
			#endif
			#if LIGHT{i}SHADOWTYPE == PCF1_16F || LIGHT{i}SHADOWTYPE == PCF1_32F
				return getShadowSpotPCF1x1(SHADOWMAP_PASS(light{i}_shadowMap), shadowCoord, light{i}_shadowParams);
			#endif
			#if LIGHT{i}SHADOWTYPE == PCF3_16F || LIGHT{i}SHADOWTYPE == PCF3_32F
				return getShadowSpotPCF3x3(SHADOWMAP_PASS(light{i}_shadowMap), shadowCoord, light{i}_shadowParams);
			#endif
			#if LIGHT{i}SHADOWTYPE == PCF5_16F || LIGHT{i}SHADOWTYPE == PCF5_32F
				return getShadowSpotPCF5x5(SHADOWMAP_PASS(light{i}_shadowMap), shadowCoord, light{i}_shadowParams);
			#endif
		#endif
		#if LIGHT{i}TYPE == OMNI
			#if LIGHT{i}SHADOWTYPE == PCSS_32F
				#if LIGHT{i}SHAPE != PUNCTUAL
					vec2 shadowSearchArea = vec2(length(light{i}_halfWidth), length(light{i}_halfHeight)) * light{i}_shadowSearchArea;
				#else
					vec2 shadowSearchArea = vec2(light{i}_shadowSearchArea);
				#endif
				return getShadowOmniPCSS(SHADOWMAP_PASS(light{i}_shadowMap), shadowCoord, light{i}_shadowParams, light{i}_cameraParams, shadowSearchArea, lightDirW);
			#endif
			#if LIGHT{i}SHADOWTYPE == PCF1_16F || LIGHT{i}SHADOWTYPE == PCF1_32F
				return getShadowOmniPCF1x1(SHADOWMAP_PASS(light{i}_shadowMap), shadowCoord, light{i}_shadowParams, lightDirW);
			#endif
			#if LIGHT{i}SHADOWTYPE == PCF3_16F || LIGHT{i}SHADOWTYPE == PCF3_32F
				return getShadowOmniPCF3x3(SHADOWMAP_PASS(light{i}_shadowMap), shadowCoord, light{i}_shadowParams, lightDirW);
			#endif
		#endif
	}
#endif
`,c0=`
#ifdef LIT_CLUSTERED_LIGHTS
	#define LIT_CODE_FALLOFF_LINEAR
	#define LIT_CODE_FALLOFF_SQUARED
	#define LIT_CODE_LIGHTS_POINT
	#define LIT_CODE_LIGHTS_SPOT
#endif
#ifdef AREA_LIGHTS
	uniform highp sampler2D areaLightsLutTex1;
	uniform highp sampler2D areaLightsLutTex2;
#endif
#ifdef LIT_LIGHTING
	#include "lightDiffuseLambertPS"
	#if defined(AREA_LIGHTS) || defined(LIT_CLUSTERED_AREA_LIGHTS)
		#include "ltcPS"
	#endif
#endif
#ifdef SHADOW_DIRECTIONAL
	#include "shadowCascadesPS"
#endif
#if defined(SHADOW_KIND_PCF1)
	#include "shadowPCF1PS"
#endif
#if defined(SHADOW_KIND_PCF3)
	#include "shadowPCF3PS"
#endif
#if defined(SHADOW_KIND_PCF5)
	#include "shadowPCF5PS"
#endif
#if defined(SHADOW_KIND_PCSS)
	#include "linearizeDepthPS"
	#include "shadowPCSSPS"
	#include "shadowSoftPS"
#endif
#if defined(SHADOW_KIND_VSM)
	#include "shadowEVSMPS"
#endif
#ifdef LIT_CODE_FALLOFF_LINEAR
	#include "falloffLinearPS"
#endif
#ifdef LIT_CODE_FALLOFF_SQUARED
	#include "falloffInvSquaredPS"
#endif
#ifdef LIT_CODE_LIGHTS_POINT
	#include "lightDirPointPS"
#endif
#ifdef LIT_CODE_LIGHTS_SPOT
	#include "spotPS"
#endif
#ifdef LIT_CODE_COOKIE
	#include "cookiePS"
#endif
#ifdef LIT_CLUSTERED_LIGHTS
	#include "clusteredLightPS"
#endif
#ifdef LIGHT_COUNT > 0
	#include "lightFunctionShadowPS, LIGHT_COUNT"
	#include "lightFunctionLightPS, LIGHT_COUNT"
#endif
`,d0=`
void addLightMap(
	vec3 lightmap, 
	vec3 dir, 
	vec3 worldNormal, 
	vec3 viewDir, 
	vec3 reflectionDir, 
	float gloss, 
	vec3 specularity, 
	vec3 vertexNormal, 
	mat3 tbn
#if defined(LIT_IRIDESCENCE)
	vec3 iridescenceFresnel, 
	float iridescenceIntensity
#endif
) {
	#if defined(LIT_SPECULAR) && defined(LIT_DIR_LIGHTMAP)
		if (dot(dir, dir) < 0.0001) {
				dDiffuseLight += lightmap;
		} else {
			float vlight = saturate(dot(dir, -vertexNormal));
			float flight = saturate(dot(dir, -worldNormal));
			float nlight = (flight / max(vlight, 0.01)) * 0.5;
			dDiffuseLight += lightmap * nlight * 2.0;
			vec3 halfDir = normalize(-dir + viewDir);
			vec3 specularLight = lightmap * getLightSpecular(halfDir, reflectionDir, worldNormal, viewDir, dir, gloss, tbn);
			#ifdef LIT_SPECULAR_FRESNEL
				specularLight *= 
					getFresnel(dot(viewDir, halfDir), 
					gloss, 
					specularity
				#if defined(LIT_IRIDESCENCE)
					, iridescenceFresnel,
					iridescenceIntensity
				#endif
					);
			#endif
			dSpecularLight += specularLight;
		}
	#else
		dDiffuseLight += lightmap;
	#endif
}
`,h0=`
#ifdef STD_LIGHTMAP_DIR
	vec3 dLightmapDir;
	uniform sampler2D texture_dirLightMap;
#endif
void getLightMap() {
	dLightmap = vec3(1.0);
	#ifdef STD_LIGHT_TEXTURE
		dLightmap *= {STD_LIGHT_TEXTURE_DECODE}(texture2DBias({STD_LIGHT_TEXTURE_NAME}, {STD_LIGHT_TEXTURE_UV}, textureBias)).{STD_LIGHT_TEXTURE_CHANNEL};
		#ifdef STD_LIGHTMAP_DIR
			vec3 dir = texture2DBias(texture_dirLightMap, {STD_LIGHT_TEXTURE_UV}, textureBias).xyz * 2.0 - 1.0;
			float dirDot = dot(dir, dir);
			dLightmapDir = (dirDot > 0.001) ? dir / sqrt(dirDot) : vec3(0.0);
		#endif
	#endif
	#ifdef STD_LIGHT_VERTEX
		dLightmap *= saturate(vVertexColor.{STD_LIGHT_VERTEX_CHANNEL});
	#endif
}
`,f0=`
float calcLightSpecular(float gloss, vec3 worldNormal, vec3 viewDir, vec3 h, vec3 lightDirNorm, mat3 tbn) {
	float PI = 3.141592653589793;
	float roughness = max((1.0 - gloss) * (1.0 - gloss), 0.001);
	float alphaRoughness = roughness * roughness;
	float anisotropy = dAnisotropy;
	vec2 direction = dAnisotropyRotation;
	float at = mix(alphaRoughness, 1.0, anisotropy * anisotropy);
	float ab = clamp(alphaRoughness, 0.001, 1.0);
	vec3 anisotropicT = normalize(tbn * vec3(direction, 0.0));
	vec3 anisotropicB = normalize(cross(tbn[2], anisotropicT));
	float NoH = dot(worldNormal, h);
	float ToH = dot(anisotropicT, h);
	float BoH = dot(anisotropicB, h);
	float a2 = at * ab;
	vec3 v = vec3(ab * ToH, at * BoH, a2 * NoH);
	float v2 = dot(v, v);
	float w2 = a2 / v2;
	float D = a2 * w2 * w2 * (1.0 / PI);
	float ToV = dot(anisotropicT, viewDir);
	float BoV = dot(anisotropicB, viewDir);
	float ToL = dot(anisotropicT, -lightDirNorm);
	float BoL = dot(anisotropicB, -lightDirNorm);
	float NoV = dot(worldNormal, viewDir);
	float NoL = dot(worldNormal, -lightDirNorm);
	float lambdaV = NoL * length(vec3(at * ToV, ab * BoV, NoV));
	float lambdaL = NoV * length(vec3(at * ToL, ab * BoL, NoL));
	float G = 0.5 / (lambdaV + lambdaL);
	return D * G;
}
float getLightSpecular(vec3 h, vec3 reflDir, vec3 worldNormal, vec3 viewDir, vec3 lightDirNorm, float gloss, mat3 tbn) {
	return calcLightSpecular(gloss, worldNormal, viewDir, h, lightDirNorm, tbn);
}
`,u0=`
float calcLightSpecular(float gloss, vec3 worldNormal, vec3 viewDir, vec3 h, vec3 lightDirNorm) {
	const float PI = 3.141592653589793;
	float roughness = max((1.0 - gloss) * (1.0 - gloss), 0.001);
	float alpha = roughness * roughness;
	float NoH = max(dot(worldNormal, h), 0.0);
	float NoV = max(dot(worldNormal, viewDir), 0.0);
	float NoL = max(dot(worldNormal, -lightDirNorm), 0.0);
	float NoH2 = NoH * NoH;
	float denom = NoH2 * (alpha - 1.0) + 1.0;
	float D = alpha / (PI * denom * denom);
	float alpha2 = alpha * alpha;
	float lambdaV = NoL * sqrt(NoV * NoV * (1.0 - alpha2) + alpha2);
	float lambdaL = NoV * sqrt(NoL * NoL * (1.0 - alpha2) + alpha2);
	float G = 0.5 / max(lambdaV + lambdaL, 0.00001);
	return D * G;
}
float getLightSpecular(vec3 h, vec3 reflDir, vec3 worldNormal, vec3 viewDir, vec3 lightDirNorm, float gloss, mat3 tbn) {
	return calcLightSpecular(gloss, worldNormal, viewDir, h, lightDirNorm);
}
`,p0=`
float calcLightSpecular(float gloss, vec3 worldNormal, vec3 h) {
	float nh = max( dot( h, worldNormal ), 0.0 );
	float specPow = exp2(gloss * 11.0);
	specPow = max(specPow, 0.0001);
	return pow(nh, specPow) * (specPow + 2.0) / 8.0;
}
float getLightSpecular(vec3 h, vec3 reflDir, vec3 worldNormal, vec3 viewDir, vec3 lightDirNorm, float gloss, mat3 tbn) {
	return calcLightSpecular(gloss, worldNormal, h);
}
`,m0=`
float sheenD(vec3 normal, vec3 h, float roughness) {
	const float PI = 3.141592653589793;
	float invR = 1.0 / (roughness * roughness);
	float cos2h = max(dot(normal, h), 0.0);
	cos2h *= cos2h;
	float sin2h = max(1.0 - cos2h, 0.0078125);
	return (2.0 + invR) * pow(sin2h, invR * 0.5) / (2.0 * PI);
}
float sheenV(vec3 normal, vec3 viewDir, vec3 light) {
	float NoV = max(dot(normal, viewDir), 0.000001);
	float NoL = max(dot(normal, light), 0.000001);
	return 1.0 / (4.0 * (NoL + NoV - NoL * NoV));
}
float getLightSpecularSheen(vec3 h, vec3 worldNormal, vec3 viewDir, vec3 lightDirNorm, float sheenGloss) {
	float D = sheenD(worldNormal, h, sheenGloss);
	float V = sheenV(worldNormal, viewDir, -lightDirNorm);
	return D * V;
}
`,_0=`
#ifndef LINEARIZE_DEPTH
#define LINEARIZE_DEPTH
float linearizeDepthWithParams(float z, vec4 cameraParams) {
	if (cameraParams.w == 0.0)
		return (cameraParams.z * cameraParams.y) / (cameraParams.y + z * (cameraParams.z - cameraParams.y));
	else
		return cameraParams.z + z * (cameraParams.y - cameraParams.z);
}
#ifndef CAMERAPLANES
	#define CAMERAPLANES
	uniform vec4 camera_params;
#endif
float linearizeDepth(float z) {
	return linearizeDepthWithParams(z, camera_params);
}
#endif
`,g0=`
void evaluateBackend() {
	#ifdef LIT_SSAO
		litArgs_ao *= texture2DLod(ssaoTexture, gl_FragCoord.xy * ssaoTextureSizeInv, 0.0).r;
	#endif
	#ifdef LIT_NEEDS_NORMAL
		#ifdef LIT_SPECULAR
			getReflDir(litArgs_worldNormal, dViewDirW, litArgs_gloss, dTBN);
		#endif
		#ifdef LIT_CLEARCOAT
			ccReflDirW = normalize(-reflect(dViewDirW, litArgs_clearcoat_worldNormal));
		#endif
	#endif
	#ifdef LIT_SPECULAR_OR_REFLECTION
		#ifdef LIT_METALNESS
			float f0 = 1.0 / litArgs_ior;
			f0 = (f0 - 1.0) / (f0 + 1.0);
			f0 *= f0;
			#ifdef LIT_SPECULARITY_FACTOR
				litArgs_specularity = getSpecularModulate(litArgs_specularity, litArgs_albedo, litArgs_metalness, f0, litArgs_specularityFactor);
			#else
				litArgs_specularity = getSpecularModulate(litArgs_specularity, litArgs_albedo, litArgs_metalness, f0, 1.0);
			#endif
			litArgs_albedo = getAlbedoModulate(litArgs_albedo, litArgs_metalness);
		#endif
		#ifdef LIT_IRIDESCENCE
			vec3 iridescenceFresnel = getIridescence(saturate(dot(dViewDirW, litArgs_worldNormal)), litArgs_specularity, litArgs_iridescence_thickness);
		#endif
	#endif
	#ifdef LIT_ADD_AMBIENT
		addAmbient(litArgs_worldNormal);
		#ifdef LIT_SPECULAR
			dDiffuseLight = dDiffuseLight * (1.0 - litArgs_specularity);
		#endif
		#ifdef LIT_SEPARATE_AMBIENT
			vec3 dAmbientLight = dDiffuseLight;
			dDiffuseLight = vec3(0);
		#endif
	#endif
	#ifndef LIT_OLD_AMBIENT
		dDiffuseLight *= material_ambient;
	#endif
	#ifdef LIT_AO
		#ifndef LIT_OCCLUDE_DIRECT
			occludeDiffuse(litArgs_ao);
		#endif
	#endif
	#ifdef LIT_LIGHTMAP
		addLightMap(
			litArgs_lightmap, 
			litArgs_lightmapDir, 
			litArgs_worldNormal, 
			dViewDirW, 
			dReflDirW, 
			litArgs_gloss, 
			litArgs_specularity, 
			dVertexNormalW,
			dTBN
		#if defined(LIT_IRIDESCENCE)
			, iridescenceFresnel,
			litArgs_iridescence_intensity
		#endif
		);
	#endif
	#ifdef LIT_LIGHTING || LIT_REFLECTIONS
		#ifdef LIT_REFLECTIONS
			#ifdef LIT_CLEARCOAT
				addReflectionCC(ccReflDirW, litArgs_clearcoat_gloss);
			
				#ifdef LIT_SPECULAR_FRESNEL
					ccFresnel = getFresnelCC(dot(dViewDirW, litArgs_clearcoat_worldNormal));
					ccReflection *= ccFresnel;
				#else
					ccFresnel = 0.0;
				#endif
			#endif
			#ifdef LIT_SPECULARITY_FACTOR
				ccReflection *= litArgs_specularityFactor;
			#endif
			#ifdef LIT_SHEEN
				addReflectionSheen(litArgs_worldNormal, dViewDirW, litArgs_sheen_gloss);
			#endif
			addReflection(dReflDirW, litArgs_gloss);
			#ifdef LIT_FRESNEL_MODEL
				dReflection.rgb *= getFresnel(
					dot(dViewDirW, litArgs_worldNormal), 
					litArgs_gloss, 
					litArgs_specularity
				#if defined(LIT_IRIDESCENCE)
					, iridescenceFresnel,
					litArgs_iridescence_intensity
				#endif
					);
			#else
				dReflection.rgb *= litArgs_specularity;
			#endif
		#endif
		#ifdef AREA_LIGHTS
			dSpecularLight *= litArgs_specularity;
			#ifdef LIT_SPECULAR
				calcLTCLightValues(litArgs_gloss, litArgs_worldNormal, dViewDirW, litArgs_specularity, litArgs_clearcoat_gloss, litArgs_clearcoat_worldNormal, litArgs_clearcoat_specularity);
			#endif
		#endif
		
		#ifdef LIGHT_COUNT > 0
			#include "lightEvaluationPS, LIGHT_COUNT"
		#endif
		#ifdef LIT_CLUSTERED_LIGHTS
			addClusteredLights(litArgs_worldNormal, dViewDirW, dReflDirW,
				#if defined(LIT_CLEARCOAT)
						ccReflDirW,
				#endif
						litArgs_gloss, litArgs_specularity, dVertexNormalW, dTBN, 
				#if defined(LIT_IRIDESCENCE)
						iridescenceFresnel,
				#endif
						litArgs_clearcoat_worldNormal, litArgs_clearcoat_gloss, litArgs_sheen_gloss, litArgs_iridescence_intensity
			);
		#endif
		#ifdef AREA_LIGHTS
			#ifdef LIT_CLEARCOAT
				litArgs_clearcoat_specularity = 1.0;
			#endif
			#ifdef LIT_SPECULAR
				litArgs_specularity = vec3(1);
			#endif
		#endif
		#ifdef LIT_REFRACTION
			addRefraction(
				litArgs_worldNormal, 
				dViewDirW, 
				litArgs_thickness, 
				litArgs_gloss, 
				litArgs_specularity, 
				litArgs_albedo, 
				litArgs_transmission,
				litArgs_ior,
				litArgs_dispersion
				#if defined(LIT_IRIDESCENCE)
					, iridescenceFresnel, 
					litArgs_iridescence_intensity
				#endif
			);
		#endif
	#endif
	#ifdef LIT_AO
		#ifdef LIT_OCCLUDE_DIRECT
			occludeDiffuse(litArgs_ao);
		#endif
		#if LIT_OCCLUDE_SPECULAR != NONE
			occludeSpecular(litArgs_gloss, litArgs_ao, litArgs_worldNormal, dViewDirW);
		#endif
	#endif
	#if !defined(LIT_OPACITY_FADES_SPECULAR)
		#if LIT_BLEND_TYPE == NORMAL || LIT_BLEND_TYPE == PREMULTIPLIED
			float specLum = dot((dSpecularLight + dReflection.rgb * dReflection.a), vec3( 0.2126, 0.7152, 0.0722 ));
			#ifdef LIT_CLEARCOAT
				specLum += dot(ccSpecularLight * litArgs_clearcoat_specularity + ccReflection * litArgs_clearcoat_specularity, vec3( 0.2126, 0.7152, 0.0722 ));
			#endif
			litArgs_opacity = clamp(litArgs_opacity + gammaCorrectInput(specLum), 0.0, 1.0);
		#endif
		litArgs_opacity *= material_alphaFade;
	#endif
	#ifdef LIT_LIGHTMAP_BAKING
		#ifdef LIT_LIGHTMAP_BAKING_COLOR
			#include "bakeLmEndPS"
		#endif
		#ifdef LIT_LIGHTMAP_BAKING_DIR
			#include "bakeDirLmEndPS"
		#endif
	#else
		#include "endPS"
		#include "outputAlphaPS"
	#endif
	#ifdef LIT_MSDF
		gl_FragColor = applyMsdf(gl_FragColor);
	#endif
	#include "outputPS"
	#include "debugOutputPS"
	#ifdef LIT_SHADOW_CATCHER
		gl_FragColor.rgb = vec3(dShadowCatcher);
	#endif
	#include "outlineOutputPS"
}
`,v0=`
vec3 sReflection;
vec3 dVertexNormalW;
vec3 dTangentW;
vec3 dBinormalW;
vec3 dViewDirW;
vec3 dReflDirW;
vec3 ccReflDirW;
vec3 dLightDirNormW;
float dAtten;
mat3 dTBN;
vec4 dReflection;
vec3 dDiffuseLight;
vec3 dSpecularLight;
float ccFresnel;
vec3 ccReflection;
vec3 ccSpecularLight;
float ccSpecularityNoFres;
vec3 sSpecularLight;
#ifdef LIT_DISPERSION
	uniform float material_dispersion;
#endif
#ifndef LIT_OPACITY_FADES_SPECULAR
	uniform float material_alphaFade;
#endif
#ifdef LIT_SSAO
	uniform sampler2D ssaoTexture;
	uniform vec2 ssaoTextureSizeInv;
#endif
#ifdef LIT_SHADOW_CATCHER
	float dShadowCatcher = 1.0;
#endif
#if LIGHT_COUNT > 0
	#include "lightDeclarationPS, LIGHT_COUNT"
#endif
#ifdef LIT_SPECULAR
	#if LIT_FRESNEL_MODEL == NONE && !defined(LIT_REFLECTIONS) && !defined(LIT_DIFFUSE_MAP) 
		#define LIT_OLD_AMBIENT
	#endif
#endif
#ifdef STD_LIGHTMAP_DIR
	uniform float bakeDir;
#endif
#ifdef LIT_LIGHTMAP_BAKING_ADD_AMBIENT
	uniform float ambientBakeOcclusionContrast;
	uniform float ambientBakeOcclusionBrightness;
#endif
`,S0=`
void main(void) {
	#include "litUserMainStartPS"
	dReflection = vec4(0);
	#ifdef LIT_CLEARCOAT
		ccSpecularLight = vec3(0);
		ccReflection = vec3(0);
	#endif
	#if LIT_NONE_SLICE_MODE == SLICED
		#include "startNineSlicedPS"
	#elif LIT_NONE_SLICE_MODE == TILED
		#include "startNineSlicedTiledPS"
	#endif
	#ifdef LIT_NEEDS_NORMAL
		dVertexNormalW = normalize(vNormalW);
		#ifdef LIT_TANGENTS
			#if defined(LIT_HEIGHTS) || defined(LIT_USE_NORMALS) || defined(LIT_USE_CLEARCOAT_NORMALS) || defined(LIT_GGX_SPECULAR)
				dTangentW = vTangentW;
				dBinormalW = vBinormalW;
			#endif
		#endif
		getViewDir();
		#ifdef LIT_TBN
			getTBN(dTangentW, dBinormalW, dVertexNormalW);
			#ifdef LIT_TWO_SIDED_LIGHTING
				handleTwoSidedLighting();
			#endif
		#endif
	#endif
	evaluateFrontend();
	#include "debugProcessFrontendPS"
	evaluateBackend();
	#include "litUserMainEndPS"
}
`,T0=`
#ifdef LIT_NEEDS_NORMAL
	#include "cubeMapRotatePS"
	#include "cubeMapProjectPS"
	#include "envProcPS"
#endif
#ifdef LIT_SPECULAR_OR_REFLECTION
	#ifdef LIT_METALNESS
		#include "metalnessModulatePS"
	#endif
	#ifdef LIT_IRIDESCENCE
		#include "iridescenceDiffractionPS"
	#endif
#endif
#if defined(LIT_SPECULAR_OR_REFLECTION) || defined(LIT_REFRACTION)
	#if LIT_FRESNEL_MODEL == SCHLICK
		#include "fresnelSchlickPS"
	#endif
#endif
#ifdef LIT_AO
	#include "aoDiffuseOccPS"
	#include "aoSpecOccPS"
#endif
#if LIT_REFLECTION_SOURCE == ENVATLASHQ
	#include "envAtlasPS"
	#include "reflectionEnvHQPS"
#elif LIT_REFLECTION_SOURCE == ENVATLAS
	#include "envAtlasPS"
	#include "reflectionEnvPS"
#elif LIT_REFLECTION_SOURCE == CUBEMAP
	#include "reflectionCubePS"
#elif LIT_REFLECTION_SOURCE == SPHEREMAP
	#include "reflectionSpherePS"
#endif
#ifdef LIT_REFLECTIONS
	#ifdef LIT_CLEARCOAT
		#include "reflectionCCPS"
	#endif
	#ifdef LIT_SHEEN
		#include "reflectionSheenPS"
	#endif
#endif
#ifdef LIT_REFRACTION
	#if defined(LIT_DYNAMIC_REFRACTION)
		#include "refractionDynamicPS"
	#elif defined(LIT_REFLECTIONS)
		#include "refractionCubePS"
	#endif
#endif
#ifdef LIT_SHEEN
	#include "lightSheenPS"
#endif
uniform vec3 material_ambient;
#ifdef LIT_SPECULAR
	#ifdef LIT_LIGHTING
		#ifdef LIT_GGX_SPECULAR
			#ifdef LIT_ANISOTROPY
				#include "lightSpecularAnisoGGXPS"
			#else
				#include "lightSpecularGGXPS"
			#endif
		#else
			#include "lightSpecularBlinnPS"
		#endif
	#endif
#endif
#include "combinePS"
#ifdef LIT_LIGHTMAP
	#include "lightmapAddPS"
#endif
#ifdef LIT_ADD_AMBIENT
	#include "ambientPS"
#endif
#ifdef LIT_MSDF
	#include "msdfPS"
#endif
#ifdef LIT_NEEDS_NORMAL
	#include "viewDirPS"
	#ifdef LIT_SPECULAR
		#ifdef LIT_ANISOTROPY
			#include "reflDirAnisoPS"
		#else
			#include "reflDirPS"
		#endif
	#endif
#endif
#include "lightingPS"
`,E0=`
#include "basePS"
#include "sphericalPS"
#include "decodePS"
#include "gammaPS"
#include "tonemappingPS"
#include "fogPS"
#if LIT_NONE_SLICE_MODE == SLICED
	#include "baseNineSlicedPS"
#elif LIT_NONE_SLICE_MODE == TILED
	#include "baseNineSlicedTiledPS"
#endif
#ifdef LIT_TBN
	#include "TBNPS"
	#ifdef LIT_TWO_SIDED_LIGHTING
		#include "twoSidedLightingPS"
	#endif
#endif
`,y0=`
#include "varyingsPS"
#include "litUserDeclarationPS"
#include "frontendDeclPS"
#include "outlineDeclarationPS"
#if defined(PICK_PASS) || defined(PREPASS_PASS)
	#include "frontendCodePS"
	#include "litUserCodePS"
	#include "litOtherMainPS"
#elif defined(SHADOW_PASS)
	#include "frontendCodePS"
	#include "litUserCodePS"
	#include "litShadowMainPS"
#else
	#include "litForwardDeclarationPS"
	#include "litForwardPreCodePS"
	#include "frontendCodePS"
	#include "litForwardPostCodePS"
	#include "litForwardBackendPS"
	#include "litUserCodePS"
	#include "litForwardMainPS"
#endif
`,x0=`
#include "varyingsVS"
#include  "litUserDeclarationVS"
#ifdef VERTEX_COLOR
	attribute vec4 vertex_color;
#endif
#ifdef NINESLICED
	varying vec2 vMask;
	varying vec2 vTiledUv;
	uniform mediump vec4 innerOffset;
	uniform mediump vec2 outerScale;
	uniform mediump vec4 atlasRect;
#endif
vec3 dPositionW;
mat4 dModelMatrix;
#include "transformCoreVS"
#ifdef UV0
	attribute vec2 vertex_texCoord0;
	#include "uv0VS"
#endif
#ifdef UV1
	attribute vec2 vertex_texCoord1;
	#include "uv1VS"
#endif
#ifdef LINEAR_DEPTH
	#ifndef VIEWMATRIX
	#define VIEWMATRIX
		uniform mat4 matrix_view;
	#endif
#endif
#include "transformVS"
#ifdef NORMALS
	#include "normalCoreVS"
	#include "normalVS"
#endif
#ifdef TANGENTS
	attribute vec4 vertex_tangent;
#endif
#include "uvTransformUniformsPS, UV_TRANSFORMS_COUNT"
#ifdef MSDF
	#include "msdfVS"
#endif
#include  "litUserCodeVS"
#ifdef VERTEX_COLOR
	vec3 decodeGamma(vec3 raw) {
		return pow(raw, vec3(2.2));
	}
	vec4 gammaCorrectInput(vec4 color) {
		return vec4(decodeGamma(color.xyz), color.w);
	}
#endif
void main(void) {
	#include "litUserMainStartVS"
	gl_PointSize = 1.0;
	gl_Position = getPosition();
	vPositionW = getWorldPosition();
	#ifdef NORMALS
		vNormalW = getNormal();
	#endif
	#ifdef TANGENTS
		vTangentW = normalize(dNormalMatrix * vertex_tangent.xyz);
		vBinormalW = cross(vNormalW, vTangentW) * vertex_tangent.w;
	#elif defined(GGX_SPECULAR)
		vObjectSpaceUpW = normalize(dNormalMatrix * vec3(0, 1, 0));
	#endif
	#ifdef UV0
		vec2 uv0 = getUv0();
		#ifdef UV0_UNMODIFIED
			vUv0 = uv0;
		#endif
	#endif
	#ifdef UV1
		vec2 uv1 = getUv1();
		#ifdef UV1_UNMODIFIED
			vUv1 = uv1;
		#endif
	#endif
	#include "uvTransformVS, UV_TRANSFORMS_COUNT"
	#ifdef VERTEX_COLOR
		#ifdef STD_VERTEX_COLOR_GAMMA
			vVertexColor = gammaCorrectInput(vertex_color);
		#else
			vVertexColor = vertex_color;
		#endif
	#endif
	#ifdef LINEAR_DEPTH
		vLinearDepth = -(matrix_view * vec4(vPositionW, 1.0)).z;
	#endif
	#ifdef MSDF
		unpackMsdfParams();
	#endif
	#include "litUserMainEndVS"
}
`,C0=`
#ifdef PICK_PASS
	#include "pickPS"
#endif
#ifdef PREPASS_PASS
	#include "floatAsUintPS"
#endif
void main(void) {
	#include "litUserMainStartPS"
	evaluateFrontend();
	#ifdef PICK_PASS
		pcFragColor0 = getPickOutput();
		#ifdef DEPTH_PICK_PASS
			pcFragColor1 = getPickDepth();
		#endif
	#endif
	#ifdef PREPASS_PASS
		gl_FragColor = float2vec4(vLinearDepth);
	#endif
	#include "litUserMainEndPS"
}
`,A0=`
vec3 litArgs_albedo;
float litArgs_opacity;
vec3 litArgs_emission;
vec3 litArgs_worldNormal;
float litArgs_ao;
vec3 litArgs_lightmap;
vec3 litArgs_lightmapDir;
float litArgs_metalness;
vec3 litArgs_specularity;
float litArgs_specularityFactor;
float litArgs_gloss;
float litArgs_sheen_gloss;
vec3 litArgs_sheen_specularity;
float litArgs_transmission;
float litArgs_thickness;
float litArgs_ior;
float litArgs_dispersion;
float litArgs_iridescence_intensity;
float litArgs_iridescence_thickness;
vec3 litArgs_clearcoat_worldNormal;
float litArgs_clearcoat_specularity;
float litArgs_clearcoat_gloss;
`,w0=`
	#if LIT_NONE_SLICE_MODE == TILED
		const float textureBias = -1000.0;
	#else
		uniform float textureBias;
	#endif
	#include "litShaderArgsPS"
`,L0=`
#if LIGHT_TYPE != DIRECTIONAL
	uniform vec3 view_position;
	uniform float light_radius;
#endif
#if SHADOW_TYPE == PCSS_32F
	#include "linearizeDepthPS"
#endif
void main(void) {
	#include "litUserMainStartPS"
	evaluateFrontend();
	#ifdef PERSPECTIVE_DEPTH
		float depth = gl_FragCoord.z;
		#if SHADOW_TYPE == PCSS_32F
			#if LIGHT_TYPE != DIRECTIONAL
				depth = linearizeDepthWithParams(depth, camera_params);
			#endif
		#endif
	#else
		float depth = min(distance(view_position, vPositionW) / light_radius, 0.99999);
		#define MODIFIED_DEPTH
	#endif
	#if SHADOW_TYPE == VSM_16F || SHADOW_TYPE == VSM_32F
		#if SHADOW_TYPE == VSM_32F
			float exponent = 15.0;
		#else
			float exponent = 5.54;
		#endif
		depth = 2.0 * depth - 1.0;
		depth =  exp(exponent * depth);
		gl_FragColor = vec4(depth, depth*depth, 1.0, 1.0);
	#else
		#if SHADOW_TYPE == PCSS_32F
			gl_FragColor.r = depth;
		#else
			#ifdef MODIFIED_DEPTH
				gl_FragDepth = depth;
			#endif
			gl_FragColor = vec4(1.0);
		#endif
	#endif
	#include "litUserMainEndPS"
}
`,D0=`
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
struct Coords {
	vec3 coord0;
	vec3 coord1;
	vec3 coord2;
	vec3 coord3;
};
float LTC_EvaluateRect( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in Coords rectCoords) {
	vec3 v1 = rectCoords.coord1 - rectCoords.coord0;
	vec3 v2 = rectCoords.coord3 - rectCoords.coord0;
	
	vec3 lightNormal = cross( v1, v2 );
	float factor = sign(-dot( lightNormal, P - rectCoords.coord0 ));
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 =  factor * cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords.coord0 - P );
	coords[ 1 ] = mat * ( rectCoords.coord1 - P );
	coords[ 2 ] = mat * ( rectCoords.coord2 - P );
	coords[ 3 ] = mat * ( rectCoords.coord3 - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return result;
}
Coords dLTCCoords;
Coords getLTCLightCoords(vec3 lightPos, vec3 halfWidth, vec3 halfHeight){
	Coords coords;
	coords.coord0 = lightPos + halfWidth - halfHeight;
	coords.coord1 = lightPos - halfWidth - halfHeight;
	coords.coord2 = lightPos - halfWidth + halfHeight;
	coords.coord3 = lightPos + halfWidth + halfHeight;
	return coords;
}
float dSphereRadius;
Coords getSphereLightCoords(vec3 lightPos, vec3 halfWidth, vec3 halfHeight){
	dSphereRadius = max(length(halfWidth), length(halfHeight));
	vec3 f = reflect(normalize(lightPos - view_position), vNormalW);
	vec3 w = normalize(cross(f, halfHeight));
	vec3 h = normalize(cross(f, w));
	return getLTCLightCoords(lightPos, w * dSphereRadius, h * dSphereRadius);
}
vec2 dLTCUV;
#ifdef LIT_CLEARCOAT
	vec2 ccLTCUV;
#endif
vec2 getLTCLightUV(float gloss, vec3 worldNormal, vec3 viewDir)
{
	float roughness = max((1.0 - gloss) * (1.0 - gloss), 0.001);
	return LTC_Uv( worldNormal, viewDir, roughness );
}
vec3 dLTCSpecFres;
#ifdef LIT_CLEARCOAT
	vec3 ccLTCSpecFres;
#endif
vec3 getLTCLightSpecFres(vec2 uv, vec3 specularity)
{
	vec4 t2 = texture2DLod(areaLightsLutTex2, uv, 0.0);
	return specularity * t2.x + ( vec3( 1.0 ) - specularity) * t2.y;
}
void calcLTCLightValues(float gloss, vec3 worldNormal, vec3 viewDir, vec3 specularity, float clearcoatGloss, vec3 clearcoatWorldNormal, float clearcoatSpecularity)
{
	dLTCUV = getLTCLightUV(gloss, worldNormal, viewDir);
	dLTCSpecFres = getLTCLightSpecFres(dLTCUV, specularity); 
#ifdef LIT_CLEARCOAT
	ccLTCUV = getLTCLightUV(clearcoatGloss, clearcoatWorldNormal, viewDir);
	ccLTCSpecFres = getLTCLightSpecFres(ccLTCUV, vec3(clearcoatSpecularity));
#endif
}
void calcRectLightValues(vec3 lightPos, vec3 halfWidth, vec3 halfHeight) {
	dLTCCoords = getLTCLightCoords(lightPos, halfWidth, halfHeight);
}
void calcDiskLightValues(vec3 lightPos, vec3 halfWidth, vec3 halfHeight) {
	calcRectLightValues(lightPos, halfWidth, halfHeight);
}
void calcSphereLightValues(vec3 lightPos, vec3 halfWidth, vec3 halfHeight) {
	dLTCCoords = getSphereLightCoords(lightPos, halfWidth, halfHeight);
}
vec3 SolveCubic(vec4 Coefficient)
{
	float pi = 3.14159;
	Coefficient.xyz /= Coefficient.w;
	Coefficient.yz /= 3.0;
	float A = Coefficient.w;
	float B = Coefficient.z;
	float C = Coefficient.y;
	float D = Coefficient.x;
	vec3 Delta = vec3(
		-Coefficient.z * Coefficient.z + Coefficient.y,
		-Coefficient.y * Coefficient.z + Coefficient.x,
		dot(vec2(Coefficient.z, -Coefficient.y), Coefficient.xy)
	);
	float Discriminant = dot(vec2(4.0 * Delta.x, -Delta.y), Delta.zy);
	vec2 xlc, xsc;
	{
		float A_a = 1.0;
		float C_a = Delta.x;
		float D_a = -2.0 * B * Delta.x + Delta.y;
		float Theta = atan(sqrt(Discriminant), -D_a) / 3.0;
		float x_1a = 2.0 * sqrt(-C_a) * cos(Theta);
		float x_3a = 2.0 * sqrt(-C_a) * cos(Theta + (2.0 / 3.0) * pi);
		float xl;
		if ((x_1a + x_3a) > 2.0 * B)
			xl = x_1a;
		else
			xl = x_3a;
		xlc = vec2(xl - B, A);
	}
	{
		float A_d = D;
		float C_d = Delta.z;
		float D_d = -D * Delta.y + 2.0 * C * Delta.z;
		float Theta = atan(D * sqrt(Discriminant), -D_d) / 3.0;
		float x_1d = 2.0 * sqrt(-C_d) * cos(Theta);
		float x_3d = 2.0 * sqrt(-C_d) * cos(Theta + (2.0 / 3.0) * pi);
		float xs;
		if (x_1d + x_3d < 2.0 * C)
			xs = x_1d;
		else
			xs = x_3d;
		xsc = vec2(-D, xs + C);
	}
	float E =  xlc.y * xsc.y;
	float F = -xlc.x * xsc.y - xlc.y * xsc.x;
	float G =  xlc.x * xsc.x;
	vec2 xmc = vec2(C * F - B * G, -B * F + C * E);
	vec3 Root = vec3(xsc.x / xsc.y, xmc.x / xmc.y, xlc.x / xlc.y);
	if (Root.x < Root.y && Root.x < Root.z)
		Root.xyz = Root.yxz;
	else if (Root.z < Root.x && Root.z < Root.y)
		Root.xyz = Root.xzy;
	return Root;
}
float LTC_EvaluateDisk(vec3 N, vec3 V, vec3 P, mat3 Minv, Coords points)
{
	vec3 T1 = normalize(V - N * dot(V, N));
	vec3 T2 = cross(N, T1);
	mat3 R = transposeMat3( mat3( T1, T2, N ) );
	vec3 L_[ 3 ];
	L_[ 0 ] = R * ( points.coord0 - P );
	L_[ 1 ] = R * ( points.coord1 - P );
	L_[ 2 ] = R * ( points.coord2 - P );
	vec3 C  = 0.5 * (L_[0] + L_[2]);
	vec3 V1 = 0.5 * (L_[1] - L_[2]);
	vec3 V2 = 0.5 * (L_[1] - L_[0]);
	C  = Minv * C;
	V1 = Minv * V1;
	V2 = Minv * V2;
	float a, b;
	float d11 = dot(V1, V1);
	float d22 = dot(V2, V2);
	float d12 = dot(V1, V2);
	if (abs(d12) / sqrt(d11 * d22) > 0.0001)
	{
		float tr = d11 + d22;
		float det = -d12 * d12 + d11 * d22;
		det = sqrt(det);
		float u = 0.5 * sqrt(tr - 2.0 * det);
		float v = 0.5 * sqrt(tr + 2.0 * det);
		float e_max = (u + v) * (u + v);
		float e_min = (u - v) * (u - v);
		vec3 V1_, V2_;
		if (d11 > d22)
		{
			V1_ = d12 * V1 + (e_max - d11) * V2;
			V2_ = d12 * V1 + (e_min - d11) * V2;
		}
		else
		{
			V1_ = d12*V2 + (e_max - d22)*V1;
			V2_ = d12*V2 + (e_min - d22)*V1;
		}
		a = 1.0 / e_max;
		b = 1.0 / e_min;
		V1 = normalize(V1_);
		V2 = normalize(V2_);
	}
	else
	{
		a = 1.0 / dot(V1, V1);
		b = 1.0 / dot(V2, V2);
		V1 *= sqrt(a);
		V2 *= sqrt(b);
	}
	vec3 V3 = normalize(cross(V1, V2));
	if (dot(C, V3) < 0.0)
		V3 *= -1.0;
	float L  = dot(V3, C);
	float x0 = dot(V1, C) / L;
	float y0 = dot(V2, C) / L;
	float E1 = inversesqrt(a);
	float E2 = inversesqrt(b);
	a *= L * L;
	b *= L * L;
	float c0 = a * b;
	float c1 = a * b * (1.0 + x0 * x0 + y0 * y0) - a - b;
	float c2 = 1.0 - a * (1.0 + x0 * x0) - b * (1.0 + y0 * y0);
	float c3 = 1.0;
	vec3 roots = SolveCubic(vec4(c0, c1, c2, c3));
	float e1 = roots.x;
	float e2 = roots.y;
	float e3 = roots.z;
	vec3 avgDir = vec3(a * x0 / (a - e2), b * y0 / (b - e2), 1.0);
	mat3 rotate = mat3(V1, V2, V3);
	avgDir = rotate * avgDir;
	avgDir = normalize(avgDir);
	float L1 = sqrt(-e2 / e3);
	float L2 = sqrt(-e2 / e1);
	float formFactor = max(0.0, L1 * L2 * inversesqrt((1.0 + L1 * L1) * (1.0 + L2 * L2)));
	
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	vec2 uv = vec2(avgDir.z * 0.5 + 0.5, formFactor);
	uv = uv*LUT_SCALE + LUT_BIAS;
	float scale = texture2DLod(areaLightsLutTex2, uv, 0.0).w;
	return formFactor*scale;
}
float FixNan(float value) {
	#ifdef WEBGPU
		return value != value ? 0.0 : value;
	#else
		return isnan(value) ? 0.0 : value;
	#endif
}
float getRectLightDiffuse(vec3 worldNormal, vec3 viewDir, vec3 lightDir, vec3 lightDirNorm) {
	return LTC_EvaluateRect( worldNormal, viewDir, vPositionW, mat3( 1.0 ), dLTCCoords );
}
float getDiskLightDiffuse(vec3 worldNormal, vec3 viewDir, vec3 lightDir, vec3 lightDirNorm) {
	return FixNan(LTC_EvaluateDisk( worldNormal, viewDir, vPositionW, mat3( 1.0 ), dLTCCoords ));
}
float getSphereLightDiffuse(vec3 worldNormal, vec3 viewDir, vec3 lightDir, vec3 lightDirNorm) {
	float falloff = dSphereRadius / (dot(lightDir, lightDir) + dSphereRadius);
	return FixNan(getLightDiffuse(worldNormal, viewDir, lightDirNorm) * falloff);
}
mat3 getLTCLightInvMat(vec2 uv)
{
	vec4 t1 = texture2DLod(areaLightsLutTex1, uv, 0.0);
	return mat3(
		vec3( t1.x, 0, t1.y ),
		vec3(	0, 1,	0 ),
		vec3( t1.z, 0, t1.w )
	);
}
float calcRectLightSpecular(vec3 worldNormal, vec3 viewDir, vec2 uv) {
	mat3 mInv = getLTCLightInvMat(uv);
	return LTC_EvaluateRect( worldNormal, viewDir, vPositionW, mInv, dLTCCoords );
}
float getRectLightSpecular(vec3 worldNormal, vec3 viewDir) {
	return calcRectLightSpecular(worldNormal, viewDir, dLTCUV);
}
float calcDiskLightSpecular(vec3 worldNormal, vec3 viewDir, vec2 uv) {
	mat3 mInv = getLTCLightInvMat(uv);
	return LTC_EvaluateDisk( worldNormal, viewDir, vPositionW, mInv, dLTCCoords );
}
float getDiskLightSpecular(vec3 worldNormal, vec3 viewDir) {
	return calcDiskLightSpecular(worldNormal, viewDir, dLTCUV);
}
float getSphereLightSpecular(vec3 worldNormal, vec3 viewDir) {
	return calcDiskLightSpecular(worldNormal, viewDir, dLTCUV);
}
`,P0=`
#ifdef STD_METALNESS_CONSTANT
uniform float material_metalness;
#endif
void getMetalness() {
	float metalness = 1.0;
	#ifdef STD_METALNESS_CONSTANT
	metalness *= material_metalness;
	#endif
	#ifdef STD_METALNESS_TEXTURE
	metalness *= texture2DBias({STD_METALNESS_TEXTURE_NAME}, {STD_METALNESS_TEXTURE_UV}, textureBias).{STD_METALNESS_TEXTURE_CHANNEL};
	#endif
	#ifdef STD_METALNESS_VERTEX
	metalness *= saturate(vVertexColor.{STD_METALNESS_VERTEX_CHANNEL});
	#endif
	dMetalness = metalness;
}
`,I0=`
uniform sampler2D texture_msdfMap;
float median(float r, float g, float b) {
	return max(min(r, g), min(max(r, g), b));
}
uniform float font_sdfIntensity;
uniform float font_pxrange;
#ifndef LIT_MSDF_TEXT_ATTRIBUTE
	uniform vec4 outline_color;
	uniform float outline_thickness;
	uniform vec4 shadow_color;
	uniform vec2 shadow_offset;
#else
	varying vec4 outline_color;
	varying float outline_thickness;
	varying vec4 shadow_color;
	varying vec2 shadow_offset;
#endif
vec4 applyMsdf(vec4 color) {
	float srcAlpha = max(color.a, 0.0001);
	color.rgb = gammaCorrectInput(color.rgb / srcAlpha) * srcAlpha;
	vec3 tsample = texture2D(texture_msdfMap, vUv0).rgb;
	vec2 uvShdw = vUv0 - shadow_offset;
	vec3 ssample = texture2D(texture_msdfMap, uvShdw).rgb;
	float sigDist = median(tsample.r, tsample.g, tsample.b);
	float sigDistShdw = median(ssample.r, ssample.g, ssample.b);
	float edge = 0.5 - 0.5 * font_sdfIntensity;
	vec2 unitRange = vec2(font_pxrange) / vec2(textureSize(texture_msdfMap, 0));
	float screenPxRange = max(0.5 * dot(unitRange, 1.0 / max(fwidth(vUv0), vec2(1e-6))), 2.5);
	float inside = clamp(screenPxRange * (sigDist - edge) + 0.5, 0.0, 1.0);
	float outline = clamp(screenPxRange * (sigDist + outline_thickness - edge) + 0.5, 0.0, 1.0);
	float shadow = clamp(screenPxRange * (sigDistShdw + outline_thickness - edge) + 0.5, 0.0, 1.0);
	vec4 tcolor = (outline > inside) ? outline * vec4(outline_color.a * outline_color.rgb, outline_color.a) : vec4(0.0);
	tcolor = mix(tcolor, color, inside);
	vec4 scolor = (shadow > outline) ? shadow * vec4(shadow_color.a * shadow_color.rgb, shadow_color.a) : tcolor;
	tcolor = mix(scolor, tcolor, outline);
	tcolor.rgb = gammaCorrectOutput(tcolor.rgb / max(tcolor.a, 0.0001)) * tcolor.a;
	
	return tcolor;
}
`,b0=`
vec3 getSpecularModulate(in vec3 specularity, in vec3 albedo, in float metalness, in float f0, in float specularityFactor) {
	vec3 dielectricF0 = f0 * specularity * specularityFactor;
	return mix(dielectricF0, albedo, metalness);
}
vec3 getAlbedoModulate(in vec3 albedo, in float metalness) {
	return albedo * (1.0 - metalness);
}
`,R0=`
	varying vec2 uv0;
	uniform sampler2DArray morphTexture;
	uniform highp float morphFactor[{MORPH_TEXTURE_MAX_COUNT}];
	uniform highp uint morphIndex[{MORPH_TEXTURE_MAX_COUNT}];
	uniform int count;
	#ifdef MORPH_INT
		uniform vec3 aabbSize;
		uniform vec3 aabbMin;
	#endif
	void main (void) {
		highp vec3 color = vec3(0, 0, 0);
		ivec2 pixelCoords = ivec2(uv0 * vec2(textureSize(morphTexture, 0).xy));
		
		for (int i = 0; i < count; i++) {
			uint textureIndex = morphIndex[i];
			vec3 delta = texelFetch(morphTexture, ivec3(pixelCoords, int(textureIndex)), 0).xyz;
			color += morphFactor[i] * delta;
		}
		#ifdef MORPH_INT
			color = (color - aabbMin) / aabbSize * 65535.0;
			gl_FragColor = uvec4(color, 1u);
		#else
			gl_FragColor = vec4(color, 1.0);
		#endif
	}
`,M0=`
	attribute vec2 vertex_position;
	varying vec2 uv0;
	void main(void) {
		gl_Position = vec4(vertex_position, 0.5, 1.0);
		uv0 = vertex_position.xy * 0.5 + 0.5;
	}
`,N0=`
attribute vec3 vertex_outlineParameters;
attribute vec3 vertex_shadowParameters;
varying vec4 outline_color;
varying float outline_thickness;
varying vec4 shadow_color;
varying vec2 shadow_offset;
void unpackMsdfParams() {
	vec3 little = mod(vertex_outlineParameters, 256.);
	vec3 big = (vertex_outlineParameters - little) / 256.;
	outline_color.rb = little.xy / 255.;
	outline_color.ga = big.xy / 255.;
	outline_thickness = little.z / 255. * 0.2;
	little = mod(vertex_shadowParameters, 256.);
	big = (vertex_shadowParameters - little) / 256.;
	shadow_color.rb = little.xy / 255.;
	shadow_color.ga = big.xy / 255.;
	shadow_offset = (vec2(little.z, big.z) / 127. - 1.) * 0.005;
}
`,O0=`
mat3 dNormalMatrix;
vec3 getNormal() {
	dNormalMatrix = getNormalMatrix(dModelMatrix);
	vec3 localNormal = getLocalNormal(vertex_normal);
	return normalize(dNormalMatrix * localNormal);
}
`,F0=`
attribute vec3 vertex_normal;
uniform mat3 matrix_normal;
#ifdef MORPHING_NORMAL
	#ifdef MORPHING_INT
		uniform highp usampler2D morphNormalTex;
	#else
		uniform highp sampler2D morphNormalTex;
	#endif
#endif
vec3 getLocalNormal(vec3 vertexNormal) {
	vec3 localNormal = vertex_normal;
	#ifdef MORPHING_NORMAL
		ivec2 morphUV = getTextureMorphCoords();
		#ifdef MORPHING_INT
			vec3 morphNormal = vec3(texelFetch(morphNormalTex, ivec2(morphUV), 0).xyz) / 65535.0 * 2.0 - 1.0;
		#else
			vec3 morphNormal = texelFetch(morphNormalTex, ivec2(morphUV), 0).xyz;
		#endif
		localNormal += morphNormal;
	#endif
	return localNormal;
}
#if defined(SKIN) || defined(BATCH)
	mat3 getNormalMatrix(mat4 modelMatrix) {
		return mat3(modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz);
	}
#elif defined(INSTANCING)
	mat3 getNormalMatrix(mat4 modelMatrix) {
		return mat3(modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz);
	}
#else
	mat3 getNormalMatrix(mat4 modelMatrix) {
		return matrix_normal;
	}
#endif
`,U0=`
#ifdef STD_NORMAL_TEXTURE
	uniform float material_bumpiness;
#endif
#ifdef STD_NORMALDETAIL_TEXTURE
	uniform float material_normalDetailMapBumpiness;
	vec3 blendNormals(vec3 n1, vec3 n2) {
		n1 += vec3(0, 0, 1);
		n2 *= vec3(-1, -1, 1);
		return n1 * dot(n1, n2) / n1.z - n2;
	}
#endif
void getNormal() {
#ifdef STD_NORMAL_TEXTURE
	vec3 normalMap = {STD_NORMAL_TEXTURE_DECODE}(texture2DBias({STD_NORMAL_TEXTURE_NAME}, {STD_NORMAL_TEXTURE_UV}, textureBias));
	normalMap = mix(vec3(0.0, 0.0, 1.0), normalMap, material_bumpiness);
	#ifdef STD_NORMALDETAIL_TEXTURE
		vec3 normalDetailMap = {STD_NORMALDETAIL_TEXTURE_DECODE}(texture2DBias({STD_NORMALDETAIL_TEXTURE_NAME}, {STD_NORMALDETAIL_TEXTURE_UV}, textureBias));
		normalDetailMap = mix(vec3(0.0, 0.0, 1.0), normalDetailMap, material_normalDetailMapBumpiness);
		normalMap = blendNormals(normalMap, normalDetailMap);
	#endif
	dNormalW = normalize(dTBN * normalMap);
#else
	dNormalW = dVertexNormalW;
#endif
}
`,B0=`
uniform float material_opacity;
uniform float material_alphaDitherScale;
void getOpacity() {
	dAlpha = material_opacity;
	#ifdef STD_OPACITY_TEXTURE
	dAlpha *= texture2DBias({STD_OPACITY_TEXTURE_NAME}, {STD_OPACITY_TEXTURE_UV}, textureBias).{STD_OPACITY_TEXTURE_CHANNEL};
	#endif
	#ifdef STD_OPACITY_VERTEX
	dAlpha *= clamp(vVertexColor.{STD_OPACITY_VERTEX_CHANNEL}, 0.0, 1.0);
	#endif
}
`,k0=`
#if STD_OPACITY_DITHER == BAYER8
	#include "bayerPS"
#endif
uniform vec4 blueNoiseJitter;
#if STD_OPACITY_DITHER == BLUENOISE
	uniform sampler2D blueNoiseTex32;
#endif
void opacityDither(float alpha, float id) {
	if (alpha <= 0.0)
		discard;
	if (alpha >= 1.0)
		return;
	#if STD_OPACITY_DITHER == BAYER8
		float noise = bayer8(floor(mod(gl_FragCoord.xy + blueNoiseJitter.xy + id, 8.0))) / 64.0;
	#else
		#if STD_OPACITY_DITHER == BLUENOISE
			vec2 uv = fract(gl_FragCoord.xy / 32.0 + blueNoiseJitter.xy + id);
			float noise = texture2DLod(blueNoiseTex32, uv, 0.0).y;
		#endif
		#if STD_OPACITY_DITHER == IGNNOISE
			vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
			float noise = fract(magic.z * fract(dot(gl_FragCoord.xy + blueNoiseJitter.xy + id, magic.xy)));
		#endif
	#endif
	noise = pow(noise, 2.2);
	if (alpha < noise)
		discard;
}
`,z0=`
#ifdef PCOUTLINE_PASS
uniform vec3 pcOutlineColor;
#endif
`,V0=`
#ifdef PCOUTLINE_PASS
gl_FragColor.rgb = gammaCorrectOutput(pcOutlineColor);
#endif
`,G0=`
`,H0=`
#if LIT_BLEND_TYPE == NORMAL || LIT_BLEND_TYPE == ADDITIVEALPHA || defined(LIT_ALPHA_TO_COVERAGE)
	gl_FragColor.a = litArgs_opacity;
#elif LIT_BLEND_TYPE == PREMULTIPLIED
	gl_FragColor.rgb *= litArgs_opacity;
	gl_FragColor.a = litArgs_opacity;
#else
	gl_FragColor.a = 1.0;
#endif
`,W0=`
varying vec2 vUv0;
uniform sampler2D source;
void main(void) {
	gl_FragColor = texture2D(source, vUv0);
}
`,X0=`
uniform vec3 material_sheen;
void getSheen() {
	vec3 sheenColor = material_sheen;
	#ifdef STD_SHEEN_TEXTURE
	sheenColor *= {STD_SHEEN_TEXTURE_DECODE}(texture2DBias({STD_SHEEN_TEXTURE_NAME}, {STD_SHEEN_TEXTURE_UV}, textureBias)).{STD_SHEEN_TEXTURE_CHANNEL};
	#endif
	#ifdef STD_SHEEN_VERTEX
	sheenColor *= saturate(vVertexColor.{STD_SHEEN_VERTEX_CHANNEL});
	#endif
	sSpecularity = sheenColor;
}
`,Y0=`
uniform float material_sheenGloss;
void getSheenGlossiness() {
	float sheenGlossiness = material_sheenGloss;
	#ifdef STD_SHEENGLOSS_TEXTURE
	sheenGlossiness *= texture2DBias({STD_SHEENGLOSS_TEXTURE_NAME}, {STD_SHEENGLOSS_TEXTURE_UV}, textureBias).{STD_SHEENGLOSS_TEXTURE_CHANNEL};
	#endif
	#ifdef STD_SHEENGLOSS_VERTEX
	sheenGlossiness *= saturate(vVertexColor.{STD_SHEENGLOSS_VERTEX_CHANNEL});
	#endif
	#ifdef STD_SHEENGLOSS_INVERT
	sheenGlossiness = 1.0 - sheenGlossiness;
	#endif
	sGlossiness = sheenGlossiness + 0.0000001;
}
`,$0=`
uniform float material_heightMapFactor;
void getParallax() {
	float parallaxScale = material_heightMapFactor;
	float height = texture2DBias({STD_HEIGHT_TEXTURE_NAME}, {STD_HEIGHT_TEXTURE_UV}, textureBias).{STD_HEIGHT_TEXTURE_CHANNEL};
	height = height * parallaxScale - parallaxScale * 0.5;
	vec3 viewDirT = dViewDirW * dTBN;
	viewDirT.z += 0.42;
	dUvOffset = height * (viewDirT.xy / viewDirT.z);
}
`,q0=`
vec4 encodePickOutput(uint id) {
	const vec4 inv = vec4(1.0 / 255.0);
	const uvec4 shifts = uvec4(16, 8, 0, 24);
	uvec4 col = (uvec4(id) >> shifts) & uvec4(0xff);
	return vec4(col) * inv;
}
#ifndef PICK_CUSTOM_ID
	uniform uint meshInstanceId;
	vec4 getPickOutput() {
		return encodePickOutput(meshInstanceId);
	}
#endif
#ifdef DEPTH_PICK_PASS
	#include "floatAsUintPS"
	#ifndef CAMERAPLANES
		#define CAMERAPLANES
		uniform vec4 camera_params;
	#endif
	vec4 getPickDepth() {
		float linearDepth;
		if (camera_params.w > 0.5) {
			linearDepth = gl_FragCoord.z;
		} else {
			float viewDist = 1.0 / gl_FragCoord.w;
			linearDepth = (viewDist - camera_params.z) / (camera_params.y - camera_params.z);
		}
		return float2uint(linearDepth);
	}
#endif
`,j0=`
void getReflDir(vec3 worldNormal, vec3 viewDir, float gloss, mat3 tbn) {
	dReflDirW = normalize(-reflect(viewDir, worldNormal));
}
`,K0=`
void getReflDir(vec3 worldNormal, vec3 viewDir, float gloss, mat3 tbn) {
	float roughness = sqrt(1.0 - min(gloss, 1.0));
	vec2 direction = dAnisotropyRotation;
	vec3 anisotropicT = normalize(tbn * vec3(direction, 0.0));
	vec3 anisotropicB = normalize(cross(tbn[2], anisotropicT));
	float anisotropy = dAnisotropy;
	vec3 anisotropicDirection = anisotropicB;
	vec3 anisotropicTangent = cross(anisotropicDirection, viewDir);
	vec3 anisotropicNormal = cross(anisotropicTangent, anisotropicDirection);
	float bendFactor = 1.0 - anisotropy * (1.0 - roughness);
	float bendFactor4 = bendFactor * bendFactor * bendFactor * bendFactor;
	vec3 bentNormal = normalize(mix(normalize(anisotropicNormal), normalize(worldNormal), bendFactor4));
	dReflDirW = reflect(-viewDir, bentNormal);
}
`,Z0=`
#ifdef LIT_CLEARCOAT
void addReflectionCC(vec3 reflDir, float gloss) {
	ccReflection += calcReflection(reflDir, gloss);
}
#endif
`,J0=`
uniform samplerCube texture_cubeMap;
uniform float material_reflectivity;
vec3 calcReflection(vec3 reflDir, float gloss) {
	vec3 lookupVec = cubeMapProject(reflDir);
	lookupVec.x *= -1.0;
	return {reflectionDecode}(textureCube(texture_cubeMap, lookupVec));
}
void addReflection(vec3 reflDir, float gloss) {   
	dReflection += vec4(calcReflection(reflDir, gloss), material_reflectivity);
}
`,Q0=`
#ifndef ENV_ATLAS
	#define ENV_ATLAS
	uniform sampler2D texture_envAtlas;
#endif
uniform samplerCube texture_cubeMap;
uniform float material_reflectivity;
vec3 calcReflection(vec3 reflDir, float gloss) {
	vec3 dir = cubeMapProject(reflDir) * vec3(-1.0, 1.0, 1.0);
	vec2 uv = toSphericalUv(dir);
	float level = saturate(1.0 - gloss) * 5.0;
	float ilevel = floor(level);
	float flevel = level - ilevel;
	vec3 sharp = {reflectionCubemapDecode}(textureCube(texture_cubeMap, dir));
	vec3 roughA = {reflectionDecode}(texture2D(texture_envAtlas, mapRoughnessUv(uv, ilevel)));
	vec3 roughB = {reflectionDecode}(texture2D(texture_envAtlas, mapRoughnessUv(uv, ilevel + 1.0)));
	return processEnvironment(mix(sharp, mix(roughA, roughB, flevel), min(level, 1.0)));
}
void addReflection(vec3 reflDir, float gloss) {   
	dReflection += vec4(calcReflection(reflDir, gloss), material_reflectivity);
}
`,eT=`
#ifndef ENV_ATLAS
#define ENV_ATLAS
	uniform sampler2D texture_envAtlas;
#endif
uniform float material_reflectivity;
float shinyMipLevel(vec2 uv) {
	vec2 dx = dFdx(uv);
	vec2 dy = dFdy(uv);
	vec2 uv2 = vec2(fract(uv.x + 0.5), uv.y);
	vec2 dx2 = dFdx(uv2);
	vec2 dy2 = dFdy(uv2);
	float maxd = min(max(dot(dx, dx), dot(dy, dy)), max(dot(dx2, dx2), dot(dy2, dy2)));
	return clamp(0.5 * log2(maxd) - 1.0 + textureBias, 0.0, 5.0);
}
vec3 calcReflection(vec3 reflDir, float gloss) {
	vec3 dir = cubeMapProject(reflDir) * vec3(-1.0, 1.0, 1.0);
	vec2 uv = toSphericalUv(dir);
	float level = saturate(1.0 - gloss) * 5.0;
	float ilevel = floor(level);
	float level2 = shinyMipLevel(uv * atlasSize);
	float ilevel2 = floor(level2);
	vec2 uv0, uv1;
	float weight;
	if (ilevel == 0.0) {
		uv0 = mapShinyUv(uv, ilevel2);
		uv1 = mapShinyUv(uv, ilevel2 + 1.0);
		weight = level2 - ilevel2;
	} else {
		uv0 = uv1 = mapRoughnessUv(uv, ilevel);
		weight = 0.0;
	}
	vec3 linearA = {reflectionDecode}(texture2D(texture_envAtlas, uv0));
	vec3 linearB = {reflectionDecode}(texture2D(texture_envAtlas, uv1));
	vec3 linear0 = mix(linearA, linearB, weight);
	vec3 linear1 = {reflectionDecode}(texture2D(texture_envAtlas, mapRoughnessUv(uv, ilevel + 1.0)));
	return processEnvironment(mix(linear0, linear1, level - ilevel));
}
void addReflection(vec3 reflDir, float gloss) {   
	dReflection += vec4(calcReflection(reflDir, gloss), material_reflectivity);
}
`,tT=`
#ifndef VIEWMATRIX
	#define VIEWMATRIX
	uniform mat4 matrix_view;
#endif
uniform sampler2D texture_sphereMap;
uniform float material_reflectivity;
vec3 calcReflection(vec3 reflDir, float gloss) {
	vec3 reflDirV = (mat3(matrix_view) * reflDir);
	float m = 2.0 * sqrt(dot(reflDirV.xy, reflDirV.xy) + (reflDirV.z + 1.0) * (reflDirV.z + 1.0));
	vec2 sphereMapUv = reflDirV.xy / m + 0.5;
	return {reflectionDecode}(texture2D(texture_sphereMap, sphereMapUv));
}
void addReflection(vec3 reflDir, float gloss) {   
	dReflection += vec4(calcReflection(reflDir, gloss), material_reflectivity);
}
`,iT=`
void addReflectionSheen(vec3 worldNormal, vec3 viewDir, float gloss) {
	float NoV = dot(worldNormal, viewDir);
	float alphaG = gloss * gloss;
	float a = gloss < 0.25 ? -339.2 * alphaG + 161.4 * gloss - 25.9 : -8.48 * alphaG + 14.3 * gloss - 9.95;
	float b = gloss < 0.25 ? 44.0 * alphaG - 23.7 * gloss + 3.26 : 1.97 * alphaG - 3.27 * gloss + 0.72;
	float DG = exp( a * NoV + b ) + ( gloss < 0.25 ? 0.0 : 0.1 * ( gloss - 0.25 ) );
	sReflection += calcReflection(worldNormal, 0.0) * saturate(DG);
}
`,sT=`
vec3 refract2(vec3 viewVec, vec3 normal, float IOR) {
	float vn = dot(viewVec, normal);
	float k = 1.0 - IOR * IOR * (1.0 - vn * vn);
	vec3 refrVec = IOR * viewVec - (IOR * vn + sqrt(k)) * normal;
	return refrVec;
}
void addRefraction(
	vec3 worldNormal, 
	vec3 viewDir, 
	float thickness, 
	float gloss, 
	vec3 specularity, 
	vec3 albedo, 
	float transmission,
	float refractionIndex,
	float dispersion
#if defined(LIT_IRIDESCENCE)
	, vec3 iridescenceFresnel,
	float iridescenceIntensity
#endif 
) {
	vec4 tmpRefl = dReflection;
	vec3 reflectionDir = refract2(-viewDir, worldNormal, refractionIndex);
	dReflection = vec4(0);
	addReflection(reflectionDir, gloss);
	dDiffuseLight = mix(dDiffuseLight, dReflection.rgb * albedo, transmission);
	dReflection = tmpRefl;
}
`,aT=`
uniform float material_invAttenuationDistance;
uniform vec3 material_attenuation;
vec3 evalRefractionColor(vec3 refractionVector, float gloss, float refractionIndex) {
	vec4 pointOfRefraction = vec4(vPositionW + refractionVector, 1.0);
	vec4 projectionPoint = matrix_viewProjection * pointOfRefraction;
	vec2 uv = getGrabScreenPos(projectionPoint);
	float iorToRoughness = (1.0 - gloss) * clamp((1.0 / refractionIndex) * 2.0 - 2.0, 0.0, 1.0);
	float refractionLod = log2(uScreenSize.x) * iorToRoughness;
	vec3 refraction = texture2DLod(uSceneColorMap, uv, refractionLod).rgb;
	#ifdef SCENE_COLORMAP_GAMMA
		refraction = decodeGamma(refraction);
	#endif
	return refraction;
}
void addRefraction(
	vec3 worldNormal, 
	vec3 viewDir, 
	float thickness, 
	float gloss, 
	vec3 specularity, 
	vec3 albedo, 
	float transmission,
	float refractionIndex,
	float dispersion
#if defined(LIT_IRIDESCENCE)
	, vec3 iridescenceFresnel,
	float iridescenceIntensity
#endif
) {
	vec3 modelScale;
	modelScale.x = length(vec3(matrix_model[0].xyz));
	modelScale.y = length(vec3(matrix_model[1].xyz));
	modelScale.z = length(vec3(matrix_model[2].xyz));
	vec3 scale = thickness * modelScale;
	vec3 refractionVector = normalize(refract(-viewDir, worldNormal, refractionIndex)) * scale;
	vec3 refraction = evalRefractionColor(refractionVector, gloss, refractionIndex);
	#ifdef LIT_DISPERSION
		float halfSpread = (1.0 / refractionIndex - 1.0) * 0.025 * dispersion;
		float refractionIndexR = refractionIndex - halfSpread;
		refractionVector = normalize(refract(-viewDir, worldNormal, refractionIndexR)) * scale;
		refraction.r = evalRefractionColor(refractionVector, gloss, refractionIndexR).r;
		float refractionIndexB = refractionIndex + halfSpread;
		refractionVector = normalize(refract(-viewDir, worldNormal, refractionIndexB)) * scale;
		refraction.b = evalRefractionColor(refractionVector, gloss, refractionIndexB).b;
	#endif
	vec3 transmittance;
	if (material_invAttenuationDistance != 0.0)
	{
		vec3 attenuation = -log(material_attenuation) * material_invAttenuationDistance;
		transmittance = exp(-attenuation * length(refractionVector));
	}
	else
	{
		transmittance = vec3(1.0);
	}
	vec3 fresnel = vec3(1.0) - 
		getFresnel(
			dot(viewDir, worldNormal), 
			gloss, 
			specularity
		#if defined(LIT_IRIDESCENCE)
			, iridescenceFresnel,
			iridescenceIntensity
		#endif
		);
	dDiffuseLight = mix(dDiffuseLight, refraction * transmittance * fresnel, transmission);
}
`,rT=`
varying vec2 vUv0;
#ifdef CUBEMAP_SOURCE
	uniform samplerCube sourceCube;
#else
	uniform sampler2D sourceTex;
#endif
#ifdef USE_SAMPLES_TEX
	uniform sampler2D samplesTex;
	uniform vec2 samplesTexInverseSize;
#endif
uniform vec3 params;
float targetFace() { return params.x; }
float targetTotalPixels() { return params.y; }
float sourceTotalPixels() { return params.z; }
float PI = 3.141592653589793;
float saturate(float x) {
	return clamp(x, 0.0, 1.0);
}
#include "decodePS"
#include "encodePS"
vec3 modifySeams(vec3 dir, float scale) {
	vec3 adir = abs(dir);
	float M = max(max(adir.x, adir.y), adir.z);
	return dir / M * vec3(
		adir.x == M ? 1.0 : scale,
		adir.y == M ? 1.0 : scale,
		adir.z == M ? 1.0 : scale
	);
}
vec2 toSpherical(vec3 dir) {
	return vec2(dir.xz == vec2(0.0) ? 0.0 : atan(dir.x, dir.z), asin(dir.y));
}
vec3 fromSpherical(vec2 uv) {
	return vec3(cos(uv.y) * sin(uv.x),
				sin(uv.y),
				cos(uv.y) * cos(uv.x));
}
vec3 getDirectionEquirect() {
	return fromSpherical((vec2(vUv0.x, 1.0 - vUv0.y) * 2.0 - 1.0) * vec2(PI, PI * 0.5));
}
float signNotZero(float k){
	return(k >= 0.0) ? 1.0 : -1.0;
}
vec2 signNotZero(vec2 v) {
	return vec2(signNotZero(v.x), signNotZero(v.y));
}
vec3 octDecode(vec2 o) {
	vec3 v = vec3(o.x, 1.0 - abs(o.x) - abs(o.y), o.y);
	if (v.y < 0.0) {
		v.xz = (1.0 - abs(v.zx)) * signNotZero(v.xz);
	}
	return normalize(v);
}
vec3 getDirectionOctahedral() {
	return octDecode(vec2(vUv0.x, 1.0 - vUv0.y) * 2.0 - 1.0);
}
vec2 octEncode(in vec3 v) {
	float l1norm = abs(v.x) + abs(v.y) + abs(v.z);
	vec2 result = v.xz * (1.0 / l1norm);
	if (v.y < 0.0) {
		result = (1.0 - abs(result.yx)) * signNotZero(result.xy);
	}
	return result;
}
#ifdef CUBEMAP_SOURCE
	vec4 sampleCubemap(vec3 dir) {
		return textureCube(sourceCube, modifySeams(dir, 1.0));
	}
	vec4 sampleCubemap(vec2 sph) {
		return sampleCubemap(fromSpherical(sph));
	}
	vec4 sampleCubemap(vec3 dir, float mipLevel) {
		return textureCubeLod(sourceCube, modifySeams(dir, 1.0), mipLevel);
	}
	vec4 sampleCubemap(vec2 sph, float mipLevel) {
		return sampleCubemap(fromSpherical(sph), mipLevel);
	}
#else
	vec4 sampleEquirect(vec2 sph) {
		vec2 uv = sph / vec2(PI * 2.0, PI) + 0.5;
		return texture2D(sourceTex, vec2(uv.x, 1.0 - uv.y));
	}
	vec4 sampleEquirect(vec3 dir) {
		return sampleEquirect(toSpherical(dir));
	}
	vec4 sampleEquirect(vec2 sph, float mipLevel) {
		vec2 uv = sph / vec2(PI * 2.0, PI) + 0.5;
		return texture2DLod(sourceTex, vec2(uv.x, 1.0 - uv.y), mipLevel);
	}
	vec4 sampleEquirect(vec3 dir, float mipLevel) {
		return sampleEquirect(toSpherical(dir), mipLevel);
	}
	vec4 sampleOctahedral(vec3 dir) {
		vec2 uv = octEncode(dir) * 0.5 + 0.5;
		return texture2D(sourceTex, vec2(uv.x, 1.0 - uv.y));
	}
	vec4 sampleOctahedral(vec2 sph) {
		return sampleOctahedral(fromSpherical(sph));
	}
	vec4 sampleOctahedral(vec3 dir, float mipLevel) {
		vec2 uv = octEncode(dir) * 0.5 + 0.5;
		return texture2DLod(sourceTex, vec2(uv.x, 1.0 - uv.y), mipLevel);
	}
	vec4 sampleOctahedral(vec2 sph, float mipLevel) {
		return sampleOctahedral(fromSpherical(sph), mipLevel);
	}
#endif
vec3 getDirectionCubemap() {
	vec2 st = vUv0 * 2.0 - 1.0;
	float face = targetFace();
	vec3 vec;
	if (face == 0.0) {
		vec = vec3(1, -st.y, -st.x);
	} else if (face == 1.0) {
		vec = vec3(-1, -st.y, st.x);
	} else if (face == 2.0) {
		vec = vec3(st.x, 1, st.y);
	} else if (face == 3.0) {
		vec = vec3(st.x, -1, -st.y);
	} else if (face == 4.0) {
		vec = vec3(st.x, -st.y, 1);
	} else {
		vec = vec3(-st.x, -st.y, -1);
	}
	return normalize(modifySeams(vec, 1.0));
}
mat3 matrixFromVector(vec3 n) {
	float a = 1.0 / (1.0 + n.z);
	float b = -n.x * n.y * a;
	vec3 b1 = vec3(1.0 - n.x * n.x * a, b, -n.x);
	vec3 b2 = vec3(b, 1.0 - n.y * n.y * a, -n.y);
	return mat3(b1, b2, n);
}
mat3 matrixFromVectorSlow(vec3 n) {
	vec3 up = (1.0 - abs(n.y) <= 0.0000001) ? vec3(0.0, 0.0, n.y > 0.0 ? 1.0 : -1.0) : vec3(0.0, 1.0, 0.0);
	vec3 x = normalize(cross(up, n));
	vec3 y = cross(n, x);
	return mat3(x, y, n);
}
vec4 reproject() {
	if ({NUM_SAMPLES} <= 1) {
		return {ENCODE_FUNC}({DECODE_FUNC}({SOURCE_FUNC}({TARGET_FUNC}())));
	} else {
		vec3 t = {TARGET_FUNC}();
		vec3 tu = dFdx(t);
		vec3 tv = dFdy(t);
		vec3 result = vec3(0.0);
		for (float u = 0.0; u < {NUM_SAMPLES_SQRT}; ++u) {
			for (float v = 0.0; v < {NUM_SAMPLES_SQRT}; ++v) {
				result += {DECODE_FUNC}({SOURCE_FUNC}(normalize(t +
															tu * (u / {NUM_SAMPLES_SQRT} - 0.5) +
															tv * (v / {NUM_SAMPLES_SQRT} - 0.5))));
			}
		}
		return {ENCODE_FUNC}(result / ({NUM_SAMPLES_SQRT} * {NUM_SAMPLES_SQRT}));
	}
}
vec4 unpackFloat = vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 16581375.0);
#ifdef USE_SAMPLES_TEX
	void unpackSample(int i, out vec3 L, out float mipLevel) {
		float u = (float(i * 4) + 0.5) * samplesTexInverseSize.x;
		float v = (floor(u) + 0.5) * samplesTexInverseSize.y;
		vec4 raw;
		raw.x = dot(texture2D(samplesTex, vec2(u, v)), unpackFloat); u += samplesTexInverseSize.x;
		raw.y = dot(texture2D(samplesTex, vec2(u, v)), unpackFloat); u += samplesTexInverseSize.x;
		raw.z = dot(texture2D(samplesTex, vec2(u, v)), unpackFloat); u += samplesTexInverseSize.x;
		raw.w = dot(texture2D(samplesTex, vec2(u, v)), unpackFloat);
		L.xyz = raw.xyz * 2.0 - 1.0;
		mipLevel = raw.w * 8.0;
	}
	vec4 prefilterSamples() {
		mat3 vecSpace = matrixFromVectorSlow({TARGET_FUNC}());
		vec3 L;
		float mipLevel;
		vec3 result = vec3(0.0);
		float totalWeight = 0.0;
		for (int i = 0; i < {NUM_SAMPLES}; ++i) {
			unpackSample(i, L, mipLevel);
			result += {DECODE_FUNC}({SOURCE_FUNC}(vecSpace * L, mipLevel)) * L.z;
			totalWeight += L.z;
		}
		return {ENCODE_FUNC}(result / totalWeight);
	}
	vec4 prefilterSamplesUnweighted() {
		mat3 vecSpace = matrixFromVectorSlow({TARGET_FUNC}());
		vec3 L;
		float mipLevel;
		vec3 result = vec3(0.0);
		float totalWeight = 0.0;
		for (int i = 0; i < {NUM_SAMPLES}; ++i) {
			unpackSample(i, L, mipLevel);
			result += {DECODE_FUNC}({SOURCE_FUNC}(vecSpace * L, mipLevel));
		}
		return {ENCODE_FUNC}(result / float({NUM_SAMPLES}));
	}
#endif
void main(void) {
	gl_FragColor = {PROCESS_FUNC}();
}
`,nT=`
attribute vec2 vertex_position;
uniform vec4 uvMod;
varying vec2 vUv0;
void main(void) {
	gl_Position = vec4(vertex_position, 0.5, 1.0);
	vUv0 = getImageEffectUV((vertex_position.xy * 0.5 + 0.5) * uvMod.xy + uvMod.zw);
}
`,oT=`
uniform highp sampler2D uSceneDepthMap;
#ifndef SCREENSIZE
	#define SCREENSIZE
	uniform vec4 uScreenSize;
#endif
#ifndef VIEWMATRIX
	#define VIEWMATRIX
	uniform mat4 matrix_view;
#endif
#ifndef LINEARIZE_DEPTH
	#define LINEARIZE_DEPTH
	
	#ifndef CAMERAPLANES
		#define CAMERAPLANES
		uniform vec4 camera_params;
	#endif
	float linearizeDepth(float z) {
		if (camera_params.w == 0.0)
			return (camera_params.z * camera_params.y) / (camera_params.y + z * (camera_params.z - camera_params.y));
		else
			return camera_params.z + z * (camera_params.y - camera_params.z);
	}
#endif
float delinearizeDepth(float linearDepth) {
	if (camera_params.w == 0.0) {
		return (camera_params.y * (camera_params.z - linearDepth)) / (linearDepth * (camera_params.z - camera_params.y));
	} else {
		return (linearDepth - camera_params.z) / (camera_params.y - camera_params.z);
	}
}
float getLinearScreenDepth(vec2 uv) {
	#ifdef SCENE_DEPTHMAP_LINEAR
		#ifdef CAPS_TEXTURE_FLOAT_RENDERABLE
			return texture2D(uSceneDepthMap, uv).r;
		#else
			ivec2 textureSize = textureSize(uSceneDepthMap, 0);
			ivec2 texel = ivec2(uv * vec2(textureSize));
			vec4 data = texelFetch(uSceneDepthMap, texel, 0);
			uint intBits = 
				(uint(data.r * 255.0) << 24u) |
				(uint(data.g * 255.0) << 16u) |
				(uint(data.b * 255.0) << 8u) |
				uint(data.a * 255.0);
			return uintBitsToFloat(intBits);
		#endif
	#else
		return linearizeDepth(texture2D(uSceneDepthMap, uv).r);
	#endif
}
#ifndef VERTEXSHADER
	float getLinearScreenDepth() {
		vec2 uv = gl_FragCoord.xy * uScreenSize.zw;
		return getLinearScreenDepth(uv);
	}
#endif
float getLinearDepth(vec3 pos) {
	return -(matrix_view * vec4(pos, 1.0)).z;
}
`,lT=`
int getShadowCascadeIndex(vec4 shadowCascadeDistances, int shadowCascadeCount) {
	float depth = 1.0 / gl_FragCoord.w;
	vec4 comparisons = step(shadowCascadeDistances, vec4(depth));
	int cascadeIndex = int(dot(comparisons, vec4(1.0)));
	return min(cascadeIndex, shadowCascadeCount - 1);
}
int ditherShadowCascadeIndex(int cascadeIndex, vec4 shadowCascadeDistances, int shadowCascadeCount, float blendFactor) {
 
	if (cascadeIndex < shadowCascadeCount - 1) {
		float currentRangeEnd = shadowCascadeDistances[cascadeIndex];
		float transitionStart = blendFactor * currentRangeEnd;
		float depth = 1.0 / gl_FragCoord.w;
		if (depth > transitionStart) {
			float transitionFactor = smoothstep(transitionStart, currentRangeEnd, depth);
			float dither = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
			if (dither < transitionFactor) {
				cascadeIndex += 1;
			}
		}
	}
	return cascadeIndex;
}
vec3 fadeShadow(vec3 shadowCoord, vec4 shadowCascadeDistances) {				  
	float depth = 1.0 / gl_FragCoord.w;
	if (depth > shadowCascadeDistances.w) {
		shadowCoord.z = -9999999.0;
	}
	return shadowCoord;
}
`,cT=`
float linstep(float a, float b, float v) {
	return saturate((v - a) / (b - a));
}
float reduceLightBleeding(float pMax, float amount) {
	 return linstep(amount, 1.0, pMax);
}
float chebyshevUpperBound(vec2 moments, float mean, float minVariance, float lightBleedingReduction) {
	float variance = moments.y - (moments.x * moments.x);
	variance = max(variance, minVariance);
	float d = mean - moments.x;
	float pMax = variance / (variance + (d * d));
	pMax = reduceLightBleeding(pMax, lightBleedingReduction);
	return (mean <= moments.x ? 1.0 : pMax);
}
float calculateEVSM(vec3 moments, float Z, float vsmBias, float exponent) {
	Z = 2.0 * Z - 1.0;
	float warpedDepth = exp(exponent * Z);
	moments.xy += vec2(warpedDepth, warpedDepth*warpedDepth) * (1.0 - moments.z);
	float VSMBias = vsmBias;
	float depthScale = VSMBias * exponent * warpedDepth;
	float minVariance1 = depthScale * depthScale;
	return chebyshevUpperBound(moments.xy, warpedDepth, minVariance1, 0.1);
}
float VSM16(TEXTURE_ACCEPT(tex), vec2 texCoords, float resolution, float Z, float vsmBias, float exponent) {
	vec3 moments = texture2DLod(tex, texCoords, 0.0).xyz;
	return calculateEVSM(moments, Z, vsmBias, exponent);
}
float getShadowVSM16(TEXTURE_ACCEPT(shadowMap), vec3 shadowCoord, vec4 shadowParams, float exponent) {
	return VSM16(TEXTURE_PASS(shadowMap), shadowCoord.xy, shadowParams.x, shadowCoord.z, shadowParams.y, exponent);
}
float getShadowSpotVSM16(TEXTURE_ACCEPT(shadowMap), vec3 shadowCoord, vec4 shadowParams, float exponent, vec3 lightDir) {
	return VSM16(TEXTURE_PASS(shadowMap), shadowCoord.xy, shadowParams.x, length(lightDir) * shadowParams.w + shadowParams.z, shadowParams.y, exponent);
}
float VSM32(TEXTURE_ACCEPT(tex), vec2 texCoords, float resolution, float Z, float vsmBias, float exponent) {
	#ifdef CAPS_TEXTURE_FLOAT_FILTERABLE
		vec3 moments = texture2DLod(tex, texCoords, 0.0).xyz;
	#else
		float pixelSize = 1.0 / resolution;
		texCoords -= vec2(pixelSize);
		vec3 s00 = texture2DLod(tex, texCoords, 0.0).xyz;
		vec3 s10 = texture2DLod(tex, texCoords + vec2(pixelSize, 0), 0.0).xyz;
		vec3 s01 = texture2DLod(tex, texCoords + vec2(0, pixelSize), 0.0).xyz;
		vec3 s11 = texture2DLod(tex, texCoords + vec2(pixelSize), 0.0).xyz;
		vec2 fr = fract(texCoords * resolution);
		vec3 h0 = mix(s00, s10, fr.x);
		vec3 h1 = mix(s01, s11, fr.x);
		vec3 moments = mix(h0, h1, fr.y);
	#endif
	return calculateEVSM(moments, Z, vsmBias, exponent);
}
float getShadowVSM32(TEXTURE_ACCEPT(shadowMap), vec3 shadowCoord, vec4 shadowParams, float exponent) {
	return VSM32(TEXTURE_PASS(shadowMap), shadowCoord.xy, shadowParams.x, shadowCoord.z, shadowParams.y, exponent);
}
float getShadowSpotVSM32(TEXTURE_ACCEPT(shadowMap), vec3 shadowCoord, vec4 shadowParams, float exponent, vec3 lightDir) {
	float Z = length(lightDir) * shadowParams.w + shadowParams.z;
	return VSM32(TEXTURE_PASS(shadowMap), shadowCoord.xy, shadowParams.x, Z, shadowParams.y, exponent);
}
`,dT=`
float getShadowPCF1x1(SHADOWMAP_ACCEPT(shadowMap), vec3 shadowCoord, vec4 shadowParams) {
	return textureShadow(shadowMap, shadowCoord);
}
float getShadowSpotPCF1x1(SHADOWMAP_ACCEPT(shadowMap), vec3 shadowCoord, vec4 shadowParams) {
	return textureShadow(shadowMap, shadowCoord);
}
#ifndef WEBGPU
float getShadowOmniPCF1x1(samplerCubeShadow shadowMap, vec3 shadowCoord, vec4 shadowParams, vec3 lightDir) {
	float shadowZ = length(lightDir) * shadowParams.w + shadowParams.z;
	return texture(shadowMap, vec4(lightDir, shadowZ));
}
#endif
`,hT=`
float _getShadowPCF3x3(SHADOWMAP_ACCEPT(shadowMap), vec3 shadowCoord, vec3 shadowParams) {
	float z = shadowCoord.z;
	vec2 uv = shadowCoord.xy * shadowParams.x;
	float shadowMapSizeInv = 1.0 / shadowParams.x;
	vec2 base_uv = floor(uv + 0.5);
	float s = (uv.x + 0.5 - base_uv.x);
	float t = (uv.y + 0.5 - base_uv.y); 
	base_uv -= vec2(0.5);
	base_uv *= shadowMapSizeInv;
	float sum = 0.0;
	float uw0 = (3.0 - 2.0 * s);
	float uw1 = (1.0 + 2.0 * s);
	float u0 = (2.0 - s) / uw0 - 1.0;
	float u1 = s / uw1 + 1.0;
	float vw0 = (3.0 - 2.0 * t);
	float vw1 = (1.0 + 2.0 * t);
	float v0 = (2.0 - t) / vw0 - 1.0;
	float v1 = t / vw1 + 1.0;
	u0 = u0 * shadowMapSizeInv + base_uv.x;
	v0 = v0 * shadowMapSizeInv + base_uv.y;
	u1 = u1 * shadowMapSizeInv + base_uv.x;
	v1 = v1 * shadowMapSizeInv + base_uv.y;
	sum += uw0 * vw0 * textureShadow(shadowMap, vec3(u0, v0, z));
	sum += uw1 * vw0 * textureShadow(shadowMap, vec3(u1, v0, z));
	sum += uw0 * vw1 * textureShadow(shadowMap, vec3(u0, v1, z));
	sum += uw1 * vw1 * textureShadow(shadowMap, vec3(u1, v1, z));
	sum *= 1.0f / 16.0;
	return sum;
}
float getShadowPCF3x3(SHADOWMAP_ACCEPT(shadowMap), vec3 shadowCoord, vec4 shadowParams) {
	return _getShadowPCF3x3(SHADOWMAP_PASS(shadowMap), shadowCoord, shadowParams.xyz);
}
float getShadowSpotPCF3x3(SHADOWMAP_ACCEPT(shadowMap), vec3 shadowCoord, vec4 shadowParams) {
	return _getShadowPCF3x3(SHADOWMAP_PASS(shadowMap), shadowCoord, shadowParams.xyz);
}
#ifndef WEBGPU
float getShadowOmniPCF3x3(samplerCubeShadow shadowMap, vec4 shadowParams, vec3 dir) {
	
	float shadowZ = length(dir) * shadowParams.w + shadowParams.z;
	float z = 1.0 / float(textureSize(shadowMap, 0));
	vec3 tc = normalize(dir);
	mediump vec4 shadows;
	shadows.x = texture(shadowMap, vec4(tc + vec3( z, z, z), shadowZ));
	shadows.y = texture(shadowMap, vec4(tc + vec3(-z,-z, z), shadowZ));
	shadows.z = texture(shadowMap, vec4(tc + vec3(-z, z,-z), shadowZ));
	shadows.w = texture(shadowMap, vec4(tc + vec3( z,-z,-z), shadowZ));
	return dot(shadows, vec4(0.25));
}
float getShadowOmniPCF3x3(samplerCubeShadow shadowMap, vec3 shadowCoord, vec4 shadowParams, vec3 lightDir) {
	return getShadowOmniPCF3x3(shadowMap, shadowParams, lightDir);
}
#endif
`,fT=`
float _getShadowPCF5x5(SHADOWMAP_ACCEPT(shadowMap), vec3 shadowCoord, vec3 shadowParams) {
	float z = shadowCoord.z;
	vec2 uv = shadowCoord.xy * shadowParams.x;
	float shadowMapSizeInv = 1.0 / shadowParams.x;
	vec2 base_uv = floor(uv + 0.5);
	float s = (uv.x + 0.5 - base_uv.x);
	float t = (uv.y + 0.5 - base_uv.y);
	base_uv -= vec2(0.5);
	base_uv *= shadowMapSizeInv;
	float uw0 = (4.0 - 3.0 * s);
	float uw1 = 7.0;
	float uw2 = (1.0 + 3.0 * s);
	float u0 = (3.0 - 2.0 * s) / uw0 - 2.0;
	float u1 = (3.0 + s) / uw1;
	float u2 = s / uw2 + 2.0;
	float vw0 = (4.0 - 3.0 * t);
	float vw1 = 7.0;
	float vw2 = (1.0 + 3.0 * t);
	float v0 = (3.0 - 2.0 * t) / vw0 - 2.0;
	float v1 = (3.0 + t) / vw1;
	float v2 = t / vw2 + 2.0;
	float sum = 0.0;
	u0 = u0 * shadowMapSizeInv + base_uv.x;
	v0 = v0 * shadowMapSizeInv + base_uv.y;
	u1 = u1 * shadowMapSizeInv + base_uv.x;
	v1 = v1 * shadowMapSizeInv + base_uv.y;
	u2 = u2 * shadowMapSizeInv + base_uv.x;
	v2 = v2 * shadowMapSizeInv + base_uv.y;
	sum += uw0 * vw0 * textureShadow(shadowMap, vec3(u0, v0, z));
	sum += uw1 * vw0 * textureShadow(shadowMap, vec3(u1, v0, z));
	sum += uw2 * vw0 * textureShadow(shadowMap, vec3(u2, v0, z));
	sum += uw0 * vw1 * textureShadow(shadowMap, vec3(u0, v1, z));
	sum += uw1 * vw1 * textureShadow(shadowMap, vec3(u1, v1, z));
	sum += uw2 * vw1 * textureShadow(shadowMap, vec3(u2, v1, z));
	sum += uw0 * vw2 * textureShadow(shadowMap, vec3(u0, v2, z));
	sum += uw1 * vw2 * textureShadow(shadowMap, vec3(u1, v2, z));
	sum += uw2 * vw2 * textureShadow(shadowMap, vec3(u2, v2, z));
	sum *= 1.0f / 144.0;
	sum = saturate(sum);
	return sum;
}
float getShadowPCF5x5(SHADOWMAP_ACCEPT(shadowMap), vec3 shadowCoord, vec4 shadowParams) {
	return _getShadowPCF5x5(SHADOWMAP_PASS(shadowMap), shadowCoord, shadowParams.xyz);
}
float getShadowSpotPCF5x5(SHADOWMAP_ACCEPT(shadowMap), vec3 shadowCoord, vec4 shadowParams) {
	return _getShadowPCF5x5(SHADOWMAP_PASS(shadowMap), shadowCoord, shadowParams.xyz);
}
`,uT=`
#define PCSS_SAMPLE_COUNT 16
uniform float pcssDiskSamples[PCSS_SAMPLE_COUNT];
uniform float pcssSphereSamples[PCSS_SAMPLE_COUNT];
vec2 vogelDisk(int sampleIndex, float count, float phi, float r) {
	const float GoldenAngle = 2.4;
	float theta = float(sampleIndex) * GoldenAngle + phi;
	float sine = sin(theta);
	float cosine = cos(theta);
	return vec2(r * cosine, r * sine);
}
vec3 vogelSphere(int sampleIndex, float count, float phi, float r) {
	const float GoldenAngle = 2.4;
	float theta = float(sampleIndex) * GoldenAngle + phi;
	float weight = float(sampleIndex) / count;
	return vec3(cos(theta) * r, weight, sin(theta) * r);
}
float noise(vec2 screenPos) {
	const float PHI = 1.61803398874989484820459;
	return fract(sin(dot(screenPos * PHI, screenPos)) * screenPos.x);
}
float viewSpaceDepth(float depth, mat4 invProjection) {
	float z = depth * 2.0 - 1.0;
	vec4 clipSpace = vec4(0.0, 0.0, z, 1.0);
	vec4 viewSpace = invProjection * clipSpace;
	return viewSpace.z;
}
float PCSSBlockerDistance(TEXTURE_ACCEPT(shadowMap), vec2 sampleCoords[PCSS_SAMPLE_COUNT], vec2 shadowCoords, vec2 searchSize, float z, vec4 cameraParams) {
	float blockers = 0.0;
	float averageBlocker = 0.0;
	for (int i = 0; i < PCSS_SAMPLE_COUNT; i++) {
		vec2 offset = sampleCoords[i] * searchSize;
		vec2 sampleUV = shadowCoords + offset;
		float blocker = texture2DLod(shadowMap, sampleUV, 0.0).r;
		float isBlocking = step(blocker, z);
		blockers += isBlocking;
		averageBlocker += blocker * isBlocking;
	}
	if (blockers > 0.0)
		return averageBlocker / blockers;
	return -1.0;
}
float PCSS(TEXTURE_ACCEPT(shadowMap), vec3 shadowCoords, vec4 cameraParams, vec2 shadowSearchArea) {
	float receiverDepth = linearizeDepthWithParams(shadowCoords.z, cameraParams);
	vec2 samplePoints[PCSS_SAMPLE_COUNT];
	const float PI = 3.141592653589793;
	float noise = noise( gl_FragCoord.xy ) * 2.0 * PI;
	for (int i = 0; i < PCSS_SAMPLE_COUNT; i++) {
		float pcssPresample = pcssDiskSamples[i];
		samplePoints[i] = vogelDisk(i, float(PCSS_SAMPLE_COUNT), noise, pcssPresample);
	}
	float averageBlocker = PCSSBlockerDistance(TEXTURE_PASS(shadowMap), samplePoints, shadowCoords.xy, shadowSearchArea, receiverDepth, cameraParams);
	if (averageBlocker == -1.0) {
		return 1.0;
	} else {
		float depthDifference = (receiverDepth - averageBlocker) / 3.0;
		vec2 filterRadius = depthDifference * shadowSearchArea;
		float shadow = 0.0;
		for (int i = 0; i < PCSS_SAMPLE_COUNT; i ++)
		{
			vec2 sampleUV = samplePoints[i] * filterRadius;
			sampleUV = shadowCoords.xy + sampleUV;
			float depth = texture2DLod(shadowMap, sampleUV, 0.0).r;
			shadow += step(receiverDepth, depth);
		}
		return shadow / float(PCSS_SAMPLE_COUNT);
	} 
}
#ifndef WEBGPU
float PCSSCubeBlockerDistance(samplerCube shadowMap, vec3 lightDirNorm, vec3 samplePoints[PCSS_SAMPLE_COUNT], float z, float shadowSearchArea) {
	float blockers = 0.0;
	float averageBlocker = 0.0;
	for (int i = 0; i < PCSS_SAMPLE_COUNT; i++) {
		vec3 sampleDir = lightDirNorm + samplePoints[i] * shadowSearchArea;
		sampleDir = normalize(sampleDir);
		float blocker = textureCubeLod(shadowMap, sampleDir, 0.0).r;
		float isBlocking = step(blocker, z);
		blockers += isBlocking;
		averageBlocker += blocker * isBlocking;
	}
	if (blockers > 0.0)
		return averageBlocker / blockers;
	return -1.0;
}
float PCSSCube(samplerCube shadowMap, vec4 shadowParams, vec3 shadowCoords, vec4 cameraParams, float shadowSearchArea, vec3 lightDir) {
	
	vec3 samplePoints[PCSS_SAMPLE_COUNT];
	const float PI = 3.141592653589793;
	float noise = noise( gl_FragCoord.xy ) * 2.0 * PI;
	for (int i = 0; i < PCSS_SAMPLE_COUNT; i++) {
		float r = pcssSphereSamples[i];
		samplePoints[i] = vogelSphere(i, float(PCSS_SAMPLE_COUNT), noise, r);
	}
	float receiverDepth = length(lightDir) * shadowParams.w + shadowParams.z;
	vec3 lightDirNorm = normalize(lightDir);
	
	float averageBlocker = PCSSCubeBlockerDistance(shadowMap, lightDirNorm, samplePoints, receiverDepth, shadowSearchArea);
	if (averageBlocker == -1.0) {
		return 1.0;
	} else {
		float filterRadius = ((receiverDepth - averageBlocker) / averageBlocker) * shadowSearchArea;
		float shadow = 0.0;
		for (int i = 0; i < PCSS_SAMPLE_COUNT; i++)
		{
			vec3 offset = samplePoints[i] * filterRadius;
			vec3 sampleDir = lightDirNorm + offset;
			sampleDir = normalize(sampleDir);
			float depth = textureCubeLod(shadowMap, sampleDir, 0.0).r;
			shadow += step(receiverDepth, depth);
		}
		return shadow / float(PCSS_SAMPLE_COUNT);
	}
}
float getShadowOmniPCSS(samplerCube shadowMap, vec3 shadowCoord, vec4 shadowParams, vec4 cameraParams, vec2 shadowSearchArea, vec3 lightDir) {
	return PCSSCube(shadowMap, shadowParams, shadowCoord, cameraParams, shadowSearchArea.x, lightDir);
}
#endif
float getShadowSpotPCSS(TEXTURE_ACCEPT(shadowMap), vec3 shadowCoord, vec4 shadowParams, vec4 cameraParams, vec2 shadowSearchArea, vec3 lightDir) {
	return PCSS(TEXTURE_PASS(shadowMap), shadowCoord, cameraParams, shadowSearchArea);
}
`,pT=`
highp float fractSinRand(const in vec2 uv) {
	const float PI = 3.141592653589793;
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot(uv.xy, vec2(a, b)), sn = mod(dt, PI);
	return fract(sin(sn) * c);
}
struct VogelDiskData {
	float invNumSamples;
	float initialAngle;
	float currentPointId;
};
void prepareDiskConstants(out VogelDiskData data, int sampleCount, float randomSeed) {
	const float pi2 = 6.28318530718;
	data.invNumSamples = 1.0 / float(sampleCount);
	data.initialAngle = randomSeed * pi2;
	data.currentPointId = 0.0;
}
vec2 generateDiskSample(inout VogelDiskData data) {
	const float GOLDEN_ANGLE = 2.399963;
	float r = sqrt((data.currentPointId + 0.5) * data.invNumSamples);
	float theta = data.currentPointId * GOLDEN_ANGLE + data.initialAngle;
	vec2 offset = vec2(cos(theta), sin(theta)) * pow(r, 1.33);
	data.currentPointId += 1.0;
	return offset;
}
void PCSSFindBlocker(TEXTURE_ACCEPT(shadowMap), out float avgBlockerDepth, out int numBlockers,
	vec2 shadowCoords, float z, int shadowBlockerSamples, float searchWidthUv, float randomSeed) {
	VogelDiskData diskData;
	prepareDiskConstants(diskData, shadowBlockerSamples, randomSeed);
	float blockerSum = 0.0;
	numBlockers = 0;
	for( int i = 0; i < shadowBlockerSamples; ++i ) {
		vec2 diskUV = generateDiskSample(diskData);
		vec2 sampleUV = shadowCoords + diskUV * searchWidthUv;
		float shadowMapDepth = texture2DLod(shadowMap, sampleUV, 0.0).r;
		if ( shadowMapDepth < z ) {
			blockerSum += shadowMapDepth;
			numBlockers++;
		}
	}
	avgBlockerDepth = blockerSum / float(numBlockers);
}
float PCSSFilter(TEXTURE_ACCEPT(shadowMap), vec2 uv, float receiverDepth, int shadowSamples, float filterRadius, float randomSeed) {
	VogelDiskData diskData;
	prepareDiskConstants(diskData, shadowSamples, randomSeed);
	float sum = 0.0;
	for (int i = 0; i < shadowSamples; i++) {
		vec2 offsetUV = generateDiskSample(diskData) * filterRadius;
		float depth = texture2DLod(shadowMap, uv + offsetUV, 0.0).r;
		sum += step(receiverDepth, depth);
	}
	return sum / float(shadowSamples);
}
float PCSSDirectional(TEXTURE_ACCEPT(shadowMap), vec3 shadowCoords, vec4 cameraParams, vec4 softShadowParams) {
	float receiverDepth = shadowCoords.z;
	float receiverDepthClamped = min(receiverDepth, 0.9999);
	float randomSeed = fractSinRand(gl_FragCoord.xy);
	int shadowSamples = int(softShadowParams.x);
	int shadowBlockerSamples = int(softShadowParams.y);
	float penumbraSize = softShadowParams.z;
	float penumbraFalloff = softShadowParams.w;
	float orthoRadius = cameraParams.x;
	float depthRange = cameraParams.y - cameraParams.z;
	float worldPerUv = 2.0 * orthoRadius;
	float filterRadius;
	if (shadowBlockerSamples > 0) {
		float searchWidthUv = (penumbraSize * depthRange) / worldPerUv;
		float avgBlockerDepth = 0.0;
		int numBlockers = 0;
		PCSSFindBlocker(TEXTURE_PASS(shadowMap), avgBlockerDepth, numBlockers, shadowCoords.xy, receiverDepthClamped, shadowBlockerSamples, searchWidthUv, randomSeed);
		if (numBlockers < 1)
			return 1.0f;
		float worldDist = max((receiverDepth - avgBlockerDepth) * depthRange, 0.0);
		float t = clamp(worldDist / depthRange, 0.0, 1.0);
		float shape = 1.0 - pow(1.0 - t, penumbraFalloff);
		float penumbraWorld = shape * penumbraSize * depthRange;
		filterRadius = penumbraWorld / worldPerUv;
	} else {
		filterRadius = penumbraSize / worldPerUv;
	}
	return PCSSFilter(TEXTURE_PASS(shadowMap), shadowCoords.xy, receiverDepthClamped, shadowSamples, filterRadius, randomSeed);
}
float getShadowPCSS(TEXTURE_ACCEPT(shadowMap), vec3 shadowCoord, vec4 shadowParams, vec4 cameraParams, vec4 softShadowParams, vec3 lightDir) {
	return PCSSDirectional(TEXTURE_PASS(shadowMap), shadowCoord, cameraParams, softShadowParams);
}
`,mT=`
attribute float vertex_boneIndices;
uniform highp sampler2D texture_poseMap;
mat4 getBoneMatrix(const in float indexFloat) {
	int width = textureSize(texture_poseMap, 0).x;
	int index = int(indexFloat + 0.5) * 3;
	int iy = index / width;
	int ix = index % width;
	vec4 v1 = texelFetch(texture_poseMap, ivec2(ix + 0, iy), 0);
	vec4 v2 = texelFetch(texture_poseMap, ivec2(ix + 1, iy), 0);
	vec4 v3 = texelFetch(texture_poseMap, ivec2(ix + 2, iy), 0);
	return mat4(
		v1.x, v2.x, v3.x, 0,
		v1.y, v2.y, v3.y, 0,
		v1.z, v2.z, v3.z, 0,
		v1.w, v2.w, v3.w, 1
	);
}
`,_T=`
attribute vec4 vertex_boneWeights;
attribute vec4 vertex_boneIndices;
uniform highp sampler2D texture_poseMap;
void getBoneMatrix(const in int width, const in int index, out vec4 v1, out vec4 v2, out vec4 v3) {
	int v = index / width;
	int u = index % width;
	v1 = texelFetch(texture_poseMap, ivec2(u + 0, v), 0);
	v2 = texelFetch(texture_poseMap, ivec2(u + 1, v), 0);
	v3 = texelFetch(texture_poseMap, ivec2(u + 2, v), 0);
}
mat4 getSkinMatrix(const in vec4 indicesFloat, const in vec4 weights) {
	int width = textureSize(texture_poseMap, 0).x;
	ivec4 indices = ivec4(indicesFloat + 0.5) * 3;
	vec4 a1, a2, a3;
	getBoneMatrix(width, indices.x, a1, a2, a3);
	vec4 b1, b2, b3;
	getBoneMatrix(width, indices.y, b1, b2, b3);
	vec4 c1, c2, c3;
	getBoneMatrix(width, indices.z, c1, c2, c3);
	vec4 d1, d2, d3;
	getBoneMatrix(width, indices.w, d1, d2, d3);
	vec4 v1 = a1 * weights.x + b1 * weights.y + c1 * weights.z + d1 * weights.w;
	vec4 v2 = a2 * weights.x + b2 * weights.y + c2 * weights.z + d2 * weights.w;
	vec4 v3 = a3 * weights.x + b3 * weights.y + c3 * weights.z + d3 * weights.w;
	float one = dot(weights, vec4(1.0));
	return mat4(
		v1.x, v2.x, v3.x, 0,
		v1.y, v2.y, v3.y, 0,
		v1.z, v2.z, v3.z, 0,
		v1.w, v2.w, v3.w, one
	);
}
`,gT=`
	#define LIT_SKYBOX_INTENSITY
	#include "envProcPS"
	#include "gammaPS"
	#include "tonemappingPS"
	#ifdef PREPASS_PASS
		varying float vLinearDepth;
		#include "floatAsUintPS"
	#endif
	varying vec3 vViewDir;
	uniform float skyboxHighlightMultiplier;
	#if defined(SKY_FISHEYE) && !defined(SKYMESH)
		uniform float fisheye_k;
		uniform float fisheye_invK;
		uniform float fisheye_projMat00;
		uniform float fisheye_projMat11;
		uniform mat4 matrix_view;
		uniform mat3 cubeMapRotationMatrix;
		varying vec3 vClipXYW;
	#endif
	#ifdef SKY_CUBEMAP
		uniform samplerCube texture_cubeMap;
		#ifdef SKYMESH
			varying vec3 vWorldPos;
			uniform mat3 cubeMapRotationMatrix;
			uniform vec3 projectedSkydomeCenter;
		#endif
	#else
		#include "sphericalPS"
		#include "envAtlasPS"
		uniform sampler2D texture_envAtlas;
		uniform float mipLevel;
	#endif
	void main(void) {
		#ifdef PREPASS_PASS
			gl_FragColor = float2vec4(vLinearDepth);
		#else
			#if defined(SKY_FISHEYE) && !defined(SKYMESH)
				vec2 ndc = vClipXYW.xy / vClipXYW.z;
				float px = ndc.x / fisheye_projMat00;
				float py = ndc.y / fisheye_projMat11;
				float r = sqrt(px * px + py * py);
				float theta = fisheye_k * atan(r * fisheye_invK);
				float sinT = sin(theta);
				float cosT = cos(theta);
				vec3 camDir = (r > 1e-6)
					? vec3(px / r * sinT, py / r * sinT, -cosT)
					: vec3(0.0, 0.0, -1.0);
				vec3 dir = transpose(mat3(matrix_view)) * camDir;
				dir = dir * cubeMapRotationMatrix;
			#elif defined(SKY_CUBEMAP) && defined(SKYMESH)
				vec3 envDir = normalize(vWorldPos - projectedSkydomeCenter);
				vec3 dir = envDir * cubeMapRotationMatrix;
			#else
				vec3 dir = vViewDir;
			#endif
			#ifdef SKY_CUBEMAP
				dir.x *= -1.0;
				vec3 linear = {SKYBOX_DECODE_FNC}(textureCube(texture_cubeMap, dir));
			#else
				dir *= vec3(-1.0, 1.0, 1.0);
				vec2 uv = toSphericalUv(normalize(dir));
				vec3 linear = {SKYBOX_DECODE_FNC}(texture2D(texture_envAtlas, mapRoughnessUv(uv, mipLevel)));
			#endif
			if (any(greaterThanEqual(linear, vec3(64.0)))) {
				linear *= skyboxHighlightMultiplier;
			}
			gl_FragColor = vec4(gammaCorrectOutput(toneMap(processEnvironment(linear))), 1.0);
		#endif
	}
`,vT=`
attribute vec4 aPosition;
uniform mat4 matrix_view;
uniform mat4 matrix_projectionSkybox;
uniform mat3 cubeMapRotationMatrix;
varying vec3 vViewDir;
#ifdef SKY_FISHEYE
	varying vec3 vClipXYW;
#endif
#ifdef PREPASS_PASS
	varying float vLinearDepth;
#endif
#ifdef SKYMESH
	uniform mat4 matrix_model;
	varying vec3 vWorldPos;
#endif
void main(void) {
	mat4 view = matrix_view;
	#ifdef SKYMESH
		vec4 worldPos = matrix_model * aPosition;
		vWorldPos = worldPos.xyz;
		gl_Position = matrix_projectionSkybox * (view * worldPos);
		#ifdef PREPASS_PASS
			vLinearDepth = -(matrix_view * vec4(vWorldPos, 1.0)).z;
		#endif
	#else
		view[3][0] = view[3][1] = view[3][2] = 0.0;
		vViewDir = aPosition.xyz * cubeMapRotationMatrix;
		#ifdef SKY_FISHEYE
			vec4 viewPos = view * aPosition;
			gl_Position = vec4(viewPos.xy, 0.0, -viewPos.z);
			vClipXYW = vec3(gl_Position.xy, gl_Position.w);
		#else
			gl_Position = matrix_projectionSkybox * (view * aPosition);
		#endif
		#ifdef PREPASS_PASS
			vLinearDepth = -gl_Position.w;
		#endif
	#endif
	gl_Position.z = gl_Position.w - 1.0e-7;
}
`,ST=`
#ifdef STD_SPECULAR_CONSTANT
uniform vec3 material_specular;
#endif
void getSpecularity() {
	vec3 specularColor = vec3(1,1,1);
	#ifdef STD_SPECULAR_CONSTANT
	specularColor *= material_specular;
	#endif
	#ifdef STD_SPECULAR_TEXTURE
	specularColor *= {STD_SPECULAR_TEXTURE_DECODE}(texture2DBias({STD_SPECULAR_TEXTURE_NAME}, {STD_SPECULAR_TEXTURE_UV}, textureBias)).{STD_SPECULAR_TEXTURE_CHANNEL};
	#endif
	#ifdef STD_SPECULAR_VERTEX
	specularColor *= saturate(vVertexColor.{STD_SPECULAR_VERTEX_CHANNEL});
	#endif
	dSpecularity = specularColor;
}
`,TT=`
vec2 toSpherical(vec3 dir) {
	return vec2(dir.xz == vec2(0.0) ? 0.0 : atan(dir.x, dir.z), asin(dir.y));
}
vec2 toSphericalUv(vec3 dir) {
	const float PI = 3.141592653589793;
	vec2 uv = toSpherical(dir) / vec2(PI * 2.0, PI) + 0.5;
	return vec2(uv.x, 1.0 - uv.y);
}
`,ET=`
#ifdef STD_SPECULARITYFACTOR_CONSTANT
uniform float material_specularityFactor;
#endif
void getSpecularityFactor() {
	float specularityFactor = 1.0;
	#ifdef STD_SPECULARITYFACTOR_CONSTANT
	specularityFactor *= material_specularityFactor;
	#endif
	#ifdef STD_SPECULARITYFACTOR_TEXTURE
	specularityFactor *= texture2DBias({STD_SPECULARITYFACTOR_TEXTURE_NAME}, {STD_SPECULARITYFACTOR_TEXTURE_UV}, textureBias).{STD_SPECULARITYFACTOR_TEXTURE_CHANNEL};
	#endif
	#ifdef STD_SPECULARITYFACTOR_VERTEX
	specularityFactor *= saturate(vVertexColor.{STD_SPECULARITYFACTOR_VERTEX_CHANNEL});
	#endif
	dSpecularityFactor = specularityFactor;
}
`,yT=`
float getSpotEffect(vec3 lightSpotDir, float lightInnerConeAngle, float lightOuterConeAngle, vec3 lightDirNorm) {
	float cosAngle = dot(lightDirNorm, lightSpotDir);
	return smoothstep(lightOuterConeAngle, lightInnerConeAngle, cosAngle);
}
`,xT=`
	nineSlicedUv = vec2(vUv0.x, 1.0 - vUv0.y);
`,CT=`
	vec2 tileMask = step(vMask, vec2(0.99999));
	vec2 tileSize = 0.5 * (innerOffset.xy + innerOffset.zw);
	vec2 tileScale = vec2(1.0) / (vec2(1.0) - tileSize);
	vec2 clampedUv = mix(innerOffset.xy * 0.5, vec2(1.0) - innerOffset.zw * 0.5, fract((vTiledUv - tileSize) * tileScale));
	clampedUv = clampedUv * atlasRect.zw + atlasRect.xy;
	nineSlicedUv = vUv0 * tileMask + clampedUv * (vec2(1.0) - tileMask);
	nineSlicedUv.y = 1.0 - nineSlicedUv.y;
	
`,AT=`
	float dAlpha = 1.0;
	#if LIT_BLEND_TYPE != NONE || defined(LIT_ALPHA_TEST) || defined(LIT_ALPHA_TO_COVERAGE) || STD_OPACITY_DITHER != NONE
		#ifdef STD_OPACITY_TEXTURE_ALLOCATE
			uniform sampler2D texture_opacityMap;
		#endif
	#endif
	#ifdef FORWARD_PASS
		vec3 dAlbedo;
		vec3 dNormalW;
		vec3 dSpecularity = vec3(0.0);
		float dGlossiness = 0.0;
		#ifdef LIT_REFRACTION
			float dTransmission;
			float dThickness;
		#endif
		#ifdef LIT_SCENE_COLOR
			uniform sampler2D uSceneColorMap;
		#endif
		#ifdef LIT_SCREEN_SIZE
			uniform vec4 uScreenSize;
		#endif
		#ifdef LIT_TRANSFORMS
			uniform mat4 matrix_viewProjection;
			uniform mat4 matrix_model;
		#endif
		#ifdef STD_HEIGHT_MAP
			vec2 dUvOffset;
			#ifdef STD_HEIGHT_TEXTURE_ALLOCATE
				uniform sampler2D texture_heightMap;
			#endif
		#endif
		#ifdef STD_DIFFUSE_TEXTURE_ALLOCATE
			uniform sampler2D texture_diffuseMap;
		#endif
		#ifdef STD_DIFFUSEDETAIL_TEXTURE_ALLOCATE
			uniform sampler2D texture_diffuseDetailMap;
		#endif
		#ifdef STD_NORMAL_TEXTURE_ALLOCATE
			uniform sampler2D texture_normalMap;
		#endif
		#ifdef STD_NORMALDETAIL_TEXTURE_ALLOCATE
			uniform sampler2D texture_normalDetailMap;
		#endif
		#ifdef STD_THICKNESS_TEXTURE_ALLOCATE
			uniform sampler2D texture_thicknessMap;
		#endif
		#ifdef STD_REFRACTION_TEXTURE_ALLOCATE
			uniform sampler2D texture_refractionMap;
		#endif
		#ifdef LIT_IRIDESCENCE
			float dIridescence;
			float dIridescenceThickness;
			#ifdef STD_IRIDESCENCE_THICKNESS_TEXTURE_ALLOCATE
				uniform sampler2D texture_iridescenceThicknessMap;
			#endif
			#ifdef STD_IRIDESCENCE_TEXTURE_ALLOCATE
				uniform sampler2D texture_iridescenceMap;
			#endif
		#endif
		#ifdef LIT_CLEARCOAT
			float ccSpecularity;
			float ccGlossiness;
			vec3 ccNormalW;
		#endif
		#ifdef LIT_GGX_SPECULAR
			float dAnisotropy;
			vec2 dAnisotropyRotation;
		#endif
		#ifdef LIT_SPECULAR_OR_REFLECTION
			#ifdef LIT_SHEEN
				vec3 sSpecularity;
				float sGlossiness;
				#ifdef STD_SHEEN_TEXTURE_ALLOCATE
					uniform sampler2D texture_sheenMap;
				#endif
				#ifdef STD_SHEENGLOSS_TEXTURE_ALLOCATE
					uniform sampler2D texture_sheenGlossMap;
				#endif
			#endif
			#ifdef LIT_METALNESS
				float dMetalness;
				float dIor;
				#ifdef STD_METALNESS_TEXTURE_ALLOCATE
					uniform sampler2D texture_metalnessMap;
				#endif
			#endif
			#ifdef LIT_SPECULARITY_FACTOR
				float dSpecularityFactor;
				#ifdef STD_SPECULARITYFACTOR_TEXTURE_ALLOCATE
					uniform sampler2D texture_specularityFactorMap;
				#endif
			#endif
			#ifdef STD_SPECULAR_COLOR
				#ifdef STD_SPECULAR_TEXTURE_ALLOCATE
					uniform sampler2D texture_specularMap;
				#endif
			#endif
			#ifdef STD_GLOSS_TEXTURE_ALLOCATE
				uniform sampler2D texture_glossMap;
			#endif
		#endif
		#ifdef STD_AO
			float dAo;
			#ifdef STD_AO_TEXTURE_ALLOCATE
				uniform sampler2D texture_aoMap;
			#endif
			#ifdef STD_AODETAIL_TEXTURE_ALLOCATE
				uniform sampler2D texture_aoDetailMap;
			#endif
		#endif
		vec3 dEmission;
		#ifdef STD_EMISSIVE_TEXTURE_ALLOCATE
			uniform sampler2D texture_emissiveMap;
		#endif
		#ifdef LIT_CLEARCOAT
			#ifdef STD_CLEARCOAT_TEXTURE_ALLOCATE
				uniform sampler2D texture_clearCoatMap;
			#endif
			#ifdef STD_CLEARCOATGLOSS_TEXTURE_ALLOCATE
				uniform sampler2D texture_clearCoatGlossMap;
			#endif
			#ifdef STD_CLEARCOATNORMAL_TEXTURE_ALLOCATE
				uniform sampler2D texture_clearCoatNormalMap;
			#endif
		#endif
		
		#ifdef LIT_GGX_SPECULAR
			#ifdef STD_ANISOTROPY_TEXTURE_ALLOCATE
				uniform sampler2D texture_anisotropyMap;
			#endif
		#endif
		#if defined(STD_LIGHTMAP) || defined(STD_LIGHT_VERTEX_COLOR)
			vec3 dLightmap;
			#ifdef STD_LIGHT_TEXTURE_ALLOCATE
				uniform sampler2D texture_lightMap;
			#endif
		#endif
	#endif
	#include "litShaderCorePS"
`,wT=`
	#if LIT_BLEND_TYPE != NONE || defined(LIT_ALPHA_TEST) || defined(LIT_ALPHA_TO_COVERAGE) || STD_OPACITY_DITHER != NONE
		#include "opacityPS"
		#if defined(LIT_ALPHA_TEST)
			#include "alphaTestPS"
		#endif
		#if STD_OPACITY_DITHER != NONE
			#include "opacityDitherPS"
		#endif
	#endif
	#ifdef FORWARD_PASS
		#ifdef STD_HEIGHT_MAP
			#include "parallaxPS"
		#endif
		#include  "diffusePS"
		#ifdef LIT_NEEDS_NORMAL
			#include "normalMapPS"
		#endif
		#ifdef LIT_REFRACTION
			#include "transmissionPS"
			#include "thicknessPS"
		#endif
		#ifdef LIT_IRIDESCENCE
			#include "iridescencePS"
			#include "iridescenceThicknessPS"
		#endif
		#ifdef LIT_SPECULAR_OR_REFLECTION
			#ifdef LIT_SHEEN
				#include "sheenPS"
				#include "sheenGlossPS"
			#endif
			#ifdef LIT_METALNESS
				#include "metalnessPS"
				#include "iorPS"
			#endif
			#ifdef LIT_SPECULARITY_FACTOR
				#include "specularityFactorPS"
			#endif
			#ifdef STD_SPECULAR_COLOR
				#include "specularPS"
			#else
				void getSpecularity() { 
					dSpecularity = vec3(1);
				}
			#endif
			#include "glossPS"
		#endif
		#ifdef STD_AO
			#include "aoPS"
		#endif
		#include "emissivePS"
		#ifdef LIT_CLEARCOAT
			#include "clearCoatPS"
			#include "clearCoatGlossPS"
			#include "clearCoatNormalPS"
		#endif
		#if defined(LIT_SPECULAR) && defined(LIT_LIGHTING) && defined(LIT_GGX_SPECULAR)
			#include "anisotropyPS"
		#endif
		#if defined(STD_LIGHTMAP) || defined(STD_LIGHT_VERTEX_COLOR)
			#include "lightmapPS"
		#endif
	#endif
	void evaluateFrontend() {
		#if LIT_BLEND_TYPE != NONE || defined(LIT_ALPHA_TEST) || defined(LIT_ALPHA_TO_COVERAGE) || STD_OPACITY_DITHER != NONE
			getOpacity();
			#if defined(LIT_ALPHA_TEST)
				alphaTest(dAlpha);
			#endif
			#if STD_OPACITY_DITHER != NONE
				opacityDither(dAlpha * material_alphaDitherScale, 0.0);
			#endif
			litArgs_opacity = dAlpha;
		#endif
		#ifdef FORWARD_PASS
			#ifdef STD_HEIGHT_MAP
				getParallax();
			#endif
			getAlbedo();
			litArgs_albedo = dAlbedo;
			#ifdef LIT_NEEDS_NORMAL
				getNormal();
				litArgs_worldNormal = dNormalW;
			#endif
			#ifdef LIT_REFRACTION
				getRefraction();
				litArgs_transmission = dTransmission;
				getThickness();
				litArgs_thickness = dThickness;
				#ifdef LIT_DISPERSION
					litArgs_dispersion = material_dispersion;
				#endif
			#endif
			#ifdef LIT_IRIDESCENCE
				getIridescence();
				getIridescenceThickness();
				litArgs_iridescence_intensity = dIridescence;
				litArgs_iridescence_thickness = dIridescenceThickness;
			#endif
			#ifdef LIT_SPECULAR_OR_REFLECTION
				#ifdef LIT_SHEEN
					getSheen();
					litArgs_sheen_specularity = sSpecularity;
					getSheenGlossiness();
					litArgs_sheen_gloss = sGlossiness;
				#endif
				#ifdef LIT_METALNESS
					getMetalness();
					litArgs_metalness = dMetalness;
					getIor();
					litArgs_ior = dIor;
				#endif
				#ifdef LIT_SPECULARITY_FACTOR
					getSpecularityFactor();
					litArgs_specularityFactor = dSpecularityFactor;
				#endif
				getGlossiness();
				getSpecularity();
				litArgs_specularity = dSpecularity;
				litArgs_gloss = dGlossiness;
			#endif
			#ifdef STD_AO
				getAO();
				litArgs_ao = dAo;
			#endif
			getEmission();
			litArgs_emission = dEmission;
			#ifdef LIT_CLEARCOAT
				getClearCoat();
				getClearCoatGlossiness();
				getClearCoatNormal();
				litArgs_clearcoat_specularity = ccSpecularity;
				litArgs_clearcoat_gloss = ccGlossiness;
				litArgs_clearcoat_worldNormal = ccNormalW;
			#endif
			#if defined(LIT_SPECULAR) && defined(LIT_LIGHTING) && defined(LIT_GGX_SPECULAR)
				getAnisotropy();
			#endif
			#if defined(STD_LIGHTMAP) || defined(STD_LIGHT_VERTEX_COLOR)
				getLightMap();
				litArgs_lightmap = dLightmap;
				#ifdef STD_LIGHTMAP_DIR
					litArgs_lightmapDir = dLightmapDir;
				#endif
			#endif
		#endif
	}
`,LT=`
#ifdef LIT_TANGENTS
	#define TBN_TANGENTS
#else
	#if defined(LIT_USE_NORMALS) || defined(LIT_USE_CLEARCOAT_NORMALS)
		#define TBN_DERIVATIVES
	#endif
#endif
#if defined(TBN_DERIVATIVES)
	uniform float tbnBasis;
#endif
void getTBN(vec3 tangent, vec3 binormal, vec3 normal) {
	#ifdef TBN_TANGENTS
		dTBN = mat3(normalize(tangent), normalize(binormal), normalize(normal));
	#elif defined(TBN_DERIVATIVES)
		vec2 uv = {lightingUv};
		vec3 dp1 = dFdx( vPositionW );
		vec3 dp2 = dFdy( vPositionW );
		vec2 duv1 = dFdx( uv );
		vec2 duv2 = dFdy( uv );
		vec3 dp2perp = cross( dp2, normal );
		vec3 dp1perp = cross( normal, dp1 );
		vec3 T = dp2perp * duv1.x + dp1perp * duv2.x;
		vec3 B = dp2perp * duv1.y + dp1perp * duv2.y;
		float denom = max( dot(T,T), dot(B,B) );
		float invmax = (denom == 0.0) ? 0.0 : tbnBasis / sqrt( denom );
		dTBN = mat3(T * invmax, -B * invmax, normal );
	#else
		vec3 B = cross(normal, vObjectSpaceUpW);
		vec3 T = cross(normal, B);
		if (dot(B,B)==0.0)
		{
			float major=max(max(normal.x, normal.y), normal.z);
			if (normal.x == major)
			{
				B = cross(normal, vec3(0,1,0));
				T = cross(normal, B);
			}
			else if (normal.y == major)
			{
				B = cross(normal, vec3(0,0,1));
				T = cross(normal, B);
			}
			else if (normal.z == major)
			{
				B = cross(normal, vec3(1,0,0));
				T = cross(normal, B);
			}
		}
		dTBN = mat3(normalize(T), normalize(B), normalize(normal));
	#endif
}
`,DT=`
#ifdef STD_THICKNESS_CONSTANT
uniform float material_thickness;
#endif
void getThickness() {
	dThickness = 1.0;
	#ifdef STD_THICKNESS_CONSTANT
	dThickness *= material_thickness;
	#endif
	#ifdef STD_THICKNESS_TEXTURE
	dThickness *= texture2DBias({STD_THICKNESS_TEXTURE_NAME}, {STD_THICKNESS_TEXTURE_UV}, textureBias).{STD_THICKNESS_TEXTURE_CHANNEL};
	#endif
	#ifdef STD_THICKNESS_VERTEX
	dThickness *= saturate(vVertexColor.{STD_THICKNESS_VERTEX_CHANNEL});
	#endif
}
`,PT=`
#ifndef TONEMAP_NO_EXPOSURE_UNIFORM
	#if TONEMAP != NONE
		uniform float exposure;
		float getExposure() { return exposure; }
	#else
		float getExposure() { return 1.0; }
	#endif
#endif
#if (TONEMAP == NONE)
	#include "tonemappingNonePS"
#elif TONEMAP == FILMIC
	#include "tonemappingFilmicPS"
#elif TONEMAP == LINEAR
	#include "tonemappingLinearPS"
#elif TONEMAP == HEJL
	#include "tonemappingHejlPS"
#elif TONEMAP == ACES
	#include "tonemappingAcesPS"
#elif TONEMAP == ACES2
	#include "tonemappingAces2PS"
#elif TONEMAP == NEUTRAL
	#include "tonemappingNeutralPS"
#endif
`,IT=`
vec3 toneMap(vec3 color) {
	float tA = 2.51;
	float tB = 0.03;
	float tC = 2.43;
	float tD = 0.59;
	float tE = 0.14;
	vec3 x = color * getExposure();
	return (x*(tA*x+tB))/(x*(tC*x+tD)+tE);
}
`,bT=`
const mat3 ACESInputMat = mat3(
	0.59719, 0.35458, 0.04823,
	0.07600, 0.90834, 0.01566,
	0.02840, 0.13383, 0.83777
);
const mat3 ACESOutputMat = mat3(
	 1.60475, -0.53108, -0.07367,
	-0.10208,  1.10813, -0.00605,
	-0.00327, -0.07276,  1.07602
);
vec3 RRTAndODTFit(vec3 v) {
	vec3 a = v * (v + 0.0245786) - 0.000090537;
	vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081;
	return a / b;
}
vec3 toneMap(vec3 color) {
	color *= getExposure() / 0.6;
	color = color * ACESInputMat;
	color = RRTAndODTFit(color);
	color = color * ACESOutputMat;
	color = clamp(color, 0.0, 1.0);
	return color;
}
`,RT=`
const float A =  0.15;
const float B =  0.50;
const float C =  0.10;
const float D =  0.20;
const float E =  0.02;
const float F =  0.30;
const float W =  11.2;
vec3 uncharted2Tonemap(vec3 x) {
	 return ((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;
}
vec3 toneMap(vec3 color) {
	color = uncharted2Tonemap(color * getExposure());
	vec3 whiteScale = 1.0 / uncharted2Tonemap(vec3(W,W,W));
	color = color * whiteScale;
	return color;
}
`,MT=`
vec3 toneMap(vec3 color) {
	color *= getExposure();
	const float  A = 0.22, B = 0.3, C = .1, D = 0.2, E = .01, F = 0.3;
	const float Scl = 1.25;
	vec3 h = max( vec3(0.0), color - vec3(0.004) );
	return (h*((Scl*A)*h+Scl*vec3(C*B,C*B,C*B))+Scl*vec3(D*E,D*E,D*E)) / (h*(A*h+vec3(B,B,B))+vec3(D*F,D*F,D*F)) - Scl*vec3(E/F,E/F,E/F);
}
`,NT=`
vec3 toneMap(vec3 color) {
	return color * getExposure();
}
`,OT=`
vec3 toneMap(vec3 color) {
	color *= getExposure();
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
`,FT=`
vec3 toneMap(vec3 color) {
	return color;
}
`,UT=`
#ifdef PIXELSNAP
uniform vec4 uScreenSize;
#endif
#ifdef SCREENSPACE
uniform float projectionFlipY;
#endif
vec4 evalWorldPosition(vec3 vertexPosition, mat4 modelMatrix) {
	vec3 localPos = getLocalPosition(vertexPosition);
	#ifdef NINESLICED
		localPos.xz *= outerScale;
		vec2 positiveUnitOffset = clamp(vertexPosition.xz, vec2(0.0), vec2(1.0));
		vec2 negativeUnitOffset = clamp(-vertexPosition.xz, vec2(0.0), vec2(1.0));
		localPos.xz += (-positiveUnitOffset * innerOffset.xy + negativeUnitOffset * innerOffset.zw) * vertex_texCoord0.xy;
		vTiledUv = (localPos.xz - outerScale + innerOffset.xy) * -0.5 + 1.0;
		localPos.xz *= -0.5;
		localPos = localPos.xzy;
	#endif
	vec4 posW = modelMatrix * vec4(localPos, 1.0);
	#ifdef SCREENSPACE
		posW.zw = vec2(0.0, 1.0);
	#endif
	return posW;
}
vec4 getPosition() {
	dModelMatrix = getModelMatrix();
	vec4 posW = evalWorldPosition(vertex_position.xyz, dModelMatrix);
	dPositionW = posW.xyz;
	vec4 screenPos;
	#ifdef UV1LAYOUT
		screenPos = vec4(vertex_texCoord1.xy * 2.0 - 1.0, 0.5, 1);
		#ifdef WEBGPU
			screenPos.y *= -1.0;
		#endif
	#else
		#ifdef SCREENSPACE
			screenPos = posW;
			screenPos.y *= projectionFlipY;
		#else
			screenPos = matrix_viewProjection * posW;
		#endif
		#ifdef PIXELSNAP
			screenPos.xy = (screenPos.xy * 0.5) + 0.5;
			screenPos.xy *= uScreenSize.xy;
			screenPos.xy = floor(screenPos.xy);
			screenPos.xy *= uScreenSize.zw;
			screenPos.xy = (screenPos.xy * 2.0) - 1.0;
		#endif
	#endif
	return screenPos;
}
vec3 getWorldPosition() {
	return dPositionW;
}
`,BT=`
attribute vec4 vertex_position;
uniform mat4 matrix_viewProjection;
uniform mat4 matrix_model;
#ifdef MORPHING
	uniform vec2 morph_tex_params;
	attribute uint morph_vertex_id;
	ivec2 getTextureMorphCoords() {
		ivec2 textureSize = ivec2(morph_tex_params);
		int morphGridV = int(morph_vertex_id) / textureSize.x;
		int morphGridU = int(morph_vertex_id) - (morphGridV * textureSize.x);
		#ifdef WEBGPU
			morphGridV = textureSize.y - morphGridV - 1;
		#endif
		return ivec2(morphGridU, morphGridV);
	}
	#ifdef MORPHING_POSITION
		#ifdef MORPHING_INT
			uniform vec3 aabbSize;
			uniform vec3 aabbMin;
			uniform usampler2D morphPositionTex;
		#else
			uniform highp sampler2D morphPositionTex;
		#endif
	#endif
#endif
#ifdef defined(BATCH)
	#include "skinBatchVS"
	mat4 getModelMatrix() {
		return getBoneMatrix(vertex_boneIndices);
	}
#elif defined(SKIN)
	#include "skinVS"
	mat4 getModelMatrix() {
		return matrix_model * getSkinMatrix(vertex_boneIndices, vertex_boneWeights);
	}
#elif defined(INSTANCING)
	#include "transformInstancingVS"
#else
	mat4 getModelMatrix() {
		return matrix_model;
	}
#endif
vec3 getLocalPosition(vec3 vertexPosition) {
	vec3 localPos = vertexPosition;
	#ifdef MORPHING_POSITION
		ivec2 morphUV = getTextureMorphCoords();
		#ifdef MORPHING_INT
			vec3 morphPos = vec3(texelFetch(morphPositionTex, ivec2(morphUV), 0).xyz) / 65535.0 * aabbSize + aabbMin;
		#else
			vec3 morphPos = texelFetch(morphPositionTex, ivec2(morphUV), 0).xyz;
		#endif
		localPos += morphPos;
	#endif
	return localPos;
}
`,kT=`
attribute vec4 instance_line1;
attribute vec4 instance_line2;
attribute vec4 instance_line3;
attribute vec4 instance_line4;
mat4 getModelMatrix() {
	return matrix_model * mat4(instance_line1, instance_line2, instance_line3, instance_line4);
}
`,zT=`
#ifdef STD_REFRACTION_CONSTANT
uniform float material_refraction;
#endif
void getRefraction() {
	float refraction = 1.0;
	#ifdef STD_REFRACTION_CONSTANT
	refraction = material_refraction;
	#endif
	#ifdef STD_REFRACTION_TEXTURE
	refraction *= texture2DBias({STD_REFRACTION_TEXTURE_NAME}, {STD_REFRACTION_TEXTURE_UV}, textureBias).{STD_REFRACTION_TEXTURE_CHANNEL};
	#endif
	#ifdef STD_REFRACTION_VERTEX
	refraction *= saturate(vVertexColor.{STD_REFRACTION_VERTEX_CHANNEL});
	#endif
	dTransmission = refraction;
}
`,VT=`
void handleTwoSidedLighting() {
	if (!gl_FrontFacing) dTBN[2] = -dTBN[2];
}
`,GT=`
#ifdef NINESLICED
	vec2 getUv0() {
		vec2 uv = vertex_position.xz;
		vec2 positiveUnitOffset = clamp(vertex_position.xz, vec2(0.0), vec2(1.0));
		vec2 negativeUnitOffset = clamp(-vertex_position.xz, vec2(0.0), vec2(1.0));
		uv += (-positiveUnitOffset * innerOffset.xy + negativeUnitOffset * innerOffset.zw) * vertex_texCoord0.xy;
		uv = uv * -0.5 + 0.5;
		uv = uv * atlasRect.zw + atlasRect.xy;
		vMask = vertex_texCoord0.xy;
		return uv;
	}
#else
	vec2 getUv0() {
		return vertex_texCoord0;
	}
#endif
`,HT=`
vec2 getUv1() {
	return vertex_texCoord1;
}
`,WT=`
vUV{TRANSFORM_UV_{i}}_{TRANSFORM_ID_{i}} = vec2(
	dot(vec3(uv{TRANSFORM_UV_{i}}, 1), {TRANSFORM_NAME_{i}}0),
	dot(vec3(uv{TRANSFORM_UV_{i}}, 1), {TRANSFORM_NAME_{i}}1)
);
`,XT=`
	uniform vec3 {TRANSFORM_NAME_{i}}0;
	uniform vec3 {TRANSFORM_NAME_{i}}1;
`,YT=`
void getViewDir() {
	dViewDirW = normalize(view_position - vPositionW);
}
`;const $T={alphaTestPS:rS,ambientPS:nS,anisotropyPS:oS,aoPS:lS,aoDiffuseOccPS:cS,aoSpecOccPS:dS,bakeDirLmEndPS:hS,bakeLmEndPS:fS,basePS:uS,baseNineSlicedPS:pS,baseNineSlicedTiledPS:mS,bayerPS:_S,blurVSMPS:gS,clearCoatPS:vS,clearCoatGlossPS:SS,clearCoatNormalPS:TS,clusteredLightCookiesPS:yS,clusteredLightShadowsPS:xS,clusteredLightUtilsPS:ES,clusteredLightPS:CS,combinePS:AS,cookieBlit2DPS:wS,cookieBlitCubePS:LS,cookieBlitVS:DS,cookiePS:PS,cubeMapProjectPS:IS,cubeMapRotatePS:bS,debugOutputPS:RS,debugProcessFrontendPS:MS,detailModesPS:OS,diffusePS:FS,decodePS:NS,emissivePS:US,encodePS:BS,endPS:kS,envAtlasPS:zS,envProcPS:VS,falloffInvSquaredPS:GS,falloffLinearPS:HS,floatAsUintPS:WS,fogPS:XS,fresnelSchlickPS:YS,frontendCodePS:"",frontendDeclPS:"",fullscreenQuadVS:$S,gammaPS:qS,gles3PS:Vd,gles3VS:Gd,glossPS:jS,quadVS:KS,immediateLinePS:ZS,immediateLineVS:JS,iridescenceDiffractionPS:QS,iridescencePS:e0,iridescenceThicknessPS:t0,iorPS:i0,lightDeclarationPS:s0,lightDiffuseLambertPS:a0,lightDirPointPS:r0,lightEvaluationPS:n0,lightFunctionLightPS:o0,lightFunctionShadowPS:l0,lightingPS:c0,lightmapAddPS:d0,lightmapPS:h0,lightSpecularAnisoGGXPS:f0,lightSpecularGGXPS:u0,lightSpecularBlinnPS:p0,lightSheenPS:m0,linearizeDepthPS:_0,litForwardBackendPS:g0,litForwardDeclarationPS:v0,litForwardMainPS:S0,litForwardPostCodePS:T0,litForwardPreCodePS:E0,litMainPS:y0,litMainVS:x0,litOtherMainPS:C0,litShaderArgsPS:A0,litShaderCorePS:w0,litShadowMainPS:L0,litUserDeclarationPS:"",litUserDeclarationVS:"",litUserCodePS:"",litUserCodeVS:"",litUserMainStartPS:"",litUserMainStartVS:"",litUserMainEndPS:"",litUserMainEndVS:"",ltcPS:D0,metalnessPS:P0,metalnessModulatePS:b0,morphPS:R0,morphVS:M0,msdfPS:I0,msdfVS:N0,normalVS:O0,normalCoreVS:F0,normalMapPS:U0,opacityPS:B0,opacityDitherPS:k0,outlineDeclarationPS:z0,outlineOutputPS:V0,outputPS:G0,outputAlphaPS:H0,outputTex2DPS:W0,sheenPS:X0,sheenGlossPS:Y0,parallaxPS:$0,pickPS:q0,reflDirPS:j0,reflDirAnisoPS:K0,reflectionCCPS:Z0,reflectionCubePS:J0,reflectionEnvHQPS:Q0,reflectionEnvPS:eT,reflectionSpherePS:tT,reflectionSheenPS:iT,refractionCubePS:sT,refractionDynamicPS:aT,reprojectPS:rT,reprojectVS:nT,screenDepthPS:oT,shadowCascadesPS:lT,shadowEVSMPS:cT,shadowPCF1PS:dT,shadowPCF3PS:hT,shadowPCF5PS:fT,shadowPCSSPS:uT,shadowSoftPS:pT,skinBatchVS:mT,skinVS:_T,skyboxPS:gT,skyboxVS:vT,specularPS:ST,sphericalPS:TT,specularityFactorPS:ET,spotPS:yT,startNineSlicedPS:xT,startNineSlicedTiledPS:CT,stdDeclarationPS:AT,stdFrontEndPS:wT,TBNPS:LT,thicknessPS:DT,tonemappingPS:PT,tonemappingAcesPS:IT,tonemappingAces2PS:bT,tonemappingFilmicPS:RT,tonemappingHejlPS:MT,tonemappingLinearPS:NT,tonemappingNeutralPS:OT,tonemappingNonePS:FT,transformVS:UT,transformCoreVS:BT,transformInstancingVS:kT,transmissionPS:zT,twoSidedLightingPS:VT,uv0VS:GT,uv1VS:HT,uvTransformVS:WT,uvTransformUniformsPS:XT,viewDirPS:YT,webgpuPS:Hd,webgpuVS:Wd};var qT=`
uniform alpha_ref: f32;
fn alphaTest(a: f32) {
	if (a < uniform.alpha_ref) {
		discard;
	}
}
`,jT=`
#if LIT_AMBIENT_SOURCE == AMBIENTSH
	uniform ambientSH: array<vec3f, 9>;
#endif
#if LIT_AMBIENT_SOURCE == ENVALATLAS
	#include "envAtlasPS"
	#ifndef ENV_ATLAS
		#define ENV_ATLAS
		var texture_envAtlas: texture_2d<f32>;
		var texture_envAtlasSampler: sampler;
	#endif
#endif
fn addAmbient(worldNormal: vec3f) {
	#ifdef LIT_AMBIENT_SOURCE == AMBIENTSH
		let n: vec3f = cubeMapRotate(worldNormal);
		let color: vec3f =
			uniform.ambientSH[0] +
			uniform.ambientSH[1] * n.x +
			uniform.ambientSH[2] * n.y +
			uniform.ambientSH[3] * n.z +
			uniform.ambientSH[4] * n.x * n.z +
			uniform.ambientSH[5] * n.z * n.y +
			uniform.ambientSH[6] * n.y * n.x +
			uniform.ambientSH[7] * (3.0 * n.z * n.z - 1.0) +
			uniform.ambientSH[8] * (n.x * n.x - n.y * n.y);
		dDiffuseLight += processEnvironment(max(color, vec3f(0.0)));
	#endif
	#if LIT_AMBIENT_SOURCE == ENVALATLAS
		let dir: vec3f = normalize(cubeMapRotate(worldNormal) * vec3f(-1.0, 1.0, 1.0));
		let uv: vec2f = mapUv(toSphericalUv(dir), vec4f(128.0, 256.0 + 128.0, 64.0, 32.0) / atlasSize);
		let raw: vec4f = textureSample(texture_envAtlas, texture_envAtlasSampler, uv);
		let linear: vec3f = {ambientDecode}(raw);
		dDiffuseLight += processEnvironment(linear);
	#endif
	#if LIT_AMBIENT_SOURCE == CONSTANT
		dDiffuseLight += uniform.light_globalAmbient;
	#endif
}
`,KT=`
#ifdef LIT_GGX_SPECULAR
	uniform material_anisotropyIntensity: f32;
	uniform material_anisotropyRotation: vec2f;
#endif
fn getAnisotropy() {
	dAnisotropy = 0.0;
	dAnisotropyRotation = vec2f(1.0, 0.0);
#ifdef LIT_GGX_SPECULAR
	dAnisotropy = uniform.material_anisotropyIntensity;
	dAnisotropyRotation = uniform.material_anisotropyRotation;
#endif
#ifdef STD_ANISOTROPY_TEXTURE
	let anisotropyTex: vec3f = textureSampleBias({STD_ANISOTROPY_TEXTURE_NAME}, {STD_ANISOTROPY_TEXTURE_NAME}Sampler, {STD_ANISOTROPY_TEXTURE_UV}, uniform.textureBias).rgb;
	dAnisotropy *= anisotropyTex.b;
	let anisotropyRotationFromTex: vec2f = anisotropyTex.rg * 2.0 - vec2f(1.0);
	let rotationMatrix: mat2x2f = mat2x2f(dAnisotropyRotation.x, dAnisotropyRotation.y, -dAnisotropyRotation.y, dAnisotropyRotation.x);
	dAnisotropyRotation = rotationMatrix * anisotropyRotationFromTex;
#endif
	dAnisotropy = clamp(dAnisotropy, 0.0, 1.0);
}
`,ZT=`
#if defined(STD_AO_TEXTURE) || defined(STD_AO_VERTEX)
	uniform material_aoIntensity: f32;
#endif
#ifdef STD_AODETAIL_TEXTURE
	#include "detailModesPS"
#endif
fn getAO() {
	dAo = 1.0;
	#ifdef STD_AO_TEXTURE
		var aoBase: f32 = textureSampleBias({STD_AO_TEXTURE_NAME}, {STD_AO_TEXTURE_NAME}Sampler, {STD_AO_TEXTURE_UV}, uniform.textureBias).{STD_AO_TEXTURE_CHANNEL};
		#ifdef STD_AODETAIL_TEXTURE
			var aoDetail: f32 = textureSampleBias({STD_AODETAIL_TEXTURE_NAME}, {STD_AODETAIL_TEXTURE_NAME}Sampler, {STD_AODETAIL_TEXTURE_UV}, uniform.textureBias).{STD_AODETAIL_TEXTURE_CHANNEL};
			aoBase = detailMode_{STD_AODETAIL_DETAILMODE}(vec3f(aoBase), vec3f(aoDetail)).r;
		#endif
		dAo = dAo * aoBase;
	#endif
	#ifdef STD_AO_VERTEX
		dAo = dAo * saturate(vVertexColor.{STD_AO_VERTEX_CHANNEL});
	#endif
	#if defined(STD_AO_TEXTURE) || defined(STD_AO_VERTEX)
		dAo = mix(1.0, dAo, uniform.material_aoIntensity);
	#endif
}
`,JT=`
fn occludeDiffuse(ao: f32) {
	dDiffuseLight = dDiffuseLight * ao;
}
`,QT=`
#if LIT_OCCLUDE_SPECULAR != NONE
	#ifdef LIT_OCCLUDE_SPECULAR_FLOAT
		uniform material_occludeSpecularIntensity: f32;
	#endif
#endif
fn occludeSpecular(gloss: f32, ao: f32, worldNormal: vec3f, viewDir: vec3f) {
	#if LIT_OCCLUDE_SPECULAR == AO
		#ifdef LIT_OCCLUDE_SPECULAR_FLOAT
			var specOcc: f32 = mix(1.0, ao, uniform.material_occludeSpecularIntensity);
		#else
			var specOcc: f32 = ao;
		#endif
	#endif
	#if LIT_OCCLUDE_SPECULAR == GLOSSDEPENDENT
		var specPow: f32 = exp2(gloss * 11.0);
		var specOcc: f32 = saturate(pow(dot(worldNormal, viewDir) + ao, 0.01 * specPow) - 1.0 + ao);
		#ifdef LIT_OCCLUDE_SPECULAR_FLOAT
			specOcc = mix(1.0, specOcc, uniform.material_occludeSpecularIntensity);
		#endif
	#endif
	#if LIT_OCCLUDE_SPECULAR != NONE
		dSpecularLight = dSpecularLight * specOcc;
		dReflection = dReflection * specOcc;
		#ifdef LIT_SHEEN
			sSpecularLight = sSpecularLight * specOcc;
			sReflection = sReflection * specOcc;
		#endif
	#endif
}
`,eE=`
	let dirLm = textureSample(texture_dirLightMap, texture_dirLightMapSampler, vUv1);
	if (uniform.bakeDir > 0.5) {
		if (dAtten > 0.00001) {
			let unpacked_dir = dirLm.xyz * 2.0 - vec3f(1.0);
			dAtten = clamp(dAtten, 0.0, 1.0);
			let combined_dir = dLightDirNormW.xyz * dAtten + unpacked_dir * dirLm.w;
			let finalRgb = normalize(combined_dir) * 0.5 + vec3f(0.5);
			let finalA = max(dirLm.w + dAtten, 1.0 / 255.0);
			output.color = vec4f(finalRgb, finalA);
		} else {
			output.color = dirLm;
		}
	} else {
		let alpha_min = select(0.0, 1.0 / 255.0, dAtten > 0.00001);
		let finalA = max(dirLm.w, alpha_min);
		output.color = vec4f(dirLm.rgb, finalA);
	}
`,tE=`
#ifdef LIT_LIGHTMAP_BAKING_ADD_AMBIENT
	dDiffuseLight = ((dDiffuseLight - 0.5) * max(uniform.ambientBakeOcclusionContrast + 1.0, 0.0)) + 0.5;
	dDiffuseLight = dDiffuseLight + vec3f(uniform.ambientBakeOcclusionBrightness);
	dDiffuseLight = saturate3(dDiffuseLight);
	dDiffuseLight = dDiffuseLight * dAmbientLight;
#endif
#ifdef LIGHTMAP_RGBM
	var temp_color_rgbm = vec4f(dDiffuseLight, 1.0);
	temp_color_rgbm = vec4f(pow(temp_color_rgbm.rgb, vec3f(0.5)), temp_color_rgbm.a);
	temp_color_rgbm = vec4f(temp_color_rgbm.rgb / 8.0, temp_color_rgbm.a);
	let max_g_b = max(temp_color_rgbm.g, max(temp_color_rgbm.b, 1.0 / 255.0));
	let max_rgb = max(temp_color_rgbm.r, max_g_b);
	temp_color_rgbm.a = clamp(max_rgb, 0.0, 1.0);
	temp_color_rgbm.a = ceil(temp_color_rgbm.a * 255.0) / 255.0;
	temp_color_rgbm = vec4f(temp_color_rgbm.rgb / temp_color_rgbm.a, temp_color_rgbm.a);
	output.color = temp_color_rgbm;
#else
	output.color = vec4f(dDiffuseLight, 1.0);
#endif
`,iE=`
uniform view_position: vec3f;
uniform light_globalAmbient: vec3f;
fn square(x: f32) -> f32 {
	return x*x;
}
fn saturate(x: f32) -> f32 {
	return clamp(x, 0.0, 1.0);
}
fn saturate3(x: vec3f) -> vec3f {
	return clamp(x, vec3f(0.0), vec3f(1.0));
}
`,sE=`
#define NINESLICED
varying vMask: vec2f;
varying vTiledUv: vec2f;
uniform innerOffset: vec4f;
uniform outerScale: vec2f;
uniform atlasRect: vec4f;
var<private> nineSlicedUv: vec2f;
`,aE=`
#define NINESLICED
#define NINESLICETILED
varying vMask: vec2f;
varying vTiledUv: vec2f;
uniform innerOffset: vec4f;
uniform outerScale: vec2f;
uniform atlasRect: vec4f;
var<private> nineSlicedUv: vec2f;
`,rE=`
fn bayer2(p: vec2f) -> f32 {
	return (2.0 * p.y + p.x + 1.0) % 4.0;
}
fn bayer4(p: vec2f) -> f32 {
	let p1: vec2f = p % vec2f(2.0);
	let p2: vec2f = floor(0.5 * (p % vec2f(4.0)));
	return 4.0 * bayer2(p1) + bayer2(p2);
}
fn bayer8(p: vec2f) -> f32 {
	let p1: vec2f = p % vec2f(2.0);
	let p2: vec2f = floor(0.5 * (p % vec2f(4.0)));
	let p4: vec2f = floor(0.25 * (p % vec2f(8.0)));
	return 4.0 * (4.0 * bayer2(p1) + bayer2(p2)) + bayer2(p4);
}
`,nE=`
varying vUv0: vec2f;
var source: texture_2d<f32>;
var sourceSampler: sampler;
#ifdef GAUSS
	uniform weight: array<f32, {SAMPLES}>;
#endif
uniform pixelOffset: vec2f;
@fragment
fn fragmentMain(input: FragmentInput) -> FragmentOutput {
	var output: FragmentOutput;
	var moments: vec3f = vec3f(0.0);
	let uv: vec2f = input.vUv0 - uniform.pixelOffset * (f32({SAMPLES}) * 0.5);
	for (var i: i32 = 0; i < {SAMPLES}; i = i + 1) {
		let c: vec4f = textureSample(source, sourceSampler, uv + uniform.pixelOffset * f32(i));
		#ifdef GAUSS
			moments = moments + c.xyz * uniform.weight[i].element;
		#else
			moments = moments + c.xyz;
		#endif
	}
	#ifndef GAUSS
		moments = moments * (1.0 / f32({SAMPLES}));
	#endif
	output.color = vec4f(moments, 1.0);
	return output;
}
`,oE=`
uniform material_clearCoat: f32;
fn getClearCoat() {
	ccSpecularity = uniform.material_clearCoat;
	#ifdef STD_CLEARCOAT_TEXTURE
	ccSpecularity = ccSpecularity * textureSampleBias({STD_CLEARCOAT_TEXTURE_NAME}, {STD_CLEARCOAT_TEXTURE_NAME}Sampler, {STD_CLEARCOAT_TEXTURE_UV}, uniform.textureBias).{STD_CLEARCOAT_TEXTURE_CHANNEL};
	#endif
	#ifdef STD_CLEARCOAT_VERTEX
	ccSpecularity = ccSpecularity * saturate(vVertexColor.{STD_CLEARCOAT_VERTEX_CHANNEL});
	#endif
}
`,lE=`
	uniform material_clearCoatGloss: f32;
fn getClearCoatGlossiness() {
	ccGlossiness = uniform.material_clearCoatGloss;
	#ifdef STD_CLEARCOATGLOSS_TEXTURE
	ccGlossiness = ccGlossiness * textureSampleBias({STD_CLEARCOATGLOSS_TEXTURE_NAME}, {STD_CLEARCOATGLOSS_TEXTURE_NAME}Sampler, {STD_CLEARCOATGLOSS_TEXTURE_UV}, uniform.textureBias).{STD_CLEARCOATGLOSS_TEXTURE_CHANNEL};
	#endif
	#ifdef STD_CLEARCOATGLOSS_VERTEX
	ccGlossiness = ccGlossiness * saturate(vVertexColor.{STD_CLEARCOATGLOSS_VERTEX_CHANNEL});
	#endif
	#ifdef STD_CLEARCOATGLOSS_INVERT
	ccGlossiness = 1.0 - ccGlossiness;
	#endif
	ccGlossiness += 0.0000001;
}
`,cE=`
#ifdef STD_CLEARCOATNORMAL_TEXTURE
	uniform material_clearCoatBumpiness: f32;
#endif
fn getClearCoatNormal() {
#ifdef STD_CLEARCOATNORMAL_TEXTURE
	var normalMap: vec3f = {STD_CLEARCOATNORMAL_TEXTURE_DECODE}(textureSampleBias({STD_CLEARCOATNORMAL_TEXTURE_NAME}, {STD_CLEARCOATNORMAL_TEXTURE_NAME}Sampler, {STD_CLEARCOATNORMAL_TEXTURE_UV}, uniform.textureBias));
	normalMap = mix(vec3f(0.0, 0.0, 1.0), normalMap, uniform.material_clearCoatBumpiness);
	ccNormalW = normalize(dTBN * normalMap);
#else
	ccNormalW = dVertexNormalW;
#endif
}
`,dE=`
struct FaceCoords {
	uv: vec2f,
	faceIndex: f32,
	tileOffset: vec2f,
}
fn getCubemapFaceCoordinates(dir: vec3f) -> FaceCoords {
	var faceIndex: f32;
	var tileOffset: vec2f;
	var uv: vec2f;
	let vAbs: vec3f = abs(dir);
	var ma: f32;
	if (vAbs.z >= vAbs.x && vAbs.z >= vAbs.y) {
		let is_neg_z = dir.z < 0.0;
		faceIndex = select(4.0, 5.0, is_neg_z);
		ma = 0.5 / vAbs.z;
		uv = vec2f(select(dir.x, -dir.x, is_neg_z), -dir.y);
		tileOffset = vec2f(2.0, select(0.0, 1.0, is_neg_z));
	} else if (vAbs.y >= vAbs.x) {
		let is_neg_y = dir.y < 0.0;
		faceIndex = select(2.0, 3.0, is_neg_y);
		ma = 0.5 / vAbs.y;
		uv = vec2f(dir.x, select(dir.z, -dir.z, is_neg_y));
		tileOffset = vec2f(1.0, select(0.0, 1.0, is_neg_y));
	} else {
		let is_neg_x = dir.x < 0.0;
		faceIndex = select(0.0, 1.0, is_neg_x);
		ma = 0.5 / vAbs.x;
		uv = vec2f(select(-dir.z, dir.z, is_neg_x), -dir.y);
		tileOffset = vec2f(0.0, select(0.0, 1.0, is_neg_x));
	}
	uv = uv * ma + 0.5;
	return FaceCoords(uv, faceIndex, tileOffset);
}
fn getCubemapAtlasCoordinates(omniAtlasViewport: vec3f, shadowEdgePixels: f32, shadowTextureResolution: f32, dir: vec3f) -> vec2f {
	let faceData: FaceCoords = getCubemapFaceCoordinates(dir);
	var uv: vec2f = faceData.uv;
	let tileOffset: vec2f = faceData.tileOffset;
	let atlasFaceSize: f32 = omniAtlasViewport.z;
	let tileSize: f32 = shadowTextureResolution * atlasFaceSize;
	var offset: f32 = shadowEdgePixels / tileSize;
	uv = uv * (1.0 - offset * 2.0) + offset;
	uv = uv * atlasFaceSize;
	uv = uv + tileOffset * atlasFaceSize;
	uv = uv + omniAtlasViewport.xy;
	return uv;
}
`,hE=`
fn _getCookieClustered(tex: texture_2d<f32>, texSampler: sampler, uv: vec2f, intensity: f32, cookieChannel: vec4f) -> vec3f {
	let pixel: vec4f = mix(vec4f(1.0), textureSampleLevel(tex, texSampler, uv, 0.0), intensity);
	let isRgb: bool = dot(cookieChannel.rgb, vec3f(1.0)) == 3.0;
	return select(vec3f(dot(pixel, cookieChannel)), pixel.rgb, isRgb);
}
fn getCookie2DClustered(tex: texture_2d<f32>, texSampler: sampler, transform: mat4x4f, worldPosition: vec3f, intensity: f32, cookieChannel: vec4f) -> vec3f {
	let projPos: vec4f = transform * vec4f(worldPosition, 1.0);
	return _getCookieClustered(tex, texSampler, projPos.xy / projPos.w, intensity, cookieChannel);
}
fn getCookieCubeClustered(tex: texture_2d<f32>, texSampler: sampler, dir: vec3f, intensity: f32, cookieChannel: vec4f, shadowTextureResolution: f32, shadowEdgePixels: f32, omniAtlasViewport: vec3f) -> vec3f {
	let uv: vec2f = getCubemapAtlasCoordinates(omniAtlasViewport, shadowEdgePixels, shadowTextureResolution, dir);
	return _getCookieClustered(tex, texSampler, uv, intensity, cookieChannel);
}
`,fE=`
fn _getShadowCoordPerspZbuffer(shadowMatrix: mat4x4f, shadowParams: vec4f, wPos: vec3f) -> vec3f {
	var projPos = shadowMatrix * vec4f(wPos, 1.0);
	return projPos.xyz / projPos.w;
}
fn getShadowCoordPerspZbufferNormalOffset(shadowMatrix: mat4x4f, shadowParams: vec4f, normal: vec3f) -> vec3f {
	let wPos: vec3f = vPositionW + normal * shadowParams.y;
	return _getShadowCoordPerspZbuffer(shadowMatrix, shadowParams, wPos);
}
fn normalOffsetPointShadow(shadowParams: vec4f, lightPos: vec3f, lightDir: vec3f, lightDirNorm: vec3f, normal: vec3f) -> vec3f {
	let distScale: f32 = length(lightDir);
	let wPos: vec3f = vPositionW + normal * shadowParams.y * clamp(1.0 - dot(normal, -lightDirNorm), 0.0, 1.0) * distScale;
	let dir: vec3f = wPos - lightPos;
	return dir;
}
#if defined(CLUSTER_SHADOW_TYPE_PCF1)
	fn getShadowOmniClusteredPCF1(shadowMap: texture_depth_2d, shadowMapSampler: sampler_comparison, shadowParams: vec4f, omniAtlasViewport: vec3f, shadowEdgePixels: f32, lightDir: vec3f) -> f32 {
		let shadowTextureResolution: f32 = shadowParams.x;
		let uv: vec2f = getCubemapAtlasCoordinates(omniAtlasViewport, shadowEdgePixels, shadowTextureResolution, lightDir);
		let shadowZ: f32 = length(lightDir) * shadowParams.w + shadowParams.z;
		return textureSampleCompareLevel(shadowMap, shadowMapSampler, uv, shadowZ);
	}
#endif
#if defined(CLUSTER_SHADOW_TYPE_PCF3)
	fn getShadowOmniClusteredPCF3(shadowMap: texture_depth_2d, shadowMapSampler: sampler_comparison, shadowParams: vec4f, omniAtlasViewport: vec3f, shadowEdgePixels: f32, lightDir: vec3f) -> f32 {
		let shadowTextureResolution: f32 = shadowParams.x;
		let uv: vec2f = getCubemapAtlasCoordinates(omniAtlasViewport, shadowEdgePixels, shadowTextureResolution, lightDir);
		let shadowZ: f32 = length(lightDir) * shadowParams.w + shadowParams.z;
		let shadowCoord: vec3f = vec3f(uv, shadowZ);
		return getShadowPCF3x3(shadowMap, shadowMapSampler, shadowCoord, shadowParams);
	}
#endif
#if defined(CLUSTER_SHADOW_TYPE_PCF5)
	fn getShadowOmniClusteredPCF5(shadowMap: texture_depth_2d, shadowMapSampler: sampler_comparison, shadowParams: vec4f, omniAtlasViewport: vec3f, shadowEdgePixels: f32, lightDir: vec3f) -> f32 {
		let shadowTextureResolution: f32 = shadowParams.x;
		let uv: vec2f = getCubemapAtlasCoordinates(omniAtlasViewport, shadowEdgePixels, shadowTextureResolution, lightDir);
		let shadowZ: f32 = length(lightDir) * shadowParams.w + shadowParams.z;
		let shadowCoord: vec3f = vec3f(uv, shadowZ);
		return getShadowPCF5x5(shadowMap, shadowMapSampler, shadowCoord, shadowParams);
	}
#endif
#if defined(CLUSTER_SHADOW_TYPE_PCF1)
	fn getShadowSpotClusteredPCF1(shadowMap: texture_depth_2d, shadowMapSampler: sampler_comparison, shadowCoord: vec3f, shadowParams: vec4f) -> f32 {
		return textureSampleCompareLevel(shadowMap, shadowMapSampler, shadowCoord.xy, shadowCoord.z);
	}
#endif
	#if defined(CLUSTER_SHADOW_TYPE_PCF3)
	fn getShadowSpotClusteredPCF3(shadowMap: texture_depth_2d, shadowMapSampler: sampler_comparison, shadowCoord: vec3f, shadowParams: vec4f) -> f32 {
		return getShadowSpotPCF3x3(shadowMap, shadowMapSampler, shadowCoord, shadowParams);
	}
#endif
	#if defined(CLUSTER_SHADOW_TYPE_PCF5)
	fn getShadowSpotClusteredPCF5(shadowMap: texture_depth_2d, shadowMapSampler: sampler_comparison, shadowCoord: vec3f, shadowParams: vec4f) -> f32 {
		return getShadowPCF5x5(shadowMap, shadowMapSampler, shadowCoord, shadowParams);
	}
#endif
`,uE=`
#include "lightBufferDefinesPS"
#include "clusteredLightUtilsPS"
#ifdef CLUSTER_COOKIES
	#include "clusteredLightCookiesPS"
#endif
#ifdef CLUSTER_SHADOWS
	#include "clusteredLightShadowsPS"
#endif
var clusterWorldTexture: texture_2d<u32>;
var lightsTexture: texture_2d<uff>;
#ifdef CLUSTER_SHADOWS
	var shadowAtlasTexture: texture_depth_2d;
	var shadowAtlasTextureSampler: sampler_comparison;
#endif
#ifdef CLUSTER_COOKIES
	var cookieAtlasTexture: texture_2d<f32>;
	var cookieAtlasTextureSampler: sampler;
#endif
uniform clusterMaxCells: i32;
uniform numClusteredLights: i32;
uniform clusterTextureWidth: i32;
uniform clusterCellsCountByBoundsSize: vec3f;
uniform clusterBoundsMin: vec3f;
uniform clusterBoundsDelta: vec3f;
uniform clusterCellsDot: vec3i;
uniform clusterCellsMax: vec3i;
uniform shadowAtlasParams: vec2f;
struct ClusterLightData {
	position: vec3f,
	lightIndex: i32,
	direction: vec3f,
	shape: u32,
	color: vec3f,
	shadowIntensity: f32,
	range: f32,
	biasesData: f32,
	cookieIntensity: f32,
	isSpot: bool,
	falloffModeLinear: bool,
	isDynamic: bool,
	isLightmapped: bool
}
struct ClusterLightSpotData {
	innerConeAngleCos: f32,
	outerConeAngleCos: f32
}
struct ClusterLightAreaData {
	halfWidth: vec3f,
	halfHeight: vec3f
}
struct ClusterLightShadowData {
	shadowBias: f32,
	shadowNormalBias: f32
}
var<private> lightProjectionMatrix: mat4x4f;
var<private> clusterLightData_flags: u32;
var<private> clusterLightData_anglesData: f32;
var<private> clusterLightData_colorBFlagsData: u32;
fn sampleLightTextureF(lightIndex: i32, index: i32) -> vec4f {
	return textureLoad(lightsTexture, vec2<i32>(index, lightIndex), 0);
}
fn decodeClusterLightCore(lightIndex: i32) -> ClusterLightData {
	var clusterLightData: ClusterLightData;
	clusterLightData.lightIndex = lightIndex;
	let halfData: vec4f = sampleLightTextureF(lightIndex, {CLUSTER_TEXTURE_COLOR_ANGLES_BIAS});
	clusterLightData_anglesData = halfData.z;
	clusterLightData.biasesData = halfData.w;
	clusterLightData_colorBFlagsData = bitcast<u32>(halfData.y);
	let colorRG: vec2f = unpack2x16float(bitcast<u32>(halfData.x));
	let colorB_flags: vec2f = unpack2x16float(clusterLightData_colorBFlagsData);
	clusterLightData.color = vec3f(colorRG, colorB_flags.x) * {LIGHT_COLOR_DIVIDER};
	let lightPosRange: vec4f = sampleLightTextureF(lightIndex, {CLUSTER_TEXTURE_POSITION_RANGE});
	clusterLightData.position = lightPosRange.xyz;
	clusterLightData.range = lightPosRange.w;
	let lightDir_Flags: vec4f = sampleLightTextureF(lightIndex, {CLUSTER_TEXTURE_DIRECTION_FLAGS});
	clusterLightData.direction = lightDir_Flags.xyz;
	clusterLightData_flags = bitcast<u32>(lightDir_Flags.w);
	clusterLightData.isSpot = (clusterLightData_flags & (1u << 30u)) != 0u;
	clusterLightData.shape = (clusterLightData_flags >> 28u) & 0x3u;
	clusterLightData.falloffModeLinear = (clusterLightData_flags & (1u << 27u)) == 0u;
	clusterLightData.shadowIntensity = f32((clusterLightData_flags >> 0u) & 0xFFu) / 255.0;
	clusterLightData.cookieIntensity = f32((clusterLightData_flags >> 8u) & 0xFFu) / 255.0;
	clusterLightData.isDynamic = (clusterLightData_flags & (1u << 22u)) != 0u;
	clusterLightData.isLightmapped = (clusterLightData_flags & (1u << 21u)) != 0u;
	return clusterLightData;
}
fn decodeClusterLightSpot() -> ClusterLightSpotData {
	let angleFlags: u32 = (clusterLightData_colorBFlagsData >> 16u) & 0xFFFFu;
	let angleValues: vec2f = unpack2x16float(bitcast<u32>(clusterLightData_anglesData));
	let innerVal: f32 = angleValues.x;
	let outerVal: f32 = angleValues.y;
	let innerIsVersine: bool = (angleFlags & 1u) != 0u;
	let outerIsVersine: bool = ((angleFlags >> 1u) & 1u) != 0u;
	return ClusterLightSpotData(
		select(innerVal, 1.0 - innerVal, innerIsVersine),
		select(outerVal, 1.0 - outerVal, outerIsVersine)
	);
}
fn decodeClusterLightOmniAtlasViewport(lightIndex: i32) -> vec3f {
	return sampleLightTextureF(lightIndex, {CLUSTER_TEXTURE_PROJ_MAT_0}).xyz;
}
fn decodeClusterLightAreaData(lightIndex: i32) -> ClusterLightAreaData {
	return ClusterLightAreaData(
		sampleLightTextureF(lightIndex, {CLUSTER_TEXTURE_AREA_DATA_WIDTH}).xyz,
		sampleLightTextureF(lightIndex, {CLUSTER_TEXTURE_AREA_DATA_HEIGHT}).xyz
	);
}
fn decodeClusterLightProjectionMatrixData(lightIndex: i32) -> mat4x4f {
	let m0: vec4f = sampleLightTextureF(lightIndex, {CLUSTER_TEXTURE_PROJ_MAT_0});
	let m1: vec4f = sampleLightTextureF(lightIndex, {CLUSTER_TEXTURE_PROJ_MAT_1});
	let m2: vec4f = sampleLightTextureF(lightIndex, {CLUSTER_TEXTURE_PROJ_MAT_2});
	let m3: vec4f = sampleLightTextureF(lightIndex, {CLUSTER_TEXTURE_PROJ_MAT_3});
	return mat4x4f(m0, m1, m2, m3);
}
fn decodeClusterLightShadowData(biasesData: f32) -> ClusterLightShadowData {
	let biases: vec2f = unpack2x16float(bitcast<u32>(biasesData));
	return ClusterLightShadowData(biases.x, biases.y);
}
fn decodeClusterLightCookieData() -> vec4f {
	let cookieFlags: u32 = (clusterLightData_flags >> 23u) & 0x0Fu;
	let mask_uvec: vec4<u32> = vec4<u32>(cookieFlags) & vec4<u32>(1u, 2u, 4u, 8u);
	return step(vec4f(1.0), vec4f(mask_uvec));
}
fn evaluateLight(
	light: ClusterLightData,
	worldNormal: vec3f,
	viewDir: vec3f,
	reflectionDir: vec3f,
#if defined(LIT_CLEARCOAT)
	clearcoatReflectionDir: vec3f,
#endif
	gloss: f32,
	specularity: vec3f,
	geometricNormal: vec3f,
	tbn: mat3x3f,
#if defined(LIT_IRIDESCENCE)
	iridescenceFresnel: vec3f,
#endif
	clearcoat_worldNormal: vec3f,
	clearcoat_gloss: f32,
	sheen_gloss: f32,
	iridescence_intensity: f32
) {
	var cookieAttenuation: vec3f = vec3f(1.0);
	var diffuseAttenuation: f32 = 1.0;
	var falloffAttenuation: f32 = 1.0;
	let lightDirW: vec3f = evalOmniLight(light.position);
	let lightDirNormW: vec3f = normalize(lightDirW);
	#ifdef CLUSTER_AREALIGHTS
	if (light.shape != {LIGHTSHAPE_PUNCTUAL}) {
		let areaData: ClusterLightAreaData = decodeClusterLightAreaData(light.lightIndex);
		if (light.shape == {LIGHTSHAPE_RECT}) {
			calcRectLightValues(light.position, areaData.halfWidth, areaData.halfHeight);
		} else if (light.shape == {LIGHTSHAPE_DISK}) {
			calcDiskLightValues(light.position, areaData.halfWidth, areaData.halfHeight);
		} else {
			calcSphereLightValues(light.position, areaData.halfWidth, areaData.halfHeight);
		}
		falloffAttenuation = getFalloffWindow(light.range, lightDirW);
	} else
	#endif
	{
		if (light.falloffModeLinear) {
			falloffAttenuation = getFalloffLinear(light.range, lightDirW);
		} else {
			falloffAttenuation = getFalloffInvSquared(light.range, lightDirW);
		}
	}
	if (falloffAttenuation > 0.00001) {
		#ifdef CLUSTER_AREALIGHTS
		if (light.shape != {LIGHTSHAPE_PUNCTUAL}) {
			if (light.shape == {LIGHTSHAPE_RECT}) {
				diffuseAttenuation = getRectLightDiffuse(worldNormal, viewDir, lightDirW, lightDirNormW) * 16.0;
			} else if (light.shape == {LIGHTSHAPE_DISK}) {
				diffuseAttenuation = getDiskLightDiffuse(worldNormal, viewDir, lightDirW, lightDirNormW) * 16.0;
			} else {
				diffuseAttenuation = getSphereLightDiffuse(worldNormal, viewDir, lightDirW, lightDirNormW) * 16.0;
			}
		} else
		#endif
		{
			falloffAttenuation = falloffAttenuation * getLightDiffuse(worldNormal, viewDir, lightDirNormW);
		}
		if (light.isSpot) {
			let spotData: ClusterLightSpotData = decodeClusterLightSpot();
			falloffAttenuation = falloffAttenuation * getSpotEffect(light.direction, spotData.innerConeAngleCos, spotData.outerConeAngleCos, lightDirNormW);
		}
		#if defined(CLUSTER_COOKIES) || defined(CLUSTER_SHADOWS)
		if (falloffAttenuation > 0.00001) {
			if (light.shadowIntensity > 0.0 || light.cookieIntensity > 0.0) {
				var omniAtlasViewport: vec3f = vec3f(0.0);
				if (light.isSpot) {
					lightProjectionMatrix = decodeClusterLightProjectionMatrixData(light.lightIndex);
				} else {
					omniAtlasViewport = decodeClusterLightOmniAtlasViewport(light.lightIndex);
				}
				let shadowTextureResolution: f32 = uniform.shadowAtlasParams.x;
				let shadowEdgePixels: f32 = uniform.shadowAtlasParams.y;
				#ifdef CLUSTER_COOKIES
				if (light.cookieIntensity > 0.0) {
					let cookieChannelMask: vec4f = decodeClusterLightCookieData();
					if (light.isSpot) {
						cookieAttenuation = getCookie2DClustered(cookieAtlasTexture, cookieAtlasTextureSampler, lightProjectionMatrix, vPositionW, light.cookieIntensity, cookieChannelMask);
					} else {
						cookieAttenuation = getCookieCubeClustered(cookieAtlasTexture, cookieAtlasTextureSampler, lightDirW, light.cookieIntensity, cookieChannelMask, shadowTextureResolution, shadowEdgePixels, omniAtlasViewport);
					}
				}
				#endif
				#ifdef CLUSTER_SHADOWS
				if (light.shadowIntensity > 0.0) {
					let shadowData: ClusterLightShadowData = decodeClusterLightShadowData(light.biasesData);
					let shadowParams: vec4f = vec4f(shadowTextureResolution, shadowData.shadowNormalBias, shadowData.shadowBias, 1.0 / light.range);
					if (light.isSpot) {
						let shadowCoord: vec3f = getShadowCoordPerspZbufferNormalOffset(lightProjectionMatrix, shadowParams, geometricNormal);
						#if defined(CLUSTER_SHADOW_TYPE_PCF1)
							let shadow: f32 = getShadowSpotClusteredPCF1(shadowAtlasTexture, shadowAtlasTextureSampler, shadowCoord, shadowParams);
						#elif defined(CLUSTER_SHADOW_TYPE_PCF3)
							let shadow: f32 = getShadowSpotClusteredPCF3(shadowAtlasTexture, shadowAtlasTextureSampler, shadowCoord, shadowParams);
						#elif defined(CLUSTER_SHADOW_TYPE_PCF5)
							let shadow: f32 = getShadowSpotClusteredPCF5(shadowAtlasTexture, shadowAtlasTextureSampler, shadowCoord, shadowParams);
						#elif defined(CLUSTER_SHADOW_TYPE_PCSS)
							let shadow: f32 = getShadowSpotClusteredPCSS(shadowAtlasTexture, shadowAtlasTextureSampler, shadowCoord, shadowParams);
						#endif
						falloffAttenuation = falloffAttenuation * mix(1.0, shadow, light.shadowIntensity);
					} else {
						let dir: vec3f = normalOffsetPointShadow(shadowParams, light.position, lightDirW, lightDirNormW, geometricNormal);
						#if defined(CLUSTER_SHADOW_TYPE_PCF1)
							let shadow: f32 = getShadowOmniClusteredPCF1(shadowAtlasTexture, shadowAtlasTextureSampler, shadowParams, omniAtlasViewport, shadowEdgePixels, dir);
						#elif defined(CLUSTER_SHADOW_TYPE_PCF3)
							let shadow: f32 = getShadowOmniClusteredPCF3(shadowAtlasTexture, shadowAtlasTextureSampler, shadowParams, omniAtlasViewport, shadowEdgePixels, dir);
						#elif defined(CLUSTER_SHADOW_TYPE_PCF5)
							let shadow: f32 = getShadowOmniClusteredPCF5(shadowAtlasTexture, shadowAtlasTextureSampler, shadowParams, omniAtlasViewport, shadowEdgePixels, dir);
						#endif
						falloffAttenuation = falloffAttenuation * mix(1.0, shadow, light.shadowIntensity);
					}
				}
				#endif
			}
		}
		#endif
		#ifdef CLUSTER_AREALIGHTS
		if (light.shape != {LIGHTSHAPE_PUNCTUAL}) {
			{
				var areaDiffuse: vec3f = (diffuseAttenuation * falloffAttenuation) * light.color * cookieAttenuation;
				#if defined(LIT_SPECULAR)
					areaDiffuse = mix(areaDiffuse, vec3f(0.0), dLTCSpecFres);
				#endif
				dDiffuseLight = dDiffuseLight + areaDiffuse;
			}
			#ifdef LIT_SPECULAR
				var areaLightSpecular: f32;
				if (light.shape == {LIGHTSHAPE_RECT}) {
					areaLightSpecular = getRectLightSpecular(worldNormal, viewDir);
				} else if (light.shape == {LIGHTSHAPE_DISK}) {
					areaLightSpecular = getDiskLightSpecular(worldNormal, viewDir);
				} else {
					areaLightSpecular = getSphereLightSpecular(worldNormal, viewDir);
				}
				dSpecularLight = dSpecularLight + dLTCSpecFres * areaLightSpecular * falloffAttenuation * light.color * cookieAttenuation;
				#ifdef LIT_CLEARCOAT
					var areaLightSpecularCC: f32;
					if (light.shape == {LIGHTSHAPE_RECT}) {
						areaLightSpecularCC = getRectLightSpecular(clearcoat_worldNormal, viewDir);
					} else if (light.shape == {LIGHTSHAPE_DISK}) {
						areaLightSpecularCC = getDiskLightSpecular(clearcoat_worldNormal, viewDir);
					} else {
						areaLightSpecularCC = getSphereLightSpecular(clearcoat_worldNormal, viewDir);
					}
					ccSpecularLight = ccSpecularLight + ccLTCSpecFres * areaLightSpecularCC * falloffAttenuation * light.color  * cookieAttenuation;
				#endif
			#endif
		} else
		#endif
		{
			{
				var punctualDiffuse: vec3f = falloffAttenuation * light.color * cookieAttenuation;
				#if defined(CLUSTER_AREALIGHTS)
				#if defined(LIT_SPECULAR)
					punctualDiffuse = mix(punctualDiffuse, vec3f(0.0), specularity);
				#endif
				#endif
				dDiffuseLight = dDiffuseLight + punctualDiffuse;
			}
			#ifdef LIT_SPECULAR
				let halfDir: vec3f = normalize(-lightDirNormW + viewDir);
				#ifdef LIT_SPECULAR_FRESNEL
					dSpecularLight = dSpecularLight +
						getLightSpecular(halfDir, reflectionDir, worldNormal, viewDir, lightDirNormW, gloss, tbn) * falloffAttenuation * light.color * cookieAttenuation *
						getFresnel(
							dot(viewDir, halfDir),
							gloss,
							specularity
						#if defined(LIT_IRIDESCENCE)
							, iridescenceFresnel,
							iridescence_intensity
						#endif
							);
				#else
					dSpecularLight = dSpecularLight + getLightSpecular(halfDir, reflectionDir, worldNormal, viewDir, lightDirNormW, gloss, tbn) * falloffAttenuation * light.color * cookieAttenuation * specularity;
				#endif
				#ifdef LIT_CLEARCOAT
					#ifdef LIT_SPECULAR_FRESNEL
						ccSpecularLight = ccSpecularLight + getLightSpecular(halfDir, clearcoatReflectionDir, clearcoat_worldNormal, viewDir, lightDirNormW, clearcoat_gloss, tbn) * falloffAttenuation * light.color * cookieAttenuation * getFresnelCC(dot(viewDir, halfDir));
					#else
						ccSpecularLight = ccSpecularLight + getLightSpecular(halfDir, clearcoatReflectionDir, clearcoat_worldNormal, viewDir, lightDirNormW, clearcoat_gloss, tbn) * falloffAttenuation * light.color * cookieAttenuation;
					#endif
				#endif
				#ifdef LIT_SHEEN
					sSpecularLight = sSpecularLight + getLightSpecularSheen(halfDir, worldNormal, viewDir, lightDirNormW, sheen_gloss) * falloffAttenuation * light.color * cookieAttenuation;
				#endif
			#endif
		}
	}
	dAtten = falloffAttenuation;
	dLightDirNormW = lightDirNormW;
}
fn evaluateClusterLight(
	lightIndex: i32,
	worldNormal: vec3f,
	viewDir: vec3f,
	reflectionDir: vec3f,
#if defined(LIT_CLEARCOAT)
	clearcoatReflectionDir: vec3f,
#endif
	gloss: f32,
	specularity: vec3f,
	geometricNormal: vec3f,
	tbn: mat3x3f,
#if defined(LIT_IRIDESCENCE)
	iridescenceFresnel: vec3f,
#endif
	clearcoat_worldNormal: vec3f,
	clearcoat_gloss: f32,
	sheen_gloss: f32,
	iridescence_intensity: f32
) {
	let clusterLightData: ClusterLightData = decodeClusterLightCore(lightIndex);
	#ifdef CLUSTER_MESH_DYNAMIC_LIGHTS
		let acceptLightMask: bool = clusterLightData.isDynamic;
	#else
		let acceptLightMask: bool = clusterLightData.isLightmapped;
	#endif
	if (acceptLightMask) {
		evaluateLight(
			clusterLightData,
			worldNormal,
			viewDir,
			reflectionDir,
#if defined(LIT_CLEARCOAT)
			clearcoatReflectionDir,
#endif
			gloss,
			specularity,
			geometricNormal,
			tbn,
#if defined(LIT_IRIDESCENCE)
			iridescenceFresnel,
#endif
			clearcoat_worldNormal,
			clearcoat_gloss,
			sheen_gloss,
			iridescence_intensity
		);
	}
}
fn addClusteredLights(
	worldNormal: vec3f,
	viewDir: vec3f,
	reflectionDir: vec3f,
#if defined(LIT_CLEARCOAT)
	clearcoatReflectionDir: vec3f,
#endif
	gloss: f32,
	specularity: vec3f,
	geometricNormal: vec3f,
	tbn: mat3x3f,
#if defined(LIT_IRIDESCENCE)
	iridescenceFresnel: vec3f,
#endif
	clearcoat_worldNormal: vec3f,
	clearcoat_gloss: f32,
	sheen_gloss: f32,
	iridescence_intensity: f32
) {
	if (uniform.numClusteredLights <= 1) {
		return;
	}
	let cellCoords: vec3i = vec3i(floor((vPositionW - uniform.clusterBoundsMin) * uniform.clusterCellsCountByBoundsSize));
	if (!(any(cellCoords < vec3i(0)) || any(cellCoords >= uniform.clusterCellsMax))) {
		let cellIndex: i32 = cellCoords.x * uniform.clusterCellsDot.x + cellCoords.y * uniform.clusterCellsDot.y + cellCoords.z * uniform.clusterCellsDot.z;
		let clusterV: i32 = cellIndex / uniform.clusterTextureWidth;
		let clusterU: i32 = cellIndex - clusterV * uniform.clusterTextureWidth;
		for (var lightCellIndex: i32 = 0; lightCellIndex < uniform.clusterMaxCells; lightCellIndex = lightCellIndex + 1) {
			let lightIndex: u32 = textureLoad(clusterWorldTexture, vec2<i32>(clusterU + lightCellIndex, clusterV), 0).r;
			if (lightIndex == 0u) {
				break;
			}
			evaluateClusterLight(
				i32(lightIndex),
				worldNormal,
				viewDir,
				reflectionDir,
#if defined(LIT_CLEARCOAT)
				clearcoatReflectionDir,
#endif
				gloss,
				specularity,
				geometricNormal,
				tbn,
#if defined(LIT_IRIDESCENCE)
				iridescenceFresnel,
#endif
				clearcoat_worldNormal,
				clearcoat_gloss,
				sheen_gloss,
				iridescence_intensity
			);
		}
	}
}`,pE=`
fn combineColor(albedo: vec3f, sheenSpecularity: vec3f, clearcoatSpecularity: f32) -> vec3f {
	var ret: vec3f = vec3f(0.0);
	#ifdef LIT_OLD_AMBIENT
		ret = ret + ((dDiffuseLight - uniform.light_globalAmbient) * albedo + uniform.material_ambient * uniform.light_globalAmbient);
	#else
		ret = ret + (albedo * dDiffuseLight);
	#endif
	#ifdef LIT_SPECULAR
		ret = ret + dSpecularLight;
	#endif
	#ifdef LIT_REFLECTIONS
		ret = ret + (dReflection.rgb * dReflection.a);
	#endif
	#ifdef LIT_SHEEN
		let sheenScaling: f32 = 1.0 - max(max(sheenSpecularity.r, sheenSpecularity.g), sheenSpecularity.b) * 0.157;
		ret = ret * sheenScaling + (sSpecularLight + sReflection.rgb) * sheenSpecularity;
	#endif
	#ifdef LIT_CLEARCOAT
		let clearCoatScaling: f32 = 1.0 - ccFresnel * clearcoatSpecularity;
		ret = ret * clearCoatScaling + (ccSpecularLight + ccReflection) * clearcoatSpecularity;
	#endif
	return ret;
}
`,mE=`
	varying uv0: vec2f;
	var blitTexture: texture_2d<f32>;
	var blitTextureSampler : sampler;
	@fragment
	fn fragmentMain(input : FragmentInput) -> FragmentOutput {
		var output: FragmentOutput;
		output.color = textureSample(blitTexture, blitTextureSampler, input.uv0);
		return output;
	}
`,_E=`
	varying uv0: vec2f;
	uniform invViewProj: mat4x4<f32>;
	var blitTexture: texture_cube<f32>;
	var blitTextureSampler : sampler;
	@fragment
	fn fragmentMain(input : FragmentInput) -> FragmentOutput {
		var output: FragmentOutput;
		var projPos = vec4f(input.uv0 * 2.0 - 1.0, 0.5, 1.0);
		var worldPos = uniform.invViewProj * projPos;
		output.color = textureSample(blitTexture, blitTextureSampler, worldPos.xyz);
		return output;
	}
`,gE=`
	attribute vertex_position: vec2f;
	varying uv0: vec2f;
	@vertex
	fn vertexMain(input: VertexInput) -> VertexOutput {
		var output: VertexOutput;
		output.position = vec4f(input.vertex_position, 0.5, 1.0);
		output.uv0 = input.vertex_position * 0.5 + vec2f(0.5, 0.5);
		output.uv0.y = 1.0 - output.uv0.y;
		return output;
	}
`,vE=`
#if LIT_CUBEMAP_PROJECTION == BOX
	uniform envBoxMin: vec3f;
	uniform envBoxMax: vec3f;
#endif
fn cubeMapProject(nrdir: vec3f) -> vec3f {
	#if LIT_CUBEMAP_PROJECTION == NONE
		return cubeMapRotate(nrdir);
	#endif
	#if LIT_CUBEMAP_PROJECTION == BOX
		let nrdir_rotated: vec3f = cubeMapRotate(nrdir);
		let rbmax: vec3f = (uniform.envBoxMax - vPositionW) / nrdir_rotated;
		let rbmin: vec3f = (uniform.envBoxMin - vPositionW) / nrdir_rotated;
		let rbminmax: vec3f = select(rbmin, rbmax, nrdir_rotated > vec3f(0.0));
		let fa: f32 = min(min(rbminmax.x, rbminmax.y), rbminmax.z);
		let posonbox: vec3f = vPositionW + nrdir_rotated * fa;
		let envBoxPos: vec3f = (uniform.envBoxMin + uniform.envBoxMax) * 0.5;
		return normalize(posonbox - envBoxPos);
	#endif
}
`,SE=`
#ifdef CUBEMAP_ROTATION
uniform cubeMapRotationMatrix: mat3x3f;
#endif
fn cubeMapRotate(refDir: vec3f) -> vec3f {
#ifdef CUBEMAP_ROTATION
	return refDir * uniform.cubeMapRotationMatrix;
#else
	return refDir;
#endif
}
`,TE=`
#ifdef DEBUG_ALBEDO_PASS
output.color = vec4(gammaCorrectOutput(dAlbedo), 1.0);
#endif
#ifdef DEBUG_UV0_PASS
output.color = vec4f(litArgs_albedo , 1.0);
#endif
#ifdef DEBUG_WORLD_NORMAL_PASS
output.color = vec4f(litArgs_worldNormal * 0.5 + 0.5, 1.0);
#endif
#ifdef DEBUG_OPACITY_PASS
output.color = vec4f(vec3f(litArgs_opacity) , 1.0);
#endif
#ifdef DEBUG_SPECULARITY_PASS
output.color = vec4f(litArgs_specularity, 1.0);
#endif
#ifdef DEBUG_GLOSS_PASS
output.color = vec4f(vec3f(litArgs_gloss) , 1.0);
#endif
#ifdef DEBUG_METALNESS_PASS
output.color = vec4f(vec3f(litArgs_metalness) , 1.0);
#endif
#ifdef DEBUG_AO_PASS
output.color = vec4f(vec3f(litArgs_ao) , 1.0);
#endif
#ifdef DEBUG_EMISSION_PASS
output.color = vec4f(gammaCorrectOutput(litArgs_emission), 1.0);
#endif
`,EE=`
#ifdef DEBUG_LIGHTING_PASS
	litArgs_albedo = vec3f(0.5);
#endif
#ifdef DEBUG_UV0_PASS
#ifdef VARYING_VUV0
	litArgs_albedo = vec3f(vUv0, 0.0);
#else
	litArgs_albedo = vec3f(0.0);
#endif
#endif
`,yE=`
#ifndef _DECODE_INCLUDED_
#define _DECODE_INCLUDED_
fn decodeLinear(raw: vec4f) -> vec3f {
	return raw.rgb;
}
fn decodeGammaFloat(raw: f32) -> f32 {
	return pow(raw, 2.2);
}
fn decodeGamma3(raw: vec3f) -> vec3f {
	return pow(raw, vec3f(2.2));
}
fn decodeGamma(raw: vec4f) -> vec3f {
	return pow(raw.xyz, vec3f(2.2));
}
fn decodeRGBM(raw: vec4f) -> vec3f {
	let color = (8.0 * raw.a) * raw.rgb;
	return color * color;
}
fn decodeRGBP(raw: vec4f) -> vec3f {
	let color = raw.rgb * (-raw.a * 7.0 + 8.0);
	return color * color;
}
fn decodeRGBE(raw: vec4f) -> vec3f {
	return select(vec3f(0.0), raw.xyz * pow(2.0, raw.w * 255.0 - 128.0), raw.a != 0.0);
}
fn passThrough(raw: vec4f) -> vec4f {
	return raw;
}
fn unpackNormalXYZ(nmap: vec4f) -> vec3f {
	return nmap.xyz * 2.0 - 1.0;
}
fn unpackNormalXY(nmap: vec4f) -> vec3f {
	var xy = nmap.wy * 2.0 - 1.0;
	return vec3f(xy, sqrt(1.0 - clamp(dot(xy, xy), 0.0, 1.0)));
}
#endif
`,xE=`
#ifndef _DETAILMODES_INCLUDED_
#define _DETAILMODES_INCLUDED_
fn detailMode_mul(c1: vec3f, c2: vec3f) -> vec3f {
	return c1 * c2;
}
fn detailMode_add(c1: vec3f, c2: vec3f) -> vec3f {
	return c1 + c2;
}
fn detailMode_screen(c1: vec3f, c2: vec3f) -> vec3f {
	return 1.0 - (1.0 - c1)*(1.0 - c2);
}
fn detailMode_overlay(c1: vec3f, c2: vec3f) -> vec3f {
	return mix(1.0 - 2.0 * (1.0 - c1)*(1.0 - c2), 2.0 * c1 * c2, step(c1, vec3f(0.5)));
}
fn detailMode_min(c1: vec3f, c2: vec3f) -> vec3f {
	return min(c1, c2);
}
fn detailMode_max(c1: vec3f, c2: vec3f) -> vec3f {
	return max(c1, c2);
}
#endif
`,CE=`
uniform material_diffuse: vec3f;
#ifdef STD_DIFFUSEDETAIL_TEXTURE
	#include "detailModesPS"
#endif
fn getAlbedo() {
	dAlbedo = uniform.material_diffuse.rgb;
	#ifdef STD_DIFFUSE_TEXTURE
		var albedoTexture: vec3f = {STD_DIFFUSE_TEXTURE_DECODE}(textureSampleBias({STD_DIFFUSE_TEXTURE_NAME}, {STD_DIFFUSE_TEXTURE_NAME}Sampler, {STD_DIFFUSE_TEXTURE_UV}, uniform.textureBias)).{STD_DIFFUSE_TEXTURE_CHANNEL};
		#ifdef STD_DIFFUSEDETAIL_TEXTURE
			var albedoDetail: vec3f = {STD_DIFFUSEDETAIL_TEXTURE_DECODE}(textureSampleBias({STD_DIFFUSEDETAIL_TEXTURE_NAME}, {STD_DIFFUSEDETAIL_TEXTURE_NAME}Sampler, {STD_DIFFUSEDETAIL_TEXTURE_UV}, uniform.textureBias)).{STD_DIFFUSEDETAIL_TEXTURE_CHANNEL};
			albedoTexture = detailMode_{STD_DIFFUSEDETAIL_DETAILMODE}(albedoTexture, albedoDetail);
		#endif
		dAlbedo = dAlbedo * albedoTexture;
	#endif
	#ifdef STD_DIFFUSE_VERTEX
		dAlbedo = dAlbedo * saturate3(vVertexColor.{STD_DIFFUSE_VERTEX_CHANNEL});
	#endif
}
`,AE=`
uniform material_emissive: vec3f;
uniform material_emissiveIntensity: f32;
fn getEmission() {
	dEmission = uniform.material_emissive * uniform.material_emissiveIntensity;
	#ifdef STD_EMISSIVE_TEXTURE
	dEmission *= {STD_EMISSIVE_TEXTURE_DECODE}(textureSampleBias({STD_EMISSIVE_TEXTURE_NAME}, {STD_EMISSIVE_TEXTURE_NAME}Sampler, {STD_EMISSIVE_TEXTURE_UV}, uniform.textureBias)).{STD_EMISSIVE_TEXTURE_CHANNEL};
	#endif
	#ifdef STD_EMISSIVE_VERTEX
	dEmission = dEmission * saturate3(vVertexColor.{STD_EMISSIVE_VERTEX_CHANNEL});
	#endif
}
`,wE=`
fn encodeLinear(source: vec3f) -> vec4f {
	return vec4f(source, 1.0);
}
fn encodeGamma(source: vec3f) -> vec4f {
	return vec4f(pow(source + vec3f(0.0000001), vec3f(1.0 / 2.2)), 1.0);
}
fn encodeRGBM(source: vec3f) -> vec4f {
	var color: vec3f = pow(source, vec3f(0.5));
	color *= 1.0 / 8.0;
	var a: f32 = saturate(max(max(color.r, color.g), max(color.b, 1.0 / 255.0)));
	a = ceil(a * 255.0) / 255.0;
	color /= a;
	return vec4f(color, a);
}
fn encodeRGBP(source: vec3f) -> vec4f {
	var gamma: vec3f = pow(source, vec3f(0.5));
	var maxVal: f32 = min(8.0, max(1.0, max(gamma.x, max(gamma.y, gamma.z))));
	var v: f32 = 1.0 - ((maxVal - 1.0) / 7.0);
	v = ceil(v * 255.0) / 255.0;
	return vec4f(gamma / (-v * 7.0 + 8.0), v);
}
fn encodeRGBE(source: vec3f) -> vec4f {
	var maxVal: f32 = max(source.x, max(source.y, source.z));
	if (maxVal < 1e-32) {
		return vec4f(0.0, 0.0, 0.0, 0.0);
	} else {
		var e: f32 = ceil(log2(maxVal));
		return vec4f(source / pow(2.0, e), (e + 128.0) / 255.0);
	}
}
`,LE=`
	var finalRgb: vec3f = combineColor(litArgs_albedo, litArgs_sheen_specularity, litArgs_clearcoat_specularity);
	finalRgb = finalRgb + litArgs_emission;
	finalRgb = addFog(finalRgb);
	finalRgb = toneMap(finalRgb);
	finalRgb = gammaCorrectOutput(finalRgb);
	output.color = vec4f(finalRgb, output.color.a);
`,DE=`
#ifndef _ENVATLAS_INCLUDED_
#define _ENVATLAS_INCLUDED_
const atlasSize : f32 = 512.0;
const seamSize : f32 = 1.0 / atlasSize;
fn mapUv(uv : vec2f, rect : vec4f) -> vec2f {
	return vec2f(mix(rect.x + seamSize, rect.x + rect.z - seamSize, uv.x),
				 mix(rect.y + seamSize, rect.y + rect.w - seamSize, uv.y));
}
fn mapRoughnessUv(uv : vec2f, level : f32) -> vec2f {
	let t : f32 = 1.0 / exp2(level);
	return mapUv(uv, vec4f(0.0, 1.0 - t, t, t * 0.5));
}
fn mapShinyUv(uv : vec2f, level : f32) -> vec2f {
	let t : f32 = 1.0 / exp2(level);
	return mapUv(uv, vec4f(1.0 - t, 1.0 - t, t, t * 0.5));
}
#endif
`,PE=`
#ifdef LIT_SKYBOX_INTENSITY
	uniform skyboxIntensity : f32;
#endif
fn processEnvironment(color : vec3f) -> vec3f {
	#ifdef LIT_SKYBOX_INTENSITY
		return color * uniform.skyboxIntensity;
	#else
		return color;
	#endif
}
`,IE=`
fn getFalloffWindow(lightRadius: f32, lightDir: vec3f) -> f32 {
	let sqrDist: f32 = dot(lightDir, lightDir);
	let invRadius: f32 = 1.0 / lightRadius;
	return square(saturate(1.0 - square(sqrDist * square(invRadius))));
}
fn getFalloffInvSquared(lightRadius: f32, lightDir: vec3f) -> f32 {
	let sqrDist: f32 = dot(lightDir, lightDir);
	var falloff: f32 = 1.0 / (sqrDist + 1.0);
	let invRadius: f32 = 1.0 / lightRadius;
	falloff = falloff * 16.0;
	falloff = falloff * square(saturate(1.0 - square(sqrDist * square(invRadius))));
	return falloff;
}
`,bE=`
fn getFalloffLinear(lightRadius: f32, lightDir: vec3f) -> f32 {
	let d: f32 = length(lightDir);
	return max(((lightRadius - d) / lightRadius), 0.0);
}
`,RE=`
#ifndef FLOAT_AS_UINT
#define FLOAT_AS_UINT
fn float2uint(value: f32) -> vec4f {
	let intBits = bitcast<u32>(value);
	return vec4f(
		f32((intBits >> 24u) & 0xffu),
		f32((intBits >> 16u) & 0xffu),
		f32((intBits >> 8u) & 0xffu),
		f32(intBits & 0xffu)
	) / 255.0;
}
fn uint2float(value: vec4f) -> f32 {
	let rgba_u32 = vec4<u32>(value * 255.0);
	let intBits: u32 =
		(rgba_u32.r << 24u) |
		(rgba_u32.g << 16u) |
		(rgba_u32.b << 8u)  |
		 rgba_u32.a;
	return bitcast<f32>(intBits);
}
fn float2vec4(value: f32) -> vec4f {
	#if defined(CAPS_TEXTURE_FLOAT_RENDERABLE)
		return vec4f(value, 1.0, 1.0, 1.0);
	#else
		return float2uint(value);
	#endif
}
#endif
`,ME=`
#include "fogMathPS"
var<private> dBlendModeFogFactor : f32 = 1.0;
#if (FOG != NONE)
	uniform fog_color : vec3f;
	
	#if (FOG == LINEAR)
		uniform fog_start : f32;
		uniform fog_end : f32;
	#else
		uniform fog_density : f32;
	#endif
#endif
#ifdef VERTEXSHADER
	fn getFogFactor(depth: f32) -> f32 {
#else
	fn getFogFactor() -> f32 {
		let depth = pcPosition.z / pcPosition.w;
#endif
	#if (FOG == LINEAR)
		return evaluateFogFactorLinear(depth, uniform.fog_start, uniform.fog_end);
	#elif (FOG == EXP)
		return evaluateFogFactorExp(depth, uniform.fog_density);
	#elif (FOG == EXP2)
		return evaluateFogFactorExp2(depth, uniform.fog_density);
	#else
		return 1.0;
	#endif
}
#ifdef VERTEXSHADER
	fn addFog(color: vec3f, depth: f32) -> vec3f {
		#if (FOG != NONE)
			return mix(uniform.fog_color * dBlendModeFogFactor, color, getFogFactor(depth));
		#else
			return color;
		#endif
	}
#else
	fn addFog(color: vec3f) -> vec3f {
		#if (FOG != NONE)
			return mix(uniform.fog_color * dBlendModeFogFactor, color, getFogFactor());
		#else
			return color;
		#endif
	}
#endif
`,NE=`
fn evaluateFogFactorLinear(depth: f32, fogStart: f32, fogEnd: f32) -> f32 {
	return clamp((fogEnd - depth) / (fogEnd - fogStart), 0.0, 1.0);
}
fn evaluateFogFactorExp(depth: f32, fogDensity: f32) -> f32 {
	return clamp(exp(-depth * fogDensity), 0.0, 1.0);
}
fn evaluateFogFactorExp2(depth: f32, fogDensity: f32) -> f32 {
	return clamp(exp(-depth * depth * fogDensity * fogDensity), 0.0, 1.0);
}
`,OE=`
fn pow5(x: f32) -> f32 {
	let x2: f32 = x * x;
	return x2 * x2 * x;
}
fn getFresnel(
		cosTheta: f32,
		gloss: f32,
		specularity: vec3f
	#if defined(LIT_IRIDESCENCE)
		, iridescenceFresnel: vec3f,
		iridescenceIntensity: f32
	#endif
) -> vec3f {
	let fresnel: f32 = pow5(1.0 - saturate(cosTheta));
	let glossSq: f32 = gloss * gloss;
	let specIntensity: f32 = max(specularity.r, max(specularity.g, specularity.b));
	let ret: vec3f = specularity + (max(vec3f(glossSq * specIntensity), specularity) - specularity) * fresnel;
	#if defined(LIT_IRIDESCENCE)
		return mix(ret, iridescenceFresnel, iridescenceIntensity);
	#else
		return ret;
	#endif
}
fn getFresnelCC(cosTheta: f32) -> f32 {
	let fresnel: f32 = pow5(1.0 - saturate(cosTheta));
	return 0.04 + (1.0 - 0.04) * fresnel;
}`,FE=`
attribute vertex_position: vec2f;
varying vUv0: vec2f;
@vertex
fn vertexMain(input: VertexInput) -> VertexOutput {
	var output: VertexOutput;
	output.position = vec4f(input.vertex_position, 0.5, 1.0);
	output.vUv0 = input.vertex_position.xy * 0.5 + vec2f(0.5);
	return output;
}
`,UE=`
#include "decodePS"
#if (GAMMA == SRGB)
	fn gammaCorrectInput(color: f32) -> f32 {
		return decodeGammaFloat(color);
	}
	fn gammaCorrectInputVec3(color: vec3f) -> vec3f {
		return decodeGamma3(color);
	}
	fn gammaCorrectInputVec4(color: vec4f) -> vec4f {
		return vec4f(decodeGamma3(color.xyz), color.w);
	}
	fn gammaCorrectOutput(color: vec3f) -> vec3f {
		return pow(color + 0.0000001, vec3f(1.0 / 2.2));
	}
#else
	fn gammaCorrectInput(color: f32) -> f32 {
		return color;
	}
	fn gammaCorrectInputVec3(color: vec3f) -> vec3f {
		return color;
	}
	fn gammaCorrectInputVec4(color: vec4f) -> vec4f {
		return color;
	}
	fn gammaCorrectOutput(color: vec3f) -> vec3f {
		return color;
	}
#endif
`,BE=`
#ifdef STD_GLOSS_CONSTANT
	uniform material_gloss: f32;
#endif
fn getGlossiness() {
	dGlossiness = 1.0;
	#ifdef STD_GLOSS_CONSTANT
	dGlossiness = dGlossiness * uniform.material_gloss;
	#endif
	#ifdef STD_GLOSS_TEXTURE
	dGlossiness = dGlossiness * textureSampleBias({STD_GLOSS_TEXTURE_NAME}, {STD_GLOSS_TEXTURE_NAME}Sampler, {STD_GLOSS_TEXTURE_UV}, uniform.textureBias).{STD_GLOSS_TEXTURE_CHANNEL};
	#endif
	#ifdef STD_GLOSS_VERTEX
	dGlossiness = dGlossiness * saturate(vVertexColor.{STD_GLOSS_VERTEX_CHANNEL});
	#endif
	#ifdef STD_GLOSS_INVERT
	dGlossiness = 1.0 - dGlossiness;
	#endif
	dGlossiness = dGlossiness + 0.0000001;
}
`,kE=`
	attribute aPosition: vec2f;
	varying uv0: vec2f;
	@vertex fn vertexMain(input: VertexInput) -> VertexOutput {
		var output: VertexOutput;
		output.position = vec4f(input.aPosition, 0.0, 1.0);
		output.uv0 = getImageEffectUV((input.aPosition + 1.0) * 0.5);
		return output;
	}
`,zE=`
struct DrawIndexedIndirectArgs {
	indexCount: u32,
	instanceCount: u32,
	firstIndex: u32,
	baseVertex: i32,
	firstInstance: u32
};
struct DrawIndirectArgs {
	vertexCount: u32,
	instanceCount: u32,
	firstVertex: u32,
	firstInstance: u32,
	_pad: u32
};
`,VE=`
	#include "gammaPS"
	varying color: vec4f;
	@fragment
	fn fragmentMain(input : FragmentInput) -> FragmentOutput {
		var output: FragmentOutput;
		output.color = vec4f(gammaCorrectOutput(decodeGamma3(input.color.rgb)), input.color.a);
		return output;
	}
`,GE=`
	attribute vertex_position: vec4f;
	attribute vertex_color: vec4f;
	uniform matrix_model: mat4x4f;
	uniform matrix_viewProjection: mat4x4f;
	varying color: vec4f;
	@vertex
	fn vertexMain(input : VertexInput) -> VertexOutput {
		var output : VertexOutput;
		output.color = input.vertex_color;
		output.position = uniform.matrix_viewProjection * uniform.matrix_model * input.vertex_position;
		return output;
	}
`,HE=`
uniform material_iridescenceRefractionIndex: f32;
fn iridescence_iorToFresnelScalar(transmittedIor: f32, incidentIor: f32) -> f32 {
	return pow((transmittedIor - incidentIor) / (transmittedIor + incidentIor), 2.0);
}
fn iridescence_iorToFresnelVec3(transmittedIor: vec3f, incidentIor: f32) -> vec3f {
	return pow((transmittedIor - vec3f(incidentIor)) / (transmittedIor + vec3f(incidentIor)), vec3f(2.0));
}
fn iridescence_fresnelToIor(f0: vec3f) -> vec3f {
	let sqrtF0: vec3f = sqrt(f0);
	return (vec3f(1.0) + sqrtF0) / (vec3f(1.0) - sqrtF0);
}
const XYZ_TO_REC709: mat3x3f = mat3x3f(
	vec3f(3.2404542, -1.5371385, -0.4985314),
	vec3f(-0.9692660,  1.8760108,  0.0415560),
	vec3f(0.0556434, -0.2040259,  1.0572252)
);
fn iridescence_sensitivity(opd: f32, shift: vec3f) -> vec3f {
	let PI: f32 = 3.141592653589793;
	let phase: f32 = 2.0 * PI * opd * 1.0e-9;
	const val: vec3f = vec3f(5.4856e-13, 4.4201e-13, 5.2481e-13);
	const pos: vec3f = vec3f(1.6810e+06, 1.7953e+06, 2.2084e+06);
	const var_: vec3f = vec3f(4.3278e+09, 9.3046e+09, 6.6121e+09);
	var xyz: vec3f = val * sqrt(2.0 * PI * var_) * cos(pos * phase + shift) * exp(-pow(phase, 2.0) * var_);
	xyz.x = xyz.x + 9.7470e-14 * sqrt(2.0 * PI * 4.5282e+09) * cos(2.2399e+06 * phase + shift[0]) * exp(-4.5282e+09 * pow(phase, 2.0));
	xyz = xyz / vec3f(1.0685e-07);
	return XYZ_TO_REC709 * xyz;
}
fn iridescence_fresnelScalar(cosTheta: f32, f0: f32) -> f32 {
	let x: f32 = clamp(1.0 - cosTheta, 0.0, 1.0);
	let x2: f32 = x * x;
	let x5: f32 = x * x2 * x2;
	return f0 + (1.0 - f0) * x5;
}
fn iridescence_fresnelVec3(cosTheta: f32, f0: vec3f) -> vec3f {
	let x: f32 = clamp(1.0 - cosTheta, 0.0, 1.0);
	let x2: f32 = x * x;
	let x5: f32 = x * x2 * x2;
	return f0 + (vec3f(1.0) - f0) * x5;
}
fn calcIridescence(outsideIor: f32, cosTheta: f32, base_f0: vec3f, iridescenceThickness: f32) -> vec3f {
	let PI: f32 = 3.141592653589793;
	let iridescenceIor: f32 = mix(outsideIor, uniform.material_iridescenceRefractionIndex, smoothstep(0.0, 0.03, iridescenceThickness));
	let sinTheta2Sq: f32 = pow(outsideIor / iridescenceIor, 2.0) * (1.0 - pow(cosTheta, 2.0));
	let cosTheta2Sq: f32 = 1.0 - sinTheta2Sq;
	if (cosTheta2Sq < 0.0) {
		return vec3f(1.0);
	}
	let cosTheta2: f32 = sqrt(cosTheta2Sq);
	let r0: f32 = iridescence_iorToFresnelScalar(iridescenceIor, outsideIor);
	let r12: f32 = iridescence_fresnelScalar(cosTheta, r0);
	let r21: f32 = r12;
	let t121: f32 = 1.0 - r12;
	let phi12: f32 = select(0.0, PI, iridescenceIor < outsideIor);
	let phi21: f32 = PI - phi12;
	let baseIor: vec3f = iridescence_fresnelToIor(base_f0 + vec3f(0.0001));
	let r1: vec3f = iridescence_iorToFresnelVec3(baseIor, iridescenceIor);
	let r23: vec3f = iridescence_fresnelVec3(cosTheta2, r1);
	let phi23: vec3f = select(vec3f(0.0), vec3f(PI), baseIor < vec3f(iridescenceIor));
	let opd: f32 = 2.0 * iridescenceIor * iridescenceThickness * cosTheta2;
	let phi: vec3f = vec3f(phi21) + phi23;
	let r123Sq: vec3f = clamp(vec3f(r12) * r23, vec3f(1e-5), vec3f(0.9999));
	let r123: vec3f = sqrt(r123Sq);
	let rs: vec3f = pow(vec3f(t121), vec3f(2.0)) * r23 / (vec3f(1.0) - r123Sq);
	let c0: vec3f = vec3f(r12) + rs;
	var i_irid: vec3f = c0;
	var cm: vec3f = rs - vec3f(t121);
	cm = cm * r123;
	let sm1: vec3f = 2.0 * iridescence_sensitivity(1.0 * opd, 1.0 * phi);
	i_irid = i_irid + cm * sm1;
	cm = cm * r123;
	let sm2: vec3f = 2.0 * iridescence_sensitivity(2.0 * opd, 2.0 * phi);
	i_irid = i_irid + cm * sm2;
	return max(i_irid, vec3f(0.0));
}
fn getIridescenceDiffraction(cosTheta: f32, specularity: vec3f, iridescenceThickness: f32) -> vec3f {
	return calcIridescence(1.0, cosTheta, specularity, iridescenceThickness);
}
`,WE=`
#ifdef STD_IRIDESCENCE_CONSTANT
	uniform material_iridescence: f32;
#endif
fn getIridescence() {
	var iridescence = 1.0;
	#ifdef STD_IRIDESCENCE_CONSTANT
	iridescence = iridescence * uniform.material_iridescence;
	#endif
	#ifdef STD_IRIDESCENCE_TEXTURE
	iridescence = iridescence * textureSampleBias({STD_IRIDESCENCE_TEXTURE_NAME}, {STD_IRIDESCENCE_TEXTURE_NAME}Sampler, {STD_IRIDESCENCE_TEXTURE_UV}, uniform.textureBias).{STD_IRIDESCENCE_TEXTURE_CHANNEL};
	#endif
	dIridescence = iridescence; 
}
`,XE=`
uniform material_iridescenceThicknessMax: f32;
#ifdef STD_IRIDESCENCETHICKNESS_TEXTURE
	uniform material_iridescenceThicknessMin: f32;
#endif
fn getIridescenceThickness() {
	#ifdef STD_IRIDESCENCETHICKNESS_TEXTURE
		var blend: f32 = textureSampleBias({STD_IRIDESCENCETHICKNESS_TEXTURE_NAME}, {STD_IRIDESCENCETHICKNESS_TEXTURE_NAME}Sampler, {STD_IRIDESCENCETHICKNESS_TEXTURE_UV}, uniform.textureBias).{STD_IRIDESCENCETHICKNESS_TEXTURE_CHANNEL};
		var iridescenceThickness: f32 = mix(uniform.material_iridescenceThicknessMin, uniform.material_iridescenceThicknessMax, blend);
	#else
		var iridescenceThickness: f32 = uniform.material_iridescenceThicknessMax;
	#endif
	dIridescenceThickness = iridescenceThickness; 
}
`,YE=`
#ifdef STD_IOR_CONSTANT
	uniform material_refractionIndex: f32;
#endif
fn getIor() {
#ifdef STD_IOR_CONSTANT
	dIor = uniform.material_refractionIndex;
#else
	dIor = 1.0 / 1.5;
#endif
}
`,$E=`
#if defined(LIGHT{i})
	uniform light{i}_color: vec3f;
	#if LIGHT{i}TYPE == DIRECTIONAL
		uniform light{i}_direction: vec3f;
	#else
		#define LIT_CODE_LIGHTS_POINT
		uniform light{i}_position: vec3f;
		uniform light{i}_radius: f32;
		#if LIGHT{i}TYPE == SPOT
			#define LIT_CODE_LIGHTS_SPOT
			uniform light{i}_direction: vec3f;
			uniform light{i}_innerConeAngle: f32;
			uniform light{i}_outerConeAngle: f32;
		#endif
	#endif
	#if LIGHT{i}SHAPE != PUNCTUAL
		#define LIT_CODE_FALLOFF_SQUARED
		#if LIGHT{i}TYPE == DIRECTIONAL
			uniform light{i}_position: vec3f;
		#endif
		uniform light{i}_halfWidth: vec3f;
		uniform light{i}_halfHeight: vec3f;
	#else
		#if LIGHT{i}FALLOFF == LINEAR
			#define LIT_CODE_FALLOFF_LINEAR
		#endif
		#if LIGHT{i}FALLOFF == INVERSESQUARED
			#define LIT_CODE_FALLOFF_SQUARED
		#endif
	#endif
	#if defined(LIGHT{i}CASTSHADOW)
		#if LIGHT{i}TYPE != OMNI
			uniform light{i}_shadowMatrix: mat4x4f;
		#endif
		uniform light{i}_shadowIntensity: f32;
		uniform light{i}_shadowParams: vec4f;
		#if LIGHT{i}SHADOWTYPE == PCSS_32F
			uniform light{i}_shadowSearchArea: f32;
			uniform light{i}_cameraParams: vec4f;
			#if LIGHT{i}TYPE == DIRECTIONAL
				uniform light{i}_softShadowParams: vec4f;
				uniform light{i}_shadowCascadeRadii: vec4f;
			#endif
		#endif
		#if LIGHT{i}TYPE == DIRECTIONAL
			uniform light{i}_shadowMatrixPalette: array<mat4x4f, 4>;
			uniform light{i}_shadowCascadeDistances: vec4f;
			uniform light{i}_shadowCascadeCount: i32;
			uniform light{i}_shadowCascadeBlend: f32;
		#endif
		#if LIGHT{i}TYPE == OMNI
			NOT SUPPORTED
		#else
			#if defined(LIGHT{i}SHADOW_PCF)
				var light{i}_shadowMap: texture_depth_2d;
				var light{i}_shadowMapSampler: sampler_comparison;
			#else
				var light{i}_shadowMap: texture_2d<f32>;
				var light{i}_shadowMapSampler: sampler;
			#endif
		#endif
	#endif
	#if defined(LIGHT{i}COOKIE)
		#define LIT_CODE_COOKIE
		#if LIGHT{i}TYPE == OMNI
			NOT SUPPORTED
		#endif
		#if LIGHT{i}TYPE == SPOT
			NOT SUPPORTED
		#endif
	#endif
#endif
`,qE=`
fn getLightDiffuse(worldNormal: vec3f, viewDir: vec3f, lightDirNorm: vec3f) -> f32 {
	return max(dot(worldNormal, -lightDirNorm), 0.0);
}
`,jE=`
fn evalOmniLight(lightPosW: vec3f) -> vec3f {
	return vPositionW - lightPosW;
}
`,KE=`
#if defined(LIGHT{i})
	evaluateLight{i}(
		#if defined(LIT_IRIDESCENCE)
			iridescenceFresnel
		#endif
	);
#endif
`,ZE=`
#if defined(LIGHT{i})
fn evaluateLight{i}(
	#if defined(LIT_IRIDESCENCE)
		iridescenceFresnel: vec3f
	#endif
) {
	var lightColor: vec3f = uniform.light{i}_color;
	#if LIGHT{i}TYPE == DIRECTIONAL && !defined(LIT_SHADOW_CATCHER)
		if (all(lightColor == vec3f(0.0, 0.0, 0.0))) {
			return;
		}
	#endif
	#if LIGHT{i}TYPE == DIRECTIONAL
		dLightDirNormW = uniform.light{i}_direction;
		dAtten = 1.0;
	#else
		var lightDirW: vec3f = evalOmniLight(uniform.light{i}_position);
		dLightDirNormW = normalize(lightDirW);
		#if defined(LIGHT{i}COOKIE)
			#if LIGHT{i}TYPE == SPOT
				#ifdef LIGHT{i}COOKIE_FALLOFF
					#ifdef LIGHT{i}COOKIE_TRANSFORM
						var cookieAttenuation: vec3f = getCookie2DXform(uniform.light{i}_cookie, uniform.light{i}_shadowMatrix, uniform.light{i}_cookieIntensity, uniform.light{i}_cookieMatrix, uniform.light{i}_cookieOffset).{LIGHT{i}COOKIE_CHANNEL};
					#else
						var cookieAttenuation: vec3f = getCookie2D(uniform.light{i}_cookie, uniform.light{i}_shadowMatrix, uniform.light{i}_cookieIntensity).{LIGHT{i}COOKIE_CHANNEL};
					#endif
				#else
					#ifdef LIGHT{i}COOKIE_TRANSFORM
						var cookieAttenuation: vec3f = getCookie2DClipXform(uniform.light{i}_cookie, uniform.light{i}_shadowMatrix, uniform.light{i}_cookieIntensity, uniform.light{i}_cookieMatrix, uniform.light{i}_cookieOffset).{LIGHT{i}COOKIE_CHANNEL};
					#else
						var cookieAttenuation: vec3f = getCookie2DClip(uniform.light{i}_cookie, uniform.light{i}_shadowMatrix, uniform.light{i}_cookieIntensity).{LIGHT{i}COOKIE_CHANNEL};
					#endif
				#endif
			#endif
			#if LIGHT{i}TYPE == OMNI
				var cookieAttenuation: vec3f = getCookieCube(uniform.light{i}_cookie, uniform.light{i}_shadowMatrix, uniform.light{i}_cookieIntensity).{LIGHT{i}COOKIE_CHANNEL};
			#endif
			lightColor = lightColor * cookieAttenuation;
		#endif
		#if LIGHT{i}SHAPE == PUNCTUAL
			#if LIGHT{i}FALLOFF == LINEAR
				dAtten = getFalloffLinear(uniform.light{i}_radius, lightDirW);
			#else
				dAtten = getFalloffInvSquared(uniform.light{i}_radius, lightDirW);
			#endif
		#else
			dAtten = getFalloffWindow(uniform.light{i}_radius, lightDirW);
		#endif
		#if LIGHT{i}TYPE == SPOT
			#if !defined(LIGHT{i}COOKIE) || defined(LIGHT{i}COOKIE_FALLOFF)
				dAtten = dAtten * getSpotEffect(uniform.light{i}_direction, uniform.light{i}_innerConeAngle, uniform.light{i}_outerConeAngle, dLightDirNormW);
			#endif
		#endif
	#endif
	if (dAtten < 0.00001) {
		return;
	}
	#if LIGHT{i}SHAPE != PUNCTUAL
		#if LIGHT{i}SHAPE == RECT
			calcRectLightValues(uniform.light{i}_position, uniform.light{i}_halfWidth, uniform.light{i}_halfHeight);
		#elif LIGHT{i}SHAPE == DISK
			calcDiskLightValues(uniform.light{i}_position, uniform.light{i}_halfWidth, uniform.light{i}_halfHeight);
		#elif LIGHT{i}SHAPE == SPHERE
			calcSphereLightValues(uniform.light{i}_position, uniform.light{i}_halfWidth, uniform.light{i}_halfHeight);
		#endif
	#endif
	#if LIGHT{i}SHAPE != PUNCTUAL
		#if LIGHT{i}TYPE == DIRECTIONAL
			var attenDiffuse: f32 = getLightDiffuse(litArgs_worldNormal, dViewDirW, dLightDirNormW);
		#else
			#if LIGHT{i}SHAPE == RECT
				var attenDiffuse: f32 = getRectLightDiffuse(litArgs_worldNormal, dViewDirW, lightDirW, dLightDirNormW) * 16.0;
			#elif LIGHT{i}SHAPE == DISK
				var attenDiffuse: f32 = getDiskLightDiffuse(litArgs_worldNormal, dViewDirW, lightDirW, dLightDirNormW) * 16.0;
			#elif LIGHT{i}SHAPE == SPHERE
				var attenDiffuse: f32 = getSphereLightDiffuse(litArgs_worldNormal, dViewDirW, lightDirW, dLightDirNormW) * 16.0;
			#endif
		#endif
	#else
		dAtten = dAtten * getLightDiffuse(litArgs_worldNormal, vec3(0.0), dLightDirNormW);
	#endif
	#ifdef LIGHT{i}CASTSHADOW
		#if LIGHT{i}TYPE == DIRECTIONAL
			var shadow: f32 = getShadow{i}(vec3(0.0));
		#else
			var shadow: f32 = getShadow{i}(lightDirW);
		#endif
		shadow = mix(1.0, shadow, uniform.light{i}_shadowIntensity);
		dAtten = dAtten * shadow;
		#if defined(LIT_SHADOW_CATCHER) && LIGHT{i}TYPE == DIRECTIONAL
			dShadowCatcher = dShadowCatcher * shadow;
		#endif			
	#endif
	#if LIGHT{i}SHAPE != PUNCTUAL
		#ifdef LIT_SPECULAR
			dDiffuseLight = dDiffuseLight + (((attenDiffuse * dAtten) * lightColor) * (1.0 - dLTCSpecFres));
		#else
			dDiffuseLight = dDiffuseLight + ((attenDiffuse * dAtten) * lightColor);
		#endif						
	#else
		#if defined(AREA_LIGHTS) && defined(LIT_SPECULAR)
			dDiffuseLight = dDiffuseLight + ((dAtten * lightColor) * (1.0 - litArgs_specularity));
		#else
			dDiffuseLight = dDiffuseLight + (dAtten * lightColor);
		#endif
	#endif
	#ifdef LIGHT{i}AFFECT_SPECULARITY
		#if LIGHT{i}SHAPE != PUNCTUAL
			#ifdef LIT_CLEARCOAT
				#if LIGHT{i}SHAPE == RECT
					ccSpecularLight = ccSpecularLight + (ccLTCSpecFres * getRectLightSpecular(litArgs_clearcoat_worldNormal, dViewDirW) * dAtten * lightColor);
				#elif LIGHT{i}SHAPE == DISK
					ccSpecularLight = ccSpecularLight + (ccLTCSpecFres * getDiskLightSpecular(litArgs_clearcoat_worldNormal, dViewDirW) * dAtten * lightColor);
				#elif LIGHT{i}SHAPE == SPHERE
					ccSpecularLight = ccSpecularLight + (ccLTCSpecFres * getSphereLightSpecular(litArgs_clearcoat_worldNormal, dViewDirW) * dAtten * lightColor);
				#endif
			#endif
			#ifdef LIT_SPECULAR
				#if LIGHT{i}SHAPE == RECT
					dSpecularLight = dSpecularLight + (dLTCSpecFres * getRectLightSpecular(litArgs_worldNormal, dViewDirW) * dAtten * lightColor);
				#elif LIGHT{i}SHAPE == DISK
					dSpecularLight = dSpecularLight + (dLTCSpecFres * getDiskLightSpecular(litArgs_worldNormal, dViewDirW) * dAtten * lightColor);
				#elif LIGHT{i}SHAPE == SPHERE
					dSpecularLight = dSpecularLight + (dLTCSpecFres * getSphereLightSpecular(litArgs_worldNormal, dViewDirW) * dAtten * lightColor);
				#endif
			#endif
		#else
			#if LIGHT{i}TYPE == DIRECTIONAL && LIT_FRESNEL_MODEL != NONE
				#define LIGHT{i}FRESNEL
			#endif
			#ifdef LIT_SPECULAR
				var halfDirW: vec3f = normalize(-dLightDirNormW + dViewDirW);
			#endif
			#ifdef LIT_CLEARCOAT
				var lightspecularCC: vec3f = getLightSpecular(halfDirW, ccReflDirW, litArgs_clearcoat_worldNormal, dViewDirW, dLightDirNormW, litArgs_clearcoat_gloss, dTBN) * dAtten * lightColor;
				#ifdef LIGHT{i}FRESNEL
					lightspecularCC = lightspecularCC * getFresnelCC(dot(dViewDirW, halfDirW));
				#endif
				ccSpecularLight = ccSpecularLight + lightspecularCC;
			#endif
			#ifdef LIT_SHEEN
				sSpecularLight = sSpecularLight + (getLightSpecularSheen(halfDirW, litArgs_worldNormal, dViewDirW, dLightDirNormW, litArgs_sheen_gloss) * dAtten * lightColor);
			#endif
			#ifdef LIT_SPECULAR
				var lightSpecular: vec3f = getLightSpecular(halfDirW, dReflDirW, litArgs_worldNormal, dViewDirW, dLightDirNormW, litArgs_gloss, dTBN) * dAtten * lightColor;
				#ifdef LIGHT{i}FRESNEL
					#if defined(LIT_IRIDESCENCE)
						lightSpecular = lightSpecular * getFresnel(dot(dViewDirW, halfDirW), litArgs_gloss, litArgs_specularity, iridescenceFresnel, litArgs_iridescence_intensity);
					#else
						lightSpecular = lightSpecular * getFresnel(dot(dViewDirW, halfDirW), litArgs_gloss, litArgs_specularity);
					#endif
				#else
					lightSpecular = lightSpecular * litArgs_specularity;
				#endif
				
				dSpecularLight = dSpecularLight + lightSpecular;
			#endif
		#endif
	#endif
}
#endif
`,JE=`
#ifdef LIGHT{i}CASTSHADOW
	#ifdef LIGHT{i}_SHADOW_SAMPLE_POINT
		fn getShadowSampleCoordOmni{i}(shadowParams: vec4f, worldPosition: vec3f, lightPos: vec3f, lightDir: ptr<function, vec3f>, lightDirNorm: vec3f, normal: vec3f) -> vec3f {
			#ifdef LIGHT{i}_SHADOW_SAMPLE_NORMAL_OFFSET
				let distScale: f32 = length(*lightDir);
				var surfacePosition = worldPosition + normal * shadowParams.y * clamp(1.0 - dot(normal, -lightDirNorm), 0.0, 1.0) * distScale;
				*lightDir = surfacePosition - lightPos;
			#endif
			return *lightDir;
		}
	#endif
	#ifndef LIGHT{i}_SHADOW_SAMPLE_POINT
		fn getShadowSampleCoord{i}(shadowTransform: mat4x4f, shadowParams: vec4f, worldPosition: vec3f, lightPos: vec3f, lightDir: ptr<function, vec3f>, lightDirNorm: vec3f, normal: vec3f) -> vec3f {
			var surfacePosition = worldPosition;
			#ifdef LIGHT{i}_SHADOW_SAMPLE_SOURCE_ZBUFFER
				#ifdef LIGHT{i}_SHADOW_SAMPLE_NORMAL_OFFSET
					surfacePosition = surfacePosition + normal * shadowParams.y;
				#endif
			#else
				#ifdef LIGHT{i}_SHADOW_SAMPLE_NORMAL_OFFSET
					#ifdef LIGHT{i}_SHADOW_SAMPLE_ORTHO
						var distScale: f32 = 1.0;
					#else
						var distScale: f32 = abs(dot(vPositionW - lightPos, lightDirNorm));
					#endif
					surfacePosition = surfacePosition + normal * shadowParams.y * clamp(1.0 - dot(normal, -lightDirNorm), 0.0, 1.0) * distScale;
				#endif
			#endif
			var positionInShadowSpace: vec4f = shadowTransform * vec4f(surfacePosition, 1.0);
			#ifdef LIGHT{i}_SHADOW_SAMPLE_ORTHO
				positionInShadowSpace.z = saturate(positionInShadowSpace.z) - 0.0001;
			#else
				#ifdef LIGHT{i}_SHADOW_SAMPLE_SOURCE_ZBUFFER
					positionInShadowSpace.xyz = positionInShadowSpace.xyz / positionInShadowSpace.w;
				#else
					positionInShadowSpace.xy = positionInShadowSpace.xy / positionInShadowSpace.w;
					positionInShadowSpace.z = length(*lightDir) * shadowParams.w;
				#endif
			#endif
			return positionInShadowSpace.xyz;
		}
	#endif
	fn getShadow{i}(lightDirW_in: vec3f) -> f32 {
		var lightDirArg = lightDirW_in;
		#if LIGHT{i}TYPE == OMNI
			var shadowCoord: vec3f = getShadowSampleCoordOmni{i}(uniform.light{i}_shadowParams, vPositionW, uniform.light{i}_position, &lightDirArg, dLightDirNormW, dVertexNormalW);
		#else
			#ifdef LIGHT{i}_SHADOW_CASCADES
				var cascadeIndex: i32 = getShadowCascadeIndex(uniform.light{i}_shadowCascadeDistances, uniform.light{i}_shadowCascadeCount);
				#ifdef LIGHT{i}_SHADOW_CASCADE_BLEND
					cascadeIndex = ditherShadowCascadeIndex(cascadeIndex, uniform.light{i}_shadowCascadeDistances, uniform.light{i}_shadowCascadeCount, uniform.light{i}_shadowCascadeBlend);
				#endif
				var shadowMatrix: mat4x4f = uniform.light{i}_shadowMatrixPalette[cascadeIndex];
			#else
				var shadowMatrix: mat4x4f = uniform.light{i}_shadowMatrix;
			#endif
			#if LIGHT{i}TYPE == DIRECTIONAL
				var shadowCoord: vec3f = getShadowSampleCoord{i}(shadowMatrix, uniform.light{i}_shadowParams, vPositionW, vec3f(0.0), &lightDirArg, dLightDirNormW, dVertexNormalW);
			#else
				var shadowCoord: vec3f = getShadowSampleCoord{i}(shadowMatrix, uniform.light{i}_shadowParams, vPositionW, uniform.light{i}_position, &lightDirArg, dLightDirNormW, dVertexNormalW);
			#endif
		#endif
		#if LIGHT{i}TYPE == DIRECTIONAL
			shadowCoord = fadeShadow(shadowCoord, uniform.light{i}_shadowCascadeDistances);
		#endif
		#if LIGHT{i}TYPE == DIRECTIONAL
			#if LIGHT{i}SHADOWTYPE == VSM_16F
				return getShadowVSM16(light{i}_shadowMap, light{i}_shadowMapSampler, shadowCoord, uniform.light{i}_shadowParams, 5.54);
			#endif
			#if LIGHT{i}SHADOWTYPE == VSM_32F
				return getShadowVSM32(light{i}_shadowMap, light{i}_shadowMapSampler, shadowCoord, uniform.light{i}_shadowParams, 15.0);
			#endif
			#if LIGHT{i}SHADOWTYPE == PCSS_32F
				#if LIGHT{i}SHAPE != PUNCTUAL
					let shadowSearchArea = vec2f(length(uniform.light{i}_halfWidth), length(uniform.light{i}_halfHeight)) * uniform.light{i}_shadowSearchArea;
					return getShadowPCSS(light{i}_shadowMap, light{i}_shadowMapSampler, shadowCoord, uniform.light{i}_shadowParams, uniform.light{i}_cameraParams, shadowSearchArea, lightDirW_in);
				#else
					var pcssCameraParams: vec4f = uniform.light{i}_cameraParams;
					#ifdef LIGHT{i}_SHADOW_CASCADES
						var cascadeRadii: vec4f = uniform.light{i}_shadowCascadeRadii;
						pcssCameraParams.x = cascadeRadii[cascadeIndex];
					#endif
					return getShadowPCSS(light{i}_shadowMap, light{i}_shadowMapSampler, shadowCoord, uniform.light{i}_shadowParams, pcssCameraParams, uniform.light{i}_softShadowParams, lightDirW_in);
				#endif
			#endif
			#if LIGHT{i}SHADOWTYPE == PCF1_16F || LIGHT{i}SHADOWTYPE == PCF1_32F
				return getShadowPCF1x1(light{i}_shadowMap, light{i}_shadowMapSampler, shadowCoord, uniform.light{i}_shadowParams);
			#endif
			#if LIGHT{i}SHADOWTYPE == PCF3_16F || LIGHT{i}SHADOWTYPE == PCF3_32F
				return getShadowPCF3x3(light{i}_shadowMap, light{i}_shadowMapSampler, shadowCoord, uniform.light{i}_shadowParams);
			#endif
			#if LIGHT{i}SHADOWTYPE == PCF5_16F || LIGHT{i}SHADOWTYPE == PCF5_32F
				return getShadowPCF5x5(light{i}_shadowMap, light{i}_shadowMapSampler, shadowCoord, uniform.light{i}_shadowParams);
			#endif
		#endif
		#if LIGHT{i}TYPE == SPOT
			#if LIGHT{i}SHADOWTYPE == VSM_16F
				return getShadowSpotVSM16(light{i}_shadowMap, light{i}_shadowMapSampler, shadowCoord, uniform.light{i}_shadowParams, 5.54, lightDirW_in);
			#endif
			#if LIGHT{i}SHADOWTYPE == VSM_32F
				return getShadowSpotVSM32(light{i}_shadowMap, light{i}_shadowMapSampler, shadowCoord, uniform.light{i}_shadowParams, 15.0, lightDirW_in);
			#endif
			#if LIGHT{i}SHADOWTYPE == PCSS_32F
				#if LIGHT{i}SHAPE != PUNCTUAL
					var shadowSearchArea: vec2f = vec2f(length(uniform.light{i}_halfWidth), length(uniform.light{i}_halfHeight)) * uniform.light{i}_shadowSearchArea;
				#else
					var shadowSearchArea: vec2f = vec2f(uniform.light{i}_shadowSearchArea);
				#endif
				return getShadowSpotPCSS(light{i}_shadowMap, light{i}_shadowMapSampler, shadowCoord, uniform.light{i}_shadowParams, uniform.light{i}_cameraParams, shadowSearchArea, lightDirW_in);
			#endif
			#if LIGHT{i}SHADOWTYPE == PCF1_16F || LIGHT{i}SHADOWTYPE == PCF1_32F
				return getShadowSpotPCF1x1(light{i}_shadowMap, light{i}_shadowMapSampler, shadowCoord, uniform.light{i}_shadowParams);
			#endif
			#if LIGHT{i}SHADOWTYPE == PCF3_16F || LIGHT{i}SHADOWTYPE == PCF3_32F
				return getShadowSpotPCF3x3(light{i}_shadowMap, light{i}_shadowMapSampler, shadowCoord, uniform.light{i}_shadowParams);
			#endif
			#if LIGHT{i}SHADOWTYPE == PCF5_16F || LIGHT{i}SHADOWTYPE == PCF5_32F
				return getShadowSpotPCF5x5(light{i}_shadowMap, light{i}_shadowMapSampler, shadowCoord, uniform.light{i}_shadowParams);
			#endif
		#endif
		#if LIGHT{i}TYPE == OMNI
			#if LIGHT{i}SHADOWTYPE == PCSS_32F
				 var shadowSearchArea: vec2f;
				 #if LIGHT{i}SHAPE != PUNCTUAL
					var shadowSearchArea: vec2f = vec2f(length(uniform.light{i}_halfWidth), length(uniform.light{i}_halfHeight)) * uniform.light{i}_shadowSearchArea;
				#else
					var shadowSearchArea: vec2f = vec2f(uniform.light{i}_shadowSearchArea);
				#endif
				return getShadowOmniPCSS(light{i}_shadowMap, light{i}_shadowMapSampler, shadowCoord, uniform.light{i}_shadowParams, uniform.light{i}_cameraParams, shadowSearchArea, lightDirW_in);
			#endif
			#if LIGHT{i}SHADOWTYPE == PCF1_16F || LIGHT{i}SHADOWTYPE == PCF1_32F
				return getShadowOmniPCF1x1(light{i}_shadowMap, light{i}_shadowMapSampler, shadowCoord, uniform.light{i}_shadowParams, lightDirW_in);
			#endif
			#if LIGHT{i}SHADOWTYPE == PCF3_16F || LIGHT{i}SHADOWTYPE == PCF3_32F
				return getShadowOmniPCF3x3(light{i}_shadowMap, light{i}_shadowMapSampler, shadowCoord, uniform.light{i}_shadowParams, lightDirW_in);
			#endif
		#endif
	}
#endif
`,QE=`
#ifdef LIT_CLUSTERED_LIGHTS
	#define LIT_CODE_FALLOFF_LINEAR
	#define LIT_CODE_FALLOFF_SQUARED
	#define LIT_CODE_LIGHTS_POINT
	#define LIT_CODE_LIGHTS_SPOT
#endif
#ifdef AREA_LIGHTS
	var areaLightsLutTex1: texture_2d<f32>;
	var areaLightsLutTex1Sampler: sampler;
	var areaLightsLutTex2: texture_2d<f32>;
	var areaLightsLutTex2Sampler: sampler;
#endif
#ifdef LIT_LIGHTING
	#include "lightDiffuseLambertPS"
	#if defined(AREA_LIGHTS) || defined(LIT_CLUSTERED_AREA_LIGHTS)
		#include "ltcPS"
	#endif
#endif
#ifdef SHADOW_DIRECTIONAL
	#include "shadowCascadesPS"
#endif
#if defined(SHADOW_KIND_PCF1)
	#include "shadowPCF1PS"
#endif
#if defined(SHADOW_KIND_PCF3)
	#include "shadowPCF3PS"
#endif
#if defined(SHADOW_KIND_PCF5)
	#include "shadowPCF5PS"
#endif
#if defined(SHADOW_KIND_PCSS)
	#include "linearizeDepthPS"
	#include "shadowSoftPS"
#endif
#if defined(SHADOW_KIND_VSM)
	#include "shadowEVSMPS"
#endif
#ifdef LIT_CODE_FALLOFF_LINEAR
	#include "falloffLinearPS"
#endif
#ifdef LIT_CODE_FALLOFF_SQUARED
	#include "falloffInvSquaredPS"
#endif
#ifdef LIT_CODE_LIGHTS_POINT
	#include "lightDirPointPS"
#endif
#ifdef LIT_CODE_LIGHTS_SPOT
	#include "spotPS"
#endif
#ifdef LIT_CODE_COOKIE
	#include "cookiePS"
#endif
#ifdef LIT_CLUSTERED_LIGHTS
	#include "clusteredLightPS"
#endif
#ifdef LIGHT_COUNT > 0
	#include "lightFunctionShadowPS, LIGHT_COUNT"
	#include "lightFunctionLightPS, LIGHT_COUNT"
#endif
`,ey=`
fn addLightMap(
	lightmap: vec3f,
	dir: vec3f,
	worldNormal: vec3f,
	viewDir: vec3f,
	reflectionDir: vec3f,
	gloss: f32,
	specularity: vec3f,
	vertexNormal: vec3f,
	tbn: mat3x3f
#if defined(LIT_IRIDESCENCE)
	, iridescenceFresnel: vec3f,
	iridescenceIntensity: f32
#endif
) {
	#if defined(LIT_SPECULAR) && defined(LIT_DIR_LIGHTMAP)
		if (dot(dir, dir) < 0.0001) {
				dDiffuseLight = dDiffuseLight + lightmap;
		} else {
			let vlight: f32 = saturate(dot(dir, -vertexNormal));
			let flight: f32 = saturate(dot(dir, -worldNormal));
			let nlight: f32 = (flight / max(vlight, 0.01)) * 0.5;
			dDiffuseLight = dDiffuseLight + lightmap * nlight * 2.0;
			let halfDir: vec3f = normalize(-dir + viewDir);
			var specularLight: vec3f = lightmap * getLightSpecular(halfDir, reflectionDir, worldNormal, viewDir, dir, gloss, tbn);
			#ifdef LIT_SPECULAR_FRESNEL
				specularLight = specularLight *
					getFresnel(dot(viewDir, halfDir),
					gloss,
					specularity
				#if defined(LIT_IRIDESCENCE)
					, iridescenceFresnel,
					iridescenceIntensity
				#endif
					);
			#endif
			dSpecularLight = dSpecularLight + specularLight;
		}
	#else
		dDiffuseLight = dDiffuseLight + lightmap;
	#endif
}
`,ty=`
#ifdef STD_LIGHTMAP_DIR
	var<private> dLightmapDir: vec3f;
	var texture_dirLightMap: texture_2d<f32>;
	var texture_dirLightMapSampler: sampler;
#endif
fn getLightMap() {
	dLightmap = vec3f(1.0);
	#ifdef STD_LIGHT_TEXTURE
		dLightmap = dLightmap * {STD_LIGHT_TEXTURE_DECODE}(textureSampleBias({STD_LIGHT_TEXTURE_NAME}, {STD_LIGHT_TEXTURE_NAME}Sampler, {STD_LIGHT_TEXTURE_UV}, uniform.textureBias)).{STD_LIGHT_TEXTURE_CHANNEL};
		#ifdef STD_LIGHTMAP_DIR
			var dir: vec3f = textureSampleBias(texture_dirLightMap, texture_dirLightMapSampler, {STD_LIGHT_TEXTURE_UV}, uniform.textureBias).xyz * 2.0 - 1.0;
			var dirDot = dot(dir, dir);
			dLightmapDir = select(vec3(0.0), dir / sqrt(dirDot), dirDot > 0.001);
		#endif
	#endif
	#ifdef STD_LIGHT_VERTEX
		dLightmap = dLightmap * saturate(vVertexColor.{STD_LIGHT_VERTEX_CHANNEL});
	#endif
}
`,iy=`
fn calcLightSpecular(gloss: f32, worldNormal: vec3f, viewDir: vec3f, h: vec3f, lightDirNorm: vec3f, tbn: mat3x3f) -> f32 {
	let PI: f32 = 3.141592653589793;
	let roughness: f32 = max((1.0 - gloss) * (1.0 - gloss), 0.001);
	let alphaRoughness: f32 = roughness * roughness;
	let anisotropy: f32 = dAnisotropy;
	let direction: vec2f = dAnisotropyRotation;
	let at: f32 = mix(alphaRoughness, 1.0, anisotropy * anisotropy);
	let ab: f32 = clamp(alphaRoughness, 0.001, 1.0);
	let anisotropicT: vec3f = normalize(tbn * vec3f(direction, 0.0));
	let anisotropicB: vec3f = normalize(cross(tbn[2], anisotropicT));
	let NoH: f32 = dot(worldNormal, h);
	let ToH: f32 = dot(anisotropicT, h);
	let BoH: f32 = dot(anisotropicB, h);
	let a2: f32 = at * ab;
	let v: vec3f = vec3f(ab * ToH, at * BoH, a2 * NoH);
	let v2: f32 = dot(v, v);
	let w2: f32 = a2 / v2;
	let D: f32 = a2 * w2 * w2 * (1.0 / PI);
	let ToV: f32 = dot(anisotropicT, viewDir);
	let BoV: f32 = dot(anisotropicB, viewDir);
	let ToL: f32 = dot(anisotropicT, -lightDirNorm);
	let BoL: f32 = dot(anisotropicB, -lightDirNorm);
	let NoV: f32 = dot(worldNormal, viewDir);
	let NoL: f32 = dot(worldNormal, -lightDirNorm);
	let lambdaV: f32 = NoL * length(vec3f(at * ToV, ab * BoV, NoV));
	let lambdaL: f32 = NoV * length(vec3f(at * ToL, ab * BoL, NoL));
	let G: f32 = 0.5 / (lambdaV + lambdaL);
	return D * G;
}
fn getLightSpecular(h: vec3f, reflDir: vec3f, worldNormal: vec3f, viewDir: vec3f, lightDirNorm: vec3f, gloss: f32, tbn: mat3x3f) -> f32 {
	return calcLightSpecular(gloss, worldNormal, viewDir, h, lightDirNorm, tbn);
}
`,sy=`
fn calcLightSpecular(gloss: f32, worldNormal: vec3f, viewDir: vec3f, h: vec3f, lightDirNorm: vec3f) -> f32 {
	const PI: f32 = 3.141592653589793;
	let roughness: f32 = max((1.0 - gloss) * (1.0 - gloss), 0.001);
	let alpha: f32 = roughness * roughness;
	let NoH: f32 = max(dot(worldNormal, h), 0.0);
	let NoV: f32 = max(dot(worldNormal, viewDir), 0.0);
	let NoL: f32 = max(dot(worldNormal, -lightDirNorm), 0.0);
	let NoH2: f32 = NoH * NoH;
	let denom: f32 = NoH2 * (alpha - 1.0) + 1.0;
	let D: f32 = alpha / (PI * denom * denom);
	let alpha2: f32 = alpha * alpha;
	let lambdaV: f32 = NoL * sqrt(NoV * NoV * (1.0 - alpha2) + alpha2);
	let lambdaL: f32 = NoV * sqrt(NoL * NoL * (1.0 - alpha2) + alpha2);
	let G: f32 = 0.5 / max(lambdaV + lambdaL, 0.00001);
	return D * G;
}
fn getLightSpecular(h: vec3f, reflDir: vec3f, worldNormal: vec3f, viewDir: vec3f, lightDirNorm: vec3f, gloss: f32, tbn: mat3x3f) -> f32 {
	return calcLightSpecular(gloss, worldNormal, viewDir, h, lightDirNorm);
}
`,ay=`
fn calcLightSpecular(gloss: f32, worldNormal: vec3f, h: vec3f) -> f32 {
	let nh: f32 = max( dot( h, worldNormal ), 0.0 );
	var specPow: f32 = exp2(gloss * 11.0);
	specPow = max(specPow, 0.0001);
	return pow(nh, specPow) * (specPow + 2.0) / 8.0;
}
fn getLightSpecular(h: vec3f, reflDir: vec3f, worldNormal: vec3f, viewDir: vec3f, lightDirNorm: vec3f, gloss: f32, tbn: mat3x3f) -> f32 {
	return calcLightSpecular(gloss, worldNormal, h);
}
`,ry=`
fn sheenD(normal: vec3f, h: vec3f, roughness: f32) -> f32 {
	let PI: f32 = 3.141592653589793;
	let invR: f32 = 1.0 / (roughness * roughness);
	var cos2h: f32 = max(dot(normal, h), 0.0);
	cos2h = cos2h * cos2h;
	let sin2h: f32 = max(1.0 - cos2h, 0.0078125);
	return (2.0 + invR) * pow(sin2h, invR * 0.5) / (2.0 * PI);
}
fn sheenV(normal: vec3f, viewDir: vec3f, light: vec3f) -> f32 {
	let NoV: f32 = max(dot(normal, viewDir), 0.000001);
	let NoL: f32 = max(dot(normal, light), 0.000001);
	return 1.0 / (4.0 * (NoL + NoV - NoL * NoV));
}
fn getLightSpecularSheen(h: vec3f, worldNormal: vec3f, viewDir: vec3f, lightDirNorm: vec3f, sheenGloss: f32) -> f32 {
	let D: f32 = sheenD(worldNormal, h, sheenGloss);
	let V: f32 = sheenV(worldNormal, viewDir, -lightDirNorm);
	return D * V;
}`,ny=`
#ifndef LINEARIZE_DEPTH
#define LINEARIZE_DEPTH
fn linearizeDepthWithParams(z: f32, cameraParams: vec4f) -> f32 {
	if (cameraParams.w == 0.0) {
		return (cameraParams.z * cameraParams.y) / (cameraParams.y + z * (cameraParams.z - cameraParams.y));
	} else {
		return cameraParams.z + z * (cameraParams.y - cameraParams.z);
	}
}
#ifndef CAMERAPLANES
	#define CAMERAPLANES
	uniform camera_params: vec4f;
#endif
fn linearizeDepth(z: f32) -> f32 {
	return linearizeDepthWithParams(z, uniform.camera_params);
}
#endif
`,oy=`
fn evaluateBackend() -> FragmentOutput {
	var output: FragmentOutput;
	#ifdef LIT_SSAO
		litArgs_ao = litArgs_ao * textureSampleLevel(ssaoTexture, ssaoTextureSampler, pcPosition.xy * uniform.ssaoTextureSizeInv, 0.0).r;
	#endif
	#ifdef LIT_NEEDS_NORMAL
		#ifdef LIT_SPECULAR
			getReflDir(litArgs_worldNormal, dViewDirW, litArgs_gloss, dTBN);
		#endif
		#ifdef LIT_CLEARCOAT
			ccReflDirW = normalize(-reflect(dViewDirW, litArgs_clearcoat_worldNormal));
		#endif
	#endif
	#ifdef LIT_SPECULAR_OR_REFLECTION
		#ifdef LIT_METALNESS
			var f0: f32 = 1.0 / litArgs_ior;
			f0 = (f0 - 1.0) / (f0 + 1.0);
			f0 = f0 * f0;
			#ifdef LIT_SPECULARITY_FACTOR
				litArgs_specularity = getSpecularModulate(litArgs_specularity, litArgs_albedo, litArgs_metalness, f0, litArgs_specularityFactor);
			#else
				litArgs_specularity = getSpecularModulate(litArgs_specularity, litArgs_albedo, litArgs_metalness, f0, 1.0);
			#endif
			litArgs_albedo = getAlbedoModulate(litArgs_albedo, litArgs_metalness);
		#endif
		#ifdef LIT_IRIDESCENCE
			var iridescenceFresnel: vec3f = getIridescenceDiffraction(saturate(dot(dViewDirW, litArgs_worldNormal)), litArgs_specularity, litArgs_iridescence_thickness);
		#endif
	#endif
	#ifdef LIT_ADD_AMBIENT
		addAmbient(litArgs_worldNormal);
		#ifdef LIT_SPECULAR
			dDiffuseLight = dDiffuseLight * (1.0 - litArgs_specularity);
		#endif
		#ifdef LIT_SEPARATE_AMBIENT
			var dAmbientLight: vec3f = dDiffuseLight;
			dDiffuseLight = vec3(0.0);
		#endif
	#endif
	#ifndef LIT_OLD_AMBIENT
		dDiffuseLight = dDiffuseLight * uniform.material_ambient;
	#endif
	#ifdef LIT_AO
		#ifndef LIT_OCCLUDE_DIRECT
			occludeDiffuse(litArgs_ao);
		#endif
	#endif
	#ifdef LIT_LIGHTMAP
		addLightMap(
			litArgs_lightmap, 
			litArgs_lightmapDir, 
			litArgs_worldNormal, 
			dViewDirW, 
			dReflDirW, 
			litArgs_gloss, 
			litArgs_specularity, 
			dVertexNormalW,
			dTBN
		#if defined(LIT_IRIDESCENCE)
			, iridescenceFresnel,
			litArgs_iridescence_intensity
		#endif
		);
	#endif
	#ifdef LIT_LIGHTING || LIT_REFLECTIONS
		#ifdef LIT_REFLECTIONS
			#ifdef LIT_CLEARCOAT
				addReflectionCC(ccReflDirW, litArgs_clearcoat_gloss);
			
				#ifdef LIT_SPECULAR_FRESNEL
					ccFresnel = getFresnelCC(dot(dViewDirW, litArgs_clearcoat_worldNormal));
					ccReflection = ccReflection * ccFresnel;
				#else
					ccFresnel = 0.0;
				#endif
			#endif
			#ifdef LIT_SPECULARITY_FACTOR
				ccReflection = ccReflection * litArgs_specularityFactor;
			#endif
			#ifdef LIT_SHEEN
				addReflectionSheen(litArgs_worldNormal, dViewDirW, litArgs_sheen_gloss);
			#endif
			addReflection(dReflDirW, litArgs_gloss);
			#ifdef LIT_FRESNEL_MODEL
				dReflection = vec4f(
					dReflection.rgb * getFresnel(
						dot(dViewDirW, litArgs_worldNormal),
						litArgs_gloss,
						litArgs_specularity
					#if defined(LIT_IRIDESCENCE)
						, iridescenceFresnel,
						litArgs_iridescence_intensity
					#endif
						),
					dReflection.a
				);
			#else
				dReflection = vec4f(dReflection.rgb * litArgs_specularity, dReflection.a);
			#endif
		#endif
		#ifdef AREA_LIGHTS
			dSpecularLight = dSpecularLight * litArgs_specularity;
			#ifdef LIT_SPECULAR
				calcLTCLightValues(litArgs_gloss, litArgs_worldNormal, dViewDirW, litArgs_specularity, litArgs_clearcoat_gloss, litArgs_clearcoat_worldNormal, litArgs_clearcoat_specularity);
			#endif
		#endif
		
		#ifdef LIGHT_COUNT > 0
			#include "lightEvaluationPS, LIGHT_COUNT"
		#endif
		#ifdef LIT_CLUSTERED_LIGHTS
			addClusteredLights(litArgs_worldNormal, dViewDirW, dReflDirW,
				#if defined(LIT_CLEARCOAT)
						ccReflDirW,
				#endif
						litArgs_gloss, litArgs_specularity, dVertexNormalW, dTBN, 
				#if defined(LIT_IRIDESCENCE)
						iridescenceFresnel,
				#endif
						litArgs_clearcoat_worldNormal, litArgs_clearcoat_gloss, litArgs_sheen_gloss, litArgs_iridescence_intensity
			);
		#endif
		#ifdef AREA_LIGHTS
			#ifdef LIT_CLEARCOAT
				litArgs_clearcoat_specularity = 1.0;
			#endif
			#ifdef LIT_SPECULAR
				litArgs_specularity = vec3(1.0);
			#endif
		#endif
		#ifdef LIT_REFRACTION
			addRefraction(
				litArgs_worldNormal, 
				dViewDirW, 
				litArgs_thickness, 
				litArgs_gloss, 
				litArgs_specularity, 
				litArgs_albedo, 
				litArgs_transmission,
				litArgs_ior,
				litArgs_dispersion
				#if defined(LIT_IRIDESCENCE)
					, iridescenceFresnel, 
					litArgs_iridescence_intensity
				#endif
			);
		#endif
	#endif
	#ifdef LIT_AO
		#ifdef LIT_OCCLUDE_DIRECT
			occludeDiffuse(litArgs_ao);
		#endif
		#if LIT_OCCLUDE_SPECULAR != NONE
			occludeSpecular(litArgs_gloss, litArgs_ao, litArgs_worldNormal, dViewDirW);
		#endif
	#endif
	#if !defined(LIT_OPACITY_FADES_SPECULAR)
		#if LIT_BLEND_TYPE == NORMAL || LIT_BLEND_TYPE == PREMULTIPLIED
			var specLum: f32 = dot((dSpecularLight + dReflection.rgb * dReflection.a), vec3f( 0.2126, 0.7152, 0.0722 ));
			#ifdef LIT_CLEARCOAT
				specLum = specLum + dot(ccSpecularLight * litArgs_clearcoat_specularity + ccReflection * litArgs_clearcoat_specularity, vec3f( 0.2126, 0.7152, 0.0722 ));
			#endif
			litArgs_opacity = clamp(litArgs_opacity + gammaCorrectInput(specLum), 0.0, 1.0);
		#endif
		litArgs_opacity = litArgs_opacity * uniform.material_alphaFade;
	#endif
	#ifdef LIT_LIGHTMAP_BAKING
		#ifdef LIT_LIGHTMAP_BAKING_COLOR
			#include "bakeLmEndPS"
		#endif
		#ifdef LIT_LIGHTMAP_BAKING_DIR
			#include "bakeDirLmEndPS"
		#endif
	#else
		#include "endPS"
		#include "outputAlphaPS"
	#endif
	#ifdef LIT_MSDF
		output.color = applyMsdf(output.color);
	#endif
	#include "outputPS"
	#include "debugOutputPS"
	#ifdef LIT_SHADOW_CATCHER
		output.color = vec4f(vec3f(dShadowCatcher), output.color.a);
	#endif
	#include "outlineOutputPS"
	return output;
}
`,ly=`
var<private> sReflection: vec3f;
var<private> dVertexNormalW: vec3f;
var<private> dTangentW: vec3f;
var<private> dBinormalW: vec3f;
var<private> dViewDirW: vec3f;
var<private> dReflDirW: vec3f;
var<private> ccReflDirW: vec3f;
var<private> dLightDirNormW: vec3f;
var<private> dAtten: f32;
var<private> dTBN: mat3x3f;
var<private> dReflection: vec4f;
var<private> dDiffuseLight: vec3f;
var<private> dSpecularLight: vec3f;
var<private> ccFresnel: f32;
var<private> ccReflection: vec3f;
var<private> ccSpecularLight: vec3f;
var<private> ccSpecularityNoFres: f32;
var<private> sSpecularLight: vec3f;
#ifdef LIT_DISPERSION
	uniform material_dispersion: f32;
#endif
#ifndef LIT_OPACITY_FADES_SPECULAR
	uniform material_alphaFade: f32;
#endif
#ifdef LIT_SSAO
	var ssaoTexture : texture_2d<f32>;
	var ssaoTextureSampler : sampler;
	uniform ssaoTextureSizeInv: vec2f;
#endif
#ifdef LIT_SHADOW_CATCHER
	var<private> dShadowCatcher: f32 = 1.0;
#endif
#if LIGHT_COUNT > 0
	#include "lightDeclarationPS, LIGHT_COUNT"
#endif
#ifdef LIT_SPECULAR
	#if LIT_FRESNEL_MODEL == NONE && !defined(LIT_REFLECTIONS) && !defined(LIT_DIFFUSE_MAP) 
		#define LIT_OLD_AMBIENT
	#endif
#endif
#ifdef STD_LIGHTMAP_DIR
	uniform bakeDir: f32;
#endif
#ifdef LIT_LIGHTMAP_BAKING_ADD_AMBIENT
	uniform ambientBakeOcclusionContrast: f32;
	uniform ambientBakeOcclusionBrightness: f32;
#endif
`,cy=`
@fragment
fn fragmentMain(input: FragmentInput) -> FragmentOutput {
	#include "litUserMainStartPS"
	dReflection = vec4f(0.0);
	#ifdef LIT_CLEARCOAT
		ccSpecularLight = vec3f(0.0);
		ccReflection = vec3f(0.0);
	#endif
	#if LIT_NONE_SLICE_MODE == SLICED
		#include "startNineSlicedPS"
	#elif LIT_NONE_SLICE_MODE == TILED
		#include "startNineSlicedTiledPS"
	#endif
	#ifdef LIT_NEEDS_NORMAL
		dVertexNormalW = normalize(vNormalW);
		#ifdef LIT_TANGENTS
			#if defined(LIT_HEIGHTS) || defined(LIT_USE_NORMALS) || defined(LIT_USE_CLEARCOAT_NORMALS) || defined(LIT_GGX_SPECULAR)
				dTangentW = vTangentW;
				dBinormalW = vBinormalW;
			#endif
		#endif
		getViewDir();
		#ifdef LIT_TBN
			getTBN(dTangentW, dBinormalW, dVertexNormalW);
			#ifdef LIT_TWO_SIDED_LIGHTING
				handleTwoSidedLighting();
			#endif
		#endif
	#endif
	evaluateFrontend();
	#include "debugProcessFrontendPS"
	var output: FragmentOutput = evaluateBackend();
	#include "litUserMainEndPS"
	return output;
}
`,dy=`
#ifdef LIT_NEEDS_NORMAL
	#include "cubeMapRotatePS"
	#include "cubeMapProjectPS"
	#include "envProcPS"
#endif
#ifdef LIT_SPECULAR_OR_REFLECTION
	#ifdef LIT_METALNESS
		#include "metalnessModulatePS"
	#endif
	#ifdef LIT_IRIDESCENCE
		#include "iridescenceDiffractionPS"
	#endif
#endif
#if defined(LIT_SPECULAR_OR_REFLECTION) || defined(LIT_REFRACTION)
	#if LIT_FRESNEL_MODEL == SCHLICK
		#include "fresnelSchlickPS"
	#endif
#endif
#ifdef LIT_AO
	#include "aoDiffuseOccPS"
	#include "aoSpecOccPS"
#endif
#if LIT_REFLECTION_SOURCE == ENVATLASHQ
	#include "envAtlasPS"
	#include "reflectionEnvHQPS"
#elif LIT_REFLECTION_SOURCE == ENVATLAS
	#include "envAtlasPS"
	#include "reflectionEnvPS"
#elif LIT_REFLECTION_SOURCE == CUBEMAP
	#include "reflectionCubePS"
#elif LIT_REFLECTION_SOURCE == SPHEREMAP
	#include "reflectionSpherePS"
#endif
#ifdef LIT_REFLECTIONS
	#ifdef LIT_CLEARCOAT
		#include "reflectionCCPS"
	#endif
	#ifdef LIT_SHEEN
		#include "reflectionSheenPS"
	#endif
#endif
#ifdef LIT_REFRACTION
	#if defined(LIT_DYNAMIC_REFRACTION)
		#include "refractionDynamicPS"
	#elif defined(LIT_REFLECTIONS)
		#include "refractionCubePS"
	#endif
#endif
#ifdef LIT_SHEEN
	#include "lightSheenPS"
#endif
uniform material_ambient: vec3f;
#ifdef LIT_SPECULAR
	#ifdef LIT_LIGHTING
		#ifdef LIT_GGX_SPECULAR
			#ifdef LIT_ANISOTROPY
				#include "lightSpecularAnisoGGXPS"
			#else
				#include "lightSpecularGGXPS"
			#endif
		#else
			#include "lightSpecularBlinnPS"
		#endif
	#endif
#endif
#include "combinePS"
#ifdef LIT_LIGHTMAP
	#include "lightmapAddPS"
#endif
#ifdef LIT_ADD_AMBIENT
	#include "ambientPS"
#endif
#ifdef LIT_MSDF
	#include "msdfPS"
#endif
#ifdef LIT_NEEDS_NORMAL
	#include "viewDirPS"
	#ifdef LIT_SPECULAR
		#ifdef LIT_ANISOTROPY
			#include "reflDirAnisoPS"
		#else
			#include "reflDirPS"
		#endif
	#endif
#endif
#include "lightingPS"
`,hy=`
#include "basePS"
#include "sphericalPS"
#include "decodePS"
#include "gammaPS"
#include "tonemappingPS"
#include "fogPS"
#if LIT_NONE_SLICE_MODE == SLICED
	#include "baseNineSlicedPS"
#elif LIT_NONE_SLICE_MODE == TILED
	#include "baseNineSlicedTiledPS"
#endif
#ifdef LIT_TBN
	#include "TBNPS"
	#ifdef LIT_TWO_SIDED_LIGHTING
		#include "twoSidedLightingPS"
	#endif
#endif
`,fy=`
#include "varyingsPS"
#include "litUserDeclarationPS"
#include "frontendDeclPS"
#include "outlineDeclarationPS"
#if defined(PICK_PASS) || defined(PREPASS_PASS)
	#include "frontendCodePS"
	#include "litUserCodePS"
	#include "litOtherMainPS"
#elif defined(SHADOW_PASS)
	#include "frontendCodePS"
	#include "litUserCodePS"
	#include "litShadowMainPS"
#else
	#include "litForwardDeclarationPS"
	#include "litForwardPreCodePS"
	#include "frontendCodePS"
	#include "litForwardPostCodePS"
	#include "litForwardBackendPS"
	#include "litUserCodePS"
	#include "litForwardMainPS"
#endif
`,uy=`
#include "varyingsVS"
#include  "litUserDeclarationVS"
#ifdef VERTEX_COLOR
	attribute vertex_color: vec4f;
#endif
#ifdef NINESLICED
	varying vMask: vec2f;
	varying vTiledUv: vec2f;
	var<private> dMaskGlobal: vec2f;
	var<private> dTiledUvGlobal: vec2f;
	uniform innerOffset: vec4f;
	uniform outerScale: vec2f;
	uniform atlasRect: vec4f;
#endif
var<private> dPositionW: vec3f;
var<private> dModelMatrix: mat4x4f;
#include "transformCoreVS"
#ifdef UV0
	attribute vertex_texCoord0: vec2f;
	#include "uv0VS"
#endif
#ifdef UV1
	attribute vertex_texCoord1: vec2f;
	#include "uv1VS"
#endif
#ifdef LINEAR_DEPTH
	#ifndef VIEWMATRIX
	#define VIEWMATRIX
		uniform matrix_view: mat4x4f;
	#endif
#endif
#include "transformVS"
#ifdef NORMALS
	#include "normalCoreVS"
	#include "normalVS"
#endif
#ifdef TANGENTS
	attribute vertex_tangent: vec4f;
#endif
#include "uvTransformUniformsPS, UV_TRANSFORMS_COUNT"
#ifdef MSDF
	#include "msdfVS"
#endif
#include  "litUserCodeVS"
#ifdef VERTEX_COLOR
	fn decodeGamma3(raw: vec3f) -> vec3f {
		return pow(raw, vec3f(2.2));
	}
	fn gammaCorrectInputVec4(color: vec4f) -> vec4f {
		return vec4f(decodeGamma3(color.xyz), color.w);
	}
#endif
@vertex
fn vertexMain(input : VertexInput) -> VertexOutput {
	#include "litUserMainStartVS"
	var output : VertexOutput;
	output.position = getPosition();
	output.vPositionW = getWorldPosition();
	#ifdef NORMALS
		output.vNormalW = getNormal();
	#endif
	#ifdef TANGENTS
		output.vTangentW = normalize(dNormalMatrix * vertex_tangent.xyz);
		output.vBinormalW = cross(output.vNormalW, output.vTangentW) * vertex_tangent.w;
	#elif defined(GGX_SPECULAR)
		output.vObjectSpaceUpW = normalize(dNormalMatrix * vec3f(0.0, 1.0, 0.0));
	#endif
	#ifdef UV0
		var uv0: vec2f = getUv0();
		#ifdef UV0_UNMODIFIED
			output.vUv0 = uv0;
		#endif
	#endif
	#ifdef UV1
		var uv1: vec2f = getUv1();
		#ifdef UV1_UNMODIFIED
			output.vUv1 = uv1;
		#endif
	#endif
	#include "uvTransformVS, UV_TRANSFORMS_COUNT"
	#ifdef VERTEX_COLOR
		#ifdef STD_VERTEX_COLOR_GAMMA
			output.vVertexColor = gammaCorrectInputVec4(vertex_color);
		#else
			output.vVertexColor = vertex_color;
		#endif
	#endif
	#ifdef LINEAR_DEPTH
		output.vLinearDepth = -(uniform.matrix_view * vec4f(output.vPositionW, 1.0)).z;
	#endif
	#ifdef MSDF
		unpackMsdfParams();
		output.outline_color = dOutlineColor;
		output.outline_thickness = dOutlineThickness;
		output.shadow_color = dShadowColor;
		output.shadow_offset = dShadowOffset;
	#endif
	#ifdef NINESLICED
		output.vMask = dMaskGlobal;
		output.vTiledUv = dTiledUvGlobal;
	#endif
	#include "litUserMainEndVS"
	return output;
}
`,py=`
#ifdef PICK_PASS
	#include "pickPS"
#endif
#ifdef PREPASS_PASS
	#include "floatAsUintPS"
#endif
@fragment
fn fragmentMain(input: FragmentInput) -> FragmentOutput {
	#include "litUserMainStartPS"
	var output: FragmentOutput;
	
	evaluateFrontend();
	#ifdef PICK_PASS
		output.color = getPickOutput();
		#ifdef DEPTH_PICK_PASS
			output.color1 = getPickDepth();
		#endif
	#endif
	#ifdef PREPASS_PASS
		output.color = float2vec4(vLinearDepth);
	#endif
	#include "litUserMainEndPS"
	return output;
}
`,my=`
var<private> litArgs_albedo: vec3f;
var<private> litArgs_opacity: f32;
var<private> litArgs_emission: vec3f;
var<private> litArgs_worldNormal: vec3f;
var<private> litArgs_ao: f32;
var<private> litArgs_lightmap: vec3f;
var<private> litArgs_lightmapDir: vec3f;
var<private> litArgs_metalness: f32;
var<private> litArgs_specularity: vec3f;
var<private> litArgs_specularityFactor: f32;
var<private> litArgs_gloss: f32;
var<private> litArgs_sheen_gloss: f32;
var<private> litArgs_sheen_specularity: vec3f;
var<private> litArgs_transmission: f32;
var<private> litArgs_thickness: f32;
var<private> litArgs_ior: f32;
var<private> litArgs_dispersion: f32;
var<private> litArgs_iridescence_intensity: f32;
var<private> litArgs_iridescence_thickness: f32;
var<private> litArgs_clearcoat_worldNormal: vec3f;
var<private> litArgs_clearcoat_specularity: f32;
var<private> litArgs_clearcoat_gloss: f32;
`,_y=`
	uniform textureBias: f32;
	#include "litShaderArgsPS"
`,gy=`
#if LIGHT_TYPE != DIRECTIONAL
	uniform view_position: vec3f;
	uniform light_radius: f32;
#endif
#if SHADOW_TYPE == PCSS_32F
	#include "linearizeDepthPS"
#endif
@fragment
fn fragmentMain(input: FragmentInput) -> FragmentOutput {
	#include "litUserMainStartPS"
	var output: FragmentOutput;
	evaluateFrontend();
	#ifdef PERSPECTIVE_DEPTH
		var depth: f32 = input.position.z;
		#if SHADOW_TYPE == PCSS_32F
			#if LIGHT_TYPE != DIRECTIONAL
				depth = linearizeDepthWithParams(depth, camera_params);
			#endif
		#endif
	#else
		var depth: f32 = min(distance(uniform.view_position, input.vPositionW) / uniform.light_radius, 0.99999);
		#define MODIFIED_DEPTH
	#endif
	#if SHADOW_TYPE == VSM_16F || SHADOW_TYPE == VSM_32F
		#if SHADOW_TYPE == VSM_32F
			var exponent: f32 = 15.0;
		#else
			var exponent: f32 = 5.54;
		#endif
		var depth_vsm = 2.0 * depth - 1.0;
		depth_vsm = exp(exponent * depth_vsm);
		output.color = vec4f(depth_vsm, depth_vsm * depth_vsm, 1.0, 1.0);
	#else
		#if SHADOW_TYPE == PCSS_32F
			output.color = vec4f(depth, 0.0, 0.0, 1.0);
		#else
			#ifdef MODIFIED_DEPTH
				output.fragDepth = depth;
			#endif
			output.color = vec4f(1.0);
		#endif
	#endif
	#include "litUserMainEndPS"
	
	return output;
}
`,vy=`
fn LTC_Uv(N: vec3f, V: vec3f, roughness: f32) -> vec2f {
	const LUT_SIZE: f32 = 64.0;
	const LUT_SCALE: f32 = (LUT_SIZE - 1.0) / LUT_SIZE;
	const LUT_BIAS: f32 = 0.5 / LUT_SIZE;
	let dotNV: f32 = saturate(dot( N, V ));
	let uv: vec2f = vec2f( roughness, sqrt( 1.0 - dotNV ) );
	return uv * LUT_SCALE + LUT_BIAS;
}
fn LTC_ClippedSphereFormFactor( f: vec3f ) -> f32 {
	let l: f32 = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
fn LTC_EdgeVectorFormFactor( v1: vec3f, v2: vec3f ) -> vec3f {
	let x: f32 = dot( v1, v2 );
	let y: f32 = abs( x );
	let a: f32 = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	let b: f32 = 3.4175940 + ( 4.1616724 + y ) * y;
	let v: f32 = a / b;
	let inv_sqrt_term = inverseSqrt( max( 1.0 - x * x, 1e-7f ) );
	let theta_sintheta: f32 = select( (0.5 * inv_sqrt_term - v), v, x > 0.0 );
	return cross( v1, v2 ) * theta_sintheta;
}
struct Coords {
	coord0: vec3f,
	coord1: vec3f,
	coord2: vec3f,
	coord3: vec3f,
}
fn LTC_EvaluateRect( N: vec3f, V: vec3f, P: vec3f, mInv: mat3x3f, rectCoords: Coords) -> f32 {
	let v1: vec3f = rectCoords.coord1 - rectCoords.coord0;
	let v2: vec3f = rectCoords.coord3 - rectCoords.coord0;
	let lightNormal: vec3f = cross( v1, v2 );
	let factor: f32 = sign(-dot( lightNormal, P - rectCoords.coord0 ));
	let T1: vec3f = normalize( V - N * dot( V, N ) );
	let T2: vec3f = factor * cross( N, T1 );
	let mat: mat3x3f = mInv * transpose( mat3x3f( T1, T2, N ) );
	var coords: array<vec3f, 4>;
	coords[0] = mat * ( rectCoords.coord0 - P );
	coords[1] = mat * ( rectCoords.coord1 - P );
	coords[2] = mat * ( rectCoords.coord2 - P );
	coords[3] = mat * ( rectCoords.coord3 - P );
	coords[0] = normalize( coords[0] );
	coords[1] = normalize( coords[1] );
	coords[2] = normalize( coords[2] );
	coords[3] = normalize( coords[3] );
	var vectorFormFactor: vec3f = vec3f( 0.0 );
	vectorFormFactor = vectorFormFactor + LTC_EdgeVectorFormFactor( coords[0], coords[1] );
	vectorFormFactor = vectorFormFactor + LTC_EdgeVectorFormFactor( coords[1], coords[2] );
	vectorFormFactor = vectorFormFactor + LTC_EdgeVectorFormFactor( coords[2], coords[3] );
	vectorFormFactor = vectorFormFactor + LTC_EdgeVectorFormFactor( coords[3], coords[0] );
	let result: f32 = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return result;
}
var<private> dLTCCoords: Coords;
fn getLTCLightCoords(lightPos: vec3f, halfWidth: vec3f, halfHeight: vec3f) -> Coords {
	var coords: Coords;
	coords.coord0 = lightPos + halfWidth - halfHeight;
	coords.coord1 = lightPos - halfWidth - halfHeight;
	coords.coord2 = lightPos - halfWidth + halfHeight;
	coords.coord3 = lightPos + halfWidth + halfHeight;
	return coords;
}
var<private> dSphereRadius: f32;
fn getSphereLightCoords(lightPos: vec3f, halfWidth: vec3f, halfHeight: vec3f) -> Coords {
	dSphereRadius = max(length(halfWidth), length(halfHeight));
	let f: vec3f = reflect(normalize(lightPos - uniform.view_position), vNormalW);
	let w: vec3f = normalize(cross(f, halfHeight));
	let h: vec3f = normalize(cross(f, w));
	return getLTCLightCoords(lightPos, w * dSphereRadius, h * dSphereRadius);
}
var<private> dLTCUV: vec2f;
#ifdef LIT_CLEARCOAT
	var<private> ccLTCUV: vec2f;
#endif
fn getLTCLightUV(gloss: f32, worldNormal: vec3f, viewDir: vec3f) -> vec2f {
	let roughness: f32 = max((1.0 - gloss) * (1.0 - gloss), 0.001);
	return LTC_Uv( worldNormal, viewDir, roughness );
}
var<private> dLTCSpecFres: vec3f;
#ifdef LIT_CLEARCOAT
	var<private> ccLTCSpecFres: vec3f;
#endif
fn getLTCLightSpecFres(uv: vec2f, specularity: vec3f) -> vec3f {
	let t2: vec4f = textureSampleLevel(areaLightsLutTex2, areaLightsLutTex2Sampler, uv, 0.0);
	return specularity * t2.x + ( vec3f( 1.0 ) - specularity) * t2.y;
}
fn calcLTCLightValues(gloss: f32, worldNormal: vec3f, viewDir: vec3f, specularity: vec3f, clearcoatGloss: f32, clearcoatWorldNormal: vec3f, clearcoatSpecularity: f32) {
	dLTCUV = getLTCLightUV(gloss, worldNormal, viewDir);
	dLTCSpecFres = getLTCLightSpecFres(dLTCUV, specularity);
	#ifdef LIT_CLEARCOAT
		ccLTCUV = getLTCLightUV(clearcoatGloss, clearcoatWorldNormal, viewDir);
		ccLTCSpecFres = getLTCLightSpecFres(ccLTCUV, vec3f(clearcoatSpecularity));
	#endif
}
fn calcRectLightValues(lightPos: vec3f, halfWidth: vec3f, halfHeight: vec3f) {
	dLTCCoords = getLTCLightCoords(lightPos, halfWidth, halfHeight);
}
fn calcDiskLightValues(lightPos: vec3f, halfWidth: vec3f, halfHeight: vec3f) {
	calcRectLightValues(lightPos, halfWidth, halfHeight);
}
fn calcSphereLightValues(lightPos: vec3f, halfWidth: vec3f, halfHeight: vec3f) {
	dLTCCoords = getSphereLightCoords(lightPos, halfWidth, halfHeight);
}
fn SolveCubic(Coefficient_in: vec4f) -> vec3f {
	let pi: f32 = 3.14159;
	var Coefficient = Coefficient_in;
	Coefficient = vec4f(Coefficient.xyz / Coefficient.w, Coefficient.w);
	let new_yz: vec2f = Coefficient.yz / 3.0;
	Coefficient = vec4f(Coefficient.x, new_yz.x, new_yz.y, Coefficient.w);
	
	let A: f32 = Coefficient.w;
	let B: f32 = Coefficient.z;
	let C: f32 = Coefficient.y;
	let D: f32 = Coefficient.x;
	let Delta: vec3f = vec3f(
		-Coefficient.z * Coefficient.z + Coefficient.y,
		-Coefficient.y * Coefficient.z + Coefficient.x,
		dot(vec2f(Coefficient.z, -Coefficient.y), Coefficient.xy)
	);
	let Discriminant: f32 = dot(vec2f(4.0 * Delta.x, -Delta.y), Delta.zy);
	var xlc: vec2f;
	var xsc: vec2f;
	{
		let A_a: f32 = 1.0;
		let C_a: f32 = Delta.x;
		let D_a: f32 = -2.0 * B * Delta.x + Delta.y;
		let Theta: f32 = atan2(sqrt(Discriminant), -D_a) / 3.0;
		let sqrt_neg_Ca = sqrt(-C_a);
		let x_1a: f32 = 2.0 * sqrt_neg_Ca * cos(Theta);
		let x_3a: f32 = 2.0 * sqrt_neg_Ca * cos(Theta + (2.0 / 3.0) * pi);
		let xl: f32 = select(x_3a, x_1a, (x_1a + x_3a) > 2.0 * B);
		xlc = vec2f(xl - B, A);
	}
	{
		let A_d: f32 = D;
		let C_d: f32 = Delta.z;
		let D_d: f32 = -D * Delta.y + 2.0 * C * Delta.z;
		let Theta: f32 = atan2(D * sqrt(Discriminant), -D_d) / 3.0;
		let sqrt_neg_Cd = sqrt(-C_d);
		let x_1d: f32 = 2.0 * sqrt_neg_Cd * cos(Theta);
		let x_3d: f32 = 2.0 * sqrt_neg_Cd * cos(Theta + (2.0 / 3.0) * pi);
		let xs: f32 = select(x_3d, x_1d, x_1d + x_3d < 2.0 * C);
		xsc = vec2f(-D, xs + C);
	}
	let E: f32 =  xlc.y * xsc.y;
	let F: f32 = -xlc.x * xsc.y - xlc.y * xsc.x;
	let G: f32 =  xlc.x * xsc.x;
	let xmc: vec2f = vec2f(C * F - B * G, -B * F + C * E);
	var Root: vec3f = vec3f(xsc.x / xsc.y, xmc.x / xmc.y, xlc.x / xlc.y);
	if (Root.x < Root.y && Root.x < Root.z) {
		Root = Root.yxz;
	} else if (Root.z < Root.x && Root.z < Root.y) {
		Root = Root.xzy;
	}
	return Root;
}
fn LTC_EvaluateDisk(N: vec3f, V: vec3f, P: vec3f, Minv: mat3x3f, points: Coords) -> f32 {
	let T1: vec3f = normalize(V - N * dot(V, N));
	let T2: vec3f = cross(N, T1);
	let R: mat3x3f = transpose( mat3x3f( T1, T2, N ) );
	var L_: array<vec3f, 3>;
	L_[0] = R * ( points.coord0 - P );
	L_[1] = R * ( points.coord1 - P );
	L_[2] = R * ( points.coord2 - P );
	let C: vec3f  = 0.5 * (L_[0] + L_[2]);
	var V1: vec3f = 0.5 * (L_[1] - L_[2]);
	var V2: vec3f = 0.5 * (L_[1] - L_[0]);
	let C_Minv: vec3f  = Minv * C;
	let V1_Minv: vec3f = Minv * V1;
	let V2_Minv: vec3f = Minv * V2;
	var a: f32;
	var b: f32;
	let d11: f32 = dot(V1_Minv, V1_Minv);
	let d22: f32 = dot(V2_Minv, V2_Minv);
	let d12: f32 = dot(V1_Minv, V2_Minv);
	if (abs(d12) / sqrt(d11 * d22) > 0.0001) {
		let tr: f32 = d11 + d22;
		let det_inner: f32 = -d12 * d12 + d11 * d22;
		let det: f32 = sqrt(det_inner);
		let u: f32 = 0.5 * sqrt(tr - 2.0 * det);
		let v: f32 = 0.5 * sqrt(tr + 2.0 * det);
		let e_max: f32 = (u + v) * (u + v);
		let e_min: f32 = (u - v) * (u - v);
		var V1_: vec3f;
		var V2_: vec3f;
		if (d11 > d22) {
			V1_ = d12 * V1_Minv + (e_max - d11) * V2_Minv;
			V2_ = d12 * V1_Minv + (e_min - d11) * V2_Minv;
		} else {
			V1_ = d12*V2_Minv + (e_max - d22)*V1_Minv;
			V2_ = d12*V2_Minv + (e_min - d22)*V1_Minv;
		}
		a = 1.0 / e_max;
		b = 1.0 / e_min;
		V1 = normalize(V1_);
		V2 = normalize(V2_);
	} else {
		a = 1.0 / dot(V1_Minv, V1_Minv);
		b = 1.0 / dot(V2_Minv, V2_Minv);
		V1 = V1_Minv * sqrt(a);
		V2 = V2_Minv * sqrt(b);
	}
	var V3: vec3f = normalize(cross(V1, V2));
	if (dot(C_Minv, V3) < 0.0) {
		V3 = V3 * -1.0;
	}
	let L: f32  = dot(V3, C_Minv);
	let x0: f32 = dot(V1, C_Minv) / L;
	let y0: f32 = dot(V2, C_Minv) / L;
	let E1: f32 = inverseSqrt(a);
	let E2: f32 = inverseSqrt(b);
	let a_scaled = a * L * L;
	let b_scaled = b * L * L;
	let c0: f32 = a_scaled * b_scaled;
	let c1: f32 = a_scaled * b_scaled * (1.0 + x0 * x0 + y0 * y0) - a_scaled - b_scaled;
	let c2: f32 = 1.0 - a_scaled * (1.0 + x0 * x0) - b_scaled * (1.0 + y0 * y0);
	let c3: f32 = 1.0;
	let roots: vec3f = SolveCubic(vec4f(c0, c1, c2, c3));
	let e1: f32 = roots.x;
	let e2: f32 = roots.y;
	let e3: f32 = roots.z;
	var avgDir: vec3f = vec3f(a_scaled * x0 / (a_scaled - e2), b_scaled * y0 / (b_scaled - e2), 1.0);
	let rotate: mat3x3f = mat3x3f(V1, V2, V3);
	avgDir = rotate * avgDir;
	avgDir = normalize(avgDir);
	let L1: f32 = sqrt(-e2 / e3);
	let L2: f32 = sqrt(-e2 / e1);
	let formFactor: f32 = max(0.0, L1 * L2 * inverseSqrt((1.0 + L1 * L1) * (1.0 + L2 * L2)));
	const LUT_SIZE_disk: f32 = 64.0;
	const LUT_SCALE_disk: f32 = ( LUT_SIZE_disk - 1.0 ) / LUT_SIZE_disk;
	const LUT_BIAS_disk: f32 = 0.5 / LUT_SIZE_disk;
	var uv: vec2f = vec2f(avgDir.z * 0.5 + 0.5, formFactor);
	uv = uv * LUT_SCALE_disk + LUT_BIAS_disk;
	let scale: f32 = textureSampleLevel(areaLightsLutTex2, areaLightsLutTex2Sampler, uv, 0.0).w;
	return formFactor * scale;
}
fn FixNan(value: f32) -> f32 {
	return select(value, 0.0, value != value);
}
fn getRectLightDiffuse(worldNormal: vec3f, viewDir: vec3f, lightDir: vec3f, lightDirNorm: vec3f) -> f32 {
	let identityMat = mat3x3f(vec3f(1.0, 0.0, 0.0), vec3f(0.0, 1.0, 0.0), vec3f(0.0, 0.0, 1.0));
	return LTC_EvaluateRect( worldNormal, viewDir, vPositionW, identityMat, dLTCCoords );
}
fn getDiskLightDiffuse(worldNormal: vec3f, viewDir: vec3f, lightDir: vec3f, lightDirNorm: vec3f) -> f32 {
	let identityMat = mat3x3f(vec3f(1.0, 0.0, 0.0), vec3f(0.0, 1.0, 0.0), vec3f(0.0, 0.0, 1.0));
	return FixNan(LTC_EvaluateDisk( worldNormal, viewDir, vPositionW, identityMat, dLTCCoords ));
}
fn getSphereLightDiffuse(worldNormal: vec3f, viewDir: vec3f, lightDir: vec3f, lightDirNorm: vec3f) -> f32 {
	let falloff: f32 = dSphereRadius / (dot(lightDir, lightDir) + dSphereRadius);
	return FixNan(getLightDiffuse(worldNormal, viewDir, lightDirNorm) * falloff);
}
fn getLTCLightInvMat(uv: vec2f) -> mat3x3f {
	let t1: vec4f = textureSampleLevel(areaLightsLutTex1, areaLightsLutTex1Sampler, uv, 0.0);
	return mat3x3f(
		vec3f( t1.x, 0.0, t1.y ),
		vec3f( 0.0, 1.0, 0.0 ),
		vec3f( t1.z, 0.0, t1.w )
	);
}
fn calcRectLightSpecular(worldNormal: vec3f, viewDir: vec3f, uv: vec2f) -> f32 {
	let mInv: mat3x3f = getLTCLightInvMat(uv);
	return LTC_EvaluateRect( worldNormal, viewDir, vPositionW, mInv, dLTCCoords );
}
fn getRectLightSpecular(worldNormal: vec3f, viewDir: vec3f) -> f32 {
	return calcRectLightSpecular(worldNormal, viewDir, dLTCUV);
}
fn calcDiskLightSpecular(worldNormal: vec3f, viewDir: vec3f, uv: vec2f) -> f32 {
	let mInv: mat3x3f = getLTCLightInvMat(uv);
	return LTC_EvaluateDisk( worldNormal, viewDir, vPositionW, mInv, dLTCCoords );
}
fn getDiskLightSpecular(worldNormal: vec3f, viewDir: vec3f) -> f32 {
	return calcDiskLightSpecular(worldNormal, viewDir, dLTCUV);
}
fn getSphereLightSpecular(worldNormal: vec3f, viewDir: vec3f) -> f32 {
	return calcDiskLightSpecular(worldNormal, viewDir, dLTCUV);
}
`,Sy=`
#ifdef STD_METALNESS_CONSTANT
uniform material_metalness: f32;
#endif
fn getMetalness() {
	var metalness: f32 = 1.0;
	#ifdef STD_METALNESS_CONSTANT
		metalness = metalness * uniform.material_metalness;
	#endif
	#ifdef STD_METALNESS_TEXTURE
		metalness = metalness * textureSampleBias({STD_METALNESS_TEXTURE_NAME}, {STD_METALNESS_TEXTURE_NAME}Sampler, {STD_METALNESS_TEXTURE_UV}, uniform.textureBias).{STD_METALNESS_TEXTURE_CHANNEL};
	#endif
	#ifdef STD_METALNESS_VERTEX
	metalness = metalness * saturate(vVertexColor.{STD_METALNESS_VERTEX_CHANNEL});
	#endif
	dMetalness = metalness;
}
`,Ty=`
var texture_msdfMap: texture_2d<f32>;
var texture_msdfMapSampler: sampler;
fn median(r: f32, g: f32, b: f32) -> f32 {
	return max(min(r, g), min(max(r, g), b));
}
uniform font_sdfIntensity: f32;
uniform font_pxrange: f32;
#ifndef LIT_MSDF_TEXT_ATTRIBUTE
	uniform outline_color: vec4f;
	uniform outline_thickness: f32;
	uniform shadow_color: vec4f;
	uniform shadow_offset: vec2f;
#else
	varying outline_color: vec4f;
	varying outline_thickness: f32;
	varying shadow_color: vec4f;
	varying shadow_offset: vec2f;
#endif
fn applyMsdf(color_in: vec4f) -> vec4f {
	#ifndef LIT_MSDF_TEXT_ATTRIBUTE
		var outline_colorValue = uniform.outline_color;
		var outline_thicknessValue = uniform.outline_thickness;
		var shadow_colorValue = uniform.shadow_color;
		var shadow_offsetValue = uniform.shadow_offset;
	#else
		var outline_colorValue = outline_color;
		var outline_thicknessValue = outline_thickness;
		var shadow_colorValue = shadow_color;
		var shadow_offsetValue = shadow_offset;
	#endif
	let srcAlpha: f32 = max(color_in.a, 0.0001);
	var color = vec4f(gammaCorrectInputVec3(color_in.rgb / srcAlpha) * srcAlpha, color_in.a);
	let tsample: vec3f = textureSample(texture_msdfMap, texture_msdfMapSampler, vUv0).rgb;
	let uvShdw: vec2f = vUv0 - shadow_offsetValue;
	let ssample: vec3f = textureSample(texture_msdfMap, texture_msdfMapSampler, uvShdw).rgb;
	let sigDist: f32 = median(tsample.r, tsample.g, tsample.b);
	let sigDistShdw: f32 = median(ssample.r, ssample.g, ssample.b);
	let edge: f32 = 0.5 - 0.5 * uniform.font_sdfIntensity;
	let unitRange: vec2f = vec2f(uniform.font_pxrange) / vec2f(textureDimensions(texture_msdfMap, 0));
	let uvDeriv: vec2f = max(abs(dpdx(vUv0)) + abs(dpdy(vUv0)), vec2f(1e-6));
	let screenPxRange: f32 = max(0.5 * dot(unitRange, vec2f(1.0) / uvDeriv), 2.5);
	let inside: f32 = clamp(screenPxRange * (sigDist - edge) + 0.5, 0.0, 1.0);
	let outline: f32 = clamp(screenPxRange * (sigDist + outline_thicknessValue - edge) + 0.5, 0.0, 1.0);
	let shadow: f32 = clamp(screenPxRange * (sigDistShdw + outline_thicknessValue - edge) + 0.5, 0.0, 1.0);
	let tcolor_outline: vec4f = outline * vec4f(outline_colorValue.a * outline_colorValue.rgb, outline_colorValue.a);
	var tcolor: vec4f = select(vec4f(0.0), tcolor_outline, outline > inside);
	tcolor = mix(tcolor, color, inside);
	let scolor_shadow: vec4f = shadow * vec4f(shadow_colorValue.a * shadow_colorValue.rgb, shadow_colorValue.a);
	let scolor: vec4f = select(tcolor, scolor_shadow, shadow > outline);
	tcolor = mix(scolor, tcolor, outline);
	tcolor = vec4f(gammaCorrectOutput(tcolor.rgb / max(tcolor.a, 0.0001)) * tcolor.a, tcolor.a);
	return tcolor;
}
`,Ey=`
fn getSpecularModulate(specularity: vec3f, albedo: vec3f, metalness: f32, f0: f32, specularityFactor: f32) -> vec3f {
	let dielectricF0: vec3f = f0 * specularity * specularityFactor;
	return mix(dielectricF0, albedo, metalness);
}
fn getAlbedoModulate(albedo: vec3f, metalness: f32) -> vec3f {
	return albedo * (1.0 - metalness);
}
`,yy=`
	varying uv0: vec2f;
	var morphTexture: texture_2d_array<f32>;
	uniform morphFactor: array<f32, {MORPH_TEXTURE_MAX_COUNT}>;
	uniform morphIndex: array<u32, {MORPH_TEXTURE_MAX_COUNT}>;
	uniform count: u32;
	@fragment
	fn fragmentMain(input : FragmentInput) -> FragmentOutput {
		var color = vec3f(0, 0, 0);
		let textureDims = textureDimensions(morphTexture);
		let pixelCoords = vec2i(input.uv0 * vec2f(textureDims));
		
		for (var i: u32 = 0; i < uniform.count; i = i + 1) {
			var textureIndex: u32 = uniform.morphIndex[i].element;
			var delta = textureLoad(morphTexture, pixelCoords, textureIndex, 0).xyz;
			color += uniform.morphFactor[i].element * delta;
		}
		var output: FragmentOutput;
		output.color = vec4f(color, 1.0);
		return output;
	}
`,xy=`
	attribute vertex_position: vec2f;
	varying uv0: vec2f;
	@vertex
	fn vertexMain(input: VertexInput) -> VertexOutput {
		var output: VertexOutput;
		output.position = vec4f(input.vertex_position, 0.5, 1.0);
		output.uv0 = input.vertex_position * 0.5 + vec2f(0.5, 0.5);
		return output;
	}
`,Cy=`
attribute vertex_outlineParameters: vec3f;
attribute vertex_shadowParameters: vec3f;
varying outline_color: vec4f;
varying outline_thickness: f32;
varying shadow_color: vec4f;
varying shadow_offset: vec2f;
var<private> dOutlineColor: vec4f;
var<private> dOutlineThickness: f32;
var<private> dShadowColor: vec4f;
var<private> dShadowOffset: vec2f;
fn unpackMsdfParams() {
	let little: vec3f = vertex_outlineParameters % vec3f(256.0);
	let big: vec3f = (vertex_outlineParameters - little) / 256.0;
	dOutlineColor = vec4f(little.x, big.x, little.y, big.y) / 255.0;
	dOutlineThickness = little.z / 255.0 * 0.2;
	let little_shadow = vertex_shadowParameters % vec3f(256.0);
	let big_shadow = (vertex_shadowParameters - little_shadow) / 256.0;
	dShadowColor = vec4f(little_shadow.x, big_shadow.x, little_shadow.y, big_shadow.y) / 255.0;
	dShadowOffset = (vec2f(little_shadow.z, big_shadow.z) / 127.0 - 1.0) * 0.005;
}
`,Ay=`
var<private> dNormalMatrix: mat3x3f;
fn getNormal() -> vec3f {
	dNormalMatrix = getNormalMatrix(dModelMatrix);
	let localNormal: vec3f = getLocalNormal(vertex_normal);
	return normalize(dNormalMatrix * localNormal);
}`,wy=`
attribute vertex_normal: vec3f;
uniform matrix_normal: mat3x3f;
#ifdef MORPHING_NORMAL
	#ifdef MORPHING_INT
		var morphNormalTex: texture_2d<u32>;
		var morphNormalTexSampler: sampler;
	#else
		var morphNormalTex: texture_2d<f32>;
		var morphNormalTexSampler: sampler;
	#endif
#endif
fn getLocalNormal(vertexNormal: vec3f) -> vec3f {
	var localNormal: vec3f = vertexNormal;
	#ifdef MORPHING_NORMAL
		let morphUV: vec2i = getTextureMorphCoords();
		#ifdef MORPHING_INT
			let morphNormalInt: vec4u = textureLoad(morphNormalTex, morphUV, 0);
			let morphNormalF: vec3f = vec3f(morphNormalInt.xyz) / 65535.0 * 2.0 - 1.0;
			localNormal = localNormal + morphNormalF;
		#else
			let morphNormal: vec3f = textureLoad(morphNormalTex, morphUV, 0).xyz;
			localNormal = localNormal + morphNormal;
		#endif
	#endif
	return localNormal;
}
#if defined(SKIN) || defined(BATCH)
	fn getNormalMatrix(modelMatrix: mat4x4f) -> mat3x3f {
		return mat3x3f(modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz);
	}
#elif defined(INSTANCING)
	fn getNormalMatrix(modelMatrix: mat4x4f) -> mat3x3f {
		return mat3x3f(modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz);
	}
#else
	fn getNormalMatrix(modelMatrix: mat4x4f) -> mat3x3f {
		return uniform.matrix_normal;
	}
#endif
`,Ly=`
#ifdef STD_NORMAL_TEXTURE
	uniform material_bumpiness: f32;
#endif
#ifdef STD_NORMALDETAIL_TEXTURE
	uniform material_normalDetailMapBumpiness: f32;
	fn blendNormals(inN1: vec3f, inN2: vec3f) -> vec3f {
		let n1: vec3f = inN1 + vec3f(0.0, 0.0, 1.0);
		let n2: vec3f = inN2 * vec3f(-1.0, -1.0, 1.0);
		return n1 * dot(n1, n2) / n1.z - n2;
	}
#endif
fn getNormal() {
#ifdef STD_NORMAL_TEXTURE
	var normalMap: vec3f = {STD_NORMAL_TEXTURE_DECODE}(textureSampleBias({STD_NORMAL_TEXTURE_NAME}, {STD_NORMAL_TEXTURE_NAME}Sampler, {STD_NORMAL_TEXTURE_UV}, uniform.textureBias));
	normalMap = mix(vec3f(0.0, 0.0, 1.0), normalMap, uniform.material_bumpiness);
	#ifdef STD_NORMALDETAIL_TEXTURE
		var normalDetailMap: vec3f = {STD_NORMALDETAIL_TEXTURE_DECODE}(textureSampleBias({STD_NORMALDETAIL_TEXTURE_NAME}, {STD_NORMALDETAIL_TEXTURE_NAME}Sampler, {STD_NORMALDETAIL_TEXTURE_UV}, uniform.textureBias));
		normalDetailMap = mix(vec3f(0.0, 0.0, 1.0), normalDetailMap, uniform.material_normalDetailMapBumpiness);
		normalMap = blendNormals(normalMap, normalDetailMap);
	#endif
	dNormalW = normalize(dTBN * normalMap);
#else
	dNormalW = dVertexNormalW;
#endif
}
`,Dy=`
uniform material_opacity: f32;
uniform material_alphaDitherScale: f32;
fn getOpacity() {
	dAlpha = uniform.material_opacity;
	#ifdef STD_OPACITY_TEXTURE
	dAlpha = dAlpha * textureSampleBias({STD_OPACITY_TEXTURE_NAME}, {STD_OPACITY_TEXTURE_NAME}Sampler, {STD_OPACITY_TEXTURE_UV}, uniform.textureBias).{STD_OPACITY_TEXTURE_CHANNEL};
	#endif
	#ifdef STD_OPACITY_VERTEX
	dAlpha = dAlpha * clamp(vVertexColor.{STD_OPACITY_VERTEX_CHANNEL}, 0.0, 1.0);
	#endif
}
`,Py=`
#if STD_OPACITY_DITHER == BAYER8
	#include "bayerPS"
#endif
uniform blueNoiseJitter: vec4f;
#if STD_OPACITY_DITHER == BLUENOISE
	var blueNoiseTex32 : texture_2d<f32>;
	var blueNoiseTex32Sampler : sampler;
#endif
fn opacityDither(alpha: f32, id: f32) {
	if (alpha <= 0.0) {
		discard;
	}
	if (alpha >= 1.0) {
		return;
	}
	#if STD_OPACITY_DITHER == BAYER8
		var noise: f32 = bayer8(floor((pcPosition.xy + uniform.blueNoiseJitter.xy + id) % vec2f(8.0))) / 64.0;
	#else
		#if STD_OPACITY_DITHER == BLUENOISE
			var uv = fract(pcPosition.xy / 32.0 + uniform.blueNoiseJitter.xy + id);
			var noise: f32 = textureSampleLevel(blueNoiseTex32, blueNoiseTex32Sampler, uv, 0.0).y;
		#endif
		#if STD_OPACITY_DITHER == IGNNOISE
			var magic = vec3f(0.06711056, 0.00583715, 52.9829189);
			var noise: f32 = fract(magic.z * fract(dot(pcPosition.xy + uniform.blueNoiseJitter.xy + id, magic.xy)));
		#endif
	#endif
	noise = pow(noise, 2.2);
	if (alpha < noise) {
		discard;
	}
}
`,Iy=`
#ifdef PCOUTLINE_PASS
uniform pcOutlineColor: vec3f;
#endif
`,by=`
#ifdef PCOUTLINE_PASS
output.color = vec4f(gammaCorrectOutput(uniform.pcOutlineColor), output.color.a);
#endif
`,Ry=`
`,My=`
#if LIT_BLEND_TYPE == NORMAL || LIT_BLEND_TYPE == ADDITIVEALPHA || defined(LIT_ALPHA_TO_COVERAGE)
	output.color = vec4f(output.color.rgb, litArgs_opacity);
#elif LIT_BLEND_TYPE == PREMULTIPLIED
	output.color = vec4f(output.color.rgb * litArgs_opacity, litArgs_opacity);
#else
	output.color = vec4f(output.color.rgb, 1.0);
#endif
`,Ny=`
varying vUv0: vec2f;
var source: texture_2d<f32>;
var sourceSampler: sampler;
@fragment fn fragmentMain(input : FragmentInput) -> FragmentOutput {
	var output: FragmentOutput;
	output.color = textureSample(source, sourceSampler, input.vUv0);
	return output;
}
`,Oy=`
uniform material_sheen: vec3f;
fn getSheen() {
	var sheenColor = uniform.material_sheen;
	#ifdef STD_SHEEN_TEXTURE
	sheenColor = sheenColor * {STD_SHEEN_TEXTURE_DECODE}(textureSampleBias({STD_SHEEN_TEXTURE_NAME}, {STD_SHEEN_TEXTURE_NAME}Sampler, {STD_SHEEN_TEXTURE_UV}, uniform.textureBias)).{STD_SHEEN_TEXTURE_CHANNEL};
	#endif
	#ifdef STD_SHEEN_VERTEX
	sheenColor = sheenColor * saturate3(vVertexColor.{STD_SHEEN_VERTEX_CHANNEL});
	#endif
	sSpecularity = sheenColor;
}
`,Fy=`
uniform material_sheenGloss: f32;
fn getSheenGlossiness() {
	var sheenGlossiness = uniform.material_sheenGloss;
	#ifdef STD_SHEENGLOSS_TEXTURE
	sheenGlossiness = sheenGlossiness * textureSampleBias({STD_SHEENGLOSS_TEXTURE_NAME}, {STD_SHEENGLOSS_TEXTURE_NAME}Sampler, {STD_SHEENGLOSS_TEXTURE_UV}, uniform.textureBias).{STD_SHEENGLOSS_TEXTURE_CHANNEL};
	#endif
	#ifdef STD_SHEENGLOSS_VERTEX
	sheenGlossiness = sheenGlossiness * saturate(vVertexColor.{STD_SHEENGLOSS_VERTEX_CHANNEL});
	#endif
	#ifdef STD_SHEENGLOSS_INVERT
	sheenGlossiness = 1.0 - sheenGlossiness;
	#endif
	sGlossiness = sheenGlossiness + 0.0000001;
}
`,Uy=`
uniform material_heightMapFactor: f32;
fn getParallax() {
	var parallaxScale = uniform.material_heightMapFactor;
	var height: f32 = textureSampleBias({STD_HEIGHT_TEXTURE_NAME}, {STD_HEIGHT_TEXTURE_NAME}Sampler, {STD_HEIGHT_TEXTURE_UV}, uniform.textureBias).{STD_HEIGHT_TEXTURE_CHANNEL};
	height = height * parallaxScale - parallaxScale * 0.5;
	var viewDirT: vec3f = dViewDirW * dTBN;
	viewDirT.z = viewDirT.z + 0.42;
	dUvOffset = height * (viewDirT.xy / viewDirT.z);
}
`,By=`
fn encodePickOutput(id: u32) -> vec4f {
	let inv: vec4f = vec4f(1.0 / 255.0);
	let shifts: vec4u = vec4u(16u, 8u, 0u, 24u);
	let col: vec4u = (vec4u(id) >> shifts) & vec4u(0xffu);
	return vec4f(col) * inv;
}
#ifndef PICK_CUSTOM_ID
	uniform meshInstanceId: u32;
	fn getPickOutput() -> vec4f {
		return encodePickOutput(uniform.meshInstanceId);
	}
#endif
#ifdef DEPTH_PICK_PASS
	#include "floatAsUintPS"
	#ifndef CAMERAPLANES
		#define CAMERAPLANES
		uniform camera_params: vec4f;
	#endif
	fn getPickDepth() -> vec4f {
		var linearDepth: f32;
		if (uniform.camera_params.w > 0.5) {
			linearDepth = pcPosition.z;
		} else {
			let viewDist = 1.0 / pcPosition.w;
			linearDepth = (viewDist - uniform.camera_params.z) / (uniform.camera_params.y - uniform.camera_params.z);
		}
		return float2uint(linearDepth);
	}
#endif
`,ky=`
fn getReflDir(worldNormal: vec3f, viewDir: vec3f, gloss: f32, tbn: mat3x3f) {
	dReflDirW = normalize(-reflect(viewDir, worldNormal));
}
`,zy=`
fn getReflDir(worldNormal: vec3f, viewDir: vec3f, gloss: f32, tbn: mat3x3f) {
	let roughness: f32 = sqrt(1.0 - min(gloss, 1.0));
	let direction: vec2f = dAnisotropyRotation;
	let anisotropicT: vec3f = normalize(tbn * vec3f(direction, 0.0));
	let anisotropicB: vec3f = normalize(cross(tbn[2], anisotropicT));
	let anisotropy: f32 = dAnisotropy;
	let anisotropicDirection: vec3f = anisotropicB;
	let anisotropicTangent: vec3f = cross(anisotropicDirection, viewDir);
	let anisotropicNormal: vec3f = cross(anisotropicTangent, anisotropicDirection);
	let bendFactor: f32 = 1.0 - anisotropy * (1.0 - roughness);
	let bendFactor4: f32 = bendFactor * bendFactor * bendFactor * bendFactor;
	let bentNormal: vec3f = normalize(mix(normalize(anisotropicNormal), normalize(worldNormal), bendFactor4));
	dReflDirW = reflect(-viewDir, bentNormal);
}`,Vy=`
#ifdef LIT_CLEARCOAT
fn addReflectionCC(reflDir: vec3f, gloss: f32) {
	ccReflection = ccReflection + calcReflection(reflDir, gloss);
}
#endif
`,Gy=`
var texture_cubeMap: texture_cube<f32>;
var texture_cubeMapSampler: sampler;
uniform material_reflectivity: f32;
fn calcReflection(reflDir: vec3f, gloss: f32) -> vec3f {
	var lookupVec: vec3f = cubeMapProject(reflDir);
	lookupVec.x = lookupVec.x * -1.0;
	return {reflectionDecode}(textureSample(texture_cubeMap, texture_cubeMapSampler, lookupVec));
}
fn addReflection(reflDir: vec3f, gloss: f32) {
	dReflection = dReflection + vec4f(calcReflection(reflDir, gloss), uniform.material_reflectivity);
}
`,Hy=`
#ifndef ENV_ATLAS
	#define ENV_ATLAS
	var texture_envAtlas: texture_2d<f32>;
	var texture_envAtlasSampler: sampler;
#endif
var texture_cubeMap: texture_cube<f32>;
var texture_cubeMapSampler: sampler;
uniform material_reflectivity: f32;
fn calcReflection(reflDir: vec3f, gloss: f32) -> vec3f {
	let dir: vec3f = cubeMapProject(reflDir) * vec3f(-1.0, 1.0, 1.0);
	let uv: vec2f = toSphericalUv(dir);
	let level: f32 = saturate(1.0 - gloss) * 5.0;
	let ilevel: f32 = floor(level);
	let flevel: f32 = level - ilevel;
	let sharp: vec3f = {reflectionCubemapDecode}(textureSample(texture_cubeMap, texture_cubeMapSampler, dir));
	let roughA: vec3f = {reflectionDecode}(textureSample(texture_envAtlas, texture_envAtlasSampler, mapRoughnessUv(uv, ilevel)));
	let roughB: vec3f = {reflectionDecode}(textureSample(texture_envAtlas, texture_envAtlasSampler, mapRoughnessUv(uv, ilevel + 1.0)));
	return processEnvironment(mix(sharp, mix(roughA, roughB, flevel), min(level, 1.0)));
}
fn addReflection(reflDir: vec3f, gloss: f32) {
	dReflection = dReflection + vec4f(calcReflection(reflDir, gloss), uniform.material_reflectivity);
}
`,Wy=`
#ifndef ENV_ATLAS
#define ENV_ATLAS
	var texture_envAtlas: texture_2d<f32>;
	var texture_envAtlasSampler: sampler;
#endif
uniform material_reflectivity: f32;
fn shinyMipLevel(uv: vec2f) -> f32 {
	let dx: vec2f = dpdx(uv);
	let dy: vec2f = dpdy(uv);
	let uv2: vec2f = vec2f(fract(uv.x + 0.5), uv.y);
	let dx2: vec2f = dpdx(uv2);
	let dy2: vec2f = dpdy(uv2);
	let maxd: f32 = min(max(dot(dx, dx), dot(dy, dy)), max(dot(dx2, dx2), dot(dy2, dy2)));
	return clamp(0.5 * log2(maxd) - 1.0 + uniform.textureBias, 0.0, 5.0);
}
fn calcReflection(reflDir: vec3f, gloss: f32) -> vec3f {
	let dir: vec3f = cubeMapProject(reflDir) * vec3f(-1.0, 1.0, 1.0);
	let uv: vec2f = toSphericalUv(dir);
	let level: f32 = saturate(1.0 - gloss) * 5.0;
	let ilevel: f32 = floor(level);
	let level2: f32 = shinyMipLevel(uv * atlasSize);
	let ilevel2: f32 = floor(level2);
	var uv0: vec2f;
	var uv1: vec2f;
	var weight: f32;
	if (ilevel == 0.0) {
		uv0 = mapShinyUv(uv, ilevel2);
		uv1 = mapShinyUv(uv, ilevel2 + 1.0);
		weight = level2 - ilevel2;
	} else {
		uv0 = mapRoughnessUv(uv, ilevel);
		uv1 = uv0;
		weight = 0.0;
	}
	let linearA: vec3f = {reflectionDecode}(textureSample(texture_envAtlas, texture_envAtlasSampler, uv0));
	let linearB: vec3f = {reflectionDecode}(textureSample(texture_envAtlas, texture_envAtlasSampler, uv1));
	let linear0: vec3f = mix(linearA, linearB, weight);
	let linear1: vec3f = {reflectionDecode}(textureSample(texture_envAtlas, texture_envAtlasSampler, mapRoughnessUv(uv, ilevel + 1.0)));
	return processEnvironment(mix(linear0, linear1, level - ilevel));
}
fn addReflection(reflDir: vec3f, gloss: f32) {
	dReflection = dReflection + vec4f(calcReflection(reflDir, gloss), uniform.material_reflectivity);
}
`,Xy=`
#ifndef VIEWMATRIX
	#define VIEWMATRIX
	uniform matrix_view: mat4x4f;
#endif
var texture_sphereMap: texture_2d<f32>;
var texture_sphereMapSampler: sampler;
uniform material_reflectivity: f32;
fn calcReflection(reflDir: vec3f, gloss: f32) -> vec3f {
	let viewRotationMatrix = mat3x3f(uniform.matrix_view[0].xyz, uniform.matrix_view[1].xyz, uniform.matrix_view[2].xyz);
	let reflDirV: vec3f = viewRotationMatrix * reflDir;
	let m: f32 = 2.0 * sqrt(dot(reflDirV.xy, reflDirV.xy) + (reflDirV.z + 1.0) * (reflDirV.z + 1.0));
	let sphereMapUv: vec2f = reflDirV.xy / m + 0.5;
	return {reflectionDecode}(textureSample(texture_sphereMap, texture_sphereMapSampler, sphereMapUv));
}
fn addReflection(reflDir: vec3f, gloss: f32) {
	dReflection = dReflection + vec4f(calcReflection(reflDir, gloss), uniform.material_reflectivity);
}
`,Yy=`
fn addReflectionSheen(worldNormal: vec3f, viewDir: vec3f, gloss: f32) {
	let NoV: f32 = dot(worldNormal, viewDir);
	let alphaG: f32 = gloss * gloss;
	let a: f32 = select(
		-8.48 * alphaG + 14.3 * gloss - 9.95,
		-339.2 * alphaG + 161.4 * gloss - 25.9,
		gloss < 0.25
	);
	let b: f32 = select(
		1.97 * alphaG - 3.27 * gloss + 0.72,
		44.0 * alphaG - 23.7 * gloss + 3.26,
		gloss < 0.25
	);
	let dg_add: f32 = select(
		0.1 * ( gloss - 0.25 ),
		0.0,
		gloss < 0.25
	);
	let dg: f32 = exp( a * NoV + b ) + dg_add;
	sReflection = sReflection + (calcReflection(worldNormal, 0.0) * saturate(dg));
}`,$y=`
fn refract2(viewVec: vec3f, normal: vec3f, IOR: f32) -> vec3f {
	let vn: f32 = dot(viewVec, normal);
	let k: f32 = 1.0 - IOR * IOR * (1.0 - vn * vn);
	let refrVec: vec3f = IOR * viewVec - (IOR * vn + sqrt(k)) * normal;
	return refrVec;
}
fn addRefraction(
	worldNormal: vec3f,
	viewDir: vec3f,
	thickness: f32,
	gloss: f32,
	specularity: vec3f,
	albedo: vec3f,
	transmission: f32,
	refractionIndex: f32,
	dispersion: f32
#if defined(LIT_IRIDESCENCE)
	, iridescenceFresnel: vec3f,
	iridescenceIntensity: f32
#endif
) {
	let tmpRefl: vec4f = dReflection;
	let reflectionDir: vec3f = refract2(-viewDir, worldNormal, refractionIndex);
	dReflection = vec4f(0.0);
	addReflection(reflectionDir, gloss);
	dDiffuseLight = mix(dDiffuseLight, dReflection.rgb * albedo, transmission);
	dReflection = tmpRefl;
}
`,qy=`
uniform material_invAttenuationDistance: f32;
uniform material_attenuation: vec3f;
fn evalRefractionColor(refractionVector: vec3f, gloss: f32, refractionIndex: f32) -> vec3f {
	let pointOfRefraction: vec4f = vec4f(vPositionW + refractionVector, 1.0);
	let projectionPoint: vec4f = uniform.matrix_viewProjection * pointOfRefraction;
	let uv: vec2f = getGrabScreenPos(projectionPoint);
	let iorToRoughness: f32 = (1.0 - gloss) * clamp((1.0 / refractionIndex) * 2.0 - 2.0, 0.0, 1.0);
	let refractionLod: f32 = log2(uniform.uScreenSize.x) * iorToRoughness;
	var refraction: vec3f = textureSampleLevel(uSceneColorMap, uSceneColorMapSampler, uv, refractionLod).rgb;
	#ifdef SCENE_COLORMAP_GAMMA
		refraction = decodeGamma3(refraction);
	#endif
	return refraction;
}
fn addRefraction(
	worldNormal: vec3f,
	viewDir: vec3f,
	thickness: f32,
	gloss: f32,
	specularity: vec3f,
	albedo: vec3f,
	transmission: f32,
	refractionIndex: f32,
	dispersion: f32,
#if defined(LIT_IRIDESCENCE)
	iridescenceFresnel: vec3f,
	iridescenceIntensity: f32
#endif
) {
	var modelScale: vec3f;
	modelScale.x = length(uniform.matrix_model[0].xyz);
	modelScale.y = length(uniform.matrix_model[1].xyz);
	modelScale.z = length(uniform.matrix_model[2].xyz);
	let scale: vec3f = thickness * modelScale;
	var refractionVector = normalize(refract(-viewDir, worldNormal, refractionIndex)) * scale;
	var refraction = evalRefractionColor(refractionVector, gloss, refractionIndex);
	#ifdef LIT_DISPERSION
		let halfSpread: f32 = (1.0 / refractionIndex - 1.0) * 0.025 * dispersion;
		let refractionIndexR: f32 = refractionIndex - halfSpread;
		refractionVector = normalize(refract(-viewDir, worldNormal, refractionIndexR)) * scale;
		refraction.r = evalRefractionColor(refractionVector, gloss, refractionIndexR).r;
		let refractionIndexB: f32 = refractionIndex + halfSpread;
		refractionVector = normalize(refract(-viewDir, worldNormal, refractionIndexB)) * scale;
		refraction.b = evalRefractionColor(refractionVector, gloss, refractionIndexB).b;
	#endif
	var transmittance: vec3f;
	if (uniform.material_invAttenuationDistance != 0.0)
	{
		let attenuation: vec3f = -log(uniform.material_attenuation) * uniform.material_invAttenuationDistance;
		transmittance = exp(-attenuation * length(refractionVector));
	}
	else
	{
		transmittance = vec3f(1.0);
	}
	let fresnel: vec3f = vec3f(1.0) -
		getFresnel(
			dot(viewDir, worldNormal),
			gloss,
			specularity
		#if defined(LIT_IRIDESCENCE)
			, iridescenceFresnel,
			iridescenceIntensity
		#endif
		);
	dDiffuseLight = mix(dDiffuseLight, refraction * transmittance * fresnel, transmission);
}
`,jy=`
varying vUv0: vec2f;
#ifdef CUBEMAP_SOURCE
	var sourceCube: texture_cube<f32>;
	var sourceCubeSampler : sampler;
#else
	var sourceTex: texture_2d<f32>;
	var sourceTexSampler : sampler;
#endif
#ifdef USE_SAMPLES_TEX
	var samplesTex: texture_2d<f32>;
	var samplesTexSampler : sampler;
	uniform samplesTexInverseSize: vec2f;
#endif
uniform params: vec3f;
fn targetFace() -> f32 { return uniform.params.x; }
fn targetTotalPixels() -> f32 { return uniform.params.y; }
fn sourceTotalPixels() -> f32 { return uniform.params.z; }
const PI: f32 = 3.141592653589793;
fn saturate(x: f32) -> f32 {
	return clamp(x, 0.0, 1.0);
}
#include "decodePS"
#include "encodePS"
fn modifySeams(dir: vec3f, scale: f32) -> vec3f {
	let adir = abs(dir);
	let M = max(max(adir.x, adir.y), adir.z);
	return dir / M * vec3f(
		select(scale, 1.0, adir.x == M),
		select(scale, 1.0, adir.y == M),
		select(scale, 1.0, adir.z == M)
	);
}
fn toSpherical(dir: vec3f) -> vec2f {
	let nonZeroXZ = any(dir.xz != vec2f(0.0, 0.0));
	return vec2f(select(0.0, atan2(dir.x, dir.z), nonZeroXZ), asin(dir.y));
}
fn fromSpherical(uv: vec2f) -> vec3f {
	return vec3f(cos(uv.y) * sin(uv.x),
				sin(uv.y),
				cos(uv.y) * cos(uv.x));
}
fn getDirectionEquirect(uv: vec2f) -> vec3f {
	return fromSpherical((vec2f(uv.x, 1.0 - uv.y) * 2.0 - 1.0) * vec2f(PI, PI * 0.5));
}
fn signNotZero(k: f32) -> f32 {
	return select(-1.0, 1.0, k >= 0.0);
}
fn signNotZeroVec2(v: vec2f) -> vec2f {
	return vec2f(signNotZero(v.x), signNotZero(v.y));
}
fn octDecode(o: vec2f) -> vec3f {
	var v = vec3f(o.x, 1.0 - abs(o.x) - abs(o.y), o.y);
	if (v.y < 0.0) {
		var temp: vec2f = (1.0 - abs(v.zx)) * signNotZeroVec2(v.xz);
		v = vec3f(temp.x, v.y, temp.y);
	}
	return normalize(v);
}
fn getDirectionOctahedral(uv: vec2f) -> vec3f {
	return octDecode(vec2f(uv.x, 1.0 - uv.y) * 2.0 - 1.0);
}
fn octEncode(v: vec3f) -> vec2f {
	let l1norm = abs(v.x) + abs(v.y) + abs(v.z);
	var result = v.xz * (1.0 / l1norm);
	if (v.y < 0.0) {
		result = (1.0 - abs(result.yx)) * signNotZeroVec2(result.xy);
	}
	return result;
}
#ifdef CUBEMAP_SOURCE
	fn sampleCubemapDir(dir: vec3f) -> vec4f {
		return textureSample(sourceCube, sourceCubeSampler, modifySeams(dir, 1.0));
	}
	fn sampleCubemapSph(sph: vec2f) -> vec4f {
		return sampleCubemapDir(fromSpherical(sph));
	}
	fn sampleCubemapDirLod(dir: vec3f, mipLevel: f32) -> vec4f {
		return textureSampleLevel(sourceCube, sourceCubeSampler, modifySeams(dir, 1.0), mipLevel);
	}
	fn sampleCubemapSphLod(sph: vec2f, mipLevel: f32) -> vec4f {
		return sampleCubemapDirLod(fromSpherical(sph), mipLevel);
	}
#else
	fn sampleEquirectSph(sph: vec2f) -> vec4f {
		let uv = sph / vec2f(PI * 2.0, PI) + 0.5;
		return textureSample(sourceTex, sourceTexSampler, vec2f(uv.x, 1.0 - uv.y));
	}
	fn sampleEquirectDir(dir: vec3f) -> vec4f {
		return sampleEquirectSph(toSpherical(dir));
	}
	fn sampleEquirectSphLod(sph: vec2f, mipLevel: f32) -> vec4f {
		let uv = sph / vec2f(PI * 2.0, PI) + 0.5;
		return textureSampleLevel(sourceTex, sourceTexSampler, vec2f(uv.x, 1.0 - uv.y), mipLevel);
	}
	fn sampleEquirectDirLod(dir: vec3f, mipLevel: f32) -> vec4f {
		return sampleEquirectSphLod(toSpherical(dir), mipLevel);
	}
	fn sampleOctahedralDir(dir: vec3f) -> vec4f {
		let uv = octEncode(dir) * 0.5 + 0.5;
		return textureSample(sourceTex, sourceTexSampler, vec2f(uv.x, 1.0 - uv.y));
	}
	fn sampleOctahedralSph(sph: vec2f) -> vec4f {
		return sampleOctahedralDir(fromSpherical(sph));
	}
	fn sampleOctahedralDirLod(dir: vec3f, mipLevel: f32) -> vec4f {
		let uv = octEncode(dir) * 0.5 + 0.5;
		return textureSampleLevel(sourceTex, sourceTexSampler, vec2f(uv.x, 1.0 - uv.y), mipLevel);
	}
	fn sampleOctahedralSphLod(sph: vec2f, mipLevel: f32) -> vec4f {
		return sampleOctahedralDirLod(fromSpherical(sph), mipLevel);
	}
#endif
fn getDirectionCubemap(uv: vec2f) -> vec3f {
	let st = uv * 2.0 - 1.0;
	let face = targetFace();
	var vec: vec3f;
	if (face == 0.0) {
		vec = vec3f(1, -st.y, -st.x);
	} else if (face == 1.0) {
		vec = vec3f(-1, -st.y, st.x);
	} else if (face == 2.0) {
		vec = vec3f(st.x, 1, st.y);
	} else if (face == 3.0) {
		vec = vec3f(st.x, -1, -st.y);
	} else if (face == 4.0) {
		vec = vec3f(st.x, -st.y, 1);
	} else {
		vec = vec3f(-st.x, -st.y, -1);
	}
	return normalize(modifySeams(vec, 1.0));
}
fn matrixFromVector(n: vec3f) -> mat3x3f {
	let a = 1.0 / (1.0 + n.z);
	let b = -n.x * n.y * a;
	let b1 = vec3f(1.0 - n.x * n.x * a, b, -n.x);
	let b2 = vec3f(b, 1.0 - n.y * n.y * a, -n.y);
	return mat3x3f(b1, b2, n);
}
fn matrixFromVectorSlow(n: vec3f) -> mat3x3f {
	let up = select(vec3f(0.0, 0.0, select(-1.0, 1.0, n.y > 0.0)), vec3f(0.0, 1.0, 0.0), abs(n.y) > 0.0000001);
	let x = normalize(cross(up, n));
	let y = cross(n, x);
	return mat3x3f(x, y, n);
}
fn reproject(uv: vec2f) -> vec4f {
	if ({NUM_SAMPLES} <= 1) {
		return {ENCODE_FUNC}({DECODE_FUNC}({SOURCE_FUNC}Dir({TARGET_FUNC}(uv))));
	} else {
		let t = {TARGET_FUNC}(uv);
		let tu = dpdx(t);
		let tv = dpdy(t);
		var result = vec3f(0.0);
		for (var u = 0.0; u < {NUM_SAMPLES_SQRT}; u += 1.0) {
			for (var v = 0.0; v < {NUM_SAMPLES_SQRT}; v += 1.0) {
				result += {DECODE_FUNC}({SOURCE_FUNC}Dir(normalize(t +
															tu * (u / {NUM_SAMPLES_SQRT} - 0.5) +
															tv * (v / {NUM_SAMPLES_SQRT} - 0.5))));
			}
		}
		return {ENCODE_FUNC}(result / ({NUM_SAMPLES_SQRT} * {NUM_SAMPLES_SQRT}));
	}
}
const unpackFloat: vec4f = vec4f(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 16581375.0);
#ifdef USE_SAMPLES_TEX
	fn unpackSample(i: i32, L: ptr<function, vec3f>, mipLevel: ptr<function, f32>) {
		var u = (f32(i * 4) + 0.5) * uniform.samplesTexInverseSize.x;
		var v = (floor(u) + 0.5) * uniform.samplesTexInverseSize.y;
		var raw: vec4f;
		raw.x = dot(textureSample(samplesTex, samplesTexSampler, vec2f(u, v)), unpackFloat); u += uniform.samplesTexInverseSize.x;
		raw.y = dot(textureSample(samplesTex, samplesTexSampler, vec2f(u, v)), unpackFloat); u += uniform.samplesTexInverseSize.x;
		raw.z = dot(textureSample(samplesTex, samplesTexSampler, vec2f(u, v)), unpackFloat); u += uniform.samplesTexInverseSize.x;
		raw.w = dot(textureSample(samplesTex, samplesTexSampler, vec2f(u, v)), unpackFloat);
		*L = raw.xyz * 2.0 - 1.0;
		*mipLevel = raw.w * 8.0;
	}
	fn prefilterSamples(uv: vec2f) -> vec4f {
		let vecSpace = matrixFromVectorSlow({TARGET_FUNC}(uv));
		var L: vec3f;
		var mipLevel: f32;
		var result = vec3f(0.0);
		var totalWeight = 0.0;
		for (var i = 0; i < {NUM_SAMPLES}; i += 1) {
			unpackSample(i, &L, &mipLevel);
			result += {DECODE_FUNC}({SOURCE_FUNC}DirLod(vecSpace * L, mipLevel)) * L.z;
			totalWeight += L.z;
		}
		return {ENCODE_FUNC}(result / totalWeight);
	}
	fn prefilterSamplesUnweighted(uv: vec2f) -> vec4f {
		let vecSpace = matrixFromVectorSlow({TARGET_FUNC}(uv));
		var L: vec3f;
		var mipLevel: f32;
		var result = vec3f(0.0);
		for (var i = 0; i < {NUM_SAMPLES}; i += 1) {
			unpackSample(i, &L, &mipLevel);
			result += {DECODE_FUNC}({SOURCE_FUNC}DirLod(vecSpace * L, mipLevel));
		}
		return {ENCODE_FUNC}(result / f32({NUM_SAMPLES}));
	}
#endif
@fragment
fn fragmentMain(input : FragmentInput) -> FragmentOutput {
	var output: FragmentOutput;
	output.color = {PROCESS_FUNC}(input.vUv0);
	return output;
}
`,Ky=`
attribute vertex_position: vec2f;
uniform uvMod: vec4f;
varying vUv0: vec2f;
@vertex
fn vertexMain(input: VertexInput) -> VertexOutput {
	var output: VertexOutput;
	output.position = vec4f(input.vertex_position, 0.5, 1.0);
	output.vUv0 = getImageEffectUV((input.vertex_position * 0.5 + vec2f(0.5, 0.5)) * uniform.uvMod.xy + uniform.uvMod.zw);
	return output;
}
`,Zy=`
var uSceneDepthMap: texture_2d<uff>;
#ifndef SCREENSIZE
	#define SCREENSIZE
	uniform uScreenSize: vec4f;
#endif
#ifndef VIEWMATRIX
	#define VIEWMATRIX
	uniform matrix_view: mat4x4f;
#endif
#ifndef LINEARIZE_DEPTH
	#define LINEARIZE_DEPTH
	#ifndef CAMERAPLANES
		#define CAMERAPLANES
		uniform camera_params: vec4f;
	#endif
	fn linearizeDepth(z: f32) -> f32 {
		if (uniform.camera_params.w == 0.0) {
			return (uniform.camera_params.z * uniform.camera_params.y) / (uniform.camera_params.y + z * (uniform.camera_params.z - uniform.camera_params.y));
		} else {
			return uniform.camera_params.z + z * (uniform.camera_params.y - uniform.camera_params.z);
		}
	}
#endif
fn delinearizeDepth(linearDepth: f32) -> f32 {
	if (uniform.camera_params.w == 0.0) {
		return (uniform.camera_params.y * (uniform.camera_params.z - linearDepth)) / (linearDepth * (uniform.camera_params.z - uniform.camera_params.y));
	} else {
		return (linearDepth - uniform.camera_params.z) / (uniform.camera_params.y - uniform.camera_params.z);
	}
}
fn getLinearScreenDepth(uv: vec2f) -> f32 {
	let textureSize = textureDimensions(uSceneDepthMap, 0);
	let texel: vec2i = vec2i(uv * vec2f(textureSize));
	#ifdef SCENE_DEPTHMAP_LINEAR
		return textureLoad(uSceneDepthMap, texel, 0).r;
	#else
		return linearizeDepth(textureLoad(uSceneDepthMap, texel, 0).r);
	#endif
}
#ifndef VERTEXSHADER
	fn getLinearScreenDepthFrag() -> f32 {
		let uv: vec2f = pcPosition.xy * uniform.uScreenSize.zw;
		return getLinearScreenDepth(uv);
	}
#endif
fn getLinearDepth(pos: vec3f) -> f32 {
	return -(uniform.matrix_view * vec4f(pos, 1.0)).z;
}
`,Jy=`
fn getShadowCascadeIndex(shadowCascadeDistances: vec4f, shadowCascadeCount: i32) -> i32 {
	let depth: f32 = 1.0 / pcPosition.w;
	let comparisons: vec4f = step(shadowCascadeDistances, vec4f(depth));
	let cascadeIndex: i32 = i32(dot(comparisons, vec4f(1.0)));
	return min(cascadeIndex, shadowCascadeCount - 1);
}
fn ditherShadowCascadeIndex(cascadeIndex_in: i32, shadowCascadeDistances: vec4f, shadowCascadeCount: i32, blendFactor: f32) -> i32 {
	var cascadeIndex: i32 = cascadeIndex_in;
	if (cascadeIndex < shadowCascadeCount - 1) {
		let currentRangeEnd: f32 = shadowCascadeDistances[cascadeIndex];
		let transitionStart: f32 = blendFactor * currentRangeEnd;
		let depth: f32 = 1.0 / pcPosition.w;
		if (depth > transitionStart) {
			let transitionFactor: f32 = smoothstep(transitionStart, currentRangeEnd, depth);
			let dither: f32 = fract(sin(dot(pcPosition.xy, vec2f(12.9898, 78.233))) * 43758.5453);
			if (dither < transitionFactor) {
				cascadeIndex = cascadeIndex + 1;
			}
		}
	}
	return cascadeIndex;
}
fn fadeShadow(shadowCoord_in: vec3f, shadowCascadeDistances: vec4f) -> vec3f {
	var shadowCoord: vec3f = shadowCoord_in;
	let depth: f32 = 1.0 / pcPosition.w;
	if (depth > shadowCascadeDistances.w) {
		shadowCoord.z = -9999999.0;
	}
	return shadowCoord;
}
`,Qy=`
fn linstep(a: f32, b: f32, v: f32) -> f32 {
	return clamp((v - a) / (b - a), 0.0, 1.0);
}
fn reduceLightBleeding(pMax: f32, amount: f32) -> f32 {
	 return linstep(amount, 1.0, pMax);
}
fn chebyshevUpperBound(moments: vec2f, mean: f32, minVariance: f32, lightBleedingReduction: f32) -> f32 {
	var variance: f32 = moments.y - (moments.x * moments.x);
	variance = max(variance, minVariance);
	let d: f32 = mean - moments.x;
	var pMax: f32 = variance / (variance + (d * d));
	pMax = reduceLightBleeding(pMax, lightBleedingReduction);
	return select(pMax, 1.0, mean <= moments.x);
}
fn calculateEVSM(moments_in: vec3f, Z_in: f32, vsmBias: f32, exponent: f32) -> f32 {
	let Z: f32 = 2.0 * Z_in - 1.0;
	let warpedDepth: f32 = exp(exponent * Z);
	let moments: vec2f = moments_in.xy + vec2f(warpedDepth, warpedDepth*warpedDepth) * (1.0 - moments_in.z);
	let VSMBias: f32 = vsmBias;
	let depthScale: f32 = VSMBias * exponent * warpedDepth;
	let minVariance1: f32 = depthScale * depthScale;
	return chebyshevUpperBound(moments, warpedDepth, minVariance1, 0.1);
}
fn VSM16(tex: texture_2d<f32>, texSampler: sampler, texCoords: vec2f, resolution: f32, Z: f32, vsmBias: f32, exponent: f32) -> f32 {
	let moments: vec3f = textureSampleLevel(tex, texSampler, texCoords, 0.0).xyz;
	return calculateEVSM(moments, Z, vsmBias, exponent);
}
fn getShadowVSM16(shadowMap: texture_2d<f32>, shadowMapSampler: sampler, shadowCoord: vec3f, shadowParams: vec4f, exponent: f32) -> f32 {
	return VSM16(shadowMap, shadowMapSampler, shadowCoord.xy, shadowParams.x, shadowCoord.z, shadowParams.y, exponent);
}
fn getShadowSpotVSM16(shadowMap: texture_2d<f32>, shadowMapSampler: sampler, shadowCoord: vec3f, shadowParams: vec4f, exponent: f32, lightDir: vec3f) -> f32 {
	let Z: f32 = length(lightDir) * shadowParams.w + shadowParams.z;
	return VSM16(shadowMap, shadowMapSampler, shadowCoord.xy, shadowParams.x, Z, shadowParams.y, exponent);
}
fn VSM32(tex: texture_2d<f32>, texSampler: sampler, texCoords_in: vec2f, resolution: f32, Z: f32, vsmBias: f32, exponent: f32) -> f32 {
	#ifdef CAPS_TEXTURE_FLOAT_FILTERABLE
		var moments: vec3f = textureSampleLevel(tex, texSampler, texCoords_in, 0.0).xyz;
	#else
		var pixelSize : f32 = 1.0 / resolution;
		let texCoords: vec2f = texCoords_in - vec2f(pixelSize);
		let s00: vec3f = textureSampleLevel(tex, texSampler, texCoords, 0.0).xyz;
		let s10: vec3f = textureSampleLevel(tex, texSampler, texCoords + vec2f(pixelSize, 0.0), 0.0).xyz;
		let s01: vec3f = textureSampleLevel(tex, texSampler, texCoords + vec2f(0.0, pixelSize), 0.0).xyz;
		let s11: vec3f = textureSampleLevel(tex, texSampler, texCoords + vec2f(pixelSize), 0.0).xyz;
		let fr: vec2f = fract(texCoords * resolution);
		let h0: vec3f = mix(s00, s10, fr.x);
		let h1: vec3f = mix(s01, s11, fr.x);
		var moments: vec3f = mix(h0, h1, fr.y);
	#endif
	return calculateEVSM(moments, Z, vsmBias, exponent);
}
fn getShadowVSM32(shadowMap: texture_2d<f32>, shadowMapSampler: sampler, shadowCoord: vec3f, shadowParams: vec4f, exponent: f32) -> f32 {
	return VSM32(shadowMap, shadowMapSampler, shadowCoord.xy, shadowParams.x, shadowCoord.z, shadowParams.y, exponent);
}
fn getShadowSpotVSM32(shadowMap: texture_2d<f32>, shadowMapSampler: sampler, shadowCoord: vec3f, shadowParams: vec4f, exponent: f32, lightDir: vec3f) -> f32 {
	let Z: f32 = length(lightDir) * shadowParams.w + shadowParams.z;
	return VSM32(shadowMap, shadowMapSampler, shadowCoord.xy, shadowParams.x, Z, shadowParams.y, exponent);
}
`,ex=`
fn getShadowPCF1x1(shadowMap: texture_depth_2d, shadowMapSampler: sampler_comparison, shadowCoord: vec3f, shadowParams: vec4f) -> f32 {
	return textureSampleCompareLevel(shadowMap, shadowMapSampler, shadowCoord.xy, shadowCoord.z);
}
fn getShadowSpotPCF1x1(shadowMap: texture_depth_2d, shadowMapSampler: sampler_comparison, shadowCoord: vec3f, shadowParams: vec4f) -> f32 {
	return textureSampleCompareLevel(shadowMap, shadowMapSampler, shadowCoord.xy, shadowCoord.z);
}
`,tx=`
fn _getShadowPCF3x3(shadowMap: texture_depth_2d, shadowMapSampler: sampler_comparison, shadowCoord: vec3f, shadowParams: vec3f) -> f32 {
	let z: f32 = shadowCoord.z;
	let uv: vec2f = shadowCoord.xy * shadowParams.x;
	let shadowMapSizeInv: f32 = 1.0 / shadowParams.x;
	let base_uv_temp: vec2f = floor(uv + 0.5);
	let s: f32 = (uv.x + 0.5 - base_uv_temp.x);
	let t: f32 = (uv.y + 0.5 - base_uv_temp.y);
	let base_uv: vec2f = (base_uv_temp - vec2f(0.5)) * shadowMapSizeInv;
	var sum: f32 = 0.0;
	let uw0: f32 = (3.0 - 2.0 * s);
	let uw1: f32 = (1.0 + 2.0 * s);
	let u0_offset: f32 = (2.0 - s) / uw0 - 1.0;
	let u1_offset: f32 = s / uw1 + 1.0;
	let vw0: f32 = (3.0 - 2.0 * t);
	let vw1: f32 = (1.0 + 2.0 * t);
	let v0_offset: f32 = (2.0 - t) / vw0 - 1.0;
	let v1_offset: f32 = t / vw1 + 1.0;
	let u0: f32 = u0_offset * shadowMapSizeInv + base_uv.x;
	let v0: f32 = v0_offset * shadowMapSizeInv + base_uv.y;
	let u1: f32 = u1_offset * shadowMapSizeInv + base_uv.x;
	let v1: f32 = v1_offset * shadowMapSizeInv + base_uv.y;
	sum = sum + uw0 * vw0 * textureSampleCompareLevel(shadowMap, shadowMapSampler, vec2f(u0, v0), z);
	sum = sum + uw1 * vw0 * textureSampleCompareLevel(shadowMap, shadowMapSampler, vec2f(u1, v0), z);
	sum = sum + uw0 * vw1 * textureSampleCompareLevel(shadowMap, shadowMapSampler, vec2f(u0, v1), z);
	sum = sum + uw1 * vw1 * textureSampleCompareLevel(shadowMap, shadowMapSampler, vec2f(u1, v1), z);
	sum = sum * (1.0 / 16.0);
	return sum;
}
fn getShadowPCF3x3(shadowMap: texture_depth_2d, shadowMapSampler: sampler_comparison, shadowCoord: vec3f, shadowParams: vec4f) -> f32 {
	return _getShadowPCF3x3(shadowMap, shadowMapSampler, shadowCoord, shadowParams.xyz);
}
fn getShadowSpotPCF3x3(shadowMap: texture_depth_2d, shadowMapSampler: sampler_comparison, shadowCoord: vec3f, shadowParams: vec4f) -> f32 {
	return _getShadowPCF3x3(shadowMap, shadowMapSampler, shadowCoord, shadowParams.xyz);
}
`,ix=`
fn _getShadowPCF5x5(shadowMap: texture_depth_2d, shadowMapSampler: sampler_comparison, shadowCoord: vec3f, shadowParams: vec3f) -> f32 {
	let z: f32 = shadowCoord.z;
	let uv: vec2f = shadowCoord.xy * shadowParams.x;
	let shadowMapSizeInv: f32 = 1.0 / shadowParams.x;
	let base_uv_temp: vec2f = floor(uv + 0.5);
	let s: f32 = (uv.x + 0.5 - base_uv_temp.x);
	let t: f32 = (uv.y + 0.5 - base_uv_temp.y);
	let base_uv: vec2f = (base_uv_temp - vec2f(0.5)) * shadowMapSizeInv;
	let uw0: f32 = (4.0 - 3.0 * s);
	let uw1: f32 = 7.0;
	let uw2: f32 = (1.0 + 3.0 * s);
	let u0_offset: f32 = (3.0 - 2.0 * s) / uw0 - 2.0;
	let u1_offset: f32 = (3.0 + s) / uw1;
	let u2_offset: f32 = s / uw2 + 2.0;
	let vw0: f32 = (4.0 - 3.0 * t);
	let vw1: f32 = 7.0;
	let vw2: f32 = (1.0 + 3.0 * t);
	let v0_offset: f32 = (3.0 - 2.0 * t) / vw0 - 2.0;
	let v1_offset: f32 = (3.0 + t) / vw1;
	let v2_offset: f32 = t / vw2 + 2.0;
	var sum: f32 = 0.0;
	let u0: f32 = u0_offset * shadowMapSizeInv + base_uv.x;
	let v0: f32 = v0_offset * shadowMapSizeInv + base_uv.y;
	let u1: f32 = u1_offset * shadowMapSizeInv + base_uv.x;
	let v1: f32 = v1_offset * shadowMapSizeInv + base_uv.y;
	let u2: f32 = u2_offset * shadowMapSizeInv + base_uv.x;
	let v2: f32 = v2_offset * shadowMapSizeInv + base_uv.y;
	sum = sum + uw0 * vw0 * textureSampleCompareLevel(shadowMap, shadowMapSampler, vec2f(u0, v0), z);
	sum = sum + uw1 * vw0 * textureSampleCompareLevel(shadowMap, shadowMapSampler, vec2f(u1, v0), z);
	sum = sum + uw2 * vw0 * textureSampleCompareLevel(shadowMap, shadowMapSampler, vec2f(u2, v0), z);
	sum = sum + uw0 * vw1 * textureSampleCompareLevel(shadowMap, shadowMapSampler, vec2f(u0, v1), z);
	sum = sum + uw1 * vw1 * textureSampleCompareLevel(shadowMap, shadowMapSampler, vec2f(u1, v1), z);
	sum = sum + uw2 * vw1 * textureSampleCompareLevel(shadowMap, shadowMapSampler, vec2f(u2, v1), z);
	sum = sum + uw0 * vw2 * textureSampleCompareLevel(shadowMap, shadowMapSampler, vec2f(u0, v2), z);
	sum = sum + uw1 * vw2 * textureSampleCompareLevel(shadowMap, shadowMapSampler, vec2f(u1, v2), z);
	sum = sum + uw2 * vw2 * textureSampleCompareLevel(shadowMap, shadowMapSampler, vec2f(u2, v2), z);
	sum = sum * (1.0 / 144.0);
	sum = saturate(sum);
	return sum;
}
fn getShadowPCF5x5(shadowMap: texture_depth_2d, shadowMapSampler: sampler_comparison, shadowCoord: vec3f, shadowParams: vec4f) -> f32 {
	return _getShadowPCF5x5(shadowMap, shadowMapSampler, shadowCoord, shadowParams.xyz);
}
fn getShadowSpotPCF5x5(shadowMap: texture_depth_2d, shadowMapSampler: sampler_comparison, shadowCoord: vec3f, shadowParams: vec4f) -> f32 {
	return _getShadowPCF5x5(shadowMap, shadowMapSampler, shadowCoord, shadowParams.xyz);
}
`,sx=`
fn fractSinRand(uv: vec2f) -> f32 {
	let PI: f32 = 3.141592653589793;
	let a: f32 = 12.9898; let b: f32 = 78.233; let c: f32 = 43758.5453;
	let dt: f32 = dot(uv.xy, vec2f(a, b));
	let sn: f32 = dt % PI;
	return fract(sin(sn) * c);
}
struct VogelDiskData {
	invNumSamples: f32,
	initialAngle: f32,
	currentPointId: f32,
}
fn prepareDiskConstants(data: ptr<function, VogelDiskData>, sampleCount: i32, randomSeed: f32) {
	let pi2: f32 = 6.28318530718;
	data.invNumSamples = 1.0 / f32(sampleCount);
	data.initialAngle = randomSeed * pi2;
	data.currentPointId = 0.0;
}
fn generateDiskSample(data: ptr<function, VogelDiskData>) -> vec2f {
	let GOLDEN_ANGLE: f32 = 2.399963;
	let r: f32 = sqrt((data.currentPointId + 0.5) * data.invNumSamples);
	let theta: f32 = data.currentPointId * GOLDEN_ANGLE + data.initialAngle;
	let offset: vec2f = vec2f(cos(theta), sin(theta)) * pow(r, 1.33);
	data.currentPointId = data.currentPointId + 1.0;
	return offset;
}
fn PCSSFindBlocker(shadowMap: texture_2d<f32>, shadowMapSampler: sampler, avgBlockerDepth: ptr<function, f32>, numBlockers: ptr<function, i32>,
	shadowCoords: vec2f, z: f32, shadowBlockerSamples: i32, searchWidthUv: f32, randomSeed: f32) {
	var diskData: VogelDiskData;
	prepareDiskConstants(&diskData, shadowBlockerSamples, randomSeed);
	var blockerSum: f32 = 0.0;
	var numBlockers_local: i32 = 0;
	for( var i: i32 = 0; i < shadowBlockerSamples; i = i + 1 ) {
		let diskUV: vec2f = generateDiskSample(&diskData);
		let sampleUV: vec2f = shadowCoords + diskUV * searchWidthUv;
		let shadowMapDepth: f32 = textureSampleLevel(shadowMap, shadowMapSampler, sampleUV, 0.0).r;
		if ( shadowMapDepth < z ) {
			blockerSum = blockerSum + shadowMapDepth;
			numBlockers_local = numBlockers_local + 1;
		}
	}
	*avgBlockerDepth = blockerSum / f32(numBlockers_local);
	*numBlockers = numBlockers_local;
}
fn PCSSFilter(shadowMap: texture_2d<f32>, shadowMapSampler: sampler, uv: vec2f, receiverDepth: f32, shadowSamples: i32, filterRadius: f32, randomSeed: f32) -> f32 {
	var diskData: VogelDiskData;
	prepareDiskConstants(&diskData, shadowSamples, randomSeed);
	var sum: f32 = 0.0;
	for (var i: i32 = 0; i < shadowSamples; i = i + 1) {
		let offsetUV: vec2f = generateDiskSample(&diskData) * filterRadius;
		let depth: f32 = textureSampleLevel(shadowMap, shadowMapSampler, uv + offsetUV, 0.0).r;
		sum = sum + step(receiverDepth, depth);
	}
	return sum / f32(shadowSamples);
}
fn PCSSDirectional(shadowMap: texture_2d<f32>, shadowMapSampler: sampler, shadowCoords: vec3f, cameraParams: vec4f, softShadowParams: vec4f) -> f32 {
	let receiverDepth: f32 = shadowCoords.z;
	let receiverDepthClamped: f32 = min(receiverDepth, 0.9999);
	let randomSeed: f32 = fractSinRand(pcPosition.xy);
	let shadowSamples: i32 = i32(softShadowParams.x);
	let shadowBlockerSamples: i32 = i32(softShadowParams.y);
	let penumbraSize: f32 = softShadowParams.z;
	let penumbraFalloff: f32 = softShadowParams.w;
	let orthoRadius: f32 = cameraParams.x;
	let depthRange: f32 = cameraParams.y - cameraParams.z;
	let worldPerUv: f32 = 2.0 * orthoRadius;
	var filterRadius: f32;
	if (shadowBlockerSamples > 0) {
		let searchWidthUv: f32 = (penumbraSize * depthRange) / worldPerUv;
		var avgBlockerDepth: f32 = 0.0;
		var numBlockers: i32 = 0;
		PCSSFindBlocker(shadowMap, shadowMapSampler, &avgBlockerDepth, &numBlockers, shadowCoords.xy, receiverDepthClamped, shadowBlockerSamples, searchWidthUv, randomSeed);
		if (numBlockers < 1) {
			return 1.0;
		}
		let worldDist: f32 = max((receiverDepth - avgBlockerDepth) * depthRange, 0.0);
		let t: f32 = clamp(worldDist / depthRange, 0.0, 1.0);
		let shape: f32 = 1.0 - pow(1.0 - t, penumbraFalloff);
		let penumbraWorld: f32 = shape * penumbraSize * depthRange;
		filterRadius = penumbraWorld / worldPerUv;
	} else {
		filterRadius = penumbraSize / worldPerUv;
	}
	return PCSSFilter(shadowMap, shadowMapSampler, shadowCoords.xy, receiverDepthClamped, shadowSamples, filterRadius, randomSeed);
}
fn getShadowPCSS(shadowMap: texture_2d<f32>, shadowMapSampler: sampler, shadowCoord: vec3f, shadowParams: vec4f, cameraParams: vec4f, softShadowParams: vec4f, lightDir: vec3f) -> f32 {
	return PCSSDirectional(shadowMap, shadowMapSampler, shadowCoord, cameraParams, softShadowParams);
}
`,ax=`
attribute vertex_boneIndices: f32;
var texture_poseMap: texture_2d<uff>;
fn getBoneMatrix(indexFloat: f32) -> mat4x4f {
	let width = i32(textureDimensions(texture_poseMap).x);
	let index: i32 = i32(indexFloat + 0.5) * 3;
	let iy: i32 = index / width;
	let ix: i32 = index % width;
	let v1: vec4f = textureLoad(texture_poseMap, vec2i(ix + 0, iy), 0);
	let v2: vec4f = textureLoad(texture_poseMap, vec2i(ix + 1, iy), 0);
	let v3: vec4f = textureLoad(texture_poseMap, vec2i(ix + 2, iy), 0);
	return mat4x4f(
		v1.x, v2.x, v3.x, 0,
		v1.y, v2.y, v3.y, 0,
		v1.z, v2.z, v3.z, 0,
		v1.w, v2.w, v3.w, 1.0
	);
}
`,rx=`
attribute vertex_boneWeights: vec4f;
attribute vertex_boneIndices: vec4f;
var texture_poseMap: texture_2d<uff>;
struct BoneMatrix {
	v1: vec4f,
	v2: vec4f,
	v3: vec4f,
}
fn getBoneMatrix(width: i32, index: i32) -> BoneMatrix {
	let v = index / width;
	let u = index % width;
	var result: BoneMatrix;
	result.v1 = textureLoad(texture_poseMap, vec2i(u + 0, v), 0);
	result.v2 = textureLoad(texture_poseMap, vec2i(u + 1, v), 0);
	result.v3 = textureLoad(texture_poseMap, vec2i(u + 2, v), 0);
	return result;
}
fn getSkinMatrix(indicesFloat: vec4f, weights: vec4f) -> mat4x4f {
	let width = i32(textureDimensions(texture_poseMap).x);
	var indices = vec4i(indicesFloat + 0.5) * 3;
	let boneA = getBoneMatrix(width, indices.x);
	let boneB = getBoneMatrix(width, indices.y);
	let boneC = getBoneMatrix(width, indices.z);
	let boneD = getBoneMatrix(width, indices.w);
	let v1 = boneA.v1 * weights.x + boneB.v1 * weights.y + boneC.v1 * weights.z + boneD.v1 * weights.w;
	let v2 = boneA.v2 * weights.x + boneB.v2 * weights.y + boneC.v2 * weights.z + boneD.v2 * weights.w;
	let v3 = boneA.v3 * weights.x + boneB.v3 * weights.y + boneC.v3 * weights.z + boneD.v3 * weights.w;
	let one = dot(weights, vec4f(1.0, 1.0, 1.0, 1.0));
	return mat4x4f(
		v1.x, v2.x, v3.x, 0,
		v1.y, v2.y, v3.y, 0,
		v1.z, v2.z, v3.z, 0,
		v1.w, v2.w, v3.w, one
	);
}
`,nx=`
	#define LIT_SKYBOX_INTENSITY
	#include "envProcPS"
	#include "gammaPS"
	#include "tonemappingPS"
	#ifdef PREPASS_PASS
		varying vLinearDepth: f32;
		#include "floatAsUintPS"
	#endif
	varying vViewDir : vec3f;
	uniform skyboxHighlightMultiplier : f32;
	#if defined(SKY_FISHEYE) && !defined(SKYMESH)
		uniform fisheye_k : f32;
		uniform fisheye_invK : f32;
		uniform fisheye_projMat00 : f32;
		uniform fisheye_projMat11 : f32;
		uniform matrix_view : mat4x4f;
		uniform cubeMapRotationMatrix : mat3x3f;
		varying vClipXYW : vec3f;
	#endif
	#ifdef SKY_CUBEMAP
		var texture_cubeMap : texture_cube<f32>;
		var texture_cubeMap_sampler : sampler;
		#ifdef SKYMESH
			varying vWorldPos : vec3f;
			uniform cubeMapRotationMatrix : mat3x3f;
			uniform projectedSkydomeCenter : vec3f;
		#endif
	#else
		#include "sphericalPS"
		#include "envAtlasPS"
		var texture_envAtlas : texture_2d<f32>;
		var texture_envAtlas_sampler : sampler;
		uniform mipLevel : f32;
	#endif
	@fragment
	fn fragmentMain(input : FragmentInput) -> FragmentOutput {
		var output: FragmentOutput;
		#ifdef PREPASS_PASS
			output.color = float2vec4(vLinearDepth);
		#else
			var linear : vec3f;
			var dir : vec3f;
			#if defined(SKY_FISHEYE) && !defined(SKYMESH)
				let ndc : vec2f = input.vClipXYW.xy / input.vClipXYW.z;
				let px : f32 = ndc.x / uniform.fisheye_projMat00;
				let py : f32 = ndc.y / uniform.fisheye_projMat11;
				let r : f32 = sqrt(px * px + py * py);
				let theta : f32 = uniform.fisheye_k * atan(r * uniform.fisheye_invK);
				let sinT : f32 = sin(theta);
				let cosT : f32 = cos(theta);
				var camDir : vec3f;
				if (r > 1e-6) {
					camDir = vec3f(px / r * sinT, py / r * sinT, -cosT);
				} else {
					camDir = vec3f(0.0, 0.0, -1.0);
				}
				let viewMat3 : mat3x3f = mat3x3f(
					uniform.matrix_view[0].xyz,
					uniform.matrix_view[1].xyz,
					uniform.matrix_view[2].xyz
				);
				dir = transpose(viewMat3) * camDir;
				dir = dir * uniform.cubeMapRotationMatrix;
			#elif defined(SKY_CUBEMAP) && defined(SKYMESH)
				var envDir : vec3f = normalize(input.vWorldPos - uniform.projectedSkydomeCenter);
				dir = envDir * uniform.cubeMapRotationMatrix;
			#else
				dir = input.vViewDir;
			#endif
			#ifdef SKY_CUBEMAP
				dir.x *= -1.0;
				linear = {SKYBOX_DECODE_FNC}(textureSample(texture_cubeMap, texture_cubeMap_sampler, dir));
			#else
				dir *= vec3f(-1.0, 1.0, 1.0);
				let uv : vec2f = toSphericalUv(normalize(dir));
				linear = {SKYBOX_DECODE_FNC}(textureSample(texture_envAtlas, texture_envAtlas_sampler, mapRoughnessUv(uv, uniform.mipLevel)));
			#endif
			if (any(linear >= vec3f(64.0))) {
				linear *= uniform.skyboxHighlightMultiplier;
			}
			
			output.color = vec4f(gammaCorrectOutput(toneMap(processEnvironment(linear))), 1.0);
		#endif
		return output;
	}
`,ox=`
	attribute aPosition : vec4f;
	uniform matrix_view : mat4x4f;
	uniform matrix_projectionSkybox : mat4x4f;
	uniform cubeMapRotationMatrix : mat3x3f;
	varying vViewDir : vec3f;
	#ifdef SKY_FISHEYE
		varying vClipXYW : vec3f;
	#endif
	#ifdef PREPASS_PASS
		varying vLinearDepth: f32;
	#endif
	#ifdef SKYMESH
		uniform matrix_model : mat4x4f;
		varying vWorldPos : vec3f;
	#endif
	@vertex
	fn vertexMain(input : VertexInput) -> VertexOutput {
		var output : VertexOutput;
		var view : mat4x4f = uniform.matrix_view;
		#ifdef SKYMESH
			var worldPos : vec4f = uniform.matrix_model * input.aPosition;
			output.vWorldPos = worldPos.xyz;
			output.position = uniform.matrix_projectionSkybox * (view * worldPos);
			#ifdef PREPASS_PASS
				output.vLinearDepth = -(uniform.matrix_view * vec4f(worldPos.xyz, 1.0)).z;
			#endif
		#else
			view[3][0] = 0.0;
			view[3][1] = 0.0;
			view[3][2] = 0.0;
			output.vViewDir = input.aPosition.xyz * uniform.cubeMapRotationMatrix;
			#ifdef SKY_FISHEYE
				var viewPos : vec4f = view * input.aPosition;
				output.position = vec4f(viewPos.xy, 0.0, -viewPos.z);
				output.vClipXYW = vec3f(output.position.xy, output.position.w);
			#else
				output.position = uniform.matrix_projectionSkybox * (view * input.aPosition);
			#endif
			#ifdef PREPASS_PASS
				output.vLinearDepth = -pcPosition.w;
			#endif
		#endif
		output.position.z = output.position.w - 1.0e-7;
		return output;
	}
`,lx=`
fn writeSortIndirectArgs(
	baseSlot: u32,
	count: u32,
	slotInfo: vec4<u32>
) {
	let n = slotInfo.x;
	if (n >= 1u) {
		let g = slotInfo.y;
		let wc = (count + g - 1u) / g;
		let off = baseSlot * 3u;
		indirectDispatchArgs[off + 0u] = wc;
		indirectDispatchArgs[off + 1u] = 1u;
		indirectDispatchArgs[off + 2u] = 1u;
	}
	if (n >= 2u) {
		let g = slotInfo.z;
		let wc = (count + g - 1u) / g;
		let off = (baseSlot + 1u) * 3u;
		indirectDispatchArgs[off + 0u] = wc;
		indirectDispatchArgs[off + 1u] = 1u;
		indirectDispatchArgs[off + 2u] = 1u;
	}
	if (n >= 3u) {
		let g = slotInfo.w;
		let wc = (count + g - 1u) / g;
		let off = (baseSlot + 2u) * 3u;
		indirectDispatchArgs[off + 0u] = wc;
		indirectDispatchArgs[off + 1u] = 1u;
		indirectDispatchArgs[off + 2u] = 1u;
	}
}
`,cx=`
#ifdef STD_SPECULAR_CONSTANT
	uniform material_specular: vec3f;
#endif
fn getSpecularity() {
	var specularColor = vec3f(1.0, 1.0, 1.0);
	#ifdef STD_SPECULAR_CONSTANT
	specularColor = specularColor * uniform.material_specular;
	#endif
	#ifdef STD_SPECULAR_TEXTURE
	specularColor = specularColor * {STD_SPECULAR_TEXTURE_DECODE}(textureSampleBias({STD_SPECULAR_TEXTURE_NAME}, {STD_SPECULAR_TEXTURE_NAME}Sampler, {STD_SPECULAR_TEXTURE_UV}, uniform.textureBias)).{STD_SPECULAR_TEXTURE_CHANNEL};
	#endif
	#ifdef STD_SPECULAR_VERTEX
	specularColor = specularColor * saturate3(vVertexColor.{STD_SPECULAR_VERTEX_CHANNEL});
	#endif
	dSpecularity = specularColor;
}
`,dx=`
fn toSpherical(dir: vec3f) -> vec2f {
	let angle_xz = select(0.0, atan2(dir.x, dir.z), any(dir.xz != vec2f(0.0)));
	return vec2f(angle_xz, asin(dir.y));
}
fn toSphericalUv(dir : vec3f) -> vec2f {
	const PI : f32 = 3.141592653589793;
	let uv : vec2f = toSpherical(dir) / vec2f(PI * 2.0, PI) + vec2f(0.5, 0.5);
	return vec2f(uv.x, 1.0 - uv.y);
}
`,hx=`
#ifdef STD_SPECULARITYFACTOR_CONSTANT
	uniform material_specularityFactor: f32;
#endif
fn getSpecularityFactor() {
	var specularityFactor = 1.0;
	#ifdef STD_SPECULARITYFACTOR_CONSTANT
	specularityFactor = specularityFactor * uniform.material_specularityFactor;
	#endif
	#ifdef STD_SPECULARITYFACTOR_TEXTURE
	specularityFactor = specularityFactor * textureSampleBias({STD_SPECULARITYFACTOR_TEXTURE_NAME}, {STD_SPECULARITYFACTOR_TEXTURE_NAME}Sampler, {STD_SPECULARITYFACTOR_TEXTURE_UV}, uniform.textureBias).{STD_SPECULARITYFACTOR_TEXTURE_CHANNEL};
	#endif
	#ifdef STD_SPECULARITYFACTOR_VERTEX
	specularityFactor = specularityFactor * saturate(vVertexColor.{STD_SPECULARITYFACTOR_VERTEX_CHANNEL});
	#endif
	dSpecularityFactor = specularityFactor;
}
`,fx=`
fn getSpotEffect(lightSpotDir: vec3f, lightInnerConeAngle: f32, lightOuterConeAngle: f32, lightDirNorm: vec3f) -> f32 {
	let cosAngle: f32 = dot(lightDirNorm, lightSpotDir);
	return smoothstep(lightOuterConeAngle, lightInnerConeAngle, cosAngle);
}`,ux=`
	nineSlicedUv = vec2f(vUv0.x, 1.0 - vUv0.y);
`,px=`
	let tileMask: vec2f = step(vMask, vec2f(0.99999));
	let tileSize: vec2f = 0.5 * (uniform.innerOffset.xy + uniform.innerOffset.zw);
	let tileScale: vec2f = vec2f(1.0) / (vec2f(1.0) - tileSize);
	var clampedUv: vec2f = mix(uniform.innerOffset.xy * 0.5, vec2f(1.0) - uniform.innerOffset.zw * 0.5, fract((vTiledUv - tileSize) * tileScale));
	clampedUv = clampedUv * uniform.atlasRect.zw + uniform.atlasRect.xy;
	nineSlicedUv = vUv0 * tileMask + clampedUv * (vec2f(1.0) - tileMask);
	nineSlicedUv.y = 1.0 - nineSlicedUv.y;
`,mx=`
	var<private> dAlpha: f32 = 1.0;
	#if LIT_BLEND_TYPE != NONE || defined(LIT_ALPHA_TEST) || defined(LIT_ALPHA_TO_COVERAGE) || STD_OPACITY_DITHER != NONE
		#ifdef STD_OPACITY_TEXTURE_ALLOCATE
			var texture_opacityMap : texture_2d<f32>;
			var texture_opacityMapSampler : sampler;
		#endif
	#endif
	#ifdef FORWARD_PASS
		var<private> dAlbedo: vec3f;
		var<private> dNormalW: vec3f;
		var<private> dSpecularity: vec3f = vec3f(0.0, 0.0, 0.0);
		var<private> dGlossiness: f32 = 0.0;
		#ifdef LIT_REFRACTION
			var<private> dTransmission: f32;
			var<private> dThickness: f32;
		#endif
		#ifdef LIT_SCENE_COLOR
			var uSceneColorMap : texture_2d<f32>;
			var uSceneColorMapSampler : sampler;
		#endif
		#ifdef LIT_SCREEN_SIZE
			uniform uScreenSize: vec4f;
		#endif
		#ifdef LIT_TRANSFORMS
			var<private> matrix_viewProjection: mat4x4f;
			var<private> matrix_model: mat4x4f;
		#endif
		#ifdef STD_HEIGHT_MAP
			var<private> dUvOffset: vec2f;
			#ifdef STD_HEIGHT_TEXTURE_ALLOCATE
				var texture_heightMap : texture_2d<f32>;
				var texture_heightMapSampler : sampler;
			#endif
		#endif
		#ifdef STD_DIFFUSE_TEXTURE_ALLOCATE
			var texture_diffuseMap : texture_2d<f32>;
			var texture_diffuseMapSampler : sampler;
		#endif
		#ifdef STD_DIFFUSEDETAIL_TEXTURE_ALLOCATE
			var texture_diffuseDetailMap : texture_2d<f32>;
			var texture_diffuseDetailMapSampler : sampler;
		#endif
		#ifdef STD_NORMAL_TEXTURE_ALLOCATE
			var texture_normalMap : texture_2d<f32>;
			var texture_normalMapSampler : sampler;
		#endif
		#ifdef STD_NORMALDETAIL_TEXTURE_ALLOCATE
			var texture_normalDetailMap : texture_2d<f32>;
			var texture_normalDetailMapSampler : sampler;
		#endif
		#ifdef STD_THICKNESS_TEXTURE_ALLOCATE
			var texture_thicknessMap : texture_2d<f32>;
			var texture_thicknessMapSampler : sampler;
		#endif
		#ifdef STD_REFRACTION_TEXTURE_ALLOCATE
			var texture_refractionMap : texture_2d<f32>;
			var texture_refractionMapSampler : sampler;
		#endif
		#ifdef LIT_IRIDESCENCE
			var<private> dIridescence: f32;
			var<private> dIridescenceThickness: f32;
			#ifdef STD_IRIDESCENCE_THICKNESS_TEXTURE_ALLOCATE
				var texture_iridescenceThicknessMap : texture_2d<f32>;
				var texture_iridescenceThicknessMapSampler : sampler;
			#endif
			#ifdef STD_IRIDESCENCE_TEXTURE_ALLOCATE
				var texture_iridescenceMap : texture_2d<f32>;
				var texture_iridescenceMapSampler : sampler;
			#endif
		#endif
		#ifdef LIT_CLEARCOAT
			var<private> ccSpecularity: f32;
			var<private> ccGlossiness: f32;
			var<private> ccNormalW: vec3f;
		#endif
		#ifdef LIT_GGX_SPECULAR
			var<private> dAnisotropy: f32;
			var<private> dAnisotropyRotation: vec2f;
		#endif
		#ifdef LIT_SPECULAR_OR_REFLECTION
			#ifdef LIT_SHEEN
				var<private> sSpecularity: vec3f;
				var<private> sGlossiness: f32;
				#ifdef STD_SHEEN_TEXTURE_ALLOCATE
					var texture_sheenMap : texture_2d<f32>;
					var texture_sheenMapSampler : sampler;
				#endif
				#ifdef STD_SHEENGLOSS_TEXTURE_ALLOCATE
					var texture_sheenGlossMap : texture_2d<f32>;
					var texture_sheenGlossMapSampler : sampler;
				#endif
			#endif
			#ifdef LIT_METALNESS
				var<private> dMetalness: f32;
				var<private> dIor: f32;
				#ifdef STD_METALNESS_TEXTURE_ALLOCATE
					var texture_metalnessMap : texture_2d<f32>;
					var texture_metalnessMapSampler : sampler;
				#endif
			#endif
			#ifdef LIT_SPECULARITY_FACTOR
				var<private> dSpecularityFactor: f32;
				#ifdef STD_SPECULARITYFACTOR_TEXTURE_ALLOCATE
					var texture_specularityFactorMap : texture_2d<f32>;
					var texture_specularityFactorMapSampler : sampler;
				#endif
			#endif
			#ifdef STD_SPECULAR_COLOR
				#ifdef STD_SPECULAR_TEXTURE_ALLOCATE
					var texture_specularMap : texture_2d<f32>;
					var texture_specularMapSampler : sampler;
				#endif
			#endif
			#ifdef STD_GLOSS_TEXTURE_ALLOCATE
				var texture_glossMap : texture_2d<f32>;
				var texture_glossMapSampler : sampler;
			#endif
		#endif
		#ifdef STD_AO
			var <private> dAo: f32;
			#ifdef STD_AO_TEXTURE_ALLOCATE
				var texture_aoMap : texture_2d<f32>;
				var texture_aoMapSampler : sampler;
			#endif
			#ifdef STD_AODETAIL_TEXTURE_ALLOCATE
				var texture_aoDetailMap : texture_2d<f32>;
				var texture_aoDetailMapSampler : sampler;
			#endif
		#endif
		var <private> dEmission: vec3f;
		#ifdef STD_EMISSIVE_TEXTURE_ALLOCATE
			var texture_emissiveMap : texture_2d<f32>;
			var texture_emissiveMapSampler : sampler;
		#endif
		#ifdef LIT_CLEARCOAT
			#ifdef STD_CLEARCOAT_TEXTURE_ALLOCATE
				var texture_clearCoatMap : texture_2d<f32>;
				var texture_clearCoatMapSampler : sampler;
			#endif
			#ifdef STD_CLEARCOATGLOSS_TEXTURE_ALLOCATE
				var texture_clearCoatGlossMap : texture_2d<f32>;
				var texture_clearCoatGlossMapSampler : sampler;
			#endif
			#ifdef STD_CLEARCOATNORMAL_TEXTURE_ALLOCATE
				var texture_clearCoatNormalMap : texture_2d<f32>;
				var texture_clearCoatNormalMapSampler : sampler;
			#endif
		#endif
		#ifdef LIT_GGX_SPECULAR
			#ifdef STD_ANISOTROPY_TEXTURE_ALLOCATE
				var texture_anisotropyMap : texture_2d<f32>;
				var texture_anisotropyMapSampler : sampler;
			#endif
		#endif
		#if defined(STD_LIGHTMAP) || defined(STD_LIGHT_VERTEX_COLOR)
			var<private> dLightmap: vec3f;
			#ifdef STD_LIGHT_TEXTURE_ALLOCATE
				var texture_lightMap : texture_2d<f32>;
				var texture_lightMapSampler : sampler;
			#endif
		#endif
	#endif
	#include "litShaderCorePS"
`,_x=`
	#if LIT_BLEND_TYPE != NONE || defined(LIT_ALPHA_TEST) || defined(LIT_ALPHA_TO_COVERAGE) || STD_OPACITY_DITHER != NONE
		#include "opacityPS"
		#if defined(LIT_ALPHA_TEST)
			#include "alphaTestPS"
		#endif
		#if STD_OPACITY_DITHER != NONE
			#include "opacityDitherPS"
		#endif
	#endif
	#ifdef FORWARD_PASS
		#ifdef STD_HEIGHT_MAP
			#include "parallaxPS"
		#endif
		#include  "diffusePS"
		#ifdef LIT_NEEDS_NORMAL
			#include "normalMapPS"
		#endif
		#ifdef LIT_REFRACTION
			#include "transmissionPS"
			#include "thicknessPS"
		#endif
		#ifdef LIT_IRIDESCENCE
			#include "iridescencePS"
			#include "iridescenceThicknessPS"
		#endif
		#ifdef LIT_SPECULAR_OR_REFLECTION
			#ifdef LIT_SHEEN
				#include "sheenPS"
				#include "sheenGlossPS"
			#endif
			#ifdef LIT_METALNESS
				#include "metalnessPS"
				#include "iorPS"
			#endif
			#ifdef LIT_SPECULARITY_FACTOR
				#include "specularityFactorPS"
			#endif
			#ifdef STD_SPECULAR_COLOR
				#include "specularPS"
			#else
				fn getSpecularity() { 
					dSpecularity = vec3f(1.0, 1.0, 1.0);
				}
			#endif
			#include "glossPS"
		#endif
		#ifdef STD_AO
			#include "aoPS"
		#endif
		#include "emissivePS"
		#ifdef LIT_CLEARCOAT
			#include "clearCoatPS"
			#include "clearCoatGlossPS"
			#include "clearCoatNormalPS"
		#endif
		#if defined(LIT_SPECULAR) && defined(LIT_LIGHTING) && defined(LIT_GGX_SPECULAR)
			#include "anisotropyPS"
		#endif
		#if defined(STD_LIGHTMAP) || defined(STD_LIGHT_VERTEX_COLOR)
			#include "lightmapPS"
		#endif
	#endif
	fn evaluateFrontend() {
		#if LIT_BLEND_TYPE != NONE || defined(LIT_ALPHA_TEST) || defined(LIT_ALPHA_TO_COVERAGE) || STD_OPACITY_DITHER != NONE
			getOpacity();
			#if defined(LIT_ALPHA_TEST)
				alphaTest(dAlpha);
			#endif
			#if STD_OPACITY_DITHER != NONE
				opacityDither(dAlpha * uniform.material_alphaDitherScale, 0.0);
			#endif
			litArgs_opacity = dAlpha;
		#endif
		#ifdef FORWARD_PASS
			#ifdef STD_HEIGHT_MAP
				getParallax();
			#endif
			getAlbedo();
			litArgs_albedo = dAlbedo;
			#ifdef LIT_NEEDS_NORMAL
				getNormal();
				litArgs_worldNormal = dNormalW;
			#endif
			#ifdef LIT_REFRACTION
				getRefraction();
				litArgs_transmission = dTransmission;
				getThickness();
				litArgs_thickness = dThickness;
				#ifdef LIT_DISPERSION
					litArgs_dispersion = uniform.material_dispersion;
				#endif
			#endif
			#ifdef LIT_IRIDESCENCE
				getIridescence();
				getIridescenceThickness();
				litArgs_iridescence_intensity = dIridescence;
				litArgs_iridescence_thickness = dIridescenceThickness;
			#endif
			#ifdef LIT_SPECULAR_OR_REFLECTION
				#ifdef LIT_SHEEN
					getSheen();
					litArgs_sheen_specularity = sSpecularity;
					getSheenGlossiness();
					litArgs_sheen_gloss = sGlossiness;
				#endif
				#ifdef LIT_METALNESS
					getMetalness();
					litArgs_metalness = dMetalness;
					getIor();
					litArgs_ior = dIor;
				#endif
				#ifdef LIT_SPECULARITY_FACTOR
					getSpecularityFactor();
					litArgs_specularityFactor = dSpecularityFactor;
				#endif
				getGlossiness();
				getSpecularity();
				litArgs_specularity = dSpecularity;
				litArgs_gloss = dGlossiness;
			#endif
			#ifdef STD_AO
				getAO();
				litArgs_ao = dAo;
			#endif
			getEmission();
			litArgs_emission = dEmission;
			#ifdef LIT_CLEARCOAT
				getClearCoat();
				getClearCoatGlossiness();
				getClearCoatNormal();
				litArgs_clearcoat_specularity = ccSpecularity;
				litArgs_clearcoat_gloss = ccGlossiness;
				litArgs_clearcoat_worldNormal = ccNormalW;
			#endif
			#if defined(LIT_SPECULAR) && defined(LIT_LIGHTING) && defined(LIT_GGX_SPECULAR)
				getAnisotropy();
			#endif
			#if defined(STD_LIGHTMAP) || defined(STD_LIGHT_VERTEX_COLOR)
				getLightMap();
				litArgs_lightmap = dLightmap;
				#ifdef STD_LIGHTMAP_DIR
					litArgs_lightmapDir = dLightmapDir;
				#endif
			#endif
		#endif
	}
`,gx=`
#ifdef LIT_TANGENTS
	#define TBN_TANGENTS
#else
	#if defined(LIT_USE_NORMALS) || defined(LIT_USE_CLEARCOAT_NORMALS)
		#define TBN_DERIVATIVES
	#endif
#endif
#if defined(TBN_DERIVATIVES)
	uniform tbnBasis: f32;
#endif
fn getTBN(tangent: vec3f, binormal: vec3f, normal: vec3f) {
	#ifdef TBN_TANGENTS
		dTBN = mat3x3f(normalize(tangent), normalize(binormal), normalize(normal));
	#elif defined(TBN_DERIVATIVES)
		let uv: vec2f = {lightingUv};
		let dp1: vec3f = dpdx( vPositionW );
		let dp2: vec3f = dpdy( vPositionW );
		let duv1: vec2f = dpdx( uv );
		let duv2: vec2f = dpdy( uv );
		let dp2perp: vec3f = cross( dp2, normal );
		let dp1perp: vec3f = cross( normal, dp1 );
		let T: vec3f = dp2perp * duv1.x + dp1perp * duv2.x;
		let B: vec3f = dp2perp * duv1.y + dp1perp * duv2.y;
		let denom: f32 = max( dot(T, T), dot(B, B) );
		let invmax: f32 = select(uniform.tbnBasis / sqrt( denom ), 0.0, denom == 0.0);
		dTBN = mat3x3f(T * invmax, -B * invmax, normal );
	#else
		var B: vec3f = cross(normal, vObjectSpaceUpW);
		var T: vec3f = cross(normal, B);
		if (dot(B,B) == 0.0)
		{
			let major: f32 = max(max(normal.x, normal.y), normal.z);
			if (normal.x == major)
			{
				B = cross(normal, vec3f(0.0, 1.0, 0.0));
				T = cross(normal, B);
			}
			else if (normal.y == major)
			{
				B = cross(normal, vec3f(0.0, 0.0, 1.0));
				T = cross(normal, B);
			}
			else
			{
				B = cross(normal, vec3f(1.0, 0.0, 0.0));
				T = cross(normal, B);
			}
		}
		dTBN = mat3x3f(normalize(T), normalize(B), normalize(normal));
	#endif
}`,vx=`
#ifdef STD_THICKNESS_CONSTANT
uniform material_thickness: f32;
#endif
fn getThickness() {
	dThickness = 1.0;
	#ifdef STD_THICKNESS_CONSTANT
	dThickness = dThickness * uniform.material_thickness;
	#endif
	#ifdef STD_THICKNESS_TEXTURE
	dThickness = dThickness * textureSampleBias({STD_THICKNESS_TEXTURE_NAME}, {STD_THICKNESS_TEXTURE_NAME}Sampler, {STD_THICKNESS_TEXTURE_UV}, uniform.textureBias).{STD_THICKNESS_TEXTURE_CHANNEL};
	#endif
	#ifdef STD_THICKNESS_VERTEX
	dThickness = dThickness * saturate(vVertexColor.{STD_THICKNESS_VERTEX_CHANNEL});
	#endif
}
`,Sx=`
#ifndef TONEMAP_NO_EXPOSURE_UNIFORM
	#if TONEMAP != NONE
		uniform exposure: f32;
		fn getExposure() -> f32 { return uniform.exposure; }
	#else
		fn getExposure() -> f32 { return 1.0; }
	#endif
#else
	#if TONEMAP != NONE
		fn getExposure() -> f32 { return uniforms.exposure; }
	#else
		fn getExposure() -> f32 { return 1.0; }
	#endif
#endif
#if (TONEMAP == NONE)
	#include "tonemappingNonePS"
#elif TONEMAP == FILMIC
	#include "tonemappingFilmicPS"
#elif TONEMAP == LINEAR
	#include "tonemappingLinearPS"
#elif TONEMAP == HEJL
	#include "tonemappingHejlPS"
#elif TONEMAP == ACES
	#include "tonemappingAcesPS"
#elif TONEMAP == ACES2
	#include "tonemappingAces2PS"
#elif TONEMAP == NEUTRAL
	#include "tonemappingNeutralPS"
#endif
`,Tx=`
fn toneMap(color: vec3f) -> vec3f {
	let tA: f32 = 2.51;
	let tB: f32 = 0.03;
	let tC: f32 = 2.43;
	let tD: f32 = 0.59;
	let tE: f32 = 0.14;
	let x: vec3f = color * getExposure();
	return (x * (tA * x + tB)) / (x * (tC * x + tD) + tE);
}
`,Ex=`
const ACESInputMat: mat3x3f = mat3x3f(
	vec3f(0.59719, 0.35458, 0.04823),
	vec3f(0.07600, 0.90834, 0.01566),
	vec3f(0.02840, 0.13383, 0.83777)
);
const ACESOutputMat: mat3x3f = mat3x3f(
	vec3f( 1.60475, -0.53108, -0.07367),
	vec3f(-0.10208,  1.10813, -0.00605),
	vec3f(-0.00327, -0.07276,  1.07602)
);
fn RRTAndODTFit(v: vec3f) -> vec3f {
	let a: vec3f = v * (v + vec3f(0.0245786)) - vec3f(0.000090537);
	let b: vec3f = v * (vec3f(0.983729) * v + vec3f(0.4329510)) + vec3f(0.238081);
	return a / b;
}
fn toneMap(color: vec3f) -> vec3f {
	var c: vec3f = color * (getExposure() / 0.6);
	c = c * ACESInputMat;
	c = RRTAndODTFit(c);
	c = c * ACESOutputMat;
	return clamp(c, vec3f(0.0), vec3f(1.0));
}
`,yx=`
const A: f32 = 0.15;
const B: f32 = 0.50;
const C: f32 = 0.10;
const D: f32 = 0.20;
const E: f32 = 0.02;
const F: f32 = 0.30;
const W: f32 = 11.2;
fn uncharted2Tonemap(x: vec3f) -> vec3f {
	return ((x * (A * x + C * B) + D * E) / (x * (A * x + B) + D * F)) - vec3f(E / F);
}
fn toneMap(color: vec3f) -> vec3f {
	var c: vec3f = uncharted2Tonemap(color * getExposure());
	let whiteScale: vec3f = vec3f(1.0) / uncharted2Tonemap(vec3f(W, W, W));
	c *= whiteScale;
	return c;
}
`,xx=`
fn toneMap(color: vec3f) -> vec3f {
	let A: f32 = 0.22;
	let B: f32 = 0.3;
	let C: f32 = 0.1;
	let D: f32 = 0.2;
	let E: f32 = 0.01;
	let F: f32 = 0.3;
	let Scl: f32 = 1.25;
	let adjusted_color = color * getExposure();
	let h = max(vec3f(0.0), adjusted_color - vec3f(0.004));
	return (h * ((Scl * A) * h + Scl * vec3f(C * B)) + Scl * vec3f(D * E)) /
		   (h * (A * h + vec3f(B)) + vec3f(D * F)) -
		   Scl * vec3f(E / F);
}
`,Cx=`
fn toneMap(color: vec3f) -> vec3f {
	return color * getExposure();
}
`,Ax=`
fn toneMap(col: vec3f) -> vec3f {
	var color = col * getExposure();
	let startCompression = 0.8 - 0.04;
	let desaturation = 0.15;
	let x = min(color.r, min(color.g, color.b));
	let offset = select(0.04, x - 6.25 * x * x, x < 0.08);
	color -= vec3f(offset);
	let peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) {
		return color;
	}
	let d = 1.0 - startCompression;
	let newPeak = 1.0 - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	let g = 1.0 - 1.0 / (desaturation * (peak - newPeak) + 1.0);
	return mix(color, vec3f(newPeak), vec3f(g));
}
`,wx=`
fn toneMap(color: vec3f) -> vec3f {
	return color;
}
`,Lx=`
#ifdef PIXELSNAP
	uniform uScreenSize: vec4f;
#endif
#ifdef SCREENSPACE
	uniform projectionFlipY: f32;
#endif
fn evalWorldPosition(vertexPosition: vec3f, modelMatrix: mat4x4f) -> vec4f {
	var localPos: vec3f = getLocalPosition(vertexPosition);
	#ifdef NINESLICED
		var localPosXZ: vec2f = localPos.xz;
		localPosXZ = localPosXZ * uniform.outerScale;
		let positiveUnitOffset: vec2f = clamp(vertexPosition.xz, vec2f(0.0), vec2f(1.0));
		let negativeUnitOffset: vec2f = clamp(-vertexPosition.xz, vec2f(0.0), vec2f(1.0));
		localPosXZ = localPosXZ + (-positiveUnitOffset * uniform.innerOffset.xy + negativeUnitOffset * uniform.innerOffset.zw) * vertex_texCoord0.xy;
		dTiledUvGlobal = (localPosXZ - uniform.outerScale + uniform.innerOffset.xy) * -0.5 + 1.0;
		localPosXZ = localPosXZ * -0.5;
		localPos = vec3f(localPosXZ.x, localPosXZ.y, localPos.y);
	#endif
	var posW: vec4f = modelMatrix * vec4f(localPos, 1.0);
	#ifdef SCREENSPACE
		posW = vec4f(posW.xy, 0.0, 1.0);
	#endif
	return posW;
}
fn getPosition() -> vec4f {
	dModelMatrix = getModelMatrix();
	let posW: vec4f = evalWorldPosition(vertex_position.xyz, dModelMatrix);
	dPositionW = posW.xyz;
	var screenPos: vec4f;
	#ifdef UV1LAYOUT
		screenPos = vec4f(vertex_texCoord1.xy * 2.0 - 1.0, 0.5, 1.0);
		screenPos.y *= -1.0;
	#else
		#ifdef SCREENSPACE
			screenPos = posW;
			screenPos.y *= uniform.projectionFlipY;
		#else
			screenPos = uniform.matrix_viewProjection * posW;
		#endif
		#ifdef PIXELSNAP
			screenPos.xy = (screenPos.xy * 0.5) + 0.5;
			screenPos.xy *= uniforms.uScreenSize.xy;
			screenPos.xy = floor(screenPos.xy);
			screenPos.xy *= uniforms.uScreenSize.zw;
			screenPos.xy = (screenPos.xy * 2.0) - 1.0;
		#endif
	#endif
	return screenPos;
}
fn getWorldPosition() -> vec3f {
	return dPositionW;
}
`,Dx=`
	attribute vertex_position: vec4f;
	uniform matrix_viewProjection: mat4x4f;
	uniform matrix_model: mat4x4f;
	
	#ifdef MORPHING
		uniform morph_tex_params: vec2f;
		attribute morph_vertex_id: u32;
		fn getTextureMorphCoords() -> vec2i {
			var textureSize: vec2i = vec2i(uniform.morph_tex_params);
			var morphGridV: i32 = i32(morph_vertex_id) / textureSize.x;
			var morphGridU: i32 = i32(morph_vertex_id) - (morphGridV * textureSize.x);
			morphGridV = textureSize.y - morphGridV - 1;
			return vec2i(morphGridU, morphGridV);
		}
		#ifdef MORPHING_POSITION
			#ifdef MORPHING_INT
				uniform aabbSize: vec3f;
				uniform aabbMin: vec3f;
				var morphPositionTex: texture_2d<u32>;
			#else
				var morphPositionTex: texture_2d<f32>;
			#endif
		#endif
	#endif
	#ifdef defined(BATCH)
		#include "skinBatchVS"
		fn getModelMatrix() -> mat4x4f {
			return getBoneMatrix(vertex_boneIndices);
		}
	#elif defined(SKIN)
		#include "skinVS"
		fn getModelMatrix() -> mat4x4f {
			return uniform.matrix_model * getSkinMatrix(vertex_boneIndices, vertex_boneWeights);
		}
	#elif defined(INSTANCING)
		#include "transformInstancingVS"
	#else
		fn getModelMatrix() -> mat4x4f {
			return uniform.matrix_model;
		}
	#endif
	fn getLocalPosition(vertexPosition: vec3f) -> vec3f {
		var localPos: vec3f = vertexPosition;
		#ifdef MORPHING_POSITION
			var morphUV: vec2i = getTextureMorphCoords();
			#ifdef MORPHING_INT
				var morphPos: vec3f = vec3f(textureLoad(morphPositionTex, morphUV, 0).xyz) / 65535.0 * uniform.aabbSize + uniform.aabbMin;
			#else
				var morphPos: vec3f = textureLoad(morphPositionTex, morphUV, 0).xyz;
			#endif
			localPos += morphPos;
		#endif
		return localPos;
	}
`,Px=`
attribute instance_line1: vec4f;
attribute instance_line2: vec4f;
attribute instance_line3: vec4f;
attribute instance_line4: vec4f;
fn getModelMatrix() -> mat4x4f {
	return uniform.matrix_model * mat4x4f(instance_line1, instance_line2, instance_line3, instance_line4);
}
`,Ix=`
#ifdef STD_REFRACTION_CONSTANT
	uniform material_refraction: f32;
#endif
fn getRefraction() {
	var refraction: f32 = 1.0;
	#ifdef STD_REFRACTION_CONSTANT
	refraction = uniform.material_refraction;
	#endif
	#ifdef STD_REFRACTION_TEXTURE
	refraction = refraction * textureSampleBias({STD_REFRACTION_TEXTURE_NAME}, {STD_REFRACTION_TEXTURE_NAME}Sampler, {STD_REFRACTION_TEXTURE_UV}, uniform.textureBias).{STD_REFRACTION_TEXTURE_CHANNEL};
	#endif
	#ifdef STD_REFRACTION_VERTEX
	refraction = refraction * saturate(vVertexColor.{STD_REFRACTION_VERTEX_CHANNEL});
	#endif
	dTransmission = refraction;
}
`,bx=`
fn handleTwoSidedLighting() {
	if (!pcFrontFacing) { dTBN[2] = -dTBN[2]; }
}
`,Rx=`
#ifdef NINESLICED
	fn getUv0() -> vec2f {
		var uv = vertex_position.xz;
		let positiveUnitOffset = clamp(vertex_position.xz, vec2f(0.0, 0.0), vec2f(1.0, 1.0));
		let negativeUnitOffset = clamp(-vertex_position.xz, vec2f(0.0, 0.0), vec2f(1.0, 1.0));
		uv = uv + ((-positiveUnitOffset * uniform.innerOffset.xy) + (negativeUnitOffset * uniform.innerOffset.zw)) * vertex_texCoord0.xy;
		uv = uv * -0.5 + vec2f(0.5, 0.5);
		uv = uv * uniform.atlasRect.zw + uniform.atlasRect.xy;
		dMaskGlobal = vertex_texCoord0.xy;
		return uv;
	}
#else
	fn getUv0() -> vec2f {
		return vertex_texCoord0;
	}
#endif
`,Mx=`
fn getUv1() -> vec2f {
	return vertex_texCoord1;
}
`,Nx=`
output.vUV{TRANSFORM_UV_{i}}_{TRANSFORM_ID_{i}} = vec2f(
	dot(vec3f(uv{TRANSFORM_UV_{i}}, 1), uniform.{TRANSFORM_NAME_{i}}0),
	dot(vec3f(uv{TRANSFORM_UV_{i}}, 1), uniform.{TRANSFORM_NAME_{i}}1)
);
`,Ox=`
	uniform {TRANSFORM_NAME_{i}}0: vec3f;
	uniform {TRANSFORM_NAME_{i}}1: vec3f;
`,Fx=`
fn getViewDir() {
	dViewDirW = normalize(uniform.view_position - vPositionW);
}
`;const Ux={alphaTestPS:qT,ambientPS:jT,anisotropyPS:KT,aoPS:ZT,aoDiffuseOccPS:JT,aoSpecOccPS:QT,bakeDirLmEndPS:eE,bakeLmEndPS:tE,basePS:iE,baseNineSlicedPS:sE,baseNineSlicedTiledPS:aE,bayerPS:rE,blurVSMPS:nE,clearCoatPS:oE,clearCoatGlossPS:lE,clearCoatNormalPS:cE,clusteredLightCookiesPS:hE,clusteredLightShadowsPS:fE,clusteredLightUtilsPS:dE,clusteredLightPS:uE,combinePS:pE,cookieBlit2DPS:mE,cookieBlitCubePS:_E,cookieBlitVS:gE,cubeMapProjectPS:vE,cubeMapRotatePS:SE,debugOutputPS:TE,debugProcessFrontendPS:EE,detailModesPS:xE,diffusePS:CE,decodePS:yE,emissivePS:AE,encodePS:wE,endPS:LE,envAtlasPS:DE,envProcPS:PE,falloffInvSquaredPS:IE,falloffLinearPS:bE,floatAsUintPS:RE,fogPS:ME,fogMathPS:NE,fresnelSchlickPS:OE,frontendCodePS:"",frontendDeclPS:"",fullscreenQuadVS:FE,gammaPS:UE,glossPS:BE,quadVS:kE,indirectCoreCS:zE,immediateLinePS:VE,immediateLineVS:GE,iridescenceDiffractionPS:HE,iridescencePS:WE,iridescenceThicknessPS:XE,iorPS:YE,lightDeclarationPS:$E,lightDiffuseLambertPS:qE,lightDirPointPS:jE,lightEvaluationPS:KE,lightFunctionLightPS:ZE,lightFunctionShadowPS:JE,lightingPS:QE,lightmapAddPS:ey,lightmapPS:ty,lightSpecularAnisoGGXPS:iy,lightSpecularGGXPS:sy,lightSpecularBlinnPS:ay,lightSheenPS:ry,linearizeDepthPS:ny,litForwardBackendPS:oy,litForwardDeclarationPS:ly,litForwardMainPS:cy,litForwardPostCodePS:dy,litForwardPreCodePS:hy,litMainPS:fy,litMainVS:uy,litOtherMainPS:py,litShaderArgsPS:my,litShaderCorePS:_y,litShadowMainPS:gy,litUserDeclarationPS:"",litUserDeclarationVS:"",litUserCodePS:"",litUserCodeVS:"",litUserMainStartPS:"",litUserMainStartVS:"",litUserMainEndPS:"",litUserMainEndVS:"",ltcPS:vy,metalnessPS:Sy,metalnessModulatePS:Ey,morphPS:yy,morphVS:xy,msdfPS:Ty,msdfVS:Cy,normalVS:Ay,normalCoreVS:wy,normalMapPS:Ly,opacityPS:Dy,opacityDitherPS:Py,outlineDeclarationPS:Iy,outlineOutputPS:by,outputPS:Ry,outputAlphaPS:My,outputTex2DPS:Ny,sheenPS:Oy,sheenGlossPS:Fy,parallaxPS:Uy,pickPS:By,reflDirPS:ky,reflDirAnisoPS:zy,reflectionCCPS:Vy,reflectionCubePS:Gy,reflectionEnvHQPS:Hy,reflectionEnvPS:Wy,reflectionSpherePS:Xy,reflectionSheenPS:Yy,refractionCubePS:$y,refractionDynamicPS:qy,reprojectPS:jy,reprojectVS:Ky,screenDepthPS:Zy,shadowCascadesPS:Jy,shadowEVSMPS:Qy,shadowPCF1PS:ex,shadowPCF3PS:tx,shadowPCF5PS:ix,shadowSoftPS:sx,skinBatchVS:ax,skinVS:rx,skyboxPS:nx,skyboxVS:ox,sortIndirectArgsCS:lx,specularPS:cx,sphericalPS:dx,specularityFactorPS:hx,spotPS:fx,startNineSlicedPS:ux,startNineSlicedTiledPS:px,stdDeclarationPS:mx,stdFrontEndPS:_x,TBNPS:gx,thicknessPS:vx,tonemappingPS:Sx,tonemappingAcesPS:Tx,tonemappingAces2PS:Ex,tonemappingFilmicPS:yx,tonemappingHejlPS:xx,tonemappingLinearPS:Cx,tonemappingNeutralPS:Ax,tonemappingNonePS:wx,transformVS:Lx,transformCoreVS:Dx,transformInstancingVS:Px,transmissionPS:Ix,twoSidedLightingPS:bx,uv0VS:Rx,uv1VS:Mx,uvTransformVS:Nx,uvTransformUniformsPS:Ox,viewDirPS:Fx,webgpuPS:Xd,webgpuVS:Yd},Jt=class Jt extends pe{constructor(e){super();o(this,"_batcher",null);o(this,"_destroyRequested",!1);o(this,"_inFrameUpdate",!1);o(this,"_librariesLoaded",!1);o(this,"_fillMode",lc);o(this,"_resolutionMode",Rv);o(this,"_allowResize",!0);o(this,"_skyboxAsset",null);o(this,"_soundManager");o(this,"_visibilityChangeHandler");o(this,"_entityIndex",{});o(this,"_inTools",!1);o(this,"_scriptPrefix","");o(this,"_time",0);o(this,"enableBundles",typeof TextDecoder<"u");o(this,"frameRequestId");o(this,"tick",(e,i)=>{var l,d,f;if(!this.graphicsDevice)return;this.frameRequestId&&((d=(l=this.xr)==null?void 0:l.session)==null||d.cancelAnimationFrame(this.frameRequestId),cancelAnimationFrame(this.frameRequestId),this.frameRequestId=null),this._inFrameUpdate=!0,Yr(this);const s=this._processTimestamp(e)||Ee(),a=s-(this._time||s);let r=a/1e3;if(r=I.clamp(r,0,this.maxDeltaTime),r*=this.timeScale,this._time=s,this.requestAnimationFrame(),this.graphicsDevice.contextLost)return;this.stats.updateBasic(s,r,a,this.renderer,this.graphicsDevice),this.fire("frameupdate",a);let n=!1;i&&(n=!((f=this.xr)!=null&&f.update(i))),n||(this.update(r),this.fire("framerender"),(this.autoRender||this.renderNextFrame)&&(this.render(),this.renderNextFrame=!1),this.fire("frameend"),this.stats.frameEnd()),this._inFrameUpdate=!1,this._destroyRequested&&this.destroy()});o(this,"timeScale",1);o(this,"maxDeltaTime",.1);o(this,"frame",0);o(this,"frameGraph",new Mv);o(this,"renderer");o(this,"scriptsOrder",[]);o(this,"stats");o(this,"autoRender",!0);o(this,"renderNextFrame",!1);o(this,"graphicsDevice");o(this,"root");o(this,"scene");o(this,"lightmapper",null);o(this,"loader",new ms(this));o(this,"assets",new xi(this.loader));o(this,"bundles");o(this,"scenes",new sS(this));o(this,"scripts",new Qv(this));o(this,"systems",new Gv);o(this,"i18n",new Cn(this));o(this,"keyboard",null);o(this,"mouse",null);o(this,"touch",null);o(this,"gamepads",null);o(this,"elementInput",null);o(this,"xr",null);Jt._applications[e.id]=this,Yr(this),this.root=new Q,this.root._enabledInHierarchy=!0}init(e){const{assetPrefix:i,batchManager:s,componentSystems:a,elementInput:r,gamepads:n,graphicsDevice:l,keyboard:d,lightmapper:f,mouse:h,resourceHandlers:u,scriptsOrder:p,scriptPrefix:m,soundManager:g,touch:v,xr:E}=e;this.graphicsDevice=l,ne.get(l,ae).add($T),ne.get(l,ue).add(Ux),this._initDefaultMaterial(),this._initProgramLibrary(),this.stats=new aS(l),this._soundManager=g,this.scene=new ft(l),this._registerSceneImmediate(this.scene),i&&(this.assets.prefix=i),this.bundles=new Vv(this.assets),this.scriptsOrder=p||[],this.defaultLayerWorld=new vi({name:"World",id:Xa}),this.defaultLayerDepth=new vi({name:"Depth",id:Ft,enabled:!1,opaqueSortMode:ha}),this.defaultLayerSkybox=new vi({name:"Skybox",id:eo,opaqueSortMode:ha}),this.defaultLayerUi=new vi({name:"UI",id:ih,transparentSortMode:mm}),this.defaultLayerImmediate=new vi({name:"Immediate",id:to,opaqueSortMode:ha});const S=new ql("default");S.pushOpaque(this.defaultLayerWorld),S.pushOpaque(this.defaultLayerDepth),S.pushOpaque(this.defaultLayerSkybox),S.pushTransparent(this.defaultLayerWorld),S.pushOpaque(this.defaultLayerImmediate),S.pushTransparent(this.defaultLayerImmediate),S.pushTransparent(this.defaultLayerUi),this.scene.layers=S,ti.createPlaceholder(l),this.renderer=new Lh(l,this.scene),f&&(this.lightmapper=new f(l,this.root,this.scene,this.renderer,this.assets),this.once("prerender",this._firstBake,this)),s&&(this._batcher=new s(l,this.root,this.scene),this.once("prerender",this._firstBatch,this)),this.keyboard=d||null,this.mouse=h||null,this.touch=v||null,this.gamepads=n||null,r&&(this.elementInput=r,this.elementInput.app=this),this.xr=E?new E(this):null,this.elementInput&&this.elementInput.attachSelectEvents(),this._scriptPrefix=m||"",this.enableBundles&&this.loader.addHandler("bundle",new Xv(this)),u.forEach(T=>{const y=new T(this);this.loader.addHandler(y.handlerType,y)}),this.loader.enableRetry(),a.forEach(T=>{this.systems.add(new T(this))}),this._visibilityChangeHandler=this.onVisibilityChange.bind(this),typeof document<"u"&&document.addEventListener("visibilitychange",this._visibilityChangeHandler,!1)}static getApplication(e){return e?Jt._applications[e]:rt()}_initDefaultMaterial(){const e=new Le;e.name="Default Material",Ym(this.graphicsDevice,e)}_initProgramLibrary(){const e=new Iv(this.graphicsDevice,new Le);Mm(this.graphicsDevice,e)}get soundManager(){return this._soundManager}get batcher(){return this._batcher}get fillMode(){return this._fillMode}get resolutionMode(){return this._resolutionMode}configure(e,i){ei.get(e,(s,a)=>{if(s){i(s);return}const r=a.application_properties,n=a.scenes,l=a.assets;this._parseApplicationProperties(r,d=>{this._parseScenes(n),this._parseAssets(l),i(d||null)})})}preload(e){this.fire("preload:start");const i=this.assets.list({preload:!0});if(i.length===0){this.fire("preload:end"),e();return}let s=0;const a=()=>{s++,this.fire("preload:progress",s/i.length),s===i.length&&(this.fire("preload:end"),e())};i.forEach(r=>{r.loaded?a():(r.once("load",a),r.once("error",a),this.assets.load(r))})}_preloadScripts(e,i){i()}_parseApplicationProperties(e,i){if(typeof e.maxAssetRetries=="number"&&e.maxAssetRetries>0&&this.loader.enableRetry(e.maxAssetRetries),typeof e.maxConcurrentRequests=="number"&&e.maxConcurrentRequests>=0&&(this.loader.maxConcurrentRequests=e.maxConcurrentRequests),typeof e.withCredentials=="boolean"&&(this.loader.withCredentials=e.withCredentials),e.useDevicePixelRatio||(e.useDevicePixelRatio=e.use_device_pixel_ratio),e.resolutionMode||(e.resolutionMode=e.resolution_mode),e.fillMode||(e.fillMode=e.fill_mode),this._width=e.width,this._height=e.height,e.useDevicePixelRatio&&(this.graphicsDevice.maxPixelRatio=window.devicePixelRatio),this.setCanvasResolution(e.resolutionMode,this._width,this._height),this.setCanvasFillMode(e.fillMode,this._width,this._height),e.layers&&e.layerOrder){const s=new ql("application"),a={};for(const r in e.layers){const n=e.layers[r];n.id=parseInt(r,10),n.enabled=n.id!==Ft,a[r]=new vi(n)}for(let r=0,n=e.layerOrder.length;r<n;r++){const l=e.layerOrder[r],d=a[l.layer];d&&(l.transparent?s.pushTransparent(d):s.pushOpaque(d),s.subLayerEnabled[r]=l.enabled)}this.scene.layers=s}if(e.batchGroups){const s=this.batcher;if(s)for(let a=0,r=e.batchGroups.length;a<r;a++){const n=e.batchGroups[a];s.addGroup(n.name,n.dynamic,n.maxAabbSize,n.id,n.layers)}}e.i18nAssets&&(this.i18n.assets=e.i18nAssets),this._loadLibraries(e.libraries,i)}_loadLibraries(e,i){const s=e.length;let a=s;const r=/^https?:\/\//;if(s){const n=(l,d)=>{a--,l?i(l):a===0&&(this.onLibrariesLoaded(),i(null))};for(let l=0;l<s;++l){let d=e[l];!r.test(d.toLowerCase())&&this._scriptPrefix&&(d=J.join(this._scriptPrefix,d)),this.loader.load(d,"script",n)}}else this.onLibrariesLoaded(),i(null)}_parseScenes(e){if(e)for(let i=0;i<e.length;i++)this.scenes.add(e[i].name,e[i].url)}_parseAssets(e){const i=[],s={},a={};for(let r=0;r<this.scriptsOrder.length;r++){const n=this.scriptsOrder[r];e[n]&&(s[n]=!0,i.push(e[n]))}if(this.enableBundles)for(const r in e)e[r].type==="bundle"&&(a[r]=!0,i.push(e[r]));for(const r in e)s[r]||a[r]||i.push(e[r]);for(let r=0;r<i.length;r++){const n=i[r],l=new ye(n.name,n.type,n.file,n.data);if(l.id=parseInt(n.id,10),l.preload=n.preload?n.preload:!1,l.loaded=n.type==="script"&&n.data&&n.data.loadingType>0,l.tags.add(n.tags),n.i18n)for(const d in n.i18n)l.addLocalizedAssetId(d,n.i18n[d]);this.assets.add(l)}}start(){this.frame=0,this.fire("start",{timestamp:Ee(),target:this}),this._librariesLoaded||this.onLibrariesLoaded(),this.systems.fire("initialize",this.root),this.fire("initialize"),this.systems.fire("postInitialize",this.root),this.systems.fire("postPostInitialize",this.root),this.fire("postinitialize"),this.requestAnimationFrame()}requestAnimationFrame(){var e;(e=this.xr)!=null&&e.session?this.frameRequestId=this.xr.session.requestAnimationFrame(this.tick):this.frameRequestId=bi.browser||bi.worker?requestAnimationFrame(this.tick):null}inputUpdate(e){this.mouse&&this.mouse.update(),this.keyboard&&this.keyboard.update(),this.gamepads&&this.gamepads.update()}update(e){this.frame++,this.graphicsDevice.update(),this.stats.frame.scriptUpdateStart=Ee(),this.systems.fire(this._inTools?"toolsUpdate":"update",e),this.stats.frame.scriptUpdate=Ee()-this.stats.frame.scriptUpdateStart,this.stats.frame.animUpdateStart=Ee(),this.systems.fire("animationUpdate",e),this.stats.frame.animUpdate=Ee()-this.stats.frame.animUpdateStart,this.stats.frame.scriptPostUpdateStart=Ee(),this.systems.fire("postUpdate",e),this.stats.frame.scriptPostUpdate=Ee()-this.stats.frame.scriptPostUpdateStart,this.fire("update",e),this.inputUpdate(e)}render(){this.updateCanvasSize(),this.graphicsDevice.frameStart(),this.fire("prerender"),this.root.syncHierarchy(),this._batcher&&this._batcher.updateAll(),this.renderComposition(this.scene.layers),this.fire("postrender"),this.stats.frame.renderTime=Ee()-this.stats.frame.renderStart,this.graphicsDevice.frameEnd()}renderComposition(e){this.renderer.update(e),this.renderer.buildFrameGraph(this.frameGraph,e),this.renderer.cull(e),this.frameGraph.render(this.graphicsDevice)}setCanvasFillMode(e,i,s){this._fillMode=e,this.resizeCanvas(i,s)}setCanvasResolution(e,i,s){this._resolutionMode=e,e===cc&&i===void 0&&(i=this.graphicsDevice.canvas.clientWidth,s=this.graphicsDevice.canvas.clientHeight),this.graphicsDevice.resizeCanvas(i,s)}isHidden(){return document.hidden}onVisibilityChange(){this.isHidden()?this._soundManager&&this._soundManager.suspend():this._soundManager&&this._soundManager.resume()}resizeCanvas(e,i){if(!this._allowResize||this.xr&&this.xr.session)return;const s=window.innerWidth,a=window.innerHeight;if(this._fillMode===lc){const r=this.graphicsDevice.canvas.width/this.graphicsDevice.canvas.height,n=s/a;r>n?(e=s,i=e/r):(i=a,e=i*r)}else this._fillMode===bv&&(e=s,i=a);return this.graphicsDevice.canvas.style.width=`${e}px`,this.graphicsDevice.canvas.style.height=`${i}px`,this.updateCanvasSize(),{width:e,height:i}}updateCanvasSize(){var e;if(!(!this._allowResize||(e=this.xr)!=null&&e.active)&&this._resolutionMode===cc){const i=this.graphicsDevice.canvas;this.graphicsDevice.resizeCanvas(i.clientWidth,i.clientHeight)}}onLibrariesLoaded(){this._librariesLoaded=!0,this.systems.rigidbody&&this.systems.rigidbody.onLibraryLoaded()}applySceneSettings(e){let i;if(this.systems.rigidbody){const[s,a,r]=e.physics.gravity;this.systems.rigidbody.gravity.set(s,a,r)}this.scene.applySettings(e),e.render.hasOwnProperty("skybox")&&(e.render.skybox?(i=this.assets.get(e.render.skybox),i?this.setSkybox(i):this.assets.once(`add:${e.render.skybox}`,this.setSkybox,this)):this.setSkybox(null))}setAreaLightLuts(e,i){e&&i&&ti.set(this.graphicsDevice,e,i)}setSkybox(e){e!==this._skyboxAsset&&(this._skyboxAsset&&(this.assets.off(`load:${this._skyboxAsset.id}`,this._onSkyboxChanged,this),this.assets.off(`remove:${this._skyboxAsset.id}`,this._onSkyboxRemoved,this),this._skyboxAsset.off("change",this._onSkyboxChanged,this)),this._skyboxAsset=e,this._skyboxAsset&&(this.assets.on(`load:${this._skyboxAsset.id}`,this._onSkyboxChanged,this),this.assets.once(`remove:${this._skyboxAsset.id}`,this._onSkyboxRemoved,this),this._skyboxAsset.on("change",this._onSkyboxChanged,this),this.scene.skyboxMip===0&&!this._skyboxAsset.loadFaces&&(this._skyboxAsset.loadFaces=!0),this.assets.load(this._skyboxAsset)),this._onSkyboxChanged())}_onSkyboxRemoved(){this.setSkybox(null)}_onSkyboxChanged(){this.scene.setSkybox(this._skyboxAsset?this._skyboxAsset.resources:null)}_firstBake(){var e;(e=this.lightmapper)==null||e.bake(null,this.scene.lightmapMode)}_firstBatch(){var e;(e=this.batcher)==null||e.generate()}_processTimestamp(e){return e}drawLine(e,i,s,a,r){this.scene.drawLine(e,i,s,a,r)}drawLines(e,i,s=!0,a=this.scene.defaultDrawLayer){this.scene.drawLines(e,i,s,a)}drawLineArrays(e,i,s=!0,a=this.scene.defaultDrawLayer){this.scene.drawLineArrays(e,i,s,a)}drawWireSphere(e,i,s=U.WHITE,a=20,r=!0,n=this.scene.defaultDrawLayer){this.scene.immediate.drawWireSphere(e,i,s,a,r,n)}drawWireAlignedBox(e,i,s=U.WHITE,a=!0,r=this.scene.defaultDrawLayer,n){this.scene.immediate.drawWireAlignedBox(e,i,s,a,r,n)}drawMeshInstance(e,i=this.scene.defaultDrawLayer){this.scene.immediate.drawMesh(null,null,null,e,i)}drawMesh(e,i,s,a=this.scene.defaultDrawLayer){this.scene.immediate.drawMesh(i,s,e,null,a)}drawQuad(e,i,s=this.scene.defaultDrawLayer){this.scene.immediate.drawMesh(i,e,this.scene.immediate.getQuadMesh(),null,s)}drawTexture(e,i,s,a,r,n,l=this.scene.defaultDrawLayer,d=!0){if(d===!1&&!this.graphicsDevice.isWebGPU)return;const f=new b;f.setTRS(new _(e,i,0),G.IDENTITY,new _(s,-a,0)),n||(n=new Ps,n.cull=gs,n.setParameter("colorMap",r),n.shaderDesc=d?this.scene.immediate.getTextureShaderDesc(r.encoding):this.scene.immediate.getUnfilterableTextureShaderDesc(),n.update()),this.drawQuad(f,n,l)}drawDepthTexture(e,i,s,a,r=this.scene.defaultDrawLayer){const n=new Ps;n.cull=gs,n.shaderDesc=this.scene.immediate.getDepthTextureShaderDesc(),n.update(),this.drawTexture(e,i,s,a,null,n,r)}destroy(){var a,r,n,l,d;if(this._inFrameUpdate){this._destroyRequested=!0;return}const e=this.graphicsDevice.canvas.id;this.fire("destroy",this),this.off("librariesloaded"),(a=this._gsplatSortedEvt)==null||a.off(),this._gsplatSortedEvt=null,typeof document<"u"&&document.removeEventListener("visibilitychange",this._visibilityChangeHandler,!1),this._visibilityChangeHandler=null,this.root.destroy(),this.root=null,this.mouse&&(this.mouse.off(),this.mouse.detach(),this.mouse=null),this.keyboard&&(this.keyboard.off(),this.keyboard.detach(),this.keyboard=null),this.touch&&(this.touch.off(),this.touch.detach(),this.touch=null),this.elementInput&&(this.elementInput.detach(),this.elementInput=null),this.gamepads&&(this.gamepads.destroy(),this.gamepads=null),this.systems.destroy(),this.bundles.destroy(),this.bundles=null,this.i18n.destroy(),this.i18n=null;const i=this.loader.getHandler("script");i==null||i.clearCache(),this.loader.destroy(),this.loader=null,this.systems=null,this.context=null,this.scripts.destroy(),this.scripts=null,this.scenes.destroy(),this.scenes=null,(r=this.lightmapper)==null||r.destroy(),this.lightmapper=null,this._batcher&&(this._batcher.destroy(),this._batcher=null),this._entityIndex={},this.defaultLayerDepth.onDisable=null,this.defaultLayerDepth.onEnable=null,this.defaultLayerDepth=null,this.defaultLayerWorld=null,(n=this.xr)==null||n.end(),(l=this.xr)==null||l.destroy(),this.renderer.destroy(),this.renderer=null;const s=this.assets.list();for(let f=0;f<s.length;f++)s[f].unload(),s[f].off();this.assets.off(),this.scene.destroy(),this.scene=null,this.graphicsDevice.destroy(),this.graphicsDevice=null,this.off(),(d=this._soundManager)==null||d.destroy(),this._soundManager=null,Jt._applications[e]=null,rt()===this&&Yr(null),Jt.cancelTick(this)}static cancelTick(e){e.frameRequestId&&(cancelAnimationFrame(e.frameRequestId),e.frameRequestId=void 0)}getEntityFromIndex(e){return this._entityIndex[e]}_registerSceneImmediate(e){this.on("postrender",e.immediate.onPostRender,e.immediate),this._gsplatSortedEvt=e.on("gsplat:sorted",i=>{this.stats.frame.gsplatSort+=i})}};o(Jt,"_applications",{});let Et=Jt;class Bx extends pe{constructor(e){super();o(this,"id");o(this,"extraDataProperties",[]);o(this,"_validProps",null);this.app=e,this.store={},this.schema=[]}addComponent(e,i={}){const s=new this.ComponentType(this,e),a=this.DataType?new this.DataType:{};return this.store[e.guid]={entity:e,data:a},e[this.id]=s,e.c[this.id]=s,this.initializeComponentData(s,i),this.fire("add",e,s),s}removeComponent(e){const i=this.id,s=this.store[e.guid],a=e.c[i];a.fire("beforeremove"),this.fire("beforeremove",e,a),delete this.store[e.guid],e[i]=void 0,delete e.c[i],this.fire("remove",e,s.data)}cloneComponent(e,i){const s=this.store[e.guid];return this.addComponent(i,s.data)}initializeComponentData(e,i={},s){if(s)for(let a=0,r=s.length;a<r;a++){const n=s[a];let l,d;typeof n=="object"?(l=n.name,d=n.type):(l=n,d=void 0);let f=i[l];f!==void 0?(d!==void 0&&(f=kx(f,d)),e[l]=f):e.data&&l in e.data&&(e[l]=e.data[l])}else i.enabled!==void 0&&(e.enabled=i.enabled);e.enabled&&e.entity.enabled&&e.onEnable()}getPropertiesOfType(e){const i=[];return(this.schema||[]).forEach(a=>{a&&typeof a=="object"&&a.type===e&&i.push(a)}),i}destroy(){this.off()}}function kx(c,t){if(!c)return c;switch(t){case"rgb":return c instanceof U?c.clone():new U(c[0],c[1],c[2]);case"rgba":return c instanceof U?c.clone():new U(c[0],c[1],c[2],c[3]);case"vec2":return c instanceof k?c.clone():new k(c[0],c[1]);case"vec3":return c instanceof _?c.clone():new _(c[0],c[1],c[2]);case"vec4":return c instanceof se?c.clone():new se(c[0],c[1],c[2],c[3]);case"boolean":case"number":case"string":return c;case"entity":return c;default:throw new Error(`Could not convert unhandled type: ${t}`)}}const Fa=class Fa extends pe{constructor(e,i){var s;super();o(this,"system");o(this,"entity");o(this,"_enabled",!0);this.system=e,this.entity=i,(s=this.system.schema)!=null&&s.length&&!this._accessorsBuilt&&this.buildAccessors(this.system.schema),this.on("set",function(a,r,n){this.fire(`set_${a}`,a,r,n)}),this.on("set_enabled",this.onSetEnabled,this)}static _buildAccessors(e,i){i.forEach(s=>{const a=typeof s=="object"?s.name:s;Object.defineProperty(e,a,{get:function(){return this.data[a]},set:function(r){const n=this.data,l=n[a];n[a]=r,this.fire("set",a,l,r)},configurable:!0})}),e._accessorsBuilt=!0}buildAccessors(e){Fa._buildAccessors(this,e)}onSetEnabled(e,i,s){i!==s&&this.entity.enabled&&(s?this.onEnable():this.onDisable())}onEnable(){}onDisable(){}onPostStateChange(){}get data(){const e=this.system.store[this.entity.guid];return e?e.data:null}set enabled(e){const i=this._enabled;this._enabled=e,this.fire("set","enabled",i,e)}get enabled(){return this._enabled}};o(Fa,"order",0);let Ma=Fa;const ns="static",Fe="dynamic",ai="kinematic",zx=2,qr=4,Vx=1,pc=4,Gx=5,Hx=1,mc=2,Wx=4,_c=16,gc=65535,An=65533,Xx="fixed",Yx="ball",$x="hinge",qx="slider",jx="6dof",Kx="free",Zx="limited",RA="locked";class Jx{constructor(){o(this,"map",new Map)}destroy(t){this.map.forEach(e=>e.mesh.destroy())}}const Qx=new nt,eC=(c,t)=>{const e=Qx.get(c,()=>new Jx);let i=e.map.get(t);if(!i){let s,a;switch(t){case"box":s=xe.fromGeometry(c,new En),a={x:2,y:2,z:2,uv:2/3};break;case"capsule":s=xe.fromGeometry(c,new Av({radius:.5,height:2})),a={x:Math.PI*2,y:Math.PI,z:Math.PI*2,uv:1/3+1/3/3*2};break;case"cone":s=xe.fromGeometry(c,new wv({baseRadius:.5,peakRadius:0,height:1})),a={x:2.54,y:2.54,z:2.54,uv:1/3+1/3/3};break;case"cylinder":s=xe.fromGeometry(c,new Lv({radius:.5,height:1})),a={x:Math.PI,y:.79*2,z:Math.PI,uv:1/3+1/3/3*2};break;case"plane":s=xe.fromGeometry(c,new Dv({halfExtents:new k(.5,.5),widthSegments:1,lengthSegments:1})),a={x:0,y:1,z:0,uv:1};break;case"sphere":s=xe.fromGeometry(c,new Dh({radius:.5})),a={x:Math.PI,y:Math.PI,z:Math.PI,uv:1};break;case"torus":s=xe.fromGeometry(c,new Pv({tubeRadius:.2,ringRadius:.3})),a={x:Math.PI*.5*.5-Math.PI*.1*.1,y:.4,z:.4,uv:1};break;default:throw new Error(`Invalid primitive type: ${t}`)}s.incRefCount(),i={mesh:s,area:a},e.map.set(t,i)}return i};class tC extends Ma{constructor(e,i){super(e,i);o(this,"_type","asset");o(this,"_asset",null);o(this,"_model",null);o(this,"_mapping",{});o(this,"_castShadows",!0);o(this,"_receiveShadows",!0);o(this,"_materialAsset",null);o(this,"_material");o(this,"_castShadowsLightmap",!0);o(this,"_lightmapped",!1);o(this,"_lightmapSizeMultiplier",1);o(this,"isStatic",!1);o(this,"_layers",[Xa]);o(this,"_batchGroupId",-1);o(this,"_customAabb",null);o(this,"_area",null);o(this,"_materialEvents",null);o(this,"_clonedModel",!1);o(this,"_evtLayersChanged",null);o(this,"_evtLayerAdded",null);o(this,"_evtLayerRemoved",null);this._material=e.defaultMaterial,i.on("remove",this.onRemoveChild,this),i.on("removehierarchy",this.onRemoveChild,this),i.on("insert",this.onInsertChild,this),i.on("inserthierarchy",this.onInsertChild,this)}set meshInstances(e){this._model&&(this._model.meshInstances=e)}get meshInstances(){return this._model?this._model.meshInstances:null}set customAabb(e){if(this._customAabb=e,this._model){const i=this._model.meshInstances;if(i)for(let s=0;s<i.length;s++)i[s].setCustomAabb(this._customAabb)}}get customAabb(){return this._customAabb}set type(e){if(this._type!==e)if(this._area=null,this._type=e,e==="asset")this._asset!==null?this._bindModelAsset(this._asset):this.model=null;else{const i=eC(this.system.app.graphicsDevice,e);this._area=i.area;const s=i.mesh,a=new ki,r=new _o;r.graph=a,r.meshInstances=[new Vt(s,this._material,a)],this.model=r,this._asset=null}}get type(){return this._type}set asset(e){const i=this.system.app.assets;let s=e;if(e instanceof ye&&(s=e.id),this._asset!==s){if(this._asset){i.off(`add:${this._asset}`,this._onModelAssetAdded,this);const a=i.get(this._asset);a&&this._unbindModelAsset(a)}if(this._asset=s,this._asset){const a=i.get(this._asset);a?this._bindModelAsset(a):(this.model=null,i.on(`add:${this._asset}`,this._onModelAssetAdded,this))}else this.model=null}}get asset(){return this._asset}set model(e){if(this._model!==e&&!(e&&e._immutable)&&(this._model&&(this._model._immutable=!1,this.removeModelFromLayers(),this._model.getGraph().destroy(),delete this._model._entity,this._clonedModel&&(this._model.destroy(),this._clonedModel=!1)),this._model=e,this._model)){this._model._immutable=!0;const i=this._model.meshInstances;for(let s=0;s<i.length;s++)i[s].castShadow=this._castShadows,i[s].receiveShadow=this._receiveShadows,i[s].setCustomAabb(this._customAabb);this.lightmapped=this._lightmapped,this.entity.addChild(this._model.graph),this.enabled&&this.entity.enabled&&this.addModelToLayers(),this._model._entity=this.entity,this.entity.animation&&this.entity.animation.setModel(this._model),this.entity.anim&&this.entity.anim.rebind(),this.type==="asset"?this.mapping=this._mapping:this._unsetMaterialEvents()}}get model(){return this._model}set lightmapped(e){if(e!==this._lightmapped&&(this._lightmapped=e,this._model)){const i=this._model.meshInstances;for(let s=0;s<i.length;s++)i[s].setLightmapped(e)}}get lightmapped(){return this._lightmapped}set castShadows(e){if(this._castShadows===e)return;const i=this._model;if(i){const s=this.layers,a=this.system.app.scene;if(this._castShadows&&!e)for(let n=0;n<s.length;n++){const l=this.system.app.scene.layers.getLayerById(this.layers[n]);l&&l.removeShadowCasters(i.meshInstances)}const r=i.meshInstances;for(let n=0;n<r.length;n++)r[n].castShadow=e;if(!this._castShadows&&e)for(let n=0;n<s.length;n++){const l=a.layers.getLayerById(s[n]);l&&l.addShadowCasters(i.meshInstances)}}this._castShadows=e}get castShadows(){return this._castShadows}set receiveShadows(e){if(this._receiveShadows!==e&&(this._receiveShadows=e,this._model)){const i=this._model.meshInstances;for(let s=0,a=i.length;s<a;s++)i[s].receiveShadow=e}}get receiveShadows(){return this._receiveShadows}set castShadowsLightmap(e){this._castShadowsLightmap=e}get castShadowsLightmap(){return this._castShadowsLightmap}set lightmapSizeMultiplier(e){this._lightmapSizeMultiplier=e}get lightmapSizeMultiplier(){return this._lightmapSizeMultiplier}set layers(e){const i=this.system.app.scene.layers;if(this.meshInstances)for(let s=0;s<this._layers.length;s++){const a=i.getLayerById(this._layers[s]);a&&a.removeMeshInstances(this.meshInstances)}this._layers.length=0;for(let s=0;s<e.length;s++)this._layers[s]=e[s];if(!(!this.enabled||!this.entity.enabled||!this.meshInstances))for(let s=0;s<this._layers.length;s++){const a=i.getLayerById(this._layers[s]);a&&a.addMeshInstances(this.meshInstances)}}get layers(){return this._layers}set batchGroupId(e){var i,s;this._batchGroupId!==e&&(this.entity.enabled&&this._batchGroupId>=0&&((i=this.system.app.batcher)==null||i.remove(Mt.MODEL,this.batchGroupId,this.entity)),this.entity.enabled&&e>=0&&((s=this.system.app.batcher)==null||s.insert(Mt.MODEL,e,this.entity)),e<0&&this._batchGroupId>=0&&this.enabled&&this.entity.enabled&&this.addModelToLayers(),this._batchGroupId=e)}get batchGroupId(){return this._batchGroupId}set materialAsset(e){let i=e;e instanceof ye&&(i=e.id);const s=this.system.app.assets;if(i!==this._materialAsset){if(this._materialAsset){s.off(`add:${this._materialAsset}`,this._onMaterialAssetAdd,this);const a=s.get(this._materialAsset);a&&this._unbindMaterialAsset(a)}if(this._materialAsset=i,this._materialAsset){const a=s.get(this._materialAsset);a?this._bindMaterialAsset(a):(this._setMaterial(this.system.defaultMaterial),s.on(`add:${this._materialAsset}`,this._onMaterialAssetAdd,this))}else this._setMaterial(this.system.defaultMaterial)}}get materialAsset(){return this._materialAsset}set material(e){this._material!==e&&(this.materialAsset=null,this._setMaterial(e))}get material(){return this._material}set mapping(e){if(this._type!=="asset"||(this._unsetMaterialEvents(),e||(e={}),this._mapping=e,!this._model))return;const i=this._model.meshInstances,s=this.asset?this.system.app.assets.get(this.asset):null,a=s?s.data.mapping:null;let r=null;for(let n=0,l=i.length;n<l;n++)if(e[n]!==void 0)e[n]?(r=this.system.app.assets.get(e[n]),this._loadAndSetMeshInstanceMaterial(r,i[n],n)):i[n].material=this.system.defaultMaterial;else if(a)if(a[n]&&(a[n].material||a[n].path)){if(a[n].material!==void 0)r=this.system.app.assets.get(a[n].material);else if(a[n].path!==void 0){const d=this._getMaterialAssetUrl(a[n].path);d&&(r=this.system.app.assets.getByUrl(d))}this._loadAndSetMeshInstanceMaterial(r,i[n],n)}else i[n].material=this.system.defaultMaterial}get mapping(){return this._mapping}addModelToLayers(){const e=this.system.app.scene.layers;for(let i=0;i<this._layers.length;i++){const s=e.getLayerById(this._layers[i]);s&&s.addMeshInstances(this.meshInstances)}}removeModelFromLayers(){const e=this.system.app.scene.layers;for(let i=0;i<this._layers.length;i++){const s=e.getLayerById(this._layers[i]);s&&s.removeMeshInstances(this.meshInstances)}}onRemoveChild(){this._model&&this.removeModelFromLayers()}onInsertChild(){this._model&&this.enabled&&this.entity.enabled&&this.addModelToLayers()}onBeforeRemove(){this.asset=null,this.model=null,this.materialAsset=null,this._unsetMaterialEvents(),this.entity.off("remove",this.onRemoveChild,this),this.entity.off("insert",this.onInsertChild,this)}onLayersChanged(e,i){this.addModelToLayers(),e.off("add",this.onLayerAdded,this),e.off("remove",this.onLayerRemoved,this),i.on("add",this.onLayerAdded,this),i.on("remove",this.onLayerRemoved,this)}onLayerAdded(e){this.layers.indexOf(e.id)<0||e.addMeshInstances(this.meshInstances)}onLayerRemoved(e){this.layers.indexOf(e.id)<0||e.removeMeshInstances(this.meshInstances)}_setMaterialEvent(e,i,s,a){const r=`${i}:${s}`;this.system.app.assets.on(r,a,this),this._materialEvents||(this._materialEvents=[]),this._materialEvents[e]||(this._materialEvents[e]={}),this._materialEvents[e][r]={id:s,handler:a}}_unsetMaterialEvents(){const e=this.system.app.assets,i=this._materialEvents;if(i){for(let s=0,a=i.length;s<a;s++){if(!i[s])continue;const r=i[s];for(const n in r)e.off(n,r[n].handler,this)}this._materialEvents=null}}_getAssetByIdOrPath(e){let i=null;if(!isNaN(parseInt(e,10)))i=this.system.app.assets.get(e);else if(this.asset){const a=this._getMaterialAssetUrl(e);a&&(i=this.system.app.assets.getByUrl(a))}return i}_getMaterialAssetUrl(e){if(!this.asset)return null;const i=this.system.app.assets.get(this.asset);return i?i.getAbsoluteUrl(e):null}_loadAndSetMeshInstanceMaterial(e,i,s){const a=this.system.app.assets;e&&(e.resource?(i.material=e.resource,this._setMaterialEvent(s,"remove",e.id,function(){i.material=this.system.defaultMaterial})):(this._setMaterialEvent(s,"load",e.id,function(r){i.material=r.resource,this._setMaterialEvent(s,"remove",e.id,function(){i.material=this.system.defaultMaterial})}),this.enabled&&this.entity.enabled&&a.load(e)))}onEnable(){var n;const e=this.system.app,i=e.scene,s=i==null?void 0:i.layers;this._evtLayersChanged=i.on("set:layers",this.onLayersChanged,this),s&&(this._evtLayerAdded=s.on("add",this.onLayerAdded,this),this._evtLayerRemoved=s.on("remove",this.onLayerRemoved,this));const a=this._type==="asset";let r;if(this._model?this.addModelToLayers():a&&this._asset&&(r=e.assets.get(this._asset),r&&r.resource!==this._model&&this._bindModelAsset(r)),this._materialAsset&&(r=e.assets.get(this._materialAsset),r&&r.resource!==this._material&&this._bindMaterialAsset(r)),a&&this._mapping)for(const l in this._mapping)this._mapping[l]&&(r=this._getAssetByIdOrPath(this._mapping[l]),r&&!r.resource&&e.assets.load(r));this._batchGroupId>=0&&((n=e.batcher)==null||n.insert(Mt.MODEL,this.batchGroupId,this.entity))}onDisable(){var a,r,n,l;const e=this.system.app,s=e.scene.layers;(a=this._evtLayersChanged)==null||a.off(),this._evtLayersChanged=null,s&&((r=this._evtLayerAdded)==null||r.off(),this._evtLayerAdded=null,(n=this._evtLayerRemoved)==null||n.off(),this._evtLayerRemoved=null),this._batchGroupId>=0&&((l=e.batcher)==null||l.remove(Mt.MODEL,this.batchGroupId,this.entity)),this._model&&this.removeModelFromLayers()}hide(){if(this._model){const e=this._model.meshInstances;for(let i=0,s=e.length;i<s;i++)e[i].visible=!1}}show(){if(this._model){const e=this._model.meshInstances;for(let i=0,s=e.length;i<s;i++)e[i].visible=!0}}_bindMaterialAsset(e){if(e.on("load",this._onMaterialAssetLoad,this),e.on("unload",this._onMaterialAssetUnload,this),e.on("remove",this._onMaterialAssetRemove,this),e.on("change",this._onMaterialAssetChange,this),e.resource)this._onMaterialAssetLoad(e);else{if(!this.enabled||!this.entity.enabled)return;this.system.app.assets.load(e)}}_unbindMaterialAsset(e){e.off("load",this._onMaterialAssetLoad,this),e.off("unload",this._onMaterialAssetUnload,this),e.off("remove",this._onMaterialAssetRemove,this),e.off("change",this._onMaterialAssetChange,this)}_onMaterialAssetAdd(e){this.system.app.assets.off(`add:${e.id}`,this._onMaterialAssetAdd,this),this._materialAsset===e.id&&this._bindMaterialAsset(e)}_onMaterialAssetLoad(e){this._setMaterial(e.resource)}_onMaterialAssetUnload(e){this._setMaterial(this.system.defaultMaterial)}_onMaterialAssetRemove(e){this._onMaterialAssetUnload(e)}_onMaterialAssetChange(e){}_bindModelAsset(e){if(this._unbindModelAsset(e),e.on("load",this._onModelAssetLoad,this),e.on("unload",this._onModelAssetUnload,this),e.on("change",this._onModelAssetChange,this),e.on("remove",this._onModelAssetRemove,this),e.resource)this._onModelAssetLoad(e);else{if(!this.enabled||!this.entity.enabled)return;this.system.app.assets.load(e)}}_unbindModelAsset(e){e.off("load",this._onModelAssetLoad,this),e.off("unload",this._onModelAssetUnload,this),e.off("change",this._onModelAssetChange,this),e.off("remove",this._onModelAssetRemove,this)}_onModelAssetAdded(e){this.system.app.assets.off(`add:${e.id}`,this._onModelAssetAdded,this),e.id===this._asset&&this._bindModelAsset(e)}_onModelAssetLoad(e){this.model=e.resource.clone(),this._clonedModel=!0}_onModelAssetUnload(e){this.model=null}_onModelAssetChange(e,i,s,a){i==="data"&&(this.mapping=this._mapping)}_onModelAssetRemove(e){this.model=null}_setMaterial(e){if(this._material===e)return;this._material=e;const i=this._model;if(i&&this._type!=="asset"){const s=i.meshInstances;for(let a=0,r=s.length;a<r;a++)s[a].material=e}}}class jr{constructor(t,e){o(this,"_constructor");o(this,"_pool",[]);o(this,"_count",0);this._constructor=t,this._resize(e)}_resize(t){if(t>this._pool.length)for(let e=this._pool.length;e<t;e++)this._pool[e]=new this._constructor}allocate(){return this._count>=this._pool.length&&this._resize(this._pool.length*2),this._pool[this._count++]}freeAll(){this._count=0}}class vc{constructor(t,e,i,s){o(this,"entity");o(this,"point");o(this,"normal");o(this,"hitFraction");this.entity=t,this.point=e,this.normal=i,this.hitFraction=s}}class zh{constructor(){o(this,"entity",null);o(this,"nativeBody",null)}setFriction(t){}setRollingFriction(t){}setRestitution(t){}setDamping(t,e){}setLinearFactor(t){}setAngularFactor(t){}setLinearVelocity(t){}getLinearVelocity(t){}setAngularVelocity(t){}getAngularVelocity(t){}setMass(t){}isActive(){return!1}activate(){}setTransform(t,e){}getTransform(t,e){}setKinematicTarget(t,e){}applyForce(t,e){}applyTorque(t){}applyImpulse(t,e){}applyTorqueImpulse(t){}}class Vh{constructor(){o(this,"nativeJoint",null)}updateLimits(t){return!1}updateMotor(t){return!1}updateSpring(t){return!1}setBreakImpulse(t){}isBroken(){return!1}}class iC{constructor(t={}){o(this,"contactListener",null);o(this,"nativeWorld",null);this.contactListener=t.contactListener??null}destroy(){}setGravity(t){}step(t,e,i){}flushContacts(){}createBody(t){const e=new zh;return e.entity=t.entity??null,e}destroyBody(t){}addBody(t,e,i){}removeBody(t){}createShape(t){return{}}destroyShape(t){}addCompoundChild(t,e,i,s){}updateCompoundChild(t,e,i,s){}removeCompoundChild(t,e){}getCompoundChildCount(t){return 0}createJoint(t){return new Vh}destroyJoint(t){}raycastFirst(t,e,i){return null}raycastAll(t,e,i){return[]}}class sC extends zh{constructor(e,i,s,a){super();o(this,"_world");o(this,"_type");o(this,"_noContactResponse");this._world=e,this.nativeBody=i,this._type=s,this._noContactResponse=a}setFriction(e){this.nativeBody.setFriction(e)}setRollingFriction(e){this.nativeBody.setRollingFriction(e)}setRestitution(e){this.nativeBody.setRestitution(e)}setDamping(e,i){this.nativeBody.setDamping(e,i)}setLinearFactor(e){const i=this._world._btVec1;i.setValue(e.x,e.y,e.z),this.nativeBody.setLinearFactor(i)}setAngularFactor(e){const i=this._world._btVec1;i.setValue(e.x,e.y,e.z),this.nativeBody.setAngularFactor(i)}setLinearVelocity(e){const i=this._world._btVec1;i.setValue(e.x,e.y,e.z),this.nativeBody.setLinearVelocity(i)}getLinearVelocity(e){const i=this.nativeBody.getLinearVelocity();e.set(i.x(),i.y(),i.z())}setAngularVelocity(e){const i=this._world._btVec1;i.setValue(e.x,e.y,e.z),this.nativeBody.setAngularVelocity(i)}getAngularVelocity(e){const i=this.nativeBody.getAngularVelocity();e.set(i.x(),i.y(),i.z())}setMass(e){const i=this._world._btVec1;this.nativeBody.getCollisionShape().calculateLocalInertia(e,i),this.nativeBody.setMassProps(e,i),this.nativeBody.updateInertiaTensor()}isActive(){return this.nativeBody.isActive()}activate(){this.nativeBody.activate()}setTransform(e,i){const s=this.nativeBody,a=this._world._btTransform,r=this._world._btVec1,n=this._world._btQuat;if(r.setValue(e.x,e.y,e.z),n.setValue(i.x,i.y,i.z,i.w),a.setOrigin(r),a.setRotation(n),s.setWorldTransform(a),this._type===ai){const l=s.getMotionState();l&&l.setWorldTransform(a)}else this._type===Fe&&!this._noContactResponse&&s.setInterpolationWorldTransform&&(s.setInterpolationWorldTransform(a),r.setValue(0,0,0),s.setInterpolationLinearVelocity(r),s.setInterpolationAngularVelocity(r));s.activate()}getTransform(e,i){const s=this.nativeBody.getMotionState();if(s){const a=this._world._btTransform;s.getWorldTransform(a);const r=a.getOrigin(),n=a.getRotation();e.set(r.x(),r.y(),r.z()),i.set(n.x(),n.y(),n.z(),n.w())}}setKinematicTarget(e,i){const s=this.nativeBody.getMotionState();if(s){const a=this._world._btTransform,r=this._world._btVec1,n=this._world._btQuat;r.setValue(e.x,e.y,e.z),n.setValue(i.x,i.y,i.z,i.w),a.setOrigin(r),a.setRotation(n),s.setWorldTransform(a)}}applyForce(e,i){const s=this._world._btVec1,a=this._world._btVec2;s.setValue(e.x,e.y,e.z),a.setValue(i.x,i.y,i.z),this.nativeBody.applyForce(s,a)}applyTorque(e){const i=this._world._btVec1;i.setValue(e.x,e.y,e.z),this.nativeBody.applyTorque(i)}applyImpulse(e,i){const s=this._world._btVec1,a=this._world._btVec2;s.setValue(e.x,e.y,e.z),a.setValue(i.x,i.y,i.z),this.nativeBody.applyImpulse(s,a)}applyTorqueImpulse(e){const i=this._world._btVec1;i.setValue(e.x,e.y,e.z),this.nativeBody.applyTorqueImpulse(i)}}const na=new b,oa=new _,es=new G,$t={lower:0,upper:0};function Ei(c,t,e){return c===Zx?($t.lower=t.x*e,$t.upper=t.y*e):c===Kx?($t.lower=1,$t.upper=0):($t.lower=0,$t.upper=0),$t}const aC={create(c,t,e,i){return new Ammo.btFixedConstraint(c,t,e,i)}},rC={create(c,t,e,i){return new Ammo.btConeTwistConstraint(c,t,e,i)},updateLimits(c,t){const e=c.nativeJoint;t.enableLimits?(e.setLimit(5,t.swingLimitY*I.DEG_TO_RAD),e.setLimit(4,t.swingLimitZ*I.DEG_TO_RAD),e.setLimit(3,t.twistLimit*I.DEG_TO_RAD)):(e.setLimit(5,1e30),e.setLimit(4,1e30),e.setLimit(3,1e30))}},nC={axisCorrection:new b().setFromAxisAngle(_.UP,90),create(c,t,e,i){return new Ammo.btHingeConstraint(c,t,e,i,!1)},updateLimits(c,t){const e=c.nativeJoint;if(t.enableLimits){const i=t.limits;e.setLimit(i.x*I.DEG_TO_RAD,i.y*I.DEG_TO_RAD,.9,.3,1)}else e.setLimit(1,-1,.9,.3,1)},updateMotor(c,t){const e=t.maxMotorForce*c._world._fixedTimeStep;c.nativeJoint.enableAngularMotor(t.maxMotorForce>0,t.motorSpeed*I.DEG_TO_RAD,e)}},oC={create(c,t,e,i){return new Ammo.btSliderConstraint(c,t,e,i,!0)},updateLimits(c,t){const e=c.nativeJoint;if(t.enableLimits){const i=t.limits;e.setLowerLinLimit(i.x),e.setUpperLinLimit(i.y)}else e.setLowerLinLimit(1),e.setUpperLinLimit(-1);e.setLowerAngLimit(0),e.setUpperAngLimit(0)},updateMotor(c,t){const e=c.nativeJoint;e.setPoweredLinMotor(t.maxMotorForce>0),e.setTargetLinMotorVelocity(t.motorSpeed),e.setMaxLinMotorForce(t.maxMotorForce)}},lC={create(c,t,e,i){return new Ammo.btGeneric6DofSpringConstraint(c,t,e,i,!0)},updateLimits(c,t){const e=c.nativeJoint;let i=Ei(t.linearMotionX,t.linearLimitsX,1);const s=i.lower,a=i.upper;i=Ei(t.linearMotionY,t.linearLimitsY,1);const r=i.lower,n=i.upper;i=Ei(t.linearMotionZ,t.linearLimitsZ,1);const l=i.lower,d=i.upper,f=c._world._btVec1;f.setValue(s,r,l),e.setLinearLowerLimit(f),f.setValue(a,n,d),e.setLinearUpperLimit(f),i=Ei(t.angularMotionX,t.angularLimitsX,I.DEG_TO_RAD);const h=i.lower,u=i.upper;i=Ei(t.angularMotionY,t.angularLimitsY,I.DEG_TO_RAD);const p=i.lower,m=i.upper;i=Ei(t.angularMotionZ,t.angularLimitsZ,I.DEG_TO_RAD);const g=i.lower,v=i.upper;f.setValue(h,p,g),e.setAngularLowerLimit(f),f.setValue(u,m,v),e.setAngularUpperLimit(f)},updateSpring(c,t){const e=c.nativeJoint,i=I.DEG_TO_RAD,s=t.linearStiffness,a=t.linearDamping,r=t.linearEquilibrium,n=t.angularStiffness,l=t.angularDamping,d=t.angularEquilibrium;e.enableSpring(0,s.x>0),e.setStiffness(0,s.x),e.setDamping(0,a.x),e.setEquilibriumPoint(0,r.x),e.enableSpring(1,s.y>0),e.setStiffness(1,s.y),e.setDamping(1,a.y),e.setEquilibriumPoint(1,r.y),e.enableSpring(2,s.z>0),e.setStiffness(2,s.z),e.setDamping(2,a.z),e.setEquilibriumPoint(2,r.z),e.enableSpring(3,n.x>0),e.setStiffness(3,n.x),e.setDamping(3,l.x),e.setEquilibriumPoint(3,d.x*i),e.enableSpring(4,n.y>0),e.setStiffness(4,n.y),e.setDamping(4,l.y),e.setEquilibriumPoint(4,d.y*i),e.enableSpring(5,n.z>0),e.setStiffness(5,n.z),e.setDamping(5,l.z),e.setEquilibriumPoint(5,d.z*i)}},ua={[Xx]:aC,[Yx]:rC,[$x]:nC,[qx]:oC,[jx]:lC};class cC extends Vh{constructor(e,i){super();o(this,"_world");o(this,"_type");o(this,"_breakImpulse",1/0);this._world=e,this._type=i}updateLimits(e){const i=ua[this._type];return i.updateLimits?(i.updateLimits(this,e),!0):!1}updateMotor(e){const i=ua[this._type];return i.updateMotor?(i.updateMotor(this,e),!0):!1}updateSpring(e){const i=ua[this._type];return i.updateSpring?(i.updateSpring(this,e),!0):!1}setBreakImpulse(e){this._breakImpulse=e;const i=Number.isFinite(e);this.nativeJoint.setBreakingImpulseThreshold(i?e:Number.MAX_VALUE),this.nativeJoint.enableFeedback(i)}isBroken(){const e=this.nativeJoint;return typeof e.isEnabled=="function"?!e.isEnabled():typeof e.getAppliedImpulse=="function"?e.getAppliedImpulse()>=this._breakImpulse:null}}function Sc(c,t){na.copy(c),t&&na.mul(t),na.getTranslation(oa),es.setFromMat4(na);const e=new Ammo.btTransform,i=new Ammo.btVector3(oa.x,oa.y,oa.z),s=new Ammo.btQuaternion(es.x,es.y,es.z,es.w);return e.setOrigin(i),e.setRotation(s),Ammo.destroy(i),Ammo.destroy(s),e}function dC(c){if(!c._fixedBody){const t=new Ammo.btTransform;t.setIdentity();const e=new Ammo.btDefaultMotionState(t),i=new Ammo.btSphereShape(.001),s=new Ammo.btVector3(0,0,0),a=new Ammo.btRigidBodyConstructionInfo(0,e,i,s);c._fixedBody=new Ammo.btRigidBody(a),Ammo.destroy(a),Ammo.destroy(s),Ammo.destroy(t)}return c._fixedBody}function hC(c,t){var h,u,p;const e=ua[t.type],i=e.axisCorrection,s=t.settings,a=Sc(t.frameA,i),r=Sc(t.frameB,i),n=t.bodyA.nativeBody,l=t.bodyB?t.bodyB.nativeBody:dC(c),d=e.create(n,l,a,r);Ammo.destroy(a),Ammo.destroy(r);const f=new cC(c,t.type);return f.nativeJoint=d,(h=e.updateLimits)==null||h.call(e,f,s),(u=e.updateMotor)==null||u.call(e,f,s),(p=e.updateSpring)==null||p.call(e,f,s),Number.isFinite(s.breakImpulse)&&f.setBreakImpulse(s.breakImpulse),n.activate(),l.activate(),c.nativeWorld.addConstraint(d,!t.enableCollision),f}function fC(c,t){c.nativeWorld.removeConstraint(t.nativeJoint),Ammo.destroy(t.nativeJoint),t.nativeJoint=null}function uC(c){c._fixedBody&&(Ammo.destroy(c._fixedBody.getMotionState()),Ammo.destroy(c._fixedBody.getCollisionShape()),Ammo.destroy(c._fixedBody),c._fixedBody=null)}function Ka(c,t,e){const i=c._btTransform,s=c._btVec1,a=c._btQuat;return s.setValue(t.x,t.y,t.z),a.setValue(e.x,e.y,e.z,e.w),i.setOrigin(s),i.setRotation(a),i}function pC(c,t){let e=c._triMeshCache.get(t.id);if(!e){const i=t.positions,s=t.stride,a=t.indices,r=t.base,n=t.count/3,l=t.checkDuplicates,d=new Ammo.btVector3;let f,h,u;e=new Ammo.btTriangleMesh,c._triMeshCache.set(t.id,e);const p=new Map,m=e.getIndexedMeshArray();m.at(0).m_numTriangles=n;const g=t.bakeScale,v=g?g.x:1,E=g?g.y:1,S=g?g.z:1,T=y=>{const C=i[y*s]*v,x=i[y*s+1]*E,A=i[y*s+2]*S;let w;if(l){const L=`${C}:${x}:${A}`;if(w=p.get(L),w!==void 0)return w;d.setValue(C,x,A),w=e.findOrAddVertex(d,!1),p.set(L,w)}else d.setValue(C,x,A),w=e.findOrAddVertex(d,!1);return w};for(let y=0;y<n;y++)f=T(a[r+y*3]),h=T(a[r+y*3+1]),u=T(a[r+y*3+2]),e.addIndex(f),e.addIndex(h),e.addIndex(u);Ammo.destroy(d)}return e}function mC(c,t,e){const i=new Ammo.btConvexHullShape,s=new Ammo.btVector3,a=e.positions,r=e.stride,n=e.bakeScale,l=n?n.x:1,d=n?n.y:1,f=n?n.z:1;for(let h=0;h<a.length;h+=r)s.setValue(a[h]*l,a[h+1]*d,a[h+2]*f),i.addPoint(s,!1);Ammo.destroy(s),i.recalcLocalAabb(),i.setMargin(.01),t.addChildShape(Ka(c,e.position,e.rotation),i)}function _C(c,t,e){const i=pC(c,e),s=new Ammo.btBvhTriangleMeshShape(i,!0),a=e.shapeScale;if(a){const r=c._btVec1;r.setValue(a.x,a.y,a.z),s.setLocalScaling(r)}t.addChildShape(Ka(c,e.position,e.rotation),s)}const gC={box:(c,t)=>{const e=t.halfExtents,i=new Ammo.btVector3(e.x,e.y,e.z),s=new Ammo.btBoxShape(i);return Ammo.destroy(i),s},sphere:(c,t)=>new Ammo.btSphereShape(t.radius),capsule:(c,t)=>{const e=t.radius,i=Math.max(t.height-2*e,0);switch(t.axis){case 0:return new Ammo.btCapsuleShapeX(e,i);case 2:return new Ammo.btCapsuleShapeZ(e,i);default:return new Ammo.btCapsuleShape(e,i)}},cylinder:(c,t)=>{const e=t.radius,i=t.height;let s=null,a=null;switch(t.axis){case 0:s=new Ammo.btVector3(i*.5,e,e),a=new Ammo.btCylinderShapeX(s);break;case 2:s=new Ammo.btVector3(e,e,i*.5),a=new Ammo.btCylinderShapeZ(s);break;default:s=new Ammo.btVector3(e,i*.5,e),a=new Ammo.btCylinderShape(s);break}return Ammo.destroy(s),a},cone:(c,t)=>{switch(t.axis){case 0:return new Ammo.btConeShapeX(t.radius,t.height);case 2:return new Ammo.btConeShapeZ(t.radius,t.height);default:return new Ammo.btConeShape(t.radius,t.height)}},mesh:(c,t)=>{const e=new Ammo.btCompoundShape,i=t.sources;for(let s=0;s<i.length;s++){const a=i[s];a.convexHull?mC(c,e,a):_C(c,e,a)}if(t.scale){const s=new Ammo.btVector3(t.scale.x,t.scale.y,t.scale.z);e.setLocalScaling(s),Ammo.destroy(s)}return e},compound:(c,t)=>new Ammo.btCompoundShape};function vC(c,t){const e=gC[t.type],i=e(c,t);return i._shapeType=t.type,i}function SC(c){if(c._shapeType==="mesh"){const t=c.getNumChildShapes();for(let e=0;e<t;e++)Ammo.destroy(c.getChildShape(e))}Ammo.destroy(c)}function Gh(c,t){const e=Ammo.getPointer(t),i=c.getNumChildShapes();for(let s=0;s<i;s++)if(Ammo.getPointer(c.getChildShape(s))===e)return s;return-1}function TC(c,t,e,i,s){t.addChildShape(Ka(c,i,s),e)}function EC(c,t,e,i,s){const a=Ka(c,i,s),r=Gh(t,e);r<0?t.addChildShape(a,e):t.updateChildTransform(r,a,!0)}function yC(c,t){if(c.getNumChildShapes()!==0)if(c.removeChildShape)c.removeChildShape(t);else{const e=Gh(c,t);e>=0&&c.removeChildShapeByIndex(e)}}class xC{constructor(){o(this,"entityA",null);o(this,"entityB",null);o(this,"triggerA",!1);o(this,"triggerB",!1);o(this,"contactCount",0);o(this,"_manifold",null)}readContact(t,e){const i=this._manifold.getContactPoint(t),s=i.get_m_localPointA(),a=i.get_m_localPointB(),r=i.getPositionWorldOnA(),n=i.getPositionWorldOnB(),l=i.get_m_normalWorldOnB();e.localPoint.set(s.x(),s.y(),s.z()),e.localPointOther.set(a.x(),a.y(),a.z()),e.point.set(r.x(),r.y(),r.z()),e.pointOther.set(n.x(),n.y(),n.z()),e.normal.set(l.x(),l.y(),l.z()),e.impulse=i.getAppliedImpulse()}}class CC extends iC{constructor(e={}){super(e);o(this,"_gravityFloat32",new Float32Array(3));o(this,"_triMeshCache",new Map);o(this,"_fixedBody",null);o(this,"_fixedTimeStep",1/60);if(this.collisionConfiguration=new Ammo.btDefaultCollisionConfiguration,this.dispatcher=new Ammo.btCollisionDispatcher(this.collisionConfiguration),this.overlappingPairCache=new Ammo.btDbvtBroadphase,this.solver=new Ammo.btSequentialImpulseConstraintSolver,this.nativeWorld=new Ammo.btDiscreteDynamicsWorld(this.dispatcher,this.overlappingPairCache,this.solver,this.collisionConfiguration),this._useTickCallback=!!this.nativeWorld.setInternalTickCallback,this._useTickCallback){const i=Ammo.addFunction(()=>this._walkContacts(),"vif");this.nativeWorld.setInternalTickCallback(i)}this._contactPair=new xC,this._btVec1=new Ammo.btVector3,this._btVec2=new Ammo.btVector3,this._btQuat=new Ammo.btQuaternion,this._btTransform=new Ammo.btTransform,this._btRayStart=new Ammo.btVector3,this._btRayEnd=new Ammo.btVector3}destroy(){this._triMeshCache.forEach(e=>Ammo.destroy(e)),this._triMeshCache.clear(),uC(this),Ammo.destroy(this._btVec1),Ammo.destroy(this._btVec2),Ammo.destroy(this._btQuat),Ammo.destroy(this._btTransform),Ammo.destroy(this._btRayStart),Ammo.destroy(this._btRayEnd),this._btVec1=null,this._btVec2=null,this._btQuat=null,this._btTransform=null,this._btRayStart=null,this._btRayEnd=null,Ammo.destroy(this.nativeWorld),Ammo.destroy(this.solver),Ammo.destroy(this.overlappingPairCache),Ammo.destroy(this.dispatcher),Ammo.destroy(this.collisionConfiguration),this.nativeWorld=null,this.solver=null,this.overlappingPairCache=null,this.dispatcher=null,this.collisionConfiguration=null}createBody(e){const{type:i,mass:s,shape:a,position:r,rotation:n,entity:l}=e,d=!!e.noContactResponse;this._btVec1.setValue(r.x,r.y,r.z),this._btQuat.setValue(n.x,n.y,n.z,n.w),this._btTransform.setOrigin(this._btVec1),this._btTransform.setRotation(this._btQuat);const f=new Ammo.btVector3(0,0,0);s!==0&&a.calculateLocalInertia(s,f);const h=new Ammo.btDefaultMotionState(this._btTransform),u=new Ammo.btRigidBodyConstructionInfo(s,h,a,f),p=new Ammo.btRigidBody(u);Ammo.destroy(u),Ammo.destroy(f),i===ai&&(p.setCollisionFlags(p.getCollisionFlags()|zx),p.setActivationState(pc)),d&&p.setCollisionFlags(p.getCollisionFlags()|qr),p.entity=l;const m=new sC(this,p,i,d);return m.entity=l,m}destroyBody(e){const i=e.nativeBody,s=i.getMotionState();s&&Ammo.destroy(s),Ammo.destroy(i),e.nativeBody=null}addBody(e,i,s){const a=e.nativeBody;i!==void 0&&s!==void 0?this.nativeWorld.addRigidBody(a,i,s):this.nativeWorld.addRigidBody(a),a.forceActivationState(e._type===ai?pc:Vx)}removeBody(e){const i=e.nativeBody;this.nativeWorld.removeRigidBody(i),i.forceActivationState(Gx)}createShape(e){return vC(this,e)}destroyShape(e){SC(e)}addCompoundChild(e,i,s,a){TC(this,e,i,s,a)}updateCompoundChild(e,i,s,a){EC(this,e,i,s,a)}removeCompoundChild(e,i){yC(e,i)}getCompoundChildCount(e){return e.getNumChildShapes()}createJoint(e){return hC(this,e)}destroyJoint(e){fC(this,e)}setGravity(e){this._gravityFloat32[0]=e.x,this._gravityFloat32[1]=e.y,this._gravityFloat32[2]=e.z;const i=this.nativeWorld.getGravity();(i.x()!==this._gravityFloat32[0]||i.y()!==this._gravityFloat32[1]||i.z()!==this._gravityFloat32[2])&&(i.setValue(e.x,e.y,e.z),this.nativeWorld.setGravity(i))}step(e,i,s){this._fixedTimeStep=s,this.nativeWorld.stepSimulation(e,i,s)}flushContacts(){this._useTickCallback||this._walkContacts()}_walkContacts(){const e=this.contactListener;if(!e)return;e.onContactsBegin();const i=this.dispatcher,s=i.getNumManifolds(),a=this._contactPair;for(let r=0;r<s;r++){const n=i.getManifoldByIndexInternal(r),l=Ammo.castObject(n.getBody0(),Ammo.btRigidBody),d=Ammo.castObject(n.getBody1(),Ammo.btRigidBody),f=l.entity,h=d.entity;if(!f||!h)continue;const u=n.getNumContacts();u>0&&(a.entityA=f,a.entityB=h,a.triggerA=(l.getCollisionFlags()&qr)!==0,a.triggerB=(d.getCollisionFlags()&qr)!==0,a.contactCount=u,a._manifold=n,e.onContactPair(a))}a.entityA=null,a.entityB=null,a._manifold=null,e.onContactsEnd()}raycastFirst(e,i,s={}){let a=null;this._btRayStart.setValue(e.x,e.y,e.z),this._btRayEnd.setValue(i.x,i.y,i.z);const r=new Ammo.ClosestRayResultCallback(this._btRayStart,this._btRayEnd);if(typeof s.filterCollisionGroup=="number"&&r.set_m_collisionFilterGroup(s.filterCollisionGroup),typeof s.filterCollisionMask=="number"&&r.set_m_collisionFilterMask(s.filterCollisionMask),this.nativeWorld.rayTest(this._btRayStart,this._btRayEnd,r),r.hasHit()){const n=r.get_m_collisionObject(),l=Ammo.castObject(n,Ammo.btRigidBody);if(l){const d=r.get_m_hitPointWorld(),f=r.get_m_hitNormalWorld();a=new vc(l.entity,new _(d.x(),d.y(),d.z()),new _(f.x(),f.y(),f.z()),r.get_m_closestHitFraction())}}return Ammo.destroy(r),a}raycastAll(e,i,s={}){const a=[];this._btRayStart.setValue(e.x,e.y,e.z),this._btRayEnd.setValue(i.x,i.y,i.z);const r=new Ammo.AllHitsRayResultCallback(this._btRayStart,this._btRayEnd);if(typeof s.filterCollisionGroup=="number"&&r.set_m_collisionFilterGroup(s.filterCollisionGroup),typeof s.filterCollisionMask=="number"&&r.set_m_collisionFilterMask(s.filterCollisionMask),this.nativeWorld.rayTest(this._btRayStart,this._btRayEnd,r),r.hasHit()){const n=r.get_m_collisionObjects(),l=r.get_m_hitPointWorld(),d=r.get_m_hitNormalWorld(),f=r.get_m_hitFractions(),h=n.size();for(let u=0;u<h;u++){const p=Ammo.castObject(n.at(u),Ammo.btRigidBody);if(p&&p.entity){if(s.filterTags&&!p.entity.tags.has(...s.filterTags)||s.filterCallback&&!s.filterCallback(p.entity))continue;const m=l.at(u),g=d.at(u),v=new vc(p.entity,new _(m.x(),m.y(),m.z()),new _(g.x(),g.y(),g.z()),f.at(u));a.push(v)}}}return Ammo.destroy(r),a}}const AC=new G,wC=new G,Tc=new _,dt=new _,ht=new G,Oe=new _,wt=new _;class mt extends Ma{constructor(){super(...arguments);o(this,"_angularDamping",0);o(this,"_angularFactor",new _(1,1,1));o(this,"_angularVelocity",new _);o(this,"_body",null);o(this,"_friction",.5);o(this,"_group",mc);o(this,"_linearDamping",0);o(this,"_linearFactor",new _(1,1,1));o(this,"_linearVelocity",new _);o(this,"_mask",An);o(this,"_mass",1);o(this,"_restitution",0);o(this,"_rollingFriction",0);o(this,"_simulationEnabled",!1);o(this,"_type",ns)}set angularDamping(e){this._angularDamping!==e&&(this._angularDamping=e,this._body&&this._body.setDamping(this._linearDamping,e))}get angularDamping(){return this._angularDamping}set angularFactor(e){this._angularFactor.equals(e)||(this._angularFactor.copy(e),this._body&&this._type===Fe&&this._body.setAngularFactor(e))}get angularFactor(){return this._angularFactor}set angularVelocity(e){this._body&&this._type===Fe&&(this._body.activate(),this._body.setAngularVelocity(e),this._angularVelocity.copy(e))}get angularVelocity(){return this._body&&this._type===Fe&&this._body.getAngularVelocity(this._angularVelocity),this._angularVelocity}set body(e){this._body!==e&&(this._body=e,e&&this._simulationEnabled&&e.activate())}get body(){return this._body?this._body.nativeBody:null}set friction(e){this._friction!==e&&(this._friction=e,this._body&&this._body.setFriction(e))}get friction(){return this._friction}set group(e){this._group!==e&&(this._group=e,this.enabled&&this.entity.enabled&&(this.disableSimulation(),this.enableSimulation()))}get group(){return this._group}set linearDamping(e){this._linearDamping!==e&&(this._linearDamping=e,this._body&&this._body.setDamping(e,this._angularDamping))}get linearDamping(){return this._linearDamping}set linearFactor(e){this._linearFactor.equals(e)||(this._linearFactor.copy(e),this._body&&this._type===Fe&&this._body.setLinearFactor(e))}get linearFactor(){return this._linearFactor}set linearVelocity(e){this._body&&this._type===Fe&&(this._body.activate(),this._body.setLinearVelocity(e),this._linearVelocity.copy(e))}get linearVelocity(){return this._body&&this._type===Fe&&this._body.getLinearVelocity(this._linearVelocity),this._linearVelocity}set mask(e){this._mask!==e&&(this._mask=e,this.enabled&&this.entity.enabled&&(this.disableSimulation(),this.enableSimulation()))}get mask(){return this._mask}set mass(e){if(this._mass!==e&&(this._mass=e,this._body&&this._type===Fe)){const i=this.enabled&&this.entity.enabled;i&&this.disableSimulation(),this._body.setMass(e),i&&this.enableSimulation()}}get mass(){return this._mass}set restitution(e){this._restitution!==e&&(this._restitution=e,this._body&&this._body.setRestitution(e))}get restitution(){return this._restitution}set rollingFriction(e){this._rollingFriction!==e&&(this._rollingFriction=e,this._body&&this._body.setRollingFriction(e))}get rollingFriction(){return this._rollingFriction}set type(e){if(this._type!==e){switch(this._type=e,this.disableSimulation(),e){case Fe:this._group=Hx,this._mask=gc;break;case ai:this._group=Wx,this._mask=gc;break;case ns:default:this._group=mc,this._mask=An;break}this.createBody()}}get type(){return this._type}createBody(){const e=this.entity;let i;e.collision&&(i=e.collision.shape,e.trigger&&(e.trigger.destroy(),delete e.trigger));const s=this.system.physicsWorld;if(i&&s){this._body&&(s.removeBody(this._body),s.destroyBody(this._body),this._body=null);const a=this._type===Fe?this._mass:0;this._getEntityTransform(dt,ht);const r=s.createBody({type:this._type,mass:a,shape:i,position:dt,rotation:ht,entity:e});r.setRestitution(this._restitution),r.setFriction(this._friction),r.setRollingFriction(this._rollingFriction),r.setDamping(this._linearDamping,this._angularDamping),this._type===Fe&&(r.setLinearFactor(this._linearFactor),r.setAngularFactor(this._angularFactor)),this.body=r,this.enabled&&e.enabled&&this.enableSimulation()}}isActive(){return this._body?this._body.isActive():!1}activate(){this._body&&this._body.activate()}enableSimulation(){this.system.enableSimulation(this)}disableSimulation(){this.system.disableSimulation(this)}applyForce(e,i,s,a,r,n){const l=this._body;l&&(l.activate(),e instanceof _?Oe.copy(e):Oe.set(e,i,s),i instanceof _?wt.copy(i):a!==void 0?wt.set(a,r,n):wt.set(0,0,0),l.applyForce(Oe,wt))}applyTorque(e,i,s){const a=this._body;a&&(a.activate(),e instanceof _?Oe.copy(e):Oe.set(e,i,s),a.applyTorque(Oe))}applyImpulse(e,i,s,a,r,n){const l=this._body;l&&(l.activate(),e instanceof _?Oe.copy(e):Oe.set(e,i,s),i instanceof _?wt.copy(i):a!==void 0?wt.set(a,r,n):wt.set(0,0,0),l.applyImpulse(Oe,wt))}applyTorqueImpulse(e,i,s){const a=this._body;a&&(a.activate(),e instanceof _?Oe.copy(e):Oe.set(e,i,s),a.applyTorqueImpulse(Oe))}isStatic(){return this._type===ns}isStaticOrKinematic(){return this._type===ns||this._type===ai}isKinematic(){return this._type===ai}_getEntityTransform(e,i){const s=this.entity,a=s.collision;a?(e.copy(a.getShapePosition()),i.copy(a.getShapeRotation())):(e.copy(s.getPosition()),i.copy(s.getRotation()))}syncEntityToBody(){const e=this._body;e&&(this._getEntityTransform(dt,ht),e.setTransform(dt,ht))}_updateDynamic(){const e=this._body;if(e.isActive()){const i=this.entity;e.getTransform(dt,ht);const s=i.collision;if(s&&s._hasOffset){const a=s.linearOffset,r=s.angularOffset,n=wC.copy(r).invert(),l=AC.copy(ht).mul(n);l.transformVector(a,Tc),i.setPositionAndRotation(dt.sub(Tc),l)}else i.setPositionAndRotation(dt,ht)}}_updateKinematic(){this._getEntityTransform(dt,ht),this._body.setKinematicTarget(dt,ht)}teleport(e,i,s,a,r,n){e instanceof _?this.entity.setPosition(e):this.entity.setPosition(e,i,s),i instanceof G?this.entity.setRotation(i):i instanceof _?this.entity.setEulerAngles(i):a!==void 0&&this.entity.setEulerAngles(a,r,n),this.syncEntityToBody()}onEnable(){this._body||this.createBody(),this.enableSimulation()}onDisable(){this.disableSimulation()}}o(mt,"EVENT_CONTACT","contact"),o(mt,"EVENT_COLLISIONSTART","collisionstart"),o(mt,"EVENT_COLLISIONEND","collisionend"),o(mt,"EVENT_TRIGGERENTER","triggerenter"),o(mt,"EVENT_TRIGGERLEAVE","triggerleave"),o(mt,"order",-1);class LC{constructor(t=new _,e=new _,i=new _,s=new _,a=new _,r=0){o(this,"localPoint");o(this,"localPointOther");o(this,"point");o(this,"pointOther");o(this,"normal");o(this,"impulse");this.localPoint=t,this.localPointOther=e,this.point=i,this.pointOther=s,this.normal=a,this.impulse=r}}class DC{constructor(t,e){o(this,"other");o(this,"contacts");this.other=t,this.contacts=e}}class PC{constructor(t,e,i){o(this,"a");o(this,"b");o(this,"impulse");o(this,"localPointA");o(this,"localPointB");o(this,"pointA");o(this,"pointB");o(this,"normal");arguments.length!==0?(this.a=t,this.b=e,this.impulse=i.impulse,this.localPointA=i.localPoint,this.localPointB=i.localPointOther,this.pointA=i.point,this.pointB=i.pointOther,this.normal=i.normal):(this.a=null,this.b=null,this.impulse=0,this.localPointA=new _,this.localPointB=new _,this.pointA=new _,this.pointB=new _,this.normal=new _)}}const Ec=["mass","linearDamping","angularDamping","linearFactor","angularFactor","friction","rollingFriction","restitution","type","group","mask"];class Hh extends Bx{constructor(e){super(e);o(this,"maxSubSteps",10);o(this,"fixedTimeStep",1/60);o(this,"gravity",new _(0,-9.81,0));o(this,"_world",null);o(this,"_dynamic",[]);o(this,"_kinematic",[]);o(this,"_triggers",[]);o(this,"_compounds",[]);this.id="rigidbody",this._stats=e.stats.frame,this.ComponentType=mt,this.contactPointPool=null,this.contactResultPool=null,this.singleContactResultPool=null,this.collisions={},this.frameCollisions={},this.on("beforeremove",this.onBeforeRemove,this)}onLibraryLoaded(){!this._world&&typeof Ammo<"u"?this.setPhysicsWorld(new CC({contactListener:this})):this._world||this.app.systems.off("update",this.onUpdate,this)}setPhysicsWorld(e){this._world=e,this.contactPointPool=new jr(LC,1),this.contactResultPool=new jr(DC,1),this.singleContactResultPool=new jr(PC,1),this.app.systems.on("update",this.onUpdate,this)}get physicsWorld(){return this._world}get dynamicsWorld(){var e;return((e=this._world)==null?void 0:e.nativeWorld)??null}get collisionConfiguration(){var e;return((e=this._world)==null?void 0:e.collisionConfiguration)??null}get dispatcher(){var e;return((e=this._world)==null?void 0:e.dispatcher)??null}get overlappingPairCache(){var e;return((e=this._world)==null?void 0:e.overlappingPairCache)??null}get solver(){var e;return((e=this._world)==null?void 0:e.solver)??null}initializeComponentData(e,i){for(const s of Ec)if(i.hasOwnProperty(s)){const a=i[s];Array.isArray(a)?e[s]=new _(a[0],a[1],a[2]):e[s]=a}super.initializeComponentData(e,i)}cloneComponent(e,i){const s=e.rigidbody,a={enabled:s.enabled};for(const r of Ec)a[r]=s[r];return this.addComponent(i,a)}onBeforeRemove(e,i){i.enabled&&(i.enabled=!1),i._body&&(this._world.destroyBody(i._body),i.body=null)}addBody(e,i,s){this._world.addBody(e,i,s)}removeBody(e){this._world.removeBody(e)}enableSimulation(e){const i=e.entity;if(i.collision&&i.collision.enabled&&!e._simulationEnabled){const s=e._body;if(s){switch(this.addBody(s,e._group,e._mask),e._type){case Fe:this._dynamic.push(e),e.syncEntityToBody();break;case ai:this._kinematic.push(e);break;case ns:e.syncEntityToBody();break}i.collision.type==="compound"&&this._compounds.push(i.collision),s.activate(),e._simulationEnabled=!0,e.fire("simulationenabled")}}}disableSimulation(e){const i=e._body;if(i&&e._simulationEnabled){let s=this._compounds.indexOf(e.entity.collision);s>-1&&this._compounds.splice(s,1),s=this._dynamic.indexOf(e),s>-1&&this._dynamic.splice(s,1),s=this._kinematic.indexOf(e),s>-1&&this._kinematic.splice(s,1),this.removeBody(i),e._simulationEnabled=!1,e.fire("simulationdisabled")}}addTrigger(e){this._triggers.indexOf(e)<0&&(this.addBody(e.body,_c,An^_c),this._triggers.push(e))}removeTrigger(e){const i=this._triggers.indexOf(e);i>-1&&(this.removeBody(e.body),this._triggers.splice(i,1))}raycastFirst(e,i,s={}){return s.filterTags||s.filterCallback?(s.sort=!0,this.raycastAll(e,i,s)[0]||null):this._world.raycastFirst(e,i,s)}raycastAll(e,i,s={}){const a=this._world.raycastAll(e,i,s);return s.sort&&a.sort((r,n)=>r.hitFraction-n.hitFraction),a}_storeCollision(e,i){let s=!1;const a=e.guid;return this.collisions[a]=this.collisions[a]||{others:[],entity:e},this.collisions[a].others.indexOf(i)<0&&(this.collisions[a].others.push(i),s=!0),this.frameCollisions[a]=this.frameCollisions[a]||{others:[],entity:e},this.frameCollisions[a].others.push(i),s}_createReverseContactPoint(e){const i=this.contactPointPool.allocate();return i.localPoint.copy(e.localPointOther),i.localPointOther.copy(e.localPoint),i.point.copy(e.pointOther),i.pointOther.copy(e.point),i.normal.copy(e.normal),i.impulse=e.impulse,i}_createSingleContactResult(e,i,s){const a=this.singleContactResultPool.allocate();return a.a=e,a.b=i,a.localPointA=s.localPoint,a.localPointB=s.localPointOther,a.pointA=s.point,a.pointB=s.pointOther,a.normal=s.normal,a.impulse=s.impulse,a}_createContactResult(e,i){const s=this.contactResultPool.allocate();return s.other=e,s.contacts=i,s}_cleanOldCollisions(){for(const e in this.collisions)if(this.collisions.hasOwnProperty(e)){const i=this.frameCollisions[e],s=this.collisions[e],a=s.entity,r=a.collision,n=a.rigidbody,l=s.others;let f=l.length;for(;f--;){const h=l[f];(!i||i.others.indexOf(h)<0)&&(l.splice(f,1),a.trigger?(r&&r.fire("triggerleave",h),h.rigidbody&&h.rigidbody.fire("triggerleave",a)):h.trigger||(n&&n.fire("collisionend",h),r&&r.fire("collisionend",h)))}l.length===0&&delete this.collisions[e]}}clearEntityCollisions(e){delete this.collisions[e.guid]}_hasContactEvent(e){const i=e.collision;if(i&&(i.hasEvent("collisionstart")||i.hasEvent("collisionend")||i.hasEvent("contact")))return!0;const s=e.rigidbody;return s&&(s.hasEvent("collisionstart")||s.hasEvent("collisionend")||s.hasEvent("contact"))}onContactsBegin(){this.frameCollisions={}}onContactPair(e){const i=e.entityA,s=e.entityB,a=[],r=[];let n;if(e.triggerA||e.triggerB){const l=i.collision&&(i.collision.hasEvent("triggerenter")||i.collision.hasEvent("triggerleave")),d=s.collision&&(s.collision.hasEvent("triggerenter")||s.collision.hasEvent("triggerleave")),f=i.rigidbody&&(i.rigidbody.hasEvent("triggerenter")||i.rigidbody.hasEvent("triggerleave")),h=s.rigidbody&&(s.rigidbody.hasEvent("triggerenter")||s.rigidbody.hasEvent("triggerleave"));l&&(n=this._storeCollision(i,s),n&&!e.triggerB&&i.collision.fire("triggerenter",s)),d&&(n=this._storeCollision(s,i),n&&!e.triggerA&&s.collision.fire("triggerenter",i)),f&&(n||(n=this._storeCollision(s,i)),n&&i.rigidbody.fire("triggerenter",s)),h&&(n||(n=this._storeCollision(i,s)),n&&s.rigidbody.fire("triggerenter",i))}else{const l=this._hasContactEvent(i),d=this._hasContactEvent(s),f=this.hasEvent("contact");if(f||l||d){const h=e.contactCount;for(let u=0;u<h;u++){const p=this.contactPointPool.allocate();if(e.readContact(u,p),(l||d)&&(a.push(p),r.push(this._createReverseContactPoint(p))),f){const m=this._createSingleContactResult(i,s,p);this.fire("contact",m)}}if(l){const u=this._createContactResult(s,a);n=this._storeCollision(i,s),i.collision&&(i.collision.fire("contact",u),n&&i.collision.fire("collisionstart",u)),i.rigidbody&&(i.rigidbody.fire("contact",u),n&&i.rigidbody.fire("collisionstart",u))}if(d){const u=this._createContactResult(i,r);n=this._storeCollision(s,i),s.collision&&(s.collision.fire("contact",u),n&&s.collision.fire("collisionstart",u)),s.rigidbody&&(s.rigidbody.fire("contact",u),n&&s.rigidbody.fire("collisionstart",u))}}}}onContactsEnd(){this._cleanOldCollisions(),this.contactPointPool.freeAll(),this.contactResultPool.freeAll(),this.singleContactResultPool.freeAll()}onUpdate(e){let i,s;this._stats.physicsStart=Ee(),this._world.setGravity(this.gravity);const a=this._triggers;for(i=0,s=a.length;i<s;i++)a[i].updateTransform();const r=this._compounds;for(i=0,s=r.length;i<s;i++)r[i]._updateCompound();const n=this._kinematic;for(i=0,s=n.length;i<s;i++)n[i]._updateKinematic();this._world.step(e,this.maxSubSteps,this.fixedTimeStep);const l=this._dynamic;for(i=0,s=l.length;i<s;i++)l[i]._updateDynamic();this._world.flushContacts(),this._stats.physicsTime=Ee()-this._stats.physicsStart}destroy(){super.destroy(),this.app.systems.off("update",this.onUpdate,this),this._world&&(this._world.destroy(),this._world=null)}}o(Hh,"EVENT_CONTACT","contact");const MA="inline",NA="immersive-vr",OA="immersive-ar",FA="viewer",IC="left",UA="cpu-optimized",BA="gpu-optimized",kA="luminance-alpha",zA="unsigned-short",VA="float32";class bC{constructor(t,e){o(this,"_index");o(this,"_hand");o(this,"_joints",[]);o(this,"_tip",null);this._index=t,this._hand=e,this._hand._fingers.push(this)}get index(){return this._index}get hand(){return this._hand}get joints(){return this._joints}get tip(){return this._tip}}const yc=bi.browser&&window.XRHand?["thumb-tip","index-finger-tip","middle-finger-tip","ring-finger-tip","pinky-finger-tip"]:[],Wh={};for(let c=0;c<yc.length;c++)Wh[yc[c]]=!0;class xc{constructor(t,e,i,s=null){o(this,"_index");o(this,"_id");o(this,"_hand");o(this,"_finger");o(this,"_wrist");o(this,"_tip");o(this,"_radius",null);o(this,"_localTransform",new b);o(this,"_worldTransform",new b);o(this,"_localPosition",new _);o(this,"_localRotation",new G);o(this,"_position",new _);o(this,"_rotation",new G);o(this,"_dirtyLocal",!0);this._index=t,this._id=e,this._hand=i,this._finger=s,this._wrist=e==="wrist",this._tip=this._finger&&!!Wh[e]}update(t){this._dirtyLocal=!0,this._radius=t.radius,this._localPosition.copy(t.transform.position),this._localRotation.copy(t.transform.orientation)}_updateTransforms(){this._dirtyLocal&&(this._dirtyLocal=!1,this._localTransform.setTRS(this._localPosition,this._localRotation,_.ONE));const e=this._hand._manager.camera.parent;e?this._worldTransform.mul2(e.getWorldTransform(),this._localTransform):this._worldTransform.copy(this._localTransform)}getPosition(){return this._updateTransforms(),this._worldTransform.getTranslation(this._position),this._position}getRotation(){return this._updateTransforms(),this._rotation.setFromMat4(this._worldTransform),this._rotation}get id(){return this._id}get index(){return this._index}get hand(){return this._hand}get finger(){return this._finger}get wrist(){return this._wrist}get tip(){return this._tip}get radius(){return this._radius||.005}}let pa=[];const qt=new _,la=new _,Cc=new _;bi.browser&&window.XRHand&&(pa=[["thumb-metacarpal","thumb-phalanx-proximal","thumb-phalanx-distal","thumb-tip"],["index-finger-metacarpal","index-finger-phalanx-proximal","index-finger-phalanx-intermediate","index-finger-phalanx-distal","index-finger-tip"],["middle-finger-metacarpal","middle-finger-phalanx-proximal","middle-finger-phalanx-intermediate","middle-finger-phalanx-distal","middle-finger-tip"],["ring-finger-metacarpal","ring-finger-phalanx-proximal","ring-finger-phalanx-intermediate","ring-finger-phalanx-distal","ring-finger-tip"],["pinky-finger-metacarpal","pinky-finger-phalanx-proximal","pinky-finger-phalanx-intermediate","pinky-finger-phalanx-distal","pinky-finger-tip"]]);class wn extends pe{constructor(e){super();o(this,"_manager");o(this,"_inputSource");o(this,"_tracking",!1);o(this,"_fingers",[]);o(this,"_joints",[]);o(this,"_jointsById",{});o(this,"_tips",[]);o(this,"_wrist",null);const i=e._xrInputSource.hand;if(this._manager=e._manager,this._inputSource=e,i.get("wrist")){const s=new xc(0,"wrist",this,null);this._wrist=s,this._joints.push(s),this._jointsById.wrist=s}for(let s=0;s<pa.length;s++){const a=new bC(s,this);for(let r=0;r<pa[s].length;r++){const n=pa[s][r];if(!i.get(n))continue;const l=new xc(r,n,this,a);this._joints.push(l),this._jointsById[n]=l,l.tip&&(this._tips.push(l),a._tip=l),a._joints.push(l)}}}update(e){const i=this._inputSource._xrInputSource;for(let h=0;h<this._joints.length;h++){const u=this._joints[h],p=i.hand.get(u._id);if(p){let m;if(e.session.visibilityState!=="hidden"&&(m=e.getJointPose(p,this._manager._referenceSpace)),m)u.update(m),u.wrist&&!this._tracking&&(this._tracking=!0,this.fire("tracking"));else if(u.wrist){this._tracking&&(this._tracking=!1,this.fire("trackinglost"));break}}}const s=this._jointsById["thumb-metacarpal"],a=this._jointsById["thumb-tip"],r=this._jointsById["index-finger-phalanx-proximal"],n=this._jointsById["index-finger-tip"],l=this._jointsById["ring-finger-phalanx-proximal"],d=this._jointsById["pinky-finger-phalanx-proximal"];if(s&&a&&r&&n&&l&&d){this._inputSource._dirtyRay=!0,this._inputSource._rayLocal.origin.lerp(a._localPosition,n._localPosition,.5);let h=s,u=d;if(this._inputSource.handedness===IC){const p=h;h=u,u=p}qt.sub2(h._localPosition,this._wrist._localPosition),la.sub2(u._localPosition,this._wrist._localPosition),Cc.cross(qt,la).normalize(),qt.lerp(r._localPosition,l._localPosition,.5),qt.sub(this._wrist._localPosition).normalize(),this._inputSource._rayLocal.direction.lerp(Cc,qt,.5).normalize()}this._fingerIsClosed(1)&&this._fingerIsClosed(2)&&this._fingerIsClosed(3)&&this._fingerIsClosed(4)?this._inputSource._squeezing||(this._inputSource._squeezing=!0,this._inputSource.fire("squeezestart"),this._manager.input.fire("squeezestart",this._inputSource)):this._inputSource._squeezing&&(this._inputSource._squeezing=!1,this._inputSource.fire("squeeze"),this._manager.input.fire("squeeze",this._inputSource),this._inputSource.fire("squeezeend"),this._manager.input.fire("squeezeend",this._inputSource))}_fingerIsClosed(e){const i=this._fingers[e];return qt.sub2(i.joints[0]._localPosition,i.joints[1]._localPosition).normalize(),la.sub2(i.joints[2]._localPosition,i.joints[3]._localPosition).normalize(),qt.dot(la)<-.8}getJointById(e){return this._jointsById[e]||null}get fingers(){return this._fingers}get joints(){return this._joints}get tips(){return this._tips}get wrist(){return this._wrist}get tracking(){return this._tracking}}o(wn,"EVENT_TRACKING","tracking"),o(wn,"EVENT_TRACKINGLOST","trackinglost");const Ac=new _,wc=new G;let RC=0;class Ie extends pe{constructor(e,i){super();o(this,"_id");o(this,"_manager");o(this,"_xrInputSource");o(this,"_ray",new Do);o(this,"_rayLocal",new Do);o(this,"_grip",!1);o(this,"_hand",null);o(this,"_velocitiesAvailable",!1);o(this,"_velocitiesTimestamp",Ee());o(this,"_localTransform",null);o(this,"_worldTransform",null);o(this,"_position",new _);o(this,"_rotation",new G);o(this,"_localPosition",null);o(this,"_localPositionLast",null);o(this,"_localRotation",null);o(this,"_linearVelocity",null);o(this,"_dirtyLocal",!0);o(this,"_dirtyRay",!1);o(this,"_selecting",!1);o(this,"_squeezing",!1);o(this,"_elementInput",!0);o(this,"_elementEntity",null);o(this,"_hitTestSources",[]);this._id=++RC,this._manager=e,this._xrInputSource=i,i.hand&&(this._hand=new wn(this))}get id(){return this._id}get inputSource(){return this._xrInputSource}get targetRayMode(){return this._xrInputSource.targetRayMode}get handedness(){return this._xrInputSource.handedness}get profiles(){return this._xrInputSource.profiles}get grip(){return this._grip}get hand(){return this._hand}get gamepad(){return this._xrInputSource.gamepad||null}get selecting(){return this._selecting}get squeezing(){return this._squeezing}set elementInput(e){this._elementInput!==e&&(this._elementInput=e,this._elementInput||(this._elementEntity=null))}get elementInput(){return this._elementInput}get elementEntity(){return this._elementEntity}get hitTestSources(){return this._hitTestSources}update(e){if(this._hand)this._hand.update(e);else{const i=this._xrInputSource.gripSpace;if(i){const a=e.getPose(i,this._manager._referenceSpace);if(a){this._grip||(this._grip=!0,this._localTransform=new b,this._worldTransform=new b,this._localPositionLast=new _,this._localPosition=new _,this._localRotation=new G,this._linearVelocity=new _);const r=Ee(),n=(r-this._velocitiesTimestamp)/1e3;this._velocitiesTimestamp=r,this._dirtyLocal=!0,this._localPositionLast.copy(this._localPosition),this._localPosition.copy(a.transform.position),this._localRotation.copy(a.transform.orientation),this._velocitiesAvailable=!0,this._manager.input.velocitiesSupported&&a.linearVelocity?this._linearVelocity.copy(a.linearVelocity):n>0&&(Ac.sub2(this._localPosition,this._localPositionLast).divScalar(n),this._linearVelocity.lerp(this._linearVelocity,Ac,.15))}else this._velocitiesAvailable=!1}const s=e.getPose(this._xrInputSource.targetRaySpace,this._manager._referenceSpace);s&&(this._dirtyRay=!0,this._rayLocal.origin.copy(s.transform.position),this._rayLocal.direction.set(0,0,-1),wc.copy(s.transform.orientation),wc.transformVector(this._rayLocal.direction,this._rayLocal.direction))}}_updateTransforms(){this._dirtyLocal&&(this._dirtyLocal=!1,this._localTransform.setTRS(this._localPosition,this._localRotation,_.ONE));const e=this._manager.camera.parent;e?this._worldTransform.mul2(e.getWorldTransform(),this._localTransform):this._worldTransform.copy(this._localTransform)}_updateRayTransforms(){const e=this._dirtyRay;this._dirtyRay=!1;const i=this._manager.camera.parent;if(i){const s=i.getWorldTransform();s.getTranslation(this._position),this._rotation.setFromMat4(s),this._rotation.transformVector(this._rayLocal.origin,this._ray.origin),this._ray.origin.add(this._position),this._rotation.transformVector(this._rayLocal.direction,this._ray.direction)}else e&&(this._ray.origin.copy(this._rayLocal.origin),this._ray.direction.copy(this._rayLocal.direction))}getPosition(){return this._grip?(this._updateTransforms(),this._worldTransform.getTranslation(this._position),this._position):null}getLocalPosition(){return this._localPosition}getRotation(){return this._grip?(this._updateTransforms(),this._rotation.setFromMat4(this._worldTransform),this._rotation):null}getLocalRotation(){return this._localRotation}getLinearVelocity(){return this._velocitiesAvailable?this._linearVelocity:null}getOrigin(){return this._updateRayTransforms(),this._ray.origin}getDirection(){return this._updateRayTransforms(),this._ray.direction}hitTestStart(e={}){e.inputSource=this,e.profile=this._xrInputSource.profiles[0];const i=e.callback;e.callback=(s,a)=>{a&&this.onHitTestSourceAdd(a),i&&i(s,a)},this._manager.hitTest.start(e)}onHitTestSourceAdd(e){this._hitTestSources.push(e),this.fire("hittest:add",e),e.on("result",(i,s,a,r)=>{a===this&&this.fire("hittest:result",e,i,s,r)}),e.once("remove",()=>{this.onHitTestSourceRemove(e),this.fire("hittest:remove",e)})}onHitTestSourceRemove(e){const i=this._hitTestSources.indexOf(e);i!==-1&&this._hitTestSources.splice(i,1)}}o(Ie,"EVENT_REMOVE","remove"),o(Ie,"EVENT_SELECT","select"),o(Ie,"EVENT_SELECTSTART","selectstart"),o(Ie,"EVENT_SELECTEND","selectend"),o(Ie,"EVENT_SQUEEZE","squeeze"),o(Ie,"EVENT_SQUEEZESTART","squeezestart"),o(Ie,"EVENT_SQUEEZEEND","squeezeend"),o(Ie,"EVENT_HITTESTADD","hittest:add"),o(Ie,"EVENT_HITTESTREMOVE","hittest:remove"),o(Ie,"EVENT_HITTESTRESULT","hittest:result");new se;new Proxy({},{get(c,t){return ne.get(rt().graphicsDevice,ae).get(t)},set(c,t,e){return ne.get(rt().graphicsDevice,ae).set(t,e),!0}});Lh.prototype.renderComposition=function(c){rt().renderComposition(c)};Object.defineProperty(zi.prototype,"shader",{set:function(c){},get:function(){return null}});Object.defineProperty(zi.prototype,"blend",{set:function(c){this.blendState.blend=c},get:function(){return this.blendState.blend}});Object.defineProperty(Le.prototype,"shininess",{get:function(){return this.gloss*100},set:function(c){this.gloss=c*.01}});Object.defineProperty(Le.prototype,"useGammaTonemap",{get:function(){return this.useTonemap},set:function(c){this.useTonemap=c}});Object.defineProperty(Le.prototype,"anisotropy",{get:function(){const c=Math.sign(Math.cos(this.anisotropyRotation*I.DEG_TO_RAD*2));return this.anisotropyIntensity*c},set:function(c){this.anisotropyIntensity=Math.abs(c),c>=0?this.anisotropyRotation=0:this.anisotropyRotation=90}});function Ke(c,t){Object.defineProperty(Le.prototype,t,{get:function(){return this[c]},set:function(e){this[c]=e}})}function Za(c){Object.defineProperty(Le.prototype,c,{get:function(){return!0},set:function(t){}})}Za("sheenTint");Za("diffuseTint");Za("emissiveTint");Za("ambientTint");Ke("specularTint","specularMapTint");Ke("aoVertexColor","aoMapVertexColor");Ke("diffuseVertexColor","diffuseMapVertexColor");Ke("specularVertexColor","specularMapVertexColor");Ke("emissiveVertexColor","emissiveMapVertexColor");Ke("metalnessVertexColor","metalnessMapVertexColor");Ke("glossVertexColor","glossMapVertexColor");Ke("opacityVertexColor","opacityMapVertexColor");Ke("lightVertexColor","lightMapVertexColor");Ke("sheenGloss","sheenGlossiness");Ke("clearCoatGloss","clearCoatGlossiness");function Xh(c,t){c!=="pass"&&Object.defineProperty(bs.prototype,c,{get:function(){return this.litOptions[t||c]},set:function(e){this.litOptions[t||c]=e}})}Xh("refraction","useRefraction");const MC=new bh,Lc=Object.getOwnPropertyNames(MC);for(const c in Lc)Xh(Lc[c]);xi.prototype.getAssetById=function(c){return this.get(c)};Object.defineProperty(Ie.prototype,"ray",{get:function(){return this._rayLocal}});Object.defineProperty(Ie.prototype,"position",{get:function(){return this._localPosition}});Object.defineProperty(Ie.prototype,"rotation",{get:function(){return this._localRotation}});Et.prototype.isFullscreen=function(){return!!document.fullscreenElement};Et.prototype.enableFullscreen=function(c,t,e){c=c||this.graphicsDevice.canvas;const i=function(){t(),document.removeEventListener("fullscreenchange",i)},s=function(){e(),document.removeEventListener("fullscreenerror",s)};t&&document.addEventListener("fullscreenchange",i,!1),e&&document.addEventListener("fullscreenerror",s,!1),c.requestFullscreen?c.requestFullscreen(Element.ALLOW_KEYBOARD_INPUT):e()};Et.prototype.disableFullscreen=function(c){const t=function(){c(),document.removeEventListener("fullscreenchange",t)};c&&document.addEventListener("fullscreenchange",t,!1),document.exitFullscreen()};Et.prototype.getSceneUrl=function(c){const t=this.scenes.find(c);return t?t.url:null};Et.prototype.loadScene=function(c,t){this.scenes.loadScene(c,t)};Et.prototype.loadSceneHierarchy=function(c,t){this.scenes.loadSceneHierarchy(c,t)};Et.prototype.loadSceneSettings=function(c,t){this.scenes.loadSceneSettings(c,t)};tC.prototype.setVisible=function(c){this.enabled=c};Object.defineProperty(mt.prototype,"bodyType",{get:function(){return this.type},set:function(c){this.type=c}});mt.prototype.syncBodyToEntity=function(){this._updateDynamic()};Hh.prototype.setGravity=function(){arguments.length===1?this.gravity.copy(arguments[0]):this.gravity.set(arguments[0],arguments[1],arguments[2])};const os={id:"shop",label:"爆速飯店",address:"中央通り 1-1",x:0,z:132,color:"#dc291a"},Rs=[{id:"house_a",label:"青い屋根の家",address:"さくら通り 3-15",x:-102,z:-130,color:"#348ac7"},{id:"house_b",label:"夕日荘",address:"西町 2-8",x:-110,z:16,color:"#d46242"},{id:"house_c",label:"ひかりハイツ",address:"東町 4-20",x:100,z:-36,color:"#e0a52d"},{id:"house_d",label:"緑風館",address:"公園前 1-6",x:108,z:-110,color:"#4f9a62"},{id:"house_e",label:"白雲邸",address:"中央北 5-2",x:4,z:-140,color:"#d9d2c0"}],Dc=new Map;function it(c,t,e=0){const i=`${t}:${e}`,s=Dc.get(i);if(s)return s;const a=t.replace("#",""),r=new U(parseInt(a.slice(0,2),16)/255,parseInt(a.slice(2,4),16)/255,parseInt(a.slice(4,6),16)/255),n=new Le;return n.diffuse=r,n.gloss=35,n.metalness=.05,e>0&&(n.emissive=r,n.emissiveIntensity=e),n.update(),Dc.set(i,n),n}function D(c,t,e,i,s,a=c.root){const r=new Q(t);return r.addComponent("render",{type:"box",material:it(c,s)}),r.setLocalPosition(...e),r.setLocalScale(...i),a.addChild(r),r}function Rt(c,t,e,i,s,a=c.root){const r=new Q(t);return r.addComponent("render",{type:"cylinder",material:it(c,s)}),r.setLocalPosition(...e),r.setLocalScale(...i),a.addChild(r),r}const NC="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20240%20360'%20role='img'%20aria-labelledby='title%20desc'%3e%3ctitle%20id='title'%3e料理を外で待つお客さん%3c/title%3e%3cdesc%20id='desc'%3eスマートフォンを手に、玄関先で配達を待っている人物%3c/desc%3e%3cdefs%3e%3cfilter%20id='goldGlow'%20x='-40%25'%20y='-30%25'%20width='180%25'%20height='170%25'%3e%3cfeGaussianBlur%20stdDeviation='7'%20result='blur'/%3e%3cfeFlood%20flood-color='%23ffd33d'%20flood-opacity='.9'/%3e%3cfeComposite%20in2='blur'%20operator='in'/%3e%3cfeMerge%3e%3cfeMergeNode/%3e%3cfeMergeNode%20in='SourceGraphic'/%3e%3c/feMerge%3e%3c/filter%3e%3clinearGradient%20id='jacket'%20x1='0'%20y1='0'%20x2='0'%20y2='1'%3e%3cstop%20stop-color='%2339a6dd'/%3e%3cstop%20offset='1'%20stop-color='%23165884'/%3e%3c/linearGradient%3e%3c/defs%3e%3cellipse%20cx='120'%20cy='334'%20rx='62'%20ry='13'%20fill='%23130d09'%20opacity='.35'/%3e%3cg%20filter='url(%23goldGlow)'%20stroke='%233a1b13'%20stroke-width='6'%20stroke-linejoin='round'%20stroke-linecap='round'%3e%3ccircle%20cx='120'%20cy='68'%20r='36'%20fill='%23f2bf91'/%3e%3cpath%20d='M84%2066c1-34%2018-49%2042-47%2023%202%2037%2020%2031%2053-12-7-19-20-24-32-13%2017-30%2025-49%2026z'%20fill='%2335251f'/%3e%3cpath%20d='M99%2067h1m39%200h1'%20stroke-width='8'/%3e%3cpath%20d='M109%2086q12%209%2024%200'%20fill='none'%20stroke-width='4'/%3e%3cpath%20d='M82%20124q38-29%2076%200l18%20113H64z'%20fill='url(%23jacket)'/%3e%3cpath%20d='M91%20133l29%2031%2029-31'%20fill='%23fff4d6'/%3e%3cpath%20d='M67%20143l-28%2073%2028%2013%2028-66'%20fill='%23f2bf91'/%3e%3cpath%20d='M162%20143l20%2057-25%209-21-50'%20fill='%23f2bf91'/%3e%3crect%20x='163'%20y='184'%20width='31'%20height='48'%20rx='5'%20fill='%23252b35'/%3e%3ccircle%20cx='178.5'%20cy='222'%20r='2'%20fill='%23ffd33d'%20stroke='none'/%3e%3cpath%20d='M78%20235l-9%2094h39l12-68%2012%2068h39l-9-94z'%20fill='%233c3f4b'/%3e%3cpath%20d='M68%20329h42v16H54q-5-13%2014-16zm104%200h-42v16h56q5-13-14-16z'%20fill='%23eae5d8'/%3e%3cpath%20d='M48%20214q-15%2036%209%2059h38q20-23%202-58z'%20fill='%23fff0bd'/%3e%3cpath%20d='M50%20226h45'%20fill='none'%20stroke='%23d92c1d'%20stroke-width='8'/%3e%3cpath%20d='M63%20214v-14q0-15%2014-15t14%2015v14'%20fill='none'%20stroke='%237d160e'%20stroke-width='7'/%3e%3c/g%3e%3c/svg%3e";class OC{constructor(t){o(this,"blockers",[]);o(this,"destinationMarkers",new Map);o(this,"shopMarker");o(this,"customerMaterial",null);this.app=t,t.scene.ambientLight=new U(.36,.39,.46),t.scene.skyboxMip=2,this.createGround(),this.createRoads(),this.createBuildings(),this.createPark(),this.createStreetDetails(),this.shopMarker=this.createLocation(os,!0);for(const e of Rs)this.destinationMarkers.set(e.id,this.createLocation(e,!1))}setObjective(t){this.shopMarker.enabled=t===os.id;for(const[e,i]of this.destinationMarkers)i.enabled=e===t}getLocation(t){if(t===os.id)return os;const e=Rs.find(i=>i.id===t);if(!e)throw new Error(`Unknown location: ${t}`);return e}getBrokenCount(){return this.blockers.filter(t=>{var e;return(e=t.breakable)==null?void 0:e.broken}).length}createGround(){D(this.app,"ground",[0,-.7,0],[380,1,380],"#637556");for(let t=-6;t<=6;t+=1)for(let e=-6;e<=6;e+=1)(t+e)%2===0&&D(this.app,"grass-patch",[t*27,-.15,e*27],[25,.08,25],"#6f845e")}createRoads(){const t="#30343a";D(this.app,"road-ns",[0,0,0],[25,.25,376],t),D(this.app,"road-ew",[0,.01,0],[376,.25,25],t),D(this.app,"road-west",[-104,.01,76],[168,.25,18],t),D(this.app,"road-east",[104,.01,-84],[168,.25,18],t),D(this.app,"alley-shortcut",[-84,.02,-76],[12,.26,116],"#3d4248"),D(this.app,"park-shortcut",[86,.03,58],[14,.27,136],"#a7966b");for(let e=-176;e<=176;e+=12)D(this.app,"line",[0,.16,e],[.45,.05,5.5],"#f0d35b");for(let e=-176;e<=176;e+=12)D(this.app,"line",[e,.17,0],[5.5,.05,.45],"#f0d35b");for(const e of[-50,45,100])for(let i=-9;i<=9;i+=3)D(this.app,"crosswalk-stripe",[i,.19,e],[1.5,.04,9],"#eee8d8");for(const e of[-104,104])for(let i=-9;i<=9;i+=3)D(this.app,"crosswalk-stripe",[e,.2,i],[9,.04,1.5],"#eee8d8")}createBuildings(){[[-106,-76,30,28,"#b67b5e"],[-110,126,34,26,"#d09b61"],[108,88,29,27,"#738ba0"],[110,142,31,18,"#a86655"],[-138,-140,28,20,"#5c7897"],[138,-138,26,22,"#6d9b72"],[136,-36,28,22,"#c09955"],[-140,20,25,23,"#b66c56"]].forEach(([e,i,s,a,r],n)=>this.building(`building-${n}`,e,i,s,a,r))}building(t,e,i,s,a,r){const n=9+Math.abs(e+i)*7%8;D(this.app,t,[e,n/2,i],[s,n,a],r),D(this.app,`${t}-roof`,[e,n+.6,i],[s+1.2,1,a+1.2],"#553930");for(let l=0;l<2;l+=1)for(let d=-1;d<=1;d+=1)D(this.app,"window",[e+d*(s/4),3.5+l*4,i+a/2+.06],[2.2,2.1,.12],"#f6cd72");this.blockers.push({minX:e-s/2-1,maxX:e+s/2+1,minZ:i-a/2-1,maxZ:i+a/2+1})}createPark(){D(this.app,"park",[92,.02,62],[58,.22,48],"#55784c");for(const[t,e]of[[71,49],[77,76],[107,47],[113,74]]){const i=new Q("breakable-tree");i.setPosition(t,0,e),this.app.root.addChild(i),Rt(this.app,"tree-trunk",[0,2,0],[1.1,4,1.1],"#6d4226",i);const s=new Q("tree-crown");s.addComponent("render",{type:"sphere",material:it(this.app,"#35673b")}),s.setLocalPosition(0,6,0),s.setLocalScale(5,5,5),i.addChild(s),this.blockers.push({minX:t-1.4,maxX:t+1.4,minZ:e-1.4,maxZ:e+1.4,breakable:{entity:i,broken:!1}})}}createStreetDetails(){for(let t=-175;t<=175;t+=25)for(const e of[-15,15]){const i=new Q("breakable-lamp");i.setPosition(e,0,t),this.app.root.addChild(i),Rt(this.app,"lamp",[0,3,0],[.22,6,.22],"#22242a",i);const s=new Q("lamp-glow");s.addComponent("light",{type:"omni",color:new U(1,.65,.25),intensity:1.1,range:13,castShadows:!1}),s.setLocalPosition(0,6,0),i.addChild(s);const a=D(this.app,"bulb",[0,6,0],[.8,.5,.8],"#ffd05a",i);a.render&&(a.render.material=it(this.app,"#ffd05a",1.8)),this.blockers.push({minX:e-.75,maxX:e+.75,minZ:t-.75,maxZ:t+.75,breakable:{entity:i,broken:!1}})}for(let t=-175;t<=175;t+=25)D(this.app,"curb",[t,.35,-13.5],[10,.5,1],"#d8d0b9"),D(this.app,"curb",[t,.35,13.5],[10,.5,1],"#d8d0b9")}createLocation(t,e){const i=new Q(`${t.id}-location`);i.setPosition(t.x,0,t.z),this.app.root.addChild(i),e&&(D(this.app,"shop-body",[0,4,0],[24,8,16],"#b8291b",i),D(this.app,"shop-roof",[0,8.5,0],[27,1.4,19],"#f0c42f",i),D(this.app,"shop-door",[0,2.4,-8.1],[5,4.8,.3],"#261a13",i),this.createShopSign(i));const s=new Q(`${t.id}-marker`);s.setLocalPosition(t.x,1,t.z),this.app.root.addChild(s);const a=new Q(`${t.id}-ring`);a.addComponent("render",{type:"cylinder",material:it(this.app,e?"#44e779":"#ffd33d",1.4)}),a.setLocalScale(6,.15,6),s.addChild(a);const r=new Q(`${t.id}-beam`);return r.addComponent("render",{type:"cylinder",material:it(this.app,e?"#44e779":"#ffd33d",.8)}),r.setLocalPosition(e?0:-3.2,7,0),r.setLocalScale(.35,12,.35),s.addChild(r),e||this.createWaitingCustomer(s),s.enabled=!1,s}createWaitingCustomer(t){const e=this.createCustomerMaterial();for(const i of[0,90]){const s=new Q("waiting-customer-svg");s.addComponent("render",{type:"plane",material:e,castShadows:!1}),s.setLocalPosition(0,2.6,0),s.setLocalScale(4.8,1,7.2),s.setLocalEulerAngles(90,i,0),t.addChild(s)}}createCustomerMaterial(){if(this.customerMaterial)return this.customerMaterial;const t=new Le;this.customerMaterial=t,t.diffuse=new U(1,1,1),t.emissive=new U(.25,.22,.12),t.emissiveIntensity=.4,t.blendType=St,t.depthWrite=!1,t.cull=gs;const e=new Image;return e.onload=()=>{const i=document.createElement("canvas");i.width=256,i.height=512;const s=i.getContext("2d");if(!s)return;s.clearRect(0,0,i.width,i.height),s.drawImage(e,8,64,240,360);const a=new ce(this.app.graphicsDevice,{name:"waiting-customer-svg",width:i.width,height:i.height,minFilter:Ae,magFilter:Ae,addressU:q,addressV:q,flipY:!0,mipmaps:!1});a.setSource(i),t.diffuseMap=a,t.emissiveMap=a,t.opacityMap=a,t.opacityMapChannel="a",t.update()},e.src=NC,t.update(),t}createShopSign(t){D(this.app,"shop-sign-shadow",[0,6.08,-8.34],[14.6,3.25,.48],"#54130d",t);const e=D(this.app,"shop-sign",[0,6.08,-8.61],[13.8,2.72,.12],"#ffd138",t);e.render&&(e.render.material=this.createSignMaterial()),D(this.app,"shop-sign-cap-left",[-7.25,6.08,-8.65],[.45,3.35,.38],"#f3b51b",t),D(this.app,"shop-sign-cap-right",[7.25,6.08,-8.65],[.45,3.35,.38],"#f3b51b",t);for(const i of[-8.25,8.25]){const s=new Q("shop-lantern");s.addComponent("render",{type:"sphere",material:it(this.app,"#f23b22",1.35)}),s.setLocalPosition(i,6.05,-8.75),s.setLocalScale(1.25,1.55,.72),t.addChild(s)}}createSignMaterial(){const t=document.createElement("canvas");t.width=1024,t.height=256;const e=t.getContext("2d");if(!e)return it(this.app,"#ffd138",1.1);const i=e.createLinearGradient(0,0,0,t.height);i.addColorStop(0,"#ffe66a"),i.addColorStop(.52,"#ffd02b"),i.addColorStop(1,"#e8a70d"),e.fillStyle=i,e.fillRect(0,0,t.width,t.height),e.strokeStyle="#7d160e",e.lineWidth=22,e.strokeRect(11,11,t.width-22,t.height-22),e.strokeStyle="#fff0a2",e.lineWidth=5,e.strokeRect(30,30,t.width-60,t.height-60),e.textAlign="center",e.textBaseline="middle",e.font='900 142px "Noto Sans JP", "Hiragino Kaku Gothic ProN", sans-serif',e.lineJoin="round",e.strokeStyle="#fff4b5",e.lineWidth=19,e.strokeText("爆速飯店",t.width/2,t.height/2+3),e.strokeStyle="#571008",e.lineWidth=10,e.strokeText("爆速飯店",t.width/2,t.height/2+3),e.fillStyle="#c82516",e.fillText("爆速飯店",t.width/2,t.height/2+3);const s=new ce(this.app.graphicsDevice,{name:"bakusoku-sign-texture",width:t.width,height:t.height,minFilter:Ae,magFilter:Ae,addressU:q,addressV:q,flipY:!0});s.setSource(t);const a=new Le;return a.diffuseMap=s,a.emissiveMap=s,a.emissive=new U(.72,.54,.22),a.emissiveIntensity=.78,a.gloss=24,a.update(),a}resolveCollision(t,e){const i=Math.abs(t.x)>188||Math.abs(t.z)>188,s=this.blockers.find(r=>{var n;return t.x>r.minX&&t.x<r.maxX&&t.z>r.minZ&&t.z<r.maxZ&&!((n=r.breakable)!=null&&n.broken)});return s!=null&&s.breakable&&(s.breakable.broken=!0,s.breakable.entity.rotateLocal(0,0,t.x>=e.x?-78:78),s.breakable.entity.translateLocal(0,-.45,0)),i||!!s?(t.copy(e),!0):!1}}class FC{constructor(){o(this,"down",new Set);o(this,"pressed",new Set);o(this,"pointerCodes",new Map);window.addEventListener("keydown",e=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(e.code)&&e.preventDefault(),this.down.has(e.code)||this.pressed.add(e.code),this.down.add(e.code)}),window.addEventListener("keyup",e=>this.down.delete(e.code)),window.addEventListener("blur",()=>this.down.clear()),document.addEventListener("pointerdown",e=>{const i=e.target.closest("[data-input]"),s=i==null?void 0:i.dataset.input;!i||!s||(e.preventDefault(),i.setPointerCapture(e.pointerId),this.pointerCodes.set(e.pointerId,s),this.down.add(s),this.pressed.add(s),i.classList.add("is-pressed"))});const t=e=>{var s;const i=this.pointerCodes.get(e.pointerId);i&&(this.pointerCodes.delete(e.pointerId),[...this.pointerCodes.values()].includes(i)||this.down.delete(i),(s=e.target.closest("[data-input]"))==null||s.classList.remove("is-pressed"))};document.addEventListener("pointerup",t),document.addEventListener("pointercancel",t)}isDown(...t){return t.some(e=>this.down.has(e))}consume(t){const e=this.pressed.has(t);return this.pressed.delete(t),e}}class UC{constructor(t,e,i){o(this,"entity",new Q("delivery-bike"));o(this,"input",new FC);o(this,"speed",0);o(this,"boost",65);o(this,"heading",Math.PI);o(this,"enabled",!1);o(this,"driftTime",0);o(this,"driftAwarded",!1);o(this,"boostBurst",0);o(this,"previous",new _);o(this,"safePosition",new _(0,.55,102));this.app=t,this.city=e,this.events=i,t.root.addChild(this.entity),this.createModel(),this.reset()}update(t){if(this.input.consume("KeyR")&&this.respawn(),!this.enabled){this.speed*=Math.pow(.04,t);return}const e=this.input.isDown("KeyW","ArrowUp"),i=this.input.isDown("KeyS","ArrowDown"),s=this.input.isDown("KeyA","ArrowLeft"),a=this.input.isDown("KeyD","ArrowRight"),r=this.input.isDown("Space")&&(s||a)&&this.speed>22,n=this.input.isDown("ShiftLeft","ShiftRight")&&this.boost>0&&this.speed>12,l=n||this.boostBurst>0?200:160;e?this.speed+=(n?104:this.speed<0?82:62)*t:i?this.speed-=(this.speed>0?72:34)*t:this.speed>0?this.speed=Math.max(0,this.speed-10*t):this.speed=Math.min(0,this.speed+10*t),n?(this.boost=Math.max(0,this.boost-20*t),this.speed+=78*t,this.events.onBoost()):this.boost=Math.min(100,this.boost+2.8*t),this.boostBurst=Math.max(0,this.boostBurst-t),this.speed=Math.max(-35,Math.min(l,this.speed));const d=(s?1:0)-(a?1:0),f=Math.abs(this.speed)/200,h=r?2.25:1.75-f*.72,u=this.speed<0?-1:1;this.heading+=d*u*h*t*Math.min(1,Math.abs(this.speed)/9),d!==0&&this.speed>48&&this.events.onSpill(Math.abs(d)*f*t),r?(this.driftTime+=t,this.entity.setLocalEulerAngles(0,this.heading*180/Math.PI+d*15,-d*9),this.driftTime>.65&&!this.driftAwarded&&(this.driftAwarded=!0,this.boost=Math.min(100,this.boost+18),this.events.onDrift(25))):(this.driftTime>.65&&(this.boostBurst=.65),this.driftTime=0,this.driftAwarded=!1,this.entity.setLocalEulerAngles(0,this.heading*180/Math.PI,-d*Math.min(12,this.speed*.12))),this.previous.copy(this.entity.getPosition());const p=this.speed/3.6,m=this.entity.getPosition().clone();m.x+=Math.sin(this.heading)*p*t,m.z+=Math.cos(this.heading)*p*t,this.city.resolveCollision(m,this.previous)&&(Math.abs(this.speed)>22&&this.events.onCrash(),this.speed*=.25),m.y=.55,this.entity.setPosition(m),this.isOnRoad(m)&&this.safePosition.copy(m)}reset(){this.entity.setPosition(0,.55,102),this.heading=Math.PI,this.speed=0,this.boost=65}stop(){this.speed=0,this.enabled=!1}respawn(){this.entity.setPosition(this.safePosition),this.speed=0,this.events.onCrash()}autoRecover(t=2){const e=this.entity.getPosition().clone();e.x-=Math.sin(this.heading)*t,e.z-=Math.cos(this.heading)*t,e.y=.55,this.entity.setPosition(e),this.speed=14}isOnRoad(t){return Math.abs(t.x)<12||Math.abs(t.z)<12||Math.abs(t.z-76)<9||Math.abs(t.z+84)<9}createModel(){Rt(this.app,"front-wheel",[0,.42,-1.38],[.58,.24,.58],"#17191f",this.entity).setLocalEulerAngles(0,0,90),Rt(this.app,"front-rim",[0,.42,-1.38],[.34,.255,.34],"#c7d0d8",this.entity).setLocalEulerAngles(0,0,90),Rt(this.app,"rear-wheel",[0,.42,1.08],[.62,.26,.62],"#17191f",this.entity).setLocalEulerAngles(0,0,90),Rt(this.app,"rear-rim",[0,.42,1.08],[.36,.275,.36],"#c7d0d8",this.entity).setLocalEulerAngles(0,0,90),D(this.app,"fork-left",[-.24,.83,-1.3],[.1,.94,.12],"#e8edf2",this.entity).setLocalEulerAngles(-8,0,0),D(this.app,"fork-right",[.24,.83,-1.3],[.1,.94,.12],"#e8edf2",this.entity).setLocalEulerAngles(-8,0,0),D(this.app,"front-mudguard",[0,.68,-1.4],[.82,.16,.72],"#d73027",this.entity),D(this.app,"floor-board",[0,.72,-.08],[1.04,.18,1.4],"#941f1b",this.entity),D(this.app,"center-body",[0,.92,.32],[1.02,.58,1.28],"#c92c24",this.entity).setLocalEulerAngles(-5,0,0),D(this.app,"front-cowl",[0,1.17,-1],[1.18,1.02,.66],"#d93429",this.entity).setLocalEulerAngles(-4,0,0),D(this.app,"front-cowl-lower",[0,.8,-1.16],[1.06,.42,.72],"#bd251f",this.entity),D(this.app,"rear-cowl",[0,1.02,.92],[1.12,.62,.9],"#d93429",this.entity),D(this.app,"seat",[0,1.42,.3],[.9,.24,1.16],"#17191f",this.entity).setLocalEulerAngles(-2,0,0),Rt(this.app,"headlight",[0,1.52,-1.35],[.43,.2,.43],"#fff2b0",this.entity).setLocalEulerAngles(90,0,0),D(this.app,"indicator-left",[-.48,1.42,-1.35],[.22,.18,.16],"#f3a321",this.entity),D(this.app,"indicator-right",[.48,1.42,-1.35],[.22,.18,.16],"#f3a321",this.entity),D(this.app,"handlebar",[0,1.78,-.96],[1.52,.1,.1],"#d7e0e7",this.entity),D(this.app,"grip-left",[-.82,1.78,-.96],[.24,.16,.16],"#17191f",this.entity),D(this.app,"grip-right",[.82,1.78,-.96],[.24,.16,.16],"#17191f",this.entity),D(this.app,"mirror-stalk-left",[-.58,2.04,-.96],[.08,.6,.08],"#d7e0e7",this.entity).setLocalEulerAngles(0,0,-24),D(this.app,"mirror-stalk-right",[.58,2.04,-.96],[.08,.6,.08],"#d7e0e7",this.entity).setLocalEulerAngles(0,0,24),D(this.app,"mirror-left",[-.75,2.3,-.96],[.34,.28,.1],"#243042",this.entity),D(this.app,"mirror-right",[.75,2.3,-.96],[.34,.28,.1],"#243042",this.entity),D(this.app,"rear-rack",[0,1.46,.96],[1.2,.12,.78],"#333840",this.entity),D(this.app,"delivery-box",[0,2.06,1.04],[1.54,1.18,1.1],"#f4f0df",this.entity),D(this.app,"delivery-box-lid",[0,2.68,1.04],[1.6,.16,1.16],"#fffdf3",this.entity),D(this.app,"delivery-box-band",[0,2.08,.47],[1.6,.12,.08],"#c9c5b8",this.entity),D(this.app,"tail-light",[0,1.23,1.48],[.58,.22,.12],"#ff352f",this.entity),D(this.app,"rear-indicator-left",[-.48,1.24,1.46],[.2,.16,.13],"#f3a321",this.entity),D(this.app,"rear-indicator-right",[.48,1.24,1.46],[.2,.16,.13],"#f3a321",this.entity),D(this.app,"license-plate",[0,.92,1.55],[.72,.36,.08],"#f3f4ef",this.entity).setLocalEulerAngles(-9,0,0),D(this.app,"muffler",[.56,.62,.98],[.22,.24,.84],"#7e858c",this.entity).setLocalEulerAngles(8,0,0),D(this.app,"rider-torso",[0,2.35,-.02],[1.05,1.05,.58],"#2589b8",this.entity).setLocalEulerAngles(7,0,0),D(this.app,"rider-waist",[0,1.82,.16],[.82,.32,.52],"#1e668d",this.entity),D(this.app,"rider-neck",[0,2.92,-.11],[.24,.22,.22],"#d79d69",this.entity),D(this.app,"rider-head",[0,3.28,-.18],[.68,.72,.62],"#e1ab78",this.entity),D(this.app,"rider-hair",[0,3.63,-.16],[.72,.22,.66],"#25262b",this.entity),D(this.app,"rider-hair-back",[0,3.42,.12],[.7,.38,.18],"#25262b",this.entity),D(this.app,"rider-eye-left",[-.15,3.34,-.5],[.08,.08,.05],"#202126",this.entity),D(this.app,"rider-eye-right",[.15,3.34,-.5],[.08,.08,.05],"#202126",this.entity),D(this.app,"rider-mouth",[0,3.12,-.5],[.24,.07,.05],"#432820",this.entity),D(this.app,"upper-arm-left",[-.61,2.42,-.29],[.3,.78,.3],"#2589b8",this.entity).setLocalEulerAngles(-30,0,-34),D(this.app,"upper-arm-right",[.61,2.42,-.29],[.3,.78,.3],"#2589b8",this.entity).setLocalEulerAngles(-30,0,34),D(this.app,"forearm-left",[-.73,2.02,-.67],[.24,.7,.24],"#d79d69",this.entity).setLocalEulerAngles(-54,0,-12),D(this.app,"forearm-right",[.73,2.02,-.67],[.24,.7,.24],"#d79d69",this.entity).setLocalEulerAngles(-54,0,12),D(this.app,"hand-left",[-.79,1.82,-.94],[.24,.2,.26],"#d79d69",this.entity),D(this.app,"hand-right",[.79,1.82,-.94],[.24,.2,.26],"#d79d69",this.entity),D(this.app,"thigh-left",[-.29,1.55,-.08],[.38,.78,.42],"#26364a",this.entity).setLocalEulerAngles(-32,0,-5),D(this.app,"thigh-right",[.29,1.55,-.08],[.38,.78,.42],"#26364a",this.entity).setLocalEulerAngles(-32,0,5),D(this.app,"shin-left",[-.34,1.02,-.55],[.32,.7,.34],"#26364a",this.entity).setLocalEulerAngles(30,0,0),D(this.app,"shin-right",[.34,1.02,-.55],[.32,.7,.34],"#26364a",this.entity).setLocalEulerAngles(30,0,0),D(this.app,"shoe-left",[-.34,.76,-.83],[.38,.22,.52],"#18191d",this.entity),D(this.app,"shoe-right",[.34,.76,-.83],[.38,.22,.52],"#18191d",this.entity)}}class BC{constructor(t,e,i){o(this,"entity",new Q("follow-camera"));o(this,"targetPosition",new _);o(this,"shake",0);this.app=t,this.bike=e,this.sky=i,this.entity.addComponent("camera",{clearColor:[0,0,0,0],farClip:450,fov:62}),t.root.addChild(this.entity),this.update(1)}update(t){const e=this.bike.entity.getPosition(),i=this.bike.heading,s=Math.abs(this.bike.speed),a=6+s*.022;this.targetPosition.set(e.x-Math.sin(i)*a,3.2+s*.006,e.z-Math.cos(i)*a),this.shake>0&&(this.targetPosition.x+=(Math.random()-.5)*this.shake,this.targetPosition.y+=(Math.random()-.5)*this.shake,this.shake=Math.max(0,this.shake-t*2.5));const r=this.entity.getPosition();r.lerp(r,this.targetPosition,Math.min(1,t*7)),this.entity.setPosition(r),this.entity.lookAt(e.x,e.y+1.1,e.z),this.entity.camera&&(this.entity.camera.fov=60+Math.min(22,s*.19+(this.bike.input.isDown("ShiftLeft","ShiftRight")?4:0))),this.sky.update(i,s,t),this.app}crashShake(){this.shake=.7}}const kC=["田中 太郎","山本 花子","林 健一","佐藤 美咲","鈴木 次郎"],Kr=[{name:"黄金チャーハン",resistance:.82,label:"こぼれにくい"},{name:"炎の麻婆豆腐",resistance:.38,label:"かなりこぼれやすい"},{name:"爆速しょうゆラーメン",resistance:.2,label:"最もこぼれやすい"},{name:"特製天津飯",resistance:.55,label:"ややこぼれやすい"},{name:"爆盛り餃子",resistance:.92,label:"安定している"}],ca=Rs.map((c,t)=>({id:t+1,customerName:kC[t],foodName:Kr[t].name,destinationId:c.id,timeLimit:90,reward:100,spillResistance:Kr[t].resistance,spillLabel:Kr[t].label}));class zC{constructor(){o(this,"currentOrder",ca[0]);o(this,"orderIndex",0)}nextOrder(){return this.currentOrder={...ca[this.orderIndex%ca.length],id:this.orderIndex+1},this.orderIndex+=1,this.currentOrder}reset(){this.orderIndex=0,this.currentOrder=ca[0]}get destination(){return Rs.find(t=>t.id===this.currentOrder.destinationId)??Rs[0]}get shop(){return os}}class VC{constructor(t){o(this,"minimap",null);o(this,"lastDomUpdate",0);o(this,"onStart",()=>{});o(this,"onDepart",()=>{});o(this,"onRetry",()=>{});o(this,"onMenu",()=>{});this.root=t}showTitle(t,e){this.root.innerHTML=`
      <section class="title-screen screen active">
        <div class="title-stripes"></div>
        <div class="title-copy">
          <p class="eyebrow">爆速飯店 PRESENTS</p>
          <h1><small>街を喰らえ。</small>出前<span>3D</span><br>ゲーム</h1>
          <p class="tagline">最速で、熱々のまま届けろ。</p>
          <button id="start-button" class="arcade-button">暖簾をくぐる <b>START</b></button>
          <div class="records"><span>BEST SCORE <b>${t.bestScore.toLocaleString()}</b></span><span>TOTAL DELIVERY <b>${t.totalDeliveries}件</b></span></div>
          <p class="renderer">RENDERER: ${e}</p>
        </div>
        <aside class="controls-card"><b>乗り方</b><span>WASD / 矢印　運転</span><span>SPACE　ドリフト</span><span>SHIFT　ブースト</span><span>R　復帰 / ESC　ポーズ</span></aside>
      </section>`,this.button("start-button",()=>this.onStart())}showOrder(t,e){this.root.innerHTML=`
      <section class="order-screen screen active">
        <article class="order-ticket">
          <header><span>注文票</span><strong>NEW ORDER!</strong><i>No.${String(t.id).padStart(3,"0")}</i></header>
          <div class="food-icon">🥡<em>湯気まで届けろ</em></div>
          <p class="label">ご注文</p><h2>${t.foodName}</h2>
          <dl><div><dt>お届け先</dt><dd>${t.customerName} 様</dd></div><div><dt>住所</dt><dd>${e.address}</dd></div><div><dt>こぼれやすさ</dt><dd>${t.spillLabel}</dd></div><div><dt>制限時間</dt><dd class="red">01:30</dd></div></dl>
          <button id="depart-button" class="arcade-button">出発する <b>GO!</b></button>
        </article>
      </section>`,this.button("depart-button",()=>this.onDepart())}showHud(){this.root.innerHTML=`
      <style id="mobile-hud-layout-fix">
        @media (pointer: coarse), (max-width: 900px) {
          .hud .objective {
            top: auto !important;
            bottom: max(18px, env(safe-area-inset-bottom)) !important;
            left: 50% !important;
            z-index: 8;
            min-width: 120px;
            padding: 3px 10px 5px;
            background: rgba(16, 13, 10, .82);
            border-bottom: 3px solid var(--yellow);
            border-radius: 8px;
          }
          .hud .objective span { font-size: 24px; line-height: 1; }
          .hud .objective b { background: transparent; padding: 0 6px; }
          .hud .objective em { font-size: 19px; line-height: 1; }
          .hud .minimap-frame {
            bottom: max(112px, calc(env(safe-area-inset-bottom) + 96px)) !important;
          }
          .hud .speedometer {
            bottom: max(122px, calc(env(safe-area-inset-bottom) + 106px)) !important;
          }
          .hud .control-hint { display: none !important; }
        }
        @media (pointer: coarse) and (max-height: 520px) {
          .hud .minimap-frame {
            left: max(14px, env(safe-area-inset-left)) !important;
            bottom: max(106px, calc(env(safe-area-inset-bottom) + 92px)) !important;
            transform: rotate(-1deg) scale(.86);
            transform-origin: bottom left;
          }
          .hud .speedometer {
            right: max(14px, env(safe-area-inset-right)) !important;
            bottom: max(112px, calc(env(safe-area-inset-bottom) + 98px)) !important;
            transform: skewX(-4deg) scale(.88);
            transform-origin: bottom right;
          }
          .hud .objective {
            bottom: max(10px, env(safe-area-inset-bottom)) !important;
          }
        }
      </style>
      <section class="hud active">
        <div class="hud-top"><div><small>DELIVERY</small><b id="deliveries">0</b><i>件</i></div><div class="timer"><small>TIME LEFT</small><b id="time">01:30</b></div><div class="score"><small>SCORE</small><b id="score">0</b></div></div>
        <div id="objective" class="objective"><span class="direction-arrow" aria-hidden="true"></span><b>目的地</b><em>0m</em></div>
        <div id="flash-message" class="flash-message"></div>
        <div class="minimap-frame"><label>爆速 NAVI</label><canvas id="minimap" width="220" height="220"></canvas></div>
        <div class="speedometer"><div class="speed-ring"><b id="speed">0</b><small>km/h</small></div><label>BOOST</label><div class="boost-track"><i id="boost"></i></div><kbd>SHIFT</kbd></div>
        <div class="delivery-status"><small>料理の状態</small><b id="food-integrity">100%</b><span id="police-status">衝突 0/3</span></div>
        <div class="control-hint">WASD 操作　SPACE ドリフト　SHIFT ブースト　R 復帰</div>
        <div id="virtual-controls" aria-label="タッチ操作">
          <div class="mobile-steer"><button type="button" data-input="ArrowLeft" aria-label="左へ曲がる">◀</button><button type="button" data-input="ArrowRight" aria-label="右へ曲がる">▶</button></div>
          <div class="mobile-actions"><button type="button" data-input="Space" class="drift-button">DRIFT</button><button type="button" data-input="ShiftLeft" class="boost-button">BOOST</button><button type="button" data-input="ArrowDown" class="back-button">BACK</button><button type="button" data-input="ArrowUp" class="gas-button">GO</button></div>
        </div>
      </section>`,this.minimap=this.root.querySelector("#minimap")}updateHud(t){const e=performance.now();if(e-this.lastDomUpdate>50){this.text("deliveries",`${t.deliveries}/10`),this.text("time",this.formatTime(t.time)),this.text("score",t.score.toLocaleString()),this.text("speed",String(Math.round(t.speed))),this.text("food-integrity",`${Math.round(t.foodIntegrity)}%`),this.text("police-status",t.policeActive?"🚨 警察追跡中":`衝突 ${t.crashCount}/3`);const i=this.root.querySelector("#boost");i&&(i.style.width=`${t.boost}%`);const s=t.target.x-t.playerX,a=t.target.z-t.playerZ,r=this.root.querySelector("#objective");if(r){r.querySelector("b").textContent=t.target.label,r.querySelector("em").textContent=`${Math.round(Math.hypot(s,a))}m`;const l=r.querySelector("span");l&&(l.style.transform=`rotate(${Math.atan2(s,a)-t.heading}rad)`)}const n=this.root.querySelector("#flash-message");n&&(n.textContent=t.message,n.classList.toggle("show",!!t.message)),this.lastDomUpdate=e}this.drawMap(t)}showCountdown(t){let e=this.root.querySelector(".countdown");e||(e=document.createElement("div"),e.className="countdown",this.root.appendChild(e)),e.textContent=t,e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop"),t===""&&e.remove()}showCustomerFeedback(t,e){var r;(r=this.root.querySelector(".customer-feedback"))==null||r.remove();const i=document.createElement("div");i.className=`customer-feedback ${e}`;const s=document.createElement("small");s.textContent="お客さん";const a=document.createElement("b");a.append(document.createTextNode(t[0]),document.createElement("br"),document.createTextNode(t[1])),i.append(s,a),this.root.appendChild(i),setTimeout(()=>{i.isConnected&&i.classList.add("leaving")},9500),setTimeout(()=>i.remove(),1e4)}showResult(t,e,i){this.root.innerHTML=`
      <section class="result-screen screen active"><article class="result-card">
        <p class="eyebrow">CLOSED / 本日の成績</p><h2>${i?"NEW RECORD!":"TIME UP!"}</h2>
        <div class="result-number"><small>配達完了</small><b>${e}</b><i>件</i></div>
        <div class="total-score"><small>TOTAL SCORE</small><b>${t.toLocaleString()}</b></div>
        <div class="result-actions"><button id="retry-button" class="arcade-button">もう一丁 <b>RETRY</b></button><button id="menu-button" class="sub-button">店じまい</button></div>
      </article></section>`,this.button("retry-button",()=>this.onRetry()),this.button("menu-button",()=>this.onMenu())}showWorkReview(t,e){const i=t.map(s=>`<tr><td>${s.number}</td><td>${s.foodName}<small>${s.customerName} 様</small></td><td>${s.seconds.toFixed(1)}秒<small>${s.seconds<=s.timeLimit?"時間内":"時間超過"}</small></td><td>${s.integrity}%</td><td>${s.crashes}</td><td>¥${s.reward.toLocaleString()}</td></tr>`).join("");this.root.innerHTML=`<section class="work-review screen active"><article class="review-board">
      <header><div><small>爆速飯店・本日の勤務評定</small><h2>配達レビュー <b>${e.rank}</b></h2></div><div class="daily-wage"><small>本日の日給</small><strong>¥${e.dailyWage.toLocaleString()}</strong></div></header>
      <div class="owner-comment"><span>店主</span><p>${e.ownerLines[0]}<br>${e.ownerLines[1]}</p></div>
      <div class="review-summary"><span>総合点 <b>${e.performance}</b></span><span>時間厳守 <b>${e.onTimeCount}/10</b></span><span>平均品質 <b>${e.averageIntegrity}%</b></span><span>衝突 <b>${e.totalCrashes}回</b></span><span>配達報酬 <b>¥${e.totalReward.toLocaleString()}</b></span></div>
      <div class="review-table-wrap"><table><thead><tr><th>No.</th><th>配達商品</th><th>所要時間</th><th>品質</th><th>衝突</th><th>報酬</th></tr></thead><tbody>${i}</tbody></table></div>
      <div class="result-actions"><button id="retry-button" class="arcade-button">もう一日働く <b>RETRY</b></button><button id="menu-button" class="sub-button">店じまい</button></div>
    </article></section>`,this.button("retry-button",()=>this.onRetry()),this.button("menu-button",()=>this.onMenu())}showPause(t){const e=this.root.querySelector(".pause-screen");if(!t){e==null||e.remove();return}e||this.root.insertAdjacentHTML("beforeend",'<div class="pause-screen"><small>ひと休み</small><b>PAUSED</b><span>ESCで再開</span></div>')}drawMap(t){if(!this.minimap)return;const e=this.minimap.getContext("2d");if(!e)return;const i=r=>(r+190)/380*220;e.clearRect(0,0,220,220),e.fillStyle="#283a2d",e.fillRect(0,0,220,220),e.fillStyle="#4a4e50",e.fillRect(i(-12),0,i(12)-i(-12),220),e.fillRect(0,i(-12),220,i(12)-i(-12)),e.strokeStyle="#efcd45",e.lineWidth=2,e.setLineDash([6,5]),e.beginPath(),e.moveTo(i(t.playerX),i(t.playerZ)),e.lineTo(i(t.target.x),i(t.target.z)),e.stroke(),e.setLineDash([]),e.fillStyle="#ffdc38",e.beginPath(),e.arc(i(t.target.x),i(t.target.z),7,0,Math.PI*2),e.fill();const s=t.target.x-t.playerX,a=t.target.z-t.playerZ;e.save(),e.translate(i(t.playerX),i(t.playerZ)),e.rotate(Math.atan2(s,-a)),e.fillStyle="#fff",e.beginPath(),e.moveTo(0,-10),e.lineTo(-6,7),e.lineTo(6,7),e.closePath(),e.fill(),e.restore()}formatTime(t){const e=Math.max(0,t);return`${String(Math.floor(e/60)).padStart(2,"0")}:${String(Math.floor(e%60)).padStart(2,"0")}`}text(t,e){const i=this.root.querySelector(`#${t}`);i&&(i.textContent=e)}button(t,e){var i;(i=this.root.querySelector(`#${t}`))==null||i.addEventListener("click",e)}}const GC=""+new URL("Morning Rush-D67_69kl.mp3",import.meta.url).href,HC=""+new URL("朝焼けデリバリー-dMOW1A-N.mp3",import.meta.url).href,WC=""+new URL("Golden Hour Rush-BgPLZgsG.mp3",import.meta.url).href,XC=""+new URL("黄金街道ラッシュ-BIYkcSJT.mp3",import.meta.url).href,YC=""+new URL("ネオン街の最終便-3-EP-8KB.mp3",import.meta.url).href,$C=""+new URL("ネオン街の最終便 (1)-D0H7XK4R.mp3",import.meta.url).href;class qC{constructor(){o(this,"context",null);o(this,"engine",null);o(this,"engineGain",null);o(this,"lastBoost",0);o(this,"policePulseTimer",0);o(this,"policePulseHigh",!1);o(this,"music",new Audio);o(this,"musicTracks",[]);o(this,"selectedMusic",-1);o(this,"musicPausedByGame",!1);this.music.loop=!0,this.music.preload="auto",this.music.volume=.24;const t=()=>this.unlock();document.addEventListener("pointerdown",t,{once:!0}),document.addEventListener("keydown",t,{once:!0})}configureMusic(t){this.musicTracks=t==="morning"?[GC,HC]:t==="evening"?[WC,XC]:[YC,$C]}playMusic(t){if(this.musicTracks.length===0)return;const e=t%this.musicTracks.length;e!==this.selectedMusic&&(this.selectedMusic=e,this.music.src=this.musicTracks[e],this.music.currentTime=0),this.musicPausedByGame=!1,this.music.play().catch(()=>{})}pauseMusic(){this.musicPausedByGame=!0,this.music.pause()}resumeMusic(){this.musicPausedByGame&&(this.musicPausedByGame=!1,this.music.play().catch(()=>{}))}stopMusic(){this.musicPausedByGame=!1,this.music.pause(),this.music.currentTime=0}musicTrackForTest(){return decodeURIComponent(this.music.src.split("/").pop()??"")}unlock(){this.context||(this.context=new AudioContext),this.context.resume(),this.engine||this.startEngine()}updateEngine(t,e){if(!this.context||!this.engine||!this.engineGain)return;const i=Math.abs(t);this.engine.frequency.setTargetAtTime(65+i*2.1,this.context.currentTime,.04),this.engineGain.gain.setTargetAtTime(e?.025+i*35e-5:.008,this.context.currentTime,.08)}updatePolice(t,e){if(!e){this.policePulseTimer=0,this.policePulseHigh=!1;return}this.policePulseTimer-=t,!(this.policePulseTimer>0)&&(this.policePulseHigh=!this.policePulseHigh,this.tone(this.policePulseHigh?940:700,.12,"square",.06),this.policePulseTimer=.27)}countdown(t){this.tone(t===0?680:330+t*35,t===0?.32:.14,"square",.09)}order(){this.tone(520,.12,"square",.07),setTimeout(()=>this.tone(720,.16,"square",.06),100)}delivery(){[440,660,880].forEach((t,e)=>setTimeout(()=>this.tone(t,.2,"triangle",.08),e*90))}crash(){this.tone(70,.22,"sawtooth",.13)}drift(){this.tone(170,.16,"sawtooth",.045)}boost(){const t=performance.now();t-this.lastBoost<700||(this.lastBoost=t,this.tone(220,.28,"sawtooth",.045))}timeUp(){this.tone(110,.65,"square",.1)}timeWarning(){[0,1,2].forEach(t=>setTimeout(()=>this.tone(920,.1,"square",.1),t*145))}police(){[0,1,2,3].forEach(t=>setTimeout(()=>this.tone(t%2?660:880,.18,"square",.075),t*175))}policeCaught(){[180,120].forEach((t,e)=>setTimeout(()=>this.tone(t,.32,"sawtooth",.1),e*180))}startEngine(){this.context&&(this.engine=this.context.createOscillator(),this.engineGain=this.context.createGain(),this.engine.type="sawtooth",this.engine.frequency.value=65,this.engineGain.gain.value=.008,this.engine.connect(this.engineGain).connect(this.context.destination),this.engine.start())}tone(t,e,i,s){if(!this.context)return;const a=this.context.createOscillator(),r=this.context.createGain();a.frequency.value=t,a.type=i,r.gain.setValueAtTime(s,this.context.currentTime),r.gain.exponentialRampToValueAtTime(1e-4,this.context.currentTime+e),a.connect(r).connect(this.context.destination),a.start(),a.stop(this.context.currentTime+e)}}const Zr={bestScore:0,bestTime:0,totalDeliveries:0,bikeLevel:1};class jC{constructor(){o(this,"databaseName","demae-3d-save")}async load(){try{const t=await this.open();return await new Promise((e,i)=>{const s=t.transaction("save","readonly").objectStore("save").get("player");s.onsuccess=()=>e({...Zr,...s.result}),s.onerror=()=>i(s.error)})}catch{const t=localStorage.getItem(this.databaseName);return t?{...Zr,...JSON.parse(t)}:{...Zr}}}async save(t){localStorage.setItem(this.databaseName,JSON.stringify(t));try{const e=await this.open();await new Promise((i,s)=>{const a=e.transaction("save","readwrite").objectStore("save").put(t,"player");a.onsuccess=()=>i(),a.onerror=()=>s(a.error)})}catch{}}open(){return new Promise((t,e)=>{const i=indexedDB.open(this.databaseName,1);i.onupgradeneeded=()=>i.result.createObjectStore("save"),i.onsuccess=()=>t(i.result),i.onerror=()=>e(i.error)})}}const Li=class Li{constructor(t,e,i,s,a,r,n,l){o(this,"state","TITLE");o(this,"score",0);o(this,"deliveries",0);o(this,"remainingTime",90);o(this,"previousState","TITLE");o(this,"message","");o(this,"messageTimer",0);o(this,"crashCooldown",0);o(this,"countdownToken",0);o(this,"foodIntegrity",100);o(this,"crashCount",0);o(this,"policeActive",!1);o(this,"timeWarningPlayed",!1);o(this,"deliveryElapsed",0);o(this,"deliveryCrashStart",0);o(this,"deliveryHistory",[]);o(this,"save",{bestScore:0,bestTime:0,totalDeliveries:0,bikeLevel:1});o(this,"store",new jC);this.app=t,this.bike=e,this.camera=i,this.city=s,this.delivery=a,this.ui=r,this.audio=n,this.traffic=l,r.onStart=()=>this.startOrder(!0),r.onDepart=()=>this.startCountdown(),r.onRetry=()=>this.startOrder(!0),r.onMenu=()=>this.showTitle()}async initialize(){this.save=await this.store.load(),this.showTitle()}expireForTest(){this.remainingTime=0}setTimeForTest(t){this.remainingTime=t,this.timeWarningPlayed=!1}timeForTest(){return this.remainingTime}crashForTest(){this.crashCooldown=0,this.crash()}policeCaughtForTest(){this.caughtByPolice()}policeEscapedForTest(){this.escapedFromPolice()}policeLightForTest(){return this.traffic.policeLightPhaseForTest()}feedbackForTest(t){return this.customerFeedback(t)}async finishShiftForTest(){this.deliveryHistory.length=0,this.deliveries=Li.SHIFT_DELIVERIES;for(let t=0;t<Li.SHIFT_DELIVERIES;t+=1){const e=t%4===0?8:34+t;this.deliveryHistory.push({number:t+1,foodName:["黄金チャーハン","麻婆豆腐","ラーメン"][t%3],customerName:`テスト客${t+1}`,seconds:e,timeLimit:90,integrity:96-t*2,crashes:t%4===0?1:0,reward:150-t*3,tone:e<15?"excellent":"good"})}this.score=this.deliveryHistory.reduce((t,e)=>t+e.reward,0),await this.finishShift()}update(t){if(this.bike.input.consume("Escape")&&this.togglePause(),this.state==="PAUSED")return;const e=this.state==="DELIVERY"||this.state==="RETURN";this.bike.enabled=e,this.bike.update(t);const i=this.traffic.update(t,this.bike.entity.getPosition());if(i.policeCaught&&e?this.caughtByPolice():i.policeEscaped&&e&&this.escapedFromPolice(),i.collision&&e&&this.crash(),this.policeActive=this.traffic.isPoliceActive(),this.camera.update(t),this.audio.updateEngine(this.bike.speed,e),this.audio.updatePolice(t,this.policeActive&&e),this.messageTimer=Math.max(0,this.messageTimer-t),this.messageTimer===0&&(this.message=""),this.crashCooldown=Math.max(0,this.crashCooldown-t),!e)return;this.state==="DELIVERY"&&(this.deliveryElapsed+=t,this.remainingTime=Math.max(0,this.remainingTime-t),this.remainingTime<=15&&!this.timeWarningPlayed&&(this.timeWarningPlayed=!0,this.audio.timeWarning(),this.flash("残り15秒！",1.2)));const s=this.state==="DELIVERY"?this.delivery.destination:this.delivery.shop,a=this.bike.entity.getPosition();if(Math.hypot(a.x-s.x,a.z-s.z)<6.2)this.state==="DELIVERY"?this.deliveryComplete():this.returnToShop();else if(this.state==="DELIVERY"&&this.remainingTime<=0){this.gameOver();return}this.ui.updateHud({deliveries:this.deliveries,time:this.remainingTime,score:this.score,speed:this.bike.speed,boost:this.bike.boost,playerX:a.x,playerZ:a.z,heading:this.bike.heading,target:s,message:this.message,foodIntegrity:this.foodIntegrity,crashCount:this.crashCount,policeActive:this.policeActive})}addDrift(t){this.state!=="DELIVERY"&&this.state!=="RETURN"||(this.score+=t,this.flash(`DRIFT +${t}`,1),this.audio.drift())}spill(t){if(this.state!=="DELIVERY")return;const e=1.12-this.delivery.currentOrder.spillResistance;this.foodIntegrity=Math.max(0,this.foodIntegrity-t*e*15)}crash(){this.crashCooldown>0||this.state!=="DELIVERY"&&this.state!=="RETURN"||(this.crashCooldown=1,this.crashCount+=1,this.state==="DELIVERY"&&(this.foodIntegrity=Math.max(0,this.foodIntegrity-(1.12-this.delivery.currentOrder.spillResistance)*18)),this.bike.autoRecover(2),this.remainingTime=Math.max(0,this.remainingTime-3),this.camera.crashShake(),this.crashCount>=3&&!this.policeActive?(this.policeActive=!0,this.traffic.summonPolice(this.bike.entity.getPosition()),this.audio.police(),this.flash("🚨 3回衝突！警察が来た！",2)):this.flash(`CRASH! 衝突 ${this.crashCount}/3 −3秒`,1.1),this.audio.crash())}caughtByPolice(){!this.policeActive&&!this.traffic.isPoliceActive()||(this.remainingTime=Math.max(0,this.remainingTime-20),this.policeActive=!1,this.traffic.resetPolice(),this.bike.autoRecover(1.2),this.camera.crashShake(),this.audio.policeCaught(),this.flash("🚓 捕まった！ TIME −20秒",2))}escapedFromPolice(){!this.policeActive&&!this.traffic.isPoliceActive()||(this.policeActive=!1,this.traffic.resetPolice(),this.flash("警察を振り切った！ ペナルティなし",2))}showTitle(){this.countdownToken+=1,this.state="TITLE",this.bike.stop(),this.audio.stopMusic(),this.city.setObjective(""),this.ui.showTitle(this.save,this.app.graphicsDevice.deviceType.toUpperCase())}startOrder(t){this.audio.unlock(),t&&(this.score=0,this.deliveries=0,this.remainingTime=90,this.foodIntegrity=100,this.crashCount=0,this.policeActive=!1,this.timeWarningPlayed=!1,this.deliveryElapsed=0,this.deliveryCrashStart=0,this.deliveryHistory.length=0,this.delivery.reset(),this.traffic.resetPolice(),this.bike.reset());const e=this.delivery.nextOrder();this.audio.playMusic(this.deliveries),this.state="ORDER",this.bike.stop(),this.city.setObjective(e.destinationId),this.audio.order(),this.ui.showOrder(e,this.delivery.destination)}startCountdown(){this.state="COUNTDOWN",this.remainingTime=this.delivery.currentOrder.timeLimit,this.deliveryElapsed=0,this.deliveryCrashStart=this.crashCount,this.timeWarningPlayed=!1,this.ui.showHud();const t=++this.countdownToken;[3,2,1,0].forEach((e,i)=>setTimeout(()=>{t===this.countdownToken&&(this.audio.countdown(e),this.ui.showCountdown(e===0?"GO!":String(e)),e===0&&(this.state="DELIVERY",setTimeout(()=>{t===this.countdownToken&&this.ui.showCountdown("")},650)))},i*720))}deliveryComplete(){this.state="CUSTOMER",this.bike.stop(),this.deliveries+=1;const t=Math.round(this.foodIntegrity),e=this.customerFeedback(this.remainingTime),i=Math.max(0,Math.round(this.remainingTime/9)*10),a=Math.round(this.delivery.currentOrder.reward*t/100)+i;this.deliveryHistory.push({number:this.deliveries,foodName:this.delivery.currentOrder.foodName,customerName:this.delivery.currentOrder.customerName,seconds:this.deliveryElapsed,timeLimit:this.delivery.currentOrder.timeLimit,integrity:t,crashes:this.crashCount-this.deliveryCrashStart,reward:a,tone:e.tone}),this.score+=a,this.remainingTime=Math.min(99,this.remainingTime+10),this.foodIntegrity=100,this.timeWarningPlayed=this.remainingTime<=15,this.audio.delivery(),this.flash(`配達完了！ 品質${t}% +${a}`,1.6),this.ui.showCustomerFeedback(e.lines,e.tone),setTimeout(()=>{if(this.state==="CUSTOMER"){if(this.deliveries>=Li.SHIFT_DELIVERIES){this.finishShift();return}this.state="RETURN",this.city.setObjective("shop"),this.bike.enabled=!0,this.flash("店に戻れ！",1.4)}},1800)}customerFeedback(t){return t>=60?{tone:"excellent",lines:["信じられない、もう届いたの！？","最高の配達です！"]}:t>15?{tone:"good",lines:["早く届けてくれてありがとう！","温かいうちに食べられます。"]}:t>0?{tone:"strict",lines:["間に合ったけど、かなりギリギリ。","次はもう少し早くお願いします。"]}:{tone:"angry",lines:["遅い！ずっと待っていました！","料理も冷めてしまいます！"]}}returnToShop(){this.state="CUSTOMER",this.bike.stop(),this.score+=100,this.bike.boost=Math.min(100,this.bike.boost+25),this.audio.delivery(),this.flash("店に到着！ RETURN +100",1.3),setTimeout(()=>{this.state==="CUSTOMER"&&(this.foodIntegrity=100,this.startOrder(!1))},1e3)}async gameOver(){if(this.state==="RESULT")return;this.state="RESULT",this.bike.stop(),this.audio.stopMusic(),this.audio.timeUp(),this.countdownToken+=1;const t=this.score>this.save.bestScore;this.save.bestScore=Math.max(this.save.bestScore,this.score),this.save.bestTime=Math.max(this.save.bestTime,this.remainingTime),this.save.totalDeliveries+=this.deliveries,await this.store.save(this.save),this.ui.showResult(this.score,this.deliveries,t)}async finishShift(){this.state="RESULT",this.bike.stop(),this.audio.stopMusic(),this.city.setObjective(""),this.countdownToken+=1;const t=this.calculateWorkReview();this.save.bestScore=Math.max(this.save.bestScore,this.score),this.save.totalDeliveries+=this.deliveries,await this.store.save(this.save),this.ui.showWorkReview(this.deliveryHistory,t)}calculateWorkReview(){const t=Math.max(1,this.deliveryHistory.length),e=Math.round(this.deliveryHistory.reduce((u,p)=>u+p.integrity,0)/t),i=this.deliveryHistory.filter(u=>u.seconds<=u.timeLimit).length,s=this.deliveryHistory.reduce((u,p)=>u+p.crashes,0),a=this.deliveryHistory.reduce((u,p)=>u+p.reward,0),r=this.deliveryHistory.reduce((u,p)=>u+Math.min(1.5,p.seconds/p.timeLimit),0)/t,n=Math.max(0,100-r*65),l=Math.round(Math.max(0,Math.min(100,e*.45+i/t*100*.35+n*.2-s*1.5))),d=l>=90?"S":l>=78?"A":l>=65?"B":l>=50?"C":"D",f=Math.round((7e3+l*90+a*.35)/100)*100,h=d==="S"?["見事だ。速さも料理の扱いも一流だった。",`今日の日給は¥${f.toLocaleString()}だ。また頼むぞ。`]:d==="A"?["よく走ったな。十分に店の看板を背負えている。",`今日の日給は¥${f.toLocaleString()}だ。この調子だ。`]:d==="B"?["悪くない働きだ。だが、まだ雑な配達があるな。",`今日の日給は¥${f.toLocaleString()}だ。次は上を狙え。`]:d==="C"?["十件完走は認める。だが時間と料理をもっと大事にしろ。",`今日の日給は¥${f.toLocaleString()}だ。次は丁寧にな。`]:["これは店の評判に関わるぞ。基本からやり直しだ。",`今日の日給は¥${f.toLocaleString()}だ。次こそ見せてみろ。`];return{rank:d,performance:l,dailyWage:f,averageIntegrity:e,onTimeCount:i,totalCrashes:s,totalReward:a,ownerLines:h}}togglePause(){this.state==="TITLE"||this.state==="ORDER"||this.state==="RESULT"||this.state==="COUNTDOWN"||(this.state==="PAUSED"?(this.state=this.previousState,this.audio.resumeMusic(),this.ui.showPause(!1)):(this.previousState=this.state,this.state="PAUSED",this.bike.enabled=!1,this.audio.pauseMusic(),this.ui.showPause(!0)))}flash(t,e){this.message=t,this.messageTimer=e}};o(Li,"SHIFT_DELIVERIES",10);let Ln=Li;const Jr="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20120%20240'%3e%3cellipse%20cx='60'%20cy='226'%20rx='32'%20ry='8'%20fill='%23111'%20opacity='.28'/%3e%3cg%20stroke='%23271812'%20stroke-width='6'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3ccircle%20cx='60'%20cy='40'%20r='25'%20fill='%23efb98a'/%3e%3cpath%20d='M36%2040Q39%208%2065%2012q24%203%2020%2034-18-5-29-22-8%2012-20%2016z'%20fill='%2335231e'/%3e%3cpath%20d='M38%2078q22-18%2044%200l10%2076H28z'%20fill='%23e34b35'/%3e%3cpath%20d='M38%2091L18%20139'/%3e%3cpath%20d='M82%2091l21%2045'/%3e%3cpath%20d='M39%20153l-7%2067M80%20153l9%2067'%20stroke='%2330445e'%20stroke-width='15'/%3e%3cpath%20d='M20%20222h24m33%200h25'%20stroke='%23eee4cf'%20stroke-width='12'/%3e%3c/g%3e%3c/svg%3e",Pc="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20180%20120'%3e%3cellipse%20cx='88'%20cy='105'%20rx='68'%20ry='8'%20fill='%23111'%20opacity='.25'/%3e%3cg%20stroke='%2339251d'%20stroke-width='6'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M43%2083Q42%2043%2083%2042q41%202%2048%2042z'%20fill='%23e99039'/%3e%3cpath%20d='M112%2050l5-31%2018%2021%2019-15-1%2035q-15%2025-41%205z'%20fill='%23e99039'/%3e%3cpath%20d='M49%2082l-8%2021m70-21%209%2021M75%2082l-2%2021'/%3e%3cpath%20d='M45%2057Q9%2048%2018%2019'%20fill='none'/%3e%3ccircle%20cx='128'%20cy='51'%20r='3'/%3e%3ccircle%20cx='145'%20cy='49'%20r='3'/%3e%3cpath%20d='M135%2059l5%203-5%203'%20fill='%23d85a67'/%3e%3c/g%3e%3c/svg%3e",KC="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20200%20130'%3e%3cellipse%20cx='100'%20cy='116'%20rx='74'%20ry='8'%20fill='%23111'%20opacity='.25'/%3e%3cg%20stroke='%2332231b'%20stroke-width='7'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M42%2092q3-50%2055-45%2043%204%2050%2048z'%20fill='%23b97742'/%3e%3cpath%20d='M124%2055q5-40%2037-35%2030%206%2022%2048-16%2025-48%208z'%20fill='%23c88a52'/%3e%3cpath%20d='M143%2023l-17-15%201%2034m39-17%2022-12-9%2035'%20fill='%2387502e'/%3e%3ccircle%20cx='158'%20cy='48'%20r='4'/%3e%3cpath%20d='M180%2059l9%203-8%206'%20fill='%2330211b'/%3e%3cpath%20d='M54%2089l-5%2027m39-24-1%2024m42-24%205%2024m31-33%205%2033'/%3e%3cpath%20d='M44%2060Q13%2047%2024%2023'%20fill='none'/%3e%3c/g%3e%3c/svg%3e";class ZC{constructor(t){o(this,"cars",[]);o(this,"agents",[]);o(this,"svgMaterials",new Map);o(this,"police",null);o(this,"policeRedLight",null);o(this,"policeBlueLight",null);o(this,"policePulseTime",0);o(this,"policeFarTime",0);this.app=t,this.cars.push(this.createCar("taxi","#e0a91d",[new _(-168,.55,4),new _(168,.55,4)],13)),this.cars.push(this.createCar("van","#ded8c8",[new _(6,.55,-168),new _(6,.55,168)],11)),this.cars.push(this.createCar("busy-taxi-a","#e0a91d",[new _(-162,.55,-4),new _(162,.55,-4)],16)),this.cars.push(this.createCar("busy-taxi-b","#cf382c",[new _(4,.55,158),new _(4,.55,-158)],15)),this.cars.push(this.createCar("west-delivery","#e8e0c9",[new _(-174,.55,72),new _(-20,.55,72)],12)),this.cars.push(this.createCar("east-compact","#3d82b8",[new _(24,.55,-80),new _(176,.55,-80)],14)),this.cars.push(this.createCar("central-cab","#45a35b",[new _(-130,.55,7),new _(145,.55,7)],17));for(const[e,i]of[[-50,0],[45,1.1],[100,2.2]])this.agents.push(this.createAgent("pedestrian",Jr,[new _(-18,0,e),new _(18,0,e)],2.5,1.5,i));this.agents.push(this.createAgent("pedestrian",Jr,[new _(-104,0,-18),new _(-104,0,18)],2.1,1.5,.7)),this.agents.push(this.createAgent("pedestrian",Jr,[new _(104,0,18),new _(104,0,-18)],2.7,1.5,1.8)),this.agents.push(this.createAgent("cat",Pc,[new _(68,0,39),new _(116,0,82),new _(82,0,84)],3.4,1.2,1.3)),this.agents.push(this.createAgent("cat",Pc,[new _(-142,0,34),new _(-118,0,58),new _(-154,0,65)],3.8,1.2,2.5)),this.agents.push(this.createAgent("dog",KC,[new _(65,0,88),new _(124,0,91),new _(118,0,48)],3.1,1.5,.4))}update(t,e){let i=!1,s=!1,a=!1;for(const r of this.cars){const n=r.route[r.waypoint],l=r.entity.getPosition(),d=n.clone().sub(l),f=d.length();if(f<1.2){r.waypoint=(r.waypoint+1)%r.route.length;continue}d.normalize(),l.add(d.mulScalar(Math.min(f,r.speed*t))),r.entity.setPosition(l),r.entity.lookAt(n.x,l.y,n.z),r.entity.rotateLocal(0,180,0),l.distance(e)<3&&(i=!0)}for(const r of this.agents){if(r.pause>0){r.pause=Math.max(0,r.pause-t);continue}const n=r.route[r.waypoint],l=r.entity.getPosition(),d=n.clone().sub(l),f=d.length();if(f<.45){r.waypoint=(r.waypoint+1)%r.route.length,r.pause=.45+r.waypoint%3*.35;continue}d.normalize(),l.add(d.mulScalar(Math.min(f,r.speed*t))),r.entity.setPosition(l),r.entity.lookAt(n.x,l.y,n.z),l.distance(e)<r.radius+1.1&&(i=!0)}if(this.police){this.policePulseTime+=t;const r=Math.floor(this.policePulseTime/.18)%2===0;this.policeRedLight&&(this.policeRedLight.enabled=r),this.policeBlueLight&&(this.policeBlueLight.enabled=!r);const n=this.police.getPosition(),l=e.clone().sub(n),d=l.length();d>.2&&(l.normalize(),n.add(l.mulScalar(Math.min(d,19*t))),this.police.setPosition(n)),this.police.lookAt(e.x,n.y,e.z),this.police.rotateLocal(0,180,0);const f=n.distance(e);this.policeFarTime=f>35?this.policeFarTime+t:0,f<3.2?s=!0:this.policeFarTime>=4&&(a=!0),(s||a)&&this.resetPolice()}return{collision:i,policeCaught:s,policeEscaped:a}}summonPolice(t){if(this.police)return;const e=[t.clone().add(new _(0,0,-28)),t.clone()],i=this.createCar("police","#f3f3ec",e,19);D(this.app,"police-blue-panel",[-1.22,.72,0],[.08,.72,3.8],"#174ea6",i.entity),this.policeRedLight=D(this.app,"police-red-light",[-.42,1.95,.1],[.62,.25,.42],"#ff2a20",i.entity),this.policeBlueLight=D(this.app,"police-blue-light",[.42,1.95,.1],[.62,.25,.42],"#2385ff",i.entity),this.policeRedLight.render.material=it(this.app,"#ff2a20",2.4),this.policeBlueLight.render.material=it(this.app,"#2385ff",2.4),this.policeBlueLight.enabled=!1,this.policePulseTime=0,this.policeFarTime=0,this.police=i.entity}resetPolice(){var t;(t=this.police)==null||t.destroy(),this.police=null,this.policeRedLight=null,this.policeBlueLight=null,this.policePulseTime=0,this.policeFarTime=0}isPoliceActive(){return this.police!==null}policeLightPhaseForTest(){var t,e;return(t=this.policeRedLight)!=null&&t.enabled?"red":(e=this.policeBlueLight)!=null&&e.enabled?"blue":"off"}createCar(t,e,i,s){const a=new Q(t);this.app.root.addChild(a),a.setPosition(i[0]),D(this.app,`${t}-body`,[0,.65,0],[2.4,1,4.5],e,a),D(this.app,`${t}-cabin`,[0,1.35,.2],[2.1,.8,2.2],"#30424c",a);for(const[r,n]of[[-1.1,-1.3],[1.1,-1.3],[-1.1,1.3],[1.1,1.3]])Rt(this.app,"car-wheel",[r,.35,n],[.42,.18,.42],"#151515",a).setLocalEulerAngles(0,0,90);return{entity:a,route:i,waypoint:1,speed:s}}createAgent(t,e,i,s,a,r){const n=new Q(t);n.setPosition(i[0]),this.app.root.addChild(n);const l=this.createSvgMaterial(e),d=t==="pedestrian"?[2.3,4.6]:t==="dog"?[3.2,2.1]:[2.5,1.7];for(const f of[0,90]){const h=new Q(`${t}-svg`);h.addComponent("render",{type:"plane",material:l,castShadows:!1}),h.setLocalPosition(0,d[1]/2,0),h.setLocalScale(d[0],1,d[1]),h.setLocalEulerAngles(90,f,0),n.addChild(h)}return{entity:n,route:i,waypoint:1,speed:s,radius:a,pause:r}}createSvgMaterial(t){const e=this.svgMaterials.get(t);if(e)return e;const i=new Le;this.svgMaterials.set(t,i),i.diffuse=new U(1,1,1),i.emissive=new U(.18,.16,.12),i.emissiveIntensity=.3,i.blendType=St,i.depthWrite=!1,i.cull=gs,i.update();const s=new Image;return s.onload=()=>{const a=document.createElement("canvas");a.width=256,a.height=256;const r=a.getContext("2d");if(!r)return;r.clearRect(0,0,256,256),r.drawImage(s,8,8,240,240);const n=new ce(this.app.graphicsDevice,{name:`${t}-texture`,width:256,height:256,minFilter:Ae,magFilter:Ae,addressU:q,addressV:q,flipY:!0,mipmaps:!1});n.setSource(a),i.diffuseMap=n,i.emissiveMap=n,i.opacityMap=n,i.opacityMapChannel="a",i.update()},s.src=t,i}}class JC{constructor(){o(this,"period");o(this,"root");o(this,"motionX",0);o(this,"motionY",0);o(this,"lastHeading",0);const t=document.querySelector("#sky-environment");if(!t)throw new Error("Sky environment was not found");this.root=t,this.period=this.getPeriod(new Date().getHours()),this.root.dataset.period=this.period}update(t,e,i){let s=t-this.lastHeading;s>Math.PI&&(s-=Math.PI*2),s<-Math.PI&&(s+=Math.PI*2),this.lastHeading=t;const a=Math.min(1,i*4.5),r=-t*72-s*150,n=Math.min(16,e*.08);this.motionX+=(r-this.motionX)*a,this.motionY+=(n-this.motionY)*a;const l=Math.min(8,e/13);this.root.style.setProperty("--sky-base-x",`${(this.motionX*.08).toFixed(2)}px`),this.root.style.setProperty("--sky-base-y",`${(this.motionY*-.08).toFixed(2)}px`),this.root.style.setProperty("--sky-sun-x",`${(this.motionX*.16).toFixed(2)}px`),this.root.style.setProperty("--sky-sun-y",`${(this.motionY*-.14).toFixed(2)}px`),this.root.style.setProperty("--sky-far-x",`${(this.motionX*.34).toFixed(2)}px`),this.root.style.setProperty("--sky-far-y",`${(this.motionY*-.32).toFixed(2)}px`),this.root.style.setProperty("--sky-near-x",`${(this.motionX*.68).toFixed(2)}px`),this.root.style.setProperty("--sky-near-y",`${(this.motionY*-.62-l).toFixed(2)}px`)}getPeriod(t){return t>=5&&t<16?"morning":t>=16&&t<19?"evening":"night"}}class QC{constructor(t,e,i){o(this,"atmosphere",new Q("gpu-atmosphere"));o(this,"steam",new Q("food-steam"));o(this,"spillCooldown",0);this.app=t,this.bike=e,t.root.addChild(this.atmosphere),e.entity.addChild(this.steam),this.steam.setLocalPosition(0,2.35,.65);const s=t.graphicsDevice.deviceType==="webgpu",a=i==="night",r=i==="morning"?[.98,.86,.5]:i==="evening"?[1,.48,.12]:[.45,.68,1];this.atmosphere.addComponent("particlesystem",{numParticles:s?a?520:220:a?180:80,lifetime:a?1.15:4.8,rate:a?.0025:.022,loop:!0,preWarm:!0,emitterShape:hr,emitterExtents:new _(24,a?1:8,24),initialVelocity:a?28:.8,localSpace:!1,wrap:!0,wrapBounds:new _(48,22,48),velocityGraph:new fi(a?[0,0]:[.15,-.12],a?[-1,-1]:[.12,.3],a?[0,0]:[-.08,.1]),scaleGraph:new Xe(a?[0,.035,1,.018]:[0,.08,.5,.16,1,.04]),colorGraph:new fi([r[0],r[0]],[r[1],r[1]],[r[2],r[2]]),alphaGraph:new Xe(a?[0,0,.08,.62,.9,.48,1,0]:[0,0,.2,.35,.8,.3,1,0]),blendType:a?St:Jn,depthWrite:!1,lighting:!1,stretch:a?.18:0}),this.steam.addComponent("particlesystem",{numParticles:s?48:22,lifetime:2.1,rate:.075,loop:!0,emitterShape:hr,emitterExtents:new _(.45,.08,.35),initialVelocity:.7,velocityGraph:new fi([-.12,.18],[.55,1.1],[-.08,.16]),scaleGraph:new Xe([0,.06,.35,.28,1,.5]),colorGraph:new fi([.94,.94],[.91,.91],[.82,.82]),alphaGraph:new Xe([0,0,.15,.28,.65,.18,1,0]),blendType:St,depthWrite:!1,lighting:!1,localSpace:!0}),this.steam.enabled=!1}update(t,e){this.spillCooldown=Math.max(0,this.spillCooldown-t);const i=this.bike.entity.getPosition();this.atmosphere.setPosition(i.x,i.y+11,i.z),this.steam.enabled=e}spill(t){if(this.spillCooldown>0||t<.002)return;this.spillCooldown=.16;const e=new Q("food-spill-burst");this.app.root.addChild(e);const i=this.bike.entity.getPosition();e.setPosition(i.x,i.y+1.6,i.z),e.addComponent("particlesystem",{numParticles:22,lifetime:.85,rate:.004,loop:!1,autoPlay:!0,emitterShape:hr,emitterExtents:new _(.35,.12,.35),initialVelocity:4.5,velocityGraph:new fi([-1.8,1.8],[2.6,-5.2],[-2.8,2.8]),scaleGraph:new Xe([0,.13,1,.035]),colorGraph:new fi([1,.82],[.55,.18],[.08,.03]),alphaGraph:new Xe([0,.95,.75,.8,1,0]),blendType:St,depthWrite:!1,lighting:!1}),setTimeout(()=>e.destroy(),1200)}}class e2{constructor(t,e){o(this,"app",null);this.canvas=t,this.uiRoot=e}async start(){const{createApplication:t}=await qh(async()=>{const{createApplication:f}=await import("./createApplication-BGobIVpX.js");return{createApplication:f}},__vite__mapDeps([0,1,2]),import.meta.url);this.app=await t(this.canvas);const e=new OC(this.app),i=new JC;this.createLighting(this.app,i.period);const s=new VC(this.uiRoot),a=new qC;a.configureMusic(i.period);let r,n;const l=new UC(this.app,e,{onDrift:f=>r.addDrift(f),onCrash:()=>r.crash(),onBoost:()=>a.boost(),onSpill:f=>{r.spill(f),n.spill(f)}}),d=new BC(this.app,l,i);n=new QC(this.app,l,i.period),r=new Ln(this.app,l,d,e,new zC,s,a,new ZC(this.app)),await r.initialize(),this.app.on("update",f=>{const h=Math.min(f,.05);r.update(h),n.update(h,r.state==="DELIVERY"||r.state==="RETURN")})}createLighting(t,e){const i=e==="night"?{ambient:new U(.1,.13,.25),sun:new U(.42,.55,.88),intensity:.46,angle:[32,-48,0]}:e==="evening"?{ambient:new U(.42,.28,.31),sun:new U(1,.48,.24),intensity:.92,angle:[18,-62,0]}:{ambient:new U(.46,.5,.58),sun:new U(1,.88,.72),intensity:1.28,angle:[48,-32,0]};t.scene.ambientLight=i.ambient;const s=new Q("sun");s.addComponent("light",{type:"directional",color:i.sun,intensity:i.intensity,castShadows:!0,shadowDistance:160,shadowResolution:1024}),s.setLocalEulerAngles(...i.angle),t.root.addChild(s)}}const GA=Object.freeze(Object.defineProperty({__proto__:null,Game:e2},Symbol.toStringTag,{value:"Module"}));export{fs as $,Gf as A,d2 as B,_f as C,pn as D,pe as E,Bs as F,Hf as G,Oc as H,sl as I,Fc as J,Uc as K,wf as L,je as M,Lf as N,Df as O,ru as P,Bc as Q,kc as R,w2 as S,Ye as T,On as U,k as V,td as W,zc as X,Ni as Y,id as Z,Di as _,qn as a,A2 as a$,Rn as a0,If as a1,on as a2,bf as a3,Rf as a4,Mf as a5,Vc as a6,Gc as a7,Nf as a8,Of as a9,sd as aA,ad as aB,rd as aC,nd as aD,od as aE,bo as aF,Ro as aG,Mo as aH,No as aI,Oo as aJ,Uo as aK,Fo as aL,Sd as aM,O2 as aN,F2 as aO,Su as aP,Tu as aQ,o2 as aR,X as aS,xu as aT,ir as aU,Cu as aV,Au as aW,kn as aX,ka as aY,U2 as aZ,kd as a_,Ff as aa,Uf as ab,Bf as ac,kf as ad,Wf as ae,Hc as af,Wc as ag,Xc as ah,Yc as ai,$c as aj,hs as ak,qc as al,zf as am,jc as an,Kc as ao,Zc as ap,Mn as aq,Jc as ar,Vf as as,Qc as at,Nn as au,ed as av,ma as aw,Xf as ax,Yf as ay,$f as az,vt as b,Iu as b$,cd as b0,cp as b1,nt as b2,J2 as b3,re as b4,oA as b5,Ss as b6,zd as b7,b2 as b8,R2 as b9,ve as bA,Ae as bB,m2 as bC,_2 as bD,g2 as bE,Nc as bF,c2 as bG,l2 as bH,$d as bI,Zn as bJ,Va as bK,jn as bL,vf as bM,Vu as bN,Ud as bO,cA as bP,h2 as bQ,eA as bR,aA as bS,rA as bT,_t as bU,u2 as bV,f2 as bW,Po as bX,x2 as bY,nn as bZ,xd as b_,N2 as ba,vd as bb,hn as bc,lA as bd,dn as be,Od as bf,nA as bg,Ru as bh,Xu as bi,Yu as bj,$u as bk,bu as bl,M2 as bm,I2 as bn,ue as bo,qf as bp,I as bq,ts as br,Ot as bs,Re as bt,a2 as bu,n2 as bv,su as bw,ds as bx,q as by,s2 as bz,gf as c,Vm as c$,Wn as c0,Pu as c1,Vn as c2,Du as c3,wu as c4,yd as c5,Md as c6,Hn as c7,Rd as c8,Ts as c9,B2 as cA,k2 as cB,z2 as cC,V2 as cD,H2 as cE,G2 as cF,W2 as cG,X2 as cH,Y2 as cI,$2 as cJ,q2 as cK,j2 as cL,K2 as cM,Z2 as cN,Lu as cO,Go as cP,Mu as cQ,Nu as cR,Ou as cS,Fu as cT,Uu as cU,Bu as cV,ku as cW,ar as cX,_ as cY,b as cZ,Ce as c_,$n as ca,Qt as cb,Ld as cc,Ed as cd,bd as ce,Gn as cf,Id as cg,zn as ch,Yn as ci,za as cj,wd as ck,Td as cl,Pd as cm,Ga as cn,Dd as co,Pi as cp,Xn as cq,Ad as cr,Ha as cs,_e as ct,ce as cu,ga as cv,Q2 as cw,Cd as cx,Sa as cy,bt as cz,sA as d,fi as d$,Mt as d0,gh as d1,ni as d2,Ho as d3,sr as d4,Ri as d5,Oi as d6,_s as d7,Gu as d8,xe as d9,vs as dA,hr as dB,uA as dC,hA as dD,Da as dE,Ls as dF,Ua as dG,ou as dH,lu as dI,cu as dJ,du as dK,Fp as dL,ae as dM,ne as dN,zi as dO,pA as dP,im as dQ,ao as dR,zt as dS,fo as dT,ws as dU,Ya as dV,uh as dW,G as dX,mA as dY,nu as dZ,Xe as d_,Vt as da,se as db,fe as dc,Te as dd,$ as de,li as df,Hp as dg,io as dh,Qp as di,Ut as dj,_A as dk,st as dl,as as dm,si as dn,_n as dp,qp as dq,jp as dr,Kp as ds,nh as dt,Yp as du,gA as dv,_h as dw,Vp as dx,tn as dy,w_ as dz,Kn as e,vA as e$,fA as e0,St as e1,co as e2,ho as e3,Ms as e4,r2 as e5,AA as e6,LA as e7,wA as e8,Rc as e9,S_ as eA,cm as eB,dm as eC,Ma as eD,ye as eE,Bx as eF,q_ as eG,Fe as eH,_o as eI,dA as eJ,zp as eK,P2 as eL,S2 as eM,Cn as eN,dr as eO,gt as eP,_d as eQ,gd as eR,ih as eS,D2 as eT,L2 as eU,Xx as eV,RA as eW,jx as eX,qx as eY,Yx as eZ,$x as e_,Ui as ea,Qa as eb,gn as ec,pr as ed,Ps as ee,oi as ef,Kd as eg,Is as eh,km as ei,bc as ej,go as ek,Q as el,vn as em,tr as en,Ds as eo,oh as ep,ki as eq,K_ as er,zl as es,D_ as et,Le as eu,ii as ev,pm as ew,Ee as ex,lm as ey,Lt as ez,ge as f,E2 as f$,SA as f0,tC as f1,uo as f2,Qr as f3,Xa as f4,Ft as f5,is as f6,eC as f7,mo as f8,Do as f9,jm as fA,$e as fB,ig as fC,sg as fD,Wv as fE,md as fF,pd as fG,ud as fH,fd as fI,hd as fJ,dd as fK,Ba as fL,ri as fM,C2 as fN,ld as fO,ei as fP,Wp as fQ,hh as fR,yn as fS,ul as fT,Gg as fU,vm as fV,Ta as fW,v2 as fX,an as fY,Io as fZ,T2 as f_,cf as fa,Tt as fb,At as fc,qv as fd,$v as fe,PA as ff,IA as fg,Uh as fh,Jv as fi,bA as fj,CA as fk,qm as fl,yA as fm,xA as fn,J as fo,ml as fp,Gs as fq,kg as fr,jd as fs,TA as ft,EA as fu,Pm as fv,zE as fw,lx as fx,tc as fy,pl as fz,Bd as g,y2 as g0,qd as g1,Zd as g2,Jn as g3,Jd as g4,Qd as g5,eh as g6,th as g7,Tf as g8,p2 as g9,sm as ga,am as gb,DA as gc,Ia as gd,So as ge,Mh as gf,jv as gg,Et as gh,ms as gi,vu as gj,ln as gk,va as gl,FA as gm,Ie as gn,OA as go,VA as gp,zA as gq,kA as gr,BA as gs,MA as gt,NA as gu,UA as gv,Hh as gw,bv as gx,cc as gy,GA as gz,rn as h,Nt as i,Sf as j,sn as k,U as l,gs as m,Pf as n,Ue as o,bi as p,at as q,au as r,fn as s,tA as t,iA as u,jh as v,Nd as w,xf as x,Cf as y,Af as z};
