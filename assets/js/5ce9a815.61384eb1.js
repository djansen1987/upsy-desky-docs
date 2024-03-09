"use strict";(self.webpackChunkupsy_desky_docs=self.webpackChunkupsy_desky_docs||[]).push([[595],{4864:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=s(1527),t=s(6120);const i={},r="Connection Issues",c={id:"troubleshooting/connection-issues",title:"Connection Issues",description:'This guide will assist in troubleshooting connection issues with your Upsy Desky, such as it appearing "unknown" or "unavailable" in Home Assistant.',source:"@site/docs/troubleshooting/connection-issues.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/connection-issues",permalink:"/docs/troubleshooting/connection-issues",draft:!1,unlisted:!1,editUrl:"https://github.com/tjhorner/upsy-desky-docs/edit/main/docs/troubleshooting/connection-issues.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting & Support",permalink:"/docs/troubleshooting/"},next:{title:"HTTP API",permalink:"/docs/reference/api"}},a={},l=[{value:"Determine Cause",id:"determine-cause",level:2},{value:"<code>unknown</code> State",id:"unknown-state",level:3},{value:"<code>unavailable</code> State",id:"unavailable-state",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Collect Device Logs",id:"collect-device-logs",level:3},{value:"Inspect Logs",id:"inspect-logs",level:3},{value:"Check Device Info",id:"check-device-info",level:3},{value:"Share Logs",id:"share-logs",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"connection-issues",children:"Connection Issues"}),"\n",(0,o.jsx)(n.p,{children:'This guide will assist in troubleshooting connection issues with your Upsy Desky, such as it appearing "unknown" or "unavailable" in Home Assistant.'}),"\n",(0,o.jsx)(n.h2,{id:"determine-cause",children:"Determine Cause"}),"\n",(0,o.jsx)(n.p,{children:'If you are seeing the "unknown" or "unavailable" state in Home Assistant, there could be several reasons for this. First we need to determine if this is truly a connection issue or some other kind of issue.'}),"\n",(0,o.jsxs)(n.h3,{id:"unknown-state",children:[(0,o.jsx)(n.code,{children:"unknown"})," State"]}),"\n",(0,o.jsxs)(n.p,{children:['If your Upsy Desky appears to be online and connected to Home Assistant (e.g., the "Status LED" and other entities are available and working), but the "Desk Height" sensor appears as ',(0,o.jsx)(n.code,{children:"unknown"}),", it's unlikely to be a connection issue. As a quick fix, try pressing the up or down arrow on your desk's physical keypad to see if the desk height becomes available again. If that doesn't work, try pressing the \"Re-Detect Decoder\" button in Home Assistant."]}),"\n",(0,o.jsx)(n.p,{children:"If this is the case, it's likely a different issue out of the scope of this guide."}),"\n",(0,o.jsxs)(n.h3,{id:"unavailable-state",children:[(0,o.jsx)(n.code,{children:"unavailable"})," State"]}),"\n",(0,o.jsxs)(n.p,{children:["If you find that the Upsy Desky entities repeatedly become ",(0,o.jsx)(n.code,{children:"unavailable"})," for some amount of time, this is more likely to be a connection or reset issue. As an example, here's what a disconnect looks like in the Logbook:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Status LED entity becoming unavailable intermittently in Home Assistant logbook",src:s(9223).Z+"",width:"804",height:"932"})}),"\n",(0,o.jsx)(n.p,{children:"Your Upsy Desky can disconnect from Home Assistant for many reasons, including network issues, power issues, or firmware issues. Now that we have verified that this is a connection issue, let's move on to troubleshooting."}),"\n",(0,o.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,o.jsx)(n.h3,{id:"collect-device-logs",children:"Collect Device Logs"}),"\n",(0,o.jsxs)(n.p,{children:["The first step in troubleshooting connection issues is to check the logs on your Upsy Desky. First, let's increase the verbosity of the logs and include some extra device info that will aid in troubleshooting. You will need to adopt your device in the ESPHome Dashboard so you can edit the config, as described in the ",(0,o.jsx)(n.a,{href:"/docs/advanced/customization/",children:"firmware customization guide"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Add these lines to your device's configuration:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'logger:\n  level: DEBUG\n\ndebug:\n  update_interval: 5s\n\ntext_sensor:\n  - platform: debug\n    device:\n      name: "Device Info"\n\nsensor:\n  - platform: debug\n    free:\n      name: "Heap Free"\n    block:\n      name: "Heap Max Block"\n    loop_time:\n      name: "Loop Time"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Once you've flashed the new firmware, you can start collecting logs. Importantly, you must do this ",(0,o.jsx)(n.strong,{children:"before"})," a disconnection occurs in order to capture the logs from when that happens, since the logs are not stored persistently. I would also recommend connecting directly to the device via USB."]}),"\n",(0,o.jsx)(n.p,{children:'From ESPHome Dashboard, press "LOGS" on the card for the device, then use the "Plug into this computer" option to collect logs via USB. Keep this open in the background until you notice a disconnection happen in Home Assistant, then press the "Download Logs" button to save the logs to a file.'}),"\n",(0,o.jsx)(n.h3,{id:"inspect-logs",children:"Inspect Logs"}),"\n",(0,o.jsx)(n.p,{children:"Once you've collected the logs you can look for the culprit of your disconnections. Some things to look for:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Wi-Fi connection issues (lines may contain ",(0,o.jsx)(n.code,{children:"Event: Disconnected"})," and provide a reason)"]}),"\n",(0,o.jsx)(n.li,{children:"Device resets or crashes (indicated by a bunch of hex addresses and a stack trace)"}),"\n",(0,o.jsx)(n.li,{children:"Anything else related at the time of the disconnection"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"check-device-info",children:"Check Device Info"}),"\n",(0,o.jsxs)(n.p,{children:['Once the Upsy Desky reconnects to Home Assistant, you should take a look at the "Device Info" sensor to see if there is any useful information. The "Reset:" information is particularly prescient here, because if a reset was incurred by the watchdog, for example, this could indicate the device is crashing and resetting. Each of the reset reasons is described ',(0,o.jsx)(n.a,{href:"https://docs.espressif.com/projects/esp-idf/en/stable/esp32/api-reference/system/misc_system_api.html#_CPPv418esp_reset_reason_t",children:"in Espressif's docs"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"share-logs",children:"Share Logs"}),"\n",(0,o.jsxs)(n.p,{children:["Once you have collected and inspected the logs, it would be very helpful if you could share any relevant logs or findings at the ",(0,o.jsx)(n.a,{href:"https://github.com/tjhorner/upsy-desky/issues/28",children:"open GitHub issue for this problem"}),", along with the following details:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Desk control box model number"}),"\n",(0,o.jsx)(n.li,{children:"Desk keypad model number"}),"\n",(0,o.jsx)(n.li,{children:"When you purchased/built your Upsy Desky"}),"\n",(0,o.jsx)(n.li,{children:"What ESPHome & package versions you are running"}),"\n",(0,o.jsx)(n.li,{children:'Output of the "Device Info" sensor'}),"\n",(0,o.jsx)(n.li,{children:"ESPHome config YAML"}),"\n",(0,o.jsx)(n.li,{children:"Any recent environmental changes (e.g., new AP/router, new desk location, ESPHome/Home Assistant updates etc.)"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Thank you!"})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},9223:(e,n,s)=>{s.d(n,{Z:()=>o});const o=s.p+"assets/images/logbook-unavailable-6a7bfbf5a033f473896e6353c7dbcd47.png"},6120:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>r});var o=s(959);const t={},i=o.createContext(t);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);