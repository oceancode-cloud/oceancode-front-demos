<template>
  <oc-data-table ref="Table" :group="group"></oc-data-table>
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
import { listUsers } from '@/services'
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