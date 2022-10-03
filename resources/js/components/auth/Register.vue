<template>
    <div>
        <h1>会員登録</h1>
        <form>
            <div>
                <label for="name">名前</label>
                <input type="text" name="name" id="name" v-model="user.name">
            </div>
            <div>
                <label for="email">メールアドレス</label>
                <input type="email" name="email" id="email" v-model="user.email">
            </div>
            <div>
                <label for="password">パスワード</label>
                <input type="password" name="password" id="password" v-model="user.password">
            </div>
            <div>
                <label for="password_confirmation">(確認用)パスワード</label>
                <input type="password" name="password_confirmation" id="password_confirmation" v-model="user.password_confirmation">
            </div>
            <button @click="submit" :disabled="sending">送信する</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: {
                name: null,
                email: null,
                password: null,
                password_confirmation: null
            },
            sending: false
        }
    },
    methods: {
        async submit() {
            this.sending = true;
            try {
                const response = await axios.post('/api/register', this.user);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
            this.sending = false;
        }
    }
}
</script>