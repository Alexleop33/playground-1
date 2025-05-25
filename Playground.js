import { name } from "./example";

import (name);

name;

<!DOCTYPE html>
<html>
<head>
<title>Square Example</title>
<style>
  #mySquare {
    background-color: lightblue;
  }
</style>
</head>
<body>

<div id="mySquare"></div>

<script>
  function createSquare(width, height) {
    const square = document.getElementById("mySquare");
  
    square.style.width = width + "px";
    square.style.height = height + "px";
  }
  
  createSquare(200, 200);
</script>

</body>
</html>
