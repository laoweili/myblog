import { ElMessage,ElMessageBox } from 'element-plus'
import { request } from "./request";
// 封装的弹框提示
export function $message(message, type){
    ElMessage({
        message,
        type
    })
}
// 登录
export function login(data){
    return request({
        url:'/login',
        method:'post',
        data,
    })
}
// 获取mock模拟数据
export function postLists(){
    return request({
        url:'/postLists',
        method:'get',
    })
}
// 获取首页帖子列表
export function getHomeList(){
    return request({
        url:'/homeLists',
        method:'post',
    })
}