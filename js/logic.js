function testfun(){
    return 1+1;
}

function makeObject(arr,description,done){
    return {id:arr.length+1,description:description,done:done};
}
function addTodo(array,obj){
    // let updatedTodo=[];
    // updatedTodo= JSON.parse(JSON.stringify(array))
    // return updatedTodo.push(obj);
    return [...array,obj];
    

}
function deleteTodo(array,id){
    return array.filter(function(obj){
        return obj.id !=id;
    })
}
function updatedTodo(array,newobj){
     return array.map(function(obj){
         if(obj.id===newobj.id){
             return newobj;
         }
         else{
             return obj;
         }}
     )}
  




if(typeof exports !== "undefined"){
    module.exports={
        testfun,
        makeObject,
        addTodo,
        deleteTodo,
        updatedTodo,
    }
}