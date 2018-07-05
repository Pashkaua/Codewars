function validBraces(braces){
    let pairs = {
                  ')':'(',
                  ']':'[',
                  '}':'{'
          };
          let arr = [];
  
          for(let i = 0; i < braces.length; i++){
                  if(braces[i] === '(' || braces[i] === '[' || braces[i] === '{'){
                          arr.push(braces[i]);
                  }else if(arr[arr.length - 1] === pairs[braces[i]]){
                          arr.pop();
                  }else return false;
          }
          return arr.length === 0;
  }