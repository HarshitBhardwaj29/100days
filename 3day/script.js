let list = JSON.parse(localStorage.getItem("items")) || [];
document.getElementById("addBtn").addEventListener("click", additem);
renderList();
function additem(){
    const input = document.getElementById("todoInput");
    const text = input.value.trim();
    if (text === "") return;
    list.push(text);
    saveItems();
    renderList();
    input.value = "";
}

function renderList(){
    const listElement = document.getElementById("list");
    listElement.innerHTML = "";
    list.forEach((element, index) => {
        const li = document.createElement("li");
        li.textContent = element;
        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.onclick = function(){
            deleteItem(index);
        };
        li.appendChild(delBtn);
        listElement.appendChild(li);
    });
}

function deleteItem(index){
    list.splice(index, 1);
    saveItems();
    renderList();
}

function saveItems(){
    localStorage.setItem("items", JSON.stringify(list));
}

document.getElementById("todoInput").addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        additem();
    }
});