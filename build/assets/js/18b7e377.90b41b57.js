"use strict";(self.webpackChunkcronframesite=self.webpackChunkcronframesite||[]).push([[399],{9810:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(4848),o=t(8453);const a={sidebar_position:1},i="Global Job",s={id:"tutorial-framework/Job Definition/global job",title:"Global Job",description:'A function annotated with the cron macro defines what is known as a "global job" inside cronframe.',source:"@site/versioned_docs/version-0.1.3/tutorial-framework/Job Definition/global job.md",sourceDirName:"tutorial-framework/Job Definition",slug:"/tutorial-framework/Job Definition/global job",permalink:"/cronframe_site/docs/tutorial-framework/Job Definition/global job",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-0.1.3/tutorial-framework/Job Definition/global job.md",tags:[],version:"0.1.3",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Job Definition",permalink:"/cronframe_site/docs/category/job-definition"},next:{title:"A Cron Object",permalink:"/cronframe_site/docs/tutorial-framework/Job Definition/cron object"}},l={},c=[];function d(e){const n={a:"a",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"global-job",children:"Global Job"})}),"\n",(0,r.jsxs)(n.p,{children:["A function annotated with the ",(0,r.jsx)(n.code,{children:"cron"}),' macro defines what is known as a "global job" inside cronframe.']}),"\n",(0,r.jsx)(n.p,{children:"The macro takes two attributes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["expr","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"the cron expression to use for the job's schedule"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["timeout","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"the value in ms to use for the timeout which resets daily"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Let us look at an example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'#[macro_use] extern crate cronframe;\n\n#[cron(expr="0 0 0/12 * * *", timeout="0")]\nfn my_global_job(){\n    println!("I run once every 12 hours every day.");\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"The job is defined and ready to be collected by an instance of the framework."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"use cronframe::CronFrame;\n\nfn main(){\n    let cronframe = CronFrame::default();\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"The default function inits the framework with the default logger configuration and no filter for the type of job allowed. Any global jobs that we have definied is also automatically collected and read to be executed."}),"\n",(0,r.jsx)(n.p,{children:"Please refer to the CronFrame instance page of the tutorial to learn more about it."}),"\n",(0,r.jsxs)(n.p,{children:["If it is not specified otherwise in a cronframe.toml file, the web server will be running at ",(0,r.jsx)(n.a,{href:"http://127.0.0.1:8098",children:"http://127.0.0.1:8098"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"At this point we need to start the scheduler and decided what to do to keep main alive."}),"\n",(0,r.jsxs)(n.p,{children:["To start the scheduler we simply call the ",(0,r.jsx)(n.code,{children:"start_scheduler"})," method:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"use cronframe::CronFrame;\n\nfn main(){\n    let cronframe = CronFrame::default();\n    cronframe.start_scheduler();\n\n    // do stuff\n\n    cronframe.keep_alive();\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Unless we call the keep alive method, main will terminate."}),"\n",(0,r.jsx)(n.p,{children:"If we don't need to to anything between the start_scheduler and the keep_alive methods we can use the `run' method as a shorthand for both of them."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"use cronframe::CronFrame;\n\nfn main(){\n    let cronframe = CronFrame::default();\n    cronframe.run(); \n    // .run() is equivalent to .start_scheduler().keep_alive()\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var r=t(6540);const o={},a=r.createContext(o);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);