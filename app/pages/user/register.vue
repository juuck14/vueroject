<template>
    <div>
        id: <input v-model="newUser.id" type="text"/><button type="button" @click="checkDuplicate">check</button><br/>
        password: <input v-model="newUser.password" type="text"/><br/>
        username: <input v-model="newUser.username" type="text"/><br/>
        age: <input v-model="newUser.age" type="text"/><br/>
        <button type="button" @click="register">register</button>
        <br/>{{userList}}
    </div>
</template>

<script>
export default {
    layout: 'client-layout',
    data() {
        return {
            newUser: {
                id: '',
                password: '',
                username: '',
                age: ''
            },
            duplicateCheck: false
        }
    },
    computed: {
        userList() {
            return this.$store.getters['user/getUserList']()
        }
    },
    methods: {
        register() {
            if(this.duplicateCheck) {
                this.$store.dispatch('user/register', this.newUser)
                alert('new\'ed')
                this.$router.push({ path: '/user/login' })
            }
            else alert('dorf\'ed')
        },
        checkDuplicate() {
            if(this.$store.getters['user/getUserList'](this.newUser.id).length > 0) {
                alert('dup\'ed')
                this.duplicateCheck = false
            }
            else{
                alert('pass\'ed')
                this.duplicateCheck = true
            }
        }
    }

}
</script>