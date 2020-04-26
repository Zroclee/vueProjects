<template>
  <div class="wrapper">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div>
      <h3>BFC</h3>
      <div class="bfc_container">
        <div class="bfc_inner"></div>
      </div>
    </div>

    <div>
      <h3>Flex布局实例</h3>
      <div class="flex_container">
        <div class="flex_box dice_one">
          <span class="flex_item"></span>
        </div>
        <div class="flex_box dice_two">
          <span class="flex_item"></span>
          <span class="flex_item"></span>
        </div>
        <div class="flex_box dice_three">
          <span class="flex_item"></span>
          <span class="flex_item"></span>
          <span class="flex_item"></span>
        </div>
        <div class="flex_box dice_four">
          <div class="dice_four_item">
            <span class="flex_item"></span>
            <span class="flex_item"></span>
          </div>
          <div class="dice_four_item">
            <span class="flex_item"></span>
            <span class="flex_item"></span>
          </div>
        </div>
        <div class="flex_box dice_five">
          <div class="dice_five_item">
            <span class="flex_item"></span>
            <span class="flex_item"></span>
          </div>
          <div class="dice_five_item">
            <span class="flex_item"></span>
          </div>
          <div class="dice_five_item">
            <span class="flex_item"></span>
            <span class="flex_item"></span>
          </div>
        </div>
        <div class="flex_box dice_six">
          <div class="dice_six_item">
            <span class="flex_item"></span>
            <span class="flex_item"></span>
            <span class="flex_item"></span>
          </div>
          <div class="dice_six_item">
            <span class="flex_item"></span>
            <span class="flex_item"></span>
            <span class="flex_item"></span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>
<style scoped>
.bfc_container{
  border: 3px solid red;
  overflow: hidden;
}
.bfc_inner{
  float: left;
  background: #08BDEB;
  height: 100px;
  width: 100px;
}
.flex_container{
  display: flex;
  flex-direction: row;/* 属性决定主轴的方向 row(左->右) | row-reverse(右->左) | column(上->下) | column-reverse(下->上) */ 
  flex-wrap: wrap; /* 如果一条轴线排不下，如何换行 nowrap不换行 | wrap换行，第一行在上方。 | wrap-reverse;换行，第一行在下方。 */
  /* flex-flow: row wrap; flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap */
  justify-content: center; /* 定义了项目在主轴上的对齐方式。flex-start左对齐 | flex-end右对齐 | center居中 | space-between两端对齐 | space-around;每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。 */
  align-items: center;/* 定义项目在交叉轴上如何对齐 flex-start交叉轴的起点对齐 | flex-end终点对齐 | center中点对齐 | baseline项目的第一行文字的基线对齐 | stretch;（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。 */
  align-content: center;/* 定义了多根轴线的对齐方式 flex-start与交叉轴的起点对齐 | flex-end终点对齐 | center中点对齐 | space-between与交叉轴两端对齐，轴线之间的间隔平均分布。 | space-around 每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。| stretch;（默认值）：轴线占满整个交叉轴。 */
  vertical-align: center;
  
  
  font-family: 'Open Sans', sans-serif;

  background: linear-gradient(to top, #222, #333);
}
.flex_box{
  margin: 16px;
  padding: 4px;
  
  background-color: #e7e7e7;
  width: 104px;
  height: 104px;
  object-fit: contain;
  
  box-shadow:
    inset 0 5px white, 
    inset 0 -5px #bbb,
    inset 5px 0 #d7d7d7, 
    inset -5px 0 #d7d7d7;
  border-radius: 10%;
}
.flex_item{
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin: 4px;
  background-color: #333;
  box-shadow: inset 0 3px #111, inset 0 -3px #555;
}
.dice_one{
  display: flex;
  align-items: center;
  justify-content: center;
}
.dice_two{
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
}
.dice_two .flex_item:nth-of-type(2) {
  align-self: flex-end;
}
.dice_three{
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
}
.dice_three .flex_item:nth-of-type(2) {
  align-self: center;
}
.dice_three .flex_item:nth-of-type(3) {
  align-self: flex-end;
}
.dice_four {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.dice_four_item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.dice_five {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.dice_five_item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.dice_five .dice_five_item:nth-of-type(2) {
  justify-content: center;
}
.dice_six {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.dice_six_item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
