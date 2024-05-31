<template>
    <div class="module-card">
      <div class="module-icon">
        <img src="~assets/images/masters.png" alt="Masters Icon" />
      </div>
      <div class="module-title">Masters</div>
      <el-button round type="primary" class="view-btn">View Module</el-button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ElButton } from 'element-plus';
  </script>
  
  <style lang="scss" scoped>
  .module-card {
    display: flex;
    gap: 2px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    height: 160px;
    width: 200px;
  
    &:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
      font-size: 16px;
      font-weight: 500;
      margin-top: 8px;
      text-align: center;
    }
  
    .view-btn {
      margin-top: 12px;
      width: 190px;    }
  }
  </style>