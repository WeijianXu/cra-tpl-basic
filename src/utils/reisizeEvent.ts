/**
 * 全局管理 window.onresize 事件，避免一个页面多次注册，导致失效
 */
class ResizeEvent {
  events: { [index: string]: () => void } = {};

  _resize: () => void = () => {};

  resizeTimer?: NodeJS.Timeout;

  constructor() {
    this.init();
  }

  init() {
    this._resize = () => {
      // clearTimeout(this.resizeTimer);
      // 避免频繁出发resize事件
      this.resizeTimer = setTimeout(() => {
        Object.keys(this.events).forEach((k) => {
          try {
            if (typeof this.events[k] === "function") {
              this.events[k]();
            }
          } catch (e) {
            // 出现这种错误时，很多是因为没有在页面或组件卸载时，使用 remove 取消订阅
            console.warn("window.onresize error. ", k, this.events[k]);
            // 主动取消订阅
            this.remove(k);
          }
        });
      }, 200);
    };
    // window.onresize = () => {
    window.addEventListener("resize", this._resize);
  }

  subscribe(name: string, callback: () => void) {
    this.events[name] = callback;
  }

  remove(name: string) {
    delete this.events[name];
  }

  /**
   * 销毁 resize 事件
   */
  destroy() {
    window.removeEventListener("resize", this._resize);
  }
}

export default new ResizeEvent();
