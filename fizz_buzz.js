 function fizzBuzz(){
   for(let i = 0; i <=100; i++){
     if(i % 15 ===0){
       console.log('fizzBuzz');
     }else if(i % 5 ===0){
      console.log('Buzz');
    }
    else{
      console.log(i);
    }
   }
  }
const output = fizzBuzz();
console.log(output);