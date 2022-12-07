export default {
  /**
   * 接收window.location,并返回一条对search两次加密后的路径，
   * 解决登录状态失效重新登录后，参数丢失的问题
   * @param {Object} location window.location
   */
  encodeSearch(location = window.location) {
    return (
      location.origin +
      location.pathname +
      encodeURIComponent(encodeURIComponent(location.search))
    );
  },

  /**
   * 根据当前前端协议、域名或IP地址、端口，确定唯一的配置
   * 1. 优先匹配全路径，如 http://jgwork.zjzwfw.gov.cn:18888
   * 2. 接着匹配 http://jgwork.zjzwfw.gov.cn
   * 3. 然后是 jgwork.zjzwfw.gov.cn:18888
   * 3. 最后在匹配 jgwork.zjzwfw.gov.cn
   * 4. 未匹配到，返回空对象 {}
   * @param {Object} API_URL api等信息配置对象
   */
  getEnv(API_URL: { [index: string]: def.IApiProps }): def.IApiProps {
    const { host, hostname, protocol, origin } = window.location;
    return (
      API_URL[origin] ||
      API_URL[protocol + hostname] ||
      API_URL[host] ||
      API_URL[hostname] ||
      {}
    );
  },

  /**
   * 根据给定的路径，获取全路径：
   * 1. 包含 http/https，为绝对路径，直接返回；
   * 2. 不包含，则拼接当前协议+域名+ url值返回
   * @param {String} url 路径
   */
  getWholeUrl(url: string = '') {
    return this.checkAbsUrl(url) ? url : window.location.origin + url;
  },

  /**
   * 判断当前路径是绝对路径还是相对路径
   * @param url 路径
   */
  checkAbsUrl(url: string = ''): boolean {
    return /^(http(|s):)?\/\//.test(url);
  },
  /*
   * 删除meta标签调用
   */
  deleteMeta() {
    document.getElementById('ColumnName')?.remove();
    document.getElementById('ColumnType')?.remove();
    document.getElementById('ArticleTitle')?.remove();
    document.getElementById('PubDate')?.remove();
    document.getElementById('ColumnDescription')?.remove();
    document.getElementById('ColumnKeywords')?.remove();
    document.getElementById('ContentSource')?.remove();
  },
  /*
   * 添加meta标签方法
   */
  addMeta(key = '', content = '') {
    let meta = document.createElement('meta');
    meta.name = key;
    meta.id = key;
    meta.content = content;
    let a: any = document.getElementById('SiteIDCode');
    a.parentNode.insertBefore(meta, a.nextElementSibling);
  },
};
