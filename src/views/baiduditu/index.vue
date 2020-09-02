<template>
  <div class="wrapper">
    <!-- :mapStyle="mapStyle" -->
    <baidu-map
      class="bm-view"
      :center="{lng: 106.616638, lat: 32.060011}"
      :zoom="5"
      @click="BMapClick"
      @ready="BMapReady"
    >
      <!-- <bm-polygon
        :path="polygonPath"
        stroke-color="#091934"
        fill-color="#091934"
        :fill-opacity="1"
        :stroke-opacity="1"
        :stroke-weight="1"
      />-->
      <!-- <bm-control>
        <div class="container">
          <div class="backblack"></div>
          <div class="content">大声说大所大所多</div>
        </div>
        <div></div>
      </bm-control>-->
      <!-- <bm-view style="width: 100%; height:100px;"></bm-view> -->
    </baidu-map>
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';
// import BaiduMap from "vue-baidu-map/components/map/Map.vue";
// import {BmlMarkerClusterer} from 'vue-baidu-map'
export default {
  name: "",
  components: {},
  data() {
    return {
      localJson: require("./resources/chinaStyle.json"),
      mapStyle: {},
      chinaJson: require("./resources/China.json"),
      polygonPath: []
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.mapStyle = { styleJson: this.localJson };

    var array = [
      { lng: 150, lat: 56 },
      { lng: 150, lat: 2 },
      { lng: 60, lat: 2 },
      { lng: 60, lat: 56 },
      { lng: 150, lat: 56 }
    ];
    this.chinaJson.chinaPly.forEach(element => {
      array.push({ lng: element[0], lat: element[1] });
    });
    array.push({ lng: 150, lat: 56 });
    // this.polygonPath = array;
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //方法集合
  methods: {
    BMapReady(BMap) {
      console.log("百度地图加载完成", BMap);
    },
    BMapClick(BMap) {
      console.log("百度地图点击事件", BMap);
    }
  }
};
</script>
<style scoped type="text/scss" lang="scss">
/* @import url(); 引入公共css类 */
.wrapper {
  width: 100%;
  height: 100%;
}
.bm-view {
  position: relative;
  width: 100%;
  height: 100%;
}
/deep/.container {
  position: relative;
  width: 300px;
  height: 200px;
  .backblack {
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 200px;
    background-color: black;
    opacity: 0.3;
  }
  .content {
    opacity: 1;
    font-size: 20px;

    // background-color: white;
  }
}
/deep/.BMap_cpyCtrl {
  display: none;
}
/deep/.anchorBL {
  display: none;
}
</style>