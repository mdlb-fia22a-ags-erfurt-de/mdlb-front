<template>
    <div class="temperature-chart">
        <Line :data="chartData" :options="chartOptions" />
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { Line } from 'vue-chartjs';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useSensorStore } from '@/stores/sensor';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default defineComponent({
    name: 'TemperatureChart',
    components: { Line },
    props: {
        sensorId: {
        type: Number,
        required: true,
        },
    },
    setup(props) {
        const sensorStore = useSensorStore();

        const chartData = computed(() => {
            const sensor = sensorStore.currentSensor;
            if (!sensor) return { labels: [], datasets: [] };

            const labels = sensor.recentMeasurements.map((m: any) => new Date(m.timestamp).toLocaleString());
            const temperatures = sensor.recentMeasurements.map((m: any) => m.temperature);

            return {
                labels,
                datasets: [
                    {
                        label: 'Temperature',
                        data: temperatures,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1,
                    },
                ],
            };
        });

        const chartOptions = {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top' as const,
                },
                title: {
                    display: true,
                    text: 'Recent Temperature Measurements',
                },
            },
        };

        return {
            chartData,
            chartOptions,
        };
    },
});
</script>