<script setup lang="ts">
import { useLayout,OcLayout, OcProjectSwitch } from '@oceancode/framework'
import { listUserProjectOption } from '@/services'
import { loadSystemMenu } from '@/services'
const layout = useLayout();
const fetchMenuData = async()=>{
  const menuData = await loadSystemMenu()
  layout.setMenus(menuData)
}
fetchMenuData()
</script>

<template>
  <oc-layout>
    <RouterView />
    <template #project>
      <oc-project-switch :on-load="listUserProjectOption" 
        :action="false"/>
    </template>
  </oc-layout>
</template>