const add = function(input1, input2) {
	const answer = input1 += input2;
    return answer;
};

const subtract = function(input1, input2) {
	const answer = input1 -= input2;
    return answer;
};

const sum = function(arr) {
	
    const answer = arr.reduce((a, s) => {
        a += s;
        return a;
    }, 0)
   
    return answer;
};

const multiply = function(num1, num2) {
    const answer = num1 * num2;
    return answer;
};

const power = function(num1, num2) {
	const answer = num1 ** num2;
    return answer;
};

const factorial = function(num) {
    let result = num;
    
    if(num === 0 || num === 1){
        return 1;
    }
    
    while (num > 1) {
       num--;
       result = result * num;
    }
    return result;
};
