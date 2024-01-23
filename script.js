
function changeTheme(){
    let body=document.querySelector("body");

    body.classList.toggle("dark");
}

let themeButton = document.querySelector (".theme-button");
themeButton.addEventListener ('click', changeTheme);
 




let buttons =document.querySelector ('.buttons');
let btn = buttons.querySelectorAll('.btn');
for (var i = 0; i <btn.length; i++){
    btn[i].addEventListener('click',function(){
        let current = document.getElementsByClassName ('.active');
        current[0].className=current[0].className.replace(" active", "");
        this.className+= " active";
    })
}