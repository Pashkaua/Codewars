function rot13(message){
    let res = '',
    reg1 = /[a-m]/i,
    reg2 = /[m-z]/i;
    const num = 13; 

for(let i = 0; i < message.length; i++){
    let code =  message[i].charCodeAt();
    if (reg1.test(message[i])){
    res += String.fromCharCode(code + num);
    }else if(reg2.test(message[i])){
    res += String.fromCharCode(code - num);
    }else{
    res += message[i]; 
}
}
return res;
}
