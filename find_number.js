//Find missed number in array

let ar = [0, 1, 2, 3, 5, 6, 7, 8, 10];
 findNumber = (arr) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i+1] != arr[i]+ 1 && arr[i] < arr[arr.length - 1]){
     console.log(arr[i]+1);
   }
  }
}
findNumber(ar);
