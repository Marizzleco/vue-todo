<script setup>
</script>

<template>
  <div class="choices">
    <img src="../assets/images/bg-triangle.svg" id="triangle" />
    <div id="rock">
      <img
        src="../assets/images/icon-rock.svg"
        class="selection"
        @click="$emit('rock')"
      />
    </div>
    <div id="paper">
      <img
        src="../assets/images/icon-paper.svg"
        class="selection"
        @click="$emit('paper')"
      />
    </div>
    <div id="scissors">
      <img
        src="../assets/images/icon-scissors.svg"
        class="selection"
        @click="$emit('scissors')"
      />
    </div>
  </div>
</template>



<style>
img.selection {
  width: 200px;
  height: 200px;
  background-color: #fff;
  border-radius: 50%;
  padding: 30px;
  margin: 30px;
}

.choices {
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}

#triangle {
  height: 90%;
  width: 90%;
  grid-area: 1 / 1 / 4 / 4;
  place-self: center;
}

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
}
</style>


