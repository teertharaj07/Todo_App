# Creating a Basic Todo List with local storage

## 1. HTML Structure

-Create an HTML structure with an input field,a button and a container to hold the todo items.

## 2.JavaScript Setup

--Select the necessary DOM elements and store references (e.g., `mainTodoElem` and `inputValue`).

## 3. Add Click Events

-Add a click event listener to the "Add Todo" button (`btn`)
-In the event listener, call a function (e.g., `addTodoList`) to handle adding a new todo

## 4. Add Todo Function 
-In the `addtodoList` function, prevent the default from submission.
- Create a new todo element(e.g., a `div` with a class  `main_todo_div`) with the input value and a delete button.
- Append the new todo element to the container(`mainTodoElem`).
-Store the todo data in an array (`localTodoLists`) and update local Storage using `local Storage.setItem`.

# 5. Get Todo from local storage

- create a function (e.g., `gettodoFromLocal`) to retrieve todo data from local storage  using `localStorage.getItem`
- Use `JSON.parse` to convert the stored string into  an array.

## show Todos

- Create a function (e.g., `showTodoList`) to display todos on page load.
- retrieve todo data from local Strorage using `getTodoListFromLocal`.
- Iterate through the array and dynamically and todos the container.

## 7. REmove todo function 

- create a function (e.g., `removeTodo`) to handle removing a todo.
- use event delegation by addinf a click events listener to the container (`miniTodoElem`) 
- check if the clicked element a class of " deleteBtn" and call the `removeTodo` function

## 8. update Local Storage on remove 

- In the `removeTodo` function, update the `localTodoLists` array by filtering out the remove todo.
-Update LOcal Storage using `localStorage.setItem`

