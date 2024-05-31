<template>
    <div class="footer">
      <div class="left-section">
        <p>Powered by</p>
        <img src="~assets/images/nspira-logo.svg" alt="nspira logo" />
      </div>
      <div class="right-section">
        <div class="copyright">Copyright © Nspira Management Services Pvt. Ltd. 2024</div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped lang="scss">
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px; 
    background-color: #e2e3ee ;
  }
  
  .left-section {
    display: flex;
    align-items: center;
    gap: 10px; 
    p{
      font-size: 13px;
      color: #909399;
    }
  }
  
  .right-section {
    text-align: right;
    flex: 1; 
  }
  .copyright{
    color: #909399;

  }
  
  </style>
  