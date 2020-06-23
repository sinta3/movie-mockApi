let addBtn = document.getElementById("add");
addBtn.addEventListener("click", addMovie);

async function addMovie() {
    try {
        let tittle = document.getElementById("tittle").value;
        let genre = document.getElementById("genre").value;
        let year = document.getElementById("release").value;
        let img = document.getElementById("img").value;
        let desc = document.getElementById("desc").value;

        let movieData = {
            tittle,
            genre,
            year,
            img,
            desc,
        };

        let url = `https://5ef168c41faf160016b4d5af.mockapi.io/api/movies`;
        let options = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(movieData),
        };

        let response = await fetch(url, options);
        let result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
