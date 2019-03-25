
// targil 1
var arr = []
for(var i = 0; i < 10; i++)
  {
    	// Math.random() * 100 // 0-99 + 1 = 1-100
	    var number = Math.floor(Math.random() * 100) + 1 // 1-100
      arr.push(number)
  }

var sum = 0
for(var i = 0; i < 10; i++)
  {
		sum = sum + arr[i]    
  }
console.log(sum)
console.log(sum / 10)
console.log(arr)


// targil 2
var secret = Math.floor(Math.random() * 100) + 1

var guess = parseInt(prompt("Guess a number (1-100):"))
var counter = 1;

while (guess != secret)
  {
    if (guess > secret)
      {
        alert("too high!")
      }
    else
      {
        alert("too low")
      }
    guess = parseInt(prompt("Guess a number (1-100):"))
    
    //counter++
    counter = counter + 1
  }

alert("you guessed right, after " + counter + " guesses!!")



