<template>
    <div class="home">
        <h1>Temperature Monitoring System</h1>
        <SensorList />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SensorList from '@/components/SensorList.vue';

export default defineComponent({
    name: 'HomeView',
    components: {
        SensorList,
    }
});
</script>