"use strict";(self.webpackChunkupsy_desky_docs=self.webpackChunkupsy_desky_docs||[]).push([[423],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),y=o,h=d["".concat(l,".").concat(y)]||d[y]||c[y]||n;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},7146:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var a=r(4778),o=(r(9496),r(9613));const n={sidebar_position:1.9},i="Firmware Updates",s={unversionedId:"firmware-updates",id:"firmware-updates",title:"Firmware Updates",description:"To get the latest features and bug fixes, you will need to update your Upsy Desky's firmware. There are a few ways to do this, and we will go over each of them.",source:"@site/docs/firmware-updates.md",sourceDirName:".",slug:"/firmware-updates",permalink:"/docs/firmware-updates",draft:!1,editUrl:"https://github.com/tjhorner/upsy-desky-docs/tree/main/docs/docs/firmware-updates.md",tags:[],version:"current",sidebarPosition:1.9,frontMatter:{sidebar_position:1.9},sidebar:"tutorialSidebar",previous:{title:"Stream Deck",permalink:"/docs/integrations/stream-deck"},next:{title:"Troubleshooting & Support",permalink:"/docs/troubleshooting"}},l={},p=[{value:"ESPHome Dashboard",id:"esphome-dashboard",level:2},{value:"OTA Updates",id:"ota-updates",level:2},{value:"Factory Reset",id:"factory-reset",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"firmware-updates"},"Firmware Updates"),(0,o.kt)("p",null,"To get the latest features and bug fixes, you will need to update your Upsy Desky's firmware. There are a few ways to do this, and we will go over each of them."),(0,o.kt)("h2",{id:"esphome-dashboard"},"ESPHome Dashboard"),(0,o.kt)("p",null,"This is the recommended way to keep your Upsy Desky up-to-date, and allows you to customize it to your needs by editing the ESPHome config. If you have adopted your Upsy Desky into the dashboard automatically, it will come with a stock config. You can re-compile that configuration at any time to retrieve the latest version."),(0,o.kt)("p",null,"You can learn how to use the ESPHome Dashboard in their documentation. There is a convenient ",(0,o.kt)("a",{parentName:"p",href:"https://esphome.io/guides/getting_started_hassio.html"},"Home Assistant addon")," you can use, or you can use a ",(0,o.kt)("a",{parentName:"p",href:"https://esphome.io/guides/getting_started_command_line.html"},"Docker image"),"."),(0,o.kt)("p",null,'Once ESPHome Dashboard is installed, you should see the Upsy Desky in the list with a green "adopt" button. Click that button to adopt the device into the dashboard. You can then edit the configuration and re-compile it to get the latest firmware, or make any changes you want.'),(0,o.kt)("h2",{id:"ota-updates"},"OTA Updates"),(0,o.kt)("p",null,"On every release of the stock firmware, an update binary is published that you can easily upload to your Upsy Desky."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the Upsy Desky's IP in your browser to access the web interface."),(0,o.kt)("li",{parentName:"ol"},"Download the latest release binary from the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tjhorner/upsy-desky/releases/latest"},"releases page"),". For OTAs, you want to grab the ",(0,o.kt)("inlineCode",{parentName:"li"},"firmware.bin")," file."),(0,o.kt)("li",{parentName:"ol"},"Select the downloaded ",(0,o.kt)("inlineCode",{parentName:"li"},"firmware.bin")," file in the web interface in the OTA section."),(0,o.kt)("li",{parentName:"ol"},"After a while, the OTA will be applied and your Upsy Desky will have the latest firmware.")),(0,o.kt)("h2",{id:"factory-reset"},"Factory Reset"),(0,o.kt)("p",null,"You can also factory reset your Upsy Desky with the stock firmware."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Factory resets will wipe out any configuration or customizations you have performed on your Upsy Desky.")),(0,o.kt)("p",null,"To do so, head to the ",(0,o.kt)("a",{parentName:"p",href:"https://shop.horner.tj/things/upsy-desky/setup/stock"},"flashing page")," in a Chromium-based browser and follow the instructions there. It will automatically grab the latest stock firmware from GitHub and flash it to your Upsy Desky."))}d.isMDXComponent=!0}}]);