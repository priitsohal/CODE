function drawTriangle(size) {

   // Your solution goes here
   for (var row=0; row < size; row++){
      var line="";
      for (var col = 0; col <= row; col++){
         line += "*";
      }
      console.log(line);
   }


}
drawTriangle(4);