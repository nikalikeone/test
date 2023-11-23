(function () {
    let formArray = [];
    let select = document.getElementById('select');
    let formName = document.getElementById('name');
    let email = document.getElementById('e-mail');
    let form = document.getElementById('form');
    let formData = {};
    let outputBlock = document.getElementById('json_result');
    let input = document.querySelector('input');

    select.addEventListener('change', function (e) {
        formData.number = select.value;
    });

    formName.addEventListener('change', function (e) {
        formData.name = formName.value
    });

    email.addEventListener('change', function (e) {
        formData.email = email.value;
    });


    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let output = document.createElement('p');

        formArray.push(formData); 
        output.textContent = JSON.stringify(formData);
        
        outputBlock.appendChild(output);

        return false;
    })

})();