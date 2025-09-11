export const flowTypes = ['approval', 'detail'];

export const defaultOptionsMap = {
  consent: '通过',
  back: '退回',
  reject: '驳回',
  transfer: '转办',
  assist: '会签',
  hangUp: '挂起',
  cancellation: '作废'
};

export const defaultModeMap = {
  ...defaultOptionsMap,
  revocation: '撤销'
};

export const defaultNodeTypeMap = {
  0: { name: '正在处理', type: 'gray', componentName: 'Weichuli' },
  1: { name: '已办', type: 'primary', componentName: 'Yiban' },
  2: { name: '退回', type: 'danger', componentName: 'Butongyi' },
  3: { name: '撤销', type: 'gray', componentName: 'Chexiao' },
  4: { name: '驳回', type: 'danger', componentName: 'Bohui' },
  5: { name: '挂起', type: 'warning', componentName: 'Guaqi' },
  6: { name: '作废', type: 'danger', componentName: 'Zuofei' },
  7: { name: '激活', type: 'primary', componentName: 'Jihuo' },
  8: { name: '发起转办', type: 'success', componentName: 'Zhuanban' },
  9: { name: '转办人', type: 'success', componentName: 'Zhuanban' },
  10: { name: '发起协办', type: 'primary', componentName: 'Xieban' },
  11: { name: '协办人', type: 'primary', componentName: 'Xieban' }
};

export const defaultComponentTypeMap = {
  1: 'Success',
  2: 'Minus',
  4: 'Minus',
  6: 'Close'
};
