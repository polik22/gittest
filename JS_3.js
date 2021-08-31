function isEmpty (obiekt) {
    let pizza = true;
    for (key in obiekt) { 
        pizza = false
    }
    return pizza;
}

let eggs = {};

console.log( isEmpty(eggs) ); // true

eggs["8:30"] = "get up";

console.log( isEmpty(eggs) ); // false