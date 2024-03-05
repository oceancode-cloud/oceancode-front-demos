import {
  SexTypeEnum,
  UserStatus
} from '../index';

/**
 * UserInfoColumnOption
 */
export interface UserInfoColumnOption {
  // 头像
  avatar?: string;
  // 注册时间
  created?: number;
  // 邮箱地址
  email?: string;
  // 性别
  gender: SexTypeEnum;
  // 主键 - 主键
  id: number;
  // 昵称
  nickname?: string;
  // 手机号
  phone: string;
  // 性名
  realName: string;
  // 状态
  status: UserStatus;
  // 账号
  username: string;
}