let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

let sum = 0;
for (key in salaries) { 
    sum += salaries[key];
}

console.log(sum);

console.log(Object.values(salaries).reduce((acc, el) => acc + el, 0))