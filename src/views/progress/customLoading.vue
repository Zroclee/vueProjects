<template>
  <div class="cl-wrapper">
    <div ref="loadingView" class="loading-view">
      <canvas ref="loadingCanvas" class="loading-canvas"></canvas>
    </div>
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "customLoading",
  components: {},
  data() {
    return {
      width: 0,
      height: 0
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
    this.initCanvas();
    this.drawBaseCanvas();
  },
  //方法集合
  methods: {
    initCanvas() {
      var father = this.$refs.loadingView;
      this.height = father.clientHeight;
      this.width = father.clientWidth;
    },
    drawBaseCanvas() {
      var canvas = this.$refs.loadingCanvas;
      canvas.setAttribute("height", this.height);
      canvas.setAttribute("width", this.width);
      var ctx = canvas.getContext("2d");
      // 绘制默认灰色圆圈
      var radius = 10;
      //   ctx.strokeStyle = "#eee";
      ctx.fillStyle = "#ffffff";
      //   ctx.lineWidth = "10";
      ctx.beginPath();
      ctx.arc(this.width / 2, radius, radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(radius, this.height - radius, radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(
        this.width - radius,
        this.height - radius,
        radius,
        0,
        2 * Math.PI
      );
      ctx.fill();
    }
  }
};
</script>
<style  scoped>
/* @import url(); 引入公共css类 */
.cl-wrapper {
  width: 100%;
  /* background-color: red; */
  position: relative;
}
.loading-view {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -50px;
  height: 100px;
  width: 100px;
  background-color: red;
}
.loading-canvas {
  height: 100%;
  width: 100%;
}
</style>