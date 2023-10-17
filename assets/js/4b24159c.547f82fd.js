"use strict";(self.webpackChunkupsy_desky_docs=self.webpackChunkupsy_desky_docs||[]).push([[617],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var i=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,u=p["".concat(l,".").concat(h)]||p[h]||m[h]||a;return n?i.createElement(u,r(r({ref:t},d),{},{components:n})):i.createElement(u,r({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},540:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(4778),o=(n(9496),n(9613));const a={},r="Firmware Customization",s={unversionedId:"advanced/customization/index",id:"advanced/customization/index",title:"Firmware Customization",description:"Since the Upsy Desky's firmware is based on ESPHome, making customizations to the firmware is as easy as editing some YAML. The best way to modify the firmware config is by installing the ESPHome Dashboard (or using it via cli).",source:"@site/docs/advanced/customization/index.md",sourceDirName:"advanced/customization",slug:"/advanced/customization/",permalink:"/docs/advanced/customization/",draft:!1,editUrl:"https://github.com/tjhorner/upsy-desky-docs/edit/main/docs/advanced/customization/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bluetooth Proxy",permalink:"/docs/advanced/bluetooth-proxy"},next:{title:"Reverse Engineering Guide",permalink:"/docs/advanced/reverse-engineering/"}},l={},c=[{value:"Adopting the Device",id:"adopting-the-device",level:2},{value:"Modifying the Configuration",id:"modifying-the-configuration",level:2},{value:"Trimming the Firmware",id:"trimming-the-firmware",level:3},{value:"Updating Base Config",id:"updating-base-config",level:3},{value:"Understanding the Configuration",id:"understanding-the-configuration",level:2},{value:"Addons",id:"addons",level:3}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"firmware-customization"},"Firmware Customization"),(0,o.kt)("p",null,"Since the Upsy Desky's firmware is based on ",(0,o.kt)("a",{parentName:"p",href:"https://esphome.io"},"ESPHome"),", making customizations to the firmware is as easy as editing some YAML. The best way to modify the firmware config is by installing the ",(0,o.kt)("a",{parentName:"p",href:"https://esphome.io/guides/getting_started_hassio.html"},"ESPHome Dashboard")," (or using it ",(0,o.kt)("a",{parentName:"p",href:"https://esphome.io/guides/getting_started_command_line.html"},"via cli"),")."),(0,o.kt)("h2",{id:"adopting-the-device"},"Adopting the Device"),(0,o.kt)("p",null,"Once ESPHome Dashboard is running, and your Upsy Desky is ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started"},"connected to your network"),", it should prompt you to adopt it."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1507).Z,width:"1292",height:"464"})),(0,o.kt)("p",null,"Go through the adoption flow; it will do these things:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create an ESPHome configuration file"),(0,o.kt)("li",{parentName:"ol"},"Set an API encryption key (used by Home Assistant or other native API consumers)"),(0,o.kt)("li",{parentName:"ol"},"Bake the Wi-Fi credentials into the firmware"),(0,o.kt)("li",{parentName:"ol"},"Install the new firmware to the device")),(0,o.kt)("h2",{id:"modifying-the-configuration"},"Modifying the Configuration"),(0,o.kt)("p",null,"Once ESPHome Dashboard is finished adopting the device, you will see a new node for your Upsy Desky by the name of ",(0,o.kt)("inlineCode",{parentName:"p"},"upsy-desky-XXXXXX"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"XXXXXX")," is derived from the MAC address of the device. Click on the edit button to see the config file."),(0,o.kt)("p",null,"It should look something like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"substitutions:\n  name: upsy-desky-cf32ec\npackages:\n  # Change the line below to reference `base.yaml` instead, if you want the\n  # base config (see next section for details)\n  tj_horner.upsy_desky: github://tjhorner/upsy-desky/firmware/stock.yaml@v1.0.3\nesphome:\n  name: ${name}\n  name_add_mac_suffix: false\napi:\n  encryption:\n    key: your-encryption-key\n\nwifi:\n  ssid: !secret wifi_ssid\n  password: !secret wifi_password\n")),(0,o.kt)("p",null,"It is pretty barebones, but this is because it references the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tjhorner/upsy-desky/blob/master/firmware/stock.yaml"},"stock firmware config")," as a package, which contains all the components necessary for it to work. You can add other components to the config as you wish; for example, you might want to turn your Upsy Desky into a ",(0,o.kt)("a",{parentName:"p",href:"https://esphome.io/components/bluetooth_proxy.html"},"Bluetooth proxy")," in order to extend Home Assistant's Bluetooth range."),(0,o.kt)("p",null,"There are also some substitutions you can declare which will change the behavior in the firmware, most notably is ",(0,o.kt)("inlineCode",{parentName:"p"},"friendly_name"),', which changes the "friendly name" in each of the sensors. (See also: ',(0,o.kt)("a",{parentName:"p",href:"/docs/configuration/renaming/"},"Renaming the Device"),")"),(0,o.kt)("h3",{id:"trimming-the-firmware"},"Trimming the Firmware"),(0,o.kt)("p",null,"When Upsy Desky units are shipped out, they are flashed with an ESPHome config that contains the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tjhorner/upsy-desky/blob/master/firmware/base.yaml"},"base config")," (with all the components for height decoding, presets, etc.) as well as some components which are helpful for users that do not use ESPHome or Home Assistant, as well as some components to improve the out of box experience (e.g., captive portal, Improv serial, etc.)."),(0,o.kt)("p",null,"This is also the config that ESPHome Dashboard will adopt the device with, in order to minimize friction when initially adopting the device. However, there are likely components in there that you do not need. Switching to the base config will significantly reduce the firmware size ","\u2014"," by about 66% ","\u2014"," and removes some components that may be insecure."),(0,o.kt)("p",null,"You can review the stock firmware config ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tjhorner/upsy-desky/blob/master/firmware/stock.yaml"},"here")," and determine if you are using any components from that config. If you aren't, you can switch to the base config easily: just change the reference from ",(0,o.kt)("inlineCode",{parentName:"p"},"stock.yaml")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"base.yaml"),"."),(0,o.kt)("p",null,"But if you are using a feature from the stock config and it is not in the base config, you will need to add it to your config manually by copy-pasting the section from ",(0,o.kt)("inlineCode",{parentName:"p"},"stock.yaml"),". For example, if you want to use the base config, but still retain the ",(0,o.kt)("inlineCode",{parentName:"p"},"web_server")," component, your config would look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"substitutions:\n  name: upsy-desky-cf32ec\npackages:\n  tj_horner.upsy_desky: github://tjhorner/upsy-desky/firmware/base.yaml@v1.0.3\nesphome:\n  name: ${name}\n  name_add_mac_suffix: false\napi:\n  encryption:\n    key: your-encryption-key\n\nwifi:\n  ssid: !secret wifi_ssid\n  password: !secret wifi_password\n\n# Copied from stock.yaml: https://github.com/tjhorner/upsy-desky/blob/b238eb40c3203c3af9be2d2b0f8bde571941091e/firmware/stock.yaml#LL19-L20C11\nweb_server:\n  port: 80\n")),(0,o.kt)("h3",{id:"updating-base-config"},"Updating Base Config"),(0,o.kt)("p",null,"When you first adopt the device, the package reference is locked to a specific version of the config so as not to cause breaking changes. You can either set this to ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," in order to always get the latest config, or to a specific version tag (see all the releases ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tjhorner/upsy-desky/releases"},"here"),")."),(0,o.kt)("h2",{id:"understanding-the-configuration"},"Understanding the Configuration"),(0,o.kt)("h3",{id:"addons"},"Addons"),(0,o.kt)("p",null,'To keep things maintainable, each large part of the configuration is broken up into its own "addon". There are currently three addons, all of which are included in the base config:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"presets.yaml"),": Configuration necessary for recalling and setting desk presets"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"runtime-config.yaml"),": Entities related to configuration of the device at runtime"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"stable-ids.yaml"),": Provides stable IDs for the web API")),(0,o.kt)("p",null,"You can see the source for all the addons ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tjhorner/upsy-desky/tree/master/firmware/addons"},"here"),"."))}p.isMDXComponent=!0},1507:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/adopt-eadc99057d2358636c119d3420d37388.png"}}]);