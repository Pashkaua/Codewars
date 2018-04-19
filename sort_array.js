let a = [1, 2, 4, 3, 5]; 
let b = [9, 1, 3, 8, 7, 4, 5, 6];

function sortArray(arr1, arr2) {
 let arr3 = [];
  for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr2.length; j++){
    if(arr1[i] == arr2[j]){
      console.log(arr2[j]);
 arr3.push(arr2[j]);
      }    
    }
  }
  //console.log(arr3);
}
sortArray(a, b);