(function(){
    const btn = document.querySelector('.btn-warning');
    const text = document.querySelector('.header');
    const header = document.querySelector('.header');

    btn.addEventListener("click", clickButton);

    function clickButton () {
        if (header.classList.contains("hidden")) {
            text.setAttribute("aria-hidden", "true");
        } else {
            text.setAttribute("aria-hidden", "false");
        }
        content.classList.toggle("hidden")
    }

  





    

})