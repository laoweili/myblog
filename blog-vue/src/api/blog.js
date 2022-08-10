import { blogRequest } from "./blogRequest";
// const qs = require ('qs')
import Qs from "qs"
// 获取后台管理数据
export function getAdminList(query,data){
    return blogRequest({
        url:'/getPostLists?keyWord='+query,
        method:'post',
        data:Qs.stringify(data)
    })
}
// 添加
export function addAdminList(data){
    return blogRequest({
        url:'/addPostLists',
        method:'post',
        data:Qs.stringify(data)
    })
}
// 删除
export function delAdminList(param){
    return blogRequest({
        url:'/delPostLists?id='+param,
        method:'get',
    })
}
// 获取单条数据
export function getSingleList(id){
    return blogRequest({
        url:'/getSingleList?id='+id,
        method:'get',
    })
}

// 修改单条数据
export function updateList(id,data){
    return blogRequest({
        url:'/updateList?id='+id,
        method:'post',
        data:Qs.stringify(data)
    })
}