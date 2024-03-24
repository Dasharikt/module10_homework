<!DOCTYPE html>
<!--
Created using JS Bin
http://jsbin.com

Copyright (c) 2024 by anonymous (http://jsbin.com/dorurazaqo/1/edit)

Released under the MIT license: http://jsbin.mit-license.org
-->
<meta name="robots" content="noindex">
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>

<script id="jsbin-javascript">
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

</script>
</body>
</html>