<script setup>

</script>

<template>
    <div>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/about">About</RouterLink> |
        <RouterLink to="/post/10">Post</RouterLink>
        <br>
        <router-view ></router-view>
    </div>
</template>

<style scoped>

</style>
