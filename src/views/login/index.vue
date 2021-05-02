<template>
  <div class="login-wrapper">
    <img class="login-bg" src="@/assets/images/login/login_two.jpg" alt="" />
    <div class="login-moedl">
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item label="" prop="userName">
          <el-input
            v-model="form.userName"
            placeholder="请输入用户名称"
            prefix-icon="el-icon-user-solid"
          />
        </el-form-item>
        <el-form-item label="" prop="passWord">
          <el-input
            v-model="form.passWord"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            show-password
          />
        </el-form-item>
        <el-button class="login-btn" type="primary" @click="handleClick">点击登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus';
import Cookie from 'js-cookie';

const userHash = {
  admin: 'admin'
};
export default {
  name: 'LoginIndex',
  data() {
    return {
      form: {
        userName: '',
        passWord: ''
      }
    };
  },
  computed: {
    rules() {
      return {
        userName: [{ required: true, message: '请输入用户名称' }],
        passWord: [{ required: true, message: '请输入密码' }]
      };
    }
  },
  methods: {
    handleClick() {
      this.$refs.form.validate(result => {
        if (result) {
          const { userName, passWord } = this.form;
          const word = userHash[userName];
          if (!word) {
            ElMessage.error('用户名称错误');
            return;
          } else if (word !== passWord) {
            ElMessage.error('密码错误，请重新输入');
            return;
          }

          Cookie.set('token', '0101test', { expires: 1 });
        }
      });
    }
  }
};
</script>

<style scoped>
.login-wrapper {
  position: relative;
}

.login-bg {
  width: 100%;
  height: 100vh;
}

.login-moedl {
  position: absolute;
  width: 300px;
  heigt: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.login-btn {
  width: 100%;
}
</style>
