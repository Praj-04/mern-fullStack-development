let a = Number(prompt('Enter the number'));
let operation = prompt('Enter operation to be performed');
let b = Number(prompt('Enter another number'));
switch(operation){
case '+' : alert(a + b);
break;
case '-' : alert(a - b);
break;
case '*' : alert(a * b);
break;
case '/':  alert(a / b);
break;
default : alert('invalid operation');
        break;
}