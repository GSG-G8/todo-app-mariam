const functions=require("./logic");
const testfun=functions.testfun;
const makeObj=functions.makeObject;
const addTodo=functions.addTodo;


test("test my file",function(){
 const actual=testfun();
 const expected=2;
 expect(actual).toBe(expected);
})


test("convert var to object",()=>{
    const actual=makeObj(1,"todoname",false);
    const expected={id:1,description:"todoname",done:false};
    expect(actual).toEqual(expected);
})


test("add new todo to todo array",()=>{
    const actual=addTodo([{id:1,description:"name",done:false}],{id:2,description:"name",done:false});
    const expected=[{id:1,description:"name",done:false},{id:2,description:"name",done:false}];
    expect(actual).toEqual(expected);
})
