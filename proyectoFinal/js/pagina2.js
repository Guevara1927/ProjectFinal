const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector('.container-cart-products');


btnCart.addEventListener('click', ()=>{
    containerCartProducts.classList.toggle('hidden-cart');
});

const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');


// Lista de todos los contenedores de productos

const productList = document.querySelector('.container-items')


//Variables de arreglos de productos

let allProducts = [ ];
const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos')








productList.addEventListener('click', e =>{


    //Condicional para que solo muestre cuando se unda añadir boton
    if(e.target.classList.contains('info-boton')){
        const product = e.target.parentElement

        const infoProduct = {
            quantity : 1,
            title: product.querySelector('h2').innerText,
            precio: product.querySelector('p').innerText
        }


        //Sacar el h2 de la cart
        // console.log(infoProduct);
        const exits = allProducts.some(product => product.title === infoProduct.title) 
        
        if(exits){
            const product = allProducts.map(product =>{
                if(product.title === infoProduct.title){
                    product.quantity++;
                    return product
                }else{
                    return product
                }
            })

            allProducts = [...allProducts]
        }else{
            allProducts = [...allProducts,infoProduct];
        }


        // allProducts = [...allProducts,infoProduct];

        showHTML()

    }
    console.log(allProducts);


})

//Evento

rowProduct.addEventListener('click', e =>{
   if(e.target.classList.contains('icon-close')) {
    const product = e.target.parentElement;
    const title = product.querySelector('p').innerText;

    allProducts = allProducts.filter(
        product => product.title !== title
    );
    console.log(allProducts);
    showHTML();
   }
})



// Funcion para mostrar html

const showHTML = ()=>{

    if(!allProducts.length){
        containerCartProducts.innerHTML = `
        <p class= "cart-empty">El carrito esta vacio</p>
        `
    }

    // Limmpiar html
    rowProduct.innerHTML = "";

    let total = 0;
    let totalOfProducts = 0;

    
    allProducts.forEach(product =>{
        const containerProduct = document.createElement('div')
        containerProduct.classList.add('cart-product')

        containerProduct.innerHTML = `<div class="info-cart-product">
                            <span class="cantidad-producto-carrito">${product.quantity}
                            </span>
                            <p class="titulo-producto-carrito">
                                ${product.title}
                            </p>
                            <span class="precio-carrito-producto">${product.precio}</span>
                              
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                          </svg>`

                          rowProduct.append(containerProduct);

                          total = total + parseInt(product.quantity * product.precio);
                          totalOfProducts = totalOfProducts + product.quantity;




    });

    // console.log(total);

    valorTotal.innerHTML = `$${total}`;
    countProducts.innerHTML = totalOfProducts;
}

// PARTE DEL BUSCADOR

    
document.addEventListener('keyup', (e) => {
    if (e.target.matches("#buscador")) {
        const searchText = e.target.value.toLowerCase(); // Obtener el valor del campo de búsqueda
        
        // Recorrer todos los productos (con clase .item)
        document.querySelectorAll('.item').forEach(item => {
            // Comparar el texto de cada producto con el valor de búsqueda
            const itemText = item.innerText.toLowerCase();  // Obtener todo el texto dentro del producto

            // Si el producto incluye el texto del buscador, lo mostramos
            if (itemText.includes(searchText)) {
                item.classList.remove('filtro'); // Eliminar clase 'filtro' para mostrar
            } else {
                item.classList.add('filtro'); // Añadir clase 'filtro' para ocultar
            }
        });
    }
});




// De aqui la funcion scroll
// Selecciona el contenedor que quieres mostrar
const hiddenContainer = document.querySelector('.hiden-container');

// Agrega el evento de scroll
window.addEventListener('scroll', function() {
    // Verifica si el scroll ha superado los 300px
    if (window.scrollY > 500) {
        // Muestra el contenedor
        hiddenContainer.style.display = 'block';
    } else {
        // Oculta el contenedor cuando el scroll está por debajo de 300px
        hiddenContainer.style.display = 'none';
    }
});

// Pagar

// Selecciona el botón por su id
const miBoton = document.getElementById('.pago');

// Agrega un event listener para el clic
miBoton.addEventListener('click', function() {
    // Muestra una alerta
    alert('¡Estás siendo redirigido!');
    
    // Redirige a un archivo dentro del mismo proyecto después de un pequeño retraso
    setTimeout(() => {
        window.location.href = '../pages/pago.html'; // Ruta relativa a tu archivo en el proyecto
    }, 1000); // Espera 1 segundo (1000 ms) antes de redirigir
});




