<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-2xl">
        <h1 class="text-5xl font-bold">{{ catchAll }} NotFound...</h1>
        <p class="py-6">Please go to the main page ...</p>
        <router-link to="/gallery" class="btn btn-primary text-white"
          >Go back</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
const catchAll = router.currentRoute.value.params.catchAll;
</script>
