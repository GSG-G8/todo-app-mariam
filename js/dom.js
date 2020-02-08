// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  const container = document.getElementById("todo-container");
  const addTodoForm = document.getElementById("add-todo");
  let state = [];
  if (JSON.parse(localStorage.getItem("state"))) {
    state = JSON.parse(localStorage.getItem("state"));
  } else {
    state = [
      { id: -3, description: "first todo" },
      { id: -2, description: "second todo" },
      { id: -1, description: "third todo" }
    ]; // this is our initial todoList
  }
  // This function takes a todo, it returns the DOM node representing that todo

  const createTodoNode = function(state) {
    const todoNode = document.createElement("li");
    // you will need to use addEventListener

    // add span holding description
    const descspan = document.createElement("span");
    descspan.textContent = state.description;
    todoNode.appendChild(descspan);

    // this adds the delete button
    const deleteButtonNode = document.createElement("button");
    deleteButtonNode.addEventListener("click", event => {
      const newState = todoFunctions.deleteTodo(state, todo.id);
      // localStorage.setItem("state", JSON.stringify(newState));
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button
    const markdonebtn = document.createElement("button");
    markdonebtn.addEventListener("click", event => {
      const newState = todoFunctions.doneTodo(state, todo.id);
      // localStorage.setItem("state", JSON.stringify(newState));
      update(newState);
    });
    todoNode.appendChild(markdonebtn);

    // add classes for css
    descspan.classList.add(".done");

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener("submit", function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
      event.preventDefault();

      const description = event.target.elements[0]["value"]; // event.target ....

      // hint: todoFunctions.addTodo
      const newState = todoFunctions.addTodo(state, description);
      // localStorage.setItem("state", JSON.stringify(newState));
      event.target.elements[0]["value"] = "";
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

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
    coverage;
  };

  if (container) renderState(state);
})();
