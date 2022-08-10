const exp = require("express")
const fs = require("fs")
const app = exp()
// 对post请求数据进行解析，否则获取不到
app.use(exp.urlencoded({extended: true,}))
// 获取列表  搜索过滤也调用该接口
app.post("/getPostLists", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    fs.readFile("./homeList.json", (err, data) => {
        if (!err) {
            data = JSON.parse(data)
            const {keyWord}= req.query
            const { currentPage, pageSize} = req.body
             // 过滤关键字
             data = data
             .filter(item => {
                 if (item.content) {
                     if (item.content.includes(keyWord)) {
                         return item
                     }
                 } else {
                     return item
                 }
             })
             .filter(item => {
                 if (item.title) {
                     if (item.title.includes(keyWord)) return item
                 } else {
                     return item
                 }
             })
            data.forEach(item => {
                item.isTop = item.isTop ? "是" : "否"
            })
            let total = data.length
            data = data.splice((currentPage - 1) * pageSize, pageSize)
            res.send({ row: data, total })
        }
    })
})
// 添加帖子
app.post("/addPostLists", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    let obj = req.body
    fs.readFile("./homeList.json", (err, data) => {
        if (!err) {
            data = JSON.parse(data)
            obj.id = data[data.length - 1].id + 1
            if (obj) data.push(obj)
            fs.writeFile("./homeList.json", JSON.stringify(data), err => {
                if (!err) {
                    return
                }
            })
            res.send({ code: 200, msg: "添加成功" })
        }
    })
})
// 修改帖子
app.post("/updateList", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    fs.readFile("./homeList.json", (err, data) => {
        if (!err) {
            data = JSON.parse(data)
            for (let i = 0; i < data.length; i++) {
                if (data[i].id == req.query.id) {
                    data[i] = req.body
                }
            }
            fs.writeFile("./homeList.json", JSON.stringify(data), err => {
                if (!err) {
                    return
                }
            })
            res.send({ code: 200, msg: "修改成功" })
        }
    })
})
// 删除帖子
app.get("/delPostLists", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    fs.readFile("./homeList.json", (err, data) => {
        if (!err) {
            data = JSON.parse(data)
            data = data.filter(item => {
                return item.id != req.query.id
            })
            fs.writeFile("./homeList.json", JSON.stringify(data), err => {
                if (!err) {
                    return
                }
            })
            res.send({ code: 200, msg: "删除成功" })
        }
    })
})
// 查找单个帖子数据
app.get("/getSingleList", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    fs.readFile("./homeList.json", (err, data) => {
        if (!err) {
            data = JSON.parse(data)
            let obj
            data.forEach(item => {
                item.isTop = item.isTop ? "是" : "否"
                if (item.id == req.query.id) obj = item
            })
            res.send({ code: 200, data: obj })
        }
    })
})


app.listen(5000, () => {
    console.log("5000端口监听中")
})
