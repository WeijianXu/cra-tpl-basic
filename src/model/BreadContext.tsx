import React from 'react';
import update from 'immutability-helper';

// 默认全局状态
const breadState: model.BreadStateProps = {
  // 面包屑状态
  breads: [
    {
      name: '首页',
      path: '/',
    },
  ],
};

const BreadContext = React.createContext(breadState);

export const BreadCtxConsumer = BreadContext.Consumer;

export class BreadCtxProvider extends React.Component<
  any,
  model.BreadStateProps
> {
  /**
   * updateBread 更新面包屑状态
   * 1. 一般不需要更新第一级，第一级默认是首页路径
   * 2. 默认从第二级开始更新
   * 3. 当前更新的级之后的配置，默认删除掉
   */
  public updateBread = (
    bread: def.IRoute,
    level: number = 1,
    deleteTail: boolean = true
  ) => {
    const currLen = this.state.breads?.length || 0;
    this.setState({
      breads: update(this.state.breads, {
        // deleteTail 为 true 时，去掉 level 值之后的所有配置，否则，增加该配置
        $splice: [
          [
            level,
            deleteTail && currLen - level > 0 ? currLen - level : 0,
            bread,
          ],
        ],
      }),
    });
  };

  state = {
    ...breadState,
    updateBread: this.updateBread,
  };

  render() {
    return (
      <BreadContext.Provider value={this.state}>
        {this.props.children}
      </BreadContext.Provider>
    );
  }
}

export default BreadContext;
