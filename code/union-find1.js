class UnionFind {
    constructor() {
        this.sets = {};
    }

    createSet(value) {
        this.sets[value] = value;
    }

    find(value) {
        if (!(value in this.sets)) return null;
        let c = value;
        while (c !== this.sets[c]) {
            c = this.sets[c];
        }

        return c;
    }

    union(valueOne, valueTwo) {
        if (!(valueOne in this.sets) || !(valueTwo in this.sets)) return;
        const v1r = this.find(valueOne);
        const v2r = this.find(valueTwo);
        this.sets[v2r] = v1r;
    }
}

const objects = [
    { name: 'John', age: 30 },
    { name: 'Mary', age: 25 },
    { name: 'Peter', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 35 }
  ];

let s = new UnionFind();
for (let i = 0; i < 5; i++) {
    s.createSet(i);
}


for (let i = 0; i < 5; i++) {
    for (let j = i + 1; j < 5; j++) {
      if (objects[i].age === objects[j].age) {
        s.union(i, j);
      }
    }
  }

  console.log(s);


