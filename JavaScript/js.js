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

