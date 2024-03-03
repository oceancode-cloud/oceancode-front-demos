import { ProjectOption } from "@/models";

export function listUserProjectOption(): Promise<Array<ProjectOption>> {
  return Promise.resolve([
    {
      label: '数据分析',
      value: 1
    },
    {
      label: '前端Demo',
      value: 2
    },
    {
      label: '后端Demo',
      value: 3
    }
  ]);
}