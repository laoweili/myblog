const exp=require('express')
const fs=require('fs')
const app=exp()
// 获取列表
app.get('/getPostLists',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    fs.readFile('../assets/blogData/homeList.json',(err,data)=>{
        if(!err){
            data=JSON.parse(data)
            data.forEach((item)=>{
                item.isTop=item.isTop?'是':'否'
            })
            const {currentPage,pageSize}=JSON.parse(req.query.paginationParams)
            let total=data.length
            data=data.splice((currentPage-1)*pageSize,pageSize)
            res.send({row:data,total})
        }
    })
})
// 添加帖子
app.post('/addPostLists',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    let obj=JSON.parse(req.query.data)
    fs.readFile('../homeList.json',(err,data)=>{
        if(!err){
            data=JSON.parse(data)
            obj.id=data[data.length-1].id+1
            if(obj) data.push(obj)
            fs.writeFile('../homeList.json',JSON.stringify(data),err=>{
                if(!err){
                    return
                }
            })
            res.send({code:200,msg:"添加成功"})
        }
    })
})
// 删除帖子
app.get('/delPostLists',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    fs.readFile('../homeList.json',(err,data)=>{
        if(!err){
            data=JSON.parse(data)
            data=data.filter((item)=>{
                return item.id!=req.query.id
            })
            fs.writeFile('../homeList.json',JSON.stringify(data),err=>{
                if(!err){
                    return
                }
            })
            res.send({code:200,msg:"删除成功"})
        }
    })
})
// 获取单个帖子数据
app.get('/getSingleList',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    fs.readFile('../homeList.json',(err,data)=>{
        if(!err){
            data=JSON.parse(data)
            let obj;
            data.forEach((item)=>{
                if(item.id==req.query.id) obj=item
            })
            res.send({code:200,data:obj})
        }
    })
})
// 修改帖子
app.get('/updateList',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    fs.readFile('../homeList.json',(err,data)=>{
        if(!err){
            data=JSON.parse(data)
            for(let i=0;i<data.length;i++){
                if(data[i].id==req.query.id){
                    data[i]=JSON.parse(req.query.obj)
                }
            }
            fs.writeFile('../homeList.json',JSON.stringify(data),err=>{
                if(!err){
                    return
                }
            })
            res.send({code:200,msg:'修改成功'})
        }
    })
})
// 搜索过滤
app.get('/filter',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    fs.readFile('../homeList.json',(err,data)=>{
        if(!err){
            data=JSON.parse(data)
            const {keyWord,publishTime,isTop}=JSON.parse(req.query.param)
            data=data.filter((item)=>{
                if(item.content.includes(keyWord)|item.title.includes(keyWord)){
                    return item
                }
            })
            data=data.filter((item)=>{
                return item.isTop==isTop
            })
            res.send(data)
        }
    })
})

app.listen(5000,()=>{
    console.log('5000端口监听中');
})