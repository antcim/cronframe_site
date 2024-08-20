"use strict";(self.webpackChunkcronframesite=self.webpackChunkcronframesite||[]).push([[908],{6323:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=o(4848),r=o(8453);const i={sidebar_position:5},a="Without Macros",s={id:"tutorial-framework/Job Definition/no_macros",title:"Without Macros",description:"Say, you are don't find defining jobs with macros appealing, the framework might still be of interest to you.",source:"@site/docs/tutorial-framework/Job Definition/no_macros.md",sourceDirName:"tutorial-framework/Job Definition",slug:"/tutorial-framework/Job Definition/no_macros",permalink:"/cronframe_site/docs/next/tutorial-framework/Job Definition/no_macros",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-framework/Job Definition/no_macros.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Method Job",permalink:"/cronframe_site/docs/next/tutorial-framework/Job Definition/method job"},next:{title:"CronFrame Instance",permalink:"/cronframe_site/docs/next/tutorial-framework/cronframe_instance"}},c={},l=[];function d(e){const n={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"without-macros",children:"Without Macros"})}),"\n",(0,t.jsx)(n.p,{children:"Say, you are don't find defining jobs with macros appealing, the framework might still be of interest to you."}),"\n",(0,t.jsxs)(n.p,{children:["To define a job without macros we use the ",(0,t.jsx)(n.code,{children:"new_job"})," method of the framework which takes the following arguments:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"the name of the job"}),"\n",(0,t.jsx)(n.li,{children:"the job's code"}),"\n",(0,t.jsx)(n.li,{children:"a string containing the cron expression"}),"\n",(0,t.jsx)(n.li,{children:"a string containing the timeout"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Passing the job's code can either be done by useing the identifier of an existing function..."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'fn my_no_macro_job(){\n    println!("Look ma, not using macros here!");\n}\n\nfn main(){\n    CronFrame::default()\n        .new_job(\n            "hello_job", my_no_macro_job, "* * * * * * *", "0"\n        )\n        .run();\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"... or using a closure that captures 0 arguments as input:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'fn main(){\n    CronFrame::default()\n        .new_job(\n            "hello_job", || { println!("hello job") }, "* * * * * * *", "0"\n        )\n        .run();\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"You might ask what type a job defined this way is, and the answer to that is: a global cron job."}),"\n",(0,t.jsx)(n.p,{children:"Job definition without macros is not the focus of the framework, at least for the moment."})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>s});var t=o(6540);const r={},i=t.createContext(r);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);