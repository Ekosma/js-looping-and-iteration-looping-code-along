// Code your solutions in this file
//writeCards(["Ada", "Brendan", "Ali"], "birthday");

function writeCards(name, event) {
  let arr = []
  for (let i = 0; i < name.length; i++) {
      arr.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`) 
    } 
  return arr
}


function countDown(n) {
  for (let i = n; i >= 0; i--) {
    console.log(i)
  }  
}
