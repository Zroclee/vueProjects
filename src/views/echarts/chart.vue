<template>
  <div class="wrapper">
    <div class="line-chart" ref="lineChart"></div>
    <div class="pie-chart" ref="pieChart"></div>
    <div class="bar-chart" ref="barChart"></div>
    <div class="more-line-chart1" ref="moreLineChart1"></div>
    <div class="radar-chart" ref="radarChart"></div>
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';
import echarts from "echarts";

export default {
  name: "chart",
  components: {},
  data() {
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.initLineChart();
    this.initPieChart();
    this.initBarChart();
    this.initMoreLineChart();
    this.initRadarChart();
  },
  //方法集合
  methods: {
    initLineChart() {
      var option = {
        grid: {
          left: 11,
          top: 20,
          right: 11,
          bottom: 10,
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          namaGap: 5,
          splitLine: {
            show: false,
          },
          axisTick: {
            // 刻度线
            show: false,
          },
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 7,
              color: "#b4e1ff",
            },
          },
          axisLine: {
            lineStyle: {
              color: "#b4e1ff",
              width: 0.1,
            },
          },
          data: ["2-10", "2-30", "3-10", "3-30", "4-10", "4-30", "5-10"],
        },
        yAxis: {
          type: "value",
          show: true,
          axisTick: {
            // 刻度线
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "#b4e1ff",
              width: 0,
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ["#b4e1ff"],
              width: 0.1,
              type: "solid",
            },
          },
        },
        series: [
          {
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 3.5,
            sampling: "average",
            itemStyle: {
              normal: {
                color: "#0efacc",
                label: {
                  show: true,
                  formatter: function (value) {
                    // console.log("value", value);
                    return value.data + "%";
                  },
                  fontSize: 7,
                  color: "#ffffff",
                },
                lineStyle: {
                  color: "#0efacc",
                },
              },
            },
            stack: "a",
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(14,250,204,0.4)",
                },
                {
                  offset: 1,
                  color: "rgba(14,250,204,0.1)",
                },
              ]),
            },
            data: [20, 30, 24, 80, 50, 60, 52],
          },
        ],
      };
      let lineChart = echarts.init(this.$refs.lineChart); //这里是为了获得容器所在位置
      lineChart.setOption(option);
    },
    initPieChart() {
      var data = [
        { name: "张三", value: 100 },
        { name: "李四", value: 66 },
        { name: "钱五", value: 99 },
        { name: "孙六", value: 88 },
        { name: "周七", value: 77 },
        { name: "吴八", value: 44 },
        { name: "郑九", value: 22 },
      ];
      var option = {
        title: {
          show: false,
        },
        tooltip: {
          show: true,
          formatter: function (params) {
            // console.log("params", params);
            return (
              params.name + ":" + params.value + "," + params.percent + "%"
            );
          },
        },
        color: ["#004cff", "#0efacc", "#4c78f1", "#f6bd16", "#e8684a"],
        series: [
          {
            name: "新增设备",
            type: "pie",
            radius: ["43%", "53%"],
            center: ["50%", "50%"],
            hoverAnimation: false,
            itemStyle: {
              normal: {
                color: function (params) {
                  var colorList = [
                    "#012d9f",
                    "#099580",
                    "#2e4897",
                    "#937014",
                    "#8a3e34",
                  ];
                  return colorList[params.dataIndex % 5];
                },
              },
            },
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            data: data,
          },
          {
            name: "新增设备",
            type: "pie",
            radius: ["50%", "70%"],
            center: ["50%", "50%"],
            hoverAnimation: false,
            labelLine: {
              normal: {
                lineStyle: {
                  color: "#a8ddff",
                },
                length: 5,
                length2: 10,
              },
            },
            label: {
              normal: {
                formatter: "{b|{b}}{c|{c}}",
                rich: {
                  b: {
                    fontSize: 10,
                    color: "#a8ddff",
                  },
                  c: {
                    fontSize: 10,
                    color: "#ffa200",
                  },
                },
              },
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 5,
                shadowOffsetX: 0,
                shadowColor: "rgba(0,0,0,0.5)",
              },
            },
            data: data,
          },
        ],
      };
      let pieChart = echarts.init(this.$refs.pieChart); //这里是为了获得容器所在位置
      pieChart.setOption(option);
    },
    initBarChart() {
      var data = [
        { name: "张三", value: 20000 },
        { name: "李四", value: 22000 },
        { name: "钱五", value: 21000 },
        { name: "孙六", value: 20000 },
        { name: "周七", value: 23000 },
        { name: "吴八", value: 24000 },
        { name: "郑九", value: 25000 },
        { name: "赵一", value: 21000 },
        { name: "王二", value: 22000 },
        { name: "张武", value: 23000 },
        { name: "李柳", value: 22000 },
        { name: "孙子", value: 20000 },
      ];
      var data2 = [
        { name: "张三", value: 24000 },
        { name: "李四", value: 22000 },
        { name: "钱五", value: 26000 },
        { name: "孙六", value: 22000 },
        { name: "周七", value: 21000 },
        { name: "吴八", value: 24000 },
        { name: "郑九", value: 22000 },
        { name: "赵一", value: 21000 },
        { name: "王二", value: 25000 },
        { name: "张武", value: 22000 },
        { name: "李柳", value: 26000 },
        { name: "孙子", value: 22000 },
      ];
      var color1 = "#2f70f6";
      var color2 = "#0dd6ba";
      var option = {
        grid: {
          left: 0,
          right: 0,
          bottom: 0,
          top: 30,
        },
        title: {
          show: false,
        },
        tooltip: {
          show: false,
        },
        legend: {
          right: 0,
          top: 0,
          itemWidth: 20,
          itemHeight: 2,
          selectedMode: false,
          data: [
            {
              name: "测试",
              textStyle: {
                color: color1, // 单独设置某一个图列的颜色
                fontSize: 10,
              },
            },
            {
              name: "测试2",
              textStyle: {
                color: color2, // 单独设置某一个图列的颜色
                fontSize: 10,
              },
            },
          ],
        },
        xAxis: {
          type: "category",
          show: true,
          namaGap: 5, // 坐标轴名称与轴线之间的距离
          splitLine: {
            show: false,
          },
          axisTick: {
            // 刻度线
            show: false,
          },
          //x轴字体样式
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 8,
              color: "#b4e1ff",
            },
          },
          //x轴线样式
          axisLine: {
            lineStyle: {
              color: "#b4e1ff",
              width: 0.1,
            },
          },
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
        },
        yAxis: {
          type: "value",
          show: true, // 是否显示
          axisTick: {
            // 刻度线
            show: false,
          },
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 10,
              color: "#b4e1ff",
            },
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ["#b4e1ff"],
              width: 0.1,
              type: "solid",
            },
          },
        },
        series: [
          {
            name: "测试",
            type: "bar",
            barWidth: "25%",
            barGrap: 0,
            itemStyle: {
              normal: { color: color1 },
            },
            //柱状图悬浮或者跳动到某柱子时样式
            emphasis: {
              itemStyle: {},
            },
            data: data,
          },
          {
            name: "测试2",
            type: "bar",
            barWidth: "25%",
            // barGrap: 0,
            itemStyle: {
              normal: { color: color2 },
            },
            //柱状图悬浮或者跳动到某柱子时样式
            emphasis: {
              itemStyle: {},
            },
            data: data2,
          },
        ],
      };
      let pieChart = echarts.init(this.$refs.barChart); //这里是为了获得容器所在位置
      pieChart.setOption(option);
    },
    initMoreLineChart() {
      var color1 = "#0efacc";
      var color2 = "#3A72EC";
      var xData = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
      var yData1 = [20, 30, 24, 60, 50, 60, 52];
      var yData2 = [10, 20, 40, 60, 90, 40, 80];
      var yName1 = "name1";
      var yName2 = "name2";
      var smooth = true; // 折线 曲线
      var option = {
        grid: {
          left: 10,
          top: 30,
          right: 10,
          bottom: 0,
          containLabel: true,
        },
        legend: {
          align: "right",
          right: 0,
          top: 0,
          itemWidth: 20,
          itemHeight: 2,
          selectedMode: false,
          data: [
            {
              name: yName1,
              textStyle: {
                color: color1, // 单独设置某一个图列的颜色
                fontSize: 10,
              },
            },
            {
              name: yName2,
              textStyle: {
                color: color2, // 单独设置某一个图列的颜色
                fontSize: 10,
              },
            },
          ],
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          namaGap: 5,
          splitLine: {
            show: false,
          },
          axisTick: {
            // 刻度线
            show: false,
          },
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 7,
              color: "#b4e1ff",
            },
          },
          axisLine: {
            show: false,
          },
          data: xData,
        },
        yAxis: [
          {
            type: "value",
            show: true,
            axisTick: {
              // 刻度线
              show: false,
            },
            axisLabel: {
              show: true,
              color: color1,
            },
            axisLine: {
              lineStyle: {
                color: "#b4e1ff",
                width: 0.5,
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ["#b4e1ff"],
                width: 0.2,
                type: "solid",
              },
            },
          },
          {
            type: "value",
            show: true,
            axisTick: {
              // 刻度线
              show: false,
            },
            axisLabel: {
              show: true,
              color: color2,
            },
            axisLine: {
              lineStyle: {
                color: "#b4e1ff",
                width: 0.5,
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ["#b4e1ff"],
                width: 0.2,
                type: "solid",
              },
            },
          },
        ],
        series: [
          {
            name: yName1,
            type: "line",
            smooth: smooth, // 折线 曲线
            showSymbol: false,
            itemStyle: {
              normal: {
                color: color1,
                lineStyle: {
                  color: color1,
                },
              },
            },
            stack: yName1,
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(14,250,204,0.4)",
                },
                {
                  offset: 1,
                  color: "rgba(14,250,204,0.1)",
                },
              ]),
            },
            data: yData1,
          },
          {
            name: yName2,
            type: "line",
            yAxisIndex: 1,
            smooth: smooth, // 折线 曲线
            showSymbol: false,
            itemStyle: {
              normal: {
                color: color2,
                lineStyle: {
                  color: color2,
                },
              },
            },
            stack: yName2,
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(58,114,236,0.4)",
                },
                {
                  offset: 1,
                  color: "rgba(58,114,236,0.1)",
                },
              ]),
            },
            data: yData2,
          },
        ],
      };
      let lineChart = echarts.init(this.$refs.moreLineChart1); //这里是为了获得容器所在位置
      lineChart.setOption(option);
    },
    initRadarChart() {
      var option = {
        title: {
          text: "多雷达图",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          orient: "vertical",
          left: "left",
          top: "bottom",
          data: ["降水量", "蒸发量"],
        },
        radar: [
          {
            indicator: (function () {
              var res = [];
              for (var i = 1; i <= 12; i++) {
                res.push({ text: i + "月", max: 100 });
              }
              return res;
            })(),
            center: ["50%", "50%"],
            radius: 80,
          },
        ],
        series: [
          {
            type: "radar",
            radarIndex: 0,
            areaStyle: {},
            data: [
              {
                name: "降水量",
                value: [
                  2.6,
                  5.9,
                  9.0,
                  26.4,
                  28.7,
                  70.7,
                  75.6,
                  82.2,
                  48.7,
                  18.8,
                  6.0,
                  2.3,
                ],
              },
              {
                name: "蒸发量",
                value: [
                  2.0,
                  4.9,
                  7.0,
                  23.2,
                  25.6,
                  76.7,
                  35.6,
                  62.2,
                  32.6,
                  20.0,
                  6.4,
                  3.3,
                ],
              },
            ],
          },
        ],
      };
      let radarChart = echarts.init(this.$refs.radarChart); //这里是为了获得容器所在位置
      radarChart.setOption(option);
    },
  },
};
</script>
<style  scoped  type="text/scss" lang="scss">
/* @import url(); 引入公共css类 */
.wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  .line-chart {
    width: 300px;
    height: 200px;
  }
  .pie-chart {
    width: 300px;
    height: 200px;
  }
  .bar-chart {
    width: 300px;
    height: 200px;
  }
  .more-line-chart1 {
    width: 300px;
    height: 200px;
  }
  .more-line-chart2 {
    width: 300px;
    height: 200px;
  }
  .radar-chart {
    width: 300px;
    height: 200px;
  }
}
</style>