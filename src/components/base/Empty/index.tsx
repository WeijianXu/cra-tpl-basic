import React, { memo, ReactElement } from 'react';

import styles from  './index.module.scss';

interface Props {
  desc?: React.ReactNode;
  componentName?: string;
  id?: string;
}

export default memo(function Empty({
  desc,
  componentName,
  id,
}: Props): ReactElement {
  let de = desc;
  // 表格定制空数据文本
  if (componentName === 'Table') {
    de = '没有符合条件的搜索结果，请尝试其他搜索条件';
  }

  return (
    <div id={id} className={styles.noResultWrap}>
      <img src="/imgs/search/no-result.png" alt="no result" />
      <span>{de || '暂无数据'}</span>
    </div>
  );
});
