(function(r,M){typeof exports=="object"&&typeof module<"u"?module.exports=M(require("vue")):typeof define=="function"&&define.amd?define(["vue"],M):(r=typeof globalThis<"u"?globalThis:r||self,r.Lightbox=M(r.Vue))})(this,function(r){"use strict";const M=(c,a)=>{const d=c.__vccOpts||c;for(const[Q,l]of a)d[Q]=l;return d},it={},nt=[r.createElementVNode("svg",{fill:"white",x:"0px",y:"0px",width:"100%",height:"100%",viewBox:"0 0 512 512"},[r.createElementVNode("path",{d:"M213.7,256L213.7,256L213.7,256L380.9,81.9c4.2-4.3,4.1-11.4-0.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-0.2L131.1,247.9 c-2.2,2.2-3.2,5.2-3,8.1c-0.1,3,0.9,5.9,3,8.1l204.2,212.7c4.2,4.3,11.2,4.2,15.5-0.2l29.9-30.6c4.3-4.4,4.4-11.5,0.2-15.8 L213.7,256z"})],-1)];function rt(c,a){return r.openBlock(),r.createElementBlock("span",null,nt)}const st=M(it,[["render",rt]]),ot={},at=[r.createElementVNode("svg",{fill:"white",x:"0px",y:"0px",width:"100%",height:"100%",viewBox:"0 0 512 512"},[r.createElementVNode("path",{d:"M298.3,256L298.3,256L298.3,256L131.1,81.9c-4.2-4.3-4.1-11.4,0.2-15.8l29.9-30.6c4.3-4.4,11.3-4.5,15.5-0.2l204.2,212.7 c2.2,2.2,3.2,5.2,3,8.1c0.1,3-0.9,5.9-3,8.1L176.7,476.8c-4.2,4.3-11.2,4.2-15.5-0.2L131.3,446c-4.3-4.4-4.4-11.5-0.2-15.8 L298.3,256z"})],-1)];function lt(c,a){return r.openBlock(),r.createElementBlock("span",null,at)}const ct=M(ot,[["render",lt]]),ht={},ut={fill:"white",x:"0px",y:"0px",width:"100%",height:"100%",viewBox:"0 0 512 512",style:{"enable-background":"new 0 0 512 512"}},ft=[r.createElementVNode("path",{d:"M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4 L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1 c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1 c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"},null,-1)];function dt(c,a){return r.openBlock(),r.createElementBlock("span",null,[(r.openBlock(),r.createElementBlock("svg",ut,ft))])}const mt=M(ht,[["render",dt]]),vt={},pt={x:"0px",y:"0px",viewBox:"0 0 271.953 271.953",style:{"enable-background":"new 0 0 271.953 271.953",margin:"12px"},"xml:space":"preserve"},Tt=[r.createElementVNode("g",null,[r.createElementVNode("g",null,[r.createElementVNode("path",{style:{fill:"#fff"},d:"M135.977,271.953c75.097,0,135.977-60.879,135.977-135.977S211.074,0,135.977,0S0,60.879,0,135.977    S60.879,271.953,135.977,271.953z M250.197,135.977c0,62.979-51.241,114.22-114.22,114.22s-114.22-51.241-114.22-114.22    s51.241-114.22,114.22-114.22S250.197,72.998,250.197,135.977z"}),r.createElementVNode("path",{style:{fill:"#fff"},d:"M112.295,205.031c2.692,1.115,5.434,1.659,8.235,1.659c5.662,0,11.183-2.208,15.344-6.375    l48.93-48.952c8.496-8.496,8.485-22.273-0.011-30.769l-48.957-48.952c-4.161-4.161-9.73-6.375-15.393-6.375    c-2.801,0-5.461,0.544-8.153,1.659c-8.126,3.367-13.255,11.297-13.255,20.097v97.903    C99.034,193.729,104.164,201.664,112.295,205.031z M120.791,88.613v-1.588l48.952,48.952l-48.952,48.952V88.613z"})])],-1)];function gt(c,a){return r.openBlock(),r.createElementBlock("svg",pt,Tt)}const Et=M(vt,[["render",gt]]);function yt(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var Me={exports:{}};/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */(function(c){(function(a,d,Q,l){var u=["","webkit","Moz","MS","ms","o"],me=d.createElement("div"),ve="function",B=Math.round,O=Math.abs,f=Date.now;function C(e,t,i){return setTimeout(pe(e,i),t)}function H(e,t,i){return Array.isArray(e)?(L(e,i[t],i),!0):!1}function L(e,t,i){var n;if(e)if(e.forEach)e.forEach(t,i);else if(e.length!==l)for(n=0;n<e.length;)t.call(i,e[n],n,e),n++;else for(n in e)e.hasOwnProperty(n)&&t.call(i,e[n],n,e)}function Oe(e,t,i){var n="DEPRECATED METHOD: "+t+`
`+i+` AT 
`;return function(){var s=new Error("get-stack-trace"),o=s&&s.stack?s.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",h=a.console&&(a.console.warn||a.console.log);return h&&h.call(a.console,n,o),e.apply(this,arguments)}}var b;typeof Object.assign!="function"?b=function(t){if(t===l||t===null)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(t),n=1;n<arguments.length;n++){var s=arguments[n];if(s!==l&&s!==null)for(var o in s)s.hasOwnProperty(o)&&(i[o]=s[o])}return i}:b=Object.assign;var Le=Oe(function(t,i,n){for(var s=Object.keys(i),o=0;o<s.length;)(!n||n&&t[s[o]]===l)&&(t[s[o]]=i[s[o]]),o++;return t},"extend","Use `assign`."),Ht=Oe(function(t,i){return Le(t,i,!0)},"merge","Use `assign`.");function y(e,t,i){var n=t.prototype,s;s=e.prototype=Object.create(n),s.constructor=e,s._super=n,i&&b(s,i)}function pe(e,t){return function(){return e.apply(t,arguments)}}function Te(e,t){return typeof e==ve?e.apply(t&&t[0]||l,t):e}function xe(e,t){return e===l?t:e}function $(e,t,i){L(te(t),function(n){e.addEventListener(n,i,!1)})}function ee(e,t,i){L(te(t),function(n){e.removeEventListener(n,i,!1)})}function we(e,t){for(;e;){if(e==t)return!0;e=e.parentNode}return!1}function V(e,t){return e.indexOf(t)>-1}function te(e){return e.trim().split(/\s+/g)}function F(e,t,i){if(e.indexOf&&!i)return e.indexOf(t);for(var n=0;n<e.length;){if(i&&e[n][i]==t||!i&&e[n]===t)return n;n++}return-1}function ie(e){return Array.prototype.slice.call(e,0)}function ke(e,t,i){for(var n=[],s=[],o=0;o<e.length;){var h=t?e[o][t]:e[o];F(s,h)<0&&n.push(e[o]),s[o]=h,o++}return i&&(t?n=n.sort(function(p,g){return p[t]>g[t]}):n=n.sort()),n}function ne(e,t){for(var i,n,s=t[0].toUpperCase()+t.slice(1),o=0;o<u.length;){if(i=u[o],n=i?i+s:t,n in e)return n;o++}return l}var Vt=1;function Rt(){return Vt++}function Be(e){var t=e.ownerDocument||e;return t.defaultView||t.parentWindow||a}var Ut=/mobile|tablet|ip(ad|hone|od)|android/i,De="ontouchstart"in a,Yt=ne(a,"PointerEvent")!==l,Ft=De&&Ut.test(navigator.userAgent),q="touch",Xt="pen",ge="mouse",qt="kinect",zt=25,T=1,R=2,m=4,E=8,re=1,z=2,W=4,G=8,Z=16,P=z|W,U=G|Z,He=P|U,Ve=["x","y"],se=["clientX","clientY"];function _(e,t){var i=this;this.manager=e,this.callback=t,this.element=e.element,this.target=e.options.inputTarget,this.domHandler=function(n){Te(e.options.enable,[e])&&i.handler(n)},this.init()}_.prototype={handler:function(){},init:function(){this.evEl&&$(this.element,this.evEl,this.domHandler),this.evTarget&&$(this.target,this.evTarget,this.domHandler),this.evWin&&$(Be(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&ee(this.element,this.evEl,this.domHandler),this.evTarget&&ee(this.target,this.evTarget,this.domHandler),this.evWin&&ee(Be(this.element),this.evWin,this.domHandler)}};function Wt(e){var t,i=e.options.inputClass;return i?t=i:Yt?t=ye:Ft?t=le:De?t=_e:t=ae,new t(e,Gt)}function Gt(e,t,i){var n=i.pointers.length,s=i.changedPointers.length,o=t&T&&n-s===0,h=t&(m|E)&&n-s===0;i.isFirst=!!o,i.isFinal=!!h,o&&(e.session={}),i.eventType=t,Zt(e,i),e.emit("hammer.input",i),e.recognize(i),e.session.prevInput=i}function Zt(e,t){var i=e.session,n=t.pointers,s=n.length;i.firstInput||(i.firstInput=Re(t)),s>1&&!i.firstMultiple?i.firstMultiple=Re(t):s===1&&(i.firstMultiple=!1);var o=i.firstInput,h=i.firstMultiple,v=h?h.center:o.center,p=t.center=Ue(n);t.timeStamp=f(),t.deltaTime=t.timeStamp-o.timeStamp,t.angle=Ee(v,p),t.distance=oe(v,p),jt(i,t),t.offsetDirection=Fe(t.deltaX,t.deltaY);var g=Ye(t.deltaTime,t.deltaX,t.deltaY);t.overallVelocityX=g.x,t.overallVelocityY=g.y,t.overallVelocity=O(g.x)>O(g.y)?g.x:g.y,t.scale=h?Qt(h.pointers,n):1,t.rotation=h?Kt(h.pointers,n):0,t.maxPointers=i.prevInput?t.pointers.length>i.prevInput.maxPointers?t.pointers.length:i.prevInput.maxPointers:t.pointers.length,Jt(i,t);var A=e.element;we(t.srcEvent.target,A)&&(A=t.srcEvent.target),t.target=A}function jt(e,t){var i=t.center,n=e.offsetDelta||{},s=e.prevDelta||{},o=e.prevInput||{};(t.eventType===T||o.eventType===m)&&(s=e.prevDelta={x:o.deltaX||0,y:o.deltaY||0},n=e.offsetDelta={x:i.x,y:i.y}),t.deltaX=s.x+(i.x-n.x),t.deltaY=s.y+(i.y-n.y)}function Jt(e,t){var i=e.lastInterval||t,n=t.timeStamp-i.timeStamp,s,o,h,v;if(t.eventType!=E&&(n>zt||i.velocity===l)){var p=t.deltaX-i.deltaX,g=t.deltaY-i.deltaY,A=Ye(n,p,g);o=A.x,h=A.y,s=O(A.x)>O(A.y)?A.x:A.y,v=Fe(p,g),e.lastInterval=t}else s=i.velocity,o=i.velocityX,h=i.velocityY,v=i.direction;t.velocity=s,t.velocityX=o,t.velocityY=h,t.direction=v}function Re(e){for(var t=[],i=0;i<e.pointers.length;)t[i]={clientX:B(e.pointers[i].clientX),clientY:B(e.pointers[i].clientY)},i++;return{timeStamp:f(),pointers:t,center:Ue(t),deltaX:e.deltaX,deltaY:e.deltaY}}function Ue(e){var t=e.length;if(t===1)return{x:B(e[0].clientX),y:B(e[0].clientY)};for(var i=0,n=0,s=0;s<t;)i+=e[s].clientX,n+=e[s].clientY,s++;return{x:B(i/t),y:B(n/t)}}function Ye(e,t,i){return{x:t/e||0,y:i/e||0}}function Fe(e,t){return e===t?re:O(e)>=O(t)?e<0?z:W:t<0?G:Z}function oe(e,t,i){i||(i=Ve);var n=t[i[0]]-e[i[0]],s=t[i[1]]-e[i[1]];return Math.sqrt(n*n+s*s)}function Ee(e,t,i){i||(i=Ve);var n=t[i[0]]-e[i[0]],s=t[i[1]]-e[i[1]];return Math.atan2(s,n)*180/Math.PI}function Kt(e,t){return Ee(t[1],t[0],se)+Ee(e[1],e[0],se)}function Qt(e,t){return oe(t[0],t[1],se)/oe(e[0],e[1],se)}var $t={mousedown:T,mousemove:R,mouseup:m},ei="mousedown",ti="mousemove mouseup";function ae(){this.evEl=ei,this.evWin=ti,this.pressed=!1,_.apply(this,arguments)}y(ae,_,{handler:function(t){var i=$t[t.type];i&T&&t.button===0&&(this.pressed=!0),i&R&&t.which!==1&&(i=m),this.pressed&&(i&m&&(this.pressed=!1),this.callback(this.manager,i,{pointers:[t],changedPointers:[t],pointerType:ge,srcEvent:t}))}});var ii={pointerdown:T,pointermove:R,pointerup:m,pointercancel:E,pointerout:E},ni={2:q,3:Xt,4:ge,5:qt},Xe="pointerdown",qe="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(Xe="MSPointerDown",qe="MSPointerMove MSPointerUp MSPointerCancel");function ye(){this.evEl=Xe,this.evWin=qe,_.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}y(ye,_,{handler:function(t){var i=this.store,n=!1,s=t.type.toLowerCase().replace("ms",""),o=ii[s],h=ni[t.pointerType]||t.pointerType,v=h==q,p=F(i,t.pointerId,"pointerId");o&T&&(t.button===0||v)?p<0&&(i.push(t),p=i.length-1):o&(m|E)&&(n=!0),!(p<0)&&(i[p]=t,this.callback(this.manager,o,{pointers:i,changedPointers:[t],pointerType:h,srcEvent:t}),n&&i.splice(p,1))}});var ri={touchstart:T,touchmove:R,touchend:m,touchcancel:E},si="touchstart",oi="touchstart touchmove touchend touchcancel";function ze(){this.evTarget=si,this.evWin=oi,this.started=!1,_.apply(this,arguments)}y(ze,_,{handler:function(t){var i=ri[t.type];if(i===T&&(this.started=!0),!!this.started){var n=ai.call(this,t,i);i&(m|E)&&n[0].length-n[1].length===0&&(this.started=!1),this.callback(this.manager,i,{pointers:n[0],changedPointers:n[1],pointerType:q,srcEvent:t})}}});function ai(e,t){var i=ie(e.touches),n=ie(e.changedTouches);return t&(m|E)&&(i=ke(i.concat(n),"identifier",!0)),[i,n]}var li={touchstart:T,touchmove:R,touchend:m,touchcancel:E},ci="touchstart touchmove touchend touchcancel";function le(){this.evTarget=ci,this.targetIds={},_.apply(this,arguments)}y(le,_,{handler:function(t){var i=li[t.type],n=hi.call(this,t,i);n&&this.callback(this.manager,i,{pointers:n[0],changedPointers:n[1],pointerType:q,srcEvent:t})}});function hi(e,t){var i=ie(e.touches),n=this.targetIds;if(t&(T|R)&&i.length===1)return n[i[0].identifier]=!0,[i,i];var s,o,h=ie(e.changedTouches),v=[],p=this.target;if(o=i.filter(function(g){return we(g.target,p)}),t===T)for(s=0;s<o.length;)n[o[s].identifier]=!0,s++;for(s=0;s<h.length;)n[h[s].identifier]&&v.push(h[s]),t&(m|E)&&delete n[h[s].identifier],s++;if(v.length)return[ke(o.concat(v),"identifier",!0),v]}var ui=2500,We=25;function _e(){_.apply(this,arguments);var e=pe(this.handler,this);this.touch=new le(this.manager,e),this.mouse=new ae(this.manager,e),this.primaryTouch=null,this.lastTouches=[]}y(_e,_,{handler:function(t,i,n){var s=n.pointerType==q,o=n.pointerType==ge;if(!(o&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(s)fi.call(this,i,n);else if(o&&di.call(this,n))return;this.callback(t,i,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});function fi(e,t){e&T?(this.primaryTouch=t.changedPointers[0].identifier,Ge.call(this,t)):e&(m|E)&&Ge.call(this,t)}function Ge(e){var t=e.changedPointers[0];if(t.identifier===this.primaryTouch){var i={x:t.clientX,y:t.clientY};this.lastTouches.push(i);var n=this.lastTouches,s=function(){var o=n.indexOf(i);o>-1&&n.splice(o,1)};setTimeout(s,ui)}}function di(e){for(var t=e.srcEvent.clientX,i=e.srcEvent.clientY,n=0;n<this.lastTouches.length;n++){var s=this.lastTouches[n],o=Math.abs(t-s.x),h=Math.abs(i-s.y);if(o<=We&&h<=We)return!0}return!1}var Ze=ne(me.style,"touchAction"),je=Ze!==l,Je="compute",Ke="auto",Ie="manipulation",Y="none",j="pan-x",J="pan-y",ce=vi();function Ne(e,t){this.manager=e,this.set(t)}Ne.prototype={set:function(e){e==Je&&(e=this.compute()),je&&this.manager.element.style&&ce[e]&&(this.manager.element.style[Ze]=e),this.actions=e.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var e=[];return L(this.manager.recognizers,function(t){Te(t.options.enable,[t])&&(e=e.concat(t.getTouchAction()))}),mi(e.join(" "))},preventDefaults:function(e){var t=e.srcEvent,i=e.offsetDirection;if(this.manager.session.prevented){t.preventDefault();return}var n=this.actions,s=V(n,Y)&&!ce[Y],o=V(n,J)&&!ce[J],h=V(n,j)&&!ce[j];if(s){var v=e.pointers.length===1,p=e.distance<2,g=e.deltaTime<250;if(v&&p&&g)return}if(!(h&&o)&&(s||o&&i&P||h&&i&U))return this.preventSrc(t)},preventSrc:function(e){this.manager.session.prevented=!0,e.preventDefault()}};function mi(e){if(V(e,Y))return Y;var t=V(e,j),i=V(e,J);return t&&i?Y:t||i?t?j:J:V(e,Ie)?Ie:Ke}function vi(){if(!je)return!1;var e={},t=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(i){e[i]=t?a.CSS.supports("touch-action",i):!0}),e}var he=1,I=2,X=4,D=8,x=D,K=16,S=32;function w(e){this.options=b({},this.defaults,e||{}),this.id=Rt(),this.manager=null,this.options.enable=xe(this.options.enable,!0),this.state=he,this.simultaneous={},this.requireFail=[]}w.prototype={defaults:{},set:function(e){return b(this.options,e),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(e){if(H(e,"recognizeWith",this))return this;var t=this.simultaneous;return e=ue(e,this),t[e.id]||(t[e.id]=e,e.recognizeWith(this)),this},dropRecognizeWith:function(e){return H(e,"dropRecognizeWith",this)?this:(e=ue(e,this),delete this.simultaneous[e.id],this)},requireFailure:function(e){if(H(e,"requireFailure",this))return this;var t=this.requireFail;return e=ue(e,this),F(t,e)===-1&&(t.push(e),e.requireFailure(this)),this},dropRequireFailure:function(e){if(H(e,"dropRequireFailure",this))return this;e=ue(e,this);var t=F(this.requireFail,e);return t>-1&&this.requireFail.splice(t,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(e){return!!this.simultaneous[e.id]},emit:function(e){var t=this,i=this.state;function n(s){t.manager.emit(s,e)}i<D&&n(t.options.event+Qe(i)),n(t.options.event),e.additionalEvent&&n(e.additionalEvent),i>=D&&n(t.options.event+Qe(i))},tryEmit:function(e){if(this.canEmit())return this.emit(e);this.state=S},canEmit:function(){for(var e=0;e<this.requireFail.length;){if(!(this.requireFail[e].state&(S|he)))return!1;e++}return!0},recognize:function(e){var t=b({},e);if(!Te(this.options.enable,[this,t])){this.reset(),this.state=S;return}this.state&(x|K|S)&&(this.state=he),this.state=this.process(t),this.state&(I|X|D|K)&&this.tryEmit(t)},process:function(e){},getTouchAction:function(){},reset:function(){}};function Qe(e){return e&K?"cancel":e&D?"end":e&X?"move":e&I?"start":""}function $e(e){return e==Z?"down":e==G?"up":e==z?"left":e==W?"right":""}function ue(e,t){var i=t.manager;return i?i.get(e):e}function N(){w.apply(this,arguments)}y(N,w,{defaults:{pointers:1},attrTest:function(e){var t=this.options.pointers;return t===0||e.pointers.length===t},process:function(e){var t=this.state,i=e.eventType,n=t&(I|X),s=this.attrTest(e);return n&&(i&E||!s)?t|K:n||s?i&m?t|D:t&I?t|X:I:S}});function fe(){N.apply(this,arguments),this.pX=null,this.pY=null}y(fe,N,{defaults:{event:"pan",threshold:10,pointers:1,direction:He},getTouchAction:function(){var e=this.options.direction,t=[];return e&P&&t.push(J),e&U&&t.push(j),t},directionTest:function(e){var t=this.options,i=!0,n=e.distance,s=e.direction,o=e.deltaX,h=e.deltaY;return s&t.direction||(t.direction&P?(s=o===0?re:o<0?z:W,i=o!=this.pX,n=Math.abs(e.deltaX)):(s=h===0?re:h<0?G:Z,i=h!=this.pY,n=Math.abs(e.deltaY))),e.direction=s,i&&n>t.threshold&&s&t.direction},attrTest:function(e){return N.prototype.attrTest.call(this,e)&&(this.state&I||!(this.state&I)&&this.directionTest(e))},emit:function(e){this.pX=e.deltaX,this.pY=e.deltaY;var t=$e(e.direction);t&&(e.additionalEvent=this.options.event+t),this._super.emit.call(this,e)}});function Ce(){N.apply(this,arguments)}y(Ce,N,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Y]},attrTest:function(e){return this._super.attrTest.call(this,e)&&(Math.abs(e.scale-1)>this.options.threshold||this.state&I)},emit:function(e){if(e.scale!==1){var t=e.scale<1?"in":"out";e.additionalEvent=this.options.event+t}this._super.emit.call(this,e)}});function be(){w.apply(this,arguments),this._timer=null,this._input=null}y(be,w,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[Ke]},process:function(e){var t=this.options,i=e.pointers.length===t.pointers,n=e.distance<t.threshold,s=e.deltaTime>t.time;if(this._input=e,!n||!i||e.eventType&(m|E)&&!s)this.reset();else if(e.eventType&T)this.reset(),this._timer=C(function(){this.state=x,this.tryEmit()},t.time,this);else if(e.eventType&m)return x;return S},reset:function(){clearTimeout(this._timer)},emit:function(e){this.state===x&&(e&&e.eventType&m?this.manager.emit(this.options.event+"up",e):(this._input.timeStamp=f(),this.manager.emit(this.options.event,this._input)))}});function Pe(){N.apply(this,arguments)}y(Pe,N,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Y]},attrTest:function(e){return this._super.attrTest.call(this,e)&&(Math.abs(e.rotation)>this.options.threshold||this.state&I)}});function Se(){N.apply(this,arguments)}y(Se,N,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:P|U,pointers:1},getTouchAction:function(){return fe.prototype.getTouchAction.call(this)},attrTest:function(e){var t=this.options.direction,i;return t&(P|U)?i=e.overallVelocity:t&P?i=e.overallVelocityX:t&U&&(i=e.overallVelocityY),this._super.attrTest.call(this,e)&&t&e.offsetDirection&&e.distance>this.options.threshold&&e.maxPointers==this.options.pointers&&O(i)>this.options.velocity&&e.eventType&m},emit:function(e){var t=$e(e.offsetDirection);t&&this.manager.emit(this.options.event+t,e),this.manager.emit(this.options.event,e)}});function de(){w.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}y(de,w,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[Ie]},process:function(e){var t=this.options,i=e.pointers.length===t.pointers,n=e.distance<t.threshold,s=e.deltaTime<t.time;if(this.reset(),e.eventType&T&&this.count===0)return this.failTimeout();if(n&&s&&i){if(e.eventType!=m)return this.failTimeout();var o=this.pTime?e.timeStamp-this.pTime<t.interval:!0,h=!this.pCenter||oe(this.pCenter,e.center)<t.posThreshold;this.pTime=e.timeStamp,this.pCenter=e.center,!h||!o?this.count=1:this.count+=1,this._input=e;var v=this.count%t.taps;if(v===0)return this.hasRequireFailures()?(this._timer=C(function(){this.state=x,this.tryEmit()},t.interval,this),I):x}return S},failTimeout:function(){return this._timer=C(function(){this.state=S},this.options.interval,this),S},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==x&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}});function k(e,t){return t=t||{},t.recognizers=xe(t.recognizers,k.defaults.preset),new Ae(e,t)}k.VERSION="2.0.7",k.defaults={domEvents:!1,touchAction:Je,enable:!0,inputTarget:null,inputClass:null,preset:[[Pe,{enable:!1}],[Ce,{enable:!1},["rotate"]],[Se,{direction:P}],[fe,{direction:P},["swipe"]],[de],[de,{event:"doubletap",taps:2},["tap"]],[be]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var pi=1,et=2;function Ae(e,t){this.options=b({},k.defaults,t||{}),this.options.inputTarget=this.options.inputTarget||e,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=e,this.input=Wt(this),this.touchAction=new Ne(this,this.options.touchAction),tt(this,!0),L(this.options.recognizers,function(i){var n=this.add(new i[0](i[1]));i[2]&&n.recognizeWith(i[2]),i[3]&&n.requireFailure(i[3])},this)}Ae.prototype={set:function(e){return b(this.options,e),e.touchAction&&this.touchAction.update(),e.inputTarget&&(this.input.destroy(),this.input.target=e.inputTarget,this.input.init()),this},stop:function(e){this.session.stopped=e?et:pi},recognize:function(e){var t=this.session;if(!t.stopped){this.touchAction.preventDefaults(e);var i,n=this.recognizers,s=t.curRecognizer;(!s||s&&s.state&x)&&(s=t.curRecognizer=null);for(var o=0;o<n.length;)i=n[o],t.stopped!==et&&(!s||i==s||i.canRecognizeWith(s))?i.recognize(e):i.reset(),!s&&i.state&(I|X|D)&&(s=t.curRecognizer=i),o++}},get:function(e){if(e instanceof w)return e;for(var t=this.recognizers,i=0;i<t.length;i++)if(t[i].options.event==e)return t[i];return null},add:function(e){if(H(e,"add",this))return this;var t=this.get(e.options.event);return t&&this.remove(t),this.recognizers.push(e),e.manager=this,this.touchAction.update(),e},remove:function(e){if(H(e,"remove",this))return this;if(e=this.get(e),e){var t=this.recognizers,i=F(t,e);i!==-1&&(t.splice(i,1),this.touchAction.update())}return this},on:function(e,t){if(e!==l&&t!==l){var i=this.handlers;return L(te(e),function(n){i[n]=i[n]||[],i[n].push(t)}),this}},off:function(e,t){if(e!==l){var i=this.handlers;return L(te(e),function(n){t?i[n]&&i[n].splice(F(i[n],t),1):delete i[n]}),this}},emit:function(e,t){this.options.domEvents&&Ti(e,t);var i=this.handlers[e]&&this.handlers[e].slice();if(!(!i||!i.length)){t.type=e,t.preventDefault=function(){t.srcEvent.preventDefault()};for(var n=0;n<i.length;)i[n](t),n++}},destroy:function(){this.element&&tt(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}};function tt(e,t){var i=e.element;if(i.style){var n;L(e.options.cssProps,function(s,o){n=ne(i.style,o),t?(e.oldCssProps[n]=i.style[n],i.style[n]=s):i.style[n]=e.oldCssProps[n]||""}),t||(e.oldCssProps={})}}function Ti(e,t){var i=d.createEvent("Event");i.initEvent(e,!0,!0),i.gesture=t,t.target.dispatchEvent(i)}b(k,{INPUT_START:T,INPUT_MOVE:R,INPUT_END:m,INPUT_CANCEL:E,STATE_POSSIBLE:he,STATE_BEGAN:I,STATE_CHANGED:X,STATE_ENDED:D,STATE_RECOGNIZED:x,STATE_CANCELLED:K,STATE_FAILED:S,DIRECTION_NONE:re,DIRECTION_LEFT:z,DIRECTION_RIGHT:W,DIRECTION_UP:G,DIRECTION_DOWN:Z,DIRECTION_HORIZONTAL:P,DIRECTION_VERTICAL:U,DIRECTION_ALL:He,Manager:Ae,Input:_,TouchAction:Ne,TouchInput:le,MouseInput:ae,PointerEventInput:ye,TouchMouseInput:_e,SingleTouchInput:ze,Recognizer:w,AttrRecognizer:N,Tap:de,Pan:fe,Swipe:Se,Pinch:Ce,Rotate:Pe,Press:be,on:$,off:ee,each:L,merge:Ht,extend:Le,assign:b,inherit:y,bindFn:pe,prefixed:ne});var gi=typeof a<"u"?a:typeof self<"u"?self:{};gi.Hammer=k,typeof l=="function"&&l.amd?l(function(){return k}):c.exports?c.exports=k:a[Q]=k})(window,document,"Hammer")})(Me);var _t=Me.exports;const It=yt(_t),Ni="",Nt={components:{LeftArrowIcon:st,RightArrowIcon:ct,CloseIcon:mt,VideoIcon:Et},props:{media:{type:Array,required:!0},disableScroll:{type:Boolean,default:!0},showLightBox:{type:Boolean,default:!0},closable:{type:Boolean,default:!0},startAt:{type:Number,default:0},nThumbs:{type:Number,default:7},showThumbs:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!1},autoPlayTime:{type:Number,default:3e3},interfaceHideTime:{type:Number,default:3e3},showCaption:{type:Boolean,default:!1},lengthToLoadMore:{type:Number,default:0},closeText:{type:String,default:"Close (Esc)"},previousText:{type:String,default:"Previous"},nextText:{type:String,default:"Next"}},data(){return{select:this.startAt,lightBoxShown:this.showLightBox,controlsHidden:!1,imageTransitionName:"vib-image-no-transition",timer:null,interactionTimer:null,interfaceHovered:!1}},computed:{currentMedia(){return this.media[this.select]},thumbIndex(){const c=Math.floor(this.nThumbs/2);return this.select>=c&&this.select<this.media.length-c?{begin:this.select-c+(1-this.nThumbs%2),end:this.select+c}:this.select<c?{begin:0,end:this.nThumbs-1}:{begin:this.media.length-this.nThumbs,end:this.media.length-1}},imagesThumb(){return this.media.map(({thumb:c,type:a})=>({thumb:c,type:a}))}},watch:{lightBoxShown(c){document!=null&&this.onToggleLightBox(c)},select(){this.$emit("onImageChanged",this.select),this.select>=this.media.length-this.lengthToLoadMore-1&&this.$emit("onLoad"),this.select===this.media.length-1&&this.$emit("onLastIndex"),this.select===0&&this.$emit("onFirstIndex"),this.select===this.startAt&&this.$emit("onStartIndex")}},mounted(){if(this.autoPlay&&(this.timer=setInterval(this.nextImage,this.autoPlayTime)),this.onToggleLightBox(this.lightBoxShown),this.$refs.container){const c=new It(this.$refs.container);c.on("swiperight",this.previousImage),c.on("swipeleft",this.nextImage),this.$refs.container.addEventListener("mousedown",this.handleMouseActivity),this.$refs.container.addEventListener("mousemove",this.handleMouseActivity),this.$refs.container.addEventListener("touchmove",this.handleMouseActivity)}},beforeDestroy(){document.removeEventListener("keydown",this.addKeyEvent),this.autoPlay&&clearInterval(this.timer),this.$refs.container&&(this.$refs.container.removeEventListener("mousedown",this.handleMouseActivity),this.$refs.container.removeEventListener("mousemove",this.handleMouseActivity),this.$refs.container.removeEventListener("touchmove",this.handleMouseActivity))},methods:{onLightBoxOpen(){this.$emit("onOpened"),this.disableScroll&&document.querySelector("html").classList.add("no-scroll"),document.querySelector("body").classList.add("vib-open"),document.addEventListener("keydown",this.addKeyEvent),this.$refs.video&&this.$refs.video.autoplay&&this.$refs.video.play()},onLightBoxClose(){this.$emit("onClosed"),this.disableScroll&&document.querySelector("html").classList.remove("no-scroll"),document.querySelector("body").classList.remove("vib-open"),document.removeEventListener("keydown",this.addKeyEvent),this.$refs.video&&(this.$refs.video.pause(),this.$refs.video.currentTime="0")},onToggleLightBox(c){c?this.onLightBoxOpen():this.onLightBoxClose()},showImage(c){this.select=c,this.controlsHidden=!1,this.lightBoxShown=!0},addKeyEvent(c){switch(c.keyCode){case 37:this.previousImage();break;case 39:this.nextImage();break;case 27:this.closeLightBox();break}},closeLightBox(){this.$refs.video&&this.$refs.video.pause(),this.closable&&(this.lightBoxShown=!1)},nextImage(){this.select=(this.select+1)%this.media.length},previousImage(){this.select=(this.select+this.media.length-1)%this.media.length},enableImageTransition(){this.handleMouseActivity(),this.imageTransitionName="vib-image-transition"},disableImageTransition(){this.imageTransitionName="vib-image-no-transition"},handleMouseActivity(){clearTimeout(this.interactionTimer),this.controlsHidden&&(this.controlsHidden=!1),this.interfaceHovered?this.stopInteractionTimer():this.startInteractionTimer()},startInteractionTimer(){this.interactionTimer=setTimeout(()=>{this.controlsHidden=!0},this.interfaceHideTime)},stopInteractionTimer(){this.interactionTimer=null}}},Ct={key:0,ref:"container",class:"vib-container"},bt=["src","srcset","alt"],Pt={key:1,class:"video-background"},St=["src"],At=["width","height","autoplay"],Mt=["src","type"],Ot=["onClick"],Lt=["innerHTML"],xt={class:"vib-footer-count"},wt=["title"],kt=["title"],Bt=["title"];function Dt(c,a,d,Q,l,u){const me=r.resolveComponent("VideoIcon"),ve=r.resolveComponent("CloseIcon"),B=r.resolveComponent("LeftArrowIcon"),O=r.resolveComponent("RightArrowIcon");return r.openBlock(),r.createElementBlock("div",{onClick:a[14]||(a[14]=r.withModifiers((...f)=>u.closeLightBox&&u.closeLightBox(...f),["stop"]))},[r.createVNode(r.Transition,{mode:"out-in",name:"vib-container-transition",onAfterEnter:u.enableImageTransition,onBeforeLeave:u.disableImageTransition},{default:r.withCtx(()=>[d.media&&d.media.length>0?r.withDirectives((r.openBlock(),r.createElementBlock("div",Ct,[r.createElementVNode("div",{class:"vib-content",onClick:a[0]||(a[0]=r.withModifiers(()=>{},["stop"]))},[r.createVNode(r.Transition,{mode:"out-in",name:l.imageTransitionName},{default:r.withCtx(()=>[u.currentMedia.type==null||u.currentMedia.type=="image"?(r.openBlock(),r.createElementBlock("img",{key:u.currentMedia.src,src:u.currentMedia.src,srcset:u.currentMedia.srcset||"",class:"vib-image",alt:u.currentMedia.caption},null,8,bt)):d.media[l.select].type=="youtube"?(r.openBlock(),r.createElementBlock("div",Pt,[r.createElementVNode("iframe",{src:"https://www.youtube.com/embed/"+d.media[l.select].id+"?showinfo=0",width:"560",height:"315",frameborder:"0",allowfullscreen:""},null,8,St)])):u.currentMedia.type=="video"?(r.openBlock(),r.createElementBlock("video",{key:u.currentMedia.sources[0].src,ref:"video",controls:"",width:u.currentMedia.width,height:u.currentMedia.height,autoplay:u.currentMedia.autoplay},[(r.openBlock(!0),r.createElementBlock(r.Fragment,null,r.renderList(u.currentMedia.sources,f=>(r.openBlock(),r.createElementBlock("source",{key:f.src,src:f.src,type:f.type},null,8,Mt))),128))],8,At)):r.createCommentVNode("",!0)]),_:1},8,["name"])]),d.showThumbs?(r.openBlock(),r.createElementBlock("div",{key:0,class:r.normalizeClass(["vib-thumbnail-wrapper vib-hideable",{"vib-hidden":l.controlsHidden}]),onClick:a[1]||(a[1]=r.withModifiers(()=>{},["stop"])),onMouseover:a[2]||(a[2]=f=>l.interfaceHovered=!0),onMouseleave:a[3]||(a[3]=f=>l.interfaceHovered=!1)},[(r.openBlock(!0),r.createElementBlock(r.Fragment,null,r.renderList(u.imagesThumb,(f,C)=>r.withDirectives((r.openBlock(),r.createElementBlock("div",{key:typeof f.thumb=="string"?`${f.thumb}${C}`:C,style:r.normalizeStyle({backgroundImage:"url("+f.thumb+")"}),class:r.normalizeClass("vib-thumbnail"+(l.select===C?"-active":"")),onClick:r.withModifiers(H=>u.showImage(C),["stop"])},[f.type=="video"||f.type=="youtube"?r.renderSlot(c.$slots,"videoIcon",{key:0},()=>[r.createVNode(me)]):r.createCommentVNode("",!0)],14,Ot)),[[r.vShow,C>=u.thumbIndex.begin&&C<=u.thumbIndex.end]])),128))],34)):r.createCommentVNode("",!0),r.createElementVNode("div",{class:r.normalizeClass(["vib-footer vib-hideable",{"vib-hidden":l.controlsHidden}]),onMouseover:a[4]||(a[4]=f=>l.interfaceHovered=!0),onMouseleave:a[5]||(a[5]=f=>l.interfaceHovered=!1)},[r.renderSlot(c.$slots,"customCaption",{currentMedia:u.currentMedia},()=>[r.withDirectives(r.createElementVNode("div",{innerHTML:u.currentMedia.caption},null,8,Lt),[[r.vShow,d.showCaption]])]),r.createElementVNode("div",xt,[r.renderSlot(c.$slots,"footer",{current:l.select+1,total:d.media.length},()=>[r.createTextVNode(r.toDisplayString(l.select+1)+" / "+r.toDisplayString(d.media.length),1)])])],34),d.closable?(r.openBlock(),r.createElementBlock("button",{key:1,type:"button",title:d.closeText,class:r.normalizeClass(["vib-close vib-hideable",{"vib-hidden":l.controlsHidden}]),onMouseover:a[6]||(a[6]=f=>l.interfaceHovered=!0),onMouseleave:a[7]||(a[7]=f=>l.interfaceHovered=!1)},[r.renderSlot(c.$slots,"close",{},()=>[r.createVNode(ve)])],42,wt)):r.createCommentVNode("",!0),d.media.length>1?(r.openBlock(),r.createElementBlock("button",{key:2,type:"button",class:r.normalizeClass(["vib-arrow vib-arrow-left vib-hideable",{"vib-hidden":l.controlsHidden}]),title:d.previousText,onClick:a[8]||(a[8]=r.withModifiers(f=>u.previousImage(),["stop"])),onMouseover:a[9]||(a[9]=f=>l.interfaceHovered=!0),onMouseleave:a[10]||(a[10]=f=>l.interfaceHovered=!1)},[r.renderSlot(c.$slots,"previous",{},()=>[r.createVNode(B)])],42,kt)):r.createCommentVNode("",!0),d.media.length>1?(r.openBlock(),r.createElementBlock("button",{key:3,type:"button",class:r.normalizeClass(["vib-arrow vib-arrow-right vib-hideable",{"vib-hidden":l.controlsHidden}]),title:d.nextText,onClick:a[11]||(a[11]=r.withModifiers(f=>u.nextImage(),["stop"])),onMouseover:a[12]||(a[12]=f=>l.interfaceHovered=!0),onMouseleave:a[13]||(a[13]=f=>l.interfaceHovered=!1)},[r.renderSlot(c.$slots,"next",{},()=>[r.createVNode(O)])],42,Bt)):r.createCommentVNode("",!0)],512)),[[r.vShow,l.lightBoxShown]]):r.createCommentVNode("",!0)]),_:3},8,["onAfterEnter","onBeforeLeave"])])}return M(Nt,[["render",Dt]])});
