<script setup>
import {useRoute} from "vue-router";
const route = useRoute()
const id = route.params.id

</script>

<template>
    <div>
        <h1>post {{ id }}</h1>
    </div>
</template>

<style scoped>

</style>
