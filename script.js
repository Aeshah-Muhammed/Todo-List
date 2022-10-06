const alert = document.querySelector('.alert');
const form = document.querySelector('.todo-form');
const todo = document.getElementById('todo');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.todo-container');
const list = document.querySelector('.todo-list');
const clearBtn = document.querySelector('.clear-btn');


// edit option 
let editElement;
let editFlag = false;
let editID = "";

// submit form 
form.addEventListener("submit", addItem);

// clear items
clearBtn.addEventListener('click', clearItems);

// load items 
// window.addEventListener('DOMContentLoaded', setupItems);

function addItem(e) {
    e.preventDefault();
    const value = todo.value;

     
    const id = new Date().getTime().toString();
    if(value && !editFlag){
        const element = document.createElement("article");

        // add class 
        element.classList.add("todo-item");
    
    //    add id 
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = ` <p class="tittle">${value}</p>
    <div class="btn-container">
        <button type="button" class="edit-btn">
            <img src="pen.svg" alt="">
        </button>
        <button type="button" class="delete-btn">
    <img src="trash.svg" alt="">
        </button>
    </div>`;
    // append child 
list.appendChild(element);
    
    const  deleteBtn = element.querySelector(".delete-btn");
    const  editBtn = element.querySelector(".edit-btn");
    deleteBtn.addEventListener("click", deleteItem);
    editBtn.addEventListener("click", editItem);
    
      
        // display alert
        displayAlert("Item added to the list", "success");
    
        // show container 
        container.classList.add("show-container");

        // setBackToDefault
setBackToDefault();

} else if(value && editFlag) {
    editElement.innerHTML = value;
    displayAlert('value changed', 'success');
    // edit localStorage 
// editLocalStorage(editID,value);....
setBackToDefault();
} else {
   displayAlert("please enter value", "danger");
}
}
// display alert
function displayAlert(text,action){
alert.textContent = text;
alert.classList.add(`alert-${action}`);

    // remove alert 

    setTimeout(function(){
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    }, 1000 );
}
// clear items 
function clearItems(){
    const items = document.querySelectorAll('.todo-item');
    if(items.length > 0){
        items.forEach(function(item) {
            list.removeChild(item);
        });
    }
    container.classList.remove("show-container");
    displayAlert("empty list", "danger");
    setBackToDefault();
}
// delete function
function deleteItem(e) {
const element = e.currentTarget.parentElement.parentElement;
const id = element.dataset.id;
list.removeChild(element);
if (list.children.length === 0) {
container.classList.remove("show-container");
}
displayAlert("item removed", "danger");
setBackToDefault();
}

// edit function 
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;

    //set edit item 
    editElement = e.currentTarget.parentElement.previousElementSibling;
    // set  form value 
    todo.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "edit";

}

// set back to default 
function setBackToDefault() {
    todo.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit";
}
// local storage 
// function addToLocalStorage(id,value){
//     const todo = {id,value};
//     let items = getLocalStorage();

//     items.push(todo);
//     localStorage.setItem("list", JSON.stringify(items));

//     // console.log("added to local storage");
// }...
// function removeFromLocalStorage(id) {
//     let items = getLocalStorage();

//     items = items.filter(function (item) {
//         if(item.id !== id) {
// return item;
//         }
//     });
//     localStorage.setItem("list", JSON.stringify(items));

// }......
// function editLocalStorage(id, value) {
//     let items = getLocalStorage();
//     items = items.map(function(item){
//         if(item.id === id ) {
//           item.value = value;  
//         }
//         return item;
//     });
//     localStorage.setItem("list", JSON.stringify(items));

// }

// function getLocalStorage() {
//     return  localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
// }.......

// localStorage API
// setup items 

// function setupItems(){
//     let items = getLocalStorage();
//     if(items.length > 0 ) {
// items.forEach(function(item){
//     createListItem(item.id, item.value)
// });
// container.classList.add("show-container");
//     }
// }........
function createListItem(id, value) {
   

}
   