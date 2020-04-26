/**
 * JavaScript 的面向对象
 */
var Vehicle = function() {
    // 为了防止多层this, 使用中间变量固定this
    const self = this;
    // 初始化方法 防止调用的时候不带new
    if (!(self instanceof Vehicle)) {
        return new Vehicle();
    }
    // 判断函数是否被new， 如果使用上述初始化方法，则没有该风险
    if (!new.target) {
        throw new Error('请使用 new 命令调用！');
    }
    // 属性
    self.price = 1000;
}
var a = new Vehicle();
var b = Vehicle();
console.log('打印', a, b);

// 创建实例对象 Object.create() 以删除Vehicle为模板，创建新的实例对象
var Vehicle2 = Object.create(Vehicle);
console.log('打印2', Vehicle2.price);