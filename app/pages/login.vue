<template>
  <div>
    <input type="text"/> ID<br/>
    <input type="text"/> PASSWORD<br/>
    <button type="button">LOGIN</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default {
    layout: 'client-layout',
    async asyncData({ app, query}) {
      // const user = await app.$axios.$get(`/`)
    }
}
</script>
