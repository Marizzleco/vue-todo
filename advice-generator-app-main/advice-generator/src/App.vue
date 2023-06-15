<script setup>
import CardContainer from "./components/CardContainer.vue";
import { ref, onMounted } from "vue";

let response = ref();



async function getAdvice() {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  console.log(data);
  return data;
};

async function refreshAdvice() {
  response.value = await getAdvice();
};

function onClick(){
  console.log('clicked');
  refreshAdvice();
};

onMounted(async () => {
  response.value = await getAdvice();
});
</script>

<template>
  <div v-if="response" id="app">
  <CardContainer :title="response.slip.id" 
  :body="response.slip.advice" 
  @click="onClick"/>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Manrope");
body {
  font-family: "Manrope", sans-serif !important;
  background-color: hsl(218, 23%, 16%) !important;
}
</style>
