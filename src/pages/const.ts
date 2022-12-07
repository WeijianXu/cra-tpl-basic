import { ListItemProps } from 'components/display/List/type';

export const searchTypeList: ListItemProps[] = [
  {
    type: 'action',
    name: '监管记录查询',
  },
  {
    type: 'item',
    name: '监管事项查询',
  },
];

export const ActionTypeDesc: def.IActionType = {
  0: '检查',
  1: '处罚',
  2: '强制',
  3: '其他',
};

export function getActionTypes(): def.IListItem[] {
  const list: def.IListItem[] = Object.keys(ActionTypeDesc).map((key) => ({
    name: ActionTypeDesc[key],
    value: key,
  }));
  list.unshift({ name: '全部', value: '' });
  return list;
}

export const ActionTypeFullDesc: def.IActionType = {
  0: '行政检查',
  1: '行政处罚',
  2: '行政强制',
  3: '其他',
};
