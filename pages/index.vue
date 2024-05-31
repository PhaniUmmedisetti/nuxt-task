<template>
    <div class="navbar"> 
        <Header />
    <div class="body-content">
        <p class="welcome-text">Welcome PAWAN,</p>
        <p class="select-text">Select any of the nConnect modules to view in detail.</p>
        <card />

    </div>
</div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">



.body-content{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 40px;
.welcome-text{
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: .5rem;
    color: black;
}
.select-text{
    color: #666;
    font-size: 1rem;
    margin-bottom: 1.5rem;

}
}

</style>