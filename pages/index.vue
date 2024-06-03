 <template>
      <div class="body-content">
        <p class="welcome-text">Welcome PAWAN,</p>
        <p class="select-text">Select any of the nConnect modules to view in detail.</p>
        <div class="cards-container">
          <CardComponent v-for="(title, index) in cardTitles" :key="index" :title="title" />

        </div>
      </div>

  </template>
  
  <script setup lang="ts">
  import CardComponent from '../components/card.vue';

  const cardTitles = ref(['Masters', 'Module 1', 'Module 2', 'Module 3', 'Module 4']);
  </script>
  
  <style lang="scss">
  .body-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 40px;
  }
  
  .welcome-text {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: .5rem;
    color: black;
  }
  
  .select-text {
    color:#909899;
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .cards-container {
    display: flex;
    gap: 60px;
    flex-wrap: wrap; 
  }
  </style>
  