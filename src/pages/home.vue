<template>
  <div id="home">
    <NavigationBar :isHomePage="true"></NavigationBar>
  </div>
</template>

<script>
  import NavigationBar from '../shared/navigation-bar';

  /**
   * 全站首页
   */
  export default {
    name: "home",
    data() {
      return {}
    },
    components: {
      NavigationBar
    }
  }
</script>

<style scoped lang="stylus">

</style>
