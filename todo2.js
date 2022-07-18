const todos=[
    {
        title:"order food",
        body:"ring road shop",
    },
    {
        title:"attend movie shop",
        body:"swan park",
    },
    {
        title:"design website",
        body:"sunset system",
    },
   ];
   console.log(todos[2].title)
   todos.forEach(function(item){
    console.log(item.body);
});
const findTodos = function(todoData,todoTitle){
    return todoData.find(function(item){
        return item.title === todoTitle;
    });
};
console.log(findTodos(todos,"attend movie shop")
);
const findTodos2 = function(todoData,todoBody){
    return todoData.findIndex(function(item){
        return item.body.toLowerCase() === todoBody.toLowerCase();
    });
};
console.log(findTodos2(todos,"Swan park")
);








