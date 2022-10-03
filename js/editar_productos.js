var editar_btn = document.querySelectorAll(".editar");

editar_btn.forEach(btn => {
    btn.addEventListener("click", function(){
        let nuevo_src = prompt("Ingrese la nueva URL");
        let nuevo_nombre = prompt("Ingrese el nuevo nombre");
        let nuevo_precio = prompt("Ingrese el nuevo precio");
        console.log(nuevo_precio);
        if (!nuevo_src || !nuevo_nombre || !nuevo_precio){
            alert("Error!, debe completar todos los campos solicitados.")
        }else{
            let div_padre = btn.parentNode;
            let div_producto = div_padre.parentNode;

            let img = div_producto.childNodes[3];
            img.src = nuevo_src;
            
            let nombre = div_producto.childNodes[5];
            nombre.textContent = nuevo_nombre;

            let precio = div_producto.childNodes[7];
            precio.textContent = "$" + " " + nuevo_precio + ",00";
        }
    })
})