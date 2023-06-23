function Corpo() {
    const form = document.querySelector(".form");
    const lista = document.querySelector(".lista");
    const array = ["12"];
   
    function Enviar(event) {
      event.preventDefault();
      const add = document.querySelector("#add")
      array.push(add.value);
      console.log(array);
      lista.innerHTML += `<p>${add.value}</p>`;   
    }
  
    form.addEventListener("submit", Enviar);
    
  }
  
  Corpo();
