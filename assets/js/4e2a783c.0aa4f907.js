"use strict";(self.webpackChunkupsy_desky_docs=self.webpackChunkupsy_desky_docs||[]).push([[292],{9613:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var n=i(9496);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),h=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=h(i),c=r,m=p["".concat(l,".").concat(c)]||p[c]||d[c]||a;return i?n.createElement(m,o(o({ref:t},u),{},{components:i})):n.createElement(m,o({ref:t},u))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var h=2;h<a;h++)o[h]=i[h];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},2755:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>h});var n=i(4778),r=(i(9496),i(9613));const a={},o="Entities",s={unversionedId:"reference/entities",id:"reference/entities",title:"Entities",description:"The Upsy Desky firmware exposes many entities by default. This page describes the purpose of each.",source:"@site/docs/reference/entities.md",sourceDirName:"reference",slug:"/reference/entities",permalink:"/docs/reference/entities",draft:!1,editUrl:"https://github.com/tjhorner/upsy-desky-docs/edit/main/docs/reference/entities.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Desk Compatibility",permalink:"/docs/reference/compatibility"},next:{title:"GPIO Pinout",permalink:"/docs/reference/gpio"}},l={},h=[{value:"Sensors",id:"sensors",level:2},{value:"Desk Height",id:"desk-height",level:3},{value:"Buttons",id:"buttons",level:2},{value:"Preset 1/2/3/4",id:"preset-1234",level:3},{value:"Set Preset 1/2/3/4",id:"set-preset-1234",level:3},{value:"Re-Detect Decoder",id:"re-detect-decoder",level:3},{value:"Restart",id:"restart",level:3},{value:"Select",id:"select",level:2},{value:"Height Decoder Variant",id:"height-decoder-variant",level:3},{value:"Height Units",id:"height-units",level:3},{value:"Numbers",id:"numbers",level:2},{value:"Max Target Height",id:"max-target-height",level:3},{value:"Min Target Height",id:"min-target-height",level:3},{value:"Target Desk Height",id:"target-desk-height",level:3},{value:"Lights",id:"lights",level:2},{value:"Status LED",id:"status-led",level:3}],u={toc:h};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"entities"},"Entities"),(0,r.kt)("p",null,"The Upsy Desky firmware exposes many entities by default. This page describes the purpose of each."),(0,r.kt)("h2",{id:"sensors"},"Sensors"),(0,r.kt)("h3",{id:"desk-height"},"Desk Height"),(0,r.kt)("p",null,"This sensor reports the current ",(0,r.kt)("em",{parentName:"p"},"actual")," height of the desk, as reported by the control box. It is gathered by the currently-set decoder variant."),(0,r.kt)("h2",{id:"buttons"},"Buttons"),(0,r.kt)("h3",{id:"preset-1234"},"Preset 1/2/3/4"),(0,r.kt)("p",null,"These buttons are used to recall a preset height from your desk's control box. It is the same as pressing the corresponding button on the physical keypad."),(0,r.kt)("h3",{id:"set-preset-1234"},"Set Preset 1/2/3/4"),(0,r.kt)("p",null,'These buttons are used to set a preset height on your desk\'s control box. It is the same as pressing "M", then the corresponding preset on the physical keypad.'),(0,r.kt)("h3",{id:"re-detect-decoder"},"Re-Detect Decoder"),(0,r.kt)("p",null,"This button is used to re-detect the decoder variant that will be used to decode the height from the control box. If you are having trouble with the desk height entity, you may want to try this button."),(0,r.kt)("p",null,"You can read more about decoders ",(0,r.kt)("a",{parentName:"p",href:"/docs/configuration/decoders/"},"here"),"."),(0,r.kt)("h3",{id:"restart"},"Restart"),(0,r.kt)("p",null,"This button is used to restart the Upsy Desky unit, for example if you have changed a configuration that requires a restart."),(0,r.kt)("h2",{id:"select"},"Select"),(0,r.kt)("h3",{id:"height-decoder-variant"},"Height Decoder Variant"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This entity was removed in firmware 1.0.0 in lieu of auto-detection. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/configuration/decoders/"},"this page")," for more information.")),(0,r.kt)("p",null,"This input selects the decoder variant that will be used to decode the height from the control box. You can read more about decoders ",(0,r.kt)("a",{parentName:"p",href:"/docs/configuration/decoders/"},"here"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"uplift")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible Values:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"uplift")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jarvis")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"omnidesk"))),(0,r.kt)("h3",{id:"height-units"},"Height Units"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This entity was temporarily removed in firmware 1.0.2 due to a compatibility issue with ESPHome 2023.5. You may still change the height units by ",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced/customization/"},"customizing the firmware")," and adding this to your ",(0,r.kt)("inlineCode",{parentName:"p"},"substitutions"),":"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'standing_desk_height_units: "cm"\n')),(0,r.kt)("p",{parentName:"admonition"},"This entity will eventually come back once a fix has been made.")),(0,r.kt)("p",null,"This input selects the units that will be used to display the height of the desk and the target height of the desk."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"in")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible Values:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"in")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cm"))),(0,r.kt)("h2",{id:"numbers"},"Numbers"),(0,r.kt)("h3",{id:"max-target-height"},"Max Target Height"),(0,r.kt)("p",null,"This input sets the maximum height that the target height slider will be able to be set to."),(0,r.kt)("h3",{id:"min-target-height"},"Min Target Height"),(0,r.kt)("p",null,"This input sets the minimum height that the target height slider will be able to be set to."),(0,r.kt)("h3",{id:"target-desk-height"},"Target Desk Height"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"It is recommended to use the preset functionality instead of this input, since the presets have soft-stopping, which is not possible with the input.")),(0,r.kt)("p",null,"When changed, this input will start moving the desk in the direction of the target height. It will attempt to emulate a soft stop by stopping short of the target height. You can see the source for that ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tjhorner/esphome-standing-desk/blob/6e92c19aebe25f8ea05d3c5d3498b42bc75271fe/configs/template.yaml#L44-L62"},"here"),"."),(0,r.kt)("h2",{id:"lights"},"Lights"),(0,r.kt)("h3",{id:"status-led"},"Status LED"),(0,r.kt)("p",null,"There is a small LED on the Upsy Desky's PCB that is controlled by the ESPHome ",(0,r.kt)("a",{parentName:"p",href:"https://esphome.io/components/light/status_led.html"},"Status LED")," component. (It might not be visible if you have a darker-colored enclosure.)"),(0,r.kt)("p",null,"By default the LED is on when everything is OK, but you can turn it off if it annoys you. If you turn it off, it will still retain the Status LED functionality, i.e., it will blink if something is wrong."))}p.isMDXComponent=!0}}]);