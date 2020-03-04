1. 原型对象 / 构造函数 / 实例
构造函数：创建对象的一种方式（函数对象）
实例：构造函数创建出来的一个对象
原型对象：构造函数的prototype属性指向的对象

constructor：一个属性，仅对象独有，指向构造函数；
_proto_: 一个隐式属性，函数和对象都有这个属性，指向该函数/对象的原型对象；
prototype： 一个属性，仅函数独有，指向该函数的原型对象

prototype属性可以给函数添加可共享（继承）的方法、属性，而__proto__是查找某函数或对象的原型链方式。


2.原型链
    属性查找：从实例本身一层层向上查找，直到访问到对象的原型。
    属性修改：只会修改实例对象本身的属性，如果不存在，则进行添加该属性，如果需要修改原型的属性时，则可以用: F.prototype.xxx = xxx；但是这样会造成所有继      承于该构造函数F的实例的属性都发生改变。

3. 作用域：变量和声明的作用范围。可分为 块级作用域 和 函数作用域
   
    var name1 = "haha";
    function changeName(){
        var name2="xixi";
        function swapName(){
            console.log(name1);//haha
            console.log(name2);//xixi
            console.log(tempName)//undefined
            var tempName=name2;
            name2=name1;
            name1=tempName;
            console.log(name1);//xixi
            console.log(name2);//haha
            console.log(tempName);//xixi
        }
        swapName();
        console.log(name1);//xixi
        console.log(name2);//haha
       // console.log(tempName);//抛出错误：Uncaught ReferenceError: tempName is not defined
    }
    changeName();
    console.log(name1);//xixi
   // console.log(name2); //抛出错误：Uncaught ReferenceError: name2 is not defined
   // console.log(tempName);//抛出错误：Uncaught ReferenceError: tempName is not defined

4. 闭包：函数作为返回值
   函数外包访问函数内部变量的方法；
    在 Javascript 中，如果一个对象不再被引用，那么这个对象就会被 GC 回收，否则这个对象一直会保存在内存中；
5. 对象的拷贝（深浅拷贝）
   
浅拷贝: 以赋值的形式拷贝引用对象，仍指向同一个地址，修改时原对象也会受到影响  (寻址操作，例如：访问数据类型为数组)
Object.assign
展开运算符(...)
深拷贝: 完全拷贝一个新对象，修改时原对象不再受到任何影响 （寻值操作，例如：访问数据类型为字符串）
JSON.parse(JSON.stringify(obj)): 性能最快
递归进行逐一赋值

6. new运算符的执行过程
     
新生成一个对象
链接到原型: obj.__proto__ = Con.prototype
绑定this: apply
返回新对象(如果构造函数有自己 return 时，则返回该值)

7. instanceof原理
   objA  instanceof  objB : objA的原型链上是否能找到objB的原型
    instatnceof 和 typeof 区别：
    typeof返回该参数数据类型，返回值为字符串；instanceof判断参数是否存在继承关系，返回值为布尔值；
     

8. 继承
   寄生组合式继承
   function inheritPrototype(subType,superType){
      var prototype=Object.create(superType.prototype); //创建父类原型的一个副本
      prototype.constructor=subType;   //为副本添加constructor属性,弥补重写原型而失去的constructor属性
      subType.prototype=prototype; //将创建的对象(副本)赋值给子类的原型
    }
    function SuperType(name){
      this.name=name;
      this.friends=["gay1","gay2"];
    }
    SuperType.prototype.sayName=function(){
      alert(this.name);
    }
    function SubType(name,age){
      SuperType.call(this,name);  //继承SuperType
      this.age=age;       //扩展出age属性
    }
    inheritPrototype(SubType,SuperType);
9. 模块化
   通行的js模块规范主要有：CommonJS和AMD ES6 
  
es6: import / export
commonjs: require / module.exports / exports
amd: require / defined

require与import的区别

require 是 AMD规范引入方式
import是es6的一个语法标准
require是运行时调用，所以require理论上可以运用在代码的任何地方
import是编译时调用，所以必须放在文件开头
require是值拷贝过程，导出值改变不会影响导入值，其实require的结果就是对象、数字、字符串、函数等，再把require的结果赋值给某个变量
import是解构赋值过程，指向 内存地址，导入值会随导出值而变化，但是目前所有的引擎都还没有实现import，我们使用babel支持ES6，将ES6转码为ES5再执行，import语法会被转码为require

10. 防抖与节流：高频触发优化方式
函数防抖：用户输入校验
将若干函数调用合成为一次


函数截流：页面滚动和resize
当达到了一定的时间间隔就会执行一次



两者区别：截流是每隔一段时间执行一次，防抖是只执行一次，比如用户输入了5秒钟，如果wait都是1000，截流会执行5次，防抖只会执行一次


11. this
1 普通函数：this 指向调用其所在函数的对象，谁调的函数指向谁
2 构造函数：this指向被创建的新对象—实例对象
3 DOM事件：this指向触发事件的dom元素
4 call()和apply(): this指向第一个参数对象
5 setTimeout和setInterval： this指向全局
6 箭头函数： this指向最初定义函数时的作用域
var b=11;
var obj={
 b:22,
 say:()=>{
 console.log(this.b);
}
}
obj.say();

改变this的方式：
call: fn.call(target, 1, 2)
apply: fn.apply(target, [1, 2])
bind: fn.bind(target)(1,2)


12. ES6语法（详见官网文档）


13. 数组
  map和foreach相同点：
都是循环遍历数组中的每一项
forEach和map方法里每次执行匿名函数都支持3个参数，参数分别是item（当前每一项），index（索引值），arr（原数组）
匿名函数中的this都是指向window
只能遍历数组
都不会改变原数组

    map和foreach区别：
   map方法返回一个新的数组，数组中的元素为原始数组调用函数处理后的值。 若arr为空数组，则map方法返回的也是一个空数组，forEach对于空数组是不会调用回调函数的
    无论arr是不是空数组，forEach返回的都是undefined。这个方法只是将数组中的每一项作为callback的参数执行一次。
