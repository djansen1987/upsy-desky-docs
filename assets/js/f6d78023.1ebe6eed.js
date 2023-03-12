"use strict";(self.webpackChunkupsy_desky_docs=self.webpackChunkupsy_desky_docs||[]).push([[16],{9613:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=i,g=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(g,a(a({ref:t},l),{},{components:n})):r.createElement(g,a({ref:t},l))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(4778),i=(n(9496),n(9613));const o={sidebar_position:1.5},a="Configuration",s={unversionedId:"configuration/index",id:"configuration/index",title:"Configuration",description:"Once you have connected your Upsy Desky to your network, you can configure it by going to its IP address (port 80), or by visiting the device page in Home Assistant.",source:"@site/docs/configuration/index.md",sourceDirName:"configuration",slug:"/configuration/",permalink:"/docs/configuration/",draft:!1,editUrl:"https://github.com/tjhorner/upsy-desky-docs/edit/main/docs/configuration/index.md",tags:[],version:"current",sidebarPosition:1.5,frontMatter:{sidebar_position:1.5},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Decoders",permalink:"/docs/configuration/decoders/"}},c={},u=[{value:"Initial Setup",id:"initial-setup",level:2},{value:"Set Min &amp; Max Height",id:"set-min--max-height",level:3},{value:"Restart",id:"restart",level:3},{value:"Further Customization",id:"further-customization",level:2}],l={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Once you have connected your Upsy Desky to your network, you can configure it by going to its IP address (port 80), or by visiting the device page in Home Assistant."),(0,i.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,i.kt)("h3",{id:"set-min--max-height"},"Set Min & Max Height"),(0,i.kt)("p",null,"It is recommended that you set the ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/entities#min-target-height"},"Min Target Height")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/entities#max-target-height"},"Max Target Height")," to the lowest and highest heights that your desk can be set to. This will prevent you from accidentally setting the desk to a height that it cannot reach."),(0,i.kt)("h3",{id:"restart"},"Restart"),(0,i.kt)("p",null,"After you have set the min/max height, you will need to restart the Upsy Desky unit. You can do this by pressing the ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/entities#restart"},"Restart")," button, or by unplugging it and plugging it back in."),(0,i.kt)("h2",{id:"further-customization"},"Further Customization"),(0,i.kt)("p",null,"If you are familiar with ESPHome and wish to make advanced changes, please check out the guide on ",(0,i.kt)("a",{parentName:"p",href:"/docs/advanced/customization/"},"customizing the firmware"),"."))}p.isMDXComponent=!0}}]);