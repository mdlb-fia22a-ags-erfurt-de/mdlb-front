<template>
    <div class="login-form">
        <h2>Login</h2>
        <form @submit.prevent="login">
            <div>
                <label for="username">Username:</label>
                <input v-model="username" type="text" required />
            </div>
            <div>
                <label for="password">Password:</label>
                <input v-model="password" id="password" type="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useAuthStore } from '@/stores/auth';

export default defineComponent({
    name: 'LoginForm',
    setup() {
        const authStore = useAuthStore();
        const username = ref('');
        const password = ref('');

        const login = async () => {
            await authStore.login(username.value, password.value);
        };

        return {
            username,
            password,
            login,
        };
    },
});
</script>

<style lang="scss" scoped>

</style>