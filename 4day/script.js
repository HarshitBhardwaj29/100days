let list = JSON.parse(localStorage.getItem("items")) || [];

const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const listElement = document.getElementById("list");

addBtn.addEventListener("click", addItem);
clearBtn.addEventListener("click", clearAll);
renderList();
async function addItem(){
    try {
        addBtn.disabled = true;
        addBtn.innerText = "Loading...";

        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await response.json();

        list.push(data);

        saveItems();
        renderList();

    } catch (error) {
        alert("Failed to fetch joke");
        console.log(error);
    } finally {
        addBtn.disabled = false;
        addBtn.innerText = "Get Joke";
    }
}

function renderList(){
    listElement.innerHTML = "";
    list.forEach((element, index) => {
        const li = document.createElement("li");
        li.textContent = element.setup + " 😂 " + element.punchline;
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

function clearAll(){
    list = [];
    saveItems();
    renderList();
}

function saveItems(){
    localStorage.setItem("items", JSON.stringify(list));
}