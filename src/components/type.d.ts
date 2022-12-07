declare namespace comp {
  export type Theme = 'default' | 'primary' | 'intlSubBlue';

  export type Size = 'lg' | 'md' | 'sm';

  export type IconTextPosition =
    | 'topIcon'
    | 'bottomIcon'
    | 'leftIcon'
    | 'rightIcon';

  export type IconTextType = 'default' | 'link' | 'button';

  // display/News
  export interface NewsData {
    id?: string;
    title?: string;
    time?: string;
    content?: string;
  }

  export type NewsType = 'default' | 'dot' | 'pagelist';

  export interface Item {
    name?: any;
    value?: any;
    type?: any;
  }

  // DetailTable Cols
  export interface DetailTableCols extends Item {
    innerHTML?: boolean; // 是否使用 dangerouslySetInnerHTML 插入
  }
}
