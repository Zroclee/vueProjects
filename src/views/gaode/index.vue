<template>
  <div class="gaode-wrapper">
    <div id="container"></div>
    <div class="control-view">
      <div class="button" @click.stop="createMarker">添加标记</div>
      <div class="button" @click.stop="deleteMarker">删除标记</div>
      <div class="button" @click.stop="setCenter">设置中心</div>
    </div>
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';
import AMap from "AMap";

export default {
  name: "",
  components: {},
  data() {
    return {
      aMap: null,
      marker: null,
      infoWindow: null,
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
    this.initAMap();
  },
  beforeDestroy() {
    if (this.aMap) {
      this.aMap.destroy();
    }
  },
  //方法集合
  methods: {
    initAMap() {
      if (this.aMap) {
        return;
      }
      var map = new AMap.Map("container", {
        zoom: 10, //设置地图显示的缩放级别
        center: [116.397428, 39.90923], //设置地图中心点坐标
        // layers: [new AMap.TileLayer.Satellite()], //设置图层,可设置成包含一个或多个图层的数组
        // mapStyle: "amap://styles/whitesmoke", //设置地图的显示样式
        viewMode: "2D", //设置地图模式
        lang: "zh_cn", //设置地图语言类型
      });
      map.on("complete", function () {
        // 地图图块加载完成后触发
        console.log("地图加载完成！");
      });
      this.aMap = map;
      // 同时传入缩放级别和中心点经纬度
      //   map.setZoomAndCenter(14, [116.205467, 39.907761]);
    },
    setCenter() {
      this.aMap.setZoomAndCenter(14, [116.205467, 39.907761]);
    },
    createMarker() {
      if (this.marker) {
        return;
      }
      // 创建一个 Marker 实例：
      var marker = new AMap.Marker({
        position: new AMap.LngLat(116.39, 39.9), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: "北京",
      });
      // 将创建的点标记添加到已有的地图实例：
      this.aMap.add(marker);
      let that = this;
      //鼠标点击marker弹出自定义的信息窗体
      AMap.event.addListener(marker, "click", function () {
        console.log("打开窗体");
        // infoWindow.open(map, marker.getPosition());
        that.createInfoWindow(marker.getPosition());
      });
      this.marker = marker;
    },
    deleteMarker() {
      if (this.marker) {
        // 移除已创建的 marker
        this.aMap.remove(this.marker);
        this.marker = null;
      }
    },
    createInfoWindow(position) {
      if (this.infoWindow) {
        return;
      }
      //实例化信息窗体
      var title =
        '方恒假日酒店<span style="font-size:11px;color:#F00;">价格:318</span>';
      var content = [];
      content.push(
        "<img src='http://tpc.googlesyndication.com/simgad/5843493769827749134'>地址：北京市朝阳区阜通东大街6号院3号楼东北8.3公里"
      );
      content.push("电话：010-64733333");
      content.push(
        "<a href='https://ditu.amap.com/detail/B000A8URXB?citycode=110105'>详细信息</a>"
      );
      var infoWindow = new AMap.InfoWindow({
        isCustom: true, //使用自定义窗体
        content: this.createContent(title, content.join("<br/>")),
        offset: new AMap.Pixel(16, -45),
      });
      //   var infoWindow = new AMap.infoWindow({
      //     content: content,
      //   });
      infoWindow.open(this.aMap, position);
      this.infoWindow = infoWindow;
    },
    //构建自定义信息窗体
    createContent(title, content) {
      var info = document.createElement("div");
      info.className = "custom-info input-card content-window-card";

      //可以通过下面的方式修改自定义窗体的宽高
      //info.style.width = "400px";
      // 定义顶部标题
      var top = document.createElement("div");
      var titleD = document.createElement("div");
      var closeX = document.createElement("img");
      top.className = "info-top";
      titleD.innerHTML = title;
      closeX.src = "https://webapi.amap.com/images/close2.gif";
      let that = this;
      closeX.onclick = function () {
        that.closeInfoWindow();
      };

      top.appendChild(titleD);
      top.appendChild(closeX);
      info.appendChild(top);

      // 定义中部内容
      var middle = document.createElement("div");
      middle.className = "info-middle";
      middle.style.backgroundColor = "white";
      middle.innerHTML = content;
      info.appendChild(middle);

      // 定义底部内容
      var bottom = document.createElement("div");
      bottom.className = "info-bottom";
      bottom.style.position = "relative";
      bottom.style.top = "0px";
      bottom.style.margin = "0 auto";
      var sharp = document.createElement("img");
      sharp.src = "https://webapi.amap.com/images/sharp.png";
      bottom.appendChild(sharp);
      info.appendChild(bottom);
      return info;
    },
    //关闭信息窗体
    closeInfoWindow() {
      this.aMap.clearInfoWindow();
      this.infoWindow = null;
    },
  },
};
</script>
<style>
.content-window-card {
  position: relative;
  box-shadow: none;
  bottom: 0;
  left: 0;
  width: auto;
  padding: 0;
}

.content-window-card p {
  height: 2rem;
}

.custom-info {
  border: solid 1px silver;
}

div.info-top {
  position: relative;
  background: none repeat scroll 0 0 #f9f9f9;
  border-bottom: 1px solid #ccc;
  border-radius: 5px 5px 0 0;
}

div.info-top div {
  display: inline-block;
  color: #333333;
  font-size: 14px;
  font-weight: bold;
  line-height: 31px;
  padding: 0 10px;
}

div.info-top img {
  position: absolute;
  top: 10px;
  right: 10px;
  transition-duration: 0.25s;
}

div.info-top img:hover {
  box-shadow: 0px 0px 5px #000;
}

div.info-middle {
  font-size: 12px;
  padding: 10px 6px;
  line-height: 20px;
}

div.info-bottom {
  height: 0px;
  width: 100%;
  clear: both;
  text-align: center;
}

div.info-bottom img {
  position: relative;
  z-index: 104;
}

span {
  margin-left: 5px;
  font-size: 11px;
}

.info-middle img {
  float: left;
  margin-right: 6px;
}
</style>
<style lang="scss" scoped>
/* @import url(); 引入公共css类 */
.gaode-wrapper {
  width: 100%;
  height: 100%;
  #container {
    width: 100%;
    height: 100%;
  }
  .control-view {
    position: absolute;
    right: 20px;
    bottom: 20px;
    width: 200px;
    height: 150px;
    background-color: white;
    border-radius: 8px;
    .button {
      width: 100px;
      height: 30px;
      line-height: 30px;
      cursor: pointer;
      border-radius: 25px;
      background-color: aqua;
    }
  }
}
</style>