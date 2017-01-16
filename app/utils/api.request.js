import request from './request';
import config from '../config';

export default function apiRequest(url, options) {
  return request(`${config.API_URL}${url}`, options);
}
