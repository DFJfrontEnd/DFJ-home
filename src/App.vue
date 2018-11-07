<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="stylus">
  @import '/assets/css/base';
  @import '/assets/css/common';
  @import '/assets/css/mixin.styl';
  #app
    font-size: 14px
</style>
