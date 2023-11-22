//paso 1 interagir con html Acceder al dom para llamar el Id Listausario y poder utilizaro 
//como constante en javascript

const listaUsuario= document.getElementById("listaUsuarios");


// Individuar la estructura de salida de datos  de la api (utilizando un console.log)
// e insertar los endpoint a Template usando las comillas francesas `<p> nombre: ${name} </p>`

// LLamar la api `https://jsonplaceholder.typicode.com/users`. para rellenar estos datos utilizando 
//el metodo fetch() 


fetch('https://jsonplaceholder.typicode.com/users')
     .then((response) => {        
        if (!response.ok) {          
            throw new Error('La solicitud no fue exitosa');
       }
       return response.json();
     })      
     .then((data) => {
      console.log(data)
      data.forEach(() => {
        let Template=  (`<div class="gap"></div><li>Nombre:${data.name}</li> </li> <li>Username:${data.username}</li><li>Sito web:${data.website}</li> <li>Telefono:${data.phone}</li><li>Email:${data.email}</li><li>Compañia:${data.company}</li><li>Dirección:${data.address}</li><li><div class="gap"></div>`)
        listaUsuario.innerHTML += Template;}
      
      ) }) .catch((error) => {
        listaUsuario.innerText = 'No se pudo crear una persona imaginaria';
       }) ;


//El console.log de la organización del objeto me saca  
//id   //name   //username   //email   //address   //phone   //website   //company


//Paso2 
//crear una constante Template con una estructura li donde aparezcan  (Nombre Edad username telefono Email Compañia  Dirección)
//utilizando createElement()


//utilizar  los datos del console.log(data) con las comillas fracesas dentro del template
//const Template=  `<li>Nombre:${data.name}</li> <p>Edad:${data.Aún no identificado}</li> <li>Username:${data.username}</li>Sito web:${data.website}</li>
// <li>Telefono:${data.phone}</li><li>Email:${data.email}</li><li>Compañia:${data.company}</li><li>Dirección:${data.address}</li><li>`)

//insertar esta estructura en el espacio html utilizando innerHTML()

//listaUsuario.innerHTML += Template


//insertar esta estructura en el espacio html utilizando innerHTML()


//EJEMPLO DE COMO PODRÍA SER
//en lugar de poner un document.createElement

//const Template=  `<li>Nombre:${data.name}</li> <p>Edad:${data.name}</li> <li>Username:${data.name}</li> <li>Telefono:${data.name}</li><li>Email:${data.name}</li><li>Compañia:${data.name}</li><li>Dirección:${data.name}</li>`)
//innerHTML += Template



//Paso7 Para recorrerlo empiezo destructurando el objeto podría hacerlo de la siguiente manera:

//const {id, name, username, email, address, phone, website, company} = persona




//Paso 8 modificar la estructura visual de css utilizando el metodo display flex aplicandolo a los varios 
//elementos de la pagína






