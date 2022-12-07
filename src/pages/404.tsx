import React, { memo, } from 'react';
import { Link } from 'react-router-dom';
import { Empty } from 'components';

export default memo(function NotFound() {
  return (
    <Empty
      id="not-found-page"
      desc={
        <>
          当前页面不存在，或无权限访问！
          <Link to="/" style={{ textAlign: 'center' }}>
            返回首页
          </Link>
        </>
      }
    />
  );
});
