document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const user = document.querySelector("#user").value;
    if (!user) {
        alert("No puede estar vacío");
        location.reload();
    }
    const url = `https://api.github.com/users/${user}`;
    const res = document.querySelector("#res");

    async function displayUser() {
        await fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return response.json().then(res => {
                    throw new Error(response.status + ": " + res.message);
                })
            }
        })
        .then(data => {
            console.log(data);

            let login = data.login
            let link = data.html_url
            let fechaCreacion = data.created_at;
            let repos = data.public_repos;
            let numSeguidores = data.followers;
            let listaSeguidores;
            
            let numSeguidos = data.following;
            let listaSeguidos;

            res.classList.remove("text-danger");
            res.innerHTML = `
            <p>Login: ${login} - Link: ${link}<p/>
            <p>Created at: ${fechaCreacion}<p/>
            <p>Repositories: ${repos}<p/>
            <p>Followers: ${numSeguidores}<p/>
            <p>Following: ${numSeguidos}<p/>
            `;					
        })
        .catch(error => {
            res.classList.add("text-danger");
            // res.innerHTML = "El usuario no existe";
            res.innerHTML = error;
        })
    }
    displayUser();
})