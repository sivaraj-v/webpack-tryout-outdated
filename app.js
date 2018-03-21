let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
[1, 2, 3].map(n => console.log(n));
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }