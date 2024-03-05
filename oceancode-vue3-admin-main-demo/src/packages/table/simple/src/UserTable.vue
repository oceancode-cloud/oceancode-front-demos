<template>
  <oc-query :group="group">
    <template #default="{model}">
      <oc-button preset="add" text="创建用户"></oc-button>
    </template>
  </oc-query>
  <oc-data-table ref="Table" :group="group"></oc-data-table>
  <oc-drawer :group="group" type="edit" title="修改用户信息">
    <template #default="params">
      <UpdateUserForm :model="params && params.model ? params.model.data: null" :group="group"/>
    </template>
  </oc-drawer> 

  <oc-drawer :group="group" type="add" title="新增用户">
     <template #default="params">
      <AddUserForm :model="params && params.model ? params.model.data: null" :group="group"/>
    </template>
  </oc-drawer>
</template>
<script setup>
import { 
  autoDone,
  useTable,
  OcQuery,
  OcDataTable,
  OcButton,
  OcDrawer
} from '@oceancode/framework'
import { defineProps,ref,onMounted } from 'vue'
import {
  UpdateUserForm,
  AddUserForm,
} from '@/packages/form'

import { listUsers } from '@/services'
import { deleteUserById } from '@/services'
import {
  dictSexTypeEnum,
  dictUserStatus,
} from '@/models'
const props = defineProps({
  group: {
    type: String,
    default:'default'
  },
});
const Table = useTable({
  props:{
    defaultExpandedRows: 0,
    expandIconType: "arrow",
  },
  columns:[
    {
      title: '头像',
      traits:["avatar",],
      align: "center",
      key: 'avatar',
    },
    {
      title: '账号',
      key: 'username',
    },
    {
      title: '性名',
      key: 'realName',
    },
    {
      title: '性别',
      dict: dictSexTypeEnum,
      key: 'gender',
    },
    {
      title: '手机号',
      key: 'phone',
    },
    {
      title: '邮箱地址',
      key: 'email',
    },
    {
      title: '昵称',
      key: 'nickname',
    },
    {
      title: '注册时间',
      traits:["timestamp",],
      key: 'created',
    },
    {
      title: '状态',
      dict: dictUserStatus,
      key: 'status',
    },
    {
      title: '操作',
      type:'_op',
      actions:[
        {
          "type":"edit",
          "text":"编辑",
        },
        {
          "type":"delete",
          "text":"删除",
          onClick(row,params){
            return autoDone(deleteUserById(row.id),params)
          },
        },
      ]
    },
  ],
  on:{
    onLoad(params){
      return listUsers(params)
    }
  }
})

onMounted(()=>{
})
</script>