<template>
  <footer
    class="z-1 fixed opacity-90 bottom-0 left-0 right-0 footer footer-center p-4 bg-base-300 text-base-content"
  >
    <div class="pb-0 flex space-x-6">
      <div>
        Copyright © 2022 - All right reserved by Kusime
        <div class="badge badge-info gap-2">
          {{ nav.version }}
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import navState from "@/stores/navState";
const nav = navState();
</script>
