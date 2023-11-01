(function () {
    let formArray = [];
    let option = document.querySelector('option');
    let formName = document.getElementById('name');
    let email = document.getElementById('e-mail');
    // let button = document.querySelector('btn');
    let form = document.getElementById('form');
    let obj = {
        number : option.value,
        name : formName.value,
        email : email.value
    };
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        formArray.push(obj);
        
        
        console.log(formArray);    
        
    })
})();