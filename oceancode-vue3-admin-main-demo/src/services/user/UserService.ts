import { AddUserInfoRequest, SexTypeEnum, UserLoginRequest, UserLoginResponse, UserStatus } from "@/models";
import { UserInfoColumnOption } from "@/models";

export function userLogin(params: UserLoginRequest): Promise<UserLoginResponse> {
  return Promise.resolve({
    token: 'test-token',
    userInfo: {
      username: 'test',
    },
    projectId: 1
  })
}

export function listUsers(): Promise<Array<UserInfoColumnOption>> {
  return Promise.resolve([
    {
      avatar: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
      created: new Date().getTime(),
      email: 'test@sina.com',
      gender: SexTypeEnum.MALE,
      id: 1,
      nickname: '张三',
      phone: '12345678986',
      realName: '张三',
      status: UserStatus.NORMAL,
      username: 'test'
    }
  ])
}

export function addUser(params: AddUserInfoRequest): Promise<any> {
  console.log('====addUser success', params)
  return Promise.resolve()
}

export function updateUserById(id: number): Promise<void> {
  console.log('====updateUserById update success', id)
  return Promise.resolve()
}

export function deleteUserById(id: number): Promise<void> {
  console.log('=====deleteUserById success', id)
  return Promise.resolve()
}