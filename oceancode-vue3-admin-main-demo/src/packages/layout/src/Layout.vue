<script setup lang="ts">
import { useLayout,OcLayout, OcProjectSwitch } from '@oceancode/framework'
import { listUserProjectOption } from '@/services'
import { loadSystemMenu } from '@/services'
import { computed } from 'vue'
const layout = useLayout();
const fetchMenuData = async()=>{
  const menuData = await loadSystemMenu()
  layout.setMenus(menuData)
}
fetchMenuData()
const hasProject = computed(()=>layout.hasProject)
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