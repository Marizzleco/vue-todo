<script setup>
// import { defineComponent } from '@vue/composition-api'

// export default defineComponent({
//     setup() {

//     },
// })

import { ref } from "vue";

const score = ref(0);

</script>


<template>
  <div class="title">
    <img src="../assets/images/logo.svg" id="logo" />
    <div class="score">
      <h2>SCORE</h2>
      <p>{{ score }}</p>
    </div>
  </div>
</template>



<style>
.title {
  border: 5px solid hsl(217, 16%, 45%);
  border-radius: 6px;
  padding: 16px;
  border-radius: 15px;
  width: 970px;
  display: flex;
  justify-content: space-between;
}

.score {
  background-color: #fff;
  border-radius: 6px;
  padding: 16px;
}

h2 {
  color: hsl(229, 64%, 46%);
  font-size: 14px;
  font-weight: 800;
  text-align: center;
}

p {
  color: hsl(229, 25%, 31%);
  font-size: 28px;
  font-weight: 800;
  text-align: center;
}
</style>


