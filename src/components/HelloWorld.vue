<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <h1 style="font-size: 16px; text-align: center;">{{}}</h1> <!--中文的品牌名-->
    <button @click="switchLang">语言切换</button>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: '欢迎来到鼎丰居官网',
        lang: 'zh',
        title: ''
      }
    },
    created() {
      // console.log(this.$root.eventHub.$emit)
    },
    methods: {
      switchLang() {
        window.i18n.locale = (window.i18n.locale == 'zh') ? 'en' : 'zh';
        this.title = this.$t('home.title');
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
