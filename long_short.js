function longShort(str){

    let arr = str.split(' ');
    let len = 0;
    let long = '';  
   
    for(let i = 0; i < arr.length; i++){
     
      let shor = arr[0];
      if(arr[i].length > len){
        len = arr[i].length;
        long = arr[i];
      }
      else if(arr[i].length < arr[0].length){
        short = arr[i];
      }
    }
    //console.log(long, short);
  }