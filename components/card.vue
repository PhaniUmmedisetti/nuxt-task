<!-- This is the module card int he home screen -->

<template>
  <div class="module-card">
    <div class="module-icon">
      <img src="~assets/images/masters.png" alt="Masters Icon" />
    </div>
    <div class="module-title">{{ title }}</div>
    <el-button round type="primary" class="view-btn">View Module</el-button>
  </div>
</template>

<script setup lang="ts">
import { ElButton } from 'element-plus';
import { defineProps } from 'vue';

const props = defineProps({
  title: String
});
</script>

<!-- <style lang="scss" scoped>
.module-card {
  display: flex;
  gap: 12px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-color: #fff;
  border-radius: 32px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.4s ease, transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); 
  height: 210px;
  width: 280px;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: scale(1.01); 
  }

  .module-icon {
    width: 64px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .module-title {
    font-size: 18px;
    font-weight: 500;
    margin-top: 8px;
    text-align: center;
  }

  .view-btn {
    font-size: 16px;
    margin-top: 12px;
    width: 190px;
  }
}
</style> -->
<style lang="scss" scoped>
.module-card {
  display: flex;
  gap: 12px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-color: #fff;
  border-radius: 32px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.4s ease, transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); 
  height: 210px;
  width: 280px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: scale(1.01); 

    .view-btn {
      background-color: rgba(41, 128, 185, 0.9); /* Darker blue with 90% opacity */
      color: rgba(255, 255, 255, 0.9); /* White with 90% opacity */
    }
  }

  .module-icon {
    width: 64px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .module-title {
    font-size: 18px;
    font-weight: 500;
    margin-top: 8px;
    text-align: center;
  }

  .view-btn {
    font-size: 16px;
    margin-top: 12px;
    width: 190px;
    background-color: var(--button-color);
    transition: background-color 0.3s, color 0.3s;
  }
}
</style>

