document.addEventListener('DOMContentLoaded', () => {
    (function () {
        'use strict';

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation');

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    event.preventDefault();
                    if (!form.checkValidity()) {
                        event.preventDefault();
                        event.stopPropagation();
                    }

                    form.classList.add('was-validated');
                }, false);
            });
    })();

    let formbutton = document.getElementById("btn");
function promiseApi1(name , age)
{
 return new Promise((resolve , reject) => {
        setTimeout(() => {
            if(age > 18)
            {
                resolve(
                    alert(`Welcome, ${name}. You can vote.`)
                )
            }
            else
            {
                 alert(`Oh sorry ${name}. You aren't old enough.`)
            }
        } , 4000)
 })
 
}
formbutton.addEventListener("click" , (event) => {
    event.preventDefault();
    let nameinput = document.getElementById("name").value;
    let ageinput = document.getElementById("age").value;
        promiseApi1(nameinput, Number(ageinput));
});
});
