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
            if (!response.ok) {
                return response.json().then(res => {
                    throw new Error(response.status + ": " + res.message);
                });
            }
            return response.json();
        })
        .then(async user => {
            console.log(user);

            let login = user.login
            let link = user.html_url
            let bio = user.bio;
            let fechaCreacion = user.created_at;
            let repos = user.public_repos;
            let numSeguidores = user.followers;
            
            let fetchSeguidores = await fetch(user.followers_url)
            if (!fetchSeguidores.ok) {
                throw new Error("No se ha podido obtener la lista de seguidores")
            }
            let listaSeguidores = await fetchSeguidores.json();
            console.log(listaSeguidores);
            
            let numSeguidos = user.following;
            let fetchSeguidos;

            res.classList.remove("text-danger");
            res.innerHTML = `
            <p>Login: ${login} - Link: <a href="${link}" target="_blank">${link}<a><p/>
            <p>Bio: ${bio}<p/>
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