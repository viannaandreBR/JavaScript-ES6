document.write("Rotina JavaScrit: Criação Linhas em branco <br><br><br>");
var i;
for(i=10; i>=0; i= i-1){
   var s;
   for(s=0; s<i; s = s+1){
    document.write("*");
   }
   //i want this to print a new line
   document.write("\n\n\n");
   document.write("<br>");

}