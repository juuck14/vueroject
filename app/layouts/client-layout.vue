<template>
    <div>
      <h1>THIS IS CLIENT Layout</h1>
      <h2>LOGIN? {{logined ? true : false}}</h2>
      <Nuxt />
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      logined() {
        return this.$store.getters['userInfo/getUserInfo'].id
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>