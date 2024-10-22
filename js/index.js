function calcularCostoTotal() {
    return carrito.reduce((total, producto) => total + producto.precio, 0);
}

function añadirCarrito(id) {
    const producto = PRODUCTOS_ARRAY.find(prod => prod.id === id);
    if (producto) {
        carrito.push(producto);
        alert(`${producto.nombre} agregado al carrito`);
        const total = calcularCostoTotal();
        alert(`Costo total: $${total}`);
    }
}


const PRODUCTOS_ARRAY = [
    {
        id: 'vol2',
        nombre: 'Refill VOL.2: Restauración',
        precio: 20000,
        marca: 'Rostro'
    },
    {
        id: 'refill/a',
        nombre: 'Refill Defensa AM/PM',
        precio: 15000,
        marca: 'Rostro'
    },
    {
        id: 'vol3',
        nombre: 'Refill VOL.3: Bakuchiol',
        precio: 30000,
        marca: 'Rostro'
    },
    {
        id: 'contorno',
        nombre: 'Contorno de ojos',
        precio: 10000,
        marca: 'Rostro'
    },
    {
        id: 'bruma',
        nombre: 'Bruma Reparadora',
        precio: 10000,
        marca: 'Cuerpo'
    },
    {
        id: 'fps',
        nombre: 'Protector Solar FPS',
        precio: 25000,
        marca: 'Rostro'
    }
];

let carrito = [];

function añadirCarrito(id) {
    const producto = PRODUCTOS_ARRAY.find(prod => prod.id === id);
    if (producto) {
        carrito.push(producto);
        alert(`${producto.nombre} agregado al carrito`);
        const total = calcularCostoTotal();
        alert(`Costo total: $${total}`);
    }
}

function calcularCostoTotal() {
    return carrito.reduce((total, producto) => total + producto.precio, 0);
}

function mostrarProductos(FILTRADO_PRODUCTOS) {
    const PRODUCTOS_SECTION = document.getElementById('productos');
    PRODUCTOS_SECTION.innerHTML= '';
    FILTRADO_PRODUCTOS.forEach(producto =>{
        const CARD_DIV = document.createElement('div');
        CARD_DIV.className = 'card-container';
        CARD_DIV.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button onclick="añadirCarrito('${producto.id}')">Agregar Carrito</button>
        `;
        PRODUCTOS_SECTION.appendChild(CARD_DIV);
    });
}

// FUNCION DE FILTRADO
function filtrarProductos(marca){
    let FILTRADO_PRODUCTOS;
    if(marca){
        FILTRADO_PRODUCTOS = PRODUCTOS_ARRAY.filter(producto => producto.marca === marca);
    } else {
        FILTRADO_PRODUCTOS = PRODUCTOS_ARRAY; // Asegúrate de mostrar todos los productos si no hay filtro
    }
    mostrarProductos(FILTRADO_PRODUCTOS);
}

mostrarProductos(PRODUCTOS_ARRAY);

document.getElementById('todos').addEventListener('click', () => filtrarProductos(''));
document.getElementById('Cuerpo').addEventListener('click', () => filtrarProductos('Cuerpo'));
document.getElementById('Rostro').addEventListener('click', () => filtrarProductos('Rostro'));

