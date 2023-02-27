console.log("test");
console.log("data: ", data.currentDate);
const contenedorEventos = document.querySelector(".contenedor-eventos");

const arrayEventos = data.events;

let eventosHtml= "";

function mostrarEventos(arrayEventos) {
    for (const evento of arrayEventos) {
        eventosHtml += `<div class="col-12 col-sm-10 col-md-9 col-lg-4 col-xl-3 p-0 d-flex align-self-lg-stretch justify-content-center">
        
          <div class="card d-flex flex-column w-100">
            <img src= ${evento.image} class="card-img-top img-thumbnail" alt="...">
            <div class="card-body">
              <h5 class="card-title">${evento.name}</h5>
              <p class="card-text">${evento.description}</p>
            </div>
            <div class="btn-bottom d-flex justify-content-between align-content-center mt-3 gap-5">
                <p class="m-0 "> Price: $${evento.price}</p>
                <button class="btn btn-primary">See more...</button>
            </div>
          </div>
        
      </div>`
        
    }
    
}

mostrarEventos(arrayEventos)
contenedorEventos.innerHTML = eventosHtml;