<template>
    <div>
        id: <input v-model="user.id" type="text"/><br/>
        password: <input v-model="user.password" type="text"/><br/>
        <button type="button" @click="login">login</button>
        <br/>{{userList}}
    </div>
</template>

<script>
export default {
    layout: 'client-layout',
    data() {
        return {
            user: {
                id: '',
                password: ''
            }
        }
    },
    computed: {
        userList() {
            return this.$store.getters['user/getUserList']()
        }
    },
    methods: {
        login() {
            this.$store.dispatch('user/login', this.user)
            .then(_data => {
                alert('success\'ed')
                this.$router.push({path: "/user/mypage"})
            })
            .catch(error => alert(error))
        }
    }

}
</script>