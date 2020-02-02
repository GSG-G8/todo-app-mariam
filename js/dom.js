const container=document.querySelector(".container");
// const done=document.querySelector(".is_done");
const description=document.querySelector(".input__description");
const addBtn=document.querySelector(".button-addTodo");
const btnremovelocal=document.querySelector(".button_clear");

let todo=[]
let data=localStorage.getItem("todoArray");
if(data){
    todo=JSON.parse(data);
}
else{
    todo=[];
}

window.onload =show();

function add(){
    const todoobject=makeObject(todo,description.value,false);
    todo=addTodo(todo,todoobject);
    localStorage.setItem("todoArray", JSON.stringify(todo));
    location.reload();
}
function show(){
    for(let i=0;i<todo.length;i++){
        let todoblock=document.createElement('div');
        todoblock.classList.add('todo_item');

        let done=document.createElement('input');
        done.classList.add('is_done');
        done.type="checkbox";
    
        let desc=document.createElement('input');
        desc.value=todo[i].description;
        desc.classList.add('input__todo');
        desc.disabled="disabled";
    
        
        const editbtn=document.createElement('button');
        editbtn.textContent="edit todo";
        editbtn.classList.add('button_edit');
    
       
        const deletebtn=document.createElement('button');
        deletebtn.textContent="delete todo";
        deletebtn.classList.add('button_delete');
    
        container.appendChild(todoblock);
        todoblock.appendChild(done);
        todoblock.appendChild(desc);
        todoblock.appendChild(editbtn);
        todoblock.appendChild(deletebtn);
    
    }
}

function clear(){
    localStorage.clear();
    location.reload();
}

    
addBtn.addEventListener('click',()=>{
    add();
});

btnremovelocal.addEventListener('click',clear);

// clear()


