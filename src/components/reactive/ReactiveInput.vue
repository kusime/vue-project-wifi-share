<template>
  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="badge badge-accent">{{ label }}</span>
    </label>
    <input
      :type="type"
      class="input w-full max-w-xs"
      :placeholder="placeholder"
      @change="emitValue"
      :value="inputs"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: String,
  placeholder: String,
  type: {
    type: String,
    default: "text",
  },
  // v-model handler
  inputs: String,
  inputsModifiers: {
    default: () => ({}),
  },
});
const emits = defineEmits(["update:inputs"]);

// modelModifiers handler
function emitValue(e: any) {
  emits("update:inputs", e.target.value);
}
</script>

<style scoped></style>
