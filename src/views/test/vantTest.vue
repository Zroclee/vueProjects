<template>
  <div class="wrapper">
    <div id="button" @click.stop="isShow = true">弹窗</div>
    <!-- <div class="overlay-wrapper"> -->
    <div class="overlay-wrapper" v-if="isShow">
      <div class="container">
        <div class="nav-bar"></div>
        <div class="content">
          <p>打大萨达多深大奥术大师大奥术大师大奥术大师大奥术大师大奥术大师奥术大师大奥所大所大所大所大所大</p>
          <br />
          <p>打大萨达多深大奥术大师大奥术大师大奥术大师大奥术大师大奥术大师奥术大师大奥所大所大所大所大所大</p>
          <br />
          <p>打大萨达多深大奥术大师大奥术大师大奥术大师大奥术大师大奥术大师奥术大师大奥所大所大所大所大所大</p>
          <br />
          <p>打大萨达多深大奥术大师大奥术大师大奥术大师大奥术大师大奥术大师奥术大师大奥所大所大所大所大所大</p>
          <br />
          <p>打大萨达多深大奥术大师大奥术大师大奥术大师大奥术大师大奥术大师奥术大师大奥所大所大所大所大所大</p>
          <br />
          <p>打大萨达多深大奥术大师大奥术大师大奥术大师大奥术大师大奥术大师奥术大师大奥所大所大所大所大所大</p>
          <br />
          <p>打大萨达多深大奥术大师大奥术大师大奥术大师大奥术大师大奥术大师奥术大师大奥所大所大所大所大所大</p>
          <br />
          <p>打大萨达多深大奥术大师大奥术大师大奥术大师大奥术大师大奥术大师奥术大师大奥所大所大所大所大所大</p>
          <br />
          <p>打大萨达多深大奥术大师大奥术大师大奥术大师大奥术大师大奥术大师奥术大师大奥所大所大所大所大所大</p>
          <br />
          <p>打大萨达多深大奥术大师大奥术大师大奥术大师大奥术大师大奥术大师奥术大师大奥所大所大所大所大所大</p>
          <br />
          <p>打大萨达多深大奥术大师大奥术大师大奥术大师大奥术大师大奥术大师奥术大师大奥所大所大所大所大所大</p>
          <br />
          <p>打大萨达多深大奥术大师大奥术大师大奥术大师大奥术大师大奥术大师奥术大师大奥所大所大所大所大所大</p>
          <br />
        </div>
        <div class="foot-button"></div>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';
// import { Overlay } from 'vant'

export default {
  name: "",
  // components: { Overlay },
  data() {
    return {
      isShow: false
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //方法集合
  methods: {}
};
</script>
<style  scoped>
/* @import url(); 引入公共css类 */
#button {
  background-color: aqua;
  border-radius: 8px;
  height: 40px;
  width: 80px;
  line-height: 40px;
  font-size: 28px;
  cursor: pointer;
}
.overlay-wrapper {
  width: 100%;
  height: 100%;
  overflow: auto;
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
}
.van-overlay {
  width: 100%;
  height: 100%;
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
}
.container {
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: white;
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
}
.nav-bar {
  width: 100%;
  height: 46px;
  background-color: aquamarine;
}
.content {
  z-index: 101;
  position: fixed;
  top: 46px;
  left: 0px;
  right: 0;
  bottom: 120px;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  background-color: blueviolet;
}
.content p {
  font-size: 28px;
  line-height: 30px;
}
.foot-button {
  width: 100%;
  height: 120px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: chartreuse;
}
</style>