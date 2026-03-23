const button = document.getElementById("search");
button.addEventListener("click", fetchmovie);

async function fetchmovie() {
    const input = document.getElementById("text");
    let userInput = input.value.trim();

    if (userInput === "") {
        alert("Enter movie name");
        return;
    }

    try {
        const response = await fetch(`http://www.omdbapi.com/?s=${userInput}&apikey=fc98729a`);
        const data = await response.json();

        console.log(data);

        if (data.Response === "False") {
            renderError("Movie not found");
            return;
        }

        renderMovie(data.Search);

    } catch (error) {
        console.log(error);
        renderError("Something went wrong");
    }
}

function renderMovie(arr) {
    const container = document.getElementById("container");

    // clear previous results
    container.innerHTML = "";

    arr.forEach(movie => {
        const card = document.createElement("div");
        card.style.border = "1px solid white";
        card.style.margin = "10px";
        card.style.padding = "10px";
        card.style.width = "200px";

        const img = document.createElement("img");
        img.src = movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150";
        img.style.width = "100%";

        const title = document.createElement("h3");
        title.textContent = movie.Title;

        const year = document.createElement("p");
        year.textContent = movie.Year;

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(year);

        container.appendChild(card);
    });
}

function renderError(message) {
    const container = document.getElementById("container");
    container.innerHTML = `<p style="color:red;">${message}</p>`;
}