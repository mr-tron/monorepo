"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[286],{9613:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),g=i,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||r;return t?a.createElement(m,o(o({ref:n},p),{},{components:t})):a.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9854:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=t(1163),i=(t(9496),t(9613));const r={sidebar_position:100},o="init-data-golang",l={unversionedId:"libraries/init-data-golang",id:"libraries/init-data-golang",title:"init-data-golang",description:"Package which provides utilities to work with Telegram Web Apps init data.",source:"@site/docs/libraries/init-data-golang.md",sourceDirName:"libraries",slug:"/libraries/init-data-golang",permalink:"/ru/docs/libraries/init-data-golang",draft:!1,tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"sidebar",previous:{title:"@twa.js/bridge",permalink:"/ru/docs/libraries/twa-bridge"}},s={},c=[{value:"Installation",id:"installation",level:2},{value:"Validation",id:"validation",level:2},{value:"Parsing",id:"parsing",level:2},{value:"Signing",id:"signing",level:2},{value:"GoDoc",id:"godoc",level:2}],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"init-data-golang"},"init-data-golang"),(0,i.kt)("p",null,"Package which provides utilities to work with Telegram Web Apps init data.\nTo learn more, what init data is, visit its ",(0,i.kt)("a",{parentName:"p",href:"/ru/docs/launch-params/init-data/about"},"documentation"),"."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/telegram-web-apps/init-data-golang\n")),(0,i.kt)("h2",{id:"validation"},"Validation"),(0,i.kt)("p",null,"In case, expiration time is ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),", function will skip expiration time check. It\nis recommended to specify non-zero value as long as this check is considered\nimportant to prevent old stolen init data usage."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "github.com/Telegram-Web-Apps/init-data-golang"\n    "time"\n)\n\nfunc main() {\n    // Init data in raw format.\n    initData := "query_id=AAHdF6IQAAAAAN0XohDhrOrc&..."\n\n    // Telegram Bot secret key.\n    token := "627618978:amnnncjocxKJf"\n\n    // Define how long since init data generation date init data is valid.\n    expIn := 24 * time.Hour\n\n    // Will return error in case, init data is invalid. To see,\n    // which error could be returned, see errors.go file.\n    fmt.Println(initdata.Validate(initData, token, expIn))\n}\n')),(0,i.kt)("h2",{id:"parsing"},"Parsing"),(0,i.kt)("p",null,"It is important to note, that ",(0,i.kt)("inlineCode",{parentName:"p"},"Parse")," function does not do any checks which\n",(0,i.kt)("inlineCode",{parentName:"p"},"Validate")," does. So, this function just parses incoming data without ",(0,i.kt)("inlineCode",{parentName:"p"},"hash"),"\nor expiration time validations."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "github.com/Telegram-Web-Apps/init-data-golang"\n)\n\nfunc main() {\n    // Init data in raw format.\n    initData := "query_id=AAHdF6IQAAAAAN0XohDhrOrc&..."\n    \n    // Will return 2 values.\n    // 1. Pointer to InitData in case, passed data has correct format.\n    // 2. Error in case, something is wrong. \n    fmt.Println(initdata.Parse(initData))\n}\n')),(0,i.kt)("h2",{id:"signing"},"Signing"),(0,i.kt)("p",null,"Functions which sign data remove such parameters as ",(0,i.kt)("inlineCode",{parentName:"p"},"hash")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"auth_date"),"\nbecause it is assumed, ",(0,i.kt)("inlineCode",{parentName:"p"},"hash")," is returned by function and ",(0,i.kt)("inlineCode",{parentName:"p"},"auth_date")," will be\nset by function itself."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "github.com/Telegram-Web-Apps/init-data-golang"\n    "time"\n)\n\nfunc main() {\n    // Init data in raw format.\n    initData := "query_id=AAHdF6IQAAAAAN0XohDhrOrc&..."\n\n    // Telegram Bot secret key.\n    token := "627618978:amnnncjocxKJf"\n\n    // Signing timestamp.\n    authDate := time.Now()\n\n    // The first value is parameters sign result ("hash" init data property).\n    // The second one is error which could occur while parsing query string as\n    // query parameters.\n    fmt.Println(initdata.SignQueryString(initData, token, authDate))\n    // or\n    fmt.Println(initdata.Sign(map[string]string{\n        "query_id": "AAHdF6IQAAAAAN0XohDhrOrc",\n        // ...\n    }, token, authDate))\n}\n')),(0,i.kt)("h2",{id:"godoc"},"GoDoc"),(0,i.kt)("p",null,"To see GoDoc documentation, visit ",(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/telegram-web-apps/init-data-golang"},"this link"),"."))}u.isMDXComponent=!0}}]);