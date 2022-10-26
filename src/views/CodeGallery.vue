<script setup lang="ts">
import LayoutCodeUnit from "@/components/layout/LayoutCodeUnit.vue";
import codeState from "@/stores/codeState";
import { storeToRefs } from "pinia";
import LayoutGridCard from "@/components/layout/LayoutGridCard.vue";
import serverState from "@/stores/serverState";
import LayoutCard from "@/components/layout/LayoutCard.vue";

const code = codeState();
const { Records } = storeToRefs(code);
const { currentServerState: online } = storeToRefs(serverState());

console.log(online);
</script>

<template>
  <LayoutGridCard v-if="Array.isArray(Records) && Records.length !== 0">
    <LayoutCodeUnit
      v-for="record in Records"
      :key="record['UUID']"
      :size="200"
      :password="record['PASSWORD']"
      :ssid="record['SSID']"
      :uuid="record['UUID']"
      :date="record['DATE']"
    />
  </LayoutGridCard>
  <div
    v-else-if="online === 'online'"
    class="hero min-h-screen"
    style="background-image: url('src/assets/banner.jpg')"
  >
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold capitalize">wifi-share</h1>
        <p class="mb-5">
          Share your wifi via qrcode , phone can easily connect to the wifi via
          the camera ...
        </p>
        <router-link to="/adder" class="btn btn-primary"
          >Get Started</router-link
        >
      </div>
    </div>
  </div>
  <div class="" v-else-if="online === 'init'">
    <LayoutCard>
      <h1 class="mb-5 text-5xl font-bold capitalize">Connecting ...</h1>
    </LayoutCard>
  </div>
  <div class="" v-else>
    <LayoutCard>
      <h1 class="mb-5 text-5xl font-bold capitalize">Server Down ...</h1>
    </LayoutCard>
  </div>
</template>
