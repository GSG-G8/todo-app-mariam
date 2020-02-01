function testfun(){
    return 1+1;
}

function makeObject(id,description,done){
    return {id:id,description:description,done:done};
}
function addTodo(array,obj){
    // let updatedTodo=[];
    // updatedTodo= JSON.parse(JSON.stringify(array))
    // return updatedTodo.push(obj);
    return [...array,obj];
    

}

if(typeof exports !== "undefined"){
    module.exports={
        testfun,
        makeObject,
        addTodo,
    }
}