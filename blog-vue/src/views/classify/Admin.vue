<template>
    <div class="myBlogData">
        <div class="filter-container">
            <el-input
                placeholder="请输入关键词"
                style="width: 200px"
                class="filter-item"
                v-model="search.keyWord"
            />
            <el-button
                class="filter-item"
                type="primary"
                icon="Search"
                @click="handleSearch"
                :disabled="!obj.tableData"
            >
                搜索
            </el-button>
            <el-button
                class="filter-item"
                style="margin-left: 10px"
                type="primary"
                icon="Plus"
                @click="handleAdd"
                :disabled="!obj.tableData"
            >
                新增
            </el-button>
            <el-button
                class="filter-item"
                type="primary"
                icon="Refresh"
                @click="handleRefresh"
                :disabled="!obj.tableData"
            >
            重置
            </el-button>
        </div>
        <el-table :data="obj.tableData" border style="width: 100%" class="table">
            <template v-slot:empty>
                <p class="emptyText">请在本地环境下开启node服务器(位于mock目录下的blog-server)再使用</p>
            </template>
            <el-table-column prop="id" label="ID" width="80" align="center" fixed="left" />
            <el-table-column prop="title" label="标题" width="205" header-align="center" />
            <el-table-column prop="content" label="内容" width="250" header-align="center" />
            <el-table-column prop="banner" label="图片" width="220" align="center">
                <template #default="{ row }">
                    <img :src="row.banner" alt="" style="width: 200px; height: 100px" />
                </template>
            </el-table-column>
            <el-table-column prop="author" label="作者" width="100" align="center" />
            <el-table-column prop="pubTime" label="发布时间" width="100" align="center" />
            <el-table-column prop="viewsCount" label="热度" width="100" align="center" />
            <el-table-column prop="commentsCount" label="评论数量" width="90" align="center" />
            <el-table-column prop="isTop" label="置顶" width="90" align="center" />
            <el-table-column label="操作" width="150" key="slot" align="center" fixed="right">
                <template #default="{ row }">
                    <el-button type="primary" :icon="Edit" circle @click="handleEdit(row.id)" />
                    <el-button type="danger" :icon="Delete" circle @click="handleDel(row.id)" />
                </template>
            </el-table-column>
        </el-table>
        <!-- 新增或修改 对话框 -->
        <el-dialog :title="title" v-model="dialogFormVisible" ref="formRef">
            <el-form :model="form" label-width="120px">
                <el-form-item label="标题" required>
                    <el-input v-model="form.formData.title" />
                </el-form-item>
                <el-form-item label="内容" required>
                    <el-input
                        v-model="form.formData.content"
                        :rows="4"
                        type="textarea"
                        placeholder="请输入内容"
                    />
                </el-form-item>
                <el-form-item label="作者">
                    <el-input v-model="form.formData.author" />
                </el-form-item>
                <el-form-item label="热度">
                    <el-input v-model="form.formData.isHot" />
                </el-form-item>
                <el-form-item label="评论数量">
                    <el-input v-model="form.formData.commentsCount" />
                </el-form-item>
                <el-form-item label="图片链接">
                    <el-input v-model="form.formData.banner" />
                </el-form-item>
                <el-form-item label="发表时间">
                    <el-col :span="11">
                        <el-date-picker
                            v-model="form.formData.pubTime"
                            type="date"
                            value-format="YYYY-MM-DD"
                            placeholder="选择时间"
                            style="width: 100%"
                        />
                    </el-col>
                </el-form-item>
                <el-form-item label="是否置顶">
                    <el-radio-group v-model="form.formData.isTop">
                        <el-radio label="是" />
                        <el-radio label="否" />
                    </el-radio-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click.prevent="onSubmit">确认</el-button>
                    <el-button @click="dialogFormVisible = false">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
        <!-- 删除确认 对话框 -->
        <el-dialog v-model="delDialogVisible" title="提示" width="30%">
            <span>确定要删除id为{{ targetId }}的数据吗</span>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="delDialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="Del">确定</el-button>
                </span>
            </template>
        </el-dialog>
        <div class="demo-pagination-block" v-if="obj.tableData">
            <el-pagination
                v-model:currentPage="currentPage"
                v-model:page-size="pageSize"
                :page-sizes="[5, 6, 7]"
                :disabled="disabled"
                background
                layout="total, sizes, prev, pager, next,jumper"
                :total="total"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
            />
        </div>
    </div>
