<template>
    <div class="register">
        <div class="register-box">
            <el-form :model="formCustom" :rules="ruleCustom" ref="formCustom" label-width="100px" class="demo-ruleForm">

                <el-form-item label="用户名" prop="name">
                    <el-input v-model="formCustom.name"></el-input>
                </el-form-item>

                <el-form-item label="邮箱" prop="mail">
                    <el-input v-model="formCustom.mail"></el-input>
                </el-form-item>

                <el-form-item  label="验证码" prop="code">
                    <el-input v-model="formCustom.code"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button @click="sendCheckCode('formCustom')" >{{codebtntext}}</el-button>
                </el-form-item>

                <el-form-item label="密码" prop="passwd">
                    <el-input v-model="formCustom.passwd" type="password"></el-input>
                </el-form-item>

                <el-form-item label="重复密码" prop="passwdCheck">
                    <el-input v-model="formCustom.passwdCheck" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleSubmit('formCustom')">注册</el-button>
                    <el-button @click="handleReset('formCustom')">清除</el-button>
                </el-form-item>
            </el-form>
        </div>
        
    </div>    
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
    name: "register",
    data() {
        //自定义表单验证
        //验证邮箱是否已被注册，若没有被注册，生成验证码并存储到code中
        const validateEmail = (rule, value, callback) => {
            if(!value) {//没有填写邮箱
                return callback(new Error("请填写邮箱"));
            }
            let data = {
                email: this.formCustom.mail
            };
            axios.get("http://127.0.0.1:3000/mailcode", { params: data })
                .then(res => {
                    console.log(res);
                    if (res.data.code == 201) {
                        return callback(new Error("该邮箱已被注册"));
                    } else {//服务器发回来了验证码，存储到codeCheck中
                        this.formCustom.codeCheck = res.data.code;
                        console.log(this.formCustom.codeCheck);
                        return callback();
                    }
                })
        }
        //验证密码
        const validatePasswdCheck = (rule, value, callback) => {
            if (value !== this.formCustom.passwd) {
                callback(new Error("两次输入密码不一致"));
            } else {
                callback();
            }
        };
        //邮箱验证码验证
        //验证验证码是否为空
        //如果不为空，验证验证码是否正确
        const validateCode = (rule, value, callback) => {
            if (!value) {
                return callback(new Error("请填写验证码"));
            } else if ( value == this.formCustom.codeCheck ) {
                console.log('这是客户端存储的验证码' + this.formCustom.code);
                console.log('这是用户填写的验证码' + value);
                console.log('codeCheck' + this.formCustom.codeCheck);
                console.log('验证码正确');
                return callback();
            } 
            if ( value != this.formCustom.codeCheck) {
                callback(new Error("验证码错误"))
            }
        };

        return {
            formCustom: {
                name: "",
                passwd: "",
                passwdCheck: "",
                mail: "",
                code: "",
                codeCheck: ""
            },
        
            codetime: 30,
            codebtntext: "发送验证码",
            ruleCustom: {
                passwd: [{ required: true, message: "请输入密码", trigger: "blur" }],
                passwdCheck: [
                { required: true, message: "请再次输入密码", trigger: "blur" },
                { validator: validatePasswdCheck, trigger: "blur" }
                ],
                name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
                mail: [
                { required: true, message: "请输入邮箱", trigger: "blur" },
                { type: "email", message: "邮箱格式错误", trigger: "blur" },
                {validator: validateEmail, trigger: "blur"}
                ],
                code: [{ validator: validateCode, trigger: "blur" }]
            }
        };
    },
    methods: {
        sendCheckCode() {
            //点击发送验证码
            this.$refs.formCustom.validateField("mail", valid => {
                if (!valid) {
                    let data = {
                        email: this.formCustom.mail,
                        code: this.formCustom.code
                    };
                    axios.get('http://127.0.0.1:3000/sendcheckcode', { params: data })
                        .then( res => {
                            if ( res.data.code == 201) {
                                console.log('验证码发送失败');
                            } else {
                                console.log('验证码发送成功');
                            }
                        })
            
                }
            });
        },
        subs() {
        },
        handleSubmit(name) {
            let data = {
            code: this.formCustom.code,
            email: this.formCustom.mail,
            passwd: this.formCustom.passwd,
            name: this.formCustom.name
          };
          axios.get('http://127.0.0.1:3000/register', { params: data }).then( res => {
              if (res.data.code == 200) {
                  this.$message("注册成功");
                  this.$router.push({path: '/welcome/login'})

              } else {
                  this.$message('注册失败')
              }
          })
        },
        handleReset(name) {
            this.$refs[name].resetFields();
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register{
    width: 340px;
    height: 410px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    padding: 30px 40px 30px 0;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    opacity: 1;
    /* background-color: LightSteelBlue; */
}

</style>