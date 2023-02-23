// JavaScript source code
function myFizzBuzz(istopp, fizz, buzz) {
    let FB = "FizzBuzz : ";
    for (let i = 1; i <= istopp; i++) {
        if (i % fizz === 0 && i % buzz === 0) {
            FB = FB + "Fizz-Buzz"
        }
        else if (i % fizz === 0) {
            FB = FB + "Fizz";
        }
        else if (i % buzz === 0) {
            FB = FB + "Buzz";
        }
        else {
            FB = FB + i.toString()
        }
        if (i != istopp) {
            FB = FB + ",";
        }
    }
    document.getElementById("demo").innerHTML = FB;
}