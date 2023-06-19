<template>
    <header>
        <h1>{{ title }}</h1>
        <ButtonTemplate @btn-click="$emit('toggle-add-task')" 
        :text="showAddTask ? 'Close' : 'Add Task'" 
        :color="showAddTask ? 'red' : 'green'"
        />
    </header>
</template>

<script>
import ButtonTemplate from './ButtonTemplate.vue'

export default {
    name: 'Header',
    props: {
        title: String,
        showAddTask: Boolean
    },
    components: {
        ButtonTemplate
    }
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

</style>