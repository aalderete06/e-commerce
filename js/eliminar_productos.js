var eliminar_btn = document.querySelectorAll(".eliminar");

eliminar_btn.forEach(btn => {
    btn.addEventListener("click", function(){
        let contenedor = btn.parentNode;
        let div_contenedor = contenedor.parentNode;
        div_contenedor.remove();
        eliminar_btn();
    })
})


