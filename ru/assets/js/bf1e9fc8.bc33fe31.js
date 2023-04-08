"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[508],{9613:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},l="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(t),d=a,m=l["".concat(c,".").concat(d)]||l[d]||h[d]||o;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[l]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6312:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=t(1163),a=(t(9496),t(9613));const o={},i="Object types",s={unversionedId:"launch-params/init-data/object-types",id:"launch-params/init-data/object-types",title:"Object types",description:"The type definitions of each object used in init data.",source:"@site/docs/launch-params/init-data/object-types.md",sourceDirName:"launch-params/init-data",slug:"/launch-params/init-data/object-types",permalink:"/docs/ru/docs/launch-params/init-data/object-types",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"About",permalink:"/docs/ru/docs/launch-params/init-data/about"},next:{title:"Back button",permalink:"/docs/ru/docs/features/back-button"}},c={},u=[{value:"Init Data",id:"init-data",level:2},{value:"Chat",id:"chat",level:2},{value:"User",id:"user",level:2}],p={toc:u},l="wrapper";function h(e){let{components:n,...t}=e;return(0,a.kt)(l,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"object-types"},"Object types"),(0,a.kt)("p",null,"The type definitions of each object used in init data."),(0,a.kt)("h2",{id:"init-data"},"Init Data"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface InitData {\n  /**\n   * Init data generation date as unix time.\n   */\n  auth_date: number;\n\n  /**\n   * Time in seconds, after which a message can be sent via the\n   * answerWebAppQuery method.\n   * @see https://core.telegram.org/bots/api#answerwebappquery\n   */\n  can_send_after?: number;\n\n  /**\n   * An object containing data about the chat where the bot was launched via\n   * the attachment menu. Returned for supergroups, channels and group\n   * chats \u2013 only for Web Apps launched via the attachment menu.\n   */\n  chat?: Chat;\n\n  /**\n   * A hash of all passed parameters, which the bot server can use to\n   * check their validity.\n   */\n  hash: string;\n\n  /**\n   * A unique identifier for the Web App session, required for sending\n   * messages via the answerWebAppQuery method.\n   * @see https://core.telegram.org/bots/api#answerwebappquery\n   */\n  query_id?: string;\n\n  /**\n   * An object containing data about the chat partner of the current user in\n   * the chat where the bot was launched via the attachment menu.\n   * Returned only for private chats and only for Web Apps launched\n   * via the attachment menu.\n   */\n  receiver?: User;\n\n  /**\n   * The value of the startattach parameter, passed via link. Only returned for\n   * Web Apps when launched from the attachment menu via link.\n   */\n  start_param?: string;\n\n  /**\n   * An object containing data about the current user.\n   */\n  user?: User;\n}\n")),(0,a.kt)("h2",{id:"chat"},"Chat"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Chat {\n  /**\n   * Unique identifier for this chat.\n   */\n  id: number;\n\n  /**\n   * URL of the chat\u2019s photo. The photo can be in .jpeg or .svg formats.\n   * Only returned for Web Apps launched from the attachment menu.\n   */\n  photo_url?: string;\n\n  /**\n   * Type of chat.\n   */\n  type: 'group' | 'supergroup' | 'channel';\n\n  /**\n   * Title of the chat.\n   */\n  title: string;\n\n  /**\n   * Username of the chat.\n   */\n  username?: string;\n}\n")),(0,a.kt)("h2",{id:"user"},"User"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface User {\n  /**\n   * First name of the user or bot.\n   */\n  first_name: string;\n\n  /**\n   * A unique identifier for the user or bot.\n   */\n  id: number;\n\n  /**\n   * True, if this user is a bot. Returned in the `receiver` field only.\n   */\n  is_bot?: boolean;\n\n  /**\n   * True, if this user is a Telegram Premium user.\n   */\n  is_premium?: boolean;\n\n  /**\n   * Last name of the user or bot.\n   */\n  last_name?: string;\n\n  /**\n   * IETF language tag of the user's language. Returns in user field only.\n   * @see https://en.wikipedia.org/wiki/IETF_language_tag\n   */\n  language_code?: string;\n\n  /**\n   * URL of the user\u2019s profile photo. The photo can be in .jpeg or .svg\n   * formats. Only returned for Web Apps launched from the attachment menu.\n   */\n  photo_url?: string;\n\n  /**\n   * Username of the user or bot.\n   */\n  username?: string;\n}\n")))}h.isMDXComponent=!0}}]);