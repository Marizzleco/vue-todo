<script setup >
defineProps({
  title: {
    type: String,
  },
  msg: {
    type: String,
  },
  result: {
    type: String,
  },
});
</script>

<template>
  <div class="gamedeck">
    <div class="player-choice">
      <h1>YOU PICKED</h1>
      <!-- <p>{{ title }}</p> -->
      <img
        v-if="title === 'scissors'"
        src="../assets/images/icon-scissors.svg"
        class="selections"
        id="scissors"
      />
      <img
        v-if="title === 'rock'"
        src="../assets/images/icon-rock.svg"
        class="selections"
        id="rock"
      />
      <img
        v-if="title === 'paper'"
        src="../assets/images/icon-paper.svg"
        class="selections"
        id="paper"
      />
    </div>
    <div class="pc-choice">
      <h1>THE HOUSE PICKED</h1>
      <!-- <p>{{ msg }}</p> -->
      <img
        v-if="msg === 'scissors'"
        src="../assets/images/icon-scissors.svg"
        class="selections"
        id="scissors"
      />
      <img
        v-if="msg === 'rock'"
        src="../assets/images/icon-rock.svg"
        class="selections"
        id="rock"
      />
      <img
        v-if="msg === 'paper'"
        src="../assets/images/icon-paper.svg"
        class="selections"
        id="paper"
      />
    </div>
    <div v-if="result === 'player2'" class="winner">
      <p>You Lose!</p>
    </div>
    <div v-if="result === 'player1'" class="winner">
      <p>You Win!</p>
    </div>
    <div v-if="result === 'draw'" class="winner">
      <p>It's a tie!</p>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: #fff;
}

p {
  color: #fff;
}

.gamedeck {
text-align: center;
align-content: center;
justify-content: center;
  width: 970px;
  height: 960px;
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "player1 player2"
    "winner winner"; 
}
.winner { grid-area: winner; }

.pc-choice {
    grid-area: player2;
}

.player-choice {
    grid-area: player1;
}

img {
  width: 200px;
  height: 200px;
  background-color: #fff !important;
  border-radius: 50%;
  padding: 30px;
  margin: 30px;
}
/* 
#rock {
  grid-area: 3 / 2 / 4 / 3;
  background: radial-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%));
  width: 300px;
  height: 300px;
  border-radius: 50%;
  place-items: center;
  display: flex;
  justify-content: center;
}

#paper {
  grid-area: 1 / 1 / 1 / 1;
  background: radial-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%));
  width: 300px;
  height: 300px;
  border-radius: 50%;
  place-items: center;
  display: flex;
  justify-content: center;
}

#scissors {
  grid-area: 3 / 3 / 1 / 4;
  background: radial-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%));
  width: 300px;
  height: 300px;
  border-radius: 50%;
  place-items: center;
  display: flex;
  justify-content: center;
} */
</style>