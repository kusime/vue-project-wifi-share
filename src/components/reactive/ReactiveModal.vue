<template>
  <!-- The button to open modal -->
  <label
    :for="uuid"
    class="transition-all active:duration-150 duration-500 active:shadow-red-500 active:scale-90 shadow-md shadow-primary hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary"
  >
    <slot name="trigger"></slot>
  </label>

  <!-- Put this part before </body> tag -->
  <input type="checkbox" :id="uuid" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box flex justify-center items-center  relative">
      <label :for="uuid" class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps(["uuid"]);
</script>
