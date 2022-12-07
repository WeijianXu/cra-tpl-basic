import React, { memo } from 'react';
import { Alert } from 'antd';
import { GlobU } from 'utils';
import { LayoutWrap } from 'components';

import styles from './index.module.scss';

// interface Props {}

export default memo(function BrowserAlert(): React.ReactElement {
  const alertDesc = GlobU.getBrowerAlert();
  if (!alertDesc) {
    return <></>;
  }
  return (
    <LayoutWrap className={styles.alert}>
      <Alert
        message="浏览器版本提醒"
        description={alertDesc}
        type="warning"
        showIcon
        closable
      />
    </LayoutWrap>
  );
});
