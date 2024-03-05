import { SelectOption } from "../common";

/**
 * 性别
 */
export enum SexTypeEnum {
  // 男
  MALE = 1,
  // 女
  FEMAL = 2,
}

export function dictSexTypeEnum(): Array<SelectOption<string, number>> {
  return [
    { label: '男', value: 1 },
    { label: '女', value: 2 },
  ]
}

export function toSexTypeEnum(val: string | number): SelectOption<string, number> {
  return dictSexTypeEnum().find(e => e.value == val) as SelectOption<string, number>
}