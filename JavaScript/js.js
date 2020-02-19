/*
  1 7种数据类型
    基本类型
    string number boolean null undefined 
    symbol(ECMAScript2016) 通常被用作一个对象属性的键值
    基本类型包装对象
    String -> string   Number -> number
    Boolean -> boolean Symbol -> symbol
    对象
    Object
*/ 

/*
 2 原型式的继承
*/ 
function Person(first, last, age) {
  this.name = {
    first,
    last
  };
  this.age = age;
};

Person.prototype.greeting = function() {
  alert('Hi! I\'m ' + this.name.first + '.');
};

function Teacher(first, last, age, subject) {
  Person.call(this, first, last, age, gender, interests);
  // 
  this.subject = subject;
}

// 设置 Teacher() 的原型和构造器引用 （方法的继承） 
// Teacher.prototype.constructor -> Person
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

/* 
  3 闭包
  在一些编程语言中，函数中的局部变量仅在函数的执行期间可用。
  一旦 makeFunc() 执行完毕，我们会认为 name 变量将不能被访问。
  JavaScript中的函数会形成闭包。 闭包是由函数以及创建该函数的词法环境组合而成。
  这个环境包含了这个闭包创建时所能访问的所有局部变量。
*/ 
function makeFunc() {
  var name = "Mozilla";
  function displayName() {
      alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();

// 用闭包模拟私有方法 私有变量的修改也会被保存
var Counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }   
})();

// 
for (var i=0; i<5; i++) {
  setTimeout(function() {
    console.log('debug i', i)
  }, i * 1000)
}

// 
var b = function(i) {
  setTimeout(function() {
    console.log('debug i', i)
  }, i * 1000)  
}
for (var i=0; i<5; i++) {
 b(i)
}

/*
4 事件
  捕获阶段和冒泡阶段
  在捕获阶段：由外层逐层进入内层 检查事件callback
  在冒泡阶段，恰恰相反
  在现代浏览器中，默认所有事件处理程序都在冒泡阶段进行注册
  preventDefault 阻止默认事件执行 如表单 但是不影响事件冒泡
  stopPropagation()的函数, 只会让当前事件处理程序运行，但事件不会在冒泡链上进一步扩大
  stopImmediatePropagation() 某个对象多个事件注册函数 调用后其他函数不执行
  addEventListener  false -> 事件冒泡阶段调用 true -> 事件捕获阶段
*/

/* 
  事件捕获和事件冒泡同时存在
  1. document -> target 捕获进入
  2. target 捕获 冒泡 先注册先执行
  3. target -> document 冒泡浮出
*/
<div id="s1">s1
    <div id="s2">s2</div>
</div>

s1.addEventListener("click",function(e){
        console.log("s1 冒泡事件");         
},false);
s2.addEventListener("click",function(e){
        console.log("s2 冒泡事件");
},false);
        
s1.addEventListener("click",function(e){
        console.log("s1 捕获事件");
},true);
        
s2.addEventListener("click",function(e){
        console.log("s2 捕获事件");
},true);

/*  
  5. AJAX Promise
  Promise 三种状态 Pending(进行中) Fulfilled(已成功) Rejected(已失败)
*/ 

const PENDING = Symbol('PENDING')
const FULFILLED = Symbol('FULFILLED')
const REJECTED = Symbol('REJECTED')

class Promise {
  constructor(callbcak) {
    if (!callbcak instanceof Function) {
      throw new Error('only accept function')
    }
    this._status = PENDING
    this._value = undefined
    try {
      callbcak(this._resolve.bind(this), this._reject.bind(this)) 
    } catch(err) {
      this._reject(err)
    }
  }

  _resolve(value) {
    if (this._status !== PENDING) {
      return
    }
    this._status = FULFILLED
    this._value = value
  }

  _reject() {
    if (this._status !== PENDING) { 
      return
    }
    this._status = REJECTED
    this._value = err
  }
}

/* 
  6. DOM
*/

/* 
  7. BOM
*/

/* 
  8. 内存泄漏
*/

/* 
  9. 跨域
  浏览器的同源策略 
  1. 不同协议 ( https和http )
  2. 不同端口 ( http:// 80是默认的)
  3. 不同域名 ( http://store.company.com/dir2/other.html 、http://news.company.com/dir2/other.html )
  广义跨域
  1.) 资源跳转： A链接、重定向、表单提交
  2.) 资源嵌入： <link>、<script>、<img>、<frame>等dom标签，还有样式中background:url()、@font-face()等文件外链
  3.) 脚本请求： js发起的ajax请求、dom和js对象的跨域操作等

  Access-Control-Allow-Origin *
  Access-Control-Allow-Credentials true
  Access-Control-Request-Method 'PUT,POST,GET,DELETE,OPTIONS'

  CSRF (Cross-Site Request Forgery)

  跨域解决方案
  1、 通过jsonp跨域 (deprecated)
  2、 document.domain + iframe跨域 (deprecated)
  3、 location.hash + iframe (deprecated)
  4、 window.name + iframe跨域 (deprecated)
  5、 postMessage跨域  页面间
  6、 跨域资源共享（CORS）
  7、 nginx代理跨域
  8、 nodejs中间件代理跨域
  9、 WebSocket协议跨域
  ->
  1. JSONP
  2. domain + iframe
  3. postMessage
  4. server 代理
  5. WebSocket协议跨域  双工通信，同时允许跨域通讯，是server push技术
*/

/* 
  10. 模板引擎
*/

/* 
  11. 模块化
*/


