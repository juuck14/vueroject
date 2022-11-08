<template>
    <div>
        <h3>YOU ARE:</h3>
        <div>id: {{userInfo.id}}</div>
        <div>password: {{userInfo.password}}</div>
        <div>password: {{userInfo.password}}</div>
        <div>age: {{userInfo.age}}</div>
    </div>
</template>

<script>
export default {
    layout: 'client-layout',
    middleware: 'auth',
    data() {
        return {
        }
    },
    computed: {
        userInfo() {
            return this.$store.getters['userInfo/getUserInfo']
        }
    }
}
</script>

