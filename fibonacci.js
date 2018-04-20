//ver 1
function fibon(N) {
    let a = 1,
        b = 1;
    for(let i = 3; i <= N; i++){
        let c = a + b;
            a = b;
            b = c;
    }
    console.log(b);
 }
 // console.log(fibon(7));


 
//ver 2    рекурсивний спосіб
function fibRec(N) {
    if(N < 2){
        return(N);
    }else{
        return (fibRec(N-1) + fibRec(N - 2));
    }
}
 // console.log(fibon(7));