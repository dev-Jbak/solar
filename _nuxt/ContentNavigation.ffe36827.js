import{u as f}from"./asyncData.d4497ca7.js";import{m as v,_ as d,f as l,v as _,x as g,y as h,p as y,s as r}from"./entry.9cbab292.js";import{q as w,h as p,e as C,j as $}from"./query.3d99a514.js";import{_ as N}from"./nuxt-link.70aaaeff.js";import{w as c,s as P,u as j,a as x}from"./utils.d370e9af.js";/* empty css                      */const T=async n=>{const{content:t}=v().public;typeof(n==null?void 0:n.params)!="function"&&(n=w(n));const a=n.params(),s=t.experimental.stripQueryParameters?c(`/navigation/${`${p(a)}.${t.integrity}`}/${C(a)}.json`):c(`/navigation/${p(a)}.${t.integrity}.json`);if(P())return(await d(()=>import("./client-db.c92afc68.js"),["./client-db.c92afc68.js","./entry.9cbab292.js","./entry.e239ebdb.css","./utils.d370e9af.js","./query.3d99a514.js","./index.a6ef77ff.js"],import.meta.url).then(o=>o.generateNavigation))(a);const e=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:$(a),previewToken:j("previewToken").value}});if(typeof e=="string"&&e.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return e};const R=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(n){const{query:t}=_(n),a=g(()=>{var e;return typeof((e=t.value)==null?void 0:e.params)=="function"?t.value.params():t.value});if(!a.value&&h("dd-navigation").value){const{navigation:e}=x();return{navigation:e}}const{data:s}=await f(`content-navigation-${p(a.value)}`,()=>T(a.value));return{navigation:s}},render(n){const t=y(),{navigation:a}=n,s=o=>r(N,{to:o._path},()=>o.title),e=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),e(i.children,u+1)]):r("li",null,s(i)))),m=o=>e(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):m(a)}});export{R as default};
