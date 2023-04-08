"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[333],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var o=r(9496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?o.createElement(k,l(l({ref:t},s),{},{components:r})):o.createElement(k,l({ref:t},s))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3926:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=r(1163),n=(r(9496),r(9613));const a={},l="Layout",i={unversionedId:"libraries/twa-sdk/components/layout",id:"libraries/twa-sdk/components/layout",title:"Layout",description:"The class which provides information about the current Web App layout.",source:"@site/docs/libraries/twa-sdk/components/layout.md",sourceDirName:"libraries/twa-sdk/components",slug:"/libraries/twa-sdk/components/layout",permalink:"/docs/ru/docs/libraries/twa-sdk/components/layout",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"InitData",permalink:"/docs/ru/docs/libraries/twa-sdk/components/init-data"},next:{title:"MainButton",permalink:"/docs/ru/docs/libraries/twa-sdk/components/main-button"}},c={},p=[{value:"Initialization",id:"initialization",level:2},{value:"Methods and properties",id:"methods-and-properties",level:2},{value:"Background color",id:"background-color",level:3},{value:"Header color",id:"header-color",level:3},{value:"Color scheme",id:"color-scheme",level:3},{value:"Events",id:"events",level:2},{value:"Methods support",id:"methods-support",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"layout"},(0,n.kt)("inlineCode",{parentName:"h1"},"Layout")),(0,n.kt)("p",null,"The class which provides information about the current Web App layout."),(0,n.kt)("h2",{id:"initialization"},"Initialization"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import {Layout} from '@twa.js/sdk';  \nimport {Bridge} from '@twa.js/bridge';  \n\n// Specify bridge instance, Web Apps version, header and background colors.\nconst layout = new Layout(Bridge.init(), '6.3', 'bg_color', '#ffaabb');  \n")),(0,n.kt)("h2",{id:"methods-and-properties"},"Methods and properties"),(0,n.kt)("h3",{id:"background-color"},"Background color"),(0,n.kt)("p",null,"To update the Web App background color, it is required to use\n",(0,n.kt)("inlineCode",{parentName:"p"},"setBackgroundColor(color: RGB)")," method. Locally, it updates the\n",(0,n.kt)("inlineCode",{parentName:"p"},"backgroundColor: RGB")," property:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"layout.setBackgroundColor('#ffaacc');\nconsole.log(layout.backgroundColor); // #ffaacc\n")),(0,n.kt)("h3",{id:"header-color"},"Header color"),(0,n.kt)("p",null,"To update the Web App header color, it is required to use\n",(0,n.kt)("inlineCode",{parentName:"p"},"setHeaderColor(color: HeaderColorKey)")," method. Locally, it updates the\n",(0,n.kt)("inlineCode",{parentName:"p"},"headerColor: HeaderColorKey")," property:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"layout.setHeaderColor('bg_color');\nconsole.log(layout.headerColor); // bg_color\n")),(0,n.kt)("h3",{id:"color-scheme"},"Color scheme"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Layout")," component allows returning the current color scheme based on the\nactual background color. To get the current color scheme (",(0,n.kt)("inlineCode",{parentName:"p"},"dark")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"light"),"),\na developer should use the ",(0,n.kt)("inlineCode",{parentName:"p"},"colorScheme")," property:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"console.log(layout.colorScheme); // dark\n")),(0,n.kt)("h2",{id:"events"},"Events"),(0,n.kt)("p",null,"Events available for the ",(0,n.kt)("a",{parentName:"p",href:"../about#events"},"listening"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"backgroundColorChanged: (color: RGB) => void")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"headerColorChanged: (color: HeaderColorKey) => void"))),(0,n.kt)("h2",{id:"methods-support"},"Methods support"),(0,n.kt)("p",null,"Methods available for the ",(0,n.kt)("a",{parentName:"p",href:"../about#methods-support"},"support check"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setHeaderColor")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setBackgroundColor"))))}d.isMDXComponent=!0}}]);