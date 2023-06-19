<script setup >
// import { RouterLink, RouterView } from 'vue-router';
import ScoreCard from "./components/ScoreCard.vue";
import ChoiceCard from "./components/ChoiceCard.vue";
import YouPicked from "./components/YouPicked.vue";
import { ref, onMounted } from "vue";
import { computerChoice, rockPaperScissors } from "../functions/game.js";

let status = ref();
let playerChoice = ref();
let pcChoice = ref();
let outcome = ref();

function onClick(choice) {
  console.log("clicked");
  status.value = true;
  playerChoice.value = choice;
  pcChoice.value = computerChoice();
  outcome.value = rockPaperScissors(playerChoice.value, pcChoice.value);
}
</script>

<template>
  <div id="app">
    <div id="score">
      <ScoreCard />
    </div>
    <div v-if="!status" id="gameplay">
      <ChoiceCard
        @rock="onClick('rock')"
        @paper="onClick('paper')"
        @scissors="onClick('scissors')"
      />
    </div>
    <div v-if="status" id="step 2">
      <YouPicked :title="playerChoice" :msg="pcChoice" :result="outcome"/>
    </div>
    <div class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by <a href="#">Marie Collinge</a>.
    </div>
  </div>
</template>

<style>
/* @import '@/assets/base.css'; */
@import url("https://fonts.google.com/specimen/Barlow+Semi+Condensed");

body {
  font-family: "Barlow Semi Condensed", sans-serif !important;
  background: radial-gradient(
    hsl(214, 47%, 23%),
    hsl(237, 49%, 15%)
  ) !important;
}

#app {
  display: flex;
  flex-direction: column;
  place-items: center;
}

.attribution {
  font-size: 11px;
  text-align: center;
  position: absolute;
  bottom: 0px;
  margin-right: auto;
  margin-left: auto;
  left: 0px;
  right: 0px;
}
.attribution a {
  color: hsl(228, 45%, 44%);
}
</style>
