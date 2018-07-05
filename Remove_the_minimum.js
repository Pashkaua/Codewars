function removeSmallest(numbers) {
    //throw "TODO: removeSmallest";
  let min = numbers[0];
          let ind = 0;
          let fin = [];
          for(let i = 0; i < numbers.length; i++){ 
           if(min > numbers[i]){
                   min = numbers[i];
                   ind = i;
           }
          }
          
          for(let i = 0; i < numbers.length; i++){ 
          if (i != ind){
                  fin.push(numbers[i]);
          }
      }
      return fin;
  }