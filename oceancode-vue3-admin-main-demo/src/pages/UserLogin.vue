<template>
  <div class="view-account">
    <div class="view-account-header"></div>
    <div class="view-account-container">
      <div class="view-account-top">
        <div class="view-account-top-logo">
          <h1 class="title">{{title}}</h1>
        </div>
        <div class="view-account-top-desc">{{description}}</div>
      </div>
      <div class="view-account-form">
        <oc-form ref="Form">
          <template #username="{ model }">
            <n-input v-model:value="model.username" size="large" placeholder="请输入账号">
              <template #prefix>
                <n-icon size="18" color="#808695">
                  <PersonOutline />
                </n-icon>
              </template>
            </n-input>
          </template>
          <template #password="{ model }">
            <n-input
              v-model:value="model.password"
              size="large"
              placeholder="请输入密码"
              type="password"
            >
              <template #prefix>
                <n-icon size="18" color="#808695">
                  <LockClosedOutline />
                </n-icon>
              </template>
            </n-input>
          </template>
        </oc-form>
        <oc-space vertical>
          <n-button type="info" size="large" block @click="handleLoginSubmit" :loading="loading"> 登录 </n-button>
        </oc-space>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, defineProps } from 'vue';
  import { PersonOutline, LockClosedOutline } from '@vicons/ionicons5';
  import { 
    useRouter,
    useUser,
    useMessage,
    useForm,
    OcForm,
    OcSpace,
    UserLoginResponse,
    PageEnum
  } from '@oceancode/framework'
import { userLogin } from '@/services'

  const props = defineProps({
    title: {
      type: String,
      default: 'OceanCode'
    },
    description: {
      type: String,
      default: 'Oceancode 登录模板,账号密码任意输入'
    }
  })

  const message = useMessage();
  const loading = ref(false);
  const user = useUser();
  const router = useRouter();
  if(user.isLogin){
    router.push({name:PageEnum.DASHBOARD_ROUTE_NAME,params:{projectId:user.getProjectId}})
  }
  const Form = useForm({
    items:[
      {
        prop:'username',
        slot:'username',
        rules: {
          required: true,
          message: "请输入登录账号",
        }
      },
      {
        prop:'password',
        slot:'password',
        rules: {
          required: true,
          message: "请输入登录密码",
        }
      }
    ],
    on:{
      submit(data) {
        loading.value = true
        userLogin(data)
        .then(resData=>{
          message.success('登录成功')
          loading.value = false
          console.log(resData)
          user.setLoginResponse(resData)

          const redirectPath = router.query().redirect;
          if(redirectPath){
            const redirect = decodeURIComponent(redirectPath);
            router.replace({path:redirect})
            return
          }
          if((resData as any).projectId){
            router.replace({name:PageEnum.DASHBOARD_ROUTE_NAME,params:{projectId:resData.projectId}})
          }else{
            router.replace({name:PageEnum.DASHBOARD_ROUTE_NAME})
          }
        })
        .catch(()=> {
          loading.value = false
        })
      }
    }
  })
  function handleLoginSubmit(){
    Form.value.submit();
  }
</script>

<style scoped>
  .view-account {
    background: #F0F2F5;
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: auto;
  }

  .view-account-container {
      flex: 1;
      padding: 32px 12px;
      max-width: 384px;
      min-width: 384px;
      margin: 0 auto;
    }
  .view-account-top {
      padding: 32px 0;
      text-align: center;
    }
  .view-account-top-desc {
    font-size: 14px;
    color: #808695;
  }
  .view-account-top-logo .title{
    font-size: 30px;
  }
  .view-account-other {
      width: 100%;
  }
  .view-account-default-color {
      color: #515a6e;

      
    }
  .view-account-default-color .ant-checkbox-wrapper {
        color: #515a6e;
  }

  @media (min-width: 768px) {
    .view-account {
      background: #F0F2F5;
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: 100%;
    }

    .page-account-container {
      padding: 32px 0 24px 0;
    }
  }
</style>