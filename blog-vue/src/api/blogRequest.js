import axios from 'axios'
  // 创建axios实例
  const instance = axios.create({
    baseURL: "http://localhost:5000",
})
export function blogRequest(config) {
    // 发送网络请求
    return instance(config)
}
