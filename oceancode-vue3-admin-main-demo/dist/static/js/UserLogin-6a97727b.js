import{i as e,d as s,a as n,l,o,c as i,u,b as p}from"./index-ec626883.js";const m={__name:"UserLogin",props:{group:{type:String,default:"default"}},setup(t){const a=e.useTable({props:{defaultExpandedRows:0,expandIconType:"arrow"},columns:[{title:"头像",traits:["avatar"],align:"center",key:"avatar"},{title:"账号",key:"username"},{title:"性名",key:"realName"},{title:"性别",dict:s,key:"gender"},{title:"手机号",key:"phone"},{title:"邮箱地址",key:"email"},{title:"昵称",key:"nickname"},{title:"注册时间",traits:["timestamp"],key:"created"},{title:"状态",dict:n,key:"status"}],on:{onLoad(r){return l()}}});return o(()=>{}),(r,c)=>(p(),i(u(e.OcDataTable),{ref_key:"Table",ref:a,group:t.group},null,8,["group"]))}};export{m as default};