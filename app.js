let input = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
    if(input.value == "") {
        alert("Please enter a task")
    } else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${input.value} <i class="fa fa-trash" aria-hidden="true"></i>`
        text.appendChild(newEle);
        input.value="";
        newEle.querySelector("i").addEventListener("click" ,remove);
        function remove (){
            newEle.remove()
        }
    }
}

input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        Add(input.value);
        input.value = ''; // Clear the input field
    }
})

