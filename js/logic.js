// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

var todoFunctions = {
  // todoFunctions.generateId() will give you a unique id
  // You do not need to understand the implementation of this function.
  generateId: (function() {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),

  //cloneArrayOfObjects will create a copy of the todos array
  //changes to the new array don't affect the original
  cloneArrayOfObjects: function(todos) {
    return todos.map(function(todo) {
      return JSON.parse(JSON.stringify(todo));
    });
  },

  addTodo: function(todos, newTodo) {
    return todoFunctions.cloneArrayOfObjects(todos).concat({
      id: todoFunctions.generateId(),
      description: newTodo,
      done: false
    });
  },
  deleteTodo: function(todos, idToDelete) {
    return todoFunctions.cloneArrayOfObjects(todos).filter(el => {
      if (el.id !== idToDelete) {
        return el;
      }
    });
  },
  markTodo: function(todos, idToMark) {
    return todoFunctions.cloneArrayOfObjects(todos).map(todo => {
      if (todo.id === idToMark) {
        todo.done ? (todo.done = false) : (todo.done = true);
        return todo;
      }
      return todo;
    });
  }

  // sortTodos: function(todos, sortFunction) {
  //   // stretch goal! Do this last
  //   // should leave the input arguement todos unchanged (you can use cloneArrayOfObjects)
  //   // sortFunction will have same signature as the sort function in array.sort
  //   // hint: array.slice, array.sort
  //   // const sortTodo = todoFunctions.cloneArrayOfObjects(todos);
  //   // return sortTodo.slice(0).sortTodo.sort((a, b) => b - a);
  // }
};

// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details:
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== "undefined") {
  module.exports = todoFunctions;
}
