<template>
    <div id="login">
        <div class="login-wrap">
            <ul class="menu-tab">
                <li :class="{'current': isActive==index}" 
                v-for="(item,index) in menuTab" 
                :key=index @click="toggleMenu(index)">{{item.txt}}</li>
            </ul>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="login-form" size="medium">
                <label for="">邮箱</label>
                <el-form-item prop="username">
                    <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
                </el-form-item>
                <label for="">密码</label>
                <el-form-item prop="password">
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off" maxlength=18></el-input>
                </el-form-item>
                <label for="">验证码</label>
                <el-row :gutter="20">
                    <el-col :span="15"><el-input v-model.number="ruleForm.code" maxlength=6></el-input></el-col>
                    <el-col :span="9"><el-button class="block" type="primary">获取验证码</el-button></el-col>
                </el-row>
                <el-form-item prop="code">
                    
                </el-form-item>
                <el-form-item>
                    <el-button class="block" type="danger" @click="submitForm('ruleForm')">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    name: 'login',
    data(){
        var username = (rule, value, callback) => {
            let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
            if (value === '') {
                callback(new Error('请输入邮箱'));
            } else if(!reg.test(value)) {
                callback(new Error('邮箱格式不正确'))
            } else {
                callback();
            }
        };
        var password = (rule, value, callback) => {
            let reg =/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z\\W]{6,18}$/
            if (value === '') {
                callback(new Error('请输入密码'));
            }else if(!reg.test(value)){
                callback(new Error('密码为6至18位数字+字母'))
            }else {
                callback();
            }
            
        };
        var code = (rule, value, callback) => {
            let reg = /^[a-z0-9]{6}$/
            if (!value) {
                callback(new Error('请输入验证码'));
            }else if(!reg.test(value)){
                callback(new Error('验证码格式不正确'));
            }
            else{
                callback()
            }
        };
        return {
            menuTab: [
                {txt: '登陆'},
                {txt: '注册'}
            ],
            isActive: 0,
            ruleForm: {
                username: '',
                password: '',
                age: ''
            },
            rules: {
                username: [
                    { validator: username, trigger: 'blur' }
                ],
                password: [
                    { validator: password, trigger: 'blur' }
                ],
                code: [
                    { validator: code, trigger: 'blur' }
                ]
            }
        }
    },
    created(){

    },
    methods: {
        toggleMenu(index){
            this.isActive = index
        },
         submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }

}
</script>
<style lang="scss" scoped>
    #login {
        height: 100vh;
        background-color: #344a5f;
    }
    .login-wrap {
        width: 330px;
        margin: auto;
    }
    .menu-tab {
        display: flex;
        text-align: center;
        li {
            flex: 1;
            font-size: 14px;
            color: #fff;
            cursor: pointer;
            line-height: 36px;
        }
        .current {
            background-color: rgba($color: #000000, $alpha: 0.1)
        }
    }
    .login-form{
        margin-top: 30px;
        label{
            display: block;
            color: #fff;
            margin-bottom: 4px;
        }
        .block {
            display:block;
            width: 100%;
        }
    }

</style>

