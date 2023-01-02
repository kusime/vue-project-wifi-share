<template>
  <!--  https://functional.style/vue3/css/transition/-->
  <transition>
    <div class="fixed top-0 justify-center z-10 flex w-full" v-if="show">
      <!--      cannot use the dynamic types here because duration compile compiler dont know this class is going to be used -->
      <div class="" v-if="alert.type === alert.types.info">
        <div class="alert alert-info shadow-lg">
          <div>
            <IconInfo />
            <span>{{ message }}</span>
          </div>
        </div>
      </div>

      <div class="" v-if="alert.type === alert.types.success">
        <div class="alert alert-success shadow-lg">
          <div>
            <IconSuccess />
            <span>{{ message }}</span>
          </div>
        </div>
      </div>

      <div class="" v-if="alert.type === alert.types.error">
        <div class="alert alert-error shadow-lg">
          <div>
            <IconError />
            <span>{{ message }}</span>
          </div>
        </div>
      </div>

      <div class="" v-if="alert.type === alert.types.warning">
        <div class="alert alert-warning shadow-lg">
          <div>
            <IconWarning />
            <span>{{ message }}</span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import alertState from "@/stores/alertState";
import { storeToRefs } from "pinia";
import IconInfo from "@/components/icons/IconInfo.vue";
import IconSuccess from "@/components/icons/IconSuccess.vue";
import IconWarning from "@/components/icons/IconWarning.vue";
import IconError from "@/components/icons/IconError.vue";
const alert = alertState();
const { message, type, show } = storeToRefs(alert);
console.log(message.value, type.value, show.value);
</script>

<style scoped>
/*Please use this style instead of directly define the tailwind style in the transition component*/
.v-enter-from {
  @apply opacity-0 w-full scale-0;
}
.v-enter-active {
  @apply duration-[2s] transition-all;
}
.v-enter-to {
  @apply opacity-100 translate-y-40 scale-100;
}
.v-leave-from {
  @apply opacity-100 translate-y-40 scale-100;
}
.v-leave-active {
  @apply duration-[2s] transition-all;
}

.v-leave-to {
  @apply opacity-0;
}
</style>
