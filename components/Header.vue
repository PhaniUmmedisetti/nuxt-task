<!-- This is the nav bar -->

<template>
  <div>
    <header class="header">
      <div class="logo">
        <img src="~assets/images/narayana-logo-color.png" alt="Narayana logo" />
      </div>
      <div class="right-options">
        <a href=""> Open Hangfire</a>
        <el-select v-model="value1" multiple placeholder="Select" style="width: 240px">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <el-icon size="24" class="custom-icon" color="black"><Message /></el-icon>
        <el-icon size="24" class="custom-icon" color="black"><HomeFilled /></el-icon>
        <div class="user-info">
          <div class="user-name-icon">
            <p>P</p>
          </div>
          <div class="user-details">
            <div class="user-name">
              <span>PAWAN V</span>
              <el-dropdown>
                <span class="el-dropdown-link">
                  <el-icon size="20" class="custom-icon" color="black"><More /></el-icon>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item @click="goToMyAccount">My Account</el-dropdown-item>
                    <el-dropdown-item @click="logout">Logout</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
            <div class="user-id">Employee ID: 597800274</div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ElSelect, ElIcon, ElOption, ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus';
import { Message, HomeFilled, More } from '@element-plus/icons-vue';
import useAuth from '@/services/auth';

const { logout } = useAuth();

const value1 = ref([]);

const options = [
  { value: 'Option1', label: 'Option1' },
  { value: 'Option2', label: 'Option2' },
  { value: 'Option3', label: 'Option3' },
  { value: 'Option4', label: 'Option4' },
  { value: 'Option5', label: 'Option5' }
];

const router = useRouter();

const goToMyAccount = () => {
  console.log('Clicked on my account');
};

</script>

<style lang="scss">
@import '@/assets/scss/breakpoints.scss';
* {
  padding: 0;
  margin: 0;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 12px;
  box-shadow: 0px 0.5px 8px 0px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
}

body::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 20px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.3);
  z-index: -1;
}

.logo img {
  max-width: 220px;
  max-height: 120px;
}

.right-options {
  display: flex;
  align-items: center;
  gap: 40px;

  @include desktop {
    display: none;
  }

  @include tablet {
    display: none;
  }
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-name-icon {
  background-color: orange;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.user-name-icon p {
  margin: 0;
  font-size: 16px;
  color: white;
  font-weight: bold;
}

.user-details {
  display: flex;
  flex-direction: column;
}

.user-name {
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  font-size: 14px;
}

.user-id {
  font-size: 14px;
  color: #666;
}
</style>
