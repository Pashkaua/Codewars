function compare(s1, s2) {
        
    function coder(arr){
        let count = 0;
        if (arr !== null ){
        arr = arr.split('');
        for (let i = 0; i < arr.length; i ++) {
            const reg1 = /[a-z]/i;
                
                if(reg1.test(arr[i])){
                arr[i]= arr[i].toUpperCase().charCodeAt();
                count += arr[i];
                }else{
                return count = '';  
                }
            }
        }else{
        count = '';
        }
        return count;
        }
        
        let a = coder(s1);
        let b = coder(s2);
    
        return a == b;
}