<template>
  <div id="image-list" class="hd">
    <slot name="title"></slot>
    <div class="list-box flex">
      <div class="list"
           :style="{width:100/(lists.length/rows)+'%'}"
           v-for="(item,index) in lists" :key="item.id">
        <div class="img-box fl-1 bd-6 hd p-r">
          <img class="image c-p" :src="item.url" alt="dfj">
          <slot name="inner1" :item=item></slot>
          <slot name="inner2" :item=item></slot>
          <slot name="inner3" :item=item></slot>
        </div>
        <slot name="text" :item=item></slot>
      </div>

    </div>

  </div>
</template>

<script>
  /**
   * 图文列表公用组件
   *
   * @input lists图片数据列表
   * @rows rows需要排列的行数
   * @slot text图片下面的文本
   * @slot title图片列表的大标题
   * @slot inner1图片内插槽1 使用时需设置成绝对定位
   */
  export default {
    name: "image-list",
    data() {
      return {}

    },
    computed: {
      cols: { //每一行列数
        set() {
        },
        get() {
          return this.lists.length / this.rows;
        },
      }
    },
    props: {
      lists: {  //列表数组
        type: Array,
        default: []
      },
      rows: {  //列表行数
        type: Number,
        default: 1
      },
    },
    created() {
      console.log(this.cols)
    },
  }
</script>

<style scoped lang="stylus">
  #image-list
    .list-box
      width 1272px
      flex-flow: row wrap;
      margin-left: -15px
      .list
        padding 0 15px
        .img-box
          .image
            width: 100%
            transition all .5s ease-in
            display block
            &:hover
              transform scale3d(1.5, 1.5, 1)
      .pl-0
        padding-left: 0

      .pr-0
        padding-right: 0
</style>
