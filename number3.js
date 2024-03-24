<!DOCTYPE html>
<!--
Created using JS Bin
http://jsbin.com

Copyright (c) 2024 by anonymous (http://jsbin.com/fazabaloya/1/edit)

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
function reverseString(str) {    
    var splitString = str.split("");    
    var reverseArray = splitString.reverse();          
    var joinArray = reverseArray.join("");  

    console.log(joinArray);
    
} 
reverseString("goodbye");


</script>
</body>
</html>