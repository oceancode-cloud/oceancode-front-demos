import { SelectOption } from "../common";

/**
 * UserStatus
 */
export enum UserStatus {
  // 冻结
  FREEZE = 0,
  // 正常
  NORMAL = 1,
}

export function dictUserStatus(): Array<SelectOption<string, number>> {
  return [
    { label: '冻结', value: 0 },
    { label: '正常', value: 1 },
  ]
}

export function toUserStatus(val: string | number): SelectOption<string, number> {
  return dictUserStatus().find(e => e.value == val) as SelectOption<string, number>
}