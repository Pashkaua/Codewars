//ver1
function catipalizaedLetters(str){
  let strArr = str.toLowerCase().split(' ');

  for (let i = 0; i < strArr.length; i++){
    strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  }
  return strArr.join(' ');
}

