function to_nato(words) {
    let res = [];
           for(let i = 0; i < words.length; i++){
          
                 switch (words[i].toLowerCase()){
                         
                         case "a": res.push( "Alfa");break;
                         case "b": res.push( "Bravo");break;
                         case "c": res.push( "Charlie");break;
                         case "d": res.push( "Delta");break;
                         case "e": res.push( "Echo");break;
                         case "f": res.push( "Foxtrot");break;
                         case "g": res.push( "Golf");break;
                         case "h": res.push( "Hotel");break;
                         case "i": res.push( "India");break;
                         case "j": res.push( "Juliett");break;
                         case "k": res.push( "Kilo");break;
                         case "l": res.push( "Lima");break;
                         case "m": res.push( "Mike");break;
                         case "n": res.push( "November");break;
                         case "o": res.push( "Oscar");break;
                         case "p": res.push( "Papa");break;
                         case "q": res.push( "Quebec");break;
                         case "r": res.push( "Romeo");break;
                         case "s": res.push( "Sierra");break;
                         case "t": res.push( "Tango");break;
                         case "u": res.push( "Uniform");break;
                         case "v": res.push( "Victor");break;
                         case "w": res.push( "Whiskey"); break;
                         case "x": res.push( "Xray"); break;
                         case "y": res.push( "Yankee"); break;
                         case "z": res.push( "Zulu"); break;
                         case "!": res.push( "!"); break;
                         case "?": res.push( "?"); break;
                         case ".": res.push( "."); break;
                     }
                 }
                     return res.join(' ');         
 }