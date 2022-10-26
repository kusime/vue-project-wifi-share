<template>
  <div class="card w-full md:w-96 bg-base-100 shadow-xl">
    <figure class="mt-5">
      <ReactiveModal :uuid="uuid">
        <template #trigger>
          <qrcode-vue
            :value="`WIFI:S:${ssid};T:WPA;P:${password};H:false;;`"
            level="H"
            class="m-auto w-full"
            :size="size"
            id="qrcode"
          />
        </template>
        <template #default>
          <qrcode-vue
            :value="`WIFI:S:${ssid};T:WPA;P:${password};H:false;;`"
            level="H"
            class="m-auto w-full"
            :size="size + 50"
            id="qrcode"
          />
        </template>
      </ReactiveModal>
    </figure>
    <div class="card-body">
      <h2 class="text-md font-bold flex justify-start gap-3 items-center ">
        <div class="badge badge-secondary text-sm">SSID:</div>
        <div>{{ ssid }}</div>
      </h2>
      <h2 class="text-xs flex justify-start gap-3 items-center ">
        <div class="badge badge-secondary">PWD:</div>
        <div>{{ password }}</div>
      </h2>
      <div class="w-full flex justify-center">
        <div class="badge badge-outline">{{ date }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import QrcodeVue from "qrcode.vue";
import ReactiveModal from "@/components/reactive/ReactiveModal.vue";
import randomUUID from "@/pubFunctions/randomUUID";
import getDate from "@/pubFunctions/getDate";

defineProps({
  ssid: {
    type: String,
    required: true,

    default: "TP-LINK_5G_401",
  },
  password: {
    type: String,
    required: true,
    default: "aiweidan",
  },
  uuid: {
    type: String,
    required: true,
    default: randomUUID(),
  },
  date: {
    type: String,
    required: true,
    default: getDate(),
  },
  size: {
    type: Number,
    required: true,
    default: 200,
  },
});
</script>

<style scoped></style>
