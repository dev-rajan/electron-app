import{r as o,j as e,c as r,R as t}from"./vendor-Bj38lJu5.js";import"./index-E2pdGSzR.js";function p(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}const n=""+new URL("electron-DtwWEc_u.svg",import.meta.url).href;function c(){const[s]=o.useState(window.electron.process.versions);return e.jsxs("ul",{className:"versions",children:[e.jsxs("li",{className:"electron-version",children:["Electron v",s.electron]}),e.jsxs("li",{className:"chrome-version",children:["Chromium v",s.chrome]}),e.jsxs("li",{className:"node-version",children:["Node v",s.node]})]})}function a(){const s=()=>window.electron.ipcRenderer.send("open-whatsapp");return e.jsxs(e.Fragment,{children:[e.jsx("img",{alt:"logo",className:"logo",src:n}),e.jsx("div",{className:"text",children:"Electron app to open WhatsApp"}),e.jsx("p",{className:"tip",children:"Please click the button below to open whatsapp in a new window."}),e.jsx("div",{className:"actions",children:e.jsx("div",{className:"action",children:e.jsx("a",{target:"_blank",rel:"noreferrer",onClick:s,children:"Open WhatsApp"})})}),e.jsx(c,{})]})}r.createRoot(document.getElementById("root")).render(e.jsx(t.StrictMode,{children:e.jsx(a,{})}));export{p as g};
