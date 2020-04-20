<template>
    <el-form :model="loginForm" ref="loginForm" size="mini">
        <el-form-item label="Email" prop="email" :rules="validateRules['email']">
            <el-input v-model="loginForm.email" v-on:input="onEmailInput"/>
        </el-form-item>
        <el-form-item label="Password">
            <el-input v-model="loginForm.password"/>
        </el-form-item>
        <el-form-item>
            <el-button @click="submitForm('submitForm')" :disabled="!loginForm['isEmailValid']" type="primary">Login</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'users-login',
        data() {
            return {
                validateRules: {
                    email: [
                        { required: true, message: 'email is required' },
                        { type: 'email', message: 'email field is incorrect format' }
                    ]
                },
                loginForm: {
                    email: '',
                    password: '',
                    isEmailValid: false
                }
            }
        },
        methods: {
            onEmailInput() {
                return this.$refs['loginForm'].validate(valid => this.loginForm['isEmailValid'] = valid)
            },
            submitForm() {
                console.log(this.loginForm['email'])
            }
        }
    }
</script>

<style scoped>
    .el-form {
        margin: 0 auto;
        padding: 10px;
        width: 400px;
        border-radius: 10px;
        box-shadow: 0 -5px 25px 0 rgba(0, 0, 0, 0.1), 0 5px 25px 0 rgba(0, 0, 0, 0.1);background-color: #ffffff;
    }
    .el-form-item {
        margin: 10px auto;
    }
</style>