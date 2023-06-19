<template>
    <div :key="task.id" v-for="task in tasks">
        <TaskTemplate 
        @toggle-reminder="$emit('toggle-reminder', task.id)"
        @delete-task="$emit('delete-task', task.id)" 
        :task="task"
        />
    </div>
</template>

<script>
import TaskTemplate from './TaskTemplate.vue';

export default {
    name: 'Tasks',
    props: {
        tasks: []
    },
    components: {
        TaskTemplate
    },
    emits: ['delete-task', 'toggle-reminder']
}
</script>