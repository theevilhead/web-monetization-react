!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["react"],e):"object"==typeof exports?exports["web-monetization-react"]=e(require("react")):t["web-monetization-react"]=e(t.react)}(window,(function(t){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/build",n(n.s=1)}([function(e,n){e.exports=t},function(t,e,n){"use strict";n.r(e),n.d(e,"useWMR",(function(){return u}));var o=n(0),i=function(t,e){return(t*Math.pow(10,-e)).toFixed(e)},r=function(){return document.querySelector('meta[name="monetization"]')},a=function(){return document.querySelector('meta[name="monetization"]').remove()};function u(t){var e=t.paymentPointer,n=void 0===e?null:e,u=t.isDebug,c=void 0!==u&&u,d=t.onStatusChange,l=void 0===d?null:d,s=t.onStart,f=void 0===s?null:s,m=t.onStop,p=void 0===m?null:m,b=t.inProgress,v=void 0===b?null:b,y=t.startOnLoad,g=void 0!==y&&y,z=!!document.monetization,P=(z&&document.monetization.state,{totalAmountPaid:0});if(n){var j=function(t){P=Object.assign(P,t.detail),l&&l(t,P)},S=function(t){console.log("asdasdsa",t),P=Object.assign(P,t.detail),f&&f(t,P)},O=function(t){var e=i(P.totalAmountPaid,t.detail.assetScale);p&&p(t,e)},x=function(t){P.totalAmountPaid+=Number(t.detail.amount);var e=i(P.totalAmountPaid,t.detail.assetScale);P=Object.assign(P,{totalAmount:e}),v&&v(t,P)},A=function(){document.monetization.addEventListener("monetizationpending",j),document.monetization.addEventListener("monetizationstart",S),document.monetization.addEventListener("monetizationstop",O),document.monetization.addEventListener("monetizationprogress",x)},M=function(t){if(r()||n){if(!r()){var e=document.createElement("meta");e.setAttribute("name","monetization"),e.setAttribute("content",n),document.head.appendChild(e),A()}}else c&&console.log("Please provide a payment pointer to start monetization")};return Object(o.useEffect)((function(){g?M():A()}),[]),{hasPaid:P.totalAmountPaid&&P.totalAmountPaid>0,isSupported:z,startMonetization:M,stopMonetization:a,getGlobalConfig:function(){return P}}}c&&console.log("Please provide payment pointer")}}])}));