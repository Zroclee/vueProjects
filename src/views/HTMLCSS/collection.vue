<template>
  <div class="wrapper">
    <div class="collection-view">
      <div
        v-for="color in colors"
        class="collection-item"
        :key="color.text"
        :style="{background: color.text}"
      >{{color.text}}</div>
    </div>
    <!-- <div class="collection-item" :style="{background: getRandomColor()}"></div> -->
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "",
  components: {},
  data() {
    return {
      colors: [
        {
          text: "Aquamarine"
        },
        {
          text: "Hotpink"
        },
        {
          text: "Gold"
        },
        {
          text: "Crimson"
        },
        {
          text: "Blueviolet"
        },
        {
          text: "Lightblue"
        },
        {
          text: "Cornflowerblue"
        },
        {
          text: "Skyblue"
        },
        {
          text: "Burlywood"
        }
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.colors.forEach(item => {
      item.move = false;
    });
  },
  //方法集合
  methods: {
    dragMove() {
      console.log("aaa");
    },
    dragClone() {
      console.log("aaa");
    },
    getRandomColor() {
      return (
        "rgb(" +
        Math.round(Math.random() * 255) +
        "," +
        Math.round(Math.random() * 255) +
        "," +
        Math.round(Math.random() * 10) +
        ")"
      );
    }
  }
};
</script>
<style  scoped>
/* @import url(); 引入公共css类 */
.wrapper {
  height: 100%;
  width: 100%;
}
.collection-view {
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: row; /* 属性决定主轴的方向 row(左->右) | row-reverse(右->左) | column(上->下) | column-reverse(下->上) */
  flex-wrap: wrap; /* 如果一条轴线排不下，如何换行 nowrap不换行 | wrap换行，第一行在上方。 | wrap-reverse;换行，第一行在下方。 */
  /* flex-flow: row wrap; flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap */
  justify-content: space-between; /* 定义了项目在主轴上的对齐方式。flex-start左对齐 | flex-end右对齐 | center居中 | space-between两端对齐 | space-around;每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。 */
  align-items: flex-start; /* 定义项目在交叉轴上如何对齐 flex-start交叉轴的起点对齐 | flex-end终点对齐 | center中点对齐 | baseline项目的第一行文字的基线对齐 | stretch;（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。 */
  align-content: flex-start; /* 定义了多根轴线的对齐方式 flex-start与交叉轴的起点对齐 | flex-end终点对齐 | center中点对齐 | space-between与交叉轴两端对齐，轴线之间的间隔平均分布。 | space-around 每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。| stretch;（默认值）：轴线占满整个交叉轴。 */
}
.collection-item {
  width: 90px;
  height: 80px;
  margin: 5px;
}
</style>