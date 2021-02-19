<template>
    <div class="login">
        <el-form :model="formCustom" :rules="ruleCustom" ref="formCustom" label-width="100px" class="demo-ruleForm">

            <el-form-item label="邮箱" prop="mail">
                <el-input v-model="formCustom.mail"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="passwd">
                <el-input v-model="formCustom.passwd" type="password" ></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="handleSubmit('formCustom')">登录</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'login',
   data() {
      return {
        formCustom: {
          passwd: '',
          mail: ''
        },
        ruleCustom: {
          passwd: [{ required: true, message: "请输入密码", trigger: "blur" }],
          mail: [
            { required: true, message: "请输入邮箱", trigger: "blur" },
            { type: "email", message: "邮箱格式错误", trigger: "blur" }
          ]
        }
      };
    },
  methods: {
    handleSubmit(name) {
      this.$refs.formCustom.validate(valid => {
        if (valid) {
          let data = {
            passwd: this.formCustom.passwd,
            email: this.formCustom.mail
          };
          axios.get("http://127.0.0.1:3000/login", { params:data })
            .then(res => {
              if (res.data.code == 201) {
                this.$message("邮箱或密码错误");
              } else {
                this.$message("登陆成功");

                this.$router.push({path: '/index'})
              }
            });
        } else {
          this.$message();
        }
      });
    }
  }
};
</script>

<style scoped>
.login{
  width: 340px;
  height: 410px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  padding: 30px 40px 30px 0;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>