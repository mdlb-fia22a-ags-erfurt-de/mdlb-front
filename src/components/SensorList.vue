<template>
    <div class="sensor-list">
        <h2>Sensors</h2>
        <ul>
            <li v-for="sensor in sensors" 
                :key="sensor.sensorId" 
                :class="{'temperature-exceeded': isTemperatureExceeded(sensor)}">
                <router-link :to="`/sensor/${sensor.sensorId}`">
                    {{ sensor.manufacturer }} - {{ sensor.model }}
                    <span>Current Temperature: {{ sensor.currentTemperature }}°C</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import { defineComponent, computed } from 'vue';
    import { useSensorStore } from '@/stores/sensor';

    export default defineComponent({
        name: 'SensorList',
        setup() {
            const sensorStore = useSensorStore();

            const sensors = computed(() => sensorStore.sensors);

            const isTemperatureExceeded = (sensor: any) => {
                return sensor.currentTemperature > sensor.maxTemperature;
            };

            return {
                sensors,
                isTemperatureExceeded,
            }
        }
    });
</script>

<style lang="scss" scoped>
    .sensor-list {
        ul {
            list-style-type: none;
            padding: 0;
        }

        li {
            margin-bottom: 10px;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;

            &.temperature-exceeded {
                background-color: #ffeeee;
                border-color: #ffaaaa;
            }
        }
    }
</style>