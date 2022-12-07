import axios, { AxiosRequestConfig } from 'axios';
import { message } from 'antd';
import getEnv from 'services/apiEnv';
import get from 'lodash/get';
import UriU from './uriUtils';

axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => {
    const result: def.IBaseRes = response.data;

    // 402 未登录，不提示
    if (result.code !== '200' && result.code !== '402') {
      message.error(result.msg);
    }
    return response;
  },
  (error) => {
    // 一般错误处理
    if (
      get(error, 'response.status') &&
      get(error, 'response.status') !== 200
    ) {
      message.error(
        get(
          error,
          'response.data.msg',
          '出了点小差，请稍后刷新试试，或联系管理员'
        )
      );
    } else {
      message.error('网络异常，请稍后刷新试试，或联系管理员');
    }
    return Promise.reject(error);
  }
);

export default function request({
  method = 'GET',
  params,
  url,
  ...options
}: AxiosRequestConfig): Promise<any> {
  const httpDefault: AxiosRequestConfig = Object.assign(
    {
      method,
      url,
      params: method === 'get' || method === 'GET' ? params : null,
      data: method === 'post' || method === 'POST' ? params : null,
      headers: {
        'Content-Type': 'application/json',
      },
    },
    options || {},
    {
      // 不能被改变的配置项
      withCredentials: true,
    }
  );
  // 判断是否是绝对路径，绝对路径直接使用，不拼接
  const flag = url ? UriU.checkAbsUrl(url) : false;
  if (!flag) {
    httpDefault.url = `${getEnv().api || ''}${url}`;
  }
  return new Promise((resolve, reject) => {
    axios(httpDefault)
      .then((res) => {
        resolve(res.data);
      })
      .catch((errRes) => {
        /* if (errRes && errRes.response && errRes.response.status === 401) {
          // 无权限访问
          const { login, api } = getEnv();
          const clientName = 'digital-datashow';
          const originalUrl = UriU.encodeSearch(window.location);
          window.location.href = `${login}/login?service=http://${window.location.hostname + api}/callback?client_name=${clientName}%26callbackUrl%3d${originalUrl}`;
        } */
        reject(errRes);
      });
  });
}
