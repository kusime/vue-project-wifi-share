<script setup lang="ts">
//import { RouterLink, RouterView } from 'vue-router'
import Navigator from "@/components/reactive/ReactiveNavigator.vue";
import LayoutCopyright from "@/components/layout/LayoutCopyright.vue";
import ThemeSwitcher from "@/components/reactive/ThemeSwitcher.vue";
import LayoutNotification from "@/components/layout/LayoutNotification.vue";
import LayoutFullContainer from "@/components/layout/LayoutFullContainer.vue";
import { onMounted, onUnmounted } from "vue";
import APIs from "@/backend/APIs";
import codeState from "@/stores/codeState";
import { storeToRefs } from "pinia";
import serverState from "@/stores/serverState";
setTimeout(async () => {
  // this state not allowed use in the onMounted hooks...
  // initialize the serverState
  const server = serverState();
  server.initializeServerState();
  server.registerMonitor();
}, 100);

onMounted(async () => {
  const { Records, RecordsMonitor } = storeToRefs(codeState());
  // initialize the data
  await APIs.handlerRecords();
  RecordsMonitor.value = await APIs.regRecordsMonitor(Records);
});

onUnmounted(() => {
  const code = codeState();
  const server = serverState();
  server.removeInterval();
  APIs.unregisterMonitors(code.RecordsMonitor);
});
</script>

<template>
  <Navigator project-name="wifi-share">
    <template #EndButton>
      <ThemeSwitcher />
    </template>
  </Navigator>

  <LayoutFullContainer>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in" appear>
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </LayoutFullContainer>

  <LayoutNotification />
  <LayoutCopyright />
</template>

<style scoped>
/*https://vuejs.org/guide/built-ins/transition.html#css-based-transitions*/
/*Please use this style instead of directly define the tailwind style in the transition component*/

.fade-enter-from {
  @apply opacity-0 scale-0;
}
.fade-enter-active {
  @apply duration-150 transition-all bg-primary;
}
.fade-enter-to {
  @apply opacity-100  bg-base-200;
}

.fade-leave-from,
.fade-leave-active {
  @apply duration-150 transition-all bg-primary;
}

.fade-leave-to {
  @apply opacity-0 scale-0;
}
</style>
