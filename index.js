// add solution here


function theBeatlesPlay(musicians, instruments) {
  let emptyArray = [];
  for (let i = 0; i < musicians.length; i++) {
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
    return emptyArray;
  }
  
}