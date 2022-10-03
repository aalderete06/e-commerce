var agregar_btn = document.querySelector(".agregar__form__btn");

if (agregar_btn){
    agregar_btn.addEventListener("click", function(){
        let input_imagen = document.querySelector(".input_imagen");
        let imagen_src = input_imagen.value;
        
        let input_categoria = document.querySelector(".input_categoria")
        let categoria = input_categoria.value;
        
        let input_nombre = document.querySelector(".input_nombre")
        let nombre = input_nombre.value;

        let input_precio = document.querySelector(".input_precio")
        let precio = input_precio.value;

        let input_descripcion = document.querySelector(".input__descripcion")
        let descripcion = input_descripcion.value;

        if (imagen_src != "" && categoria != "" && nombre != "" && precio != "" && descripcion != ""){

            let producto_nuevo = [imagen_src, categoria, nombre, precio, descripcion];

            var productos_actuales = JSON.parse(localStorage.getItem('productos_actuales')) || [];
            productos_actuales.push(producto_nuevo);
            localStorage.setItem('productos_actuales', JSON.stringify(productos_actuales));      
        }
    })
}