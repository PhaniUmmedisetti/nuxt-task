<template>
    <div class="layout">
        <Header />

        <main class="layout__inner">
            <slot />
         </main>
         <Footer />
    </div>

</template>
<script setup></script>
<style lang="scss">
.layout {
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   position: relative;
}

.layout__inner {
   display: flex;
   flex-direction: column;
   flex-grow: 1;
   background-color: var(--body-background-color);
}

</style>