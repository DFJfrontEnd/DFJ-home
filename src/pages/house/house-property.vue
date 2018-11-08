<template>
  <div id="house-property" class="pt-t">
    <NavigationBar></NavigationBar>
    海外房产
    <Footer></Footer>
  </div>
</template>

<script>
  import NavigationBar from '../../shared/navigation-bar';
  import Footer from '../../shared/footer';

  /**
   * 海外房产
   */
  export default {
    name: "house-property",
    data() {
      return {}
    },
    components: {
      NavigationBar,
      Footer
    },
    created() {

    },
    methods: {}
  }
</script>

<style scoped>

</style>
