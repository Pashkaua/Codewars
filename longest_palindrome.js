longestPalindrome = function(s){
    var res = 0;
    for(var i = 0; i < s.length; i++){
            var str = [];
            var strRev = [];
           
            for(var j = i; j < s.length; j++){
                    str.push(s[j]);
                    strRev.unshift(s[j]);
            if(str.join('') === strRev.join('') && str.length > res){
                    res = str.length;       
                }                        
          }  
    }
    
    return res;
}