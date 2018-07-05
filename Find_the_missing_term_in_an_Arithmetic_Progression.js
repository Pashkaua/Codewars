//ver_1:
var findMissing = function (list) {  
    let n = 0,
         len = list.length;
         n = (list[len - 1] - list[0]) / len ;
                 for(let i = 0; i < list.length; i++){
                         if(list[i] + n != list[i+1]){
                                 return list[i]+n;
                         }
                 }
 }

 //ver_2:

var findMissing = function (list) {  
    let n = (list[list.length - 1] - list[0]) / list.length;
                 for(let i = 0; i < list.length; i++){
                         if(list[i] + n != list[i+1]){
                                 return list[i]+n;
           }
      }
 }