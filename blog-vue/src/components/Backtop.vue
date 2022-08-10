<template>
    <div class="el-backtop" style="right: 50px; bottom: 100px" @click="handleBacktop">
        <i class="el-icon el-backtop__icon">
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M512 320 192 704h639.936z"></path>
            </svg>
        </i>
    </div>
</template>

<script setup>
const handleBacktop=()=>{
    backtop.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
}
</script>
<style></style>
