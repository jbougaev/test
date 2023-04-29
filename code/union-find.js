class UnionFind {
    constructor(size) {
      this.parent = new Array(size);
      for (let i = 0; i < size; i++) {
        this.parent[i] = i;
      }
    }
  
    find(x) {
      if (this.parent[x] !== x) {
        this.parent[x] = this.find(this.parent[x]);
      }
      return this.parent[x];
    }
  
    union(x, y) {
      const parentX = this.find(x);
      const parentY = this.find(y);
      this.parent[parentX] = parentY;
    }
  }
  
  // Пример использования Union-Find для определения эквивалентности объектов
  const objects = [
    { name: 'John', age: 30 },
    { name: 'Mary', age: 25 },
    { name: 'Peter', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 35 }
  ];
  
  const uf = new UnionFind(objects.length);
  
  for (let i = 0; i < objects.length; i++) {
    for (let j = i + 1; j < objects.length; j++) {
      if (objects[i].age === objects[j].age) {
        uf.union(i, j);
      }
    }
  }
  
  // Теперь мы можем вывести эквивалентные объекты
  const equivalentObjects = {};
  for (let i = 0; i < objects.length; i++) {
    const parent = uf.find(i);
    if (!equivalentObjects[parent]) {
      equivalentObjects[parent] = [];
    }
    equivalentObjects[parent].push(objects[i]);
  }
  
  console.log(equivalentObjects);