<template>
    <div>
      <div class="module-card">
      </div>
      <div class="social-links">
        <span>Stay connected with <strong>The Narayana Group</strong> on</span>
        <div class="icons">
          <a
            href="#"
            target="_blank"
            v-for="(icon, index) in icons"
            :key="index"
          >
            <img :src="getLocalDynamicImageUrl(icon.path)" :alt="icon.alt" />
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const icons = ref([
    { path: 'nconnect-logo-orange.svg', alt: 'Facebook' },
    { path: 'nconnect-logo-orange.svg', alt: 'Twitter' },
    { path: 'nconnect-logo-orange.svg', alt: 'YouTube' },
  ]);
  
  const getLocalDynamicImageUrl = (path) => {
    return new URL(`../assets/images/${path}`, import.meta.url).href;
  };
  </script>
  <style>
.social-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  font-size: 14px;
  color: #666;

  .icons {
    display: flex;
    margin-left: 8px;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      margin-left: 8px;
      border-radius: 50%;
      background-color: #f0f0f0;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #e0e0e0;
      }

      img {
        max-width: 16px;
        max-height: 16px;
      }
    }
  }

  @media (max-width: 768px) {
    font-size: 12px;

    .icons {
      a {
        width: 28px;
        height: 28px;

        img {
          max-width: 14px;
          max-height: 14px;
        }
      }
    }
  }
}</style>