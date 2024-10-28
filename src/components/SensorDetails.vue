<template>
    <div class="sensor-details" v-if="sensor">
        <h2>{{ sensor.manufacturer }} - {{ sensor.model }}</h2>
        <p>Location: {{ sensor.location }}</p>
        <p>Current Temperature: {{ sensor.currentTemperature }}°C</p>
        <p>Max Temperature: {{ sensor.maxTemperature }}°C</p>
        <p>Highest Temperature: {{ sensor.highestTemperature }}°C</p>
        <p>Average Temperature: {{ sensor.averageTemperature }}°C</p>

        <h3>Recent Measurement</h3>
        <ul>
            <li v-for="measurement in sensor.recentMeasurements"
                :key="measurement.id"
            >
                {{ measurement.temperature }}°C at {{ formatDate(measurement.timestamp) }}
            </li>
        </ul>

        <div v-if="isLoggedIn">
            <h3>Update Max Temperature</h3>
            <input v-model.number="newMaxTemperature" type="number" step="0.1" />
            <button @click="updateMaxTemperature">Update</button>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useSensorStore } from '@/stores/sensor';
import { useAuthStore } from '@/stores/auth';

export default defineComponent({
    name: 'SensorDetails',
    props: {
        sensorId: {
            type: Number,
            required: true,
        },
    },
    setup(props) {
        const sensorStore = useSensorStore();
        const authStore = useAuthStore();

        const sensor = computed(() => sensorStore.currentSensor);
        const isLoggedIn = computed(() => authStore.isLoggedIn);
        const newMaxTemperature = ref(0);

        const formatDate = (date: string) => {
            return new Date(date).toLocaleString();
        };

        const updateMaxTemperature = async () => {
            await sensorStore.updateMaxTemperature(props.sensorId, newMaxTemperature.value);
        };

        return {
            sensor,
            isLoggedIn,
            newMaxTemperature,
            formatDate,
            updateMaxTemperature,
        };
    },
});

</script>

<style lang="scss" scoped>
</style>