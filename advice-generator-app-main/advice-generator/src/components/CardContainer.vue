<template>
    <div class="card">
        <h1>ADVICE #117</h1>
        <p>"It is easy to sit up and take..."</p>
        <button @click="$emit('click')">dice</button>
    </div>
</template>

<style scoped>
.card {
    background-color: hsl(217, 19%, 38%);
    padding: 16px;
    border-radius: 6px;
    text-align: center;
}

h1 {
color: hsl(150, 100%, 66%);
font-size: 14px;
font-weight: 800;
}

p {
    color: hsl(193, 38%, 86%);
    font-size: 28px;
    font-weight: 800;
}

button {

}
</style>


