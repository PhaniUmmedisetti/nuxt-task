<template>
  <div> 
    <header class="header">
        <div>LOGO</div>
        <div class="right-options">
            <a href=""> Open Hangfire</a>
   <el-select
      v-model="value1"
      multiple
      placeholder="Select"
      style="width: 240px"
     >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-icon size="24"><Message /></el-icon>
    <el-icon size="24"><HomeFilled /></el-icon>

    <div class="user-info">
          <div class="user-name-icon"> 
            <p>P</p>
          </div>
          <div class="user-details">
            <div class="user-name">
              <span>PAWAN V</span>
              <el-icon size="20"><More /></el-icon>
            </div>
            <div class="user-id">
              Employee ID: 597800274
            </div>
          </div>
        </div>
    
  </div>
    </header>
  </div>
</template>

<script lang="ts" setup>

import { ElSelect, ElIcon,ElOption } from 'element-plus';
import { Message,HomeFilled } from '@element-plus/icons-vue';

const value1 = ref([])

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
}

.header{
  display: flex;
  justify-content: space-between;
  padding: 12px;
  background-color: pink;
  box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.3);

}

.right-options{
  display: flex;
  align-items : center;
  gap: 40px;
}
// .user-name-icon{
//   background-color: orange;
//   height: 35px;
//   width: 35px;
//   border-radius: 24px;
//   display: flex;
//   justify-content: center;
// }

// .user-name-icon {
//   background-color: orange;
//   height: 35px;
//   width: 35px;
//   border-radius: 24px;
//   display: flex;
//   justify-content: center;
//   align-items: center;  
// }

// .user-name-icon p {
//   margin: 0;  
// }

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
}

.user-id {
  font-size: 12px;
  color: #666;
}
</style>

