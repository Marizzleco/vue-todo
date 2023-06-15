<script setup>
import CardContainer from "./components/CardContainer.vue";
function onClick(){
  console.log('clicked');
}
</script>

<template>
  <div id="app"><CardContainer @click="onClick"/></div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Manrope");
body {
  font-family: "Manrope", sans-serif !important;
  background-color: hsl(217, 19%, 24%) !important;
}
</style>
