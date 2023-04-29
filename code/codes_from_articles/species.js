// class MyArray extends Array {
//     // Перегружаем species для использования родительского конструктора Array
//    // static get [Symbol.species]() { return Array; }
//   }
//   var a = new MyArray(1,2,3);
//   var mapped = a.map(x => x * x);
//   var c = MyArray.from(4);
  
//   console.log(c instanceof MyArray); // false
//   console.log(c instanceof Array);   // true

//   function Text(value) {
//     "use strict";
//     String.call(this, value);
//   }
//   console.log(new Text("does this work?"));

  function Button() {
    return document.createElement('button');
  }
  function MyButton(value) {
    // Button.call(this);
    // this.textContent = value;

    var self = Button.apply(this, arguments) || this;
    self.textContent = value;
  return self;
  }
  Object.setPrototypeOf(MyButton, Button);
  Object.setPrototypeOf(MyButton.prototype, Button.prototype);

  const b = new MyButton("content");

  console.log(b.textContent);