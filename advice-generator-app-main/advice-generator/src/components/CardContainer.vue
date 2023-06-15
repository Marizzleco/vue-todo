<script setup>
defineProps({
  title: {
    type: String
  },
  body: {
    type: String
  }
});
</script>


<template>
    <div class="card">
        <h1>ADVICE #{{ title }}</h1>
        <p>"{{ body }}"</p>
        <img src="../assets/pattern-divider-desktop.svg"
        id="desktop-divider"
        />
        <div class="button" >
        <img 
        src="../assets/icon-dice.svg"
        @click="$emit('click')"
        id="dice"
        />
    </div>
        <!-- <button @click="$emit('click')">dice</button> -->
    </div>
</template>

<style scoped>
.card {
    background-color: hsl(217, 19%, 24%);
    padding: 16px;
    border-radius: 6px;
    text-align: center;
}

h1 {
color: hsl(150, 100%, 66%);
font-size: 14px;
font-weight: 800;
letter-spacing: 5px;
}

p {
    color: hsl(193, 38%, 86%);
    font-size: 28px;
    font-weight: 800;
    letter-spacing: 1px;
    padding-top: 15px;
}

.button {
background-color: hsl(150, 100%, 66%);
border-radius: 50%;
width: 60px;
height: 60px;
text-align: center;
bottom: -40px;
margin: auto;
}

.button:active {
    box-shadow: 0px 0px 20px 5px hsl(150, 100%, 66%);
    cursor: pointer;
} 

#desktop-divider {
    padding-top: 30px;
}

#dice {
    top: 50%;
    transform: translate(0%, -50%);
}
</style>


