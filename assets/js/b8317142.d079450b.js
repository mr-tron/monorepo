"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[17],{9613:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||i;return n?r.createElement(d,o(o({ref:t},l),{},{components:n})):r.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4280:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(1163),a=(n(9496),n(9613));const i={sidebar_position:3},o="Haptic feedback",c={unversionedId:"features/haptic-feedback",id:"features/haptic-feedback",title:"Haptic feedback",description:"Native mobile applications are always filled with interactive components, which",source:"@site/docs/features/haptic-feedback.md",sourceDirName:"features",slug:"/features/haptic-feedback",permalink:"/docs/features/haptic-feedback",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar",previous:{title:"Closing behavior",permalink:"/docs/features/closing-behavior"},next:{title:"Main button",permalink:"/docs/features/main-button"}},s={},p=[],l={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"haptic-feedback"},"Haptic feedback"),(0,a.kt)("p",null,"Native mobile applications are always filled with interactive components, which\nallow user to communicate with its functionality. Such components are mostly\npopups, buttons and many others."),(0,a.kt)("p",null,"Interacting with application (clicking buttons, closing popups etc.), it is\nallowed to emit haptic notifications. Commonly, this process is called\n",(0,a.kt)("inlineCode",{parentName:"p"},"haptic feedback"),". In simple words, these events are just mobile device\nvibrations. Usage of haptic feedback can make user's experience much better."),(0,a.kt)("p",null,"There are currently 3 types of notifications which are used in separate cases.\nSee links at the end of the section for more information."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use this method carefully. Emitting haptic events too often can make an effect\non user's mobile device battery.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/apps-communication/methods#web_app_trigger_haptic_feedback"},"Web App method"))))}f.isMDXComponent=!0}}]);