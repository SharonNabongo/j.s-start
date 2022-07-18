//inside sumNumbers create a method called addition
//use it to add num1 and num2

let sumNumbers={
    num1:15,
    num2:17,
    addition:function () {
        return this.num1+this.num2;
    },
};
console.log(sumNumbers.addition());