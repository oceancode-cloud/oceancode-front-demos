import {
  UserBaseInfo
} from '../../index';

/**
 * UserLoginResponse
 */
export interface UserLoginResponse {
  // 工作区ID
  projectId?: number;
  // token
  token: string;
  // 用户信息
  userInfo: UserBaseInfo;
}