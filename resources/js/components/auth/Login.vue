<template>
    <div>
        <h1>ログイン</h1>
        <form>
            <div>
                <label for="email"></label>
                <input type="email" name="email" id="email" :v-model="email">
            </div>
            <div>
                <label for="password"></label>
                <input type="password" name="password" id="password" :v-model="password">
            </div>
            <button @click="login" :disabled="sending">ログインする</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email: null,
            password: null,
            sending: false
        }
    },
    methods: {
        async login() {
            this.sending = true;
            try {
                // 
            } catch (error) {
                // 
            }
            this.sending = false;
        }
    }
}
</script>