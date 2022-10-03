var productos_actuales = JSON.parse(localStorage.getItem('productos_actuales'));

if (productos_actuales){
    for (var i = 0; i < productos_actuales.length; i++){
        agregar_producto(productos_actuales[i][0], productos_actuales[i][1], productos_actuales[i][3]);
    }
}

function agregar_producto(imagen_src, nombre, precio){
    let container_productos = document.querySelector(".editarProducto__container");

    let div_producto = document.createElement("div");
    div_producto.classList.add("productos__producto");

    let div_btns = document.createElement("div");
    div_btns.classList.add("editarProducto__acciones");
    let img_editar = document.createElement("img");
    img_editar.classList.add("editarProducto__accion");
    img_editar.classList.add("editar");
    img_editar.src = './assets/images/editar.png';
    img_editar.alt = "Editar";
    let img_borrar = document.createElement("img");
    img_borrar.classList.add("editarProducto__accion");
    img_borrar.classList.add("eliminar");
    img_borrar.src = './assets/images/eliminar.png';
    img_borrar.alt = "Eliminar";
    div_btns.appendChild(img_editar);
    div_btns.appendChild(img_borrar);

    let img = document.createElement("img");
    img.classList.add("producto__img");
    img.src = imagen_src;
    img.alt = "Img"

    let h3 = document.createElement("h3");
    h3.classList.add("producto__h3");
    h3.textContent = nombre;

    let p = document.createElement("p");
    p.classList.add("producto__precio");
    p.textContent = "$" + " " + precio + ",00";

    let a = document.createElement("a");
    a.classList.add("producto__verProducto");
    a.textContent = "Ver producto";
    a.href = "#";

    div_producto.appendChild(div_btns);
    div_producto.appendChild(img);
    div_producto.appendChild(h3);
    div_producto.appendChild(p);
    div_producto.appendChild(a);

    container_productos.appendChild(div_producto);
}
