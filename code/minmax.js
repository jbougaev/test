// Feel free to add new properties and methods to the class.
class MinMaxStack {
    constructor(){
      this.innerStack = [];
     
      this.minA = [];
      this.maxA = [];
    }
    peek() {
      return this.innerStack[this.innerStack.length - 1];
    }
  
    pop() {
     const el =  this.innerStack.pop();
     if(el === this.getMin()){
       this.minA.pop();
     }
  
      if(el === this.getMax()){
        this.maxA.pop();
      }
  
      return el;
    }
  
    push(number) {
      this.innerStack.push(number);
      
      if(number >= this.getMax() || this.maxA.length === 0) {
      
        this.maxA.push(number);
      }
       if(number <= this.getMin() || this.minA.length === 0) {
       
         this.minA.push(number);
      }
    }
  
    getMin() {
      return this.minA[this.minA.length-1];
    }
  
    getMax() {
      return this.maxA[this.maxA.length - 1];
    }
  }

  let o = new MinMaxStack();
  o.push(5);
  o.push(5);
  o.push(5);
  o.push(5);
  o.push(8);
  o.push(8);
  o.push(0);
  o.push(8);
  o.push(9);
  o.push(5);

  console.log(o.getMax());
  o.pop();
  o.pop();
  o.pop();
  console.log(o.getMax());