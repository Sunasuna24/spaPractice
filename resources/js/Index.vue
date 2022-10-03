<template>
    <div>
        <div>
            <router-link :to="{ name: 'top' }">SPA</router-link>
        </div>
        <div>
            <router-link :to="{ name: 'register' }">会員登録</router-link>
            <router-link :to="{ name: 'login' }">ログイン</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>