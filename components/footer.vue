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

<script setup lang="ts"></script>

<style scoped lang="scss">
@import '@/assets/scss/breakpoints.scss';
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #e2e3ee;

  @include desktop {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    .left-section {
      justify-content: center;
      width: 100%;

      p {
        font-size: 12px;
      }
    }

    .right-section {
      text-align: center;
      width: 100%;

      .copyright {
        font-size: 12px;
      }
    }
  }

  @include tablet {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    .left-section {
      justify-content: center;
      width: 100%;

      p {
        font-size: 11px;
      }
    }

    .right-section {
      text-align: center;
      width: 100%;

      .copyright {
        font-size: 11px;
      }
    }
  }
}

.left-section {
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    font-size: 13px;
    color: #909399;
  }
}

.right-section {
  text-align: right;
  flex: 1;
}

.copyright {
  color: #909399;
}
</style>
