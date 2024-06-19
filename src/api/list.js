import request from '@/utils/request'

//  导入接口
export function achievementImport (data) {
  return request({
    url: '/api/v1/excel/achievementImport',
    method: 'POST',
    data,
  })
}
//列表接口
export function getInfoList (data, type) {
  return request({
    url: `/api/v1/${type}/getInfoList`,
    method: 'POST',
    data,
  })
}


