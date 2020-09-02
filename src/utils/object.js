// /**
//  * JavaScript 的面向对象
//  */
// var Vehicle = function () {
//     // 为了防止多层this, 使用中间变量固定this
//     const self = this;
//     // 初始化方法 防止调用的时候不带new
//     if (!(self instanceof Vehicle)) {
//         return new Vehicle();
//     }
//     // 判断函数是否被new， 如果使用上述初始化方法，则没有该风险
//     if (!new.target) {
//         throw new Error('请使用 new 命令调用！');
//     }
//     // 属性
//     self.price = 1000;
// }
// // var a = new Vehicle();
// // var b = Vehicle();
// // console.log('打印', a, b);

// // 创建实例对象 Object.create() 以删除Vehicle为模板，创建新的实例对象
// // var Vehicle2 = Object.create(Vehicle);
// // console.log('打印2', Vehicle2.price);


// var numberOfSteps = function (num) {
//     let n = num;
//     var count = 0;
//     while (n > 0) {
//         console.log(n)
//         count++;
//         if (n % 2 == 0) {
//             n = n / 2
//         } else {
//             n = n - 1;
//         }
//     }
//     return count;
// };

// var decompressRLElist = function (nums) {
//     var array = [];
//     for (let i = 0; i < nums.length; i += 2) {
//         console.log('i', i);
//         let count = nums[i];
//         let val = nums[i + 1];
//         console.log('count', count, val);
//         let arr = new Array(count).fill(val);
//         console.log('count', count, val, arr);
//         array = array.concat(arr);
//     }
//     return array;
// };


// // 脱衣法
// var spiralOrder = function (matrix) {
//     var array = [];
//     var end = true;
//     while (end) {
//         // 顺时针 脱衣法
//         // top
//         let top = matrix.splice(0, 1)[0];
//         // right
//         let right = []
//         for (let i = 0; i < matrix.length; i++) {
//             right.push(matrix[i].splice(matrix[i].length - 1, 1)[0]);
//         }
//         // bottom
//         let bottom = []
//         if (matrix.length !== 0) {
//             bottom = matrix.splice(matrix.length - 1, 1)[0].reverse();
//         }

//         // left
//         let left = []
//         for (let i = 0; i < matrix.length; i++) {
//             left.push(matrix[i].splice(0, 1)[0]);
//         }
//         left = left.reverse();
//         array = array.concat(top, right, bottom, left);

//         // 解除循环的条件
//         if (matrix.length <= 1) {
//             array = array.concat(matrix[0]);
//             end = false;
//         } else if (matrix[0].length <= 1) {
//             let last = []
//             for (let i = 0; i < matrix.length; i++) {
//                 last.push(matrix[i].splice(0, 1)[0]);
//             }
//             array =  array.concat(last);
//             end = false;
//         }
//     }
//     return array;
// };

// var groupThePeople = function(groupSizes) {
//     // 用户数量
//     var number = groupSizes.length;
//     // 分组类型 {type:number} 分组类型： 该类型的人员数量
//     var result = {};
//     for (let i=0; i<number; i++) {
//         // 分组类型名
//         var typeName = groupSizes[i] + "组";
//         var typeNumber = groupSizes[i];
//         // 判断该类型名下是否有数据
//         if (!result[typeName]) {
//             result[typeName] = [[i]];
//         } else {
//             // 取当前类型数组中的最后一个数组
//             var array = result[typeName][result[typeName].length-1];
//             // 如果没填满就填满，如果填满了就建一个新的数组放进去
//             if (array.length<typeNumber) {
//                 array.push(i);
//             }else {
//                 result[typeName].push([i]);
//             }
//         }
//     }
//     console.log("json",result);
//     var array = [];
//     for (var key in result) {
//         console.log('key', key, result[key]);
//         result[key].forEach(value => {
//             array.push(value);
//         })
//     }
//     return array;
// };

// var maxIncreaseKeepingSkyline = function(grid) {
//     // 取上下天际线  取左右天际线
//     var skyTop = [];
//     var skyLeft = [];
//     for (let i=0; i<grid[0].length; i++) {
//         let vertical = [];
//         for (let j=0; j<grid.length; j++) {
//             vertical.push(grid[j][i]);
//             if (i==0) {
//                 console.log('grid[j]', grid[j]);
//                 skyLeft.push(Math.max(...grid[j]))
//             }
//         }
//         console.log('vertical', vertical);
//         skyTop.push(Math.max(...vertical));
//     }
//     console.log(skyTop,skyLeft);

// };
// // maxIncreaseKeepingSkyline([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]);
// var maxProduct = function(nums) {
//     nums = nums.sort((a, b) => a - b);
//     console.log('nums', nums);
//     return (nums[nums.length-1]-1)*(nums[nums.length-2]-1);
// };
// // maxProduct([10,2,5,2])
// // var S = 'qwertyuio'
// // var subStr = S.replace('w', '');
// // console.log('replace',S,subStr);

// var minCount = function(coins) {
//     var count = 0;
//     for (let i=0; i<coins.length; i++) {
//         let n = parseInt(coins[i]/2);
//         if (coins[i]%2 == 0) {
//             count = count+n;
//         } else {
//             count = count+n+1;
//         }
//         console.log("n", n)
//     }
//     return count;
// };
// // console.log(minCount([4,2,1]));


// var processQueries = function(queries, m) {
//     var P = Array.from({length:m},(v, k) => k+1);
//     var array = [];
//     console.log('P', P);
//     for (let i=0; i<queries.length; i++) {
//         let index = P.indexOf(queries[i]);
//         let value = P.splice(index,1)[0];
//         P.unshift(value);
//         array.push(index);
//         console.log('value',)
//         console.log('for', index, value, P, array);
//     }
//     return array;
// };

// var isPalindrome = function(x) {
//     if (x<0) return false;
//     // return x.toString().split("").reverse().join("") == x.toString();
//     var subNumber = 0;
//     while (subNumber<x) {
//         subNumber = subNumber*10 + (x%10);
//         x=parseInt(x/10);
//     }
//     console.log("value", subNumber, x);
//     if (x == subNumber) return true;
//     if (x == parseInt(subNumber/10) && x !== 0) return true;
//     return false;
// };