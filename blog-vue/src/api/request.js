import axios from 'axios'
import Config from "./config"
export function request(config) {
    // 创建axios实例
    const instance = axios.create({
        baseURL: Config.baseUrl,
    })
    // 发送网络请求
    return instance(config)
}