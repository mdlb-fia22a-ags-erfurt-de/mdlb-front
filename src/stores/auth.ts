import { defineStore } from "pinia";
import { api } from "@/services/api";

interface User {
    username: string;
    isAdmin: boolean;
}

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null as User | null,
        token: localStorage.getItem('token') || null,
    }),
    getters: {
        isLoggedIn: (state) => !!state.token,
    },
    actions: {
        async login(username: string, password: string) {
            try {
                const response = await api.post('/login', { username, password });
                this.token = response.data.token;
                this.user = response.data.user;
                localStorage.setItem('token', this.token);
                api.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
            } catch (error) {
                console.error('Login error:', error);
                throw error;
            }
        },
        logout() {
            this.user = null;
            this.token = null;
            localStorage.removeItem('token');
            delete api.defaults.headers.common['Authorization'];
        },
    },
}); 