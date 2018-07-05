//return the total number of smiling faces in the array
function countSmileys(arr) {
    let reg = /(:|;){1}(-|~)?(\)|D){1}/,
        count = 0;
          arr.forEach(el => {
                  if(reg.test(el)){ count++};        
          });
          return count;
  }