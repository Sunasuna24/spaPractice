<template>
    <div>
        <h1>会員登録</h1>
        <form>
            <div>
                <label for="name">名前</label>
                <input type="text" name="name" id="name" :v-model="name">
            </div>
            <div>
                <label for="email">メールアドレス</label>
                <input type="email" name="email" id="email" :v-model="email">
            </div>
            <div>
                <label for="password">パスワード</label>
                <input type="password" name="password" id="password" :v-model="password">
            </div>
            <div>
                <label for="password_confirmation">(確認用)パスワード</label>
                <input type="password" name="password_confirmation" id="password_confirmation" :v-model="password_confirmation">
            </div>
            <button type="submit">送信する</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: null,
            email: null,
            password: null,
            password_confirmation: null
        }
    }
}
</script>