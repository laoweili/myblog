<script setup>
import { onMounted, reactive } from "vue"
import { postLists } from "@/api/index"
const postData = []
const obj = reactive(postData)
const getPostLists = onMounted(
    postLists().then(({ data }) => {
        // console.log(data.data);
        obj.postData = data.data
        console.log(obj)
    })
)
</script>

<template>
    <div>
        <template v-if="obj">
            <el-table :data="obj.postData" stripe style="width: 100%">
                <el-table-column prop="date" label="Date" width="180" />
                <el-table-column prop="postName" label="PostName" width="100" />
                <el-table-column prop="postMsg" label="PostMsg" width="180" />
                <el-table-column prop="postStar" label="PostStar" width="180" />
            </el-table>
        </template>
    </div>
</template>

<style scoped></style>
