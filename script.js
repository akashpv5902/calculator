//1 display number in the box

function displayNum(num){
    console.log(num);
    result.value+=num
}

// 2 clear the textbox

function clearBox(){
    result.value="";
}

// 3 evaluate expression

function evaluateExpression(){
    expression=result.value;
    output=eval(expression);
    result.value=output;
}

// 4 remove last item from textbox

function removeLast(){
    currentExpression=result.value;
    result.value=currentExpression.slice(0,-1)
}