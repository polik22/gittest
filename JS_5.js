function multiplyNumeric(object) {
    for(key in object){
        key *= key*2;
    }
}


// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  
  // после вызова функции
  menu = {
    width: 400,
    height: 600,
    title: "My menu"
  };

  console.log(menu.height)
  console.log(menu.width)
  console.log(menu.title)