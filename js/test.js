const todoFunctions = require("./logic");

//test the logic and test file
test("create new todo", () => {
  const actual = 1;
  const expected = 1;
  expect(actual).toBe(expected);
});
//array todo for test the result
const todoTest = [
  { id: 1, description: "descripton", done: false },
  { id: 2, description: "descripton", done: false }
];
//add todo to array todotest
test("create new todo", () => {
  const actual = todoFunctions.addTodo([], "descripton");
  const expected = [{ id: 1, description: "descripton", done: false }];
  expect(actual).toEqual(expected);
});
//add another todo
test("create new todo2", () => {
  const actual = todoFunctions.addTodo(
    [{ id: 1, description: "descripton", done: false }],
    "done"
  );
  const expected = [
    { id: 1, description: "descripton", done: false },
    { id: 2, description: "done", done: false }
  ];
  expect(actual).toEqual(expected);
});
//delete todo with exist id
test("delete todo when id on array", () => {
  const actual = todoFunctions.deleteTodo(todoTest, 1);
  const expected = [{ id: 2, description: "descripton", done: false }];
  expect(actual).toEqual(expected);
});
//delete todo with not exist id
test("delete todo when id not on array", () => {
  const actual = todoFunctions.deleteTodo(todoTest, 3);
  const expected = todoTest;
  expect(actual).toEqual(expected);
});

//test switch done from false to true
test("mark todo on exist id switch false to true", () => {
  const actual = todoFunctions.markTodo(todoTest, 1);
  const expected = [
    { id: 1, description: "descripton", done: true },
    { id: 2, description: "descripton", done: false }
  ];
  expect(actual).toEqual(expected);
});
//test switch done from true to false
test("mark todo on exist id switch true to false", () => {
  const actual = todoFunctions.markTodo(todoTest, 2);
  const expected = [
    { id: 1, description: "descripton", done: false },
    { id: 2, description: "descripton", done: true }
  ];
  expect(actual).toEqual(expected);
});
//test to switch done for dosnt exist id
test("mark todo on not exist id", () => {
  const actual = todoFunctions.markTodo(todoTest, 5);
  const expected = todoTest;
  expect(actual).toEqual(expected);
});
const sorttodo = [
  { id: 2, description: "descripton", done: false },
  { id: 1, description: "descripton", done: true }
];
// test("sort", () => {
//   const actual = todoFunctions.sortTodos(sorttodo);
//   const expected = [
//     { id: 1, description: "descripton", done: false },
//     { id: 2, description: "descripton", done: true }
//   ];
//   expect(actual).toEqual(expected);
// });
