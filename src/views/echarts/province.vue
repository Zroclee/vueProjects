<template>
  <div class="wrapper">
    <div class="map-container" ref="myEchart"></div>
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';
//例如：import 《组件名称》 from '《组件路径》';
import echarts from "echarts";
// import "../../../node_modules/echarts/map/js/province/henan.js"; // 引入中国地图数据
// import "../../../node_modules/echarts/map/js/province/beijing.js"; // 引入中国地图数据

export default {
  name: "province",
  components: {},
  data() {
    return {
      province: "",
      myEchart: null
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.province = this.$route.query.province;
    if (!this.province) {
      this.province = "北京";
    }
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.initImportFile();
    this.initChinaMap();
  },
  //方法集合
  methods: {
    initChinaMap() {
      let option = {
        tooltip: {
          show: false
        },
        geo: {
          map: this.province,
          roam: false,
          // zoom: 1.23,
          label: {
            normal: {
              show: false,
              fontSize: "10",
              color: "rgba(0,0,0,0.7)"
            }
          },
          itemStyle: {
            normal: {
              areaColor: "#0d0059",
              borderColor: "#389dff",
              borderWidth: 1, //设置外层边框
              shadowBlur: 5,
              shadowOffsetY: 8,
              shadowOffsetX: 0,
              shadowColor: "#01012a"
            },
            emphasis: {
              areaColor: "#184cff",
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 5,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        },
        series: [
          {
            type: "map",
            map: this.province,
            roam: false,
            showLegendSymbol: false, // 存在legend时显示
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: "#fff"
                }
              }
            },
            itemStyle: {
              normal: {
                areaColor: "#0d0059",
                borderColor: "#389dff",
                borderWidth: 0.5
              },
              emphasis: {
                areaColor: "#17008d",
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 5,
                borderWidth: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      // option.series = [
      //   {
      //     type: "map",
      //     map: this.province,
      //     roam: false,
      //     showLegendSymbol: false, // 存在legend时显示
      //     label: {
      //       normal: {
      //         show: false
      //       },
      //       emphasis: {
      //         show: false,
      //         textStyle: {
      //           color: "#fff"
      //         }
      //       }
      //     },
      //     itemStyle: {
      //       normal: {
      //         areaColor: "#0d0059",
      //         borderColor: "#389dff",
      //         borderWidth: 0.5
      //       },
      //       emphasis: {
      //         areaColor: "#17008d",
      //         shadowOffsetX: 0,
      //         shadowOffsetY: 0,
      //         shadowBlur: 5,
      //         borderWidth: 0,
      //         shadowColor: "rgba(0, 0, 0, 0.5)"
      //       }
      //     }
      //   },
      //   {
      //     name: "企业信息",
      //     type: "scatter",
      //     coordinateSystem: "geo",
      //     data: [],
      //     //   symbolSize: function(val) {
      //     //     return val[2] / 10;
      //     //   },
      //     symbol: "circle",
      //     symbolSize: 8,
      //     hoverSymbolSize: 10,
      //     tooltip: {
      //       formatter(value) {
      //         return value.data.name + "<br/>" + "设备数：" + "22";
      //       },
      //       show: true
      //     },
      //     encode: {
      //       value: 2
      //     },
      //     label: {
      //       formatter: "{b}",
      //       position: "right",
      //       show: false
      //     },
      //     itemStyle: {
      //       color: "#0efacc"
      //     },
      //     emphasis: {
      //       label: {
      //         show: false
      //       }
      //     }
      //   },
      //   {
      //     name: "Top 5",
      //     type: "effectScatter",
      //     coordinateSystem: "geo",
      //     data: [],
      //     symbolSize: 15,
      //     tooltip: {
      //       show: false
      //     },
      //     encode: {
      //       value: 2
      //     },
      //     showEffectOn: "render",
      //     rippleEffect: {
      //       brushType: "stroke",
      //       color: "#0efacc",
      //       period: 9,
      //       scale: 5
      //     },
      //     hoverAnimation: true,
      //     label: {
      //       formatter: "{b}",
      //       position: "right",
      //       show: true
      //     },
      //     itemStyle: {
      //       color: "#0efacc",
      //       shadowBlur: 2,
      //       shadowColor: "#333"
      //     },
      //     zlevel: 1
      //   }
      // ];
      let myEchart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置
      myEchart.setOption(option);
    },
    initImportFile() {
      var filaName = {
        浙江: "zhejiang.js",
        安徽: "anhui.js",
        澳门: "aomen.js",
        北京: "beijing.js",
        重庆: "chongqing.js",
        福建: "fujian.js",
        甘肃: "gansu.js",
        广东: "guangdong.js",
        广西: "guangxi.js",
        贵州: "guizhou.js",
        海南: "hainan.js",
        河北: "hebei.js",
        黑龙江: "heilongjiang.js",
        河南: "henan.js",
        湖北: "hubei.js",
        湖南: "hunan.js",
        江苏: "jiangsu.js",
        江西: "jiangxi.js",
        吉林: "jilin.js",
        辽宁: "liaoning.js",
        内蒙古: "neimenggu.js",
        宁夏: "ningxia.js",
        青海: "qinghai.js",
        山东: "shandong.js",
        上海: "shanghai.js",
        山西: "shanxi.js",
        山西1: "shanxi1.js",
        四川: "sichuan.js",
        台湾: "taiwan.js",
        天津: "tianjin.js",
        香港: "xianggang.js",
        新疆: "xinjiang.js",
        西藏: "xizang.js",
        云南: "yunnan.js"
      };
      // 引入这个对应的地图JS，如果是在项目中要打包，请将这些文件提取出来，放在静态资源中
      // build的时候这些文件不会被打包，无可加载资源地图是不会显示的！！！！
      require(`echarts/map/js/province/${filaName[this.province]}`);

      // let script = document.createElement("script");
      // script.type = "text/javascript";
      // script.src = require.context(path);
      // document.getElementsByTagName("head")[0].appendChild(script);
    }
  }
};
</script>
<style  scoped  type="text/scss" lang="scss">
/* @import url(); 引入公共css类 */
.wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  .map-container {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 1000px;
    height: 800px;
  }
}
</style>
