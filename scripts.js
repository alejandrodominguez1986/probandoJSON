const caja = document.querySelector(".caja");
fetch("./productos.json")
  .then((response) => response.json())
  .then((Element => {
    Element.forEach((Element) => {
      let{imagen, nombre, uso, precio, id, stock} = Element
       caja.innerHTML += `
       <div class="cajita">
      <div class="divImagen">
        <img class="imgDiv" src="${imagen}">
        <h3>${nombre}</h3>
        <p>$${uso}</p>
        <p>$${precio}</p>
        <p>Stock: ${stock}</p>
        <button id="agregar${id}">Agregar</button>
      </div
      `;
    });
  }))