import { UriU } from 'utils';

export interface ApiUrlProps {
  [index: string]: def.IApiProps;
  localhost: def.IApiProps;
}

const APIURL: ApiUrlProps = {
  localhost: {
    api: '/api/v1',
    login: '/api/v1/user/legalLogin',
  },
};

export default function getEnv(): def.IApiProps {
  return UriU.getEnv(APIURL);
}
