const button = document.getElementById("submit");

button.addEventListener("click", fetchdata);

async function fetchdata() {
    const input = document.getElementById("user");
    const text = input.value.trim();
    if (text === "") {
        alert("Enter username");
        return;
    }
    try {
        const response = await fetch(`https://api.github.com/users/${text}`);
        const data = await response.json();
        console.log(data);
        if (data.message === "Not Found") {
            renderError("User not found");
            return;
        }
        renderUser(data);
    } catch (error) {
        console.log(error);
        renderError("Something went wrong");
    }
}

function renderUser(data) {
    const container = document.getElementById("result");
    container.innerHTML = "";
    const div = document.createElement("div");
    div.innerHTML = `
        <img src="${data.avatar_url}" width="100" />
        <h2>${data.login}</h2>
        <p>Followers: ${data.followers}</p>
        <p>Repos: ${data.public_repos}</p>
        <p>Bio: ${data.bio ? data.bio : "No bio available"}</p>
    `;
    div.classList.add("card");
    container.appendChild(div);
}

function renderError(message) {
    const container = document.getElementById("result");
    container.innerHTML = `<p style="color:red;">${message}</p>`;
}