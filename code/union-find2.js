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
  
  // Пример использования Union-Find для определения, являются ли две строки анаграммами
  function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
  
    const uf = new UnionFind(str1.length);
  
    for (let i = 0; i < str1.length; i++) {
      const charCode = str1.charCodeAt(i);
      uf.union(charCode, charCode);
    }
  
    for (let i = 0; i < str2.length; i++) {
      const charCode = str2.charCodeAt(i);
      if (uf.find(charCode) !== charCode) {
        return false;
      }
    }
  
    return true;
  }
  
  // Тестирование функции areAnagrams
  const str1 = "listen";
  const str2 = "silent";
  console.log(`${str1} и ${str2} являются анаграммами: ${areAnagrams(str1, str2)}`);
  
  const str3 = "triangle";
  const str4 = "integral";
  console.log(`${str3} и ${str4} являются анаграммами: ${areAnagrams(str3, str4)}`);
  