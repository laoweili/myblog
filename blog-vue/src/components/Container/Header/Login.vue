<template>
    <el-dialog v-model="$store.state.loginDialog" title="管理员登录" width="300px" center>
        <p class="login">
            <el-tabs v-model="activeName">
                <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="100px"
                    class="demo-ruleForm"
                >
                    <el-form-item label="账号" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input
                            type="password"
                            v-model="ruleForm.pass"
                            auto-complete="off"
                        ></el-input>
                    </el-form-item>
                </el-form>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-tabs>
        </p>
    </el-dialog>
</template>

<script>
import { $message, login } from "@/api/index.js"
import {useStore } from "vuex"
const store=useStore()
export default {
    data() {
        var validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"))
            } else {
                if (this.ruleForm.checkPass !== "") {
                    this.$refs.ruleForm.validateField("checkPass")
                }
                callback()
            }
        }
        return {
            activeName: "first",
            ruleForm: {
                name: "",
                pass: "",
                checkPass: "",
            },
            rules: {
                name: [
                    { required: true, message: "请输入您的名称", trigger: "blur" },
                    { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" },
                ],
                pass: [{ required: true, validator: validatePass, trigger: "blur" }],
            },
        }
    },
    methods: {
        //重置表单
        resetForm(formName) {
            this.$refs[formName].resetFields()
        },
        //提交表单
        submitForm(formName) {
            login({
                username: this.ruleForm.name,
                password: this.ruleForm.pass,
            })
                .then(res => {
                    console.log(res.data)
                    const type = res.data.code==1 ? "success" : "warning"
                    if( res.data.code==1){
                        this.$store.state.isLogin=true
                        this.$store.state.loginDialog=false
                        }
                    $message(res.data.msg, type)
                })
                .catch(err => {
                    $message("后端接口错误", "error")
                })
        },
    },
}
</script>

<style scope>
.el-dialog__header {
    margin-right: -24px !important;
}
.el-tabsitem {
    text-align: center;
}
.el-form-item__content .el-button--primary {
    margin-left: 90px !important;
}
.el-form-item__label {
    width: 60px !important;
}
.el-dialog--center .el-dialog__body {
    text-align: initial;
    padding: 15px calc(var(--el-dialog-padding-primary) + 9px) 0px !important;
}
</style>
