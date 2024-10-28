<template>
    <div class="admin-view">
        <h1>Admin Panel</h1>
        <LoginForm v-if="!isLoggedIn"/>
        <div v-else>
            <h2>Welcome, {{ username }}</h2>
            <button @click="logout">Logout</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useAuthStore } from '@/stores/auth';
import LoginForm from '@/components/LoginForm.vue';

export default defineComponent({
    name: 'AdminView',
    components: {
        LoginForm,
    },
    setup() {
        const authStore = useAuthStore();

        const isLoggedIn = computed(() => authStore.isLoggedIn);
        const username = computed(() => authStore.user?.username);

        const logout = () => {
            authStore.logout();
        };

        return {
            isLoggedIn,
            username,
            logout
        };
    }
});
</script>

