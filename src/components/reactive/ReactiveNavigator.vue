<template>
  <div class="z-10 fixed top-0 left-0 right-0 navbar bg-base-200 bg-opacity-90">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <!--          hamburger icon-->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li v-for="unit in navUnits" :key="unit.navRoute">
            <router-link
              class="btn btn-ghost normal-case text-xl"
              aria-current="page"
              :to="unit.navRoute"
            >
              {{ unit.navTitle }}
            </router-link>
          </li>
        </ul>
      </div>
      <router-link to="/gallery" class="btn btn-ghost normal-case text-xl">{{
        projectName
      }}</router-link>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal p-0">
        <li v-for="unit in navUnits" :key="unit.navRoute">
          <router-link
            class="btn btn-ghost normal-case text-xl"
            aria-current="page"
            :to="unit.navRoute"
          >
            {{ unit.navTitle }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="navbar-end relative">
      <transition name="bounce">
        <div
          v-if="currentServerState === 'online'"
          class="right-20 absolute badge badge-success gap-2 p-5"
        >
          <IconSuccess />
          Server online
        </div>
        <div
          v-else-if="currentServerState === 'init'"
          class="right-20 absolute badge badge-warning gap-2 p-5"
        >
          <IconWarning />
          Server connecting
        </div>
        <div v-else class="right-20 absolute badge badge-error gap-2 p-5">
          <IconError />
          Server offline
        </div>
      </transition>
      <slot name="EndButton" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import navState from "@/stores/navState";
import serverState from "@/stores/serverState";
import IconSuccess from "@/components/icons/IconSuccess.vue";
import IconError from "@/components/icons/IconError.vue";
import IconWarning from "@/components/icons/IconWarning.vue";
const { currentServerState } = storeToRefs(serverState());
const { navUnits } = storeToRefs(navState());
//need to call the store

defineProps({
  projectName: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.bounce-enter-from {
  @apply scale-0 opacity-0 -rotate-90;
}
.bounce-enter-active {
  @apply duration-500 transition-all;
}
.bounce-enter-to {
  @apply scale-100 opacity-100 rotate-0;
}

.bounce-leave-from {
  @apply scale-100 opacity-100 rotate-0;
}

.bounce-leave-active {
  @apply duration-500 transition-all;
}

.bounce-leave-to {
  @apply scale-0 opacity-0 rotate-90;
}
</style>
