var login_btn = document.querySelector(".login__form__btn");

login_btn.addEventListener("click", function(){
    localStorage.setItem("logueado", true);
})