import { UserLoginRequest, UserLoginResponse } from "@/models";

export function userLogin(params: UserLoginRequest): Promise<UserLoginResponse> {
  return Promise.resolve({
    token: 'test-token',
    userInfo: {
      username: 'test',
    },
    projectId: 1
  })
}