import{u as o}from"./asyncData.1bbef3b7.js";import{V as n,b as c,h as e,t as _,u as r,o as l}from"./entry.ddac1688.js";const i={class:"m-6 flex flex-col gap-6"},d=e("h1",null,"Dashboard",-1),p={class:"text-xl"},y={__name:"index",async setup(m){let t,s;const a=([t,s]=n(()=>o("item",()=>$fetch("/data.json"))),t=await t,s(),t);return(u,h)=>(l(),c("div",i,[d,e("div",p,[e("p",null,"text: "+_(r(a)),1)])]))}};export{y as default};
