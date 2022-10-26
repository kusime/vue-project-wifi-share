<template>
  <LayoutCard>
    <h3 class="text-3xl text-center font-bold">Attach New Wifi</h3>
    <ReactiveInput
      v-model:inputs="SSID"
      placeholder="wifi name here ..."
      label="SSID"
    />
    <ReactiveInput
      v-model:inputs="PASSWORD"
      placeholder="wifi password here ..."
      label="PASSWORD"
    />
    <button
      class="btn btn-accent"
      type="button"
      @click.prevent="adderState.onSubmit()"
    >
      Submit !
    </button>
  </LayoutCard>
</template>

<script setup lang="ts">
import ReactiveInput from "@/components/reactive/ReactiveInput.vue";
import AdderState from "@/stores/adderState";
import { storeToRefs } from "pinia";
import LayoutCard from "@/components/layout/LayoutCard.vue";
const adderState = AdderState();

const { SSID, PASSWORD } = storeToRefs(adderState);
</script>
