import {createAPI, createFormAPI} from '@/utils/request'
export const list = data => createAPI('/company', 'get', data)
// eslint-disable-next-line no-template-curly-in-string
export const detail = data => createAPI('/company/${data.id}', 'get', data)
