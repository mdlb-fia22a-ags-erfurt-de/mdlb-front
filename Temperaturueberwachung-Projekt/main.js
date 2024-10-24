new Vue({
    el: '#app',
    data: function() {
return {
        email: '',
        password: '',
        errorMessage: ''
    };
},
    methods: {
        submitForm() {
            // Simple login check (you can customize it)
            if (this.email === 'user@example.com' && this.password === 'password123') {
                alert('Login successful!');
                this.errorMessage = '';
            } else {
                this.errorMessage = 'Invalid email or password';
            }
        }
    }
});