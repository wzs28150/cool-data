import request from '@/utils/request';

export async function getLeftBarData(params) {
  return request({
      url: '/bar/bar1',
      method: 'get',
      params,
  });
}

export async function getLeftBarData2(params) {
  return request({
      url: '/bar/bar2',
      method: 'get',
      params,
  });
}