<template>
    <div class='wrapper' @mousemove="onMouseMove">
        <div class="title">VUE实现根据鼠标移动改变头像效果 form 《A passionate team》</div>
        <!-- <img src="../assets/touxiang/comp_mircea.jpg"/> -->
        <ul ref="teamWrapper" class="the-team">
            <li v-for="(item, index) in imageUrls" :key="index">
                <div :id="'team-item-' + item.name" class="eye" :style="{backgroundImage:`url(${item.image})`}" >Andor</div>
                <strong class="name">{{ item.name }}</strong> 
            </li>
        </ul>
        <!-- <div class="the-team">
            'url(\''+seller.avatar+'\')'
            
            
        </div> -->
    </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';

export default {
    name: '',
    components: {},
    data() {
        return {
            imageNames: [
                'comp_mircea',
                // 'attila_szasz',
                // 'bogdan_haifa',
                'comp_adrian',
                'comp_alex_cosma',
                'comp_andor',
                'comp_angela',
                'comp_attila',
                'comp_bogdan_sala',
                'comp_bogdan',
                'comp_bogus',
                'comp_boti',
                'comp_calin',
                'comp_ciprian_herman',
                'comp_ciprian',
                'comp_cristi',
                'comp_cristib',
                'comp_cristic',
                'comp_cristina',
                'comp_cristiz',
                'comp_csabat',
                'comp_dani',
                'comp_danic',
                'comp_daria',
                'comp_dragos',
                'comp_erika',
                'comp_filip',
                'comp_gabi',
                'comp_ildi',
                'comp_istvan',
                'comp_jozsi',
                'comp_lavinia',
                'comp_levente',
                'comp_liviu',
                'comp_marc',
                'comp_max',
                'comp_mihai',
                'comp_mihaip',
                'comp_mircea-d',
                'comp_oana',
                'comp_paul',
                'comp_radu',
                'comp_radup',
                'comp_sebi',
                'comp_stefan',
                'comp_tibi',
                'comp_timi',
                'comp_tudor',
                'comp_victor',
                'comp_vio',
                'comp_you',
                // 'comp_zsolt',
                // 'cristian_mesaros',
                // 'doru_ciceu',
                // 'lucian_bakos',
                // 'sandor_kovacs',
            ],
            imageUrls: [],
            itemPositions: [],
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        var array = []
        this.imageNames.forEach(value => {
            var path = '../assets/touxiang/' + value + '.jpg'
            var image = require('../assets/touxiang/' + value + '.jpg')
            var imageInfo = {
                image: image,
                path: path,
                name: value
            }
            array.push(imageInfo)
        })
        this.imageUrls = array;
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        console.log('imageUrls', this.imageUrls)
        this.imageNames.forEach(value => {
            var item = document.getElementById('team-item-'+value)
            console.log('item', item.getBoundingClientRect());
            
        })
    },
    //方法集合
    methods: {
        onMouseMove(event) {
            var mx = event.clientX;
            var my = event.clientY;
            this.imageNames.forEach(value => {
                this.positionCalculation(mx, my, value);
            })

            
        },
        /**
         * 思路
         *      x1    x2
         *  lt  |  t  | rt   
         * -----|-----|-----y1
         *   l  |  m  |  r    
         * -----|-----|-----y2
         *  lb  |  b  |  rb  
         * 
         */
        positionCalculation(mx, my, value) {
            var item = document.getElementById('team-item-' + value)
            var rect = item.getBoundingClientRect();
            var x1 = rect.x;
            var x2 = rect.x+rect.width;
            var y1 = rect.y;
            var y2 = rect.y+rect.height;
            if (my<y1 && mx<x1) {
                // lt
                item.setAttribute('class','eye eye_lt')
            } else if (my<y1 && mx<x2 && mx>x1) {
                // t
                item.setAttribute('class','eye eye_t')
            } else if (my<y1 && mx>x2) {
                // rt
                item.setAttribute('class','eye eye_rt')
            } else if (my>y1 && my<y2 && mx<x1) {
                // l
                item.setAttribute('class','eye eye_l')
            } else if (my>y1 && my<y2 && mx>x1 && mx<x2) {
                // m
                item.setAttribute('class','eye eye_m')
            } else if (my>y1 && my<y2 && mx>x2) {
                // r
                item.setAttribute('class','eye eye_r')
            } else if (my>y2 && mx<x1) {
                // lb
                item.setAttribute('class','eye eye_lb')
            } else if (my>y2 && mx>x1 && mx<x2) {
                // b
                item.setAttribute('class','eye eye_b')
            } else if (my>y2 && mx>x2) {
                // rb
                item.setAttribute('class','eye eye_rb')
            }
        },
    },
}
</script>
<style  scoped>
/* @import url(); 引入公共css类 */
.wrapper {
    background-color: #4884B4;
}
.wrapper .title {
    text-align: center;
    line-height: 40px;
    font-size: 28px;
    padding: 20px 0 20px;
}
.the-team {
	list-style: none;
	padding: 0;
	margin: 0 auto;
	width: 927px;
	border-style: solid;
	border-width: 1px;
	border-color: #dfdfdf #dfdfdf #9b9c9e;
	overflow: hidden;
	box-shadow: 0 1px 0 #cdcec1;
	-moz-box-shadow: 0 1px 0 #cdcec1;
	-webkit-box-shadow: 0 1px 0 #cdcec1;
}
.the-team li {
	background: #fff;
	float: left;
	border: solid 1px #dfdfdf;
	padding: 8px;
	margin: -1px;
	width: 87px;
	height: 115px;
}
.the-team li .name {
	color: #4D5B71;
	font-size: 12px;
	display: block;
	padding: 7px 0 0 0;
}
.the-team [id*="eye"] {
    width: 86px;
    height: 86px;
    text-indent: -9999px;
    background-repeat:  no-repeat;
    cursor: pointer;
}
.the-team .eye {
    width: 86px;
    height: 86px;
    text-indent: -9999px;
    background-repeat:  no-repeat;
    cursor: pointer;
}
/* define image positions */
.eye_l {
	background-position: -860px 0;
}
.eye_lb {
	background-position: -774px 0;
}
.eye_b {
	background-position: -688px 0;
}
.eye_rb {
	background-position: -602px 0;
}
.eye_lt {
	background-position: -516px 0;
}
.eye_t {
	background-position: -430px 0;
}
.eye_rt {
	background-position: -344px 0;
}
.eye_r {
	background-position: -258px 0;
}
.eye_m {
	background-position: -86px 0;
}
.eye_c1 {
	background-position: 0 0;
}
</style>