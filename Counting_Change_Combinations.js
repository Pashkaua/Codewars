var countChange = function(money, coins) {
    var a = [],
             b = [];
         for (var i = 0; i <= money; i++)
           a[i] = b[i] = 0;
       
         a[0] = 1;
         for (var i = 0; i < coins.length; i++) {
           for (var j = 0; j <= money; j++)
             for (var k = 0; j + k <= money; k += coins[i])
               b[j + k] += a[j];
     
           for (var j = 0; j <= money; j++)
             a[j] = b[j], b[j] = 0;
         }
     
         return a[money];
 }