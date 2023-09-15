class Producto {
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }
}



const productos = [];
const form = document.querySelector("#formulario");
const listaProductos = document.getElementById("lista-productos");
form.addEventListener("submit", e => {
    e.preventDefault()
    const inputProducto = document.querySelector('#Producto')
    const inputPrecio = document.querySelector('#Precio')

    const producto = inputProducto.value;
    const precio = parseFloat(inputPrecio.value);

    if (!isNaN(precio) && producto) {
        const prod = new Producto(producto, precio);
        productos.push(prod);
        agregarProductoALista(prod);
        inputProducto.value = "";
        inputPrecio.value = "";
    } else {
        alert("Por favor, ingresa un producto y un precio válido.");
    }
});

function agregarProductoALista(producto) {
    const li = document.createElement("li");
    li.innerHTML = `${producto.nombre}: $${producto.precio}`;
    listaProductos.appendChild(li);
}

















// function calcularPorcentaje (precioAntiguo, nuevoPrecio){
//     const cantAumento = (nuevoPrecio - precioAntiguo) / precioAntiguo * 100
//     return cantAumento
// }

// const Menu = [ '1) Ingresar Producto', '2) Actualizar precio', '3) Ver catálogo']
// const productos = []
// let cantProductos 

// while(true){
//     let resp = parseInt(prompt("----MENU---- \n" + Menu.join("\n") + "\nIngrese la opción deseada"))
//         while(isNaN(resp)){
//             alert("Error: debe ingresar un número valido")
//             resp = parseInt(prompt("----MENU---- \n" + Menu.join("\n") + "\nIngrese la opción deseada"))
//         }

//     switch(resp){
//         case 1: 
//             cantProductos = parseInt(prompt("Cuantos productos desea ingresar?"));
//                 while(isNaN(cantProductos)){
//                     alert("Error: debe ingresar un número valido")
//                     cantProductos = parseInt(prompt("Cuantos productos desea ingresar?"));
//                 }
//             for(let i = 0; i < cantProductos; i++){
//                 const nombre = prompt("Ingrese el nombre de su producto " + (i + 1))
//                 let precio = parseFloat(prompt("Ingrese el precio de su producto " + (i + 1)))
//                     while(isNaN(precio)){
//                         alert('Error: debe ingresar un número valido')
//                         precio = parseFloat(prompt("Ingrese el precio de su producto " + (i + 1)))
//                     }
//                 const prod = new Producto(nombre, precio)
//                 productos.push(prod)
//             }
//             alert("Tus productos fueron cargados con exito")
                
//             break
//         case 2:
//             const productoInput = prompt("Ingrese el nombre del producto a actualizar")
//             const productoPorNombre = productos.find(producto => producto.nombre === productoInput)
//                 if (productoPorNombre) {
//                     const nuevoPrecio = parseFloat(prompt("Ingrese el nuevo precio para el producto"))
//                     const precioAntiguo = productoPorNombre.precio
//                     const resultado = calcularPorcentaje(precioAntiguo, nuevoPrecio)
//                     productoPorNombre.precio = nuevoPrecio
                    
//                     alert('Precio actualizado con exito \nEl aumento es de ' + resultado +'%')
//                 } else {
//                     alert("No se encontró ningún producto con el nombre indicado.")
//                 }
//             break
//             case 3:
//                 let productosStr = "";
            
//                 for (let i = 0; i < productos.length; i++) {
//                     const producto = productos[i];
//                     productosStr += (i + 1) + ') ' + producto.nombre + ' $' + producto.precio + '\n';
//                 }
            
//                 alert("Catálogo de productos:\n" + productosStr);
//                 break;
            
            
//     }
// }



