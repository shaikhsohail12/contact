const form = document.querySelector("#form");
const nameInput = document.querySelector("#name-input");
const numInput = document.querySelector("#num-input");
const emailInput = document.querySelector("#email-input");
const taskLists = document.querySelector("#task-lists");
const submitBtn = document.querySelector("#submit-btn");

form.addEventListener("submit", manageTask);
taskLists.addEventListener("click", validateBtns);

let taskArr = [];
let taskIdToEdit;
let taskIdToEdits;
let taskIdToEdita;

function manageTask(e) {


    
    e.preventDefault();
    if(nameInput.value === ""){
        alert("Please Fill The Form");
    }else if(numInput.value === ""){
        alert("Please Fill The Form");
    }else if(emailInput.value === ""){
        alert("Please Fill The Form");
    }else{
    
    // creating an li
    const li = document.createElement("li");
    

    // appending text node to li
    const br = document.createElement('br');
    const name = document.createTextNode(nameInput.value); 
    const def_name = document.createTextNode("NAME: ");      
    li.appendChild(def_name);
    li.appendChild(name);
    li.appendChild(br);

    
    const num = document.createTextNode(numInput.value);
    const def_num = document.createTextNode("PHONE NUMBER: ");      
    const br2 = document.createElement('br');
    li.appendChild(def_num);
    li.appendChild(num);
    li.appendChild(br2);

    const email = document.createTextNode(emailInput.value);
    const def_email = document.createTextNode("EMAIL: ");      
    li.appendChild(def_email);
    li.appendChild(email);

    // creating buttons
    const editBtn = document.createElement("button");
    const delBtn = document.createElement("button");

    editBtn.className = "edit-btn";
    delBtn.className = "del-btn";

    editBtn.appendChild(document.createTextNode("Edit"));
    delBtn.appendChild(document.createTextNode("Delete"));


    // appending buttons to li
    li.appendChild(editBtn);
    li.appendChild(delBtn);

    if (submitBtn.value === "Add Task") {
        taskArr.push(li);
    }

    if (submitBtn.value === "Edit Task") {
        console.log(taskArr[taskIdToEdit]);
        taskArr[taskIdToEdit].childNodes[1].nodeValue = nameInput.value;
        
        taskArr[taskIdToEdits].childNodes[4].nodeValue = numInput.value;

        taskArr[taskIdToEdita].childNodes[7].nodeValue = emailInput.value;
        submitBtn.value = "Add Task";
    }

    for (let i = 0; i < taskArr.length; i++) {
       li.id = i; 
       taskLists.appendChild(taskArr[i]); 
    }
    console.log(taskArr);

    nameInput.value = "";
    numInput.value = "";
    emailInput.value = "";
}
}
function validateBtns(e) {
    

    if (e.target.classList.contains("del-btn")) {
        var result = confirm("Delete this Contact?");
        if (result == true) {
            taskLists.removeChild(e.target.parentElement);
            const taskId = e.target.parentElement.id;
            taskArr.splice(taskId, 1);
        } 
       
    }

    if (e.target.classList.contains("edit-btn")) {
        
        submitBtn.value = "Edit Task";
        taskIdToEdit = e.target.parentElement.id;
        nameInput.value = e.target.parentElement.childNodes[1].nodeValue;

        taskIdToEdits = e.target.parentElement.id;
        numInput.value = e.target.parentElement.childNodes[4].nodeValue;

        taskIdToEdita = e.target.parentElement.id;
        emailInput.value = e.target.parentElement.childNodes[7].nodeValue;
    }
}