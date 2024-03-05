import {
  SexTypeEnum,
} from '../index';

/**
 * AddUserInfoRequest
 */
export interface AddUserInfoRequest {
  // 邮箱地址
  email?: string;
  // 性别
  gender: SexTypeEnum;
  // 昵称
  nickname?: string;
  // 手机号
  phone: string;
  // 真实性名
  realName: string;
  // 登录账号
  username: string;
}