let addBtn = document.getElementById("add");
addBtn.addEventListener("click", addMovie);
let container2 = document.getElementById("container2");
let container = document.getElementById("container");

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
        showMovie();
    } catch (error) {
        console.error(error);
    }
}

async function showMovie() {
    try {
        let urls = `https://5ef168c41faf160016b4d5af.mockapi.io/api/movies`;
        let option = {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        };

        let show = await fetch(urls, option);
        let shows = await show.json();

        // for (let i = 0; i > 1; i++) {
        let item = shows[shows.length - 1];
        console.log(`${item["tittle"]}`);
        let div = document.createElement("div");
        div.setAttribute("class", "card");

        let img = document.createElement("img");
        img.setAttribute("src", `${item.img}`);
        img.setAttribute("class", "card-img-top");

        let div2 = document.createElement("div");
        div2.setAttribute("class", "card-body");

        let p = document.createElement("p");
        p.setAttribute("class", "card-text");
        p.innerHTML = `${item.tittle} </br> ${item.genre} </br> ${item.year} </br> ${item.desc}`;

        container2.appendChild(div);
        div.appendChild(img);
        div.appendChild(div2);
        div2.appendChild(p);

        //             <div class="card" style="width: 18rem;">
        //   <img src="..." class="card-img-top" alt="...">
        //   <div class="card-body">
        //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //   </div>
        // </div>
        // }
    } catch (error) {
        console.error(error);
    }
}
