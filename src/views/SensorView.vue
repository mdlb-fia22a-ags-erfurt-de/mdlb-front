<template>
    <div class="sensor-view">
        <SensorDetails :sensorId="sensorId" />
        <TemperatureChart :sensorId="sensorId" />
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useSensorStore } from '@/stores/sensor';
import SensorDetails from '@/components/SensorDetails.vue';
import TemperatureChart from '@/components/TemperatureChart.vue';

export default defineComponent({
    name: 'SensorView',
    components: {
        SensorDetails,
        TemperatureChart
    },
    setup() {
        const route = useRoute();
        const sensorStore = useSensorStore();

        const sensorId = computed(() => Number(route.params.id));

        onMounted(async () => {
            await sensorStore.fetchSensorDetails(sensorId.value);
        });

        return {
            sensorId,
        }
    }
});
</script>