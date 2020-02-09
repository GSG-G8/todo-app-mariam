// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  const container = document.getElementById("todo-container");
  const addTodoForm = document.getElementById("add-todo");
  if (JSON.parse(localStorage.getItem("state"))) {
    state = JSON.parse(localStorage.getItem("state"));
  } else {
    state = [];

    // this is our initial todoList
  }
  console.log(state);
  // This function takes a todo, it returns the DOM node representing that todo

  const createTodoNode = function(todo) {
    const todoNode = document.createElement("li");
    // you will need to use addEventListener

    // add span holding description
    const descspan = document.createElement("span");
    descspan.classList.add("descripton__span");
    descspan.textContent = todo.description;
    descspan.setAttribute("id", todo.id);
    todoNode.appendChild(descspan);

    // this adds the delete button
    const deleteButtonNode = document.createElement("button");
    deleteButtonNode.addEventListener("click", event => {
      const newState = todoFunctions.deleteTodo(state, todo.id);
      localStorage.setItem("state", JSON.stringify(newState));
      update(newState);
    });
    deleteButtonNode.classList.add("button_delete");
    deleteButtonNode.textContent = "delete";
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button
    const markdonebtn = document.createElement("button");
    markdonebtn.addEventListener("click", event => {
      const newState = todoFunctions.markTodo(state, todo.id);
      localStorage.setItem("state", JSON.stringify(newState));

      const markdesc = document.getElementById(todo.id);
      if (todo.done) {
        // event.target.classList.toggle("done");
        markdesc.classList.toggle("done");
      }
      update(newState);
    });
    markdonebtn.classList.add("button_done");
    markdonebtn.textContent = "done";
    todoNode.appendChild(markdonebtn);

    // add classes for css

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener("submit", function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
      event.preventDefault();

      const description = event.target.inputdesc.value; // event.target ....

      // hint: todoFunctions.addTodo
      const newState = todoFunctions.addTodo(state, description);
      localStorage.setItem("state", JSON.stringify(newState));
      update(newState);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement("ul");
    todoListNode.classList.add("ul__todo");

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
    // coverage;
  };

  if (container) renderState(state);
})();
