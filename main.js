let firstNumber = prompt ('Enter First number :');
op = prompt ('Enter your operator');
let secondNumber = prompt ('Enter Second number :');

 if (op == '+'){
    console.log ('your answer is '+ (firstNumber + secondNumber));
 }

 else if (op ==='-'){
    console.log ('your answer is '+  (firstNumber - secondNumber));
 }

 else if (op == '*'){
    console.log ('your answer is '+ (firstNumber * secondNumber));
 }

 else if (op == '/'){
    console.log ('your answer is '+ (firstNumber / secondNumber));
 }
 else {
    console.log ('invaild answer')
 }


