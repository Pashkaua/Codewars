function reverseWords(str) {
    // Go for it
   let str2 = str.split(' ').map(el=> el.split('').reverse().join(''));
          return str2.join(' ');
  }