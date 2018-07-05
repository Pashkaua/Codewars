function iqTest(numbers){
    // ...
   let odd = [],
              even = []; 
              ind = 0;
              num = numbers.split(' '); 
          for (let i = 0; i < num.length; i++) {
          num[i] % 2 == 0 ? even.push(num[i]) : odd.push(num[i]);
          }
          odd.length == 1 ? ind = num.indexOf(odd[0]) : ind = num.indexOf(even[0]); 
          return ind + 1;
  }
  