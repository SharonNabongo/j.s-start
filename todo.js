//a collection of items
//todos["1"]="buy houses"
const todos= ["order water", "clean compound", "buy food"]
console.log(todos[1])
todos[1]="buy house";

todos.forEach(function (todos,index) {
    const num =index + 1;
    console.log(`${index}--${todos}`);
});
let index = todos.findIndex(function(buyfood) {
    return buyfood ==="buyfood";
});
console.log(index);

