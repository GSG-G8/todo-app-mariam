const functions=require("./logic");
const testfun=functions.testfun;
const makeObj=functions.makeObject;
const addTodo=functions.addTodo;


test("test my file",function(){
 const actual=testfun();
 const expected=2;
 expect(actual).toBe(expected);
})




