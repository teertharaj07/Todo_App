const mainTodoElem = document.querySelector(".todo-lists-elem")
const inputValue = document.getElementById("inputValue")
// let localTodoLists = [];


const gettodoFromLocal = () => {
    return JSON.parse(localStorage.getItem("youtubeTodoList"))
};


const addTodoListLocalStorage=(localTodoLists)=>{
return localStorage.setItem("youtubeTodoList",JSON.stringify(localTodoLists))
}

let localTodoLists = gettodoFromLocal() || [];

//adding add to list dynamically
const addTodoDynamicElement = (curElem) => {
    const divElement = document.createElement("div");
    divElement.classList.add("main_todo_div");
    divElement.innerHTML = `<li>${curElem}</li><button class="deleteBtn">Delete</button>`;
    mainTodoElem.append(divElement);
}

const addTodoList = (e) => {
    e.preventDefault();
    const addTodoListValue = inputValue.value.trim();

    //    localTodoLists=gettodoFromLocal()||[];
    inputValue.value = "";
    if (addTodoListValue !== "" && !localTodoLists.includes(addTodoListValue)) {
        localTodoLists.push(addTodoListValue);
        // localTodoLists = new Set(localTodoLists); this line geting error
        localTodoLists = [...new Set(localTodoLists)];
        console.log(localTodoLists);

        //set on local storage
        localStorage.setItem("youtubeTodoList", JSON.stringify(localTodoLists))

        addTodoDynamicElement(addTodoListValue);
    };


    // console.log("testing");
    // const divElement = document.createElement("div");
    // divElement.classList.add("main_todo_div");
    // divElement.innerHTML = `<li>${inputValue.value}</li><button class="deleteBtn">Delete</button>`;
    // mainTodoElem.append(divElement);
};
const showTodoList = () => {
    // console.log(localTodoLists);
    localTodoLists.forEach((curElem) => {
        addTodoDynamicElement(curElem);

    });

};
showTodoList();

// remove the data
const removeTodoElem = (e) => {


    // console.log(e.target);
    const todoToRemove = e.target;
    let todoListContent = todoToRemove.previousElementSibling.innerText;

    let parentElem=todoToRemove.parentElement;

    console.log(todoListContent);

    localTodoLists = localTodoLists.filter((curTodo) => {
        return curTodo !== todoListContent.toLowerCase();
    });

    addTodoListLocalStorage(localTodoLists);
    parentElem.remove();

    // console.log(localTodoLists);





}
// document.querySelector(".btn").addEventListener("click", (e) => {
//     addTodoList(e);
// });

mainTodoElem.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(e.target);
    
    // console.log(e.target.classList.contains("deleteBtn"));
    if(e.target.classList.contains("deleteBtn")){
        removeTodoElem(e);
    }
    
    
    removeTodoElem(e);
});
document.querySelector(".btn").addEventListener("click", (e) => {
    
    addTodoList(e);
});

