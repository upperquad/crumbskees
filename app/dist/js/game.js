!function(e){var t={};function n(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(i,s,function(t){return e[t]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=15)}([function(e,t,n){e.exports=n.p+"1c90d905ac4dde167115cc874fbd9817.jpg"},function(e,t,n){e.exports=n.p+"479e9356c0500039ef4f746ba8022ade.png"},function(e,t,n){e.exports=n.p+"37eb80a527de10e223e82cd4851a41d1.png"},function(e,t,n){e.exports='\x3c!-- big cursor --\x3e\n<section class="game" game>\n  \x3c!-- playing scene --\x3e\n  <div class="scene" scene>\n    <div class="scene__wrapper">\n      \x3c!-- svg scene for masks etc... --\x3e\n      <svg class="scene-svg" viewBox="0 0 1036 632" stroke="black">\n        <defs>\n          <clipPath class="scene-svg__clippath">\n            <use xlink:href="#player1" />\n            <use xlink:href="#player2" />\n          </clipPath>\n        </defs>\n        <path id="player1" class="cursor" stroke-width="6"></path>\n        <path id="player2" class="cursor" stroke-width="6"></path>\n        <g class="scene-svg__clippath-ref">\n          <image class="scene-svg__image" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />\n        </g>\n      </svg>\n      <div class="scene__placeholder"></div>\n    </div>\n    <div class="timer t-32--bold"></div>\n  </div>\n  \x3c!-- score board --\x3e\n  <div class="score">\n    <div class="score__recap">\n      <div class="color--red t-32--bold">P-1:</div>\n      <div class="score__items">\n        \x3c!-- <img class="score__item" src="../images/pattern.png" alt=""> --\x3e\n      </div>\n    </div>\n    <div class="score__center">\n      <p class="t-32--bold">Item to find:</p>\n      <img class="score__item" src="'+n(1)+'" alt="">\n      <p class="score__center__recap color--red t-32--bold">P-1 : 0</p>\n      <p class="score__center__recap color--blue t-32--bold">P-2 : 0</p>\n    </div>\n    <div class="score__recap">\n      <div class="color--blue t-32--bold">P-2:</div>\n      <div class="score__items">\n        \x3c!-- <img class="score__item" src="../images/pattern.png" alt=""> --\x3e\n      </div>\n    </div>\n  </div>\n</section>'},function(e,t){e.exports='\x3c!-- big cursor --\x3e\n<section class="setup">\n  \x3c!-- playing scene --\x3e\n  <div class="setup__message t-64--bold">\n  </div>\n</section>'},function(e,t,n){var i,s,r=n(9),a=n(10),o=0,c=0;e.exports=function(e,t,n){var l=t&&n||0,d=t||[],u=(e=e||{}).node||i,h=void 0!==e.clockseq?e.clockseq:s;if(null==u||null==h){var m=r();null==u&&(u=i=[1|m[0],m[1],m[2],m[3],m[4],m[5]]),null==h&&(h=s=16383&(m[6]<<8|m[7]))}var g=void 0!==e.msecs?e.msecs:(new Date).getTime(),v=void 0!==e.nsecs?e.nsecs:c+1,f=g-o+(v-c)/1e4;if(f<0&&void 0===e.clockseq&&(h=h+1&16383),(f<0||g>o)&&void 0===e.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");o=g,c=v,s=h;var p=(1e4*(268435455&(g+=122192928e5))+v)%4294967296;d[l++]=p>>>24&255,d[l++]=p>>>16&255,d[l++]=p>>>8&255,d[l++]=255&p;var y=g/4294967296*1e4&268435455;d[l++]=y>>>8&255,d[l++]=255&y,d[l++]=y>>>24&15|16,d[l++]=y>>>16&255,d[l++]=h>>>8|128,d[l++]=255&h;for(var w=0;w<6;++w)d[l+w]=u[w];return t||a(d)}},,function(e,t,n){},function(e,t,n){},function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var i=new Uint8Array(16);e.exports=function(){return n(i),i}}else{var s=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),s[t]=e>>>((3&t)<<3)&255;return s}}},function(e,t){for(var n=[],i=0;i<256;++i)n[i]=(i+256).toString(16).substr(1);e.exports=function(e,t){var i=t||0,s=n;return[s[e[i++]],s[e[i++]],s[e[i++]],s[e[i++]],"-",s[e[i++]],s[e[i++]],"-",s[e[i++]],s[e[i++]],"-",s[e[i++]],s[e[i++]],"-",s[e[i++]],s[e[i++]],s[e[i++]],s[e[i++]],s[e[i++]],s[e[i++]]].join("")}},,,,,function(e,t,n){"use strict";n.r(t);n(7),n(8);var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new CustomEvent(e,{detail:t})};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,"handleRAF",function(e){t.raf=requestAnimationFrame(t.handleRAF),window.dispatchEvent(i("RAF",{now:e}))}),s(this,"restart",function(){t.handleRAF(0)}),s(this,"cancel",function(){cancelAnimationFrame(t.raf)}),this.handleRAF(0)};var r=n(3),a=n.n(r),o=n(4),c=n.n(o),l=n(5),d=n.n(l);function u(){return"now"in window.performance?performance.now():(new Date).getTime()}function h(e){return.5*(1-Math.cos(Math.PI*e))}function m(e,t,n){return Math.min(Math.max(e,t),n)}function g(e,t){if(e>t){var n=e;e=t,t=n}return e+(t-e)*Math.random()}function v(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,"handleMouseMove",function(e){var t=window.scrollY||document.documentElement.scrollTop,i=window.GameManager.players[window.GameManager.playerIds[0]];i.eventX=e.touches?e.touches[0].clientX:e.clientX,i.eventX-=n.offsetLeft,i.eventY=e.touches?e.touches[0].clientY:e.clientY,i.eventY+=t,i.targetX=i.eventX/n.width*window.GameManager.vbWidth,i.targetX-=window.GameManager.vbWidth/2,i.targetY=i.eventY/n.height*window.GameManager.vbHeight-n.offsetTop,i.targetY-=window.GameManager.vbHeight/2}),f(this,"handleClick",function(e){for(var t=n.clickPrecision,i=window.GameManager.players[e],s=i.targetX/window.GameManager.vbWidth+.5,r=i.targetY/window.GameManager.vbHeight+.5,a=0;a<n.items.length;a++){var o=n.items[a];!o.found&&s>o.x-t&&s<o.x+t&&r>o.y-t&&r<o.y+t&&(window.GameManager.score(i,n.item),o.found=!0,o.el.style.opacity=0,o.debugEl.style.opacity=0,n.numItemFound=n.numItemFound+1)}n.numItemFound!==n.items.length||n.isEnded||(n.isEnded=!0,window.GameManager.endScene())}),f(this,"handleRAF",function(e){var t=e.detail.now;n.acceleration=n.acceleration+(n.destAcceleration-n.acceleration)*n.coefAcceleration;for(var i=0;i<window.GameManager.playerIds.length;i++){var s=window.GameManager.players[window.GameManager.playerIds[i]];s.targetX=m(s.targetX,-window.GameManager.vbWidth/2,window.GameManager.vbWidth/2),s.targetY=m(s.targetY,-window.GameManager.vbHeight/2,window.GameManager.vbHeight/2),s.x+=.1*(s.targetX-s.x),s.y+=.1*(s.targetY-s.y);for(var r=0;r<s.points.length;r++){var a=s.points[r],o=(t-a.startAnim)/a.duration*n.acceleration;a.x=a.startX+(a.destX-a.startX)*h(o),a.y=a.startY+(a.destY-a.startY)*h(o),o>=1&&(a.reverseAnim?(a.startX=a.x,a.startY=a.y,a.destX=a.targetMaxX,a.destY=a.targetMaxY,a.reverseAnim=!1,a.startAnim=u()):(a.startX=a.x,a.startY=a.y,a.destX=a.targetMinX,a.destY=a.targetMinY,a.reverseAnim=!0,a.startAnim=u())),a.x+=s.x,a.y+=s.y}s.el.setAttribute("d",n.cardinal(s.points))}}),this.element=t.el,this.bkg=t.bkg,this.maskedBkg=t.maskedBkg,this.item=t.item,this.numItems=t.numItems,this.gridCols=t.gridCols,this.gridLines=t.gridLines,this.index=t.index,this.time=60,this.dom(),this.set()}var t,n,i;return t=e,(n=[{key:"dom",value:function(){this.dom={svgScene:this.element.querySelector(".scene-svg"),svgMaskedImage:this.element.querySelector(".scene-svg__image"),svgClipPath:this.element.querySelector(".scene-svg__clippath"),svgClipPathRef:this.element.querySelector(".scene-svg__clippath-ref")}}},{key:"set",value:function(){var e;this.setBkgs(),this.acceleration=1,this.destAcceleration=1,this.coefAcceleration=.2,this.increaseMax=.07*window.GameManager.vbWidth,this.itemSize=.05*window.GameManager.vbWidth,this.clickPrecision=.05,this.numItemFound=0,this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.offsetLeft=(e=this.element.parentNode)?e.getBoundingClientRect().left:0,this.offsetTop=function(e){if(!e)return 0;var t=e.getBoundingClientRect(),n=window.scrollY||document.body.scrollTop;return t.top+n}(this.element.parentNode),this.dom.svgClipPath&&this.setClipPathId(),this.setGrid(),this.setItems(),this.events(!0),this.eventsRAF(!0),window.GameManager.popUpMessage("START!","black"),window.GameManager.startTimer(this.time)}},{key:"setClipPathId",value:function(){this.dom.svgClipPath.id=d()(),this.dom.svgClipPathRef.setAttribute("clip-path","url(#".concat(this.dom.svgClipPath.id,")"))}},{key:"setGrid",value:function(){var e;this.positionsInGrid=[];for(var t=0;t<this.gridCols;t++){e=t+.5;for(var n=0;n<this.gridLines;n++){var i={x:e,y:n+.5};this.positionsInGrid.push(i)}}}},{key:"setItems",value:function(){this.items=[];for(var e=0;e<this.numItems;e++){var t=(o=0,c=this.positionsInGrid.length-1,Math.floor(Math.random()*(c-o+1))+o),n=this.positionsInGrid[t].x/this.gridCols,i=this.positionsInGrid[t].y/this.gridLines;this.positionsInGrid.splice(t,1);var s=document.createElementNS("http://www.w3.org/2000/svg","image");s.setAttributeNS(null,"height",this.itemSize),s.setAttributeNS(null,"width",this.itemSize),s.setAttributeNS("http://www.w3.org/1999/xlink","href",this.item),s.setAttributeNS(null,"x","".concat(100*n,"%")),s.setAttributeNS(null,"y","".concat(100*i,"%")),s.setAttributeNS(null,"transform","translate(-".concat(this.itemSize/2," -").concat(this.itemSize/2,")")),s.setAttributeNS(null,"preserveAspectRatio","xMidYMid slice"),this.dom.svgClipPathRef.appendChild(s);var r=document.createElement("div");r.classList.add("debug"),r.style.left="".concat(100*n,"%"),r.style.top="".concat(100*i,"%"),this.element.appendChild(r);var a={el:s,debugEl:r,x:n,y:i};this.items.push(a)}var o,c}},{key:"setBkgs",value:function(){this.dom.svgScene.setAttribute("viewBox","0 0 ".concat(window.GameManager.vbWidth," ").concat(window.GameManager.vbHeight)),this.dom.svgMaskedImage.setAttributeNS("http://www.w3.org/1999/xlink","href",this.bkg),this.dom.svgMaskedImage.setAttributeNS(null,"preserveAspectRatio","xMidYMid slice"),this.element.style.backgroundImage="url(".concat(this.maskedBkg,")")}},{key:"events",value:function(e){window[e?"addEventListener":"removeEventListener"]("click",this.handleClick,!1)}},{key:"eventsRAF",value:function(e){window[e?"addEventListener":"removeEventListener"]("RAF",this.handleRAF,!1)}},{key:"cardinal",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1.2,n=e.length;if(n<1)return"M0 0";for(var i="M ".concat(e[0].x," ").concat(e[0].y," C"),s=0;s<n;s++){var r=e[(s-1+n)%n],a=e[s],o=e[(s+1)%n],c=e[(s+2)%n],l=a.x+(o.x-r.x)/6*t,d=a.y+(o.y-r.y)/6*t,u=o.x-(c.x-a.x)/6*t,h=o.y-(c.y-a.y)/6*t;i+=" ".concat(l," ").concat(d," ").concat(u," ").concat(h," ").concat(o.x," ").concat(o.y)}return"".concat(i,"z")}},{key:"destroy",value:function(){this.events(!1),this.eventsRAF(!1)}}])&&v(t.prototype,n),i&&v(t,i),e}();function y(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var w=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=t.el,i=t.id,s=t.index,r=t.color;this.el=n,this.id=i,this.index=s,this.color=r,this.numPoints=8,this.centerX=window.GameManager.vbWidth/2,this.centerY=window.GameManager.vbHeight/2,this.minRadius=.05*window.GameManager.vbWidth,this.maxRadius=this.minRadius+.2*this.minRadius,this.minMiddleRadius=this.minRadius+.45*(this.maxRadius-this.minRadius),this.maxMiddleRadius=this.minRadius+.55*(this.maxRadius-this.minRadius),this.minDuration=700,this.maxDuration=900,this.x=0,this.y=0,this.targetX=0,this.targetY=0,this.isInsideTime=0,this.setPoints()}var t,n,i;return t=e,(n=[{key:"setPoints",value:function(){this.points=[];var e=2*Math.PI/this.numPoints;this.startAngle=g(0,2*Math.PI);for(var t=0;t<this.numPoints;t++){var n=g(0,.28),i=u()+t*g(0,this.minDuration),s=this.startAngle+t*e+n,r={angle:s,duration:g(this.minDuration,this.maxDuration),startAnim:i,x:this.centerX+Math.cos(s)*g(this.minRadius,this.maxRadius),y:this.centerY+Math.sin(s)*g(this.minRadius,this.maxRadius),targetMinX:this.centerX+Math.cos(s)*g(this.minRadius,this.minMiddleRadius),targetMinY:this.centerY+Math.sin(s)*g(this.minRadius,this.minMiddleRadius),targetMaxX:this.centerX+Math.cos(s)*g(this.maxMiddleRadius,this.maxRadius),targetMaxY:this.centerY+Math.sin(s)*g(this.maxMiddleRadius,this.maxRadius)};r.startX=r.x,r.startY=r.y,r.destX=r.targetMaxX,r.destY=r.targetMaxY,this.points.push(r)}}}])&&y(t.prototype,n),i&&y(t,i),e}(),b=n(0),x=n.n(b),M=n(1),k=n.n(M),_=n(2),S=n.n(_);function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){P(e,t,n[t])})}return e}function R(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A=window.location.origin.replace(/^http/,"ws"),C=!1,Y=C?["refiejrfer","erfjerfpie"]:[],G=["123","456"],X=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),P(this,"onWsOpen",function(){t.main.innerHTML=c.a,t.setupMessage=t.main.querySelector(".setup__message"),t.websocket.onmessage=t.listenServer}),P(this,"listenServer",function(e){var n=e.data.split(",");if("token_submit"===n[0]){for(var i=!1,s=0;s<G.length;s++)G[s]===n[1]&&n[2]!==t.firstPlayerId&&(Y.push(n[2]),t.websocket.send("auth_result,".concat(n[2],",1")),i=!0,t.firstPlayerId=n[2],t.setupMessage.innerHTML="Player ".concat(Y.length," is ready"));!1===i&&t.websocket.send("auth_result,".concat(n[2],",0")),2===Y.length&&t.init()}else if("cursor_move"===n[0]){var r=parseFloat(n[2],10)*t.vbWidth,a=parseFloat(n[3],10)*t.vbWidth;t.players[n[1]].targetX=r+t.players[n[1]].targetX,t.players[n[1]].targetY=a+t.players[n[1]].targetY}else"click"===n[0]&&t.currentScene.handleClick(n[1])}),this.main=document.querySelector(".main"),this.websocket=new WebSocket("".concat(A,"/game")),this.websocket.onopen=this.onWsOpen,!0===C&&this.init()}var t,n,i;return t=e,(n=[{key:"init",value:function(){this.websocket.send("score,".concat(Y[0],",0")),this.main.innerHTML=a.a,this.element=document.querySelector("[game]"),this.scenes=[{bkg:x.a,maskedBkg:x.a,item:k.a,numItems:5,gridCols:4,gridLines:4,effect:"?"},{bkg:S.a,maskedBkg:S.a,item:k.a,numItems:5,gridCols:10,gridLines:10,effect:"?"},{bkg:x.a,maskedBkg:x.a,item:k.a,numItems:5,gridCols:4,gridLines:4,effect:"?"},{bkg:x.a,maskedBkg:x.a,item:k.a,numItems:5,gridCols:4,gridLines:4,effect:"?"}],this.players=[],this.scores=[0,0],this.currentSceneIndex=0,this.loadBkg()}},{key:"loadBkg",value:function(){var e=this,t=new Image;t.src=this.scenes[this.currentSceneIndex].bkg,t.onload=function(){e.dom(),e.setPlayers();var t=e.scenes[e.currentSceneIndex];e.dom.imagePlaceholder.src=t.bkg,e.currentScene=new p(I({el:e.dom.scene,index:e.currentSceneIndex},t))}}},{key:"dom",value:function(){this.dom={scene:this.element.querySelector(".scene"),imagePlaceholder:this.element.querySelector(".scene__placeholder"),cursors:this.element.querySelectorAll(".cursor"),message:this.element.querySelector(".scene__message"),scoreCenterRecap:this.element.querySelectorAll(".score__center__recap"),scoreItems:this.element.querySelectorAll(".score__items"),timer:this.element.querySelector(".timer")}}},{key:"setPlayers",value:function(){this.playerIds=Y,this.vbWidth=this.dom.imagePlaceholder.offsetWidth,this.vbHeight=this.dom.imagePlaceholder.offsetHeight;var e=["red","blue"];this.players={},2===Y.length&&(this.players[Y[0]]=new w({el:this.dom.cursors[0],index:0,color:e[0],id:Y[0]}),this.players[Y[1]]=new w({el:this.dom.cursors[1],index:1,color:e[1],id:Y[1]}))}},{key:"startTimer",value:function(e){var t,n=this,i=e;this.dom.timer.innerHTML=e,this.timerInterval=setInterval(function(){t=(t=parseInt(i,10))<10?"0".concat(t):t,n.dom.timer.innerHTML=t,0===i&&n.endScene("TIME OUT!"),i-=1},1e3)}},{key:"score",value:function(e,t){this.popUpMessage("+1",e.color),this.scores[e.index]+=1,this.element.classList.add("item-found");for(var n=0;n<this.dom.scoreCenterRecap.length;n++)n===e.index&&(this.dom.scoreCenterRecap[n].innerHTML="P-".concat(e.index+1," : ").concat(this.scores[e.index]));var i=document.createElement("img");i.src=t,i.classList.add("score__item"),this.dom.scoreItems[e.index].appendChild(i),this.websocket.send("score,".concat(e.id,",").concat(this.scores[e.index]))}},{key:"popUpMessage",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"gray",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=document.createElement("div");i.classList.add("message","t-120--bold","color--".concat(t)),n&&i.classList.add("message-end"),i.innerHTML=e,this.dom.scene.appendChild(i),setTimeout(function(){i.remove()},2e3)}},{key:"endScene",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"end of scene";clearInterval(this.timerInterval),this.popUpMessage(t,"black",!0),setTimeout(function(){e.updateScene(e.currentSceneIndex+1)},2e3)}},{key:"updateScene",value:function(e){e===this.scenes.length&&(console.log("end of party"),this.websocket.send("disconnect_all_users")),this.destroyScene(this.currentScene),this.currentSceneIndex=e;var t=this.scenes[this.currentSceneIndex];this.currentScene=new p(I({el:this.dom.scene,index:this.currentSceneIndex},t))}},{key:"destroyScene",value:function(e){e.destroy instanceof Function&&e.destroy()}}])&&R(t.prototype,n),i&&R(t,i),e}();window.GameManager=new X}]);
//# sourceMappingURL=game.js.map