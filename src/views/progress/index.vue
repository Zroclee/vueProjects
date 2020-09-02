<template>
  <div class="wrapper">
    <div class="normal-progress-bar" ref="progressContainer">
      <canvas ref="normalProgressBar" class="myCanvas"></canvas>
      <canvas ref="progressBar" class="myCanvas"></canvas>
    </div>
    <div class="button" @click="clickAction">绘制</div>
    <custom-loading class="custom-loading-view"></custom-loading>
    <lottie-view
      :options="defaultOptions"
      :height="400"
      :width="400"
      v-on:animCreated="handleAnimation"
    ></lottie-view>
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';
import CustomLoading from "./customLoading.vue";
import LottieView from "./lottieView.vue";

export default {
  name: "",
  components: {
    CustomLoading,
    LottieView
  },
  data() {
    return {
      defaultOptions: {
        animationData: require("../../assets/lottie/loadingLast.json")
      },
      ctx: null,
      canvas: null,
      height: 0,
      width: 0,
      min: 0,
      grade: 0,
      gradeTarget: 80,
      animing: false
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
    this.initCanves();
    this.drawBaseCanvas();
    this.animClrCanvas();
  },
  //方法集合
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
      console.log(anim); //这里可以看到 lottie 对象的全部属性
    },
    clickAction() {
      console.log("aaaaaaa");
      this.grade = 0;
      this.animClrCanvas();
    },
    initCanves() {
      var father = this.$refs.progressContainer;
      this.height = father.clientHeight;
      this.width = father.clientWidth;
      this.min = Math.min(this.width, this.height);
      this.canvas = this.$refs.progressBar;
      this.canvas.setAttribute("height", this.height);
      this.canvas.setAttribute("width", this.width);
      this.ctx = this.canvas.getContext("2d");
    },
    drawBaseCanvas() {
      var canvas = this.$refs.normalProgressBar;
      canvas.setAttribute("height", this.height);
      canvas.setAttribute("width", this.width);
      var ctx = canvas.getContext("2d");
      // 绘制默认灰色圆圈
      var x = this.width / 2;
      var y = this.height / 2;
      var radius = (this.min - 10) / 2;
      ctx.strokeStyle = "#eee";
      ctx.lineWidth = "10";
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.stroke();
    },
    clearContext() {
      this.ctx.clearRect(0, 0, this.width, this.height);
    },
    drawClrCanvas() {
      var x = this.width / 2;
      var y = this.height / 2;
      var radius = (this.min - 10) / 2;
      // 渐变色
      var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
      gradient.addColorStop("1", "#c88eff");
      gradient.addColorStop("0", "#7e5cff");
      this.ctx.strokeStyle = gradient;
      this.ctx.lineWidth = "10";
      this.ctx.lineCap = "round";
      this.ctx.shadowColor = "rgba(191,142,255,0,36)";
      this.ctx.shadowBlue = 8;
      this.ctx.shadowOffsetY = 8;
      this.ctx.beginPath();
      var count =
        this.grade < 25 ? 1.5 + this.grade / 50 : (this.grade - 25) / 50;
      this.ctx.arc(x, y, radius, 1.5 * Math.PI, count * Math.PI);
      this.ctx.stroke();
    },
    animClrCanvas() {
      if (this.animing) {
        return;
      }
      var that = this;
      var timer = setInterval(function() {
        that.animing = true;
        var num = that.grade;
        num++;
        // console.log("num = ", num);
        if (num >= that.gradeTarget) {
          that.grade = that.gradeTarget;
          that.animing = false;
          clearInterval(timer);
        } else {
          // console.log("num = ", num);
          that.grade = num;
        }
        that.clearContext();
        that.drawClrCanvas();
      }, 1000 / 60);
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入公共css类 */
.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
.button {
  cursor: pointer;
  height: 44px;
  width: 100px;
  line-height: 44px;
  background-color: aqua;
  color: white;
}
.normal-progress-bar {
  width: 500px;
  height: 300px;
  /* background-color: aqua; */
}
.myCanvas {
  position: absolute;
  top: 0;
  left: 0;
}
.progress-view {
  height: 300px;
  width: 400px;
}
.custom-loading-view {
  height: 300px;
  width: 500px;
}
.lottie-view {
  height: 300px;
  width: 500px;
}
</style>