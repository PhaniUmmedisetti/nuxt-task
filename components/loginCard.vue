<template>
  <div class="container">
    <div class="card">
      <div class="logo">
        <img src="~assets/images/nconnect-logo-orange.svg" alt="nConnect Logo" />
      </div>
      <h2 class="title">Sign In</h2>
      <form class="form" @submit.prevent="submitForm">
        <div v-if="loginMethod === 'password'">
          <div class="form-group" required>
            <label for="username"> Username</label>
            <el-input
              id="username"
              v-model="username"
              placeholder="Enter your username"
            ></el-input>
          </div>
          <div class="form-group" required>
            <label for="password"> Password</label>
            <el-input
              id="password"
              v-model="password"
              type="password"
              placeholder="Enter your password"
            ></el-input>
          </div>
          <el-button type="primary" native-type="submit" class="submit-btn">Submit</el-button>
        </div>
        <div v-else>
          <div v-if="!showOTPInput">
            <div class="form-group" required>
              <label for="employeeNumber"> Employee Number</label>
              <el-input
                id="employeeNumber"
                v-model="employeeNumber"
                placeholder="Enter Employee Number"
              ></el-input>
            </div>
            <el-button type="primary" class="submit-btn" @click="validateEmployeeNumber">Next</el-button>
          </div>
          <div v-else>
            <div class="form-group" required>
              <label for="otp">OTP</label>
              <el-input
                id="otp"
                v-model="otp"
                placeholder="Enter OTP"
              ></el-input>
            </div>
            <el-button type="primary" class="submit-btn" @click="validateOTP">Submit OTP</el-button>
          </div>
        </div>
        <div class="divider">
          <span>or</span>
        </div>
        <el-button class="password-btn" @click="toggleLoginMethod">
          {{ loginMethod === 'password' ? 'Login with OTP' : 'Login with Password' }}
        </el-button>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { ElButton, ElInput } from 'element-plus'

const router = useRouter()
const username = ref<string>('')
const password = ref<string>('')
const otp = ref<string>('')
const correctUsername = "bunnyman"
const correctPassword = "nconnect@123"
const correctOTP = "9999"
const loginMethod = ref('password')
const showOTPInput = ref(false)
const employeeNumber = ref('')

const submitForm = () => {
  if (loginMethod.value === 'password') {
    if (username.value === correctUsername && password.value === correctPassword) {
      redirectToIndex()
    } else {
      alert('Invalid username or password')
    }
  } else {
    if (showOTPInput.value) {
      validateOTP();
    } else {
      alert('Please enter employee number first')
    }
  }
}

const validateEmployeeNumber = () => {
  if (employeeNumber.value === correctUsername) {
    showOTPInput.value = true;
  } else {
    alert('Invalid Employee Number')
  }
}

const validateOTP = () => {
  if (otp.value === correctOTP) {
    redirectToIndex()
  } else {
    alert('Incorrect OTP. Please try again.')
  }
}

const redirectToIndex = () => {
  router.push('/')
}

const toggleLoginMethod = () => {
  loginMethod.value = loginMethod.value === 'password' ? 'otp' : 'password';
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.card {
  height: 25rem;
  width: 30rem;
  background-color: white;
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.logo {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  img {
    height: auto;
    max-width: 100%;
  }
}

.title {
  font-size: 36px;
  color: #333333;
  margin-bottom: 1rem;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;

  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;

    label {
      font-size: 14px;
      color: #606266;
      font-weight: bold;
    }
    
    &[required] label::before {
      content: '*';
      color: red;
      margin-left: 0.2em;
    }

    .el-input{
      height: 2rem;
      width: 50vh;
    }
  }
}

.divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 1rem 0;
  width: 100%;
  color: #c4c4c4;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  border-bottom: 0.5px solid #c4c4c4;
}

.divider:not(:empty)::before {
  margin-right: .25em;
}

.divider:not(:empty)::after {
  margin-left: .25em;
}

.submit-btn {
  height: 2.5rem;
  width: 50vh;
  border-radius: 2rem;
}

.password-btn {
  height: 2.5rem;
  width: 50vh;
  margin-top: 0.5rem;
}
</style>


