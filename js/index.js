const productos = [
    //ROPA
    {
        id: "remera-01",
        titulo: "remera-01",
        imagen: "./img/reme.jpg",
        categoria: {
            nombre: "remera",
            id: "ropa",
        },
        precio: 1000
    },
    {
        id: "remera-02",
        titulo: "remera-02",
        imagen: "./img/reme2.jpg",
        categoria: {
            nombre: "remera",
            id: "ropa",
        },
        precio: 1000
    },
    {
        id: "bermuda-01",
        titulo: "bermuda-01",
        imagen: "./img/bermuda.jpg",
        categoria: {
            nombre: "bermuda",
            id: "ropa",
        },
        precio: 1000
    },
    {
        id: "malla-01",
        titulo: "malla-01",
        imagen: "./img/malla.jpg",
        categoria: {
            nombre: "malla",
            id: "ropa",
        },
        precio: 1000
    },
    {
        id: "malla-02",
        titulo: "malla-02",
        imagen: "./img/malla2.jpg",
        categoria: {
            nombre: "malla",
            id: "ropa",
        },
        precio: 1000
    },
    {
        id: "zapas-01",
        titulo: "zapas-01",
        imagen: "./img/zapas.jpg",
        categoria: {
            nombre: "zapatillas",
            id: "ropa",
        },
        precio: 1000
    },
    //ACCESORIOS//
    {
        id: "tupper",
        titulo: "tupper",
        imagen: "./img/tupper.jpg",
        categoria: {
            nombre: "tupper",
            id: "accesorios",
        },
        precio: 1000
    },
    {
        id: "encendedor",
        titulo: "encendedor",
        imagen: "./img/fuego.jpg",
        categoria: {
            nombre: "encendedor",
            id: "accesorios",
        },
        precio: 1000
    },
    {
        id: "perfume-01",
        titulo: "perfume-01",
        imagen: "./img/azul.jpg",
        categoria: {
            nombre: "perfume",
            id: "accesorios",
        },
        precio: 1000
    },
    {
        id: "perfume-02",
        titulo: "perfume-02",
        imagen: "./img/invictus.jpg",
        categoria: {
            nombre: "perfume",
            id: "accesorios",
        },
        precio: 1000
    },
    {
        id: "anteojos",
        titulo: "anteojos",
        imagen: "./img/anteojos.jpg",
        categoria: {
            nombre: "anteojos",
            id: "accesorios",
        },
        precio: 7000
    },
    {
        id: "cartuchera",
        titulo: "cartuchera",
        imagen: "./img/cartu.jpg",
        categoria: {
            nombre: "cartuchera",
            id: "accesorios",
        },
        precio: 1000
    }
]

const contenedorProductos = document.getElementById("contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.getElementById("titulo-principal");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    let div ;

    productos.forEach(producto => {
        div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML=`
        <img class="producto-imagen" src= "${producto.imagen}" alt= "${producto.titulo}">
        <div class= "producto-detalles">
            <h3 class= "producto-titulo">${producto.titulo}</h3>
            <p class= "producto-precio">${producto.precio}</p>
            <button class= "producto-agregar" id= "${producto.id}">Agregar al carrito</button>
        </div>`;

    contenedorProductos.appendChild(div);

    })
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) =>{

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "todos") {
            const productosCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productosCategoria.categoria.id;


            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        }else{
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    })
})

