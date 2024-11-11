let precio = 400000;
let cantidad = 0;
let precioSpan = document.querySelector(".precio-inicial");
let cantidadSpan = document.querySelector(".cantidad");
let valorTotalSpan = document.querySelector(".valor-total");


precioSpan.innerHTML = precio;

// Seleccionamos los botones
let botonAumentar = document.querySelector('#suma');
let botonDisminuir = document.querySelector('#resta');

// Evento para el botón "+"
botonAumentar.onclick = function() {
  cantidad++;
  cantidadSpan.innerHTML = cantidad;
  valorTotalSpan.innerHTML = precio * cantidad;
};

// Evento para el botón "-"
botonDisminuir.onclick = function() {
  if (cantidad > 0) {
    cantidad--;
    cantidadSpan.innerHTML = cantidad;
    valorTotalSpan.innerHTML = precio * cantidad;
  }
};
