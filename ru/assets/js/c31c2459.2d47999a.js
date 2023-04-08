"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[59],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4839:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(1163),i=(t(9496),t(9613));const r={sidebar_label:"@twa.js/sdk-react",sidebar_position:1},o="@twa.js/sdk-react",l={unversionedId:"libraries/twa-sdk-react",id:"libraries/twa-sdk-react",title:"@twa.js/sdk-react",description:"React bindings for client SDK. Contains hooks, components and other",source:"@site/docs/libraries/twa-sdk-react.mdx",sourceDirName:"libraries",slug:"/libraries/twa-sdk-react",permalink:"/docs/ru/docs/libraries/twa-sdk-react",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"@twa.js/sdk-react",sidebar_position:1},sidebar:"sidebar",previous:{title:"Creating a Web App",permalink:"/docs/ru/docs/tutorials-and-recipes/creating-web-app"},next:{title:"About",permalink:"/docs/ru/docs/libraries/twa-sdk/about"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Initialization",id:"initialization",level:2},{value:"Using SDK provider",id:"using-sdk-provider",level:3},{value:"Getting SDK context",id:"getting-sdk-context",level:3},{value:"When init is done",id:"when-init-is-done",level:3},{value:"Hooks and HOCs",id:"hooks-and-hocs",level:2},{value:"Launch parameters",id:"launch-parameters",level:3},{value:"Other",id:"other",level:3}],c=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",n)},d=c("LibraryBadges"),u=c("NpmInstall"),m={toc:p},h="wrapper";function k(e){let{components:n,...t}=e;return(0,i.kt)(h,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"twajssdk-react"},"@twa.js/sdk-react"),(0,i.kt)("p",null,"React bindings for ",(0,i.kt)("a",{parentName:"p",href:"twa-sdk/about"},"client SDK"),". Contains hooks, components and other\nuseful tools which allow usage of React along with Web Apps client SDK.\nTracks SDK components changes out of box."),(0,i.kt)(d,{pkg:"@twa.js/sdk-react",mdxType:"LibraryBadges"}),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Before everything, it is assumed, that you already installed ",(0,i.kt)("inlineCode",{parentName:"p"},"react")," package\nas long as this package has it as the peer dependency. Installation of SDK\nitself is not required, ",(0,i.kt)("inlineCode",{parentName:"p"},"@twa.js/sdk-react")," already includes it."),(0,i.kt)(u,{pkg:"@twa.js/sdk-react",mdxType:"NpmInstall"}),(0,i.kt)("h2",{id:"initialization"},"Initialization"),(0,i.kt)("h3",{id:"using-sdk-provider"},"Using SDK provider"),(0,i.kt)("p",null,"According to the ",(0,i.kt)("inlineCode",{parentName:"p"},"@twa.js/sdk")," ",(0,i.kt)("a",{parentName:"p",href:"twa-sdk/about"},"documentation"),", it represents\na set of components, which are not initialized by default and a developer\nshould create them by himself. Additionally, the SDK provides the function\ncalled ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," which allows developers not to think about ",(0,i.kt)("em",{parentName:"p"},"how do I even\nshould create these components and use standard TWA flow?")," It just does\neverything required for a developer."),(0,i.kt)("p",null,"So, the first thing we have to do here is to provide application\nthe SDK functionality and allow it calling the initialization to get newly\ncreated components. For this purpose, the component ",(0,i.kt)("inlineCode",{parentName:"p"},"SDKProvider")," exists:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"import React from 'react';\nimport {SDKProvider} from '@twa.js/sdk-react';\n\nfunction Root() {\n  return (\n    <SDKProvider>\n      <div>My application!</div>\n    </SDKProvider>\n  );\n}\n")),(0,i.kt)("p",null,"Internally, ",(0,i.kt)("inlineCode",{parentName:"p"},"SDKProvider")," uses ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," function from ",(0,i.kt)("inlineCode",{parentName:"p"},"@twa.js/sdk"),". It accepts\nlist of optional parameters via ",(0,i.kt)("inlineCode",{parentName:"p"},"initOptions")," property described\n",(0,i.kt)("a",{parentName:"p",href:"twa-sdk/about#init"},"here"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"import React from 'react';\nimport {SDKProvider, InitOptions} from '@twa.js/sdk-react';\n\n/**\n * Root component for the whole project.\n */\nexport function Root() {\n  const options: InitOptions = {\n    acceptScrollbarStyle: true,\n    checkCompat: true,\n    debug: true\n  };\n\n  return (\n    <SDKProvider initOptions={options}>\n      <div>My application!</div>\n    </SDKProvider>\n  );\n}\n")),(0,i.kt)("p",null,"Most of the time, there is no need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"initOptions")," unless you have some\nspecific logic in your application. Usually, the SDK does everything a\ndeveloper needs by itself."),(0,i.kt)("h3",{id:"getting-sdk-context"},"Getting SDK context"),(0,i.kt)("p",null,"Usage of ",(0,i.kt)("inlineCode",{parentName:"p"},"SDKProvider")," component allows its child elements to use hook\n",(0,i.kt)("inlineCode",{parentName:"p"},"useSDK")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"withSDK")," HOC) returning core SDK information:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"import React from 'react';\nimport {SDKProvider, SDKContext, useSDK, withSDK} from '@twa.js/sdk-react';\n\nfunction App() {\n  const sdk = useSDK();\n\n  // Here, we can use SDK information.\n\n  return <div>My application!</div>;\n}\n\n// or\n\ninterface Props {\n  sdk: SDKContext\n}\n\nfunction AppPure({sdk}: Props) {\n  return <div>My application!</div>;\n}\n\nconst AppWrapped = withSDK(AppPure);\n\nfunction Root() {\n  return (\n    <SDKProvider>\n      <App/>\n      {/* or */}\n      <AppWrapped/>\n    </SDKProvider>\n  );\n}\n")),(0,i.kt)("p",null,"Let's complicate previous example and add important logic connected with the\nSDK lifecycle:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"import React, {PropsWithChildren, useEffect} from 'react';\nimport {SDKProvider, useSDK, useBackButton, useWebApp} from '@twa.js/sdk-react';\n\n/**\n * Part of application which doesn't know anything about SDK initialization\n * and which should be rendered only in case, SDK is already initialized and\n * could provide Web Apps components.\n */\nfunction App() {\n  const backButton = useBackButton();\n  const webApp = useWebApp();\n\n  // When App is attached to DOM, lets show back button and\n  // add \"click\" event handler, which should close current application.\n  useEffect(() => {\n    const listener = () => webApp.close();\n    backButton.on('click', listener);\n    backButton.show();\n\n    return () => {\n      backButton.off('click', listener);\n      backButton.hide();\n    };\n    // We know, that backButton and webApp will never change,\n    // but let's follow React rules.\n  }, [backButton, webApp]);\n\n  return <div>My application!</div>;\n}\n\n/**\n * This component is the layer controlling the application display. It displays\n * application in case, the SDK is initialized, displays an error if something\n * went wrong, and a loader if the SDK is warming up.\n */\nfunction Loader({children}: PropsWithChildren<{}>) {\n  const {didInit, components, error} = useSDK();\n\n  // There were no calls of SDK's init function. It means, we did not\n  // even try to do it.\n  if (!didInit) {\n    return <div>SDK init function is not yet called.</div>;\n  }\n\n  // Error occurred during SDK init.\n  if (error !== null) {\n    return <div>Something went wrong.</div>;\n  }\n\n  // If components is null, it means, SDK is not ready at the\n  // moment and currently initializing. Usually, it takes like\n  // several milliseconds or something like that, but we should\n  // have this check.\n  if (components === null) {\n    return <div>Warming up SDK.</div>;\n  }\n\n  // Safely render application.\n  return <>{children}</>;\n}\n\n/**\n * Root component of the whole project.\n */\nexport function Root() {\n  return (\n    <SDKProvider>\n      <Loader>\n        <App/>\n      </Loader>\n    </SDKProvider>\n  );\n}\n")),(0,i.kt)("p",null,"You could probably ask why we should use component like ",(0,i.kt)("inlineCode",{parentName:"p"},"Loader"),". The problem\nis, as long as the SDK initialization is asynchronous (some of its components\nshould send requests to the Telegram application to retrieve their current\nstate), we could not determine which properties its components should have.\nThat is the reason, why ",(0,i.kt)("inlineCode",{parentName:"p"},"SDKProvider")," can not provide valid ",(0,i.kt)("inlineCode",{parentName:"p"},"components"),"\nuntil initialization is completed."),(0,i.kt)("p",null,"As the result, all hooks which return component instances will throw an error\nas long as they could not get their component from ",(0,i.kt)("inlineCode",{parentName:"p"},"components")," property. That's\nwhy these hooks should not be called until SDK is initialized."),(0,i.kt)("h3",{id:"when-init-is-done"},"When init is done"),(0,i.kt)("p",null,"When initialization was completed successfully, developer should call\n",(0,i.kt)("inlineCode",{parentName:"p"},"webApp.ready")," function. This will notify the Telegram application about\ncurrent Web App is ready to be displayed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"import {useWebApp} from '@twa.js/sdk-react';\nimport React, {useEffect} from 'react';\n\nfunction App() {\n  const webApp = useWebApp();\n\n  useEffect(() => {\n    webApp.ready();\n  }, [webApp]);\n\n  return <div>Here is my App</div>;\n}\n")),(0,i.kt)("h2",{id:"hooks-and-hocs"},"Hooks and HOCs"),(0,i.kt)("h3",{id:"launch-parameters"},"Launch parameters"),(0,i.kt)("p",null,"There could be a case, when a developer needs to get launch parameters without\ninitializing whole SDK. For example, he would like to get current theme\nparameters which are usually stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"window.location"),". We, probably, don't\nneed the SDK initialization for it, right?"),(0,i.kt)("p",null,"To get Web App launch parameters, hook ",(0,i.kt)("inlineCode",{parentName:"p"},"useLaunchParams")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"withLaunchParams")," HOC)\nshould be used:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"import React from 'react';\nimport {useLaunchParams, withLaunchParams, LaunchParams} from '@twa.js/sdk-react';\n\nfunction DisplayLaunchParams() {\n  const launchParams = useLaunchParams();\n\n  return (\n    <pre>\n      <code>{JSON.stringify(launchParams, null, ' ')}</code>\n    </pre>\n  );\n}\n\n// or\n\ninterface Props {\n  launchParams: LaunchParams;\n}\n\nfunction DisplayLaunchParamsPure({launchParams}: Props) {\n  return (\n    <pre>\n      <code>{JSON.stringify(launchParams, null, ' ')}</code>\n    </pre>\n  );\n}\n\nconst DisplayLaunchParamsWrapped = withLaunchParams(DisplayLaunchParams);\n")),(0,i.kt)("p",null,"It will return the result of the ",(0,i.kt)("a",{parentName:"p",href:"twa-sdk/about#launch-parameters"},(0,i.kt)("inlineCode",{parentName:"a"},"retrieveLaunchParams")),"\nfunction."),(0,i.kt)("h3",{id:"other"},"Other"),(0,i.kt)("p",null,"Library provides list of dead simple hooks and HOCs for each SDK component.\nReturned instances are always the same, but force updates will be called\nin case, something changed in a component."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"In case, you use HOCs, pay attention to the fact, that passed components are\nalways the same instances. This may lead to problems with ",(0,i.kt)("inlineCode",{parentName:"p"},"PureComponent")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"memo")," React components as long as they will not catch any changes in references.\nDo not create new components instances as long as it will lead to new problems\nconnected with events listening done during SDK initialization process.")),(0,i.kt)("p",null,"List of hooks and HOCs of components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useBackButton")," (",(0,i.kt)("inlineCode",{parentName:"li"},"withBackButton"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useBridge")," (",(0,i.kt)("inlineCode",{parentName:"li"},"withBridge"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useClosingConfirmation")," (",(0,i.kt)("inlineCode",{parentName:"li"},"withClosingConfirmation"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useHapticFeedback")," (",(0,i.kt)("inlineCode",{parentName:"li"},"withHapticFeedback"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useInitData")," (",(0,i.kt)("inlineCode",{parentName:"li"},"withInitData"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useLayout")," (",(0,i.kt)("inlineCode",{parentName:"li"},"withLayout"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useMainButton")," (",(0,i.kt)("inlineCode",{parentName:"li"},"withMainButton"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"usePopup")," (",(0,i.kt)("inlineCode",{parentName:"li"},"withPopup"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useQRScanner")," (",(0,i.kt)("inlineCode",{parentName:"li"},"withQRScanner"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useThemeParams")," (",(0,i.kt)("inlineCode",{parentName:"li"},"withThemeParams"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useViewport")," (",(0,i.kt)("inlineCode",{parentName:"li"},"withViewport"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useWebApp")," (",(0,i.kt)("inlineCode",{parentName:"li"},"withWebApp"),")")))}k.isMDXComponent=!0}}]);