document.addEventListener("DOMContentLoaded", () => {
    const userForm = document.querySelector("#userForm");
    const userList = document.querySelector("#userList");
    const searchInput = document.querySelector("#search");
    const searchResults = document.querySelector("#searchResults");
    const errorsDiv = document.querySelector("#errors");
  
    let users = []; 
  
    userForm.addEventListener("submit", (e) => {
      e.preventDefault();
      errorsDiv.textContent = ""; 
  
      const name = document.querySelector("#name").value.trim();
      const email = document.querySelector("#email").value.trim();
      const age = document.querySelector("#age").value.trim();
      const gender = document.querySelector('input[name="gender"]:checked');
      console.log(typeof age);
  
      const errors = [];
      if (!name) errors.push("El nombre es obligatorio.");
      if (!email || !email.includes("@")) errors.push("El correo no es válido.");
      if (!age || isNaN(age) || Number(age) <= 0) errors.push("La edad debe ser un número mayor a 0.");
      if (!gender) errors.push("Debes seleccionar un género.");

      if (errors.length > 0) {
        errorsDiv.textContent = errors.join(" ");
        return;
      }
  
      users.push({ name, email, age: Number(age), gender: gender.value });
  
      renderUserList();
      userForm.reset(); 
    });
  
    function renderUserList() {
      userList.innerHTML = users
        .map((user) => `<li>${user.name} - ${user.email} - ${user.age} años - Género: ${user.gender}</li>`)
        .join("");
    }
  
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase().trim();
      const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(query)
      );
  
      searchResults.innerHTML = filteredUsers
        .map((user) => `<li>${user.name} - ${user.email} - ${user.age} años - Género: ${user.gender}</li>`)
        .join("");
    });
  });
  