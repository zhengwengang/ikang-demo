import { wxp } from './wxp.js'
const commonHeader = {

}

const METHODS = ['OPTIONS', 'GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'TRACE', 'CONNECT', '']

export const $http = (config) => {
  let { url = '', data = {}, header = {}, method } = config
  if (!METHODS.includes(method)) {
    method = 'GET'
  }
  return wxp.request({
    url, data, method, header: Object.assign({}, commonHeader, header)
  })
}

METHODS.forEach(method => {
  const methodName = method.toLocaleLowerCase()
  $http[methodName] = (config) => {
    const newConfig = Object.assign({}, config, { method })
    return $http(newConfig)
  }
})

$http.get({
  url: 'https://developers.weixin.qq.com/community/ngi/report?scene=miniprogram_doc&referrer=https%3A%2F%2Fdevelopers.weixin.qq.com&docreferrer=https%3A%2F%2Fdevelopers.weixin.qq.com%2Fdoc%2Fsearch.html%3Fquery%3Dhttp%26doc_type%3Dminiprogram%26jumpbackUrl%3D%252Fdoc%252F',

}).then(res => {
  // console.log(res)
}).catch(err => {
  // console.log(err)
})

