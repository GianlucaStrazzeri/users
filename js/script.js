const listaUsuarios = document.getElementById("listaUsuarios");

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Hubo un error cargando los usuarios");
        }
        return response.json();
    })
    .then((users) => {
        const usersModified = users.map((user) => {
            const newUser = {
                ...user,
                age: Math.floor(Math.random() * 45) + 18,
                //./assets/img/1.jpeg
                img: `./assets/img/${user.id}.jpeg`,
            };
            return newUser;
        });
        printUsers(usersModified);
    });

const printUsers = (usersModified) => {
    // name, age, username, img, phone, email, company, address
    usersModified.forEach((user) => {
        const { name, age, username, img, phone, email, company, address } = user;
        const { name: companyName } = company;
        // address.street, usuario.address.suite, usuario.address.city
        const { street, suite, city } = address;
        listaUsuarios.innerHTML += `
        <li>
        <div class="info-img-container">
            <div class="info-container">
            <p><span>Nombre:</span>${name}</p>
            <p><span>Edad:</span>${age}</p>
            <p><span>Username:</span>${username}</p>
            <p><span>Phone:</span>${phone}</p>
            <p><span>Email:</span>${email}</p>
            </div>
            <img src="${img}" alt="">
        </div>
        <div class="company-address-info-container">
        <p><span>Compañia:</span>${companyName}</p>
            <p><span>Dirección:</span>${street}, ${suite}, ${city}</p>
        </div>
        </li>
        `;
    });
};