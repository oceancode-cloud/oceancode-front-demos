import{d as w,o as f,c as k,a as e,i as r,r as I,b as v,e as R,f as s,w as t,u as d,p as E,g as U,h as b}from"./index-7f08fe91.js";import{_ as B}from"./plugin-vueexport-helper-c27b6911.js";function j(o){return Promise.resolve({token:"test-token",userInfo:{username:"test"},projectId:1})}const M={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},N=e("path",{d:"M336 208v-95a80 80 0 0 0-160 0v95",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),S=e("rect",{x:"96",y:"208",width:"320",height:"272",rx:"48",ry:"48",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),y=w({name:"LockClosedOutline",render:function(p,n){return f(),k("svg",M,[N,S])}}),L={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},z=e("path",{d:"M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),$=e("path",{d:"M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),T=w({name:"PersonOutline",render:function(p,n){return f(),k("svg",L,[z,$])}});var _=(o=>(o.LOGIN_ROUTE_NAME="login",o.DASHBOARD_ROUTE_NAME="home",o))(_||{});function D(o){return j()}const x=o=>(E("data-v-a81da7cb"),o=o(),U(),o),F={class:"view-account"},H=x(()=>s("div",{class:"view-account-header"},null,-1)),P={class:"view-account-container"},q=x(()=>s("div",{class:"view-account-top"},[s("div",{class:"view-account-top-logo"},[s("h1",{class:"title"},"用户登录")]),s("div",{class:"view-account-top-desc"},"Oceancode 用户登录模板")],-1)),V={class:"view-account-form"},G=w({__name:"index",setup(o){const p=r.useMessage(),n=I(!1),m=r.useUser(),c=r.useRouter();m.isLogin&&c.push({name:_.DASHBOARD_ROUTE_NAME,params:{projectId:m.getProjectId}});const g=r.useForm({items:[{prop:"username",slot:"username",rules:{required:!0,message:"请输入登录账号"}},{prop:"password",slot:"password",rules:{required:!0,message:"请输入登录密码"}}],on:{submit(A){n.value=!0,D().then(a=>{p.success("登录成功"),n.value=!1,console.log(a),m.setLoginResponse(a);const i=c.query().redirect;if(i){const u=decodeURIComponent(i);c.replace({path:u});return}a.projectId?c.replace({name:_.DASHBOARD_ROUTE_NAME,params:{projectId:a.projectId}}):c.replace({name:_.DASHBOARD_ROUTE_NAME})}).catch(()=>{n.value=!1})}}});function O(){g.value.submit()}return(A,a)=>{const i=v("n-icon"),u=v("n-input"),C=v("n-button");return f(),R("div",F,[H,s("div",P,[q,s("div",V,[e(d(r.OcForm),{ref_key:"Form",ref:g},{username:t(({model:l})=>[e(u,{value:l.username,"onUpdate:value":h=>l.username=h,size:"large",placeholder:"请输入账号(任意输入)"},{prefix:t(()=>[e(i,{size:"18",color:"#808695"},{default:t(()=>[e(d(T))]),_:1})]),_:2},1032,["value","onUpdate:value"])]),password:t(({model:l})=>[e(u,{value:l.password,"onUpdate:value":h=>l.password=h,size:"large",placeholder:"请输入密码(任意输入)",type:"password"},{prefix:t(()=>[e(i,{size:"18",color:"#808695"},{default:t(()=>[e(d(y))]),_:1})]),_:2},1032,["value","onUpdate:value"])]),_:1},512),e(d(r.OcSpace),{vertical:""},{default:t(()=>[e(C,{type:"info",size:"large",block:"",onClick:O,loading:n.value},{default:t(()=>[b(" 登录 ")]),_:1},8,["loading"])]),_:1})])])])}}});const Q=B(G,[["__scopeId","data-v-a81da7cb"]]);export{Q as default};
