
a = +prompt("Введите число");

switch(typeof a){
  case "number" :
    switch(a % 2){
      case NaN:
        console.log("Упс, кажется, вы ошиблись");
        break;
      case 0:
        console.log("число четное");
        break;
       case 1:
        console.log("число нечетное");
        break;
      default:
    console.log("кажется вы ошиблись");
    }
      
    break;
  default:
    console.log("кажется вы ошиблись");
}

