class Producto {
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }
}

function refrescar() {
    listaProductos.innerHTML = ''; 

    productos.forEach(p => {
        const liProducto = agregarProductoALista(p); 
        listaProductos.appendChild(liProducto);
    });
}




const form = document.querySelector("#formulario");
const inputProducto = document.querySelector('#Producto')
const inputPrecio = document.querySelector('#Precio')
const listaProductos = document.getElementById("lista-productos");
let productos = [];
const jsonAlmacenados = localStorage.getItem('productos')
if (jsonAlmacenados){
    productos = JSON.parse(jsonAlmacenados)
}
refrescar()



form.addEventListener("submit", e => {
    e.preventDefault()


    if (!isNaN(inputPrecio.value) && inputProducto.value) {
        const prod = new Producto(inputProducto.value, inputPrecio.value);
        productos.push(prod);
        localStorage.setItem('productos', JSON.stringify(productos))
        agregarProductoALista(prod);
        refrescar()
        inputProducto.value = "";
        inputPrecio.value = "";
    } else {
        alert("Por favor, ingresa un producto y un precio válido.");
    }
});

function agregarProductoALista(producto) {
    const li = document.createElement("li");
    li.classList.add("producto-item");

    const nombreSpan = document.createElement("span");
    nombreSpan.textContent = producto.nombre;
    nombreSpan.classList.add("nombre-producto");

    const precioSpan = document.createElement("span");
    precioSpan.textContent = `$${producto.precio}`;
    precioSpan.classList.add("precio-producto");

    li.appendChild(nombreSpan);
    li.appendChild(precioSpan);

    return li;
}





















