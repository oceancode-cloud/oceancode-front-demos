<template>
  <oc-form ref="Form" :formValue="model" :group="group"></oc-form>
</template>
<script setup>
import { defineProps,h } from 'vue'
import { OcForm, useForm, autoDone } from '@oceancode/framework';
import { addUser } from '@/services'

import {
  dictSexTypeEnum,
} from '@/models'

const props = defineProps({
  group: {
    type: String,
    default: 'default'
  },
  model: Object
})

const Form = useForm({
  title: '新增用户',
  items:[
    {
      label:'登录账号',
      prop:'username',
      component:{
        name:'input',
        attrs: {
          placeholder: "请输入登录账号",
        },
      },
      rules: {
        required: true,
        type: 'string',
        message: "登录账号不能为空",
      },
    },
    {
      label:'真实性名',
      prop:'realName',
      component:{
        name:'input',
        attrs: {
          placeholder: "请输入真实性名",
        },
      },
      rules: {
        required: true,
        type: 'string',
        message: "真实性名不能为空",
      },
    },
    {
      label:'性别',
      prop:'gender',
      component:{
        name:'select',
        options: dictSexTypeEnum,
        attrs: {
          placeholder: "请输入性别",
        },
      },
      rules: {
        required: true,
        type: 'number',
        message: "性别不能为空",
      },
    },
    {
      label:'手机号',
      prop:'phone',
      component:{
        name:'input',
        attrs: {
          placeholder: "请输入手机号",
        },
      },
      rules: {
        required: true,
        type: 'string',
        message: "手机号不能为空",
      },
    },
    {
      label:'昵称',
      prop:'nickname',
      component:{
        name:'input',
        attrs: {
          placeholder: "请输入昵称",
        },
      },
    },
    {
      label:'邮箱地址',
      prop:'email',
      component:{
        name:'input',
        attrs: {
          placeholder: "请输入邮箱地址",
        },
      },
    },
  ],
  on:{
    submit(data,params){
      return autoDone(addUser({...data}),params)
    }
  }
})
</script>