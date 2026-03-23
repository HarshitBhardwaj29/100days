const input = document.getElementById("itemInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("list");

button.addEventListener("click", function () {

    const text = input.value;

    if(text === "") return;

    const li = document.createElement("li");

    li.innerText = text;

    li.addEventListener("click", function(){
        li.remove();
    });

    list.appendChild(li);

    input.value = "";
});