</template>

<script setup>
import { Delete, Edit, Refresh } from "@element-plus/icons-vue"
import { onMounted, reactive, ref} from "vue"
import { $message,getHomeList } from "@/api/index"
import {
    getAdminList,
    addAdminList,
    delAdminList,
    getSingleList,
    updateList,
} from "@/api/blog"
const currentPage = ref(1)
const pageSize = ref(5)
const disabled = ref(false)
let total = ref(0)
let title = ref("")
let targetId = ref("")
let dialogFormVisible = ref(false)
let delDialogVisible = ref(false)
// 搜索条件 关键字
let search = reactive({
    keyWord: "",
})
let paginationParams = reactive({
    currentPage: 1,
    pageSize: 5,
})
let tableData = []
let obj = reactive(tableData)
// 表单数据对象
let formData = {
    id: undefined,
    isTop: undefined,
    isHot: undefined,
    author: undefined,
    banner: undefined,
    pubTime: undefined,
    title: undefined,
    summary: undefined,
    content: undefined,
    viewsCount: undefined,
    commentsCount: undefined,
}
let form = reactive({
    formData,
})
// 获取列表数据
function getPostList(){
    getAdminList(search.keyWord,paginationParams)
        .then(res => {
            obj.tableData = res.data.row
            total.value = res.data.total
            console.log(11);
        })
}
const getList = onMounted(
    getAdminList(search.keyWord,paginationParams)
        .then(res => {
            obj.tableData = res.data.row
            total.value = res.data.total
        })
        .catch(err => {
            $message("node服务器异常", "error")
        })
)
// 提交添加或修改
const onSubmit = () => {
    form.formData.isTop = form.formData.isTop == "是" ? true : false
    if (form.formData.id) {
        // 修改
        updateList(targetId.value, form.formData).then(res => {
            $message(res.msg, "success")
        })
        
    } else {
        //添加
        addAdminList(form.formData).then(res => {
            $message(res.msg, "success")
        })
    }
}
// 搜索
const handleSearch = () => {
    getPostList()
}
// 重置
const handleRefresh = () => {
    (search.keyWord = "")
    paginationParams.pageSize = 5
    paginationParams.currentPage = 1
    getPostList()
}
// 添加
const handleAdd = () => {
    title.value = "新增帖子"
    dialogFormVisible.value = true
}
// 修改
const handleEdit = id => {
    targetId.value = id
    title.value = "修改帖子"
    getSingleList(id).then(res => {
        form.formData = res.data.data
        dialogFormVisible.value = true
    })
}
// 删除对话框
const handleDel = id => {
    delDialogVisible.value = true
    targetId.value = id
}
// 确认删除
const Del = id => {
    delDialogVisible.value = false
    delAdminList(targetId.value).then(res => {
        $message(res.msg, "success")
        getPostList()
    })
}
// 更改每页展示条数
const handleSizeChange = val => {
    paginationParams.pageSize = val
    getPostList()
}
// 分页查询
const handleCurrentChange = val => {
    paginationParams.currentPage = val
    console.log(paginationParams)
    getPostList()
}
</script>
<style scope>
.myBlogData {
    margin-left: 15px;
}
.filter-container {
    text-align: start;
    margin: 15px 0;
}
.filter-item {
    margin-right: 5px;
}
.el-table__cell {
    height: 40px !important;
    padding: 5px 0 !important;
}
.demo-pagination-block {
    margin-top: 10px;
}
.el-form-item__label {
    box-sizing: content-box;
}
.el-table th {
    display: table-cell !important;
}
.el-scrollbar__view {
    display: block !important;
}
</style>
