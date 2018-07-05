function removeNb (n) {
    const sum = (n * (n+1))/2,
                res = [];
          for( let i = n; i > 0; i--){
             const a = (sum - i) / (i + 1);
             if(a<n && Number.isInteger(a)){
                     res.push([a, i]);
             }     
          }      
          return res;
  }