import { defineStore } from 'pinia';
import { api } from '@/services/api';

export const useSensorStore = defineStore('sensor', {
    state: () => ({
        sensors: [],
        currentSensor: null,
    }),
    actions: {
        async fetchSensors() {
            try {
                const response = await api.get('/sensors');
                this.sensors = response.data;
            } catch (error) {
                console.error('Error fetching sensors:', error);
            }
        },
        async fetchSensorDetails(id: number) {
            try {
                const response = await api.get(`/sensors/${id}`);
                this.currentSensor = response.data;
            } catch (error) {
                console.error('Error fetching sensor details:', error);
            }
        },
        async updateMaxTemperature(id: number, maxTemperature: number) {
            try {
                await api.put(`/sensors/${id}/max-temperature`, { maxTemperature });
                await this.fetchSensorDetails(id);
            } catch (error) {
                console.error('Error updating max temperature:', error);
            }
        },
    },
});