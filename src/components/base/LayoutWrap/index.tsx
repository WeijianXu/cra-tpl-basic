import React, { memo, ReactElement,useContext } from 'react';
import BaseBread from '../BaseBread';
import GlobalContext from 'model/context';
import './index.scss';

interface Props extends React.ComponentProps<any> {
  /** 布局包装器背景颜色 */
  bg?: string;
  /** 布局主体内容区背景颜色 */
  contentBg?: string;

  contentStyle?: React.CSSProperties;

  contentClass?: string;

  // 面包屑
  bread?: boolean;
  elderMode?: boolean;
}

export default memo(function LayoutWrap({
  children,
  bg,
  className = '',
  style,
  contentBg,
  contentStyle,
  contentClass = '',
  bread = false,
  elderMode=false,
  ...rest
}: Props): ReactElement {
  const elder = useContext(GlobalContext).elderMode;
  const wrapSty = {
    backgroundColor: bg,
    ...style,
  };
  const contentSty = {
    backgroundColor: contentBg,
    ...contentStyle,
  };
  return (
    <div className={`layoutWrap ${className}`} style={wrapSty} {...rest}>
      <div className={`layoutContentWrap ${contentClass}`} style={contentSty}>
        {bread && <BaseBread elderMode={ elderMode || elder }/>}
        {children}
      </div>
    </div>
  );
});
