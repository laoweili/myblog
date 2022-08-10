import Mock from "mockjs"
const banners = [
    'https://s1.ax1x.com/2020/05/14/YDhagx.jpg',
    'https://s1.ax1x.com/2020/05/14/YDhU81.jpg',
    'https://s1.ax1x.com/2020/05/14/YDhBDO.jpg',
    'https://s1.ax1x.com/2020/05/14/YDhoVg.jpg',
    'https://s1.ax1x.com/2020/05/14/YD4FR1.jpg'
]
const baseContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'
let postData = Mock.mock({
    "data|50": [ //生成6条数据 数组
        {
            "postId|+1": 1,//生成商品id，自增1
            "postMsg": "@csentence(10)", //生成商品信息，长度为10个汉字
            "postName": "@cname",//生成商品名 ， 都是中国人的名字
            "postStar|1-5": "★", //随机生成1-5个星星
            "date": "@now",//1982-07-20,
            "supports|2": [ //每个商品中再随机生成2个food
                {
                    "name": "@cname", //food的名字
                    "pic": "@Image('100x40','#c33', '#ffffff','小可爱')",//生成随机图片，大小/背景色/字体颜色/文字信息
                    "sponsor|1-100":'￥'+ 20,//生成1-100的随机数
                }
            ]
        }
    ]
})
import postList from "./homeList.json"
Mock.mock(/postLists/, 'get', () => { //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
    return postData
})
Mock.mock(/login/, 'post', (req) => { //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
    const {username,password}=JSON.parse(req.body)
    if(username=='admin'){
        if(password=='13328383933'){
            return {code:1,msg:'登录成功'}
        }else{
            return {code:2,msg:'密码错误'}
        }
        
    }else{
        return {code:0,msg:'账号不存在'}
    }  
})
// 获取主页列表数据
Mock.mock(/homeLists/, 'post', (req) => { 
    let data=postList.map((item)=>{
        return item
    })
    data.forEach((item)=>{
        item.isTop = item.isTop =="true"?true:false
    })
    // 置顶
    data.sort((a,b)=>{
        return b.isTop-a.isTop
    })
    return data
})