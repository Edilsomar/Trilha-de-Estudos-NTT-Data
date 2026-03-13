var username = document.getElementById('name');
var email = document.getElementById('email');
var text = document.getElementById('text');

function submit(){
    if(username.value.length == 0 ||email.value.length == 0 ||text.value.length == 0){
        window.alert("[ERROR] There are some empty fields")
    }else{
        var res = document.getElementById('res')
        var create = document.createElement('p')
        create.style = "padding-top: 20px;"; 
        create.innerText = 'Thank you for contacting us! We will get in touch soon.'
        res.appendChild(create)
    }
}
