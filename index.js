// add solution here


function theBeatlesPlay(musicians, instruments) {
  let emptyArray = [];
  for (let i = 0; i < musicians.length; i++) {
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`); // iterated over the two argument arrays 
  }
  return emptyArray; // returns array after for loop has ran for musicians.length
  
  
}

function johnLennonFacts(facts) {
  let newFacts = [];
  let i = 0;
  while (i < facts.length) { // will stop running when we get to i < facts.length
    newFacts.push(`${facts[i]}!!!`); // pushs the new string to the newFacts array
    i++;
    
  }
  return newFacts; // returns newFacts array when function is called
}


function iLoveTheBeatles(num) {
  let emptyArray = [];
  do {
    emptyArray.push("I love the Beatles!")
    num++;
    
  } while (num < 15)
  return emptyArray;
}