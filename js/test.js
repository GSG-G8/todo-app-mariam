const functions=require("./logic");
const testfun=functions.testfun;
const makeObj=functions.makeObject;
const addTodo=functions.addTodo;
const deleteTodo=functions.deleteTodo;
const updateTodo=functions.updatedTodo;


test("test my file",function(){
 const actual=testfun();
 const expected=2;
 expect(actual).toBe(expected);
})


test("convert var to object",()=>{
    const actual=makeObj([],"todoname",false);
    const expected={id:1,description:"todoname",done:false};
    expect(actual).toEqual(expected);
})


test("add new todo to todo array",()=>{
    const actual=addTodo([{id:1,description:"name",done:false}],{id:2,description:"name",done:false});
    const expected=[{id:1,description:"name",done:false},{id:2,description:"name",done:false}];
    expect(actual).toEqual(expected);
})
test("delete todo with todo id",()=>{
    const actual=deleteTodo([{id:1,description:"name",done:false},{id:2,description:"name",done:false}],2);
    const expected=[{id:1,description:"name",done:false}];
    expect(actual).toEqual(expected);

})
test("update todo with todo id on obj",()=>{
    const actual=updateTodo([{id:1,description:"name",done:false}],{id:1,description:"name",done:true});
    const expected=[{id:1,description:"name",done:true}];
    expect(actual).toEqual(expected);

})
test("update todo with todo id not on obj",()=>{
    const actual=updateTodo([{id:1,description:"name",done:false}],{id:2,description:"name",done:true});
    const expected=[{id:1,description:"name",done:false}];
    expect(actual).toEqual(expected);

})

