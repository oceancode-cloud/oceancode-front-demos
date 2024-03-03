import { MenuOption } from "@/models/common";
import { HomeOutline } from "@vicons/ionicons5";
import { User, TwoFactorAuthentication } from "@vicons/carbon";
import { NIcon } from 'naive-ui'
import { h } from 'vue';
export function loadSystemMenu(): Promise<Array<MenuOption>> {
  return Promise.resolve([
    {
      id: 1,
      title: '首页',
      router: {
        name: 'home'
      },
      icon: h(NIcon, { size: 18, color: '#fff' }, { default: () => h(HomeOutline) })
    },
    {
      id: 2,
      title: '用户管理',
      icon: h(NIcon, { size: 18, color: '#fff' }, { default: () => h(User) }),
      children: [
        {
          id: 3,
          title: '用户列表',
          icon: h(NIcon, { size: 18, color: '#000' }, { default: () => h(User) }),
          router: {
            name: 'userList'
          }
        }
      ]
    },
    {
      id: 3,
      title: '权限管理',
      icon: h(NIcon, { size: 18, color: '#fff' }, { default: () => h(TwoFactorAuthentication) }),
      children: [
        {
          id: 4,
          title: '权限分组',
          router: {
            name: 'roleGroupList'
          }
        }
      ]
    }
  ])
}