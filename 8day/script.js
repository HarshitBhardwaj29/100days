let list = JSON.parse(localStorage.getItem("items")) || [];
let editingId = null;

const button = document.getElementById("submit");
const container = document.getElementById("result");

button.addEventListener("click", addnotes);
renderItems();

function addnotes(){
    const text = document.getElementById("text");
    let content = text.value.trim();

    if(content === "") return;

    if(editingId){
        list = list.map(item => {
            if(item.id === editingId){
                return { ...item, note: content };
            }
            return item;
        });

        editingId = null;
    } else {
        list.push({ id: Date.now(), note: content });
    }

    saveItems();
    renderItems();
    text.value = "";
}

function renderItems(){
    container.innerHTML = "";

    list.forEach((element) => {
        const div = document.createElement("div");
        div.classList.add("note");

        const text = document.createElement("p");
        text.textContent = element.note;

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";

        delBtn.onclick = function(){
            deleteItem(element.id);
        };

        editBtn.onclick = function(){
            editItem(element.id);
        };

        div.appendChild(text);
        div.appendChild(editBtn);
        div.appendChild(delBtn);

        container.appendChild(div);
    });
}

function deleteItem(removeid){
    list = list.filter(item => item.id !== removeid);
    saveItems();
    renderItems();
}

function editItem(editId){
    const note = list.find(item => item.id === editId);

    const text = document.getElementById("text");
    text.value = note.note;

    editingId = editId;
}

function saveItems(){
    localStorage.setItem("items", JSON.stringify(list));
}
function saveItems(){
    localStorage.setItem("items", JSON.stringify(list));
}