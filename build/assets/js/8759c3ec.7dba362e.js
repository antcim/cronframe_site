"use strict";(self.webpackChunkcronframesite=self.webpackChunkcronframesite||[]).push([[948],{9453:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=n(4848),r=n(8453);const i={sidebar_position:2},c="A Cron Object",a={id:"tutorial-framework/Job Definition/cron object",title:"A Cron Object",description:"Before we see how to define either a function or a method job we need to introduce a very easy concept of the framework.",source:"@site/docs/tutorial-framework/Job Definition/cron object.md",sourceDirName:"tutorial-framework/Job Definition",slug:"/tutorial-framework/Job Definition/cron object",permalink:"/cronframe_site/docs/next/tutorial-framework/Job Definition/cron object",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-framework/Job Definition/cron object.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Global Job",permalink:"/cronframe_site/docs/next/tutorial-framework/Job Definition/global job"},next:{title:"Function Job",permalink:"/cronframe_site/docs/next/tutorial-framework/Job Definition/function job"}},s={},d=[];function l(e){const o={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.header,{children:(0,t.jsx)(o.h1,{id:"a-cron-object",children:"A Cron Object"})}),"\n",(0,t.jsx)(o.p,{children:"Before we see how to define either a function or a method job we need to introduce a very easy concept of the framework."}),"\n",(0,t.jsxs)(o.p,{children:["A ",(0,t.jsx)(o.code,{children:"cron object"})," is simply the name given to a struct type that is annotated with the ",(0,t.jsx)(o.code,{children:"cron_obj"})," macro and that has an implementation block annotated with the ",(0,t.jsx)(o.code,{children:"cron_impl"})," macro containing only jobs inside of it."]}),"\n",(0,t.jsx)(o.p,{children:"For Example:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-rust",children:"#[marco_use] extern crate cronframe;\n\nuse cronframe::{CronFrame, CronFrameExpr};\n\n#[cron_obj]\nstruct WeatherJob{\n    city: String,\n    schedule: CronFrameExpr,\n}\n\n#[cron_impl]\nimpl WeatherJob{\n    // function and method jobs can be defined here\n}\n"})}),"\n",(0,t.jsx)(o.p,{children:"As we can see the definition of a cron object is very straightforward and it also makes perfectly clear where the jobs should be defined."}),"\n",(0,t.jsxs)(o.p,{children:["One thing to be aware of when it comes to cron objects is that their fields are required to implement the ",(0,t.jsx)(o.code,{children:"Clone"})," trait."]}),"\n",(0,t.jsx)(o.p,{children:"Now we can get to defining function and methods jobs."})]})}function f(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>c,x:()=>a});var t=n(6540);const r={},i=t.createContext(r);function c(e){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